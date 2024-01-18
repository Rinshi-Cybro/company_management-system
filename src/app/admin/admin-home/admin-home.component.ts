import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  selectedCountry:any
  userRole:any

  data = {
    firstName: "",
    lastName:"",
    address1: "",
    phone: "",
    selectedCountry: { name: "", code: "" },
    email: "",
    userRole: {name: "", code: "" }
  }
  constructor(private AdminService:ApiService){ }

  ngOnInit(){
    this.getAdminData()
    console.log(this.getAdminData())
  }
  
  getAdminData(){
   var id = sessionStorage.getItem('login_user_id');
   this.AdminService.GetLoginedUserData(id as string).subscribe((res: any) => {
    var response = res[0];
      this.data = response
      console.log({response});
    })
  }
   
}
