import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postcard } from '../layout/post-card/productmodal';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  dataDummy: postcard[] = [
    {
      "name": "Macbook1",
      "url" : "../../assets/lepmac1.jpg" ,
      "model": "Asus Rog Strix",
      "update": "LAST-UPDATED - FEB 20,2024"
    },
    {
      "name" : "Macbook",
      "url"  : "../../assets/lepmac.jpg",
      "model": "model-2",
      "update": "LAST-UPDATED - JAn 18,2024"
    },
    {
      "name" : "Macbook1",
      "url"  : "../../assets/lepmac1.jpg",
      "model": "model-2",
      "update": "LAST-UPDATED - MAR 28,2024"
    },
    {
      "name" : "Macbook",
      "url"  : "../../assets/lepmac.jpg",
      "model": "Asus Rog Strix",
      "update": "LAST-UPDATED - FEB 12,2024"
    }
    ,
    {
      "name" : "Macbook1",
      "url"  : "../../assets/lepmac.jpg",
      "model": "model-2",
      "update": "LAST-UPDATED - MAR 28,2024"
    },
    {
      "name" : "Asus Rog Strix R7-6800H",
      "url"  : "../../assets/Asus Rog.webp",
      "model": "Asus Rog Strix",
      "update": "LAST-UPDATED - FEB 15,2024"
    },
    {
      "name": "Asus Rog Strix R7-6800H",
      "url" : "../../assets/lepmac1.jpg" ,
      "model": "Asus Rog Strix",
      "update": "LAST-UPDATED - FEB 20,2024"
    },
    {
      "name" : "Macbook",
      "url"  : "../../assets/Asus Rog.webp",
      "model": "model-2",
      "update": "LAST-UPDATED - JAn 18,2024"
    },
   ];

  getProduct(){
    console.log("Starting basic function")
    const data = this.dataDummy;
    console.log("data fetched from basic", data)
    return data;
  }
  addCart(){
    const data = this.dataDummy;
    this.dataDummy.push();
  }
}
