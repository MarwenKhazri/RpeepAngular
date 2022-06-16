import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  personalDetailsState : boolean = true;
  wishListState : boolean = false;
  levelState : boolean = false;
  pointsState : boolean = false;
  settingsState : boolean = false;
  addressInfoState : boolean = false;


  constructor() { }

  ngOnInit(): void
  {

  }

  showWishlist ()
  {
    this.personalDetailsState = false;
    this.wishListState = true;
    this.levelState = false;
    this.pointsState = false;
    this.settingsState = false;
    this.addressInfoState = false;

  }

  showPersonalDetails()
  {
    this.personalDetailsState = true;
    this.wishListState = false;
    this.levelState = false;
    this.pointsState = false;
    this.settingsState = false;
    this.addressInfoState = false;



  }

  showLevels()
  {
    this.levelState = true;
    this.personalDetailsState = false;
    this.wishListState = false;
    this.pointsState = false;
    this.settingsState = false;
    this.addressInfoState = false;



  }

  showPoints()
  {
    this.levelState = false;
    this.personalDetailsState = false;
    this.wishListState = false;
    this.pointsState = true;
    this.settingsState = false;
    this.addressInfoState = false;


  }

  showSettings()
  {
    this.settingsState = true;
    this.levelState = false;
    this.personalDetailsState = false;
    this.wishListState = false;
    this.pointsState = false;
    this.addressInfoState = false;

  }

  showAddressInfo()
  {
    this.addressInfoState = true;
    this.settingsState = false;
    this.levelState = false;
    this.personalDetailsState = false;
    this.wishListState = false;
    this.pointsState = false;

  }



}
