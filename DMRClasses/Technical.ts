export class DMRTechnical {
  Weight: Weight;
  Engine: Motor;
  Bodywork: Bodywork;
  Environment: Environment;

  constructor() {
    this.Weight = new Weight();
    this.Engine = new Motor();
    this.Bodywork = new Bodywork();
    this.Environment = new Environment();
  }
}

export class Weight {
  TechnicalTotalWeight: string;
  TotalWeight: string;
  Minimum: string;
  WagonWeight: string;

  constructor() {
    this.TechnicalTotalWeight = "";
    this.TotalWeight = "";
    this.Minimum = "";
    this.WagonWeight = "";
  }
}

export class Motor {
  Marking: string;
  PowerSource: string;
  FuelConsumption: number;
  MaxSpeed: number;
  Displacement: number;
  Power: number;
  Cylinders: number;

  constructor() {
    this.Marking = "";
    this.PowerSource = "";
    this.FuelConsumption = 0;
    this.MaxSpeed = 0;
    this.Displacement = 0;
    this.Power = 0;
    this.Cylinders = 0;
  }
}

export class Bodywork {
  BodyworkType: string;
  NumberOfDoors: number;
  WheelsTires: string;
  NumberOfSeats: number;

  constructor() {
    this.BodyworkType = "";
    this.NumberOfDoors = 0;
    this.WheelsTires = "";
    this.NumberOfSeats = 0;
  }
}

export class Environment {
  CO2: number;
  ParticulateFilter: boolean;
  EuroNorm: string;

  constructor() {
    this.CO2 = 0;
    this.ParticulateFilter = false;
    this.EuroNorm = "";
  }
}
