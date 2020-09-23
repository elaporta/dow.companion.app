import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrossroadsPage } from './crossroads.page';

const routes: Routes = [
  {
    path: '',
    component: CrossroadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrossroadsPageRoutingModule {}
