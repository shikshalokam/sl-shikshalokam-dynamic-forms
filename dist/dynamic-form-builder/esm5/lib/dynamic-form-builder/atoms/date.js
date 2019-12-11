/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// text,email,tel,textarea,password, 
var DateComponent = /** @class */ (function () {
    function DateComponent() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    Object.defineProperty(DateComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    DateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date',
                    template: "\n      <div [formGroup]=\"form\" >\n    \n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.field\" [name]=\"field.field\" [formControlName]=\"field.field\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [formControlName]=\"field.field\" [id]=\"field.field\"\n        rows=\"20\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n\n      </div> \n    "
                },] },
    ];
    /** @nocollapse */
    DateComponent.ctorParameters = function () { return []; };
    DateComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DateComponent;
}());
export { DateComponent };
if (false) {
    /** @type {?} */
    DateComponent.prototype.field;
    /** @type {?} */
    DateComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNDO0lBa0JJO1FBRUUsd0NBQXdDO1FBQ3hDLGlDQUFpQztRQVIxQixVQUFLLEdBQU8sRUFBRSxDQUFDO0lBVXhCLENBQUM7SUFSRCxzQkFBSSxrQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRSxzQkFBSSxrQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTs7Z0JBaEJ0RSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLFFBQVEsRUFBRSwwZEFRVDtpQkFDSjs7Ozs7d0JBRUksS0FBSzt1QkFDTCxLQUFLOztJQVVWLG9CQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FaWSxhQUFhOzs7SUFDdEIsOEJBQXdCOztJQUN4Qiw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHRleHQsZW1haWwsdGVsLHRleHRhcmVhLHBhc3N3b3JkLCBcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZGF0ZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCIgPlxuICAgIFxuICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZmllbGQubXVsdGlsaW5lXCIgW2F0dHIudHlwZV09XCJmaWVsZC50eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgW2lkXT1cImZpZWxkLmZpZWxkXCIgW25hbWVdPVwiZmllbGQuZmllbGRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmZpZWxkXCI+XG4gICAgICAgIDx0ZXh0YXJlYSAqbmdJZj1cImZpZWxkLm11bHRpbGluZVwiIFtjbGFzcy5pcy1pbnZhbGlkXT1cImlzRGlydHkgJiYgIWlzVmFsaWRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmZpZWxkXCIgW2lkXT1cImZpZWxkLmZpZWxkXCJcbiAgICAgICAgcm93cz1cIjIwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXJcIj48L3RleHRhcmVhPlxuXG4gICAgICA8L2Rpdj4gXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcbiAgICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gICAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgLy8gdGhpcy5mb3JtLmNvbnRyb2xzID0gdGhpcy5maWVsZC5uYW1lO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmb3JtXCIsdGhpcy5mb3JtKTtcblxuICAgIH1cbn0iXX0=