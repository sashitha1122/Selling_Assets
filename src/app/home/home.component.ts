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

  //  data = [
  //   {
  //     name : "Asus Rog",
  //     url : "htps:// dsshs",
  //     model: "model-1"
  //   },
  //   {

  //   },
  //   {

  //   }
  //  ];



  //  data.map((item)=> {
  //   <div >
  //   <Card item={item}/>
  //   </div>
  //  })


  //  //card
  //  item 
  //  <image src={itm.url}

}
