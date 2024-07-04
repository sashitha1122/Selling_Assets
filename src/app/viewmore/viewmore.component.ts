import { Component, Input,OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardComponent } from '../add-card/add-card.component';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { postcard } from '../layout/post-card/productmodal';
import { CartService } from '../shared/cart.service';
import { CommonModule } from '@angular/common';
import { error } from 'console';


@Component({
  selector: 'app-viewmore',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./viewmore.component.html',
  styleUrls: ['./viewmore.component.scss'] 
})
export class ViewmoreComponent implements OnInit{
  @Input() productId!: string ;
   product: any;
  constructor(private api:ApiService,private activatedRoute:ActivatedRoute,private modalService: NgbModal,private cartService :CartService){
  }

  ngOnInit(): void {
    if (this.productId) {
      this.api.getProductbyid(this.productId).subscribe(
        (result: any) => {
          console.log('Product data:', result); // Check fetched product data
          this.product = result;
        },
        (error: any) => {
          console.error('Error fetching product:', error); // Handle error fetching product
        }
      );
    }
  }

  addtoCart(item : any){
    this.cartService.addtoCart(item);
  }
}