import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
  selector: 'textbox',
  template: `
      <div [formGroup]="form">
      <label class="col-md-0 form-control-label labeloverflow" [attr.for]="field.label">
      {{field.label}}
      </label>
    
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.field" [name]="field.field" >
        <textarea *ngIf="field.multiline"  [id]="field.field"
        rows="20" class="form-control" [placeholder]="field.placeholder"></textarea>

      </div> 
    `,
    styles:[`
    .form-control {
      display: none;
    }
    @media only screen and (max-width: 600px) {
      .labeloverflow {
       float: left;
      }
    `]
})
export class TextBoxComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

 
  
  constructor() {

    // this.form.controls = this.field.name;
    // console.log("form",this.form);

  }
 
}