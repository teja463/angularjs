import { Component, OnInit } from '@angular/core';
import { GithubApiService } from './svc/github-api.service';

@Component({
  selector: 'github-client',
  templateUrl: './github-client.component.html',
  styleUrls: ['./github-client.component.css']
})
export class GithubClientComponent implements OnInit {

  constructor(private GithubSvc: GithubApiService) { }

  response: any;
  userName: string;

  ngOnInit() {
  }

  search(){
    console.log('search worked'+this.userName);
    this.GithubSvc.getUserDetails(this.userName).subscribe((response) => { this.response = response; });
  }
}
