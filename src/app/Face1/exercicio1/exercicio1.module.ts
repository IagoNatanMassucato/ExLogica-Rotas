import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio1PageRoutingModule } from './exercicio1-routing.module';

import { Exercicio1Page } from './exercicio1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio1PageRoutingModule
  ],
  declarations: [Exercicio1Page]
})
export class Exercicio1PageModule {}
