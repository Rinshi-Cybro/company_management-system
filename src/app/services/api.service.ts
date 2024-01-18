import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000/user-Register'
  
  announceUrl = 'http://localhost:3000/announcement'
  
  jobVaccUrl = 'http://localhost:3000/job-vaccancy'

  attendanceUrl = 'http://localhost:3000/attendance'


  ProceedRegister(regData:any){
    return this.http.post<any>(this.apiUrl, regData);
  }

  // getLoginById(id:any){
  //   // return this.http.get<any>(this.apiUrl + '/' + id);
  //   return this.http.get<any>(`${this.apiUrl}/${id}`);
  // }

  getAllUser(){
    return this.http.get<any>(this.apiUrl);
  }

  DeleteRegUser(id:any){
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  GetLoginedUserData(id: any) {
    return this.http.get<any>(this.apiUrl + '?id=' + id);
  }


  GetLoginByEmail(email: any) {
    return this.http.get<any>(this.apiUrl + '?email=' + email);
    // return this.http.get<any>(`${this.apiUrl}/'?email='${email}`);
  }

  PostAnnouncement(data:any) {
    return this.http.post<any>(this.announceUrl, data);
  }

  PostNewJob(jobData:any) {
    return this.http.post<any>(this.jobVaccUrl, jobData);
  }

  PostEmpAttendance(attenData:any){
    return this.http.post<any>(this.attendanceUrl, attenData);
  }
  

}
