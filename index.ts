import { getVehicleInfo, getVehicleInfoByVin } from "./api.js";
import { BildataFull } from "./DMRClasses/DMR.js";
import chalk from "chalk";
import { VERSION } from "./appconstants.js";
import ora from "ora";
import { DateTime } from "ts-luxon";

export function main() {
  /* Get input parameters */
  const args = process.argv.slice(2);

  /* Get the command */
  const command = args[0];

  /* Get the command arguments */
  const commandArgs = args.slice(1);

  // Switch
  switch (command) {
    case "--version":
    case "-v":
      console.log(VERSION);
      break;
    case "--vin":
      getVehicleInfoByVin(commandArgs[0]);
      break;
    default:
      // If empty command
      if (command == null || command == "") {
        console.log("No command specified. V.", VERSION);
        process.exit(1);
      }

      // Start spinner
      const spinner = ora("Henter køretøjsinformationer").start();

      // Get vehicle info
      getVehicleInfo(command)
        .then((vehicleInfo) => {
          // Check if --raw flag is set
          const raw = commandArgs.includes("--raw");

          // Stop spinner
          spinner.succeed(`Køretøjet med nummerplade ${command} er fundet.`);

          // Pretty print vehicle info
          PrettyPrint(vehicleInfo, raw);
        })
        .catch((error: Error) => {
          // console.error(error);

          // If error is 404, print error message
          if (error.message.includes("404")) {
            spinner.fail(`Køretøjet med nummerplade ${command} findes ikke.`);
            return;
          }

          // If error is 401, print error message
          if (error.message.includes("401")) {
            spinner.fail("Ugyldig API nøgle.");
            return;
          }

          spinner.fail(
            `Kunne ikke hente køretøjsinformationer: ${error.message}`,
          );
        });
      break;
  }
}

// Pretty print
export function PrettyPrint(info: BildataFull, raw: boolean = false) {
  // If raw, print raw JSON
  if (raw) {
    console.log(JSON.stringify(info, null, 2));
    return;
  }

  // Print vehicle info
  // console.log(chalk.bgGreen.bold('          === Køretøj informationer ===          '));
  console.log(
    chalk.bold(`Mærke/Model:          %s`),
    info.Baseinfo.Vehicle.MakeModel,
  );
  console.log(
    chalk.gray(`Motor:               `),
    info.Technical.Engine.PowerSource != undefined
      ? info.Technical.Engine.PowerSource
      : "",
    info.Technical.Engine.Power != undefined && info.Technical.Engine.Power != 0
      ? `${(info.Technical.Engine.Power / 10 / 0.7355).toFixed(0)}hk`
      : "",
    info.Technical.Engine.Displacement != undefined &&
      info.Technical.Engine.Displacement != 0
      ? `${info.Technical.Engine.Displacement}cc`
      : "",
    info.Technical.Engine.Cylinders != undefined &&
      info.Technical.Engine.Cylinders != 0
      ? `${info.Technical.Engine.Cylinders} cylindre`
      : "",
  );
  console.log(
    chalk.gray(`Registreringsnummer: `),
    info.Baseinfo.Registration.RegistrationNumber,
  );
  console.log(chalk.gray(`Stelnummer:          `), info.Baseinfo.Vehicle.VIN);
  console.log(
    chalk.gray(`Art:                 `),
    info.Baseinfo.Vehicle.Variant,
  );
  console.log(
    chalk.gray(`Første registrering: `),
    info.Baseinfo.Registration.FirstRegistration != null
      ? DateTime.fromJSDate(
          new Date(info.Baseinfo.Registration.FirstRegistration),
        ).toFormat("dd. LLL. yyyy")
      : "N/A",
  );
  console.log(
    chalk.gray(`Status:              `),
    info.Baseinfo.Registration.Status,
  );

  if (info.Baseinfo.Registration.RegistrationNumber != null)
    console.log(
      chalk.gray(`Læs mere:            `),
      `https://nrpla.de/${info.Baseinfo.Registration.RegistrationNumber}`,
    );
}
