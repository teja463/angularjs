import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User;
  @Input('sample-str') sampleStr: string;
  @Input('sample-num') sampleNum: number;
  isCollapsed: boolean = true;

  constructor() { 
  }

  ngOnInit() {
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
}
