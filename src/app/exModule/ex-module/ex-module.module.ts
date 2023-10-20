import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExModuleComponent } from "./ex-module.component";
import { ExModuleRoutingModule } from './ex-module-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ExModuleRoutingModule
  ],
  declarations: [ExModuleComponent]
})
export class ExModuleModule { }
