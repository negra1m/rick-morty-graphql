
import { MainPageComponent } from './screens/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewerComponent } from './screens/card-viewer/card-viewer.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'details', component: CardViewerComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
