import { Component, OnInit } from '@angular/core';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 user:any;
check:boolean=true;
  constructor() {

    this.user={Name:'Surya',
  Job:'Student',
  Address:'Pullattukuzhiyil(h) pulpally wayanad',
  Phone:[]
};
   }
 togglecheck()
 {
 this.check=!this.check;
 }
  ngOnInit() {
  }

}
