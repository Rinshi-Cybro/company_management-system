import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hr-userlist',
  templateUrl: './hr-userlist.component.html',
  styleUrls: ['./hr-userlist.component.css']
})
export class HrUserlistComponent implements OnInit {

  EmployeeData:any [] = [];

  constructor( private EmpService: ApiService, private router: Router,
    toastMsg: MessageService ) { }

  ngOnInit(): void {
    this.EmpService.getAllUser().subscribe((res:any)=> {
      this.EmployeeData = res
      console.log(this.EmployeeData);
    })
    
  }

}
