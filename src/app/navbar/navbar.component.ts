import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {navbarItems} from './navbar.items';

@Component({
  selector: 'jo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  envText = 'PRODUCTION';
  items = navbarItems;

  constructor() { }

  ngOnInit() {
    if (!environment.production) {
      this.envText = `DEVELOPMENT (${environment.dataSource})`;
    }
  }

}
