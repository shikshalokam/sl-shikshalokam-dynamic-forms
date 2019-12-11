/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// text,email,tel,textarea,password, 
export class DateComponent {
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
DateComponent.decorators = [
    { type: Component, args: [{
                selector: 'date',
                template: `
      <div [formGroup]="form" >
    
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.field" [name]="field.field" [formControlName]="field.field">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.field" [id]="field.field"
        rows="20" class="form-control" [placeholder]="field.placeholder"></textarea>

      </div> 
    `
            },] },
];
/** @nocollapse */
DateComponent.ctorParameters = () => [];
DateComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DateComponent.prototype.field;
    /** @type {?} */
    DateComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBZTNDLE1BQU0sT0FBTyxhQUFhO0lBTXRCO1FBRUUsd0NBQXdDO1FBQ3hDLGlDQUFpQztRQVIxQixVQUFLLEdBQU8sRUFBRSxDQUFDO0lBVXhCLENBQUM7Ozs7SUFSRCxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7OztJQUNuRSxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O1lBaEJ0RSxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRTs7Ozs7Ozs7S0FRVDthQUNKOzs7OztvQkFFSSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw4QkFBd0I7O0lBQ3hCLDZCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdGV4dCxlbWFpbCx0ZWwsdGV4dGFyZWEscGFzc3dvcmQsIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkYXRlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiA+XG4gICAgXG4gICAgICAgIDxpbnB1dCAqbmdJZj1cIiFmaWVsZC5tdWx0aWxpbmVcIiBbYXR0ci50eXBlXT1cImZpZWxkLnR5cGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICBbaWRdPVwiZmllbGQuZmllbGRcIiBbbmFtZV09XCJmaWVsZC5maWVsZFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZmllbGRcIj5cbiAgICAgICAgPHRleHRhcmVhICpuZ0lmPVwiZmllbGQubXVsdGlsaW5lXCIgW2NsYXNzLmlzLWludmFsaWRdPVwiaXNEaXJ0eSAmJiAhaXNWYWxpZFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZmllbGRcIiBbaWRdPVwiZmllbGQuZmllbGRcIlxuICAgICAgICByb3dzPVwiMjBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlclwiPjwvdGV4dGFyZWE+XG5cbiAgICAgIDwvZGl2PiBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGVDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xuICAgIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG4gIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAvLyB0aGlzLmZvcm0uY29udHJvbHMgPSB0aGlzLmZpZWxkLm5hbWU7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZvcm1cIix0aGlzLmZvcm0pO1xuXG4gICAgfVxufSJdfQ==