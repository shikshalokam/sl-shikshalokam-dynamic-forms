/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/dropdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.field = {};
    }
    DropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dropdown',
                    template: "\n      <div [formGroup]=\"form\">\n        <select class=\"form-control\" [id]=\"field.field\" [formControlName]=\"field.field\">\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.label}}</option>\n        </select>\n      </div> \n    "
                },] },
    ];
    /** @nocollapse */
    DropDownComponent.ctorParameters = function () { return []; };
    DropDownComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DropDownComponent;
}());
export { DropDownComponent };
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.field;
    /** @type {?} */
    DropDownComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQWNJO1FBSFMsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUt4QixDQUFDOztnQkFoQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsOFFBTVQ7aUJBQ0o7Ozs7O3dCQUVJLEtBQUs7dUJBQ0wsS0FBSzs7SUFLVix3QkFBQztDQUFBLEFBakJELElBaUJDO1NBUFksaUJBQWlCOzs7SUFDMUIsa0NBQXdCOztJQUN4QixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW2lkXT1cImZpZWxkLmZpZWxkXCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5maWVsZFwiPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdC5rZXlcIj57e29wdC5sYWJlbH19PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+IFxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG59Il19