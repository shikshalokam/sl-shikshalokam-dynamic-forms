/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, NgModule, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent(cdr) {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.cdr = cdr;
        this.field = {};
        this.sendDataToParent = new EventEmitter();
        this.childrenDropEvent = new EventEmitter();
        this.openEditChild = false;
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
        if ($event.data.responseType && $event.data.responseType != 'matrix') {
            $event.data.mutiSelect = field;
            this.childrenDropEvent.emit($event.data);
        }
        else {
            console.log("not allowed");
        }
    };
    /**
     * @param {?} action
     * @param {?=} data
     * @return {?}
     */
    MultiSelectComponent.prototype.closeModelChild = /**
     * @param {?} action
     * @param {?=} data
     * @return {?}
     */
    function (action, data) {
        var _this = this;
        if (data === void 0) { data = ""; }
        if (action == "save") {
            debugger;
            console.log("closeModel", this.field);
            // this.modalReference.close();
            // this.activeModelData.field = this.field.field;
            // this.activeModelData.label = this.label;
            // this.activeModelData.type = this.type;
            // this.activeModelData.placeholder = this.placeholder;
            // this.activeModelData.options = this.options;
            /** @type {?} */
            var obj = {
                label: this.label,
                type: this.type,
                placeholder: this.placeholder,
                options: this.options,
                validations: this.validations,
                field: this.field,
                _id: this._id,
                description: this.description
            };
            if (this.type == 'date') {
                obj['minDate'] = this.minDate;
                obj['maxDate'] = this.maxDate;
            }
            else if (this.type == 'slider') {
                obj['min'] = this.min;
                obj['max'] = this.max;
            }
            // console.log("obj",obj);
            /** @type {?} */
            var index = this.field.child.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.field === _this.currentItem.field; }));
            this.field.child.splice(index, 1, obj);
            // let newObj =  this.field.child.filter(item => {
            //   if (item.field == this.currentItem.field) {
            //     // this.field.child[this.currentItem.position] = obj;
            //     return obj;
            //   } else {
            //     return item;
            //   }
            // });
            console.log('aaaaaaaaaaa', this.field);
            // this.sendDataToParent.emit(JSON.stringify(obj));
            // this.field.label = this.label;
            // this.field.label = this.label;
            // this.field.type = this.type;
            // this.field.placeholder = this.placeholder;
            // this.field.options = this.options;
            // this.field.description = this.description;
            // if (this.type == 'date') {
            //   this.field.validations.minDate = this.minDate;
            //   this.field.validations.maxDate = this.maxDate;
            //   this.field.validations.autoCollect = this.autoCollect;
            // } else if (this.type == 'slider') {
            //   this.field.validations.min = this.min;
            //   this.field.validations.max = this.max;
            // }
            // this.field.validations
            // console.log(" this.field.validations.required", this.field.validations.required, "sdds", this.required);
            // this.field.validations.required = this.required;
            // this.field.validations.autoCollect = this.autoCollect;
            // console.log(" this.field", this.field);
            this.openEditChild = false;
            // this.sendDataToParent.emit(this.activeModelData);
        }
        else {
            this.openEditChild = false;
            // this.modalReference.close();
        }
        // this.modalService.close();
        //  this.myModal.nativeElement.className = 'modal hide';
    };
    /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    MultiSelectComponent.prototype.loadFormElement = /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    function (item, id) {
        console.log("item ---", item, "id", id);
        this.activeModelData = "";
        this.label = item.label;
        this.currentItem = item;
        this.type = item.type;
        this.placeholder = item.placeholder;
        this.options = item.options;
        this._id = item._id;
        // this.required = item.validations.required;
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
        // this.required = this.field.validations.required;
        // console.log(item.validations.required, "item.validations.required",
        // this.required, "label", this.label);
        // console.log("label",this.label);
        this.openEditChild = this.openEditChild ? false : true;
        this.cdr.detectChanges();
        // document.getElementById("openModalButton").click();
        // this.open(this.myModal);
        // this.myModal.show();
        // this.myModal.nativeElement.className = 'modal fade show';
    };
    MultiSelectComponent.decorators = [
        { type: NgModule, args: [{
                    imports: [ReactiveFormsModule, FormsModule],
                    declarations: []
                },] },
        { type: Component, args: [{
                    selector: 'lib-multi-select',
                    template: "<div [formGroup]=\"form\" dndDropzone  (dndDrop)=\"onDropNew($event,field)\" class=\"card-body\">\n  <label class=\"col-md-8 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n  <textarea  rows=\"2\" class=\"form-control\">\n  \n  </textarea>\n  <div class=\"row\" *ngIf=\"openEditChild\" style=\"padding: 20px;\n  border: 1px solid #ccc;margin-top:10px; margin:40px; margin-left: 20%;\n  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);\">\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <mat-label>Input Type</mat-label>\n      <mat-select [(ngModel)]=\"type\" [ngModelOptions]=\"{standalone: true}\">\n        <mat-option value=\"text\">text</mat-option>\n        <mat-option value=\"number\">number</mat-option>\n        <mat-option value=\"radio\">radio</mat-option>\n        <mat-option value=\"date\">date</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <mat-label>Pages</mat-label>\n      <mat-select [(ngModel)]=\"pageNumber\" [ngModelOptions]=\"{standalone: true}\">\n        <mat-option value=\"page_1\">page 1</mat-option>\n        <mat-option value=\"page_2\">page 2</mat-option>\n        <mat-option value=\"page_3\">page 3</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n      <input type=\"text\" placeholder=\"Min\" matInput [(ngModel)]=\"min\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n      <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-12 form-group\" *ngIf=\"type=='date'\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Choose a min date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Choose a max date\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerMaxDate></mat-datepicker>\n    </mat-form-field>\n\n\n  </div>\n  <div class=\"col-sm-12 form-group\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n    <label for=\"label\" class=\"col-sm-12\">Options</label>\n\n    <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n      <mat-form-field>\n        <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" [ngModelOptions]=\"{standalone: true}\">\n      </mat-form-field>\n    </div>\n\n  </div>\n\n\n  <div class=\"col-sm-7\">\n    <label id=\"example-radio-group-label\">is Reqired ?</label>\n    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"required\">\n      <mat-radio-button class=\"example-radio-button\" [value]=true>\n        Yes\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" [value]=false>\n        No\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n  <div class=\"col-sm-7\" *ngIf=\"type=='date'\">\n    <label id=\"example-radio-group-label\">is autoCollect</label>\n    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" [(ngModel)]=\"autoCollect\" [ngModelOptions]=\"{standalone: true}\">\n      <mat-radio-button class=\"example-radio-button\" [value]=true>\n        True\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" [value]=false>\n        False\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n\n  <div class=\"col-sm-12\">\n\n    <button mat-flat-button color=\"primary\" style=\"margin-right:10px;\" (click)=\"closeModelChild('save')\">\n      Save\n    </button>\n\n  </div>\n</div>\n  <div *ngIf=\"field.child.length > 0\">\n\n  <div *ngFor=\"let obj of field.child let i =index\">\n  <div style=\"float: right;right: -90px; cursor:pointer;\n  top: 20px;\" class=\"col-sm-2 edit-icon\"><i class=\"fa fa-edit\" (click)=\"loadFormElement(obj, i)\"></i></div>\n  <div [ngSwitch]=\"obj.type\" style=\"width:80%;margin-left:20%\">\n\n  <textbox style =\"padding-left:30px\" *ngSwitchCase=\"'number'\" [field]=\"obj\" [form]=\"form\"></textbox>\n\n  <textbox style =\"padding-left:30px\" *ngSwitchCase=\"'text'\" [field]=\"obj\" [form]=\"form\"></textbox>\n\n  <date style =\"padding-left:30px\" *ngSwitchCase=\"'date'\" [field]=\"obj\" [form]=\"form\"></date>\n\n  <slider style =\"padding-left:30px\" *ngSwitchCase=\"'slider'\" [field]=\"obj\" [form]=\"form\"></slider>\n\n    <dropdown style =\"padding-left:30px\" *ngSwitchCase=\"'dropdown'\" [field]=\"obj\" [form]=\"form\"></dropdown>\n\n    <checkbox style =\"padding-left:30px\" *ngSwitchCase=\"'checkbox'\" [field]=\"obj\" [form]=\"form\"></checkbox>\n\n   <radio style =\"padding-left:30px\" *ngSwitchCase=\"'radio'\" [field]=\"obj\" [form]=\"form\"></radio>\n\n    <file style =\"padding-left:30px\" *ngSwitchCase=\"'file'\" [field]=\"obj\" [form]=\"form\"></file>\n\n    \n  </div>\n  </div>\n  </div>\n  </div>",
                    styles: ["\n     .form-control {\n      display:none\n    } "
                    ]
                },] },
    ];
    /** @nocollapse */
    MultiSelectComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    MultiSelectComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }],
        sendDataToParent: [{ type: Output }],
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
    MultiSelectComponent.prototype.sendDataToParent;
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
    MultiSelectComponent.prototype.openEditChild;
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
    MultiSelectComponent.prototype.currentItem;
    /** @type {?} */
    MultiSelectComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvbXVsdGktc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEU7SUFpTUUsOEJBQW1CLEdBQXNCO1FBRXZDLHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFIaEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF6QmhDLFVBQUssR0FBUSxFQUFFLENBQUM7UUFLZixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFNekQsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFrQi9CLENBQUM7SUE1QkQsc0JBQUkseUNBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkUsc0JBQUkseUNBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7Ozs7OztJQTRCbkUsd0NBQVM7Ozs7O0lBQVQsVUFBVSxNQUFNLEVBQUUsS0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELElB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Q3pDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsc0RBQXNEO1FBQ3RELDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsNERBQTREO0lBQzlELENBQUM7O2dCQXJWRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDO29CQUMzQyxZQUFZLEVBQUUsRUFBRTtpQkFDakI7Z0JBR0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxzak1BdUpIO29CQUNMLE1BQU0sRUFBQyxDQUFDLG9EQUdMO3FCQUNKO2lCQUNGOzs7O2dCQTFLMEQsaUJBQWlCOzs7d0JBNkt6RSxLQUFLO3VCQUNMLEtBQUs7bUNBSUwsTUFBTTtvQ0FDTixNQUFNOztJQXlLVCwyQkFBQztDQUFBLEFBdlZELElBdVZDO1NBakxZLG9CQUFvQjs7O0lBRS9CLHFDQUF5Qjs7SUFDekIsb0NBQW1COztJQUluQixnREFBd0Q7O0lBQ3hELGlEQUF5RDs7SUFFekQsK0NBQXFCOztJQUNyQiwyQ0FBaUI7O0lBQ2pCLHdDQUFjOztJQUNkLDJDQUFpQjs7SUFDakIsNkNBQStCOztJQUMvQixtQ0FBUzs7SUFDVCwyQ0FBaUI7O0lBQ2pCLHVDQUFhOztJQUNiLHVDQUFhOztJQUNiLG1DQUFTOztJQUNULG1DQUFTOztJQUNULHFDQUFXOztJQUNYLG9DQUFVOztJQUNWLDJDQUFpQjs7SUFDakIsdUNBQWE7O0lBQ2IsMENBQWdCOztJQWlIaEIsMkNBQWlCOztJQS9HTCxtQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdNb2R1bGUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdXG59KVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1tdWx0aS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCIgZG5kRHJvcHpvbmUgIChkbmREcm9wKT1cIm9uRHJvcE5ldygkZXZlbnQsZmllbGQpXCIgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTggZm9ybS1jb250cm9sLWxhYmVsXCIgW2F0dHIuZm9yXT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICA8L2xhYmVsPlxuICA8dGV4dGFyZWEgIHJvd3M9XCIyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgXG4gIDwvdGV4dGFyZWE+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cIm9wZW5FZGl0Q2hpbGRcIiBzdHlsZT1cInBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7bWFyZ2luLXRvcDoxMHB4OyBtYXJnaW46NDBweDsgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7XCI+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIFsobmdNb2RlbCldPVwibGFiZWxcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dCBQbGFjZSBIb2xkZXJcIiBbKG5nTW9kZWwpXT1cInBsYWNlaG9sZGVyXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSGludC9EZXNjcmlwdGlvblwiIFsobmdNb2RlbCldPVwiZGVzY3JpcHRpb25cIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPklucHV0IFR5cGU8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwidHlwZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJudW1iZXJcIj5udW1iZXI8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmFkaW9cIj5yYWRpbzwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+ZGF0ZTwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+UGFnZXM8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwicGFnZU51bWJlclwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzFcIj5wYWdlIDE8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFnZV8yXCI+cGFnZSAyPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfM1wiPnBhZ2UgMzwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1pblwiIG1hdElucHV0IFsobmdNb2RlbCldPVwibWluXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWF4XCIgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJtYXhcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgWyhuZ01vZGVsKV09XCJtaW5EYXRlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWluIGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyTWF4RGF0ZVwiIFsobmdNb2RlbCldPVwibWF4RGF0ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1heCBkYXRlXCI+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlck1heERhdGVcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyTWF4RGF0ZT48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cblxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0ncmFkaW8nIHx8IHR5cGU9PSdjaGVja2JveCcgfHwgdHlwZT09J2Ryb3Bkb3duJ1wiPlxuICAgIDxsYWJlbCBmb3I9XCJsYWJlbFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+T3B0aW9uczwvbGFiZWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm1heFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cbiAgICA8bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgUmVxaXJlZCA/PC9sYWJlbD5cbiAgICA8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJyZXF1aXJlZFwiPlxuICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICAgICAgWWVzXG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICAgICAgTm9cbiAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbiAgICA8bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgYXV0b0NvbGxlY3Q8L2xhYmVsPlxuICAgIDxtYXQtcmFkaW8tZ3JvdXAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiIFsobmdNb2RlbCldPVwiYXV0b0NvbGxlY3RcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgICAgICBUcnVlXG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICAgICAgRmFsc2VcbiAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG5cbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoxMHB4O1wiIChjbGljayk9XCJjbG9zZU1vZGVsQ2hpbGQoJ3NhdmUnKVwiPlxuICAgICAgU2F2ZVxuICAgIDwvYnV0dG9uPlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJmaWVsZC5jaGlsZC5sZW5ndGggPiAwXCI+XG5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgb2JqIG9mIGZpZWxkLmNoaWxkIGxldCBpID1pbmRleFwiPlxuICA8ZGl2IHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O3JpZ2h0OiAtOTBweDsgY3Vyc29yOnBvaW50ZXI7XG4gIHRvcDogMjBweDtcIiBjbGFzcz1cImNvbC1zbS0yIGVkaXQtaWNvblwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIChjbGljayk9XCJsb2FkRm9ybUVsZW1lbnQob2JqLCBpKVwiPjwvaT48L2Rpdj5cbiAgPGRpdiBbbmdTd2l0Y2hdPVwib2JqLnR5cGVcIiBzdHlsZT1cIndpZHRoOjgwJTttYXJnaW4tbGVmdDoyMCVcIj5cblxuICA8dGV4dGJveCBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuXG4gIDx0ZXh0Ym94IHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuXG4gIDxkYXRlIHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9kYXRlPlxuXG4gIDxzbGlkZXIgc3R5bGUgPVwicGFkZGluZy1sZWZ0OjMwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ3NsaWRlcidcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvc2xpZGVyPlxuXG4gICAgPGRyb3Bkb3duIHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZHJvcGRvd24+XG5cbiAgICA8Y2hlY2tib3ggc3R5bGUgPVwicGFkZGluZy1sZWZ0OjMwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9jaGVja2JveD5cblxuICAgPHJhZGlvIHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvcmFkaW8+XG5cbiAgICA8ZmlsZSBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCInZmlsZSdcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZmlsZT5cblxuICAgIFxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5gLFxuICAgIHN0eWxlczpbYFxuICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGRpc3BsYXk6bm9uZVxuICAgIH0gYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU2VsZWN0Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XG4gIEBJbnB1dCgpIGZvcm06IGFueTtcbiAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG5cbiAgQE91dHB1dCgpIHNlbmREYXRhVG9QYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNoaWxkcmVuRHJvcEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgYWN0aXZlTW9kZWxEYXRhOiBhbnk7XG4gIHZhbGlkYXRpb25zOiBhbnk7XG4gIHJlcXVpcmVkOiBhbnk7XG4gIGF1dG9Db2xsZWN0OiBhbnk7XG4gIG9wZW5FZGl0Q2hpbGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2lkOiBhbnk7XG4gIGRlc2NyaXB0aW9uOiBhbnk7XG4gIG1pbkRhdGU6IGFueTtcbiAgbWF4RGF0ZTogYW55O1xuICBtaW46IGFueTtcbiAgbWF4OiBhbnk7XG4gIGxhYmVsOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgcGxhY2Vob2xkZXI6IGFueTtcbiAgb3B0aW9uczogYW55O1xuICBwYWdlTnVtYmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgIC8vIHRoaXMuZm9ybS5jb250cm9scyA9IHRoaXMuZmllbGQubmFtZTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZvcm1cIix0aGlzLmZvcm0pO1xuXG4gIH1cbiAgb25Ecm9wTmV3KCRldmVudCwgZmllbGQpIHtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0gTXVsdGlTZWxlY3RDb21wb25lbnQgLVwiLCAkZXZlbnQpO1xuXG4gICAgaWYoJGV2ZW50LmRhdGEucmVzcG9uc2VUeXBlICYmICRldmVudC5kYXRhLnJlc3BvbnNlVHlwZSAhPSdtYXRyaXgnKXtcbiAgXG4gICAgJGV2ZW50LmRhdGEubXV0aVNlbGVjdCA9IGZpZWxkO1xuICAgIHRoaXMuY2hpbGRyZW5Ecm9wRXZlbnQuZW1pdCgkZXZlbnQuZGF0YSk7XG4gIH1lbHNle1xuICAgIGNvbnNvbGUubG9nKFwibm90IGFsbG93ZWRcIik7XG4gIH1cbiAgfVxuXG5cbiAgY2xvc2VNb2RlbENoaWxkKGFjdGlvbiwgZGF0YSA9IFwiXCIpIHtcbiAgICBpZiAoYWN0aW9uID09IFwic2F2ZVwiKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgY29uc29sZS5sb2coXCJjbG9zZU1vZGVsXCIsIHRoaXMuZmllbGQpO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEuZmllbGQgPSB0aGlzLmZpZWxkLmZpZWxkO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIGxldCBvYmogPSB7XG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHZhbGlkYXRpb25zOiB0aGlzLnZhbGlkYXRpb25zLFxuICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgX2lkOiB0aGlzLl9pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb25cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgb2JqWydtaW5EYXRlJ10gPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIG9ialsnbWF4RGF0ZSddID0gdGhpcy5tYXhEYXRlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgICBvYmpbJ21pbiddID0gdGhpcy5taW47XG4gICAgICAgIG9ialsnbWF4J10gPSB0aGlzLm1heDtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coXCJvYmpcIixvYmopO1xuXG5cbiAgICAgIHZhciBpbmRleCA9IHRoaXMuZmllbGQuY2hpbGQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5maWVsZCA9PT0gdGhpcy5jdXJyZW50SXRlbS5maWVsZCk7XG4gICAgICB0aGlzLmZpZWxkLmNoaWxkLnNwbGljZShpbmRleCwgMSwgb2JqKVxuXG4gICAgICAvLyBsZXQgbmV3T2JqID0gIHRoaXMuZmllbGQuY2hpbGQuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgLy8gICBpZiAoaXRlbS5maWVsZCA9PSB0aGlzLmN1cnJlbnRJdGVtLmZpZWxkKSB7XG4gICAgICAvLyAgICAgLy8gdGhpcy5maWVsZC5jaGlsZFt0aGlzLmN1cnJlbnRJdGVtLnBvc2l0aW9uXSA9IG9iajtcbiAgICAgIC8vICAgICByZXR1cm4gb2JqO1xuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIHJldHVybiBpdGVtO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KTtcblxuICAgICAgY29uc29sZS5sb2coJ2FhYWFhYWFhYWFhJywgdGhpcy5maWVsZCk7XG5cblxuXG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdChKU09OLnN0cmluZ2lmeShvYmopKTtcblxuXG4gICAgICAvLyB0aGlzLmZpZWxkLmxhYmVsID0gdGhpcy5sYWJlbDtcblxuXG4gICAgICAvLyB0aGlzLmZpZWxkLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgIC8vIHRoaXMuZmllbGQudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIC8vIHRoaXMuZmllbGQucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgLy8gdGhpcy5maWVsZC5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgLy8gdGhpcy5maWVsZC5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb247XG5cbiAgICAgIC8vIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICAvLyAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICAgIC8vICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgLy8gICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcbiAgICAgIC8vIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAvLyAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluID0gdGhpcy5taW47XG4gICAgICAvLyAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4ID0gdGhpcy5tYXg7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIHRoaXMuZmllbGQudmFsaWRhdGlvbnNcblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZFwiLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcInNkZHNcIiwgdGhpcy5yZXF1aXJlZCk7XG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICAgIC8vIHRoaXMuZmllbGQudmFsaWRhdGlvbnMuYXV0b0NvbGxlY3QgPSB0aGlzLmF1dG9Db2xsZWN0O1xuXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGRcIiwgdGhpcy5maWVsZCk7XG4gICAgICB0aGlzLm9wZW5FZGl0Q2hpbGQgPSBmYWxzZTtcblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQodGhpcy5hY3RpdmVNb2RlbERhdGEpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5vcGVuRWRpdENoaWxkID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcbiAgICAvLyAgdGhpcy5teU1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21vZGFsIGhpZGUnO1xuICB9XG5cbiAgY3VycmVudEl0ZW06IGFueTtcblxuICBsb2FkRm9ybUVsZW1lbnQoaXRlbSwgaWQpIHtcbiAgICBjb25zb2xlLmxvZyhcIml0ZW0gLS0tXCIsIGl0ZW0sIFwiaWRcIiwgaWQpO1xuICAgIHRoaXMuYWN0aXZlTW9kZWxEYXRhID0gXCJcIjtcbiAgICB0aGlzLmxhYmVsID0gaXRlbS5sYWJlbDtcblxuICAgIHRoaXMuY3VycmVudEl0ZW0gPSBpdGVtO1xuXG5cbiAgICB0aGlzLnR5cGUgPSBpdGVtLnR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGl0ZW0ucGxhY2Vob2xkZXI7XG4gICAgdGhpcy5vcHRpb25zID0gaXRlbS5vcHRpb25zO1xuICAgIHRoaXMuX2lkID0gaXRlbS5faWQ7XG4gICAgLy8gdGhpcy5yZXF1aXJlZCA9IGl0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgaWYgKGl0ZW0udHlwZSA9PSBcImRhdGVcIikge1xuICAgICAgdGhpcy5taW5EYXRlID0gaXRlbS52YWxpZGF0aW9ucy5taW5EYXRlO1xuICAgICAgdGhpcy5tYXhEYXRlID0gaXRlbS52YWxpZGF0aW9ucy5tYXhEYXRlXG4gICAgICB0aGlzLmF1dG9Db2xsZWN0ID0gaXRlbS52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXRlbS50eXBlID09IFwic2xpZGVyXCIpIHtcbiAgICAgIHRoaXMubWluID0gaXRlbS52YWxpZGF0aW9ucy5taW47XG4gICAgICB0aGlzLm1heCA9IGl0ZW0udmFsaWRhdGlvbnMubWF4O1xuICAgIH1cblxuICAgIC8vIHRoaXMucmVxdWlyZWQgPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuXG4gICAgLy8gY29uc29sZS5sb2coaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsXG4gICAgICAvLyB0aGlzLnJlcXVpcmVkLCBcImxhYmVsXCIsIHRoaXMubGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibGFiZWxcIix0aGlzLmxhYmVsKTtcbiAgICB0aGlzLm9wZW5FZGl0Q2hpbGQgPSB0aGlzLm9wZW5FZGl0Q2hpbGQgPyBmYWxzZSA6IHRydWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1vZGFsQnV0dG9uXCIpLmNsaWNrKCk7XG4gICAgLy8gdGhpcy5vcGVuKHRoaXMubXlNb2RhbCk7XG4gICAgLy8gdGhpcy5teU1vZGFsLnNob3coKTtcbiAgICAvLyB0aGlzLm15TW9kYWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnbW9kYWwgZmFkZSBzaG93JztcbiAgfVxuXG59XG4iXX0=