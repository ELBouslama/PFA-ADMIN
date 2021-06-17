import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard',     title: 'Dashboard',         icon: 'fa fa-th-large',       class: '' },
  { path: '/orders',          title: 'Orders',              icon: 'fas fa-clipboard-list',      class: '' },
  { path: '/videos',         title: 'Videos',             icon: 'fa fa-youtube',    class: '' },
  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  public menuItems: any[];

  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
