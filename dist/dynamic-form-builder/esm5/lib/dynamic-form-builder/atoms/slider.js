/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/slider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// text,email,tel,textarea,password, 
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    Object.defineProperty(SliderComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    SliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slider',
                    template: "\n      <div [formGroup]=\"form\" >\n    \n        <input *ngIf=\"!field.multiline\" type=\"hidden\" class=\"form-control\"  [id]=\"field.field\" [name]=\"field.field\" [formControlName]=\"field.field\">\n        \n        <mat-slider\n   class = \"tp-margin\"\n   [disabled] = \"false\"\n   [invert] = \"false\"      \n   [thumbLabel] = \"false\"\n   [max]=\"field.max\"\n   [min]=\"field.min\"    \n   [vertical] = \"false\">\n</mat-slider>\n\n      </div> \n    "
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return []; };
    SliderComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return SliderComponent;
}());
export { SliderComponent };
if (false) {
    /** @type {?} */
    SliderComponent.prototype.field;
    /** @type {?} */
    SliderComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUczQztJQTBCSTtRQUVFLHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFSMUIsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQVV4QixDQUFDO0lBUkQsc0JBQUksb0NBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkUsc0JBQUksb0NBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7O2dCQXhCdEUsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsbWRBZ0JUO2lCQUNKOzs7Ozt3QkFFSSxLQUFLO3VCQUNMLEtBQUs7O0lBVVYsc0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQVpZLGVBQWU7OztJQUN4QixnQ0FBd0I7O0lBQ3hCLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdGV4dCxlbWFpbCx0ZWwsdGV4dGFyZWEscGFzc3dvcmQsIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzbGlkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiID5cbiAgICBcbiAgICAgICAgPGlucHV0ICpuZ0lmPVwiIWZpZWxkLm11bHRpbGluZVwiIHR5cGU9XCJoaWRkZW5cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICBbaWRdPVwiZmllbGQuZmllbGRcIiBbbmFtZV09XCJmaWVsZC5maWVsZFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZmllbGRcIj5cbiAgICAgICAgXG4gICAgICAgIDxtYXQtc2xpZGVyXG4gICBjbGFzcyA9IFwidHAtbWFyZ2luXCJcbiAgIFtkaXNhYmxlZF0gPSBcImZhbHNlXCJcbiAgIFtpbnZlcnRdID0gXCJmYWxzZVwiICAgICAgXG4gICBbdGh1bWJMYWJlbF0gPSBcImZhbHNlXCJcbiAgIFttYXhdPVwiZmllbGQubWF4XCJcbiAgIFttaW5dPVwiZmllbGQubWluXCIgICAgXG4gICBbdmVydGljYWxdID0gXCJmYWxzZVwiPlxuPC9tYXQtc2xpZGVyPlxuXG4gICAgICA8L2Rpdj4gXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xuICAgIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG4gIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAvLyB0aGlzLmZvcm0uY29udHJvbHMgPSB0aGlzLmZpZWxkLm5hbWU7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZvcm1cIix0aGlzLmZvcm0pO1xuXG4gICAgfVxufSJdfQ==