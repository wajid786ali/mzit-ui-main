import { Component } from '@angular/core';
import { Worksheets } from '../entity/worksheets';
import { ApiClientService } from '../service/api-client.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-worksheets',
  templateUrl: './create-worksheets.component.html',
  styleUrls: ['./create-worksheets.component.css']
})
export class CreateWorksheetsComponent {
  
  worksheet: Worksheets = new Worksheets();
  message: string;
  students: any;
  filterWorksheet!: string;
  constructor(private apiService: ApiClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.readAll();
  }

  readAll() {
    let response1 = this.apiService.getAll();
    response1.subscribe((data1) => {
      this.students = data1;
    });
  }

  wsSubmit(worksheets: Worksheets) {
     
  }
}
