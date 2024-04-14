import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.scss'
})
export class NewCardComponent implements OnInit {
  // data: postcard[] = []; 
  public postcard : any = [];
  public garndTotal !: number 
  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.postcard = res;
      this.garndTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item : any){
     this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
