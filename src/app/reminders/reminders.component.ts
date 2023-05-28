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


  constructor(private apiService: ApiClientService,
              private router: Router
    ){}
  ngOnInit() {
    this.readAll();
  }

  readAll(){
    let response =this.apiService.getListReminders();
    response.subscribe((data) => {
      this.StudentNotes = data;
    });
  }

  
  update(studentId:number){
    this.apiService.deleteById(studentId).subscribe(data=>{
      this.ngOnInit();
    });
    
    this.message='Student deleted successfully..!!'
  
  }

}
