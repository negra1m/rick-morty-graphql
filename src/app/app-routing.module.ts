import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewerComponent } from './screens/card-viewer/card-viewer.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'main', component: AppComponent, loadChildren: () => import('./graphql.module').then(m => m.GraphQLModule) },
  { path: 'listing', component: CardViewerComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
