import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { ChartComponent } from './chart/chart.component';
import { GridComponent } from './grid/grid.component';
import { TooltipComponent } from './tooltip/tooltip.component';
const routes: Routes = [
  { path: '',   redirectTo: '/grid', pathMatch: 'full' },
   {path: 'grid', component:GridComponent},
  {path:'buttons', component:ButtonComponent},
  {path: 'charts', component:ChartComponent},
  {path:'tooltips',component:TooltipComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
