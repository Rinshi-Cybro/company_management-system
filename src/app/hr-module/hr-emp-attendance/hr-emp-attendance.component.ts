import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hr-emp-attendance',
  templateUrl: './hr-emp-attendance.component.html',
  styleUrls: ['./hr-emp-attendance.component.css']
})
export class HrEmpAttendanceComponent implements OnInit {

  EmpAttendanceArray:any [] = [];
  visible: boolean = false;
  EmployeeData:any = [];
  

  constructor(private AttendanceService: ApiService,
    private router: Router, private toastMsg: MessageService){}

  ngOnInit(){
    this.AttendanceService.getAllUser().subscribe((res:any)=>{
      this.EmployeeData = res
      console.log(this.EmployeeData);
    })
    
  }

  AddAttendance(){
    var id = sessionStorage.getItem('login_user_id');
    this.EmpAttendanceArray.forEach((data, i)=>{
      if (data) this.EmployeeData[i].attendance++;
      console.log(this.EmpAttendanceArray);

      console.log(this.EmployeeData.attendance)
    });
    this.AttendanceService.PostEmpAttendance(this.EmployeeData).subscribe((res:any)=> {
      this.toastMsg.add({
        severity: 'success',
        summary: 'Successfully attendance added'
      });
      console.log(res);
    });
    this.EmpAttendanceArray = [];
  }

  AttendancePopupToggle(){
    this.visible = true ;
  }

}

