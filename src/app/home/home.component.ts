import { Component } from '@angular/core';
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

  "products" : [
    {
      "name": "Asus Rog",
      "url" : "../../assets/Asus Rog.webp" ,
      "model": "model-1"
    },
    {
      "name" : "Macbook",
      "url"  : "../../assets/Laptop2.png",
      "model": "model-2"
    },
    {
      "name" : "Macbook1",
      "url"  : "../../assets/Laptop2.png",
      "model": "model-2"
    },
    {
      "name" : "Rog2",
      "url"  : "../../assets/Asus Rog.webp",
      "model": "model-2"
    }
   ];
}
