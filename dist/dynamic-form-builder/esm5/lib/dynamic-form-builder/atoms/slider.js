/**
 * @fileoverview added by tsickle
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
                    template: "\n      <div [formGroup]=\"form\" >\n      <label class=\"col-md-0 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <input *ngIf=\"!field.multiline\" type=\"hidden\" class=\"form-control\" [id]=\"field.field\" [name]=\"field.field\">\n        \n        <mat-slider\n   class = \"tp-margin\"\n   [disabled] = \"false\"\n   [invert] = \"false\"      \n   [thumbLabel] = \"false\"\n   [max]=\"field.max\"\n   [min]=\"field.min\"    \n   [vertical] = \"false\">\n</mat-slider>\n\n      </div> \n    ",
                    styles: ["\n    .form-control {\n      display: none;\n    \n    }\n    \n  "]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNDO0lBbUNJO1FBRUUsd0NBQXdDO1FBQ3hDLGlDQUFpQztRQVIxQixVQUFLLEdBQU8sRUFBRSxDQUFDO0lBVXhCLENBQUM7SUFSRCxzQkFBSSxvQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRSxzQkFBSSxvQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTs7Z0JBakN0RSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSwraEJBa0JUO29CQUNELE1BQU0sRUFBRSxDQUFDLG9FQU1WLENBQUM7aUJBQ0g7Ozs7O3dCQUVJLEtBQUs7dUJBQ0wsS0FBSzs7SUFVVixzQkFBQztDQUFBLEFBekNELElBeUNDO1NBWlksZUFBZTs7O0lBQ3hCLGdDQUF3Qjs7SUFDeEIsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyB0ZXh0LGVtYWlsLHRlbCx0ZXh0YXJlYSxwYXNzd29yZCwgXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NsaWRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCIgPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTAgZm9ybS1jb250cm9sLWxhYmVsXCIgW2F0dHIuZm9yXT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZmllbGQubXVsdGlsaW5lXCIgdHlwZT1cImhpZGRlblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW2lkXT1cImZpZWxkLmZpZWxkXCIgW25hbWVdPVwiZmllbGQuZmllbGRcIj5cbiAgICAgICAgXG4gICAgICAgIDxtYXQtc2xpZGVyXG4gICBjbGFzcyA9IFwidHAtbWFyZ2luXCJcbiAgIFtkaXNhYmxlZF0gPSBcImZhbHNlXCJcbiAgIFtpbnZlcnRdID0gXCJmYWxzZVwiICAgICAgXG4gICBbdGh1bWJMYWJlbF0gPSBcImZhbHNlXCJcbiAgIFttYXhdPVwiZmllbGQubWF4XCJcbiAgIFttaW5dPVwiZmllbGQubWluXCIgICAgXG4gICBbdmVydGljYWxdID0gXCJmYWxzZVwiPlxuPC9tYXQtc2xpZGVyPlxuXG4gICAgICA8L2Rpdj4gXG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIFxuICAgIH1cbiAgICBcbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcbiAgICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gICAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgLy8gdGhpcy5mb3JtLmNvbnRyb2xzID0gdGhpcy5maWVsZC5uYW1lO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmb3JtXCIsdGhpcy5mb3JtKTtcblxuICAgIH1cbn0iXX0=