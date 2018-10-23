import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubApiService {

  readonly API_END_POINT: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) { 
  }

  getUserDetails(userName: string){
    return this.http.get(`${this.API_END_POINT}/${userName}`);
  }
}
