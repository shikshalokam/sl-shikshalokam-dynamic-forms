/**
 * @fileoverview added by tsickle
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
      <div [formGroup]="form">
      <label class="col-md-8 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control" 
         [id]="field.field" [name]="field.field">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [id]="field.field"
        rows="20" class="form-control" [placeholder]="field.placeholder"></textarea>

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUF3QjNDLE1BQU0sT0FBTyxhQUFhO0lBTXRCO1FBRUUsd0NBQXdDO1FBQ3hDLGlDQUFpQztRQVIxQixVQUFLLEdBQU8sRUFBRSxDQUFDO0lBVXhCLENBQUM7Ozs7SUFSRCxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7OztJQUNuRSxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O1lBekJ0RSxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7S0FXVDtnQkFDRCxNQUFNLEVBQUUsQ0FBQzs7Ozs7R0FLVixDQUFDO2FBQ0g7Ozs7O29CQUVJLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDhCQUF3Qjs7SUFDeEIsNkJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyB0ZXh0LGVtYWlsLHRlbCx0ZXh0YXJlYSxwYXNzd29yZCwgXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RhdGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTggZm9ybS1jb250cm9sLWxhYmVsXCIgW2F0dHIuZm9yXT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZmllbGQubXVsdGlsaW5lXCIgW2F0dHIudHlwZV09XCJmaWVsZC50eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgIFtpZF09XCJmaWVsZC5maWVsZFwiIFtuYW1lXT1cImZpZWxkLmZpZWxkXCI+XG4gICAgICAgIDx0ZXh0YXJlYSAqbmdJZj1cImZpZWxkLm11bHRpbGluZVwiIFtjbGFzcy5pcy1pbnZhbGlkXT1cImlzRGlydHkgJiYgIWlzVmFsaWRcIiBbaWRdPVwiZmllbGQuZmllbGRcIlxuICAgICAgICByb3dzPVwiMjBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlclwiPjwvdGV4dGFyZWE+XG5cbiAgICAgIDwvZGl2PiBcbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcbiAgICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gICAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgLy8gdGhpcy5mb3JtLmNvbnRyb2xzID0gdGhpcy5maWVsZC5uYW1lO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmb3JtXCIsdGhpcy5mb3JtKTtcblxuICAgIH1cbn0iXX0=