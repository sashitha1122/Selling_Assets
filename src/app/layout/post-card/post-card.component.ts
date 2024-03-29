import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { postcard } from './productmodal';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardComponent } from '../../add-card/add-card.component';
import { ViewmoreComponent } from '../../viewmore/viewmore.component';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
  // schemas: [NO_ERRORS_SCHEMA],
})


export class PostCardComponent implements OnInit{
  data: postcard[] = []; 
  prediction: any;

  constructor(private api:ApiService,public modalService: NgbModal){}
  ngOnInit(): void {
    this.displayproducts();
  }
displayproducts(){
  // console.log("dta fetching starting")
  this.data = this.api.getProduct()
}

handleOpenAddCard() {
  const modalRef = this.modalService.open(AddCardComponent);
}
handleOpenViewmore() {
  const modalRef = this.modalService.open(ViewmoreComponent);
}

}
