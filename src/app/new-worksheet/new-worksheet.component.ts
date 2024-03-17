import { Component } from '@angular/core';
import { Worksheets } from '../entity/worksheets';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-worksheet',
  templateUrl: './new-worksheet.component.html',
  styleUrls: ['./new-worksheet.component.css']
})
export class NewWorksheetComponent {
  worksheet: Worksheets = new Worksheets();
  students: any;
  alert: boolean = false;
  filterWorksheet!: string;

  constructor(private apiService: ApiClientService, private router: Router) { }

  ngOnInit() { this.readAll(); }

  readAll() {
    let response1 = this.apiService.getAll();
    response1.subscribe((data1) => {
      this.students = data1;
    });
  }

  wsSubmit(worksheets: Worksheets) {
    this.apiService.addWorksheet(worksheets).subscribe(
      (data) => {
        this.worksheet = data;
        console.warn(data); // Log the response data
        this.alert = true;
        //alert(JSON.stringify(data)); // Display the response in an alert box
      },
      (error) => {
        console.error(error);
        // Handle error here, display error message or perform any other action
      }
    );
  }

  addNewWorksheet() {
    this.worksheet = new Worksheets();
    this.alert = false;
  }
}
