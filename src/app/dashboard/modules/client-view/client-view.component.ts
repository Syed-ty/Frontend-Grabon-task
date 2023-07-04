import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ResourceService } from '../../resource.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
  userForm!:FormGroup
  spinner:boolean=false;
  inputEmpId:any;
  inputValueNo:boolean=false;
  constructor(
    private dialogRef: MatDialogRef<ClientViewComponent>,
    private service :ResourceService,
    private toaster:ToastrService
    ) {
    this.userForm=new FormGroup({
      id:new FormControl(''),
      userId:new FormControl(''),
      title:new FormControl('',[Validators.required]),
      body:new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }

  userDetails:any

  initialValue:any
  onSubmit(){
    this.userForm.get('id')?.setValue(100)
    this.userForm.get('userId')?.setValue(11)
    this.service.addApi(this.userForm.value).subscribe((res)=>{
       if (!res.err) {
        this.toaster.success(res.message);
        this.userForm.reset();
        this.dialogRef.close('add');
      } else {
        this.toaster.error(res.message);
      }
    }, (err) => {
      if (err.status) {
        this.toaster.error(err.error.message);
      } else {
        this.toaster.error('CONNECTION_ERROR');
      }
    })
  }
  cancel() {
    this.dialogRef.close();
  }
}
