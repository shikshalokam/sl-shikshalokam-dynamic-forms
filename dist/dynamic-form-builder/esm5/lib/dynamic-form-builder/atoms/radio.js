/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/radio.ts
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
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [id]=\"field.field\" [value]=\"opt.key\">\n          <label class=\"form-check-label\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div> \n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUFBO1FBaUJhLFVBQUssR0FBTyxFQUFFLENBQUM7SUFFNUIsQ0FBQzs7Z0JBbkJBLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLGdjQVlUO2lCQUNKOzs7d0JBRUksS0FBSzt1QkFDTCxLQUFLOztJQUNWLHFCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FIWSxjQUFjOzs7SUFDdkIsK0JBQXdCOztJQUN4Qiw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmFkaW8nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jb250cm9sLWxhYmVsXCIgW2F0dHIuZm9yXT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQub3B0aW9uc1wiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBbaWRdPVwiZmllbGQuZmllbGRcIiBbdmFsdWVdPVwib3B0LmtleVwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgIHt7b3B0LmxhYmVsfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcbn0iXX0=