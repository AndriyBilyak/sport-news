import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser = null;
  user = 'currentUser';
  constructor(
  private route: ActivatedRoute,
  private router: Router,
) {}


  ngOnInit() {
    this.currentUser = 'fuck this shit';
  }
}
