import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public AssetList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.AssetList.asObservable();
  }

  setProduct(postcard: any){
    this.cartItemList.push(...postcard);
    this.AssetList.next(postcard);
  }
  addtoCart(postcard : any){
    this.cartItemList.push(postcard);
    this.AssetList.next(this.cartItemList);
    // console.log(this.cartItemList);
  }
  
  removeCartItem(postcard : any){
    this.cartItemList.map((a:any, index:any)=>{
     if(postcard.id=== a.id){
      this.cartItemList.splice(index,1);
     }
    })
    this.AssetList.next(this.cartItemList);
    }

    removeAllCart(){
      this.cartItemList = [];
      this.AssetList.next(this.cartItemList);
    }
  }

