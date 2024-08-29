import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpencelistComponent } from './expencelist/expencelist.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ExpencelistComponent}
]

@NgModule({
  declarations: [
    ExpencelistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ExpencelistComponent
  ]
})
export class ComponentsModule { }
