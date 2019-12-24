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
                    template: "\n      <div [formGroup]=\"form\" >\n      <label class=\"col-md-0 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <input *ngIf=\"!field.multiline\" type=\"hidden\" class=\"form-control\" [id]=\"field.field\" [name]=\"field.field\">\n        \n        <mat-slider\n   class = \"tp-margin\"\n   [disabled] = \"false\"\n   [invert] = \"false\"      \n   [thumbLabel] = \"false\"\n   [max]=\"field.max\"\n   [min]=\"field.min\"    \n   [vertical] = \"false\">\n</mat-slider>\n\n      </div> \n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUczQztJQTRCSTtRQUVFLHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFSMUIsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQVV4QixDQUFDO0lBUkQsc0JBQUksb0NBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkUsc0JBQUksb0NBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7O2dCQTFCdEUsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsK2hCQWtCVDtpQkFDSjs7Ozs7d0JBRUksS0FBSzt1QkFDTCxLQUFLOztJQVVWLHNCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FaWSxlQUFlOzs7SUFDeEIsZ0NBQXdCOztJQUN4QiwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHRleHQsZW1haWwsdGVsLHRleHRhcmVhLHBhc3N3b3JkLCBcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2xpZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiA+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMCBmb3JtLWNvbnRyb2wtbGFiZWxcIiBbYXR0ci5mb3JdPVwiZmllbGQubGFiZWxcIj5cbiAgICAgIHt7ZmllbGQubGFiZWx9fVxuICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCAqbmdJZj1cIiFmaWVsZC5tdWx0aWxpbmVcIiB0eXBlPVwiaGlkZGVuXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbaWRdPVwiZmllbGQuZmllbGRcIiBbbmFtZV09XCJmaWVsZC5maWVsZFwiPlxuICAgICAgICBcbiAgICAgICAgPG1hdC1zbGlkZXJcbiAgIGNsYXNzID0gXCJ0cC1tYXJnaW5cIlxuICAgW2Rpc2FibGVkXSA9IFwiZmFsc2VcIlxuICAgW2ludmVydF0gPSBcImZhbHNlXCIgICAgICBcbiAgIFt0aHVtYkxhYmVsXSA9IFwiZmFsc2VcIlxuICAgW21heF09XCJmaWVsZC5tYXhcIlxuICAgW21pbl09XCJmaWVsZC5taW5cIiAgICBcbiAgIFt2ZXJ0aWNhbF0gPSBcImZhbHNlXCI+XG48L21hdC1zbGlkZXI+XG5cbiAgICAgIDwvZGl2PiBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG4gICAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICAgIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cbiAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgIC8vIHRoaXMuZm9ybS5jb250cm9scyA9IHRoaXMuZmllbGQubmFtZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybVwiLHRoaXMuZm9ybSk7XG5cbiAgICB9XG59Il19