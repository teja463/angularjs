import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { Logs } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private LogSvc: LogService;
  constructor(LogSvc: LogService, private http: HttpClient){
    this.LogSvc = LogSvc;
    LogSvc.debug('Services works')
  }

  ngOnInit(): void {
    let api = this.http.get('https://api.github.com/users/teja463');
    api.subscribe((response) => { console.log(response);});
  }
}
