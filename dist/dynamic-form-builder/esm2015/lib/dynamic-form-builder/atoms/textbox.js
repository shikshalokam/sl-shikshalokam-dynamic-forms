/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// text,email,tel,textarea,password, 
export class TextBoxComponent {
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
TextBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'textbox',
                template: `
      <div [formGroup]="form">
      <label class="col-md-8 form-control-label" [attr.for]="field.label">
      {{field.label}}
      </label>
    
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.field" [name]="field.field" >
        <textarea *ngIf="field.multiline"  [id]="field.field"
        rows="20" class="form-control" [placeholder]="field.placeholder"></textarea>

      </div> 
    `,
                styles: [`
     .form-control {
      display:none
    } `
                ]
            },] },
];
/** @nocollapse */
TextBoxComponent.ctorParameters = () => [];
TextBoxComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextBoxComponent.prototype.field;
    /** @type {?} */
    TextBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL3RleHRib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUF1QjNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFRM0I7UUFFRSx3Q0FBd0M7UUFDeEMsaUNBQWlDO1FBVjFCLFVBQUssR0FBUSxFQUFFLENBQUM7SUFZekIsQ0FBQzs7OztJQVZELElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O0lBQ25FLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7WUF4QnBFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztLQVdQO2dCQUNELE1BQU0sRUFBQyxDQUFDOzs7T0FHTDtpQkFDSjthQUNGOzs7OztvQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixpQ0FBeUI7O0lBQ3pCLGdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdGV4dCxlbWFpbCx0ZWwsdGV4dGFyZWEscGFzc3dvcmQsIFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dGJveCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTggZm9ybS1jb250cm9sLWxhYmVsXCIgW2F0dHIuZm9yXT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICAgIDwvbGFiZWw+XG4gICAgXG4gICAgICAgIDxpbnB1dCAqbmdJZj1cIiFmaWVsZC5tdWx0aWxpbmVcIiBbYXR0ci50eXBlXT1cImZpZWxkLnR5cGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICBbaWRdPVwiZmllbGQuZmllbGRcIiBbbmFtZV09XCJmaWVsZC5maWVsZFwiID5cbiAgICAgICAgPHRleHRhcmVhICpuZ0lmPVwiZmllbGQubXVsdGlsaW5lXCIgIFtpZF09XCJmaWVsZC5maWVsZFwiXG4gICAgICAgIHJvd3M9XCIyMFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW3BsYWNlaG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyXCI+PC90ZXh0YXJlYT5cblxuICAgICAgPC9kaXY+IFxuICAgIGAsXG4gICAgc3R5bGVzOltgXG4gICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTpub25lXG4gICAgfSBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dEJveENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cblxuIFxuICBcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyB0aGlzLmZvcm0uY29udHJvbHMgPSB0aGlzLmZpZWxkLm5hbWU7XG4gICAgLy8gY29uc29sZS5sb2coXCJmb3JtXCIsdGhpcy5mb3JtKTtcblxuICB9XG4gXG59Il19