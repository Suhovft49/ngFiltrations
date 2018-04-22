import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
