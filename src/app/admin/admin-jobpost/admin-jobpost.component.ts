import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-jobpost',
  templateUrl: './admin-jobpost.component.html',
  styleUrls: ['./admin-jobpost.component.css']
})
export class AdminJobpostComponent {

  constructor(private jobService: ApiService, private toastMsg:MessageService,
    private router: Router){}

  jobPostData:any = {
    jobTitle: '',
    place: '',
    salary:'',
    shift:''
  }

  onSubmit(){
    this.jobService.PostNewJob(this.jobPostData).subscribe((res)=> {
      console.log(res);
      this.toastMsg.add({ severity: 'success', summary: 'Success', detail: "Succcessfully new job posted", life: 5500 });
      this.jobPostData.reset();
    })
  }

}
