/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/checkbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class CheckBoxComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get isValid() { return this.form.controls[this.field.name].valid; }
    /**
     * @return {?}
     */
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}
CheckBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox',
                template: `
      <div [formGroup]="form">
      <label class="col-md-12 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
        <div [formGroupName]="field.field" >
          <div *ngFor="let opt of field.options" class="form-check form-check">
          <label class="form-check-label">
             <input [formControlName]="opt.key" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
             {{opt.label}}</label>
          </div>
        </div>

      </div> 
    `
            },] },
];
CheckBoxComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CheckBoxComponent.prototype.field;
    /** @type {?} */
    CheckBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9CM0MsTUFBTSxPQUFPLGlCQUFpQjtJQWxCOUI7UUFtQmEsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUk1QixDQUFDOzs7O0lBRkcsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7SUFDbkUsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztZQXRCdEUsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0tBY1Q7YUFDSjs7O29CQUVJLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGtDQUF3Qjs7SUFDeEIsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0xMiBmb3JtLWNvbnRyb2wtbGFiZWxcIiBbYXR0ci5mb3JdPVwiZmllbGQubGFiZWxcIj5cbiAgICAgIHt7ZmllbGQubGFiZWx9fVxuICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cE5hbWVdPVwiZmllbGQuZmllbGRcIiA+XG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLm9wdGlvbnNcIiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVja1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJvcHQua2V5XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJpbmxpbmVDaGVja2JveDFcIiB2YWx1ZT1cIm9wdGlvbjFcIiAvPlxuICAgICAgICAgICAgIHt7b3B0LmxhYmVsfX08L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+IFxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tCb3hDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xuICAgIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG59Il19