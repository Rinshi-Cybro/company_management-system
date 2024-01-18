import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  registredUserArray:any[] = [];

  constructor(private UserService:ApiService, private router:Router,
    private toastMsg:MessageService) { }

  ngOnInit(){
    this.UserService.getAllUser().subscribe((res:any)=> {
      console.log(res)
      this.registredUserArray = res
      console.log(this.registredUserArray)
    })
  }

  DeleteUser(id:any){
    this.UserService.DeleteRegUser(id).subscribe((res:any)=> {
      this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have successfully Deleted !!", life: 5500 });
      this.ngOnInit();
    })
  }
  

}
