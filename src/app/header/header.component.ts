import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCardComponent } from '../layout/new-card/new-card.component';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public totalItem : number = 0;
constructor(public modalService: NgbModal,private cartService : CartService){}

ngOnInit(): void {
  this.cartService.getProducts()
  .subscribe(res=>{
    this.totalItem = res.length;
  })
}
handleOpenNewCard() {
  const modalRef = this.modalService.open(NewCardComponent);
}

}
