import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SericesService {


  url = "https://localhost:7020/api/StudentAPI/";


  constructor(private http:HttpClient) { }


  GetAllEmployee(){
    debugger;
    return this.http.get(this.url+ "GetAllStudent");

  }

   
}
