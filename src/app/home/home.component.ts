import { Component,ElementRef, ViewChild } from '@angular/core';
import { PostCardComponent } from '../layout/post-card/post-card.component';
import { NewCardComponent } from '../layout/new-card/new-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent,NewCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
