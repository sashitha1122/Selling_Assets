import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { postcard } from './productmodal';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardComponent } from '../../add-card/add-card.component';
import { ViewmoreComponent } from '../../viewmore/viewmore.component';
import { CartService } from '../../shared/cart.service';
import { FilterPipe } from '../../shared/filter.pipe';


@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FilterPipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
  // schemas: [NO_ERRORS_SCHEMA],
})


export class PostCardComponent implements OnInit{
  product: any[] =[];

  constructor(private api:ApiService,public modalService: NgbModal,private cartService : CartService){}
  ngOnInit(): void {
    this.displayproducts();
  }
displayproducts(){
  this.api.getProduct().subscribe((Res:any)=>{
    this.product = Res;
  })
 
}
addtoCart(item : any){
  this.cartService.addtoCart(item);
}
handleOpenViewmore(productId:string){
  const modalRef = this.modalService.open(ViewmoreComponent, { size: 'lg' });
  modalRef.componentInstance.productId = productId;
}

}
