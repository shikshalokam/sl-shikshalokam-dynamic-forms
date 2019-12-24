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
      <label class="col-md-0 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
        <input *ngIf="!field.multiline" type="hidden" class="form-control" [id]="field.field" [name]="field.field">
        
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQXlCM0MsTUFBTSxPQUFPLGVBQWU7SUFNeEI7UUFFRSx3Q0FBd0M7UUFDeEMsaUNBQWlDO1FBUjFCLFVBQUssR0FBTyxFQUFFLENBQUM7SUFVeEIsQ0FBQzs7OztJQVJELElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O0lBQ25FLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7WUExQnRFLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrQlQ7YUFDSjs7Ozs7b0JBRUksS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sZ0NBQXdCOztJQUN4QiwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHRleHQsZW1haWwsdGVsLHRleHRhcmVhLHBhc3N3b3JkLCBcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2xpZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiA+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMCBmb3JtLWNvbnRyb2wtbGFiZWxcIiBbYXR0ci5mb3JdPVwiZmllbGQubGFiZWxcIj5cbiAgICAgIHt7ZmllbGQubGFiZWx9fVxuICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCAqbmdJZj1cIiFmaWVsZC5tdWx0aWxpbmVcIiB0eXBlPVwiaGlkZGVuXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbaWRdPVwiZmllbGQuZmllbGRcIiBbbmFtZV09XCJmaWVsZC5maWVsZFwiPlxuICAgICAgICBcbiAgICAgICAgPG1hdC1zbGlkZXJcbiAgIGNsYXNzID0gXCJ0cC1tYXJnaW5cIlxuICAgW2Rpc2FibGVkXSA9IFwiZmFsc2VcIlxuICAgW2ludmVydF0gPSBcImZhbHNlXCIgICAgICBcbiAgIFt0aHVtYkxhYmVsXSA9IFwiZmFsc2VcIlxuICAgW21heF09XCJmaWVsZC5tYXhcIlxuICAgW21pbl09XCJmaWVsZC5taW5cIiAgICBcbiAgIFt2ZXJ0aWNhbF0gPSBcImZhbHNlXCI+XG48L21hdC1zbGlkZXI+XG5cbiAgICAgIDwvZGl2PiBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG4gICAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICAgIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cbiAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgIC8vIHRoaXMuZm9ybS5jb250cm9scyA9IHRoaXMuZmllbGQubmFtZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybVwiLHRoaXMuZm9ybSk7XG5cbiAgICB9XG59Il19