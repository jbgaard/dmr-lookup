import { DMR_SERVICE_URL } from './appconstants.js';
// Imports
import axios from 'axios';
// Create http client
const createHttpClient = () => {
    // Create axios instance
    const httpClient = axios.create({
        baseURL: DMR_SERVICE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    // Return http client
    return httpClient;
};
// Get vehicle info
export const getVehicleInfo = async (registrationNumber) => {
    // Get http client
    const httpClient = createHttpClient();
    // Get vehicle info
    const response = await httpClient.get(`/api/${registrationNumber}`);
    // Return vehicle info
    return response.data;
};
// TODO: Implement getVehicleInfoByVin  
// Get vehicle info by VIN
export const getVehicleInfoByVin = async (vin) => {
    throw new Error('Not implemented');
};
