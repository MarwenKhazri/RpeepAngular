import { Component, OnInit } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-complex-details',
  templateUrl: './complex-details.component.html',
  styleUrls: ['./complex-details.component.scss']
})
export class ComplexDetailsComponent implements OnInit {

  ProductState: boolean = true;
  PrizeState: boolean = false;


  constructor(public modalRef: MdbModalRef<ComplexDetailsComponent>) { }

  ngOnInit(): void {
  }

  showProduct ()
  {
    this.ProductState = true;
    this.PrizeState = false;
  }

  showPrize ()
  {
    this.ProductState = false;
    this.PrizeState = true;
  }

}
