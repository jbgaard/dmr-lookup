export class DMRBaseinfo {
	Vehicle: Vehicle;
	Registration: RegistrationConditions;
	Identification: Identification;
	// Equipment: Udstyr;

	constructor() {
		this.Vehicle = new Vehicle();
		this.Registration = new RegistrationConditions();
		this.Identification = new Identification();
		// this.Equipment = new Udstyr();
	}
}

export class Vehicle {
	VIN: string;
	MakeModel: string;
	Variant: string;
	LatestChange: Date;
	EFTypeCertification: string;

	constructor() {
		this.VIN = '';
		this.MakeModel = '';
		this.Variant = '';
		this.LatestChange = new Date();
		this.EFTypeCertification = '';
	}
}

export class RegistrationConditions {
	RegistrationNumber: string;
	FirstRegistration: Date;
	Application: string;
	LatestChange: Date;
	Status: string;
	Type: string;
	EUVariant: string;
	EUVersion: string;
	Category: string;
	Manufacturer: string;

	constructor() {
		this.RegistrationNumber = '';
		this.FirstRegistration = new Date();
		this.Application = '';
		this.LatestChange = new Date();
		this.Status = '';
		this.Type = '';
		this.EUVariant = '';
		this.EUVersion = '';
		this.Category = '';
		this.Manufacturer = '';
	}
}

export class Identification {
	Color: string;
	ModelYear: number | null;
	VehicleID: string;

	constructor() {
		this.Color = '';
		this.ModelYear = 0;
		this.VehicleID = "";
	}
}

export class Udstyr {
	AmountAirbgs: number;
	OtherEquipment: string;

	constructor() {
		this.AmountAirbgs = 0;
		this.OtherEquipment = '';
	}
}