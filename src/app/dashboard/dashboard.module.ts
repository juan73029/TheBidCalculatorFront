import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { TotalInfoComponent } from './components/total-info/total-info.component';
import { TextboxCalculatorComponent } from './components/textbox-calculator/textbox-calculator.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [

    TotalInfoComponent,
    TextboxCalculatorComponent,
    DashboardLayoutComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule,

  ]
})
export class DashboardModule { }
