"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicleInfoByVin = exports.getVehicleInfo = void 0;
const appconstants_1 = require("./appconstants");
// Imports
const axios_1 = __importDefault(require("axios"));
// Create http client
const createHttpClient = () => {
    // Create axios instance
    const httpClient = axios_1.default.create({
        baseURL: appconstants_1.DMR_SERVICE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    // Return http client
    return httpClient;
};
// Get vehicle info
const getVehicleInfo = (registrationNumber) => __awaiter(void 0, void 0, void 0, function* () {
    // Get http client
    const httpClient = createHttpClient();
    // Get vehicle info
    const response = yield httpClient.get(`/api/${registrationNumber}`);
    // Return vehicle info
    return response.data;
});
exports.getVehicleInfo = getVehicleInfo;
// TODO: Implement getVehicleInfoByVin  
// Get vehicle info by VIN
const getVehicleInfoByVin = (vin) => __awaiter(void 0, void 0, void 0, function* () {
    throw new Error('Not implemented');
});
exports.getVehicleInfoByVin = getVehicleInfoByVin;
