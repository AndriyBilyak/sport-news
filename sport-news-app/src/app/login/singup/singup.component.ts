import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

// TODO: rename SingupComponent => SingInComponent
// TODO: add form and validation
// TODO:

export class SingupComponent implements OnInit {

  constructor(
    private amplifyService: AmplifyService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  logIn() {
    // TODO: collect username and password form form and set into request
    this.amplifyService.auth().signIn(
      {
        username: 'andriy.mbilyak@gmail.com',
        password: 'testtest'
      }
    )
    .then(data => {
      // TODO: navigate to home page
      this.router.navigate(['./home']);
      console.log(data)
    })
    .catch(err => {
      // TODO: handle errors on login
      console.log(err)
    });
  }

}
