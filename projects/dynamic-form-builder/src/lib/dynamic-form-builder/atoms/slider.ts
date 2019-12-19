import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
    selector: 'slider',
    template: `
      <div [formGroup]="form" >
      <label class="col-md-0 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
        <input *ngIf="!field.multiline" type="hidden" class="form-control" [id]="field.field" [name]="field.field">
        
        <mat-slider
   class = "tp-margin"
   [disabled] = "false"
   [invert] = "false"      
   [thumbLabel] = "false"
   [max]="field.max"
   [min]="field.min"    
   [vertical] = "false">
</mat-slider>

      </div> 
    `,
    styles: [`
    .form-control {
      display: none;
    
    }
    
  `]
})
export class SliderComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    constructor() {

      // this.form.controls = this.field.name;
      // console.log("form",this.form);

    }
}