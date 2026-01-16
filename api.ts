import { DMR_SERVICE_URL } from "./appconstants.js";
// Imports
import axios, { AxiosInstance } from "axios";
import { BildataFull } from "./DMRClasses/DMR.js";

// Create http client
const createHttpClient = (): AxiosInstance => {
  // Create axios instance
  const httpClient = axios.create({
    baseURL: DMR_SERVICE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // Return http client
  return httpClient;
};

// Get vehicle info
export const getVehicleInfo = async (
  registrationNumber: string,
): Promise<BildataFull> => {
  // Get http client
  const httpClient = createHttpClient();

  // Get vehicle info
  const response = await httpClient.get(
    `/api/dmr/licenseplate/search/${registrationNumber}`,
  );

  // Return vehicle info
  return response.data;
};

// TODO: Implement getVehicleInfoByVin
// Get vehicle info by VIN
export const getVehicleInfoByVin = async (
  vin: string,
): Promise<BildataFull> => {
  throw new Error("Not implemented");
};
