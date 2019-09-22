import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css'],
})
export class SurveysComponent implements OnInit {
  questionContent;
  viewMode = 'open';
  submitted: boolean = false;
  radioTest: FormGroup;

  constructor(private frmBuilder: FormBuilder, private appDataService: AppDataService) {}

  ngOnInit() {
    this.getSurveys();
    this.radioTest = this.frmBuilder.group({
      answer: ['', [Validators.required]],
    });
  }

  get f() {
    return this.radioTest.controls;
  }

  submit(data) {
    this.submitted = true;
    if (this.radioTest.invalid) {
      return;
    }
    var result = this.questionContent.find(object => object.id === data);
    result.status = 'closed';
    this.radioTest.reset();
  }

  private getSurveys() {
    this.appDataService.getSurveys().subscribe(data => {
      this.questionContent = data;
    });
  }
}
