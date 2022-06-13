import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  personalDetailsState : boolean = true;
  wishListState : boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  showWishlist ()
  {
    this.personalDetailsState = false;
    this.wishListState = true;
  }

  showPersonalDetails()
  {
    this.personalDetailsState = true;
    this.wishListState = false;
  }



}
