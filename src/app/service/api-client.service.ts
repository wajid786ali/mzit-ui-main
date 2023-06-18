import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../entity/students';
import { StudentFeedBack } from '../entity/studentFeedBack';
import { TeacherRegister } from '../entity/teacher';
import { Worksheets } from '../entity/worksheets';
import { StudentNotes } from '../entity/studentNotes';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  apiUrl='http://localhost:8081/mindzoneitsolutions/app/v1';

  constructor(private httpClient: HttpClient) { }


  public getById(studentId:number):Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/${studentId}`);
  }

  public getAll():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/all`);
  }

  public getListFeedBack():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/listFeedBack`);
  }

  public getListRemindersActive():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/listRemindersNew`);
  }
  public getListRemindersResolve():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/listRemindersResolve`);
  }

  public deleteRemindersById(studentId:string){
    return this.httpClient.delete(`${this.apiUrl}/students/reminderDelete/${studentId}`);
  }

  public getListWorksheets():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/listWorksheet`);
  }

 

  public deleteTeacherByEmail(email:string):Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/deleteTeachers/`+email);
  }

  public getListTeachers():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/listTeachers`);
  }

  public getMonthlyWorksheets(month:String):Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/listWorksheetbyMonth/`+month);
  }

  
  public getWeeklylyWorksheets(weeklyDate:String):Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/listWorksheetbyWeekDate/`+weeklyDate);
  }

  public getNewWeeklylyWorksheets(weekDate:String):Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/newWeeklyWorksheets/`+weekDate);
  }

  public generatedNewWeeklylyWorksheets(weekDate:String):Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/students/generateWeeklyWorksheets/`+weekDate);
  }

  
  public register(student:Students):Observable<any>{
    console.log(student.startDate);
    return this.httpClient.post(`${this.apiUrl}/students/`,student);
  } 

  public update(student:Students):Observable<any>{
    return this.httpClient.put(`${this.apiUrl}/students`,student);
   }


  public addWorksheet(worksheets:Worksheets):Observable<any>{
  
    return this.httpClient.post(`${this.apiUrl}/students/addWorksheet`,worksheets);
  }

  public addWeeklyWorksheet(worksheetsList:any):Observable<any>{
  
    return this.httpClient.post(`${this.apiUrl}/students/addWeeklyWorksheet`,worksheetsList);
  }


  public studentFeedBack(studentFeedBack:StudentFeedBack):Observable<any>{
  
    return this.httpClient.post(`${this.apiUrl}/students/addFeedBack`,studentFeedBack);
  }

  public teacherRegister(teacherRegister:TeacherRegister):Observable<any>{
  
    return this.httpClient.post(`${this.apiUrl}/students/addTeachers`,teacherRegister);
  }
  
  public addStudentNotes(studentNotes:StudentNotes):Observable<any>{
  
    return this.httpClient.post(`${this.apiUrl}/students/addStudentNotes`,studentNotes);
  } 
  
  public deleteById(studentId:number){
    return this.httpClient.delete(`${this.apiUrl}/students/${studentId}`);
  }

  public login(email:string, password:string) {
  
    return null;
  } 
  
  /*
  public login( email:string, password:string):Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/userName/'+${email}+"/"+${password});
  }
*/

}