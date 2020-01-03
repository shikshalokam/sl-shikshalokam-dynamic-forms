import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'radio',
    template: `
      <div [formGroup]="form">
      <label class="col-sm-12 form-control-label labeloverflow" [attr.for]="field.label">
      {{field.label}}
    </label>
        <div class="form-check rnxtline" *ngFor="let opt of field.options">
          <input class="form-check-input" type="radio" [id]="field.field" [value]="opt.key">
          <label class="form-check-label space">
            {{opt.label}}
          </label>
        </div>
      </div> 
    `,
    styles:[`
    .form-control {
      display: none;
    }
    .space {
      padding-left: 5px
    }
    .labeloverflow {
      float: left;
      padding-top: 5px;
    }
     .rnxtline {
       width: 100%
     }
    `]
})
export class RadioComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
}