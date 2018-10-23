import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github/github.component';
import {FormsModule} from '@angular/forms';
import { GithubService } from './github/svc/github.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    GithubService
  ],
  exports:[
    GithubComponent
  ],
  declarations: [GithubComponent]
})
export class GithubModule { }
