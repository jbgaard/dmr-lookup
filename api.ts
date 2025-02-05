import { DMR_SERVICE_URL } from './appconstants';
// Imports
import axios, { AxiosInstance } from 'axios';

// Create http client
const createHttpClient = () : AxiosInstance => {

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
    
}

// Get vehicle info
export const getVehicleInfo = async (registrationNumber: string) : Promise<VehicleInfo> => {

    // Get http client
    const httpClient = createHttpClient();

    // Get vehicle info
    const response = await httpClient.get(`/api/${registrationNumber}`);

    // Return vehicle info
    return response.data;

}

// TODO: Implement getVehicleInfoByVin  
// Get vehicle info by VIN
export const getVehicleInfoByVin = async (vin: string) : Promise<VehicleInfo> => {
    throw new Error('Not implemented');
}

// *** TYPES ***
// Type for GetVehicleInfo response
export interface VehicleInfo {
    
    // Køretøj
    køretøj: {
        køretøj: {
            stelnummer?: string,
            mærkeModel?: string,
            art?: string,
            senesteÆndring?: string,
            efTypeGodkendelse?: string,
        },
        registreringsforhold: {
            registreringsNummer?: string,
            førsteRegistrering?: string,
            anvendelse?: string,
            sensteÆndring?: string,
            status?: string,
            type?: string,
            euVariant?: string,
            euVersion?: string,
            kategori?: string,
            fabrikat?: string,
        },
        identifikation: {
            farve?: string,
            modelÅr?: number,
            ncaP5?: boolean,
        },
        udstyr: {
            antalAirbags?: number,
            andetUdstyr?: string,
        }
    },
    teknisk: {
        vægt: {
            tekniskTotalVægt?: number,
            totalVægt?: number,
            minimum?: number,
            vogntogsvægt?: number,
        },
        motor: {
            mærkning?: string,
            drivkraft?: string,
            brændstofforbrug?: number,
            maksHastighed?: number,
            slagVolumen?: number,
            effekt?: number,
            cylindre?: number,
        },
        karosseri: {
            karosseriType?: string,
            antalDøre?: number,
            fælgeDæk?: string,
            antalSidepladser?: number,
        },
        miljø: {
            c02?: number,
            partikelfilter?: boolean,
            partikeludledning?: string,
        }
    },
    syn: {
        godkendt?: boolean,
        synsDato?: string,
    },
    afgifter?: { 
        grønUdligningsafgiftHyppighed?: string,
        grønUdligningsafgiftBeløb?: string,
        grønEjerafgiftHyppighed?: string,
        grønEjerafgiftBeløb?: string,
        sum?: string,
    },
    forsikring: {
        forsikring?: string,
        aktiv?: boolean,
        oprettet?: string,
    }, 
    vehicleViewReport: {
        regnr?: string,
        totalVisits?: number,
        lastVisit?: string,
    }
    
}
