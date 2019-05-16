import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar sticky-top navbar-light bg-light'>
      <a class='navbar-brand' [routerLink]="['/customers']"><img id="site-logo" src="../assets/images/logo.png" alt="logo"></a>
      <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/customers']">Customers</a></li>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/orders']">Orders</a></li>
      </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
