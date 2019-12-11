/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/dropdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class DropDownComponent {
    constructor() {
        this.field = {};
    }
}
DropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'dropdown',
                template: `
      <div [formGroup]="form">
        <select class="form-control" [id]="field.field" [formControlName]="field.field">
          <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.label}}</option>
        </select>
      </div> 
    `
            },] },
];
/** @nocollapse */
DropDownComponent.ctorParameters = () => [];
DropDownComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.field;
    /** @type {?} */
    DropDownComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVkzQyxNQUFNLE9BQU8saUJBQWlCO0lBSTFCO1FBSFMsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQUt4QixDQUFDOzs7WUFoQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7OztLQU1UO2FBQ0o7Ozs7O29CQUVJLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGtDQUF3Qjs7SUFDeEIsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Ryb3Bkb3duJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtpZF09XCJmaWVsZC5maWVsZFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZmllbGRcIj5cbiAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHQua2V5XCI+e3tvcHQubGFiZWx9fTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PiBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxufSJdfQ==