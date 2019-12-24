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
                    styles: ["\n     .form-control {\n      display:none\n    } "
                    ]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNDO0lBa0NJO1FBRUUsd0NBQXdDO1FBQ3hDLGlDQUFpQztRQVIxQixVQUFLLEdBQU8sRUFBRSxDQUFDO0lBVXhCLENBQUM7SUFSRCxzQkFBSSxvQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRSxzQkFBSSxvQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTs7Z0JBaEN0RSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSwraEJBa0JUO29CQUVELE1BQU0sRUFBQyxDQUFDLG9EQUdMO3FCQUNKO2lCQUNGOzs7Ozt3QkFFSSxLQUFLO3VCQUNMLEtBQUs7O0lBVVYsc0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQVpZLGVBQWU7OztJQUN4QixnQ0FBd0I7O0lBQ3hCLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdGV4dCxlbWFpbCx0ZWwsdGV4dGFyZWEscGFzc3dvcmQsIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzbGlkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiID5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0wIGZvcm0tY29udHJvbC1sYWJlbFwiIFthdHRyLmZvcl09XCJmaWVsZC5sYWJlbFwiPlxuICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0ICpuZ0lmPVwiIWZpZWxkLm11bHRpbGluZVwiIHR5cGU9XCJoaWRkZW5cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtpZF09XCJmaWVsZC5maWVsZFwiIFtuYW1lXT1cImZpZWxkLmZpZWxkXCI+XG4gICAgICAgIFxuICAgICAgICA8bWF0LXNsaWRlclxuICAgY2xhc3MgPSBcInRwLW1hcmdpblwiXG4gICBbZGlzYWJsZWRdID0gXCJmYWxzZVwiXG4gICBbaW52ZXJ0XSA9IFwiZmFsc2VcIiAgICAgIFxuICAgW3RodW1iTGFiZWxdID0gXCJmYWxzZVwiXG4gICBbbWF4XT1cImZpZWxkLm1heFwiXG4gICBbbWluXT1cImZpZWxkLm1pblwiICAgIFxuICAgW3ZlcnRpY2FsXSA9IFwiZmFsc2VcIj5cbjwvbWF0LXNsaWRlcj5cblxuICAgICAgPC9kaXY+IFxuICAgIGBcbiAgICAsXG4gICAgc3R5bGVzOltgXG4gICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTpub25lXG4gICAgfSBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcbiAgICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gICAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgLy8gdGhpcy5mb3JtLmNvbnRyb2xzID0gdGhpcy5maWVsZC5uYW1lO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmb3JtXCIsdGhpcy5mb3JtKTtcblxuICAgIH1cbn0iXX0=