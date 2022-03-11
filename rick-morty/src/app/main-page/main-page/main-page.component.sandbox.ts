import { sandboxOf } from 'angular-playground';
import { MainPageComponent } from '../main-page.component';

export default sandboxOf(MainPageComponent)
  .add('default', {
    template: `<app-main-page></app-main-page>`
  });
