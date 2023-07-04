import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ResourceService } from '../resource.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { SharedService } from '../shared/shared.service';
import { EditResourceComponent } from '../modules/edit-resource/edit-resource.component';
import { ClientViewComponent } from '../modules/client-view/client-view.component';
import { ToastrService } from 'ngx-toastr';
const ELEMENT_DATA: any[] = [];


@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  displayedColumns: string[] = ['id','userId', 'title', 'body','action'];



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  spinner: boolean = false;
  dataSource: MatTableDataSource<any>;
  datePipe = new DatePipe('en-US');
  minDate = new Date();
  clearAllButton: boolean = false;
  paginate: any = {
    length: 0,
    pageIndex: 0,
    pageSize: 10,
    previousPageIndex: 1
  }
  length = 0;
  pageIndex = 1;
  pageSize = 10;
  startIndex = 0;
  searchText = '';
  pageSizeOptions: number[] = [5, 10, 25, 50];
  ArrayResponse: any
  constructor(
     public dialog: MatDialog,
     private service: ResourceService,
      private router: Router,
      public dialogss: MatDialog,
       private sharedService: SharedService,
       private toaster :ToastrService
       ) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit(): void {
    this.getData()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  getData() {
    this.service.getApi().subscribe({
      next: (res: any) => {
        this.ArrayResponse = res.response
        this.dataSource = new MatTableDataSource([...this.ArrayResponse]);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onPageChange(event: any) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
  }


  editDialog(row:any){
    const dialogRef= this.dialogss.open(EditResourceComponent,{
      width:'450px',
      data:row
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      if (result === 'update') {
        this.getData();
        this.spinner=false;
      }
    });
  }

  deleteData:any
  deleteId:any
  getUserDataToDelete(data: any) {
    this.deleteData = data;
    this.deleteId = data.id;
  }


  deleteUser(){
    let obj = {
      "id":this.deleteId
    }
    this.service.deleteApi(obj).subscribe(res => {
      if (!res.error) {
        this.toaster.success(res.message);
        this.getData()
      } else {
        this.toaster.error(res.message);
      }
    })
  }


  openDialog() {
    const dialogRef= this.dialog.open(ClientViewComponent,{
      width:'450px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'add') {
        this.spinner=false;
        this.getData();
      }
    });
  }
}
