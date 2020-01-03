import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
    selector: 'date',
    template: `
      <div [formGroup]="form">
      <label class="col-md-8 form-control-label labeloverflow" [attr.for]="field.label">
      {{field.label}}
    </label>
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control" 
         [id]="field.field" [name]="field.field">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [id]="field.field"
        rows="20" class="form-control" [placeholder]="field.placeholder"></textarea>

      </div> 
    `,
    styles:[`
    .form-control {
      display: none;
    } .labeloverflow {
      float: left;
      padding-top: 5px;
    }
    `]
})
export class DateComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    constructor() {

      // this.form.controls = this.field.name;
      // console.log("form",this.form);

    }
}