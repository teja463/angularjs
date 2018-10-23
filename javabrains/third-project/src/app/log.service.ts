import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  debug(args){
    console.log(args);
  }

  error(args){
    console.error(args);
  }

}
