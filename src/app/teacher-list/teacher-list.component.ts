import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';
import { TeacherRegister } from '../entity/teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  p: number = 1;
  teacherRegister: TeacherRegister = new TeacherRegister();
  teacherRegisters : any;
  message : String;
  email : String;

  constructor(private apiService: ApiClientService,
    private router: Router
){}
  ngOnInit() {
    this.readAll();
}

readAll(){
let response =this.apiService.getListTeachers();
response.subscribe((data) => { 
  this.teacherRegisters = data;
});
}

delete(email:string){
  this.apiService.deleteTeacherByEmail(email);
  
 this.message='Student deleted successfully..!!'
}

}