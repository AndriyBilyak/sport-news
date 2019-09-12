import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-block',
  templateUrl: './ad-block.component.html',
  styleUrls: ['./ad-block.component.css']
})
export class AdBlockComponent implements OnInit {

  @Input() childAdBlockContent: object;
  constructor() { }

  ngOnInit() {
  }

}
