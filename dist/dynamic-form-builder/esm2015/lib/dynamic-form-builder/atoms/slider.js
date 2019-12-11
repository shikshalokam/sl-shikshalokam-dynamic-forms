/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/slider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// text,email,tel,textarea,password, 
export class SliderComponent {
    constructor() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    /**
     * @return {?}
     */
    get isValid() { return this.form.controls[this.field.name].valid; }
    /**
     * @return {?}
     */
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'slider',
                template: `
      <div [formGroup]="form" >
    
        <input *ngIf="!field.multiline" type="hidden" class="form-control"  [id]="field.field" [name]="field.field" [formControlName]="field.field">
        
        <mat-slider
   class = "tp-margin"
   [disabled] = "false"
   [invert] = "false"      
   [thumbLabel] = "false"
   [max]="field.max"
   [min]="field.min"    
   [vertical] = "false">
</mat-slider>

      </div> 
    `
            },] },
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [];
SliderComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SliderComponent.prototype.field;
    /** @type {?} */
    SliderComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQXVCM0MsTUFBTSxPQUFPLGVBQWU7SUFNeEI7UUFFRSx3Q0FBd0M7UUFDeEMsaUNBQWlDO1FBUjFCLFVBQUssR0FBTyxFQUFFLENBQUM7SUFVeEIsQ0FBQzs7OztJQVJELElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O0lBQ25FLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7WUF4QnRFLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0tBZ0JUO2FBQ0o7Ozs7O29CQUVJLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGdDQUF3Qjs7SUFDeEIsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyB0ZXh0LGVtYWlsLHRlbCx0ZXh0YXJlYSxwYXNzd29yZCwgXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NsaWRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCIgPlxuICAgIFxuICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZmllbGQubXVsdGlsaW5lXCIgdHlwZT1cImhpZGRlblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIFtpZF09XCJmaWVsZC5maWVsZFwiIFtuYW1lXT1cImZpZWxkLmZpZWxkXCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5maWVsZFwiPlxuICAgICAgICBcbiAgICAgICAgPG1hdC1zbGlkZXJcbiAgIGNsYXNzID0gXCJ0cC1tYXJnaW5cIlxuICAgW2Rpc2FibGVkXSA9IFwiZmFsc2VcIlxuICAgW2ludmVydF0gPSBcImZhbHNlXCIgICAgICBcbiAgIFt0aHVtYkxhYmVsXSA9IFwiZmFsc2VcIlxuICAgW21heF09XCJmaWVsZC5tYXhcIlxuICAgW21pbl09XCJmaWVsZC5taW5cIiAgICBcbiAgIFt2ZXJ0aWNhbF0gPSBcImZhbHNlXCI+XG48L21hdC1zbGlkZXI+XG5cbiAgICAgIDwvZGl2PiBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG4gICAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICAgIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cbiAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgIC8vIHRoaXMuZm9ybS5jb250cm9scyA9IHRoaXMuZmllbGQubmFtZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybVwiLHRoaXMuZm9ybSk7XG5cbiAgICB9XG59Il19