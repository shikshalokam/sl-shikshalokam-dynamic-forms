/**
 * @fileoverview added by tsickle
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
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-md-8 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\" \n         [id]=\"field.field\" [name]=\"field.field\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [id]=\"field.field\"\n        rows=\"20\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n\n      </div> \n    ",
                    styles: ["\n    .form-control {\n      display: none;\n    }\n    \n  "]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHM0M7SUEyQkk7UUFFRSx3Q0FBd0M7UUFDeEMsaUNBQWlDO1FBUjFCLFVBQUssR0FBTyxFQUFFLENBQUM7SUFVeEIsQ0FBQztJQVJELHNCQUFJLGtDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ25FLHNCQUFJLGtDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBOztnQkF6QnRFLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsUUFBUSxFQUFFLDhnQkFXVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQyw4REFLVixDQUFDO2lCQUNIOzs7Ozt3QkFFSSxLQUFLO3VCQUNMLEtBQUs7O0lBVVYsb0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQVpZLGFBQWE7OztJQUN0Qiw4QkFBd0I7O0lBQ3hCLDZCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdGV4dCxlbWFpbCx0ZWwsdGV4dGFyZWEscGFzc3dvcmQsIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkYXRlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC04IGZvcm0tY29udHJvbC1sYWJlbFwiIFthdHRyLmZvcl09XCJmaWVsZC5sYWJlbFwiPlxuICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0ICpuZ0lmPVwiIWZpZWxkLm11bHRpbGluZVwiIFthdHRyLnR5cGVdPVwiZmllbGQudHlwZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICBbaWRdPVwiZmllbGQuZmllbGRcIiBbbmFtZV09XCJmaWVsZC5maWVsZFwiPlxuICAgICAgICA8dGV4dGFyZWEgKm5nSWY9XCJmaWVsZC5tdWx0aWxpbmVcIiBbY2xhc3MuaXMtaW52YWxpZF09XCJpc0RpcnR5ICYmICFpc1ZhbGlkXCIgW2lkXT1cImZpZWxkLmZpZWxkXCJcbiAgICAgICAgcm93cz1cIjIwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXJcIj48L3RleHRhcmVhPlxuXG4gICAgICA8L2Rpdj4gXG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG4gICAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICAgIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cbiAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgIC8vIHRoaXMuZm9ybS5jb250cm9scyA9IHRoaXMuZmllbGQubmFtZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybVwiLHRoaXMuZm9ybSk7XG5cbiAgICB9XG59Il19