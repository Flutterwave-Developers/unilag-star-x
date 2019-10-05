import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPageModule } from "../pages/login/login.module";
import { RegisterPageModule } from "../pages/register/register.module";
import { PatientdetailPageModule } from "../pages/patientdetail/patientdetail.module";
import { NotesPageModule } from "../pages/notes/notes.module";
import { CreatepatientPageModule } from "../pages/createpatient/createpatient.module";
import { PaymentsPageModule } from "../pages/payments/payments.module";
import { PatientsPageModule } from "../pages/patients/patients.module";
import { IonBottomDrawerModule } from "ion-bottom-drawer";

@NgModule({
  declarations: [MyApp, HomePage, ListPage],
  imports: [
    BrowserModule,
    LoginPageModule,
    RegisterPageModule,
    CreatepatientPageModule,
    NotesPageModule,
    PatientdetailPageModule,
    PatientsPageModule,
    PaymentsPageModule,
    IonBottomDrawerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
