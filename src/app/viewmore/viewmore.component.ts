import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardComponent } from '../add-card/add-card.component';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { postcard } from '../layout/post-card/productmodal';
import { CartService } from '../shared/cart.service';


@Component({
  selector: 'app-viewmore',
  standalone: true,
  imports: [],
  templateUrl: './viewmore.component.html', 
  styleUrl: './viewmore.component.scss'
})
export class ViewmoreComponent implements OnInit{
  public postcard: postcard | null = null; 

  constructor(private api:ApiService,private activatedroute:ActivatedRoute,private modalService: NgbModal,private cartService :CartService){
  }

  ngOnInit(): void {
    const productId = this.activatedroute.snapshot.paramMap.get('productid');
     
  }

  addtoCart(item : any){
    this.cartService.addtoCart(item);
  }
}