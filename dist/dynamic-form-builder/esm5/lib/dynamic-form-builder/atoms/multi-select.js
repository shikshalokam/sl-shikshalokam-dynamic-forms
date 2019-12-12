/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/multi-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent(cdr) {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.cdr = cdr;
        this.field = {};
        this.childrenDropEvent = new EventEmitter();
        this.openEdit = false;
    }
    Object.defineProperty(MultiSelectComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @param {?} field
     * @return {?}
     */
    MultiSelectComponent.prototype.onDropNew = /**
     * @param {?} $event
     * @param {?} field
     * @return {?}
     */
    function ($event, field) {
        console.log("---- MultiSelectComponent -", $event);
        $event.data.mutiSelect = field;
        this.childrenDropEvent.emit($event.data);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MultiSelectComponent.prototype.closeModel = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MultiSelectComponent.prototype.loadFormElement = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        console.log("item ---", item);
        this.activeModelData = "";
        this.label = item.label;
        this.type = item.type;
        this.placeholder = item.placeholder;
        this.options = item.options;
        this._id = item._id;
        this.required = item.validations.required;
        this.description = item.description;
        if (item.type == "date") {
            this.minDate = item.validations.minDate;
            this.maxDate = item.validations.maxDate;
            this.autoCollect = item.validations.autoCollect;
        }
        else if (item.type == "slider") {
            this.min = item.validations.min;
            this.max = item.validations.max;
        }
        this.required = this.field.validations.required;
        console.log(item.validations.required, "item.validations.required", this.required, "label", this.label);
        // console.log("label",this.label);
        this.openEdit = this.openEdit ? false : true;
        this.cdr.detectChanges();
        // document.getElementById("openModalButton").click();
        // this.open(this.myModal);
        // this.myModal.show();
        // this.myModal.nativeElement.className = 'modal fade show';
    };
    MultiSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-multi-select',
                    template: "<div [formGroup]=\"form\" dndDropzone  (dndDrop)=\"onDropNew($event,field)\" class=\"card-body\">\n  <label class=\"col-md-12 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n  <textarea  rows=\"3\" class=\"form-control\">\n  \n  </textarea>\n  <div class=\"row\" *ngIf=\"openEdit\" style=\"padding: 20px;\n  border: 1px solid #ccc;margin-top:10px;\n  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);\">\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <mat-label>Input Type</mat-label>\n      <mat-select [(ngModel)]=\"type\">\n        <mat-option value=\"text\">text</mat-option>\n        <mat-option value=\"number\">number</mat-option>\n        <mat-option value=\"radio\">radio</mat-option>\n        <mat-option value=\"date\">date</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <mat-label>Pages</mat-label>\n      <mat-select [(ngModel)]=\"pageNumber\">\n        <mat-option value=\"page_1\">page 1</mat-option>\n        <mat-option value=\"page_2\">page 2</mat-option>\n        <mat-option value=\"page_3\">page 3</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n      <input type=\"text\" placeholder=\"Min\" matInput [(ngModel)]=\"min\" formControlName=\"min value\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n      <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" formControlName=\"min value\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-12 form-group\" *ngIf=\"type=='date'\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" placeholder=\"Choose a min date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" placeholder=\"Choose a max date\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerMaxDate></mat-datepicker>\n    </mat-form-field>\n\n\n  </div>\n  <div class=\"col-sm-12 form-group\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n    <label for=\"label\" class=\"col-sm-12\">Options</label>\n\n    <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n      <mat-form-field>\n        <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" formControlName=\"min value\">\n      </mat-form-field>\n    </div>\n\n  </div>\n\n\n  <div class=\"col-sm-7\">\n    <label id=\"example-radio-group-label\">is Reqired ?</label>\n    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" [(ngModel)]=\"required\">\n      <mat-radio-button class=\"example-radio-button\" [value]=true>\n        Yes\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" [value]=false>\n        No\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n  <div class=\"col-sm-7\" *ngIf=\"type=='date'\">\n    <label id=\"example-radio-group-label\">is autoCollect</label>\n    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" [(ngModel)]=\"autoCollect\">\n      <mat-radio-button class=\"example-radio-button\" [value]=true>\n        True\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" [value]=false>\n        False\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n\n  <div class=\"col-sm-12\">\n\n    <button mat-flat-button color=\"primary\" style=\"margin-right:10px;\" (click)=\"closeModel('save')\">\n      Save\n    </button>\n\n  </div>\n</div>\n  <div *ngIf=\"field.child.length > 0\">\n\n  <div *ngFor=\"let obj of field.child\">\n  <div [ngSwitch]=\"obj.type\">\n\n  <div style=\"float: right;right: -90px; cursor:pointer;\n  top: 20px;\" class=\"col-sm-2 edit-icon\" ><i class=\"fa fa-edit\" (click)=\"loadFormElement(field)\" ></i></div>\n\n  <textbox style =\"padding-left:20px\" *ngSwitchCase=\"'number'\" [field]=\"obj\" [form]=\"form\"></textbox>\n\n  <textbox style =\"padding-left:20px\" *ngSwitchCase=\"'text'\" [field]=\"obj\" [form]=\"form\"></textbox>\n\n  <date style =\"padding-left:20px\" *ngSwitchCase=\"'date'\" [field]=\"obj\" [form]=\"form\"></date>\n\n  <slider style =\"padding-left:20px\" *ngSwitchCase=\"'slider'\" [field]=\"obj\" [form]=\"form\"></slider>\n\n    <dropdown style =\"padding-left:20px\" *ngSwitchCase=\"'dropdown'\" [field]=\"obj\" [form]=\"form\"></dropdown>\n\n    <checkbox style =\"padding-left:20px\" *ngSwitchCase=\"'checkbox'\" [field]=\"obj\" [form]=\"form\"></checkbox>\n\n   <radio style =\"padding-left:20px\" *ngSwitchCase=\"'radio'\" [field]=\"obj\" [form]=\"form\"></radio>\n\n    <file style =\"padding-left:20px\" *ngSwitchCase=\"'file'\" [field]=\"obj\" [form]=\"form\"></file>\n\n    \n     </div>\n  </div>\n  </div>\n  </div>",
                },] },
    ];
    /** @nocollapse */
    MultiSelectComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    MultiSelectComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }],
        childrenDropEvent: [{ type: Output }]
    };
    return MultiSelectComponent;
}());
export { MultiSelectComponent };
if (false) {
    /** @type {?} */
    MultiSelectComponent.prototype.field;
    /** @type {?} */
    MultiSelectComponent.prototype.form;
    /** @type {?} */
    MultiSelectComponent.prototype.childrenDropEvent;
    /** @type {?} */
    MultiSelectComponent.prototype.activeModelData;
    /** @type {?} */
    MultiSelectComponent.prototype.validations;
    /** @type {?} */
    MultiSelectComponent.prototype.required;
    /** @type {?} */
    MultiSelectComponent.prototype.autoCollect;
    /** @type {?} */
    MultiSelectComponent.prototype.openEdit;
    /** @type {?} */
    MultiSelectComponent.prototype._id;
    /** @type {?} */
    MultiSelectComponent.prototype.description;
    /** @type {?} */
    MultiSelectComponent.prototype.minDate;
    /** @type {?} */
    MultiSelectComponent.prototype.maxDate;
    /** @type {?} */
    MultiSelectComponent.prototype.min;
    /** @type {?} */
    MultiSelectComponent.prototype.max;
    /** @type {?} */
    MultiSelectComponent.prototype.label;
    /** @type {?} */
    MultiSelectComponent.prototype.type;
    /** @type {?} */
    MultiSelectComponent.prototype.placeholder;
    /** @type {?} */
    MultiSelectComponent.prototype.options;
    /** @type {?} */
    MultiSelectComponent.prototype.pageNumber;
    /** @type {?} */
    MultiSelectComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvbXVsdGktc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUl2RjtJQXVMRSw4QkFBbUIsR0FBc0I7UUFFdkMsd0NBQXdDO1FBQ3hDLGlDQUFpQztRQUhoQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXpCaEMsVUFBSyxHQUFPLEVBQUUsQ0FBQztRQU1kLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFNekQsYUFBUSxHQUFZLEtBQUssQ0FBQztJQWtCMUIsQ0FBQztJQTVCRCxzQkFBSSx5Q0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRSxzQkFBSSx5Q0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTs7Ozs7O0lBNEJuRSx3Q0FBUzs7Ozs7SUFBVCxVQUFVLE1BQU0sRUFBRSxLQUFLO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQseUNBQVU7Ozs7SUFBVixVQUFXLE1BQU07SUFHakIsQ0FBQzs7Ozs7SUFHRCw4Q0FBZTs7OztJQUFmLFVBQWdCLElBQUk7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQTtZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1NBQ2pEO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLHNEQUFzRDtRQUN0RCwyQkFBMkI7UUFDM0IsdUJBQXVCO1FBQ3ZCLDREQUE0RDtJQUM5RCxDQUFDOztnQkF0T0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxxdExBd0pIO2lCQUNSOzs7O2dCQS9KOEMsaUJBQWlCOzs7d0JBa0s3RCxLQUFLO3VCQUNMLEtBQUs7b0NBS0wsTUFBTTs7SUFvRVQsMkJBQUM7Q0FBQSxBQXhPRCxJQXdPQztTQTVFWSxvQkFBb0I7OztJQUUvQixxQ0FBd0I7O0lBQ3hCLG9DQUFrQjs7SUFLbEIsaURBQXlEOztJQUV6RCwrQ0FBcUI7O0lBQ3JCLDJDQUFpQjs7SUFDakIsd0NBQWM7O0lBQ2QsMkNBQWlCOztJQUNqQix3Q0FBMEI7O0lBQzFCLG1DQUFTOztJQUNULDJDQUFpQjs7SUFDakIsdUNBQWE7O0lBQ2IsdUNBQWE7O0lBQ2IsbUNBQVM7O0lBQ1QsbUNBQVM7O0lBQ1QscUNBQVc7O0lBQ1gsb0NBQVU7O0lBQ1YsMkNBQWlCOztJQUNqQix1Q0FBYTs7SUFDYiwwQ0FBZ0I7O0lBRUosbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW11bHRpLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiBkbmREcm9wem9uZSAgKGRuZERyb3ApPVwib25Ecm9wTmV3KCRldmVudCxmaWVsZClcIiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMTIgZm9ybS1jb250cm9sLWxhYmVsXCIgW2F0dHIuZm9yXT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICA8L2xhYmVsPlxuICA8dGV4dGFyZWEgIHJvd3M9XCIzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgXG4gIDwvdGV4dGFyZWE+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cIm9wZW5FZGl0XCIgc3R5bGU9XCJwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO21hcmdpbi10b3A6MTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7XCI+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIFsobmdNb2RlbCldPVwibGFiZWxcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dCBQbGFjZSBIb2xkZXJcIiBbKG5nTW9kZWwpXT1cInBsYWNlaG9sZGVyXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSGludC9EZXNjcmlwdGlvblwiIFsobmdNb2RlbCldPVwiZGVzY3JpcHRpb25cIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPklucHV0IFR5cGU8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwidHlwZVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0PC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5kYXRlPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5QYWdlczwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJwYWdlTnVtYmVyXCI+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFnZV8xXCI+cGFnZSAxPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMlwiPnBhZ2UgMjwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzNcIj5wYWdlIDM8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNaW5cIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm1pblwiIGZvcm1Db250cm9sTmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWF4XCIgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJtYXhcIiBmb3JtQ29udHJvbE5hbWU9XCJtaW4gdmFsdWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbKG5nTW9kZWwpXT1cIm1pbkRhdGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1pbiBkYXRlXCI+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlck1heERhdGVcIiBbKG5nTW9kZWwpXT1cIm1heERhdGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1heCBkYXRlXCI+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlck1heERhdGVcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyTWF4RGF0ZT48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cblxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0ncmFkaW8nIHx8IHR5cGU9PSdjaGVja2JveCcgfHwgdHlwZT09J2Ryb3Bkb3duJ1wiPlxuICAgIDxsYWJlbCBmb3I9XCJsYWJlbFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+T3B0aW9uczwvbGFiZWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm1heFwiIGZvcm1Db250cm9sTmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiPlxuICAgIDxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBSZXFpcmVkID88L2xhYmVsPlxuICAgIDxtYXQtcmFkaW8tZ3JvdXAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiIFsobmdNb2RlbCldPVwicmVxdWlyZWRcIj5cbiAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPXRydWU+XG4gICAgICAgIFllc1xuICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgICAgIE5vXG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiICpuZ0lmPVwidHlwZT09J2RhdGUnXCI+XG4gICAgPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIGF1dG9Db2xsZWN0PC9sYWJlbD5cbiAgICA8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbKG5nTW9kZWwpXT1cImF1dG9Db2xsZWN0XCI+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgICAgICBUcnVlXG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICAgICAgRmFsc2VcbiAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG5cbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoxMHB4O1wiIChjbGljayk9XCJjbG9zZU1vZGVsKCdzYXZlJylcIj5cbiAgICAgIFNhdmVcbiAgICA8L2J1dHRvbj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiZmllbGQuY2hpbGQubGVuZ3RoID4gMFwiPlxuXG4gIDxkaXYgKm5nRm9yPVwibGV0IG9iaiBvZiBmaWVsZC5jaGlsZFwiPlxuICA8ZGl2IFtuZ1N3aXRjaF09XCJvYmoudHlwZVwiPlxuXG4gIDxkaXYgc3R5bGU9XCJmbG9hdDogcmlnaHQ7cmlnaHQ6IC05MHB4OyBjdXJzb3I6cG9pbnRlcjtcbiAgdG9wOiAyMHB4O1wiIGNsYXNzPVwiY29sLXNtLTIgZWRpdC1pY29uXCIgPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIChjbGljayk9XCJsb2FkRm9ybUVsZW1lbnQoZmllbGQpXCIgPjwvaT48L2Rpdj5cblxuICA8dGV4dGJveCBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MjBweFwiICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuXG4gIDx0ZXh0Ym94IHN0eWxlID1cInBhZGRpbmctbGVmdDoyMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuXG4gIDxkYXRlIHN0eWxlID1cInBhZGRpbmctbGVmdDoyMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9kYXRlPlxuXG4gIDxzbGlkZXIgc3R5bGUgPVwicGFkZGluZy1sZWZ0OjIwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ3NsaWRlcidcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvc2xpZGVyPlxuXG4gICAgPGRyb3Bkb3duIHN0eWxlID1cInBhZGRpbmctbGVmdDoyMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZHJvcGRvd24+XG5cbiAgICA8Y2hlY2tib3ggc3R5bGUgPVwicGFkZGluZy1sZWZ0OjIwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9jaGVja2JveD5cblxuICAgPHJhZGlvIHN0eWxlID1cInBhZGRpbmctbGVmdDoyMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvcmFkaW8+XG5cbiAgICA8ZmlsZSBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MjBweFwiICpuZ1N3aXRjaENhc2U9XCInZmlsZSdcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZmlsZT5cblxuICAgIFxuICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdENvbXBvbmVudCAge1xuXG4gIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICBASW5wdXQoKSBmb3JtOmFueTtcbiAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG5cblxuICBAT3V0cHV0KCkgY2hpbGRyZW5Ecm9wRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBhY3RpdmVNb2RlbERhdGE6IGFueTtcbiAgdmFsaWRhdGlvbnM6IGFueTtcbiAgcmVxdWlyZWQ6IGFueTtcbiAgYXV0b0NvbGxlY3Q6IGFueTtcbiAgb3BlbkVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2lkOiBhbnk7XG4gIGRlc2NyaXB0aW9uOiBhbnk7XG4gIG1pbkRhdGU6IGFueTtcbiAgbWF4RGF0ZTogYW55O1xuICBtaW46IGFueTtcbiAgbWF4OiBhbnk7XG4gIGxhYmVsOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgcGxhY2Vob2xkZXI6IGFueTtcbiAgb3B0aW9uczogYW55O1xuICBwYWdlTnVtYmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYgKSB7XG5cbiAgICAvLyB0aGlzLmZvcm0uY29udHJvbHMgPSB0aGlzLmZpZWxkLm5hbWU7XG4gICAgLy8gY29uc29sZS5sb2coXCJmb3JtXCIsdGhpcy5mb3JtKTtcblxuICB9XG4gIG9uRHJvcE5ldygkZXZlbnQsIGZpZWxkKXtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0gTXVsdGlTZWxlY3RDb21wb25lbnQgLVwiLCRldmVudCk7XG4gICAgJGV2ZW50LmRhdGEubXV0aVNlbGVjdCA9IGZpZWxkO1xuICAgIHRoaXMuY2hpbGRyZW5Ecm9wRXZlbnQuZW1pdCgkZXZlbnQuZGF0YSk7XG4gIH1cblxuICBjbG9zZU1vZGVsKGFjdGlvbikge1xuXG5cbiAgfVxuXG5cbiAgbG9hZEZvcm1FbGVtZW50KGl0ZW0pIHtcbiAgICBjb25zb2xlLmxvZyhcIml0ZW0gLS0tXCIsIGl0ZW0pO1xuICAgIHRoaXMuYWN0aXZlTW9kZWxEYXRhID0gXCJcIjtcbiAgICB0aGlzLmxhYmVsID0gaXRlbS5sYWJlbDtcbiAgICB0aGlzLnR5cGUgPSBpdGVtLnR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGl0ZW0ucGxhY2Vob2xkZXI7XG4gICAgdGhpcy5vcHRpb25zID0gaXRlbS5vcHRpb25zO1xuICAgIHRoaXMuX2lkID0gaXRlbS5faWQ7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGl0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgaWYgKGl0ZW0udHlwZSA9PSBcImRhdGVcIikge1xuICAgICAgdGhpcy5taW5EYXRlID0gaXRlbS52YWxpZGF0aW9ucy5taW5EYXRlO1xuICAgICAgdGhpcy5tYXhEYXRlID0gaXRlbS52YWxpZGF0aW9ucy5tYXhEYXRlXG4gICAgICB0aGlzLmF1dG9Db2xsZWN0ID0gaXRlbS52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXRlbS50eXBlID09IFwic2xpZGVyXCIpIHtcbiAgICAgIHRoaXMubWluID0gaXRlbS52YWxpZGF0aW9ucy5taW47XG4gICAgICB0aGlzLm1heCA9IGl0ZW0udmFsaWRhdGlvbnMubWF4O1xuICAgIH1cblxuICAgIHRoaXMucmVxdWlyZWQgPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuICAgIGNvbnNvbGUubG9nKGl0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWQsIFwiaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZFwiLCB0aGlzLnJlcXVpcmVkLCBcImxhYmVsXCIsIHRoaXMubGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibGFiZWxcIix0aGlzLmxhYmVsKTtcbiAgICB0aGlzLm9wZW5FZGl0ID0gdGhpcy5vcGVuRWRpdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTW9kYWxCdXR0b25cIikuY2xpY2soKTtcbiAgICAvLyB0aGlzLm9wZW4odGhpcy5teU1vZGFsKTtcbiAgICAvLyB0aGlzLm15TW9kYWwuc2hvdygpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBmYWRlIHNob3cnO1xuICB9XG5cbn1cbiJdfQ==