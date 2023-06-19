  import { Component, OnInit } from '@angular/core';
  import { WorksheetsList } from '../entity/worksheetsList';
  import { Worksheets } from '../entity/worksheets';
  import { ApiClientService } from '../service/api-client.service';
  import { Router } from '@angular/router';
  import { AddClassService } from '../service/add-class.service';
  
  @Component({
    selector: 'app-worksheet-list',
    templateUrl: './weekly-worksheets.component.html',
    styleUrls: ['./weekly-worksheets.component.css']
  })
  
  export class WeeklyWorksheetsComponent implements OnInit {
  
    p: number = 1;
    
    filterText:string =''
  
    //worksheetList: WorksheetsList = new WorksheetsList();
    worksheet: Worksheets = new Worksheets();
    worksheets: any;
    worksheetsMonth: any;
    worksheetsList: any;
    month: any;
    message: string;
    selectedDate:any;
    weekDate: any; 
    subject: any;
 
    public classStart: any = [];
  
    public totalClass: number = 0;
    itemExists: number[] = [];
  
    constructor(private apiService: ApiClientService, private AddClassService: AddClassService, private router: Router) {
  
    }
  
    ngOnInit() {
     // this.readAll();
  
    }
  
  
    wsSubmit() {
  
      let response = this.apiService.addWeeklyWorksheet(this.worksheetsList);
      response.subscribe((data) => {
        this.worksheet = data;
        alert(console.warn(data))
        if (data != null) {
          this.message =
            'Student  added successfully..!!';
        }
      });
      this.router.navigate(['worksheetList']);
    }
  
  
    generateWorksheet() {
      let response = this.apiService.getNewWeeklylyWorksheets(this.weekDate,this.subject);
      response.subscribe((data) => {
        this.worksheetsList = data;
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
  