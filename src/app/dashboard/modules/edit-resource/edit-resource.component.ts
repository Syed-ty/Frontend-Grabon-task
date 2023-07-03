import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.css']
})
export class EditResourceComponent implements OnInit {
  userForm!:FormGroup
  spinner:boolean=false
  constructor(private fb: FormBuilder,
   @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<EditResourceComponent>,
    ) {
      this.userForm=new FormGroup({
        id:new FormControl(''),
        userId:new FormControl(''),
        title:new FormControl('',[Validators.required]),
        body:new FormControl('',Validators.required)
      })
      if (this.editData) {
        this.userForm.controls['id'].setValue(this.editData.id);
        this.userForm.controls['userId'].setValue(this.editData.userId);
        this.userForm.controls['title'].setValue(this.editData.title);
        this.userForm.controls['body'].setValue(this.editData.body);
    }
  }

  isDisabled =true

  ngOnInit(): void {
    // this.getUser()
  }
  userDetails!:any
  // getUser() {
  //   this.userservice.getUser().subscribe((res) => {
  //     if (res) {
  //       this.userDetails = res.userData;
  //     }
  //   })
  // }
  onSubmit(){
    console.log(this.userForm.value)
  //   this.spinner=true
  //  this.userservice.editUser(this.userForm.value,this.editData._id).subscribe((res)=>{
  //   if (!res.error) {
  //     this.spinner=false
  //     this.toast.success(res.message);
  //     this.userForm.reset();
  //     this.dialogRef.close('update');
  //   } else {
  //     this.toast.error(res.message);
  //   }
  // }, err => {
  //   if (err.status) {
  //     this.toast.error(err.error.message);
  //   } else {
  //     this.toast.error("CONNECTION_ERROR");
  //   }
  // });
}
cancel(){
  this.dialogRef.close();
}
}

