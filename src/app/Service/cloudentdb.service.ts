import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudentdbService {
  
  constructor(private http:HttpClient) 
  { }


  getalldata():Observable<any>
  {
    let url="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    return this.http.get(url);
  }

  savedata(value: any):Observable<any>
  {
    let url="http://localhost:5984/_utils/#/database/app_data/_all_docs";
    return this.http.post(url,value);
  }



}
