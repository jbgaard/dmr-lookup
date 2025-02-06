#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = version;
exports.PrettyPrint = PrettyPrint;
const api_1 = require("./api");
const chalk_1 = __importDefault(require("chalk"));
const appconstants_1 = require("./appconstants");
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
        console.log(version());
        break;
    case '--vin':
        (0, api_1.getVehicleInfoByVin)(commandArgs[0]);
        break;
    default:
        // If empty command
        if (command == null || command == '') {
            console.log('No command specified. V.', version());
            process.exit(1);
        }
        (0, api_1.getVehicleInfo)(command).then((vehicleInfo) => {
            // Check if --raw flag is set
            const raw = commandArgs.includes('--raw');
            // Pretty print vehicle info
            PrettyPrint(vehicleInfo, raw);
        }).catch((error) => {
            console.error(error);
        });
        break;
}
// FUNCTIONS
function version() {
    // Get version from package.json
    return appconstants_1.VERSION;
}
// Pretty print
function PrettyPrint(info, raw = false) {
    // If raw, print raw JSON
    if (raw) {
        console.log(JSON.stringify(info, null, 2));
        return;
    }
    // Print vehicle info
    // console.log(chalk.bgGreen.bold('          === Køretøj informationer ===          '));
    console.log(chalk_1.default.bgBlack.bold(`Mærke/Model:          %s`), info.køretøj.køretøj.mærkeModel);
    console.log(chalk_1.default.gray(`Motor:               `), info.teknisk.motor.drivkraft);
    console.log(chalk_1.default.gray(`Registreringsnummer: `), info.køretøj.registreringsforhold.registreringsNummer);
    console.log(chalk_1.default.gray(`Stelnummer:          `), info.køretøj.køretøj.stelnummer);
    console.log(chalk_1.default.gray(`Art:                 `), info.køretøj.køretøj.art);
    console.log(chalk_1.default.gray(`Første registrering: `), info.køretøj.registreringsforhold.førsteRegistrering != null ? new Date(info.køretøj.registreringsforhold.førsteRegistrering).toLocaleDateString() : 'N/A');
    console.log(chalk_1.default.gray(`Status:              `), info.køretøj.registreringsforhold.status);
}
