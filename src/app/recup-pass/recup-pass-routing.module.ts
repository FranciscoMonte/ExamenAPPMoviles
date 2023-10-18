import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecupPassPage } from './recup-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RecupPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecupPassPageRoutingModule {}
