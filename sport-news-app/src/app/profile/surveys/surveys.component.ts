import { Component, OnInit } from '@angular/core';
import  surveys from '../../mockedData/surveys'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  
  questionContent = surveys.questions ;
  viewMode = 'open';
  submitted: boolean = false;
  radioTest: FormGroup;

  constructor(private frmBuilder: FormBuilder,) { }

  ngOnInit() {
   this.radioTest = this.frmBuilder.group({
    answer: ["", [Validators.required]]
   }) 
  }

  get f() {
    return this.radioTest.controls;
  }

  submit(data){
    this.submitted = true; 
    if (this.radioTest.invalid) {
      return;
    }  
    var result = this.questionContent.find(object => object.id === data);
    result.status = "closed";
    this.radioTest.reset();
    
  }

}
