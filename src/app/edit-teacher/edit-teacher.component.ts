import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import { TeacherRegister } from '../entity/teacher';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  
  teacherRegister : TeacherRegister = new TeacherRegister();  
  message: string;
  teacher: TeacherRegister;
  router: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiClientService
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.params['email'];
    if (email) {
      this.apiService.getTeacherByEmail(email).subscribe((data: TeacherRegister) => {
        this.teacher = data;
        console.log(data);
      });
    } else {
      // Handle the case where 'email' is null or not provided, for example, by redirecting or showing an error message.
    }
  }
  wsSubmit(teacherRegister: TeacherRegister) {
    let response = this.apiService.teacherRegister(teacherRegister);
    response.subscribe((data) => {
      this.teacherRegister = data;
      if (data != null) {
        this.message =
          'Student ' + this.teacherRegister.teacherName + ' added successfully..!!';
      }
    });
    this.router.navigate(['list-teacher']);
  }
}
