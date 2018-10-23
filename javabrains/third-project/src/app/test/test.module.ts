import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompComponent } from './test-comp/test-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    TestCompComponent
  ],
  declarations: [TestCompComponent]
})
export class TestModule { }
