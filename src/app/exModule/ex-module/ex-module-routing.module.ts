import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ExModuleComponent } from './ex-module.component';

const rutasEx: Routes = [
  {
    path: '', component: ExModuleComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      rutasEx
    )
  ],
  exports: [RouterModule]
})
export class ExModuleRoutingModule { }
