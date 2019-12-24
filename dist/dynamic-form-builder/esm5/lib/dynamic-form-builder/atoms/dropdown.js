/**
 * @fileoverview added by tsickle
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
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-md-8 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <select class=\"form-control\" [id]=\"field.field\">\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.label}}</option>\n        </select>\n      </div> \n    ",
                    styles: ["\n     .form-control {\n      display:none\n    } "
                    ]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBc0JJO1FBSFMsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUt4QixDQUFDOztnQkF4QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsaVdBU1Q7b0JBQ0QsTUFBTSxFQUFDLENBQUMsb0RBR0w7cUJBQ0o7aUJBQ0Y7Ozs7O3dCQUVJLEtBQUs7dUJBQ0wsS0FBSzs7SUFLVix3QkFBQztDQUFBLEFBekJELElBeUJDO1NBUFksaUJBQWlCOzs7SUFDMUIsa0NBQXdCOztJQUN4QixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTggZm9ybS1jb250cm9sLWxhYmVsXCIgW2F0dHIuZm9yXT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW2lkXT1cImZpZWxkLmZpZWxkXCI+XG4gICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLm9wdGlvbnNcIiBbdmFsdWVdPVwib3B0LmtleVwiPnt7b3B0LmxhYmVsfX08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj4gXG4gICAgYCxcbiAgICBzdHlsZXM6W2BcbiAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBkaXNwbGF5Om5vbmVcbiAgICB9IGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbn0iXX0=