import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Language: string = "en-US";
  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'ar', label: 'Arabic' }
  ]
  title = 'Rpeep';

  ChangeLang(code: string)
  {
    this.Language = code;
  }
}
