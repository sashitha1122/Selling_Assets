import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCardComponent } from '../layout/new-card/new-card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor(public modalService: NgbModal){}

handleOpenNewCard() {
  const modalRef = this.modalService.open(NewCardComponent);
}

}
