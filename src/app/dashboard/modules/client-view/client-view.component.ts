import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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
    private dialogRef: MatDialogRef<ClientViewComponent>,) {
    this.userForm=new FormGroup({
      id:new FormControl(''),
      userId:new FormControl(''),
      title:new FormControl('',[Validators.required]),
      body:new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
    // this.getUser();
  }

  userDetails:any
  // getUser() {
  //   this.userservice.getUser().subscribe((res) => {
  //     if (res) {
  //       this.userDetails = res.userData;
  //     }
  //   })
  // }

  onSubmit(){
    this.userForm.get('id')?.setValue(1)
    this.userForm.get('userId')?.setValue(11)
    console.log(this.userForm.value)
    // this.spinner=true
    // this.userservice.addUser(this.userForm.value).subscribe((res)=>{
    //    if (!res.error) {
    //     this.spinner=false
    //     this.toastr.success(res.message);
    //     this.userForm.reset();
    //     this.getUser();
    //     this.dialogRef.close('add');
    //   } else {
    //     this.toastr.error(res.message);
    //   }
    // }, (err) => {
    //   if (err.status) {
    //     this.toastr.error(err.error.message);
    //   } else {
    //     this.toastr.error('CONNECTION_ERROR');
    //   }
    // })
  }
  cancel() {
    this.dialogRef.close();
  }
}
