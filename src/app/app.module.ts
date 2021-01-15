import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ChartComponent } from './chart/chart.component';
import { AppRoutingModule } from './app-routing.module';
import {  CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { Observable } from 'rxjs-compat';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { GridComponent } from './grid/grid.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ChartComponent,
    GridComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatBadgeModule,
    CommonModule,
    LayoutModule,MatSliderModule,
    ChartsModule,
    ButtonsModule,
    IndicatorsModule,
    MatIconModule,
    IconsModule,
    TreeViewModule,
    TooltipModule,
    NavigationModule,
    AppRoutingModule, 
    GridModule,
    InputsModule,
    PDFModule,
    ExcelModule,
    // DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
