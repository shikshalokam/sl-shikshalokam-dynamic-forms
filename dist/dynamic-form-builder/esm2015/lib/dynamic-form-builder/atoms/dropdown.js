/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/dropdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class DropDownComponent {
    constructor() {
        this.field = {};
    }
}
DropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'dropdown',
                template: `
      <div [formGroup]="form">
      <label class="col-md-8 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
        <select class="form-control" [id]="field.field">
          <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.label}}</option>
        </select>
      </div> 
    `
            },] },
];
/** @nocollapse */
DropDownComponent.ctorParameters = () => [];
DropDownComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.field;
    /** @type {?} */
    DropDownComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWUzQyxNQUFNLE9BQU8saUJBQWlCO0lBSTFCO1FBSFMsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUt4QixDQUFDOzs7WUFuQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7OztLQVNUO2FBQ0o7Ozs7O29CQUVJLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGtDQUF3Qjs7SUFDeEIsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Ryb3Bkb3duJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC04IGZvcm0tY29udHJvbC1sYWJlbFwiIFthdHRyLmZvcl09XCJmaWVsZC5sYWJlbFwiPlxuICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtpZF09XCJmaWVsZC5maWVsZFwiPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdC5rZXlcIj57e29wdC5sYWJlbH19PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+IFxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG59Il19