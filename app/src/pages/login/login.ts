import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  show_password = false;
  password_input_type = "password";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  showPassword(value) {
    this.show_password = value;
  }
  gotoSignUp() {
    this.navCtrl.push(
      RegisterPage,
      {},
      {
        animate: true,
        animation: "transition-ios",
        duration: 200,
        direction: "backward"
      }
    );
  }

  homePage() {
    this.navCtrl.setRoot(HomePage, null, {
      animate: true,
      animation: "transition-ios",
      duration: 200,
      direction: "forward"
    });
  }
}
