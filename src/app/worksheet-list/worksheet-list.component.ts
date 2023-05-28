import { Component, OnInit } from '@angular/core';
import { Worksheets } from '../entity/worksheets';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';
import { AddClassService } from '../service/add-class.service';

@Component({
  selector: 'app-worksheet-list',
  templateUrl: './worksheet-list.component.html',
  styleUrls: ['./worksheet-list.component.css']
})

export class WorksheetListComponent implements OnInit {
  
  worksheet: Worksheets = new Worksheets();
  worksheets: any;
  month: any;
  year: any;
  message: string; 

  public classStart : any = [];  

  public totalClass : number = 0;
  itemExists: number[] = [];

  constructor(private apiService: ApiClientService,private AddClassService:AddClassService, private router: Router) {
 
  }

  ngOnInit() {
    this.readAll();
    this.AddClassService.getStudent()
    .subscribe(res=>{
      this.totalClass = res.length;
    })

    
    this.AddClassService.getStudent()
    .subscribe(res=>{
      this.classStart = res;  
    })
  }

  addClass(worksheet: any){
    this.AddClassService.addtoCart(worksheet);    
  }
  
  removeClass(item: any){
    this.AddClassService.removeCartItem(Worksheets);
  }
 
  readAll() {
    let response = this.apiService.getListWorksheets();
    response.subscribe((data) => {
      this.worksheets = data;
    });
  }


  editWorksheet(worksheets: number) {
    this.router.navigate(['editWorksheet', worksheets]);
  }

  searhWorksheet(month: String, year: String) {
    let response = this.apiService.getMonthlyWorksheets(month, year);
    response.subscribe((data) => {
      this.worksheets = data;
    });
  }
 

}
