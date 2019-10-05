import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientdetailPage } from './patientdetail';

@NgModule({
  declarations: [
    PatientdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientdetailPage),
  ],
})
export class PatientdetailPageModule {}
