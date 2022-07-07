import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {DetailsComponent} from "./pages/details/details.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";

// const routes: Routes = [
//   // { path: '', component: HomeComponent },
//   // { path: 'profile', component: ProfileComponent },
//   // { path: 'contact', component: ContactComponent },
//   // { path: 'details', component: DetailsComponent},
//   // { path: 'checkout', component: CheckoutComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export class AppRoutingModule { }
