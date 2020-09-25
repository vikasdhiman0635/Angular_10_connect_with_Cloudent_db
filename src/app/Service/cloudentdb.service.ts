import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudentdbService {
  
  constructor(private http:HttpClient){ }
  getalldata():Observable<any>
  {
    let url="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    return this.http.get(url);
  }

  savedata(value: any):Observable<any>
  {
    let url="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    return this.http.post(url,value);
  }
}
