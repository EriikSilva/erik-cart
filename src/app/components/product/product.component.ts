import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList: any;
  public filterCategory: any;
  searchKey:string = "";


  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=> {
      this.productList = res;
      this.filterCategory = res;


      Array.from(this.productList).forEach((a:any) =>{
        if(a.category === "women's clothing" || "men's clothing"){
          a.category = 'fashion'
        }
        Object.assign(a,{quantity:1, total:a.price});//preco
      });

                                                                    // this.productList.foreach((a:any) =>{
                                                                    //   Object.assign(a,{quantity:1, total:a.price});
                                                                    // })
    
    })
    this.cartService.search.subscribe((val:any) =>{
      this.searchKey = val;
    })
  }

  addToCart(item:any){
    this.cartService.addToCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    })
  }


}
