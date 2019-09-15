import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  typeInput = 'password';
  isVisible = false;
  constructor() { }

  ngOnInit() {
  }
  changeType() {
    if (this.typeInput === 'password') {
      this.typeInput = 'text';
      this.isVisible = true;
    } else {
      this.typeInput = 'password';
      this.isVisible = false;
    }
  }

}
