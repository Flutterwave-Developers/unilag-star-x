import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CreatepatientPage } from "../createpatient/createpatient";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  createPatient() {
    this.navCtrl.push(CreatepatientPage, null, {
      animate: true,
      animation: "transition-ios",
      direction: "forward"
    });
  }
}
