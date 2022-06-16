import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './pages/profile/profile.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { LevelsComponent } from './pages/levels/levels.component';
import { PointsComponent } from './pages/points/points.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddressComponent } from './pages/address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    WishlistComponent,
    LevelsComponent,
    PointsComponent,
    SettingsComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
