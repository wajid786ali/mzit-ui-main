import { Component } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Students } from '../entity/students';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {
  filterWorksheet!: string;
  student: Students = new Students();
  students: any;
  
  constructor(private apiService: ApiClientService,
    private router: Router
){}
  
ngOnInit() {
      this.readAll();
 }
 
readAll(){
  let response1 =this.apiService.getAll();
  response1.subscribe((data1) => {
    this.students = data1;
  });
}

wsSubmit(){
 
}
 

}
