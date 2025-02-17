import { getVehicleInfo, getVehicleInfoByVin } from "./api.js";
import chalk from 'chalk';
import { VERSION } from "./appconstants.js";
import ora from 'ora';
import pkg from 'ts-luxon';
const { DateTime } = pkg;
export function main() {
    /* Get input parameters */
    const args = process.argv.slice(2);
    /* Get the command */
    const command = args[0];
    /* Get the command arguments */
    const commandArgs = args.slice(1);
    // Switch
    switch (command) {
        case '--version':
        case '-v':
            console.log(VERSION);
            break;
        case '--vin':
            getVehicleInfoByVin(commandArgs[0]);
            break;
        default:
            // If empty command
            if (command == null || command == '') {
                console.log('No command specified. V.', VERSION);
                process.exit(1);
            }
            // Start spinner
            const spinner = ora("Henter køretøjsinformationer").start();
            // Get vehicle info
            getVehicleInfo(command).then((vehicleInfo) => {
                // Check if --raw flag is set
                const raw = commandArgs.includes('--raw');
                // Stop spinner
                spinner.stop();
                // Pretty print vehicle info
                PrettyPrint(vehicleInfo, raw);
            }).catch((error) => {
                console.error(error);
            });
            break;
    }
}
// Pretty print
export function PrettyPrint(info, raw = false) {
    // If raw, print raw JSON
    if (raw) {
        console.log(JSON.stringify(info, null, 2));
        return;
    }
    // Print vehicle info
    // console.log(chalk.bgGreen.bold('          === Køretøj informationer ===          '));
    console.log(chalk.bgBlack.bold(`Mærke/Model:          %s`), info.køretøj.køretøj.mærkeModel);
    console.log(chalk.gray(`Motor:               `), info.teknisk.motor.drivkraft);
    console.log(chalk.gray(`Registreringsnummer: `), info.køretøj.registreringsforhold.registreringsNummer);
    console.log(chalk.gray(`Stelnummer:          `), info.køretøj.køretøj.stelnummer);
    console.log(chalk.gray(`Art:                 `), info.køretøj.køretøj.art);
    console.log(chalk.gray(`Første registrering: `), info.køretøj.registreringsforhold.førsteRegistrering != null ? DateTime.fromJSDate(new Date(info.køretøj.registreringsforhold.førsteRegistrering)).toFormat("DD") : 'N/A');
    console.log(chalk.gray(`Status:              `), info.køretøj.registreringsforhold.status);
}
