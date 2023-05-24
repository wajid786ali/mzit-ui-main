import { Component } from '@angular/core';
import { Worksheets } from '../entity/worksheets';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worksheet-list',
  templateUrl: './worksheet-list.component.html',
  styleUrls: ['./worksheet-list.component.css']
})

  export class WorksheetListComponent {
    worksheet: Worksheets = new Worksheets();
    worksheets : any;
    month:any;
    year:any;

    constructor(private apiService: ApiClientService,
      private router: Router
  ){}
  
    ngOnInit() {
      this.readAll();
  }
  
  readAll(){
  let response =this.apiService.getListWorksheets();
  response.subscribe((data) => { 
    this.worksheets = data;
  });
  }
  
  searhWorksheet(month:String,year:String){
    let response =this.apiService.getMonthlyWorksheets(month,year);
    response.subscribe((data) => { 
      this.worksheets = data;
    });
    }

  }
  