import { DMRTechnical as DMRTechnical } from "./Technical.js";
import { DMRBaseinfo } from "./Baseinfo.js";
import { DMRInspection } from "./Inspection.js";
import { DMRForsikring } from "./Insurance.js";
import { DMRTaxes } from "./Taxes.js";

// Types
export class BildataMinified {
  Baseinfo: DMRBaseinfo;
  Insurance: DMRForsikring;

  constructor() {
    this.Baseinfo = new DMRBaseinfo();
    this.Insurance = new DMRForsikring();
  }
}

export class BildataFull {
  Baseinfo: DMRBaseinfo;
  Technical: DMRTechnical;
  Inspection: DMRInspection;
  Taxes: DMRTaxes;
  Insurance: DMRForsikring;

  constructor() {
    this.Baseinfo = new DMRBaseinfo();
    this.Technical = new DMRTechnical();
    this.Inspection = new DMRInspection();
    this.Taxes = new DMRTaxes();
    this.Insurance = new DMRForsikring();
  }
}
