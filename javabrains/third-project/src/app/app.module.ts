import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SampleModule } from './sample/sample.module';
import { TestModule } from './test/test.module';
import { LogService } from './log.service';
import { GithubModule } from './github/github.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SampleModule,
    TestModule,
    HttpClientModule,
    GithubModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
