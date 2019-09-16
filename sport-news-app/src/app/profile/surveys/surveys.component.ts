import { Component, OnInit } from '@angular/core';
import  surveys from '../../mockedData/surveys'

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  questionContent = surveys.questions ;

  constructor() { }

  ngOnInit() {
   
  }

}
