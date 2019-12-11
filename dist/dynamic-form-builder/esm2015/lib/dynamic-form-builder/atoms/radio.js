/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/radio.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class RadioComponent {
    constructor() {
        this.field = {};
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'radio',
                template: `
      <div [formGroup]="form">
        <div class="form-check" *ngFor="let opt of field.options">
          <input class="form-check-input" type="radio" [formControlName]="field.field" [id]="field.field" [value]="opt.key" >
          <label class="form-check-label">
            {{opt.label}}
          </label>
        </div>
      </div> 
    `
            },] },
];
RadioComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioComponent.prototype.field;
    /** @type {?} */
    RadioComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWUzQyxNQUFNLE9BQU8sY0FBYztJQWIzQjtRQWNhLFVBQUssR0FBTyxFQUFFLENBQUM7SUFFNUIsQ0FBQzs7O1lBaEJBLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFOzs7Ozs7Ozs7S0FTVDthQUNKOzs7b0JBRUksS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sK0JBQXdCOztJQUN4Qiw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmFkaW8nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQub3B0aW9uc1wiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmZpZWxkXCIgW2lkXT1cImZpZWxkLmZpZWxkXCIgW3ZhbHVlXT1cIm9wdC5rZXlcIiA+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAge3tvcHQubGFiZWx9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IFxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xufSJdfQ==