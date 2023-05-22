import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../entity/students';
import { StudentFeedBack } from '../entity/studentFeedBack';
import { Worksheets } from '../entity/worksheets';
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

  public register(student:Students):Observable<any>{
    console.log(student.startDate);
    return this.httpClient.post(`${this.apiUrl}/students/`,student);
  }


  public addWorksheet(worksheets:Worksheets):Observable<any>{
  
    return this.httpClient.post(`${this.apiUrl}/students/addWorksheet`,worksheets);
  }

  public studentFeedBack(studentFeedBack:StudentFeedBack):Observable<any>{
  
    return this.httpClient.post(`${this.apiUrl}/students/addFeedBack`,studentFeedBack);
  }
  
  public deleteById(studentId:number){
    return this.httpClient.delete(`${this.apiUrl}/students/${studentId}`);
  }

  public update(student:Students):Observable<any>{
   return this.httpClient.put(`${this.apiUrl}/students`,student);
  }
  

}
