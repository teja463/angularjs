import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleCompComponent } from './sample-comp/sample-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SampleCompComponent],
  exports:[
    SampleCompComponent
  ]
})
export class SampleModule { }
