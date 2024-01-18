import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AnnouncementComponent } from './admin/announcement/announcement.component';
import { AdminComponent } from './admin/admin.component';
import { AdminJobpostComponent } from './admin/admin-jobpost/admin-jobpost.component';
import { AdminFeedbackComponent } from './admin/admin-feedback/admin-feedback.component';
import { HrModuleComponent } from './hr-module/hr-module.component';
import { CommonSidebarComponent } from './hr-module/common-sidebar/common-sidebar.component';
import { HrHomeComponent } from './hr-module/hr-home/hr-home.component';
import { HrUserlistComponent } from './hr-module/hr-userlist/hr-userlist.component';
import { HrEmpLeaveRequestComponent } from './hr-module/hr-emp-leave-request/hr-emp-leave-request.component';
import { HrEmpAttendanceComponent } from './hr-module/hr-emp-attendance/hr-emp-attendance.component';

const routes: Routes = [
  //Common routing
  { path:'register', component:RegisterComponent },
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login', component:LoginComponent },
  
  //Admin module routing
  { path: 'admin', component: AdminComponent,
  children:[

  { path:'admin_home', component: AdminHomeComponent },
  { path:'admin_navbar', component: AdminNavbarComponent },
  { path:'user_list', component: UserListComponent },
  { path:'admin_announcement', component: AnnouncementComponent },
  { path:'admin_jobpost', component: AdminJobpostComponent },
  { path:'admin_feedback', component: AdminFeedbackComponent },
  ]
},
  
  //HR module routing
  { path:'hr', component: HrModuleComponent,
  children : [
    { path:'hr_sidebar', component: CommonSidebarComponent },
    { path:'hr_home', component: HrHomeComponent },
    { path:'hr_emp-list', component: HrUserlistComponent },
    { path:'hr_emp-leave', component: HrEmpLeaveRequestComponent },
    { path:'hr_emp-attendance', component: HrEmpAttendanceComponent }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
