import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { 

  }
  API_END_POINT: string = "https://api.github.com/users";

  search(userName: string){
    console.log('Github Service, User name recieved: '+userName);
    return this.http.get(this.API_END_POINT+'/'+userName);
  }
}
