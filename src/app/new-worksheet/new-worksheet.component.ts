import { Component } from '@angular/core';
import { Worksheets } from '../entity/worksheets';
import { ApiClientService } from '../service/api-client.service';
import { StudentFeedBack } from '../entity/studentFeedBack';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-worksheet',
  templateUrl: './new-worksheet.component.html',
  styleUrls: ['./new-worksheet.component.css']
})
export class NewWorksheetComponent {
  worksheet: Worksheets = new Worksheets();
  message: string;
  constructor(private apiService: ApiClientService,
    private router: Router
){}

  wsSubmit(worksheets: Worksheets) {
    let response = this.apiService.addWorksheet(worksheets);
    response.subscribe((data) => {
      this.worksheet = data;
    
      if (data != null) {
        this.message =
          'Student  added successfully..!!';
      }
    });
    this.router.navigate(['worksheetList']);
  }
}
