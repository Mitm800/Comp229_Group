import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdoptComponent } from './pages/adopt/adopt.component';
import { AboutanimalsComponent } from './pages/aboutanimals/aboutanimals.component';
import { ModelModule } from './model/model.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    BasePageComponent,
    AboutUsComponent,
    AdoptComponent,
    AboutanimalsComponent,
  ],
  imports: [
    ModelModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
