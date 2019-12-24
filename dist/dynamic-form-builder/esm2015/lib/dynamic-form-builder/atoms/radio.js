/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class RadioComponent {
    constructor() {
        this.field = {};
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'radio',
                template: `
      <div [formGroup]="form">
      <label class="form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
        <div class="form-check" *ngFor="let opt of field.options">
          <input class="form-check-input" type="radio" [id]="field.field" [value]="opt.key">
          <label class="form-check-label">
            {{opt.label}}
          </label>
        </div>
      </div> 
    `
            },] },
];
RadioComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioComponent.prototype.field;
    /** @type {?} */
    RadioComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBa0IzQyxNQUFNLE9BQU8sY0FBYztJQWhCM0I7UUFpQmEsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUU1QixDQUFDOzs7WUFuQkEsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztLQVlUO2FBQ0o7OztvQkFFSSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiwrQkFBd0I7O0lBQ3hCLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyYWRpbycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIiBbYXR0ci5mb3JdPVwiZmllbGQubGFiZWxcIj5cbiAgICAgIHt7ZmllbGQubGFiZWx9fVxuICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5vcHRpb25zXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIFtpZF09XCJmaWVsZC5maWVsZFwiIFt2YWx1ZV09XCJvcHQua2V5XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAge3tvcHQubGFiZWx9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IFxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xufSJdfQ==