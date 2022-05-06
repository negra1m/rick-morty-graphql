import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="toolbar" role="banner">
    <h1>Rick n Morty's list</h1>
  </div>`,
styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
