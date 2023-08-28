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

  p: number = 1;
  
  filterText:string =''

  //worksheetList: WorksheetsList = new WorksheetsList();
  worksheet: Worksheets = new Worksheets();
  worksheets: any;
  worksheetsMonth: any;
  worksheetsList: any;
  month: any;
  message: string;
  selectWeek: String; 
  subject: any;
  productList: Worksheets[] = [];
  errorItem: boolean = false;
  
  printButtonVisible: boolean = false;

  constructor(private apiService: ApiClientService, private AddClassService: AddClassService, private router: Router) {

  }

  ngOnInit() {
    this.readAll(); 
  }

 
  readAll() {
    let response = this.apiService.getListWorksheets();
    response.subscribe((data) => {
      this.worksheets = data;
      this.worksheetsMonth = data.weeklyDate;
      this.worksheetsList = data.worksheetsDtoList; 
    });
    this.printButtonVisible = this.worksheetsList && this.worksheetsList.length > 0;
  }
  

  subjectClick(){
    this.filterText=this.subject;
  }
  weekDateClick() {
    let response = this.apiService.getWeeklylyWorksheets(this.selectWeek);
    response.subscribe((data) => {
      this.worksheetsList = data;
    });
  }
  generateWorksheet(){

//      let response = this.apiService.generatedNewWeeklylyWorksheets(this.selectWeek,this.subject);
let response = this.apiService.generatedNewWeeklylyWorksheets();
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

  addToCart(worksheets: any) {
    if (this.productList.indexOf(worksheets) === -1) {
      this.productList.push(worksheets);
      this.errorItem = false; 
    }
    else if (this.productList.indexOf(worksheets) > -1) {
      this.errorItem = true;  
    }
  }

  removeItem(worksheets: any) {
    var index = this.productList.indexOf(worksheets);
    if (index > -1) {
      this.productList.splice(index, 1);
    }
  } 



}
