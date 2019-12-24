import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'copy',
    template: `
      <div>
        <div (click)="copyElement(field)">
        copy
        </div>
      </div> 
    `
    ,
    styles:[`
     .form-control {
      display:none
    } `
  ]
})
export class CheckBoxComponent {
    @Input() field:any = {};

    // @Output() sendDataToParent = new EventEmitter<string>();
    // @Input() form:FormGroup;
    // get isValid() { return this.form.controls[this.field.name].valid; }
    // get isDirty() { return this.form.controls[this.field.name].dirty; }
}