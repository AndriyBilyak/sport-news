import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  navigationItems = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.getNavigationItems()
  }

  private getNavigationItems() {
    this.navigationItems = this.router.config.map(routes => routes.path)
  }
}
