import { Component, OnInit } from '@angular/core';
import  surveys from '../../mockedData/surveys'

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  
  questionContent = surveys.questions ;
  viewMode = 'open';
  submitted: boolean = false;

  

  constructor() { }

  ngOnInit() {}
  
  submit(data){
    this.submitted = true;   
    var result = this.questionContent.find(object => object.id === data);
    result.status = "closed"
  }

}
