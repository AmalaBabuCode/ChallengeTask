import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() showBackBtn: any;
  @Input() navText: any;

  public navbarOpen = false;

  constructor(private location: Location) { }

  ngOnInit(): void { }

  navigateToGraphList() {
    this.location.back();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
