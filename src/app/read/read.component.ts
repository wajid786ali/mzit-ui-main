import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import { Students } from '../entity/students';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{
  filterTerm : string;
  student: Students = new Students();
  students: any;
  message: string;

  constructor(private apiService: ApiClientService,
              private router: Router
    ){}
  ngOnInit() {
    this.readAll();
  }

  readById(studentId:number){

    this.apiService.getById(studentId);
  }

  readAll(){
    let response =this.apiService.getAll();
    response.subscribe((data) => {
      this.students = data;
    });
  }

  deleteById(studentId:number){
    this.apiService.deleteById(studentId).subscribe(data=>{
      this.ngOnInit();
    });
    
    this.message='Student deleted successfully..!!'

    
  }

  update(studentId:number){
    this.router.navigate(['update',studentId]);
  }

  home(){
    this.router.navigate(['home']);
  }

}
