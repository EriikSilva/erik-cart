import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "https://fakestoreapi.com/products/";
  constructor(private http: HttpClient) { }

  getProduct(){
      return this.http.get<any>(this.baseUrl)
      .pipe(map((res:any) => {
        return res;
      }))
  }
}
