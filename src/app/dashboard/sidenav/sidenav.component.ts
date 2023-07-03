import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus:boolean=false
  sideBarOpen:boolean=false
  // @Output() sendChildValue: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(public router:Router,) {

    }

    AdminView:Boolean = false;
    ManagerView:Boolean = false
    ngOnInit(): void {
    }



}
