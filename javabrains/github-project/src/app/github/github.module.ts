import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubClientComponent } from './github-client/github-client.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GithubApiService } from './github-client/svc/github-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    GithubClientComponent,
  ],
  providers:[
    GithubApiService
  ],
  declarations: [GithubClientComponent]
})
export class GithubModule { }
