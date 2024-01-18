import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  password!: string;
  ngForm: FormsModule | any;

  constructor(private logService:ApiService,
    private router:Router, private toastMsg:MessageService) { }

  loginData: any[] = [];
  
  loginForm: any = {
    email: "",
    password: "",
    userRole: "",
  }


  onSubmit(id: any) {
    const { email, password } = this.loginForm;
    if (this.loginForm) {

      this.logService.GetLoginByEmail(email as string).subscribe((res: any) => {
        if (res.length > 0 && res[0].password === password) {
        this.loginForm = res[0]
        var data = res[0];
        var type = this.loginForm.userRole.code;

        if (type === 'admin') {
          sessionStorage.setItem('login_user_id', data.id as string);
          this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined Admin Home", life: 5500 });
          this.router.navigate([`admin/admin_home`]);


        }else if(type === 'hr'){
          sessionStorage.setItem('login_user_id', data.id as string);
          this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined HR Home", life: 5500 });
          this.router.navigate([`hr/hr_home`]);

        }
        else if(type === 'project_manager'){
          sessionStorage.setItem('login_user_id', data.id as string);
          this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined Project Manager Home", life: 5500 });
          // this.router.navigate([`user-list`]);

        }
        else if(type === 'team_leader'){
          sessionStorage.setItem('login_user_id', data.id as string);
          this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined Team Leader Home", life: 5500 });
          // this.router.navigate([`user-list`]);

        }else if(type === 'developer'){
          sessionStorage.setItem('login_user_id', data.id as string);
          this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined Developer Home", life: 5500 });
          // this.router.navigate([`user-list`]);

        }else if(type === 'qa'){
          sessionStorage.setItem('login_user_id', data.id as string);
          this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined QA Home", life: 5500 });
          // this.router.navigate([`user-list`]);

        }
        else {
          this.toastMsg.add({ severity: 'error', summary: 'Error', detail: "Something went wrong", life: 5500 }); 
        }




/////////////// old data & FUNCTIONS ///////////////////////////////

            // if (this.loginForm.userRole === 'Admin') {
            //   console.log(this.loginForm)
            //   // Admin Login login
            //   sessionStorage.setItem('email', email as string);
            //   sessionStorage.setItem('userRole', this.loginForm.userRole);
            //   this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined Admin Home", life: 5500 });
            //   // this.router.navigate([`adminHome`]);    // Navigate to admin dashboard
            //   console.log(this.loginForm);
            //   this.router.navigate([`user-list`]);

            // } else if (this.loginForm.userRole === 'HR') {
            //   //User-HR login 
            //   sessionStorage.setItem('email', email as string);
            //   sessionStorage.setItem('userRole', this.loginForm.userRole);
            //   this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined HR Home", life: 5500 });
            //   // this.router.navigate([`userHome`]);  //Navigate to User Dashboard
            //   console.log(this.loginData);
            //   this.router.navigate([`userHome`]);

            // } else if (this.loginForm.userRole === 'Project Manager') {
            //   //User-Project Manager login 
            //   sessionStorage.setItem('email', email as string);
            //   sessionStorage.setItem('userRole', this.loginForm.userRole);
            //   this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined Project Manager Home", life: 5500 });
            //   this.router.navigate(['']);

            // } else if (this.loginForm.userRole === 'Team Leader') {
            //   //User-Team Leader login
            //   sessionStorage.setItem('email', email as string);
            //   sessionStorage.setItem('userRole', this.loginForm.userRole);
            //   this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined Team Leader Home", life: 5500 });
            //   this.router.navigate(['']);

            // } else if (this.loginForm.userRole === 'Developer') {
            //   //User-Developer login
            //   sessionStorage.setItem('email', email as string);
            //   sessionStorage.setItem('userRole', this.loginForm.userRole);
            //   this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined Developer Home", life: 5500 });
            //   this.router.navigate(['']);

            // } else if (this.loginForm.userRole === 'QA'){
            //   //User-QA login
            //   sessionStorage.setItem('email', email as string);
            //   sessionStorage.setItem('userRole', this.loginForm.userRole);
            //   this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined QA Home", life: 5500 });
            //   this.router.navigate(['']);
            // } else {
            //   this.toastMsg.add({ severity: 'error', summary: 'Error', detail: "Something went wrong", life: 5500 }); 
            // }

/////////////// old data ///////////////////////////////

       
        } else {
          this.toastMsg.add({ severity: 'error', summary: 'Error', detail: "email or password is wrong, Please enter valid data", life: 5500 }); 
        }
      })
    }
  }
} 





  // onSubmit(id: any) {
  //   const { email, password } = this.loginForm;
  //   this.logService.GetLoginByEmail(email as string).subscribe((res:any)=> {
  //     // this.loginForm = res
  //     const user = res[0];
  //     console.log(res, password, user);

  //     if(res.length > 0 && res[0].password === password) {
  //       sessionStorage.setItem('email', user.email);
  //       this.router.navigate([`user-list`]);
  //       this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "You have succcessfully logined Admin Home", life: 5500 });
  //     } else {
  //       this.toastMsg.add({ severity: 'error', summary: 'Error', detail: "email or password is wrong, Please enter valid data", life: 5500 }); 
  //     }
  //   }),
  //   ( _error: any) => {
  //     this.toastMsg.add({ severity: 'error', summary: 'Error', detail: "email or password is wrong, Please enter valid data", life: 5500 });
  //   } 
  // }


  

 



////////////*****************this function use if you pass id to another page to get logined use data***********////////////////////////////


//this.logService.GetLoginedUserData(data.id as string).subscribe((res1: any) => {
          //   console.log(res1[0].email + "ssssss");
          // })
          // return;


////////////*****************this function use if you pass id to another page to get logined use data***********////////////////////////////










 





  




  
