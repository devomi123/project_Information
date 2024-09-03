import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpencelistComponent } from './expencelist/expencelist.component';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { ChartsComponent } from './charts/charts.component';

const routes:Routes=[
  {path:'',component:ExpencelistComponent},
  {path:'charts',component:ChartsComponent},
  {path:'reports',component:ReportsComponent},
]

@NgModule({
  declarations: [
    ExpencelistComponent,
    ReportsComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ExpencelistComponent,
    ReportsComponent,
    ChartsComponent
  ]
})
export class ComponentsModule { }
