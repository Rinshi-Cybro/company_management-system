import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hr-home',
  templateUrl: './hr-home.component.html',
  styleUrls: ['./hr-home.component.css']
})
export class HrHomeComponent implements OnInit{

  selectedCountry:any
  userRole:any

  HrData = {
    firstName: "",
    lastName:"",
    address1: "",
    phone: "",
    selectedCountry: { name: "", code: "" },
    email: "",
    userRole: {name: "", code: "" }
  }

  constructor(private HrService: ApiService) { }

  ngOnInit() {
    this.getHrData()
    console.log(this.getHrData());
  }

  getHrData(){
    var id = sessionStorage.getItem('login_user_id');
    this.HrService.GetLoginedUserData(id as string).subscribe((res:any)=> {
      var response = res[0];
      this.HrData = response
      console.log({response});
    })
  }

}
