import { Component, OnInit } from '@angular/core';
import { LogService } from '../../log.service';
import { GithubService } from './svc/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  userName: string;
  response: any;
  constructor(private LogSvc: LogService, private GithubSvc: GithubService) {

   }

  ngOnInit() {
  }

  search(){
    this.LogSvc.debug('search button works' + this.userName);
    this.GithubSvc.search(this.userName).subscribe((response) => {
      this.response = response;
      this.LogSvc.debug(response);
    });
  }
}
