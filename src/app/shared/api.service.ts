import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postcard } from '../layout/post-card/productmodal';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiurl = "https://localhost:7095/api/Assets";

  constructor(private http:HttpClient) { }

  getProduct(): Observable<any[]>{
  
    return this.http.get<any[]>(this.apiurl + "");
   
  }
  addCart(){
    
  }
  getProductbyid(id: string): Observable<any[]> {
    return this.getProduct().pipe(
      map((products: any[]) => products.find(item => item.id === id))
    );
  }
}
