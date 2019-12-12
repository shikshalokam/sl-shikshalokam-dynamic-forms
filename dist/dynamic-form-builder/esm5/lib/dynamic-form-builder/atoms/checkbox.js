/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/checkbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(CheckBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    CheckBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'checkbox',
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-md-12 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <div [formGroupName]=\"field.field\" >\n          <div *ngFor=\"let opt of field.options\" class=\"form-check form-check\">\n          <label class=\"form-check-label\">\n             <input [formControlName]=\"opt.key\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" />\n             {{opt.label}}</label>\n          </div>\n        </div>\n\n      </div> \n    "
                },] },
    ];
    CheckBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return CheckBoxComponent;
}());
export { CheckBoxComponent };
if (false) {
    /** @type {?} */
    CheckBoxComponent.prototype.field;
    /** @type {?} */
    CheckBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUFBO1FBbUJhLFVBQUssR0FBTyxFQUFFLENBQUM7SUFJNUIsQ0FBQztJQUZHLHNCQUFJLHNDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ25FLHNCQUFJLHNDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBOztnQkF0QnRFLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLHNqQkFjVDtpQkFDSjs7O3dCQUVJLEtBQUs7dUJBQ0wsS0FBSzs7SUFHVix3QkFBQztDQUFBLEFBdkJELElBdUJDO1NBTFksaUJBQWlCOzs7SUFDMUIsa0NBQXdCOztJQUN4QixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTEyIGZvcm0tY29udHJvbC1sYWJlbFwiIFthdHRyLmZvcl09XCJmaWVsZC5sYWJlbFwiPlxuICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwTmFtZV09XCJmaWVsZC5maWVsZFwiID5cbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQub3B0aW9uc1wiIGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cIm9wdC5rZXlcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImlubGluZUNoZWNrYm94MVwiIHZhbHVlPVwib3B0aW9uMVwiIC8+XG4gICAgICAgICAgICAge3tvcHQubGFiZWx9fTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj4gXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja0JveENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG4gICAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICAgIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cbn0iXX0=