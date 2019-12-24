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
      <label class="form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
        <div [formGroupName]="field.field" >
          <div *ngFor="let opt of field.options" class="form-check form-check">
          <label class="form-check-label">
             <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9CM0MsTUFBTSxPQUFPLGlCQUFpQjtJQWxCOUI7UUFtQmEsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUk1QixDQUFDOzs7O0lBRkcsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7SUFDbkUsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztZQXRCdEUsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0tBY1Q7YUFDSjs7O29CQUVJLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGtDQUF3Qjs7SUFDeEIsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY29udHJvbC1sYWJlbFwiIFthdHRyLmZvcl09XCJmaWVsZC5sYWJlbFwiPlxuICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwTmFtZV09XCJmaWVsZC5maWVsZFwiID5cbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQub3B0aW9uc1wiIGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImlubGluZUNoZWNrYm94MVwiIHZhbHVlPVwib3B0aW9uMVwiIC8+XG4gICAgICAgICAgICAge3tvcHQubGFiZWx9fTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj4gXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja0JveENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG4gICAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICAgIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cbn0iXX0=