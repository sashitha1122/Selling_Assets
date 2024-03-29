import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardComponent } from '../add-card/add-card.component';

@Component({
  selector: 'app-viewmore',
  standalone: true,
  imports: [],
  templateUrl: './viewmore.component.html',
  styleUrl: './viewmore.component.scss'
})
export class ViewmoreComponent {

  constructor(private modalService: NgbModal){
  }

  handleOpenAddCard() {
    const modalRef = this.modalService.open(AddCardComponent);
  }

}