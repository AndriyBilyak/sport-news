import { Component, OnInit, Input,Output } from '@angular/core';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() classValue: string;
  @Input() textValue: string;
  @Input() typeValue: string;
  // @Output() submitEvent = new EventEmitter();
  // submit(): void {
  // submitEvent.emit();
  // }
 
  constructor() { }

  ngOnInit() {
  }

}
