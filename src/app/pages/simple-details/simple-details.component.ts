import { Component, OnInit } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-simple-details',
  templateUrl: './simple-details.component.html',
  styleUrls: ['./simple-details.component.scss']
})
export class SimpleDetailsComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<SimpleDetailsComponent>) { }

  ngOnInit(): void {
  }

}
