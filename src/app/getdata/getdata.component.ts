import { Component, OnInit } from '@angular/core';
import { CloudentdbService } from "../Service/cloudentdb.service";

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  alldata:any;

  constructor(private service:CloudentdbService) { }

  ngOnInit()
  {
    this.service.getalldata().subscribe((Response)=>
    {
      // console.log(Response);
      this.alldata=Response;
    })
  }

}
