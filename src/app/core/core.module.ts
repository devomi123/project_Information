import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './Services/common.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    CommonService
  ]
})
export class CoreModule { }
