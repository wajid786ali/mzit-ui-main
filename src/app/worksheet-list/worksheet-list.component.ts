import { Component, OnInit } from '@angular/core';
import { WorksheetsList } from '../entity/worksheetsList';
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
  
  //worksheetList: WorksheetsList = new WorksheetsList();
  worksheet: Worksheets = new Worksheets();
  worksheets: any;
  worksheetsMonth: any;
  worksheetsList: any;
  month: any;
  message: string; 
  selectWeek:String;
    s: any;
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
this.worksheetsMonth=data.weeklyDate;
this.worksheetsList=data.worksheetsDtoList;

    });
    
  }

  weekDateClick(){
  
    let response = this.apiService.getWeeklylyWorksheets(this.selectWeek);
    response.subscribe((data) => {

      this.worksheetsList=data;

    });
  }


  editWorksheet(worksheets: number) {
    this.router.navigate(['editWorksheet', worksheets]);
  }

  monthlyWorksheet() {
    let response = this.apiService.getMonthlyWorksheets(this.month);
    response.subscribe((data) => {
      this.worksheets = data;
    });
  }
   

}
