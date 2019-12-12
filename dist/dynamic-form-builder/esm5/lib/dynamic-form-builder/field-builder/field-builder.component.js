/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/field-builder/field-builder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
var FieldBuilderComponent = /** @class */ (function () {
    function FieldBuilderComponent() {
        this.sendDataToParent = new EventEmitter();
        this.copyOrDeleteEvent = new EventEmitter();
        this.openEdit = false;
    }
    Object.defineProperty(FieldBuilderComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldBuilderComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FieldBuilderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options = [];
        this.validations = {};
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FieldBuilderComponent.prototype.loadFormElement = /**
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
        // document.getElementById("openModalButton").click();
        // this.open(this.myModal);
        // this.myModal.show();
        // this.myModal.nativeElement.className = 'modal fade show';
    };
    /**
     * @return {?}
     */
    FieldBuilderComponent.prototype.saveEdit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} action
     * @return {?}
     */
    FieldBuilderComponent.prototype.closeModel = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        if (action == "save") {
            console.log("this.field", this.required);
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
            this.sendDataToParent.emit(JSON.stringify(obj));
            // this.field.label = this.label;
            this.field.label = this.label;
            this.field.type = this.type;
            this.field.placeholder = this.placeholder;
            this.field.options = this.options;
            this.field.description = this.description;
            if (this.type == 'date') {
                this.field.validations.minDate = this.minDate;
                this.field.validations.maxDate = this.maxDate;
                this.field.validations.autoCollect = this.autoCollect;
            }
            else if (this.type == 'slider') {
                this.field.validations.min = this.min;
                this.field.validations.max = this.max;
            }
            // this.field.validations
            console.log(" this.field.validations.required", this.field.validations.required, "sdds", this.required);
            this.field.validations.required = this.required;
            this.field.validations.autoCollect = this.autoCollect;
            // console.log(" this.field", this.field);
            this.openEdit = false;
            // this.sendDataToParent.emit(this.activeModelData);
        }
        else {
            this.openEdit = false;
            // this.modalReference.close();
        }
        // this.modalService.close();
        //  this.myModal.nativeElement.className = 'modal hide';
    };
    /**
     * @param {?} content
     * @return {?}
     */
    FieldBuilderComponent.prototype.open = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        // console.log(" this.activeModelData", selectedData);
        // this.modalReference = this.modalService.open(content);
        // this.modalReference.result.then((result) => {
        //   this.closeResult = `Closed with`;
        // }, (reason) => {
        //   this.closeResult = `Dismissed`;
        // });
    };
    // private getDismissReason(reason: any): string {
    //   // if (reason === ModalDismissReasons.ESC) {
    //   //   return 'by pressing ESC';
    //   // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   //   return 'by clicking on a backdrop';
    //   // } else {
    //   //   return `with: ${reason}`;
    //   // }
    // }
    // private getDismissReason(reason: any): string {
    //   // if (reason === ModalDismissReasons.ESC) {
    //   //   return 'by pressing ESC';
    //   // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   //   return 'by clicking on a backdrop';
    //   // } else {
    //   //   return `with: ${reason}`;
    //   // }
    // }
    /**
     * @param {?} opt
     * @param {?} index
     * @return {?}
     */
    FieldBuilderComponent.prototype.deleteOption = 
    // private getDismissReason(reason: any): string {
    //   // if (reason === ModalDismissReasons.ESC) {
    //   //   return 'by pressing ESC';
    //   // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   //   return 'by clicking on a backdrop';
    //   // } else {
    //   //   return `with: ${reason}`;
    //   // }
    // }
    /**
     * @param {?} opt
     * @param {?} index
     * @return {?}
     */
    function (opt, index) {
        console.log("delete", this.options);
        // let newArr = [];
        /** @type {?} */
        var optionsArr = this.options.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            // if(item.lable==opt.label && item.key==opt.key){
            // }else{
            // }
            return (item.label != opt.label && item.key != opt.key);
            // if(item.lable==opt.label && item.key==opt.key){
            // }else{
            //   return true;
            // }
        }));
        this.options = optionsArr;
        console.log("delete new ", optionsArr);
    };
    /**
     * @return {?}
     */
    FieldBuilderComponent.prototype.AddNewOptions = /**
     * @return {?}
     */
    function () {
        if (this.newOptionKey != "" && this.newOptionLabel != "") {
            console.log("this.newOption", this.newOptionLabel);
            if (Array.isArray(this.options)) {
            }
            else {
                this.options = [];
            }
            this.options.push({
                key: this.newOptionKey,
                label: this.newOptionLabel
            });
            console.log("this.options.push", this.options);
        }
        this.newOptionKey = "";
        this.newOptionLabel = "";
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FieldBuilderComponent.prototype.copyElement = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // this.field.push(item);
        item.action = 'copy';
        console.log("field ----------", item);
        this.copyOrDeleteEvent.emit(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FieldBuilderComponent.prototype.deleteElement = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.action = 'delete';
        this.field.isDelete = true;
        this.copyOrDeleteEvent.emit(item);
        console.log("field delete", this.field);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FieldBuilderComponent.prototype.childrenDropEvent = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        console.log("childrenDropEvent", this.field);
        // const action  = 'childDroped';
        /** @type {?} */
        var newObj = {
            action: 'childDroped',
            data: $event
        };
        this.copyOrDeleteEvent.emit(JSON.stringify(newObj));
        console.log("field delete", this.field);
    };
    FieldBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'field-builder',
                    template: "\n  <style>\n  .mat-slider-horizontal {\n    min-width: 80% !important;\n  }\n  .example-radio-group {\n    display: flex;\n    flex-direction: block;\n    margin: 15px 0;\n  }\n\n  .mat-form-field {\n    display: block;\n    position: relative;\n    flex: auto;\n    min-width: 0;\n    width: 372px;\n  }\n  .input-group {\n    position: relative;\n     border-collapse: separate;\n     display: block;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  .edit-icon {\n    position: relative;\n  width: 36px;\n  max-width: 57px;\n  right: 0px;\n  left: 94%;\n  top: 25px;cursor: pointer;z-index: 100;\n}\n  </style>\n  <div class=\"row\"  *ngIf=\"openEdit\" style=\"padding: 20px;\n  border: 1px solid #ccc;margin-top:10px;\n  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);\">\n\n    <div class=\"col-sm-7 form-group\">\n      <mat-form-field>\n        <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" name=\"label\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-7 form-group\">\n      <mat-form-field>\n        <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-7 form-group\">\n      <mat-form-field>\n        <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n\n<div class=\"col-sm-7 form-group\">\n  <mat-form-field>\n  <mat-label>Input Type</mat-label>\n    <mat-select  [(ngModel)]=\"type\">\n      <mat-option value=\"text\">text</mat-option>\n      <mat-option value=\"number\">number</mat-option>\n      <mat-option value=\"radio\">radio</mat-option>\n      <mat-option value=\"date\">date</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"col-sm-7 form-group\">\n<mat-form-field>\n<mat-label>Pages</mat-label>\n  <mat-select  [(ngModel)]=\"pageNumber\">\n    <mat-option value=\"page_1\">page 1</mat-option>\n    <mat-option value=\"page_2\">page 2</mat-option>\n    <mat-option value=\"page_3\">page 3</mat-option>\n  </mat-select>\n</mat-form-field>\n</div>\n\n    <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Min\" matInput  [(ngModel)]=\"min\" name=\"min value\">\n    </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Max\" matInput  [(ngModel)]=\"max\" name=\"min value\">\n    </mat-form-field>\n    </div>\n    \n  <div class=\"col-sm-12 form-group\" *ngIf=\"type=='date'\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" placeholder=\"Choose a min date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" placeholder=\"Choose a max date\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerMaxDate></mat-datepicker>\n    </mat-form-field>\n\n\n    </div>\n    <div class=\"col-sm-12 form-group\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n    <label for=\"label\" class=\"col-sm-12\">Options</label>\n    \n    <ul class=\"col\" *ngFor=\"let opt of options;let index\">\n     <li class=\"\">\n      <span>{{opt.label}} </span><span style=\"\n      margin-left: 30px;\" (click)=\"deleteOption(opt,index)\">\n      <i class=\"fa fa-close\" style=\"font-size:36px;color:red\"></i></span>\n    </li>\n    \n    </ul>\n\n    <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Max\" matInput  [(ngModel)]=\"max\" name=\"min value\">\n    </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-7 form-group\">\n    <div class=\"input-group\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Label\" matInput style=\"margin-bottom: 10px;\" [(ngModel)]=\"newOptionLabel\" name=\"newOption\">\n    </mat-form-field>\n    <mat-form-field>\n    <input type=\"tex\" matInput name=\"newOption\" placeholder=\"key\"  [(ngModel)]=\"newOptionKey\">\n    </mat-form-field>  \n    </div>\n      <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"AddNewOptions()\">\n      Add\n      </button>\n    </div>\n\n    \n    \n    </div>\n\n    \n<div class=\"col-sm-7\">\n<label id=\"example-radio-group-label\">is Reqired ?</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"required\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    Yes\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    No\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n<div class=\"col-sm-7\" *ngIf=\"type=='date'\">\n<label id=\"example-radio-group-label\">is autoCollect</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"autoCollect\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    True\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    False\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n  \n<div  class=\"col-sm-12\">\n\n<button mat-flat-button color=\"primary\" style=\"margin-right:10px;\"  (click)=\"closeModel('save')\">\nSave\n</button>\n\n</div>\n  </div>\n  <div class=\"form-group row\" [formGroup]=\"form\" style=\"padding:10px;margin:0px;margin-top:10px;box-shadow:0 0px 0px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23)\">\n  <div class=\"col-sm-2 edit-icon\" ><i class=\"fa fa-edit\" (click)=\"loadFormElement(field)\" ></i></div>\n    <div class=\"col-md-12\" [ngSwitch]=\"field.type\">\n    <textbox *ngSwitchCase=\"'number'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <date *ngSwitchCase=\"'date'\" [field]=\"field\" [form]=\"form\"></date>\n    <slider *ngSwitchCase=\"'slider'\" [field]=\"field\" [form]=\"form\"></slider>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <lib-multi-select *ngSwitchCase=\"'multiselect'\" (childrenDropEvent)=\"childrenDropEvent($event)\" [field]=\"field\" [form]=\"form\"></lib-multi-select>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div style=\"float:right\">\n          <span class=\"cursor-pntr\" (click)=\"copyElement(field)\"><i class=\"fa fa-copy\"></i></span>\n          <span class=\"cursor-pntr\" (click)=\"deleteElement(field)\"><i class=\"fa fa-trash\"></i> </span>\n       </div> \n       </div>",
                    styleUrls: []
                },] },
    ];
    /** @nocollapse */
    FieldBuilderComponent.ctorParameters = function () { return []; };
    FieldBuilderComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }],
        sendDataToParent: [{ type: Output }],
        copyOrDeleteEvent: [{ type: Output }],
        myModal: [{ type: ViewChild, args: ['content', { static: false },] }]
    };
    return FieldBuilderComponent;
}());
export { FieldBuilderComponent };
if (false) {
    /** @type {?} */
    FieldBuilderComponent.prototype.field;
    /** @type {?} */
    FieldBuilderComponent.prototype.form;
    /** @type {?} */
    FieldBuilderComponent.prototype.sendDataToParent;
    /** @type {?} */
    FieldBuilderComponent.prototype.copyOrDeleteEvent;
    /** @type {?} */
    FieldBuilderComponent.prototype.closeResult;
    /** @type {?} */
    FieldBuilderComponent.prototype.modalReference;
    /** @type {?} */
    FieldBuilderComponent.prototype.pageNumber;
    /** @type {?} */
    FieldBuilderComponent.prototype.any;
    /** @type {?} */
    FieldBuilderComponent.prototype.label;
    /** @type {?} */
    FieldBuilderComponent.prototype.type;
    /** @type {?} */
    FieldBuilderComponent.prototype.placeholder;
    /** @type {?} */
    FieldBuilderComponent.prototype.options;
    /** @type {?} */
    FieldBuilderComponent.prototype.newOptionKey;
    /** @type {?} */
    FieldBuilderComponent.prototype.newOptionLabel;
    /** @type {?} */
    FieldBuilderComponent.prototype.activeModelData;
    /** @type {?} */
    FieldBuilderComponent.prototype.validations;
    /** @type {?} */
    FieldBuilderComponent.prototype.required;
    /** @type {?} */
    FieldBuilderComponent.prototype.autoCollect;
    /** @type {?} */
    FieldBuilderComponent.prototype.openEdit;
    /** @type {?} */
    FieldBuilderComponent.prototype._id;
    /** @type {?} */
    FieldBuilderComponent.prototype.description;
    /** @type {?} */
    FieldBuilderComponent.prototype.minDate;
    /** @type {?} */
    FieldBuilderComponent.prototype.maxDate;
    /** @type {?} */
    FieldBuilderComponent.prototype.min;
    /** @type {?} */
    FieldBuilderComponent.prototype.max;
    /** @type {?} */
    FieldBuilderComponent.prototype.myModal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3RHO0lBcVBFO1FBakNVLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFOUMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQWdCekQsYUFBUSxHQUFZLEtBQUssQ0FBQztJQWlCdEIsQ0FBQztJQUxMLHNCQUFJLDBDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ25FLHNCQUFJLDBDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBOzs7O0lBTW5FLHdDQUFROzs7SUFBUjtRQUVFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7Ozs7O0lBSUQsK0NBQWU7Ozs7SUFBZixVQUFnQixJQUFJO1FBR2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FB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NENBQWlCOztJQUNqQix3Q0FBYTs7SUFDYiw2Q0FBa0I7O0lBQ2xCLCtDQUFvQjs7SUFFcEIsZ0RBQXFCOztJQUNyQiw0Q0FBaUI7O0lBQ2pCLHlDQUFjOztJQUNkLDRDQUFpQjs7SUFDakIseUNBQTBCOztJQUMxQixvQ0FBUzs7SUFDVCw0Q0FBaUI7O0lBQ2pCLHdDQUFhOztJQUNiLHdDQUFhOztJQUNiLG9DQUFTOztJQUNULG9DQUFTOztJQUlULHdDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgTmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnMgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUSElTX0VYUFIgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvb3V0cHV0L291dHB1dF9hc3QnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZpZWxkLWJ1aWxkZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c3R5bGU+XG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICAgIG1pbi13aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGJsb2NrO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDM3MnB4O1xuICB9XG4gIC5pbnB1dC1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuZWRpdC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNnB4O1xuICBtYXgtd2lkdGg6IDU3cHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDk0JTtcbiAgdG9wOiAyNXB4O2N1cnNvcjogcG9pbnRlcjt6LWluZGV4OiAxMDA7XG59XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAgKm5nSWY9XCJvcGVuRWRpdFwiIHN0eWxlPVwicGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzttYXJnaW4tdG9wOjEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO1wiPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTGFiZWxcIiBbKG5nTW9kZWwpXT1cImxhYmVsXCIgbmFtZT1cImxhYmVsXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgUGxhY2UgSG9sZGVyXCIgWyhuZ01vZGVsKV09XCJwbGFjZWhvbGRlclwiIG5hbWU9XCJwbGFjZWhvbGRlclwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkhpbnQvRGVzY3JpcHRpb25cIiBbKG5nTW9kZWwpXT1cImRlc2NyaXB0aW9uXCIgbmFtZT1cInBsYWNlaG9sZGVyXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+SW5wdXQgVHlwZTwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0ICBbKG5nTW9kZWwpXT1cInR5cGVcIj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dFwiPnRleHQ8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmFkaW9cIj5yYWRpbzwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZGF0ZVwiPmRhdGU8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG48bWF0LWZvcm0tZmllbGQ+XG48bWF0LWxhYmVsPlBhZ2VzPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICBbKG5nTW9kZWwpXT1cInBhZ2VOdW1iZXJcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMVwiPnBhZ2UgMTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMlwiPnBhZ2UgMjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfM1wiPnBhZ2UgMzwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWluXCIgbWF0SW5wdXQgIFsobmdNb2RlbCldPVwibWluXCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCAgWyhuZ01vZGVsKV09XCJtYXhcIiBuYW1lPVwibWluIHZhbHVlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgWyhuZ01vZGVsKV09XCJtaW5EYXRlXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBtaW4gZGF0ZVwiPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJNYXhEYXRlXCIgWyhuZ01vZGVsKV09XCJtYXhEYXRlXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBtYXggZGF0ZVwiPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJNYXhEYXRlXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlck1heERhdGU+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdyYWRpbycgfHwgdHlwZT09J2NoZWNrYm94JyB8fCB0eXBlPT0nZHJvcGRvd24nXCI+XG4gICAgPGxhYmVsIGZvcj1cImxhYmVsXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5PcHRpb25zPC9sYWJlbD5cbiAgICBcbiAgICA8dWwgY2xhc3M9XCJjb2xcIiAqbmdGb3I9XCJsZXQgb3B0IG9mIG9wdGlvbnM7bGV0IGluZGV4XCI+XG4gICAgIDxsaSBjbGFzcz1cIlwiPlxuICAgICAgPHNwYW4+e3tvcHQubGFiZWx9fSA8L3NwYW4+PHNwYW4gc3R5bGU9XCJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1wiIChjbGljayk9XCJkZWxldGVPcHRpb24ob3B0LGluZGV4KVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiIHN0eWxlPVwiZm9udC1zaXplOjM2cHg7Y29sb3I6cmVkXCI+PC9pPjwvc3Bhbj5cbiAgICA8L2xpPlxuICAgIFxuICAgIDwvdWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCAgWyhuZ01vZGVsKV09XCJtYXhcIiBuYW1lPVwibWluIHZhbHVlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTGFiZWxcIiBtYXRJbnB1dCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHg7XCIgWyhuZ01vZGVsKV09XCJuZXdPcHRpb25MYWJlbFwiIG5hbWU9XCJuZXdPcHRpb25cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleFwiIG1hdElucHV0IG5hbWU9XCJuZXdPcHRpb25cIiBwbGFjZWhvbGRlcj1cImtleVwiICBbKG5nTW9kZWwpXT1cIm5ld09wdGlvbktleVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+ICBcbiAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIiAgKGNsaWNrKT1cIkFkZE5ld09wdGlvbnMoKVwiPlxuICAgICAgQWRkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIFxuICAgIFxuICAgIDwvZGl2PlxuXG4gICAgXG48ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBSZXFpcmVkID88L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcbiAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcbiAgWyhuZ01vZGVsKV09XCJyZXF1aXJlZFwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgIFllc1xuICA8L21hdC1yYWRpby1idXR0b24+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgIE5vXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tN1wiICpuZ0lmPVwidHlwZT09J2RhdGUnXCI+XG48bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgYXV0b0NvbGxlY3Q8L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcbiAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcbiAgWyhuZ01vZGVsKV09XCJhdXRvQ29sbGVjdFwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgIFRydWVcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICBGYWxzZVxuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjwvZGl2PlxuXG4gIFxuPGRpdiAgY2xhc3M9XCJjb2wtc20tMTJcIj5cblxuPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MTBweDtcIiAgKGNsaWNrKT1cImNsb3NlTW9kZWwoJ3NhdmUnKVwiPlxuU2F2ZVxuPC9idXR0b24+XG5cbjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgc3R5bGU9XCJwYWRkaW5nOjEwcHg7bWFyZ2luOjBweDttYXJnaW4tdG9wOjEwcHg7Ym94LXNoYWRvdzowIDBweCAwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4yMylcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIGVkaXQtaWNvblwiID48aSBjbGFzcz1cImZhIGZhLWVkaXRcIiAoY2xpY2spPVwibG9hZEZvcm1FbGVtZW50KGZpZWxkKVwiID48L2k+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XG4gICAgPHRleHRib3ggKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cbiAgICA8dGV4dGJveCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cbiAgICA8ZGF0ZSAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZGF0ZT5cbiAgICA8c2xpZGVyICpuZ1N3aXRjaENhc2U9XCInc2xpZGVyJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3NsaWRlcj5cbiAgICAgIDxkcm9wZG93biAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2Ryb3Bkb3duPlxuICAgICAgPGNoZWNrYm94ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvY2hlY2tib3g+XG4gICAgICA8cmFkaW8gKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9yYWRpbz5cbiAgICAgIDxsaWItbXVsdGktc2VsZWN0ICpuZ1N3aXRjaENhc2U9XCInbXVsdGlzZWxlY3QnXCIgKGNoaWxkcmVuRHJvcEV2ZW50KT1cImNoaWxkcmVuRHJvcEV2ZW50KCRldmVudClcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9saWItbXVsdGktc2VsZWN0PlxuICAgICAgPGZpbGUgKm5nU3dpdGNoQ2FzZT1cIidmaWxlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2ZpbGU+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1cnNvci1wbnRyXCIgKGNsaWNrKT1cImNvcHlFbGVtZW50KGZpZWxkKVwiPjxpIGNsYXNzPVwiZmEgZmEtY29weVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiIChjbGljayk9XCJkZWxldGVFbGVtZW50KGZpZWxkKVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+IDwvc3Bhbj5cbiAgICAgICA8L2Rpdj4gXG4gICAgICAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbXVxufSlcblxuLy8gPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBteS0xIHAtMiBmYWRlSW5Eb3duIGFuaW1hdGVkXCIgKm5nSWY9XCIhaXNWYWxpZCAmJiBpc0RpcnR5XCI+e3tmaWVsZC5sYWJlbH19IGlzIHJlcXVpcmVkPC9kaXY+XG5cbmV4cG9ydCBjbGFzcyBGaWVsZEJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55O1xuICBASW5wdXQoKSBmb3JtOiBhbnk7XG5cbiAgQE91dHB1dCgpIHNlbmREYXRhVG9QYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBAT3V0cHV0KCkgY29weU9yRGVsZXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgXG4gIGNsb3NlUmVzdWx0OiBzdHJpbmc7XG4gIG1vZGFsUmVmZXJlbmNlOiBhbnk7XG4gIHBhZ2VOdW1iZXI7IGFueTtcbiAgbGFiZWw6IGFueTtcbiAgdHlwZTogYW55O1xuICBwbGFjZWhvbGRlcjogYW55O1xuICBvcHRpb25zOiBhbnk7XG4gIG5ld09wdGlvbktleTogYW55O1xuICBuZXdPcHRpb25MYWJlbDogYW55O1xuXG4gIGFjdGl2ZU1vZGVsRGF0YTogYW55O1xuICB2YWxpZGF0aW9uczogYW55O1xuICByZXF1aXJlZDogYW55O1xuICBhdXRvQ29sbGVjdDogYW55O1xuICBvcGVuRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBfaWQ6IGFueTtcbiAgZGVzY3JpcHRpb246IGFueTtcbiAgbWluRGF0ZTogYW55O1xuICBtYXhEYXRlOiBhbnk7XG4gIG1pbjogYW55O1xuICBtYXg6IGFueTtcblxuXG4gIC8vIHByaXZhdGUgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG15TW9kYWw6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLnZhbGlkYXRpb25zID0ge31cbiAgfVxuXG5cblxuICBsb2FkRm9ybUVsZW1lbnQoaXRlbSkge1xuXG5cbiAgICBjb25zb2xlLmxvZyhcIml0ZW0gLS0tXCIsIGl0ZW0pO1xuXG4gICAgdGhpcy5hY3RpdmVNb2RlbERhdGEgPSBcIlwiO1xuICAgIHRoaXMubGFiZWwgPSBpdGVtLmxhYmVsO1xuICAgIHRoaXMudHlwZSA9IGl0ZW0udHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gaXRlbS5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBpdGVtLm9wdGlvbnM7XG4gICAgdGhpcy5faWQgPSBpdGVtLl9pZDtcblxuICAgIHRoaXMucmVxdWlyZWQgPSBpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuICAgIFxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYgKGl0ZW0udHlwZSA9PSBcImRhdGVcIikge1xuICAgICAgdGhpcy5taW5EYXRlID0gaXRlbS52YWxpZGF0aW9ucy5taW5EYXRlO1xuICAgICAgdGhpcy5tYXhEYXRlID0gaXRlbS52YWxpZGF0aW9ucy5tYXhEYXRlXG4gICAgICB0aGlzLmF1dG9Db2xsZWN0ID0gaXRlbS52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXRlbS50eXBlID09IFwic2xpZGVyXCIpIHtcbiAgICAgIHRoaXMubWluID0gaXRlbS52YWxpZGF0aW9ucy5taW47XG4gICAgICB0aGlzLm1heCA9IGl0ZW0udmFsaWRhdGlvbnMubWF4O1xuICAgIH1cblxuICAgIHRoaXMucmVxdWlyZWQgPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuICAgIFxuXG5cbiAgICBjb25zb2xlLmxvZyhpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcIml0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWRcIiwgdGhpcy5yZXF1aXJlZCwgXCJsYWJlbFwiLCB0aGlzLmxhYmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImxhYmVsXCIsdGhpcy5sYWJlbCk7XG5cbiAgICB0aGlzLm9wZW5FZGl0ID0gdGhpcy5vcGVuRWRpdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5Nb2RhbEJ1dHRvblwiKS5jbGljaygpO1xuICAgIC8vIHRoaXMub3Blbih0aGlzLm15TW9kYWwpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5zaG93KCk7XG4gICAgLy8gdGhpcy5teU1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21vZGFsIGZhZGUgc2hvdyc7XG5cbiAgfVxuXG4gIHNhdmVFZGl0KCkge1xuICB9XG4gIGNsb3NlTW9kZWwoYWN0aW9uKSB7XG5cbiAgICBpZiAoYWN0aW9uID09IFwic2F2ZVwiKSB7XG5cblxuXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGRcIiwgdGhpcy5yZXF1aXJlZCk7XG4gICAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLmNsb3NlKCk7XG5cblxuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEuZmllbGQgPSB0aGlzLmZpZWxkLmZpZWxkO1xuXG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS50eXBlID0gdGhpcy50eXBlO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgdmFsaWRhdGlvbnM6IHRoaXMudmFsaWRhdGlvbnMsXG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICBfaWQ6IHRoaXMuX2lkLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICBvYmpbJ21pbkRhdGUnXSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgb2JqWydtYXhEYXRlJ10gPSB0aGlzLm1heERhdGVcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIG9ialsnbWluJ10gPSB0aGlzLm1pbjtcbiAgICAgICAgb2JqWydtYXgnXSA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm9ialwiLG9iaik7XG5cblxuICAgICAgdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cblxuICAgICAgLy8gdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG5cblxuICAgICAgdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICB0aGlzLmZpZWxkLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICB0aGlzLmZpZWxkLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIHRoaXMuZmllbGQub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIHRoaXMuZmllbGQuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbiA9IHRoaXMubWluO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heCA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbGlkYXRpb25zXG5cbiAgICAgIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWRcIiwgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJzZGRzXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcbiAgICAgIFxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkXCIsIHRoaXMuZmllbGQpO1xuICAgICAgdGhpcy5vcGVuRWRpdCA9IGZhbHNlO1xuXG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdCh0aGlzLmFjdGl2ZU1vZGVsRGF0YSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLm9wZW5FZGl0ID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcbiAgICAvLyAgdGhpcy5teU1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21vZGFsIGhpZGUnO1xuICB9XG5cbiAgb3Blbihjb250ZW50KSB7XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5hY3RpdmVNb2RlbERhdGFcIiwgc2VsZWN0ZWREYXRhKTtcbiAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlID0gdGhpcy5tb2RhbFNlcnZpY2Uub3Blbihjb250ZW50KTtcbiAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAvLyAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgQ2xvc2VkIHdpdGhgO1xuICAgIC8vIH0sIChyZWFzb24pID0+IHtcbiAgICAvLyAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgRGlzbWlzc2VkYDtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgZ2V0RGlzbWlzc1JlYXNvbihyZWFzb246IGFueSk6IHN0cmluZyB7XG4gIC8vICAgLy8gaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5FU0MpIHtcbiAgLy8gICAvLyAgIHJldHVybiAnYnkgcHJlc3NpbmcgRVNDJztcbiAgLy8gICAvLyB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5CQUNLRFJPUF9DTElDSykge1xuICAvLyAgIC8vICAgcmV0dXJuICdieSBjbGlja2luZyBvbiBhIGJhY2tkcm9wJztcbiAgLy8gICAvLyB9IGVsc2Uge1xuICAvLyAgIC8vICAgcmV0dXJuIGB3aXRoOiAke3JlYXNvbn1gO1xuICAvLyAgIC8vIH1cbiAgLy8gfVxuXG4gIGRlbGV0ZU9wdGlvbihvcHQsIGluZGV4KSB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGVcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgIC8vIGxldCBuZXdBcnIgPSBbXTtcbiAgICBsZXQgb3B0aW9uc0FyciA9IHRoaXMub3B0aW9ucy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAvLyBpZihpdGVtLmxhYmxlPT1vcHQubGFiZWwgJiYgaXRlbS5rZXk9PW9wdC5rZXkpe1xuXG4gICAgICAvLyB9ZWxzZXtcblxuICAgICAgLy8gfVxuXG4gICAgICByZXR1cm4gKGl0ZW0ubGFiZWwgIT0gb3B0LmxhYmVsICYmIGl0ZW0ua2V5ICE9IG9wdC5rZXkpXG5cbiAgICAgIC8vIGlmKGl0ZW0ubGFibGU9PW9wdC5sYWJlbCAmJiBpdGVtLmtleT09b3B0LmtleSl7XG5cbiAgICAgIC8vIH1lbHNle1xuICAgICAgLy8gICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIH1cbiAgICB9KVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc0FycjtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSBuZXcgXCIsIG9wdGlvbnNBcnIpO1xuICB9XG4gIEFkZE5ld09wdGlvbnMoKSB7XG5cbiAgICBpZiAodGhpcy5uZXdPcHRpb25LZXkgIT0gXCJcIiAmJiB0aGlzLm5ld09wdGlvbkxhYmVsICE9IFwiXCIpIHtcblxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm5ld09wdGlvblwiLCB0aGlzLm5ld09wdGlvbkxhYmVsKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHtcbiAgICAgICAga2V5OiB0aGlzLm5ld09wdGlvbktleSxcbiAgICAgICAgbGFiZWw6IHRoaXMubmV3T3B0aW9uTGFiZWxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMub3B0aW9ucy5wdXNoXCIsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMubmV3T3B0aW9uS2V5ID0gXCJcIjtcbiAgICB0aGlzLm5ld09wdGlvbkxhYmVsID0gXCJcIjtcbiAgfVxuXG4gIGNvcHlFbGVtZW50KGl0ZW0pIHtcbiAgICAvLyB0aGlzLmZpZWxkLnB1c2goaXRlbSk7XG4gICAgaXRlbS5hY3Rpb24gPSAnY29weSc7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCAtLS0tLS0tLS0tXCIsIGl0ZW0pO1xuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChpdGVtKTtcblxuICB9XG4gIGRlbGV0ZUVsZW1lbnQoaXRlbSkge1xuXG4gICAgaXRlbS5hY3Rpb24gPSAnZGVsZXRlJztcbiAgICB0aGlzLmZpZWxkLmlzRGVsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQoaXRlbSk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCBkZWxldGVcIiwgdGhpcy5maWVsZCk7XG5cbiAgfVxuICBjaGlsZHJlbkRyb3BFdmVudCgkZXZlbnQpe1xuICAgIGNvbnNvbGUubG9nKFwiY2hpbGRyZW5Ecm9wRXZlbnRcIiwgdGhpcy5maWVsZCk7XG4gICAgLy8gY29uc3QgYWN0aW9uICA9ICdjaGlsZERyb3BlZCc7XG4gICAgbGV0IG5ld09iaiA9IHtcbiAgICAgIGFjdGlvbiA6ICdjaGlsZERyb3BlZCcsXG4gICAgICBkYXRhOiRldmVudFxuICAgIH1cbiAgIFxuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChKU09OLnN0cmluZ2lmeShuZXdPYmopKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcbiAgfVxufVxuXG4iXX0=