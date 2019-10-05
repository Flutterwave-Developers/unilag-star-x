import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatepatientPage } from './createpatient';

@NgModule({
  declarations: [
    CreatepatientPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatepatientPage),
  ],
})
export class CreatepatientPageModule {}
