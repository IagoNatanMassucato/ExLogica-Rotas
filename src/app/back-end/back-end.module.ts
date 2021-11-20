import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackEndPageRoutingModule } from './back-end-routing.module';

import { BackEndPage } from './back-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackEndPageRoutingModule
  ],
  declarations: [BackEndPage]
})
export class BackEndPageModule {}
