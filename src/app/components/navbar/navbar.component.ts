import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  Language: string = "en-US";
  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'ar', label: 'Arabic' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ChangeLang(code: string)
  {
    this.Language = code;
  }

}
