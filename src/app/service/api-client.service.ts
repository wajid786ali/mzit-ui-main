import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../entity/students';
import { StudentFeedBack } from '../entity/studentFeedBack';
import { TeacherRegister } from '../entity/teacher';
import { Worksheets } from '../entity/worksheets';
import { StudentNotes } from '../entity/studentNotes';
import { UserName } from '../entity/username';


import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  [x: string]: any;

  apiUrl = 'http://localhost:8081/mindzoneitsolutions/app/v1';

  constructor(private httpClient: HttpClient) { }

  isMenuVisible() {
    return !!sessionStorage.getItem('custType');
  }
  getrole(){
    return sessionStorage.getItem('custType')!=null?sessionStorage.getItem('custType')?.toString():'';
  } 

  public getById(studentId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/${studentId}`);
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/all`);
  }

  public getListFeedBack(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/listFeedBack`);
  }

  public getListRemindersActive(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/listRemindersNew`);
  }
  public getListRemindersResolve(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/listRemindersResolve`);
  }

  public deleteRemindersById(studentId: string) {
    return this.httpClient.delete(`${this.apiUrl}/students/reminderDelete/${studentId}`);
  }

  public getListWorksheets(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/listWorksheet`);
  }

  public getMonthlyWorksheets(month: String): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/listWorksheetbyMonth/` + month);
  }

  public getWeeklylyWorksheets(weeklyDate: String): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/listWorksheetbyWeekDate/` + weeklyDate);
  }

  public getNewWeeklylyWorksheets(weekDate: String, subject: String): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/newWeeklyWorksheets/` + weekDate + '/' + subject);
  }

  /*
  public generatedNewWeeklylyWorksheets(weekDate: String, subject: String): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/generateWeeklyWorksheets/` + weekDate + '/' + subject);
  }
*/
  public generatedNewWeeklylyWorksheets(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/generateWeeklyWorksheets`);
  }
  

  public register(student: Students): Observable<any> {
    student.center=""+sessionStorage.getItem('custCenter');
    console.log(student.startDate);
    return this.httpClient.post(`${this.apiUrl}/students/`, student);
  }

  public update(student: Students): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/students`, student);
  }

  public addWorksheet(worksheets: Worksheets): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/students/addWorksheet`, worksheets);
  }

  public checkUserName(userName: UserName): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/students/login`, userName);
  }


  public addWeeklyWorksheet(worksheetsList: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/students/addWeeklyWorksheet`, worksheetsList);
  }

  public studentFeedBack(studentFeedBack: StudentFeedBack): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/students/addFeedBack`, studentFeedBack);
  }

  public addStudentNotes(studentNotes: StudentNotes): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/students/addStudentNotes`, studentNotes, { responseType: 'text' });
  }

  public deleteById(studentId: number) {
    return this.httpClient.delete(`${this.apiUrl}/students/${studentId}`);
  }

  /* Teachers API */
  public getListTeachers(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/listTeachers`);
  }

  public teacherRegister(teacherRegister: TeacherRegister): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/students/addTeachers`, teacherRegister);
  }

  public updateTeacher(email: string): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/students/listTeachers`, email);
  } 
  
  public deleteTeacher(email: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/students/deleteTeachers/${email}`);
  } 

}