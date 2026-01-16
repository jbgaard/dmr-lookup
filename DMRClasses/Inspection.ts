export class DMRInspection {
    Approved: boolean;
    InspectionDate: Date | null;
	
	constructor() {
		this.Approved = false;
		this.InspectionDate = null;
	}
}