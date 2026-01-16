export class DMRForsikring {
	Company: string | null;
	Status: string;
	Created: Date | null;

	constructor() {
		this.Company = null;
		this.Status = '';
		this.Created = null;
	}
}