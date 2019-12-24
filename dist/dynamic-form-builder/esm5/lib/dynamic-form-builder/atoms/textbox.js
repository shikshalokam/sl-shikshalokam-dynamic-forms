/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/textbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// text,email,tel,textarea,password, 
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    Object.defineProperty(TextBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    TextBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'textbox',
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-md-8 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n      </label>\n    \n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.field\" [name]=\"field.field\" >\n        <textarea *ngIf=\"field.multiline\"  [id]=\"field.field\"\n        rows=\"20\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n\n      </div> \n    "
                },] },
    ];
    /** @nocollapse */
    TextBoxComponent.ctorParameters = function () { return []; };
    TextBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return TextBoxComponent;
}());
export { TextBoxComponent };
if (false) {
    /** @type {?} */
    TextBoxComponent.prototype.field;
    /** @type {?} */
    TextBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL3RleHRib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNDO0lBdUJFO1FBRUUsd0NBQXdDO1FBQ3hDLGlDQUFpQztRQVYxQixVQUFLLEdBQVEsRUFBRSxDQUFDO0lBWXpCLENBQUM7SUFWRCxzQkFBSSxxQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRSxzQkFBSSxxQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTs7Z0JBbkJwRSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxtZUFXUDtpQkFDSjs7Ozs7d0JBRUUsS0FBSzt1QkFDTCxLQUFLOztJQWFSLHVCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0FmWSxnQkFBZ0I7OztJQUMzQixpQ0FBeUI7O0lBQ3pCLGdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdGV4dCxlbWFpbCx0ZWwsdGV4dGFyZWEscGFzc3dvcmQsIFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dGJveCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTggZm9ybS1jb250cm9sLWxhYmVsXCIgW2F0dHIuZm9yXT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICAgIDwvbGFiZWw+XG4gICAgXG4gICAgICAgIDxpbnB1dCAqbmdJZj1cIiFmaWVsZC5tdWx0aWxpbmVcIiBbYXR0ci50eXBlXT1cImZpZWxkLnR5cGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICBbaWRdPVwiZmllbGQuZmllbGRcIiBbbmFtZV09XCJmaWVsZC5maWVsZFwiID5cbiAgICAgICAgPHRleHRhcmVhICpuZ0lmPVwiZmllbGQubXVsdGlsaW5lXCIgIFtpZF09XCJmaWVsZC5maWVsZFwiXG4gICAgICAgIHJvd3M9XCIyMFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW3BsYWNlaG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyXCI+PC90ZXh0YXJlYT5cblxuICAgICAgPC9kaXY+IFxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEJveENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cblxuIFxuICBcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyB0aGlzLmZvcm0uY29udHJvbHMgPSB0aGlzLmZpZWxkLm5hbWU7XG4gICAgLy8gY29uc29sZS5sb2coXCJmb3JtXCIsdGhpcy5mb3JtKTtcblxuICB9XG4gXG59Il19