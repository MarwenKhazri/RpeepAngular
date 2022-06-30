import { Component, OnInit } from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {SimpleDetailsComponent} from "../simple-details/simple-details.component";
import {ComplexDetailsComponent} from "../complex-details/complex-details.component";
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalRef: MdbModalRef<SimpleDetailsComponent> | null = null;
  complexModalRef: MdbModalRef<ComplexDetailsComponent> | null = null;
  cartModalRef : MdbModalRef<CartComponent> | null = null;


  constructor(private modalService: MdbModalService) { }

  openModal() {
    this.modalRef = this.modalService.open(SimpleDetailsComponent,
      {
        modalClass: 'modal-lg'
      })
  }

  openComplexModal() {
    this.complexModalRef = this.modalService.open(ComplexDetailsComponent)
  }

  openCart() {
    this.cartModalRef = this.modalService.open(CartComponent)
  }

  ngOnInit(): void {
  }

}
