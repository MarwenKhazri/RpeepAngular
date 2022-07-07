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
import { SimpleDetailsComponent } from './pages/simple-details/simple-details.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ComplexDetailsComponent } from './pages/complex-details/complex-details.component';
import { DetailsComponent } from './pages/details/details.component';
import {NgCircleProgressModule} from "ng-circle-progress";
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {RouterModule} from "@angular/router";


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
    SimpleDetailsComponent,
    ComplexDetailsComponent,
    DetailsComponent,
    CartComponent,
    CheckoutComponent,
  ],
    imports: [
        BrowserModule,
      RouterModule.forRoot([
        {path: 'home', component: HomeComponent},
        {path: 'profile', component: ProfileComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'checkout', component: CheckoutComponent},
        {path: '', redirectTo: '/home', pathMatch: 'full'},

      ]),

        NgbModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        MdbModalModule,
        NgCircleProgressModule.forRoot({
        // set defaults here
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: "#78C000",
        innerStrokeColor: "#C7E596",
        animationDuration: 300,
      })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
