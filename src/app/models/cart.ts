import {Product} from "./product";
import {User} from "./user";

export class Cart {

  idCart !: any;
  productsList !: Product[];
  total : any;
  quantity : any;
  user !: User;

}
