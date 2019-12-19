/**
 * @fileoverview added by tsickle
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
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-md-12 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [id]=\"field.field\" [value]=\"opt.key\">\n          <label class=\"form-check-label\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div> \n    ",
                    styles: ["\n    .form-control {\n      display: none;\n    }\n    \n  "]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBQUE7UUF1QmEsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUU1QixDQUFDOztnQkF6QkEsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsMGNBWVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUMsOERBS1YsQ0FBQztpQkFDSDs7O3dCQUVJLEtBQUs7dUJBQ0wsS0FBSzs7SUFDVixxQkFBQztDQUFBLEFBekJELElBeUJDO1NBSFksY0FBYzs7O0lBQ3ZCLCtCQUF3Qjs7SUFDeEIsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JhZGlvJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0xMiBmb3JtLWNvbnRyb2wtbGFiZWxcIiBbYXR0ci5mb3JdPVwiZmllbGQubGFiZWxcIj5cbiAgICAgIHt7ZmllbGQubGFiZWx9fVxuICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5vcHRpb25zXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIFtpZF09XCJmaWVsZC5maWVsZFwiIFt2YWx1ZV09XCJvcHQua2V5XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAge3tvcHQubGFiZWx9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IFxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcbn0iXX0=