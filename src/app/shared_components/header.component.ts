import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header rounded border">
      <nav class="nav nav-pills nav-justified">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link active" routerLink="/">Products</a>
        <a class="nav-link disabled" href="#">Disabled</a>
      </nav>
    </header>
  `
})
export class HeaderComponent {}
