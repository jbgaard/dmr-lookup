import { DMR_SERVICE_URL } from "./appconstants.js";
// Imports
import { BildataFull } from "./DMRClasses/DMR.js";

// Get vehicle info
export const getVehicleInfo = async (
  registrationNumber: string,
): Promise<BildataFull> => {
  // Get vehicle info
  const response = await fetch(
    `${DMR_SERVICE_URL}/api/dmr/licenseplate/search/${registrationNumber}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  // Return vehicle info
  return response.json() as Promise<BildataFull>;
};

// TODO: Implement getVehicleInfoByVin
// Get vehicle info by VIN
export const getVehicleInfoByVin = async (
  vin: string,
): Promise<BildataFull> => {
  throw new Error("Not implemented");
};
