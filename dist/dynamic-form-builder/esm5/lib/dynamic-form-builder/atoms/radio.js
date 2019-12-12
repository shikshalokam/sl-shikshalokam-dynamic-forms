/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/radio.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.field = {};
    }
    RadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'radio',
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-md-12 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [formControlName]=\"field.field\" [id]=\"field.field\" [value]=\"opt.key\" >\n          <label class=\"form-check-label\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div> \n    "
                },] },
    ];
    RadioComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return RadioComponent;
}());
export { RadioComponent };
if (false) {
    /** @type {?} */
    RadioComponent.prototype.field;
    /** @type {?} */
    RadioComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUFBO1FBaUJhLFVBQUssR0FBTyxFQUFFLENBQUM7SUFFNUIsQ0FBQzs7Z0JBbkJBLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLDZlQVlUO2lCQUNKOzs7d0JBRUksS0FBSzt1QkFDTCxLQUFLOztJQUNWLHFCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FIWSxjQUFjOzs7SUFDdkIsK0JBQXdCOztJQUN4Qiw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmFkaW8nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTEyIGZvcm0tY29udHJvbC1sYWJlbFwiIFthdHRyLmZvcl09XCJmaWVsZC5sYWJlbFwiPlxuICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLm9wdGlvbnNcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5maWVsZFwiIFtpZF09XCJmaWVsZC5maWVsZFwiIFt2YWx1ZV09XCJvcHQua2V5XCIgPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgIHt7b3B0LmxhYmVsfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcbn0iXX0=