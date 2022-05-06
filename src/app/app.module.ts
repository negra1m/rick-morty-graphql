import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { GraphQLModule } from './graphql.module';
import { CardViewerComponent } from './screens/card-viewer/card-viewer.component';
import { MainPageComponent } from './screens/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardComponent,
    CardViewerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    TabViewModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 }
