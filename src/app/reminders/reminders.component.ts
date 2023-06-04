import { Component, OnInit ,Pipe, PipeTransform} from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import { StudentNotes } from '../entity/studentNotes';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit{
  filterTerm : string;
  studentNotes: StudentNotes = new StudentNotes();
  StudentNotes: any;
  message: string;
  studentId:string;


  constructor(private apiService: ApiClientService, private router: Router){

  }
  ngOnInit() {
    this.readActiveNotes();
  }

  readInActiveNotes(){
    let response =this.apiService.getListRemindersResolve();
    response.subscribe((data) => {
      this.StudentNotes = data;
    });
  }
  readActiveNotes(){
    let response =this.apiService.getListRemindersActive();
    response.subscribe((data) => {
      this.StudentNotes = data;
    });
  }

  deleteRemindersById(studentId:number){
    
    this.apiService.deleteRemindersById(studentId).subscribe(data=>{
      this.ngOnInit();
    }); 
    this.message='Student deleted successfully..!!'
  }

}
