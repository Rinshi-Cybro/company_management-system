import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';


interface Country {
  name: string;
  code: string;
}

interface Role {
  name: string;
  code: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password!: string;

  phone: string | undefined;

  countries: Country[] | undefined;
  selectedCountry: Country | undefined;

  roles: Role[] | undefined;
  userRole: Role | undefined;

  constructor(private regService:ApiService, 
    private router:Router, private toastMsg:MessageService){ }

  registerData:any = {
    firstName: "",
    lastName: "",
    address1: "",
    phone: "",
    selectedCountry: "",
    state: "",
    email: "",
    password: "",
    basic_salary: 0,
    attendance: 0,
    userRole: "",
    // isActive:[true]
  }

  ngOnInit() {
    this.countries = [
      { name: 'India', code: 'IND' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.roles = [
      { name: 'Admin', code:'admin' },
      { name: 'HR', code:'hr' },
      { name: 'Project Manager', code:'project_manager' },
      { name: 'Team Leader', code:'team_leader' },
      { name: 'Developer', code:'developer' },
      { name: 'QA', code:'qa'}
    ]
  }

  onSubmit(){
    if(this.registerData){
      this.regService.GetLoginByEmail(this.registerData.email as string).subscribe((res: any) => {
        console.log(res.length + "iddddd");
        if (res.length == 0 ) { 
          this.regService.ProceedRegister(this.registerData).subscribe((res:any)=>{
            console.log({res})
            this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully registred", life: 5500 });
            this.router.navigate(['login'])
            console.log(this.registerData);
          })
        } else{
          this.toastMsg.add({ severity: 'error', summary: 'Error', detail: "entered email already exist", life: 5500 });
        }
      })
  
    } else{
      this.toastMsg.add({ severity: 'error', summary: 'Error', detail: "Please enter valid data", life: 5500 });
    }
  }
}
