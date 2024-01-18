import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastrModule } from 'ngx-toastr';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AnnouncementComponent } from './admin/announcement/announcement.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminJobpostComponent } from './admin/admin-jobpost/admin-jobpost.component';
import { AdminFeedbackComponent } from './admin/admin-feedback/admin-feedback.component';
import { HrModuleComponent } from './hr-module/hr-module.component';
import { CommonSidebarComponent } from './hr-module/common-sidebar/common-sidebar.component';
import { HrHomeComponent } from './hr-module/hr-home/hr-home.component';
import { HrUserlistComponent } from './hr-module/hr-userlist/hr-userlist.component';
import { HrEmpAttendanceComponent } from './hr-module/hr-emp-attendance/hr-emp-attendance.component';
import { HrEmpLeaveRequestComponent } from './hr-module/hr-emp-leave-request/hr-emp-leave-request.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AnnouncementComponent,
    UserListComponent,
    AdminComponent,
    AdminJobpostComponent,
    AdminFeedbackComponent,
    HrModuleComponent,
    CommonSidebarComponent,
    HrHomeComponent,
    HrUserlistComponent,
    HrEmpAttendanceComponent,
    HrEmpLeaveRequestComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    PasswordModule,
    InputMaskModule,
    ToastrModule.forRoot(),
    CardModule,
    ToastModule,
    TableModule,
    DialogModule,
    InputTextareaModule,
    BrowserAnimationsModule
  ],

  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
