import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('toggleInput', { static: false }) toggleInput: HTMLInputElement;
  navigationItems = [];
  opened = window.innerWidth > 768;
  mobile = window.innerWidth < 768;
  openedSubMenu = false;
  thirdLevelMenuOpened = false;
  currentThirdLevelMenuItems = [];
  submenuItems = {
    nba: [
      {
        name: 'AFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
    ],
    nfl: [
      {
        name: 'AFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
    ],
    mlb: [
      {
        name: 'AFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
    ],
    nhl: [
      {
        name: 'AFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
    ],
    cbb: [
      {
        name: 'AFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
    ],
    cfb: [
      {
        name: 'AFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
    ],
    nascar: [
      {
        name: 'AFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
    ],
    golf: [
      {
        name: 'AFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
    ],
    soccer: [
      {
        name: 'AFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'AFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC East',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Nourth',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC Sought',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
      {
        name: 'NFC West',
        subElements: ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'],
        opened: false,
      },
    ],
  };
  currentSubMenu = [];
  currentSubMenuName = '';
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.opened = window.innerWidth > 768;
    this.mobile = window.innerWidth < 768;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.getNavigationItems();
  }

  private getNavigationItems() {
    this.navigationItems = [];
    this.router.config.forEach(routes => {
      if (
        routes.path !== 'login' &&
        routes.path !== '**' &&
        routes.path &&
        routes.path !== 'company' &&
        routes.path !== 'contributors'
      ) {
        this.navigationItems.push({
          path: routes.path,
          active: routes.path === 'home',
          custom:
            routes.path === 'nba' ||
            routes.path === 'nfl' ||
            routes.path === 'mlb' ||
            routes.path === 'nhl' ||
            routes.path === 'cbb' ||
            routes.path === 'cfb' ||
            routes.path === 'soccer' ||
            routes.path === 'nascar' ||
            routes.path === 'golf',
        });
      }
    });
  }

  changeActive(menuItem) {
    if (menuItem.custom) {
      this.openedSubMenu = true;
      this.currentSubMenu = this.submenuItems[menuItem.path];
      this.currentSubMenuName = menuItem.path;
    } else {
      if (window.innerWidth < 768) {
        this.opened = false;
      }
      this.openedSubMenu = false;
      this.thirdLevelMenuOpened = false;
    }
    this.navigationItems.forEach(item => {
      item.active = false;
    });
    menuItem.active = true;
  }

  toggleSideNav() {
    if (this.opened && this.openedSubMenu) {
      this.openedSubMenu = false;
    }
    this.opened = !this.opened;
  }

  openSubMenu(item) {
    this.currentSubMenu.forEach(menuItem => {
      menuItem.opened = false;
    });
    item.opened = true;
  }

  openThirdLevelMenu(item) {
    this.currentThirdLevelMenuItems = item.subElements;
    this.thirdLevelMenuOpened = true;
    this.currentSubMenu.forEach(menuItem => {
      menuItem.active = false;
    });
    item.active = true;
  }

  thirdLevelMenuItemClick() {
    this.thirdLevelMenuOpened = false;
    this.openedSubMenu = false;
    if (this.mobile) {
      this.opened = false;
    }
  }
}
