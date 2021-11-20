import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackEndPage } from './back-end.page';

const routes: Routes = [
  {
    path: '',
    component: BackEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackEndPageRoutingModule {}
