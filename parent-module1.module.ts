import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { ParentModule2Module } from '../parent-module2/parent-module2.module';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    ParentModule2Module
  ],
  exports:[
    FirstComponent
  ]
})
export class ParentModule1Module { }
