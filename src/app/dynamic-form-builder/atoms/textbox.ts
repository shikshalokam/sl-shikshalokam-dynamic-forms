import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
    selector: 'textbox',
    template: `
      <div [formGroup]="form" >
    
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.field" [name]="field.field" [formControlName]="field.field">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.field" [id]="field.field"
        rows="20" class="form-control" [placeholder]="field.placeholder"></textarea>

      </div> 
    `
})
export class TextBoxComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    constructor() {

      // this.form.controls = this.field.name;
      // console.log("form",this.form);

    }
}