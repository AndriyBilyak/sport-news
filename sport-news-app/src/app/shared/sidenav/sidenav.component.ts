import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { Router, } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('toggleInput', {static: false}) toggleInput: HTMLInputElement;
  navigationItems = [];
  opened = window.innerWidth > 768;
  mobile = window.innerWidth < 768;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.opened = window.innerWidth > 768;
    this.mobile = window.innerWidth > 768;
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.getNavigationItems();
    console.log(this.navigationItems);
  }

  private getNavigationItems() {
    this.navigationItems = this.router.config.map(routes => {
      return {
        path: routes.path,
        active: (routes.path === 'home')
      };
    });
  }

  changeActive(menuItem) {
    if (window.innerWidth < 768) {
      this.opened = false;
    }
    this.navigationItems.forEach((item) => {
      item.active = false;
    });
    menuItem.active = true;
  }

  toggleSideNav() {
    this.opened = !this.opened;
  }
}
