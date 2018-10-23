import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  sampleInput: string = "This is from app.component.ts";

  user: User;
  constructor(){
    this.user = new User();
    this.user.name = "Teja";
    this.user.title = "Module Lead";
    this.user.address ="RR Nagar";
    this.user.phone = ['9620144499', '8885109697'];
  }
}
