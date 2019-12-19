/**
 * @fileoverview added by tsickle
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
    `,
                styles: [`
    .form-control {
      display: none;
    
    }
    
  `]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvc2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBZ0MzQyxNQUFNLE9BQU8sZUFBZTtJQU14QjtRQUVFLHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFSMUIsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQVV4QixDQUFDOzs7O0lBUkQsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7SUFDbkUsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztZQWpDdEUsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtCVDtnQkFDRCxNQUFNLEVBQUUsQ0FBQzs7Ozs7O0dBTVYsQ0FBQzthQUNIOzs7OztvQkFFSSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixnQ0FBd0I7O0lBQ3hCLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdGV4dCxlbWFpbCx0ZWwsdGV4dGFyZWEscGFzc3dvcmQsIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzbGlkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiID5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0wIGZvcm0tY29udHJvbC1sYWJlbFwiIFthdHRyLmZvcl09XCJmaWVsZC5sYWJlbFwiPlxuICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0ICpuZ0lmPVwiIWZpZWxkLm11bHRpbGluZVwiIHR5cGU9XCJoaWRkZW5cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtpZF09XCJmaWVsZC5maWVsZFwiIFtuYW1lXT1cImZpZWxkLmZpZWxkXCI+XG4gICAgICAgIFxuICAgICAgICA8bWF0LXNsaWRlclxuICAgY2xhc3MgPSBcInRwLW1hcmdpblwiXG4gICBbZGlzYWJsZWRdID0gXCJmYWxzZVwiXG4gICBbaW52ZXJ0XSA9IFwiZmFsc2VcIiAgICAgIFxuICAgW3RodW1iTGFiZWxdID0gXCJmYWxzZVwiXG4gICBbbWF4XT1cImZpZWxkLm1heFwiXG4gICBbbWluXT1cImZpZWxkLm1pblwiICAgIFxuICAgW3ZlcnRpY2FsXSA9IFwiZmFsc2VcIj5cbjwvbWF0LXNsaWRlcj5cblxuICAgICAgPC9kaXY+IFxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICBcbiAgICB9XG4gICAgXG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZmllbGQ6YW55ID0ge307XG4gICAgQElucHV0KCkgZm9ybTpGb3JtR3JvdXA7XG4gICAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICAgIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cbiAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgIC8vIHRoaXMuZm9ybS5jb250cm9scyA9IHRoaXMuZmllbGQubmFtZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybVwiLHRoaXMuZm9ybSk7XG5cbiAgICB9XG59Il19