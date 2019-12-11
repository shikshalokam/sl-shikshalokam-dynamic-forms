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
                    template: "\n      <div [formGroup]=\"form\">\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [formControlName]=\"field.field\" [id]=\"field.field\" [value]=\"opt.key\" >\n          <label class=\"form-check-label\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div> \n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUFBO1FBY2EsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUU1QixDQUFDOztnQkFoQkEsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsdVhBU1Q7aUJBQ0o7Ozt3QkFFSSxLQUFLO3VCQUNMLEtBQUs7O0lBQ1YscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQUhZLGNBQWM7OztJQUN2QiwrQkFBd0I7O0lBQ3hCLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyYWRpbycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5vcHRpb25zXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZmllbGRcIiBbaWRdPVwiZmllbGQuZmllbGRcIiBbdmFsdWVdPVwib3B0LmtleVwiID5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICB7e29wdC5sYWJlbH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG59Il19