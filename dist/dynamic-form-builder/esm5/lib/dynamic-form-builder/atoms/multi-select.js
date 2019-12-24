/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/multi-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, NgModule, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormBuilderService } from '../../dynamic-form-builder.service';
import { moveItemInArray } from '@angular/cdk/drag-drop';
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent(cdr, dynamicServe) {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.cdr = cdr;
        this.dynamicServe = dynamicServe;
        this.field = {};
        this.sendDataToParent = new EventEmitter();
        this.childrenDropEvent = new EventEmitter();
        this.copyOrDeleteEvent = new EventEmitter();
        this.openEditChild = false;
        this.listOfRelation = [];
        this.conditionArray = [
            {
                label: "equals",
                condition: "==="
            },
            {
                label: "Not Equal To",
                condition: "!="
            },
            {
                label: "Greater Than",
                condition: ">"
            },
            {
                label: "Less Than",
                condition: "<"
            },
            {
                label: "Greater Than Or Equal",
                condition: ">="
            },
            {
                label: "Less Than Or Equal",
                condition: "<="
            }
        ];
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
     * @return {?}
     */
    MultiSelectComponent.prototype.parentMapping = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log(this.condition, "condition", this.currentSelectedQtn, "selectedOption", this.selectedOption);
        /** @type {?} */
        var obj = {}
        // option:this.selectedOption,
        // question:this.currentSelectedQtn
        // obj['visibleIf'] = [];
        ;
        // option:this.selectedOption,
        // question:this.currentSelectedQtn
        // obj['visibleIf'] = [];
        /** @type {?} */
        var condiObj = {
            operator: this.condition,
            value: this.conditionMatchValue,
            field: this.field.field,
            label: this.field.label
            // parent:this.selectedOption.field
        }
        // if (this.currentSelectedQtn.parentChildren) {
        //   this.currentSelectedQtn.parentChildren.push(condiObj);
        // } else {
        //   this.currentSelectedQtn.parentChildren = [];
        //   this.currentSelectedQtn.parentChildren.push(condiObj);
        // }
        ;
        // if (this.currentSelectedQtn.parentChildren) {
        //   this.currentSelectedQtn.parentChildren.push(condiObj);
        // } else {
        //   this.currentSelectedQtn.parentChildren = [];
        //   this.currentSelectedQtn.parentChildren.push(condiObj);
        // }
        console.log('this.currentSelectedQtn', this.currentSelectedQtn);
        console.log("condiObj", condiObj);
        this.getSelectQuestion = this.allData['questionList']['questionList'].filter((/**
         * @param {?} ele
         * @return {?}
         */
        function (ele) {
            if (ele.field == _this.field.field) {
                return ele;
            }
        }));
        console.log("getSelectQuestion", this.getSelectQuestion);
        /** @type {?} */
        var isAvailable = false;
        if (this.getSelectQuestion['visibleIf'] && this.getSelectQuestion['visibleIf'].length > 0) {
            isAvailable = this.getSelectQuestion['visibleIf'].filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.visibleIf.field == _this.field.field) {
                    return true;
                }
            }));
        }
        console.log("after getSelectQuestion", this.getSelectQuestion);
        /** @type {?} */
        var allData = [];
        /** @type {?} */
        var addObj = false;
        for (var i = 0; i < this.getSelectQuestion.length; i++) {
            debugger;
            if (this.getSelectQuestion[i].parentChildren) {
                if (this.getSelectQuestion[i].parentChildren.indexOf(this.currentSelectedQtn.field) !== -1) {
                    alert("Value exists!");
                    addObj = false;
                }
                else {
                    addObj = true;
                    this.getSelectQuestion[i].parentChildren.push(this.currentSelectedQtn.field);
                }
            }
            else {
                addObj = true;
                this.getSelectQuestion[i].parentChildren = [];
                this.getSelectQuestion[i].parentChildren.push(this.currentSelectedQtn.field);
            }
        }
        if (addObj) {
            allData = this.allData['questionList']['questionList'].filter((/**
             * @param {?} ele
             * @return {?}
             */
            function (ele) {
                if (ele.field == _this.currentSelectedQtn.field) {
                    if (ele.visibleIf && ele.visibleIf.length > 0 && isAvailable == false) {
                        ele.visibleIf.push(condiObj);
                    }
                    else {
                        ele.visibleIf = [];
                        ele.visibleIf.push(condiObj);
                    }
                    return ele;
                }
                else {
                    return ele;
                }
            }));
            console.log("all data in question", allData);
            // this.sendDataToParent()
            if (!this.listOfRelation.includes(condiObj)) {
                this.listOfRelation.push(condiObj);
            }
        }
        if (this.condition) {
        }
        // 'option':this.selectedOption,
        //       'question':this.currentSelectedQtn
        // this.field.childQnt = this.currentSelectedQtn.field;
        console.log("this.field.validations.relation", this.listOfRelation);
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
        this.allData = this.dynamicServe.getALl();
        console.log('this.field', this.field);
        debugger;
        // for(let i = 0; i < this.allData['questionList']['questionList'][0].child.length; i++) {
        this.filtereddata = this.field.child.filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return t.field !== item.field; }));
        // }
        console.log('multi select', this.allData);
        console.log('this.filtereddata', this.filtereddata);
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
    /**
     * @param {?} data
     * @param {?} value
     * @return {?}
     */
    MultiSelectComponent.prototype.deleteCondition = /**
     * @param {?} data
     * @param {?} value
     * @return {?}
     */
    function (data, value) {
        // var index = this.listOfRelation.indexOf(value);
        // if (index > -1) {
        this.listOfRelation.splice(value, 1);
        this.getSelectQuestion[0].child.splice(value, 1);
        // }
        console.log('after delete data', this.listOfRelation);
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    MultiSelectComponent.prototype.deleteElement = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        item.action = 'delete';
        this.field.isDelete = true;
        this.field.child.splice(index, 1);
        this.copyOrDeleteEvent.emit(item);
        console.log("field delete", this.field, 'index', index);
        console.log('after delete', this.allData);
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    MultiSelectComponent.prototype.copyElement = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        // this.field.push(item);
        item.action = 'copy';
        console.log("copy field ----------", item, 'index', index);
        this.field.child.push(item);
        this.copyOrDeleteEvent.emit(item);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MultiSelectComponent.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        moveItemInArray(this.field.child, event.previousIndex, event.currentIndex);
    };
    MultiSelectComponent.decorators = [
        { type: NgModule, args: [{
                    imports: [ReactiveFormsModule, FormsModule],
                    declarations: []
                },] },
        { type: Component, args: [{
                    selector: 'lib-multi-select',
                    template: "<div [formGroup]=\"form\" dndDropzone  (dndDrop)=\"onDropNew($event,field)\" class=\"card-body\">\n  <label class=\"col-md-8 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n  <textarea  rows=\"2\" class=\"form-control\">\n  \n  </textarea>\n  <div class=\"row\" *ngIf=\"openEditChild\" style=\"padding: 20px;\n  border: 1px solid #ccc;margin-top:10px; margin:40px; margin-left: 20%;\n  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);\">\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <mat-label>Input Type</mat-label>\n      <mat-select [(ngModel)]=\"type\" [ngModelOptions]=\"{standalone: true}\">\n        <mat-option value=\"text\">text</mat-option>\n        <mat-option value=\"number\">number</mat-option>\n        <mat-option value=\"radio\">radio</mat-option>\n        <mat-option value=\"date\">date</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\">\n    <mat-form-field>\n      <mat-label>Pages</mat-label>\n      <mat-select [(ngModel)]=\"pageNumber\" [ngModelOptions]=\"{standalone: true}\">\n        <mat-option value=\"page_1\">page 1</mat-option>\n        <mat-option value=\"page_2\">page 2</mat-option>\n        <mat-option value=\"page_3\">page 3</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n      <input type=\"text\" placeholder=\"Min\" matInput [(ngModel)]=\"min\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n      <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-sm-12 form-group\" *ngIf=\"type=='date'\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Choose a min date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Choose a max date\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerMaxDate></mat-datepicker>\n    </mat-form-field>\n\n\n  </div>\n  <div class=\"col-sm-12 form-group\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n    <label for=\"label\" class=\"col-sm-12\">Options</label>\n\n    <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n      <mat-form-field>\n        <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" [ngModelOptions]=\"{standalone: true}\">\n      </mat-form-field>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"filtereddata && filtereddata.length > 0\">\n    <div class=\"col-sm-12\">\n      <label id=\"example-radio-group-label\">Do you want to related the question based on below options ?</label>\n      <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n        [(ngModel)]=\"selectedOption\" [ngModelOptions]=\"{standalone: true}\">\n        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let ele of options\" [value]=\"ele\">\n          {{ ele.label }}\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <mat-label>Select Question to add </mat-label>\n        <select matNativeControl [(ngModel)]=\"currentSelectedQtn\" [ngModelOptions]=\"{standalone: true}\">\n          <option *ngFor=\"let values of filtereddata\" [ngValue]=\"values\"> {{ values.label }} </option>\n        </select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n      <mat-form-field>\n        <mat-label>Select Condition </mat-label>\n        <select matNativeControl [(ngModel)]=\"condition\" [ngModelOptions]=\"{standalone: true}\">\n          <option *ngFor=\"let values of conditionArray\" [ngValue]=\"values.condition\"> {{ values.label }} </option>\n        </select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n      <mat-form-field>\n        <input type=\"tex\" matInput name=\"conditionMatchValue\"\n         placeholder=\"\" [(ngModel)]=\"conditionMatchValue\" [ngModelOptions]=\"{standalone: true}\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\" (click)=\"parentMapping()\">\n        Add\n      </button>\n    </div>\n  </div>\n\n  <ul class=\"col-sm-12\" *ngFor=\"let relate of listOfRelation;let i = index\">\n    <li class=\"col-sm-12\">\n      <span>{{relate.label}} </span><span style=\"\n  margin-left: 30px;\" (click)=\"deleteCondition(relate,i)\">\n        <i class=\"fa fa-trash\"></i></span>\n    </li>\n  </ul>\n\n\n  <div class=\"col-sm-7\">\n    <label id=\"example-radio-group-label\">is Reqired ?</label>\n    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"required\">\n      <mat-radio-button class=\"example-radio-button\" [value]=true>\n        Yes\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" [value]=false>\n        No\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n  <div class=\"col-sm-7\" *ngIf=\"type=='date'\">\n    <label id=\"example-radio-group-label\">is autoCollect</label>\n    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" [(ngModel)]=\"autoCollect\" [ngModelOptions]=\"{standalone: true}\">\n      <mat-radio-button class=\"example-radio-button\" [value]=true>\n        True\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" [value]=false>\n        False\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n\n  <div class=\"col-sm-12\">\n\n    <button mat-flat-button color=\"primary\" style=\"margin-right:10px;\" (click)=\"closeModelChild('save')\">\n      Save\n    </button>\n\n  </div>\n</div>\n<div >\n  <div *ngIf=\"field.child.length > 0\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n  <div *ngFor=\"let obj of field.child let i =index\" cdkDrag>\n  <div style=\"float: right;right: -90px; cursor:pointer; top: 20px;\" class=\"col-sm-2 edit-icon\">\n  <i class=\"fa fa-trash\" (click)=\"deleteElement(obj, i)\"></i>\n  <i class=\"fa fa-copy\" (click)=\"copyElement(obj, i)\"></i>\n  <i class=\"fa fa-edit\" (click)=\"loadFormElement(obj, i)\"></i>\n  </div>\n\n\n  <div class=\"col-md-12\" [ngSwitch]=\"obj.type\" style=\"width:80%;margin-left:20%\">\n\n  <textbox  style =\"padding-left:30px\" *ngSwitchCase=\"'number'\" [field]=\"obj\" [form]=\"form\"></textbox>\n\n  <textbox  style =\"padding-left:30px\" *ngSwitchCase=\"'text'\" [field]=\"obj\" [form]=\"form\"></textbox>\n\n  <date style =\"padding-left:30px\" *ngSwitchCase=\"'date'\" [field]=\"obj\" [form]=\"form\"></date>\n\n  <slider style =\"padding-left:30px\" *ngSwitchCase=\"'slider'\" [field]=\"obj\" [form]=\"form\"></slider>\n\n    <dropdown style =\"padding-left:30px\" *ngSwitchCase=\"'dropdown'\" [field]=\"obj\" [form]=\"form\"></dropdown>\n\n    <checkbox style =\"padding-left:30px\" *ngSwitchCase=\"'checkbox'\" [field]=\"obj\" [form]=\"form\"></checkbox>\n\n   <radio style =\"padding-left:30px\" *ngSwitchCase=\"'radio'\" [field]=\"obj\" [form]=\"form\"></radio>\n\n    <file style =\"padding-left:30px\" *ngSwitchCase=\"'file'\" [field]=\"obj\" [form]=\"form\"></file>\n\n    \n  </div>\n  </div>\n  </div>\n  </div>\n  </div>"
                },] },
    ];
    /** @nocollapse */
    MultiSelectComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: DynamicFormBuilderService }
    ]; };
    MultiSelectComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }],
        sendDataToParent: [{ type: Output }],
        childrenDropEvent: [{ type: Output }],
        copyOrDeleteEvent: [{ type: Output }]
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
    MultiSelectComponent.prototype.copyOrDeleteEvent;
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
    MultiSelectComponent.prototype.allData;
    /** @type {?} */
    MultiSelectComponent.prototype.filtereddata;
    /** @type {?} */
    MultiSelectComponent.prototype.conditionMatchValue;
    /** @type {?} */
    MultiSelectComponent.prototype.selectedOption;
    /** @type {?} */
    MultiSelectComponent.prototype.currentSelectedQtn;
    /** @type {?} */
    MultiSelectComponent.prototype.listOfRelation;
    /** @type {?} */
    MultiSelectComponent.prototype.condition;
    /** @type {?} */
    MultiSelectComponent.prototype.getSelectQuestion;
    /** @type {?} */
    MultiSelectComponent.prototype.conditionArray;
    /** @type {?} */
    MultiSelectComponent.prototype.currentItem;
    /** @type {?} */
    MultiSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    MultiSelectComponent.prototype.dynamicServe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvbXVsdGktc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9FLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTtJQTBSRSw4QkFBbUIsR0FBc0IsRUFDL0IsWUFBdUM7UUFFL0Msd0NBQXdDO1FBQ3hDLGlDQUFpQztRQUpoQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBMkI7UUE3RHhDLFVBQUssR0FBUSxFQUFFLENBQUM7UUFLZixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDL0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU16RCxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQWlCL0IsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFHekIsbUJBQWMsR0FBUTtZQUNwQjtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixTQUFTLEVBQUUsSUFBSTthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixTQUFTLEVBQUUsR0FBRzthQUNmO1lBQ0Q7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d0JBaU8vQixLQUFLO3VCQUNMLEtBQUs7bUNBSUwsTUFBTTtvQ0FDTixNQUFNO29DQUNOLE1BQU07O0lBK1VULDJCQUFDO0NBQUEsQUFwakJELElBb2pCQztTQXhWWSxvQkFBb0I7OztJQUUvQixxQ0FBeUI7O0lBQ3pCLG9DQUFtQjs7SUFJbkIsZ0RBQXdEOztJQUN4RCxpREFBeUQ7O0lBQ3pELGlEQUF5RDs7SUFFekQsK0NBQXFCOztJQUNyQiwyQ0FBaUI7O0lBQ2pCLHdDQUFjOztJQUNkLDJDQUFpQjs7SUFDakIsNkNBQStCOztJQUMvQixtQ0FBUzs7SUFDVCwyQ0FBaUI7O0lBQ2pCLHVDQUFhOztJQUNiLHVDQUFhOztJQUNiLG1DQUFTOztJQUNULG1DQUFTOztJQUNULHFDQUFXOztJQUNYLG9DQUFVOztJQUNWLDJDQUFpQjs7SUFDakIsdUNBQWE7O0lBQ2IsMENBQWdCOztJQUNoQix1Q0FBYTs7SUFDYiw0Q0FBa0I7O0lBQ2xCLG1EQUF5Qjs7SUFDekIsOENBQW9COztJQUNwQixrREFBd0I7O0lBQ3hCLDhDQUF5Qjs7SUFDekIseUNBQWU7O0lBQ2YsaURBQXVCOztJQUN2Qiw4Q0F5QkM7O0lBMk1ELDJDQUFpQjs7SUF6TUwsbUNBQTZCOzs7OztJQUN2Qyw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdNb2R1bGUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW11cbn0pXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW11bHRpLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiBkbmREcm9wem9uZSAgKGRuZERyb3ApPVwib25Ecm9wTmV3KCRldmVudCxmaWVsZClcIiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtOCBmb3JtLWNvbnRyb2wtbGFiZWxcIiBbYXR0ci5mb3JdPVwiZmllbGQubGFiZWxcIj5cbiAgICAgIHt7ZmllbGQubGFiZWx9fVxuICAgIDwvbGFiZWw+XG4gIDx0ZXh0YXJlYSAgcm93cz1cIjJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICBcbiAgPC90ZXh0YXJlYT5cbiAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwib3BlbkVkaXRDaGlsZFwiIHN0eWxlPVwicGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzttYXJnaW4tdG9wOjEwcHg7IG1hcmdpbjo0MHB4OyBtYXJnaW4tbGVmdDogMjAlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcIj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgWyhuZ01vZGVsKV09XCJsYWJlbFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIklucHV0IFBsYWNlIEhvbGRlclwiIFsobmdNb2RlbCldPVwicGxhY2Vob2xkZXJcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJIaW50L0Rlc2NyaXB0aW9uXCIgWyhuZ01vZGVsKV09XCJkZXNjcmlwdGlvblwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+SW5wdXQgVHlwZTwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJ0eXBlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0PC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5kYXRlPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5QYWdlczwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJwYWdlTnVtYmVyXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMVwiPnBhZ2UgMTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzJcIj5wYWdlIDI8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFnZV8zXCI+cGFnZSAzPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWluXCIgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJtaW5cIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm1heFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbKG5nTW9kZWwpXT1cIm1pbkRhdGVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBtaW4gZGF0ZVwiPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJNYXhEYXRlXCIgWyhuZ01vZGVsKV09XCJtYXhEYXRlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWF4IGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyTWF4RGF0ZVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXJNYXhEYXRlPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdyYWRpbycgfHwgdHlwZT09J2NoZWNrYm94JyB8fCB0eXBlPT0nZHJvcGRvd24nXCI+XG4gICAgPGxhYmVsIGZvcj1cImxhYmVsXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5PcHRpb25zPC9sYWJlbD5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1heFwiIG1hdElucHV0IFsobmdNb2RlbCldPVwibWF4XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiZmlsdGVyZWRkYXRhICYmIGZpbHRlcmVkZGF0YS5sZW5ndGggPiAwXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPkRvIHlvdSB3YW50IHRvIHJlbGF0ZWQgdGhlIHF1ZXN0aW9uIGJhc2VkIG9uIGJlbG93IG9wdGlvbnMgPzwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkT3B0aW9uXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgKm5nRm9yPVwibGV0IGVsZSBvZiBvcHRpb25zXCIgW3ZhbHVlXT1cImVsZVwiPlxuICAgICAgICAgIHt7IGVsZS5sYWJlbCB9fVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+U2VsZWN0IFF1ZXN0aW9uIHRvIGFkZCA8L21hdC1sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwiY3VycmVudFNlbGVjdGVkUXRuXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHZhbHVlcyBvZiBmaWx0ZXJlZGRhdGFcIiBbbmdWYWx1ZV09XCJ2YWx1ZXNcIj4ge3sgdmFsdWVzLmxhYmVsIH19IDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSd0ZXh0JyB8fCB0eXBlPT0nZGF0ZScgfHwgdHlwZT09J251bWJlcidcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5TZWxlY3QgQ29uZGl0aW9uIDwvbWF0LWxhYmVsPlxuICAgICAgICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgWyhuZ01vZGVsKV09XCJjb25kaXRpb25cIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsdWVzIG9mIGNvbmRpdGlvbkFycmF5XCIgW25nVmFsdWVdPVwidmFsdWVzLmNvbmRpdGlvblwiPiB7eyB2YWx1ZXMubGFiZWwgfX0gPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3RleHQnIHx8IHR5cGU9PSdkYXRlJyB8fCB0eXBlPT0nbnVtYmVyJ1wiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleFwiIG1hdElucHV0IG5hbWU9XCJjb25kaXRpb25NYXRjaFZhbHVlXCJcbiAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCIgWyhuZ01vZGVsKV09XCJjb25kaXRpb25NYXRjaFZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiIChjbGljayk9XCJwYXJlbnRNYXBwaW5nKClcIj5cbiAgICAgICAgQWRkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPHVsIGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nRm9yPVwibGV0IHJlbGF0ZSBvZiBsaXN0T2ZSZWxhdGlvbjtsZXQgaSA9IGluZGV4XCI+XG4gICAgPGxpIGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICA8c3Bhbj57e3JlbGF0ZS5sYWJlbH19IDwvc3Bhbj48c3BhbiBzdHlsZT1cIlxuICBtYXJnaW4tbGVmdDogMzBweDtcIiAoY2xpY2spPVwiZGVsZXRlQ29uZGl0aW9uKHJlbGF0ZSxpKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj5cbiAgICA8L2xpPlxuICA8L3VsPlxuXG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XG4gICAgPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIFJlcWlyZWQgPzwvbGFiZWw+XG4gICAgPG1hdC1yYWRpby1ncm91cCBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCIgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIFsobmdNb2RlbCldPVwicmVxdWlyZWRcIj5cbiAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPXRydWU+XG4gICAgICAgIFllc1xuICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgICAgIE5vXG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiICpuZ0lmPVwidHlwZT09J2RhdGUnXCI+XG4gICAgPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIGF1dG9Db2xsZWN0PC9sYWJlbD5cbiAgICA8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbKG5nTW9kZWwpXT1cImF1dG9Db2xsZWN0XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICAgICAgVHJ1ZVxuICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgICAgIEZhbHNlXG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gIDwvZGl2PlxuXG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuXG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MTBweDtcIiAoY2xpY2spPVwiY2xvc2VNb2RlbENoaWxkKCdzYXZlJylcIj5cbiAgICAgIFNhdmVcbiAgICA8L2J1dHRvbj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiA+XG4gIDxkaXYgKm5nSWY9XCJmaWVsZC5jaGlsZC5sZW5ndGggPiAwXCIgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cblxuICA8ZGl2ICpuZ0Zvcj1cImxldCBvYmogb2YgZmllbGQuY2hpbGQgbGV0IGkgPWluZGV4XCIgY2RrRHJhZz5cbiAgPGRpdiBzdHlsZT1cImZsb2F0OiByaWdodDtyaWdodDogLTkwcHg7IGN1cnNvcjpwb2ludGVyOyB0b3A6IDIwcHg7XCIgY2xhc3M9XCJjb2wtc20tMiBlZGl0LWljb25cIj5cbiAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiIChjbGljayk9XCJkZWxldGVFbGVtZW50KG9iaiwgaSlcIj48L2k+XG4gIDxpIGNsYXNzPVwiZmEgZmEtY29weVwiIChjbGljayk9XCJjb3B5RWxlbWVudChvYmosIGkpXCI+PC9pPlxuICA8aSBjbGFzcz1cImZhIGZhLWVkaXRcIiAoY2xpY2spPVwibG9hZEZvcm1FbGVtZW50KG9iaiwgaSlcIj48L2k+XG4gIDwvZGl2PlxuXG5cbiAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiIFtuZ1N3aXRjaF09XCJvYmoudHlwZVwiIHN0eWxlPVwid2lkdGg6ODAlO21hcmdpbi1sZWZ0OjIwJVwiPlxuXG4gIDx0ZXh0Ym94ICBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuXG4gIDx0ZXh0Ym94ICBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cblxuICA8ZGF0ZSBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZGF0ZT5cblxuICA8c2xpZGVyIHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidzbGlkZXInXCIgW2ZpZWxkXT1cIm9ialwiIFtmb3JtXT1cImZvcm1cIj48L3NsaWRlcj5cblxuICAgIDxkcm9wZG93biBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCIgW2ZpZWxkXT1cIm9ialwiIFtmb3JtXT1cImZvcm1cIj48L2Ryb3Bkb3duPlxuXG4gICAgPGNoZWNrYm94IHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvY2hlY2tib3g+XG5cbiAgIDxyYWRpbyBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCIgW2ZpZWxkXT1cIm9ialwiIFtmb3JtXT1cImZvcm1cIj48L3JhZGlvPlxuXG4gICAgPGZpbGUgc3R5bGUgPVwicGFkZGluZy1sZWZ0OjMwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ2ZpbGUnXCIgW2ZpZWxkXT1cIm9ialwiIFtmb3JtXT1cImZvcm1cIj48L2ZpbGU+XG5cbiAgICBcbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgZm9ybTogYW55O1xuICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cblxuICBAT3V0cHV0KCkgc2VuZERhdGFUb1BhcmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgY2hpbGRyZW5Ecm9wRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNvcHlPckRlbGV0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgYWN0aXZlTW9kZWxEYXRhOiBhbnk7XG4gIHZhbGlkYXRpb25zOiBhbnk7XG4gIHJlcXVpcmVkOiBhbnk7XG4gIGF1dG9Db2xsZWN0OiBhbnk7XG4gIG9wZW5FZGl0Q2hpbGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2lkOiBhbnk7XG4gIGRlc2NyaXB0aW9uOiBhbnk7XG4gIG1pbkRhdGU6IGFueTtcbiAgbWF4RGF0ZTogYW55O1xuICBtaW46IGFueTtcbiAgbWF4OiBhbnk7XG4gIGxhYmVsOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgcGxhY2Vob2xkZXI6IGFueTtcbiAgb3B0aW9uczogYW55O1xuICBwYWdlTnVtYmVyOiBhbnk7XG4gIGFsbERhdGE6IGFueTtcbiAgZmlsdGVyZWRkYXRhOiBhbnk7XG4gIGNvbmRpdGlvbk1hdGNoVmFsdWU6IGFueTtcbiAgc2VsZWN0ZWRPcHRpb246IGFueTtcbiAgY3VycmVudFNlbGVjdGVkUXRuOiBhbnk7XG4gIGxpc3RPZlJlbGF0aW9uOiBhbnkgPSBbXTtcbiAgY29uZGl0aW9uOiBhbnk7XG4gIGdldFNlbGVjdFF1ZXN0aW9uOiBhbnk7XG4gIGNvbmRpdGlvbkFycmF5OiBhbnkgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiZXF1YWxzXCIsXG4gICAgICBjb25kaXRpb246IFwiPT09XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk5vdCBFcXVhbCBUb1wiLFxuICAgICAgY29uZGl0aW9uOiBcIiE9XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkdyZWF0ZXIgVGhhblwiLFxuICAgICAgY29uZGl0aW9uOiBcIj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiTGVzcyBUaGFuXCIsXG4gICAgICBjb25kaXRpb246IFwiPFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJHcmVhdGVyIFRoYW4gT3IgRXF1YWxcIixcbiAgICAgIGNvbmRpdGlvbjogXCI+PVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJMZXNzIFRoYW4gT3IgRXF1YWxcIixcbiAgICAgIGNvbmRpdGlvbjogXCI8PVwiXG4gICAgfVxuICBdXG5cbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBkeW5hbWljU2VydmU6IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UpIHtcblxuICAgIC8vIHRoaXMuZm9ybS5jb250cm9scyA9IHRoaXMuZmllbGQubmFtZTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZvcm1cIix0aGlzLmZvcm0pO1xuXG4gIH1cbiAgb25Ecm9wTmV3KCRldmVudCwgZmllbGQpIHtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0gTXVsdGlTZWxlY3RDb21wb25lbnQgLVwiLCAkZXZlbnQpO1xuXG4gICAgaWYgKCRldmVudC5kYXRhLnJlc3BvbnNlVHlwZSAmJiAkZXZlbnQuZGF0YS5yZXNwb25zZVR5cGUgIT0gJ21hdHJpeCcpIHtcblxuICAgICAgJGV2ZW50LmRhdGEubXV0aVNlbGVjdCA9IGZpZWxkO1xuICAgICAgdGhpcy5jaGlsZHJlbkRyb3BFdmVudC5lbWl0KCRldmVudC5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJub3QgYWxsb3dlZFwiKTtcbiAgICB9XG4gIH1cblxuXG4gIHBhcmVudE1hcHBpbmcoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25kaXRpb24sIFwiY29uZGl0aW9uXCIsIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLCBcInNlbGVjdGVkT3B0aW9uXCIsIHRoaXMuc2VsZWN0ZWRPcHRpb24pO1xuICAgIGxldCBvYmogPSB7fVxuICAgIC8vIG9wdGlvbjp0aGlzLnNlbGVjdGVkT3B0aW9uLFxuICAgIC8vIHF1ZXN0aW9uOnRoaXMuY3VycmVudFNlbGVjdGVkUXRuXG4gICAgLy8gb2JqWyd2aXNpYmxlSWYnXSA9IFtdO1xuICAgIGxldCBjb25kaU9iaiA9IHtcbiAgICAgIG9wZXJhdG9yOiB0aGlzLmNvbmRpdGlvbixcbiAgICAgIHZhbHVlOiB0aGlzLmNvbmRpdGlvbk1hdGNoVmFsdWUsXG4gICAgICBmaWVsZDogdGhpcy5maWVsZC5maWVsZCxcbiAgICAgIGxhYmVsOiB0aGlzLmZpZWxkLmxhYmVsXG4gICAgICAvLyBwYXJlbnQ6dGhpcy5zZWxlY3RlZE9wdGlvbi5maWVsZFxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbikge1xuICAgIC8vICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4ucGFyZW50Q2hpbGRyZW4ucHVzaChjb25kaU9iaik7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLnBhcmVudENoaWxkcmVuID0gW107XG4gICAgLy8gICB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbi5wdXNoKGNvbmRpT2JqKTtcbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2coJ3RoaXMuY3VycmVudFNlbGVjdGVkUXRuJywgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4pO1xuXG4gICAgY29uc29sZS5sb2coXCJjb25kaU9ialwiLCBjb25kaU9iaik7XG4gICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbiA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcihlbGUgPT4ge1xuICAgICAgaWYgKGVsZS5maWVsZCA9PSB0aGlzLmZpZWxkLmZpZWxkKSB7XG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImdldFNlbGVjdFF1ZXN0aW9uXCIsIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb24pO1xuXG4gICAgbGV0IGlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddICYmIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddLmxlbmd0aCA+IDApIHtcbiAgICAgIGlzQXZhaWxhYmxlID0gdGhpcy5nZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10uZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS52aXNpYmxlSWYuZmllbGQgPT0gdGhpcy5maWVsZC5maWVsZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZ2V0U2VsZWN0UXVlc3Rpb25cIiwgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbik7XG4gICAgbGV0IGFsbERhdGEgPSBbXTtcbiAgICBsZXQgYWRkT2JqID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCkgIT09IC0xKSB7XG4gICAgICAgICAgYWxlcnQoXCJWYWx1ZSBleGlzdHMhXCIpXG5cbiAgICAgICAgICBhZGRPYmogPSBmYWxzZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgYWRkT2JqID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuLnB1c2godGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE9iaiA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbi5wdXNoKHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFkZE9iaikge1xuICAgICAgYWxsRGF0YSA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcihlbGUgPT4ge1xuICAgICAgICBpZiAoZWxlLmZpZWxkID09IHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKSB7XG4gICAgICAgICAgaWYgKGVsZS52aXNpYmxlSWYgJiYgZWxlLnZpc2libGVJZi5sZW5ndGggPiAwICYmIGlzQXZhaWxhYmxlID09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmLnB1c2goY29uZGlPYmopO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmID0gW107XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmLnB1c2goY29uZGlPYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlbGVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImFsbCBkYXRhIGluIHF1ZXN0aW9uXCIsIGFsbERhdGEpO1xuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50KClcbiAgICAgIGlmICghdGhpcy5saXN0T2ZSZWxhdGlvbi5pbmNsdWRlcyhjb25kaU9iaikpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZSZWxhdGlvbi5wdXNoKGNvbmRpT2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZGl0aW9uKSB7XG4gICAgfVxuICAgIC8vICdvcHRpb24nOnRoaXMuc2VsZWN0ZWRPcHRpb24sXG4gICAgLy8gICAgICAgJ3F1ZXN0aW9uJzp0aGlzLmN1cnJlbnRTZWxlY3RlZFF0blxuICAgIC8vIHRoaXMuZmllbGQuY2hpbGRRbnQgPSB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZDtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb25cIiwgdGhpcy5saXN0T2ZSZWxhdGlvbik7XG4gIH1cblxuICBjbG9zZU1vZGVsQ2hpbGQoYWN0aW9uLCBkYXRhID0gXCJcIikge1xuICAgIGlmIChhY3Rpb24gPT0gXCJzYXZlXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VNb2RlbFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UuY2xvc2UoKTtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmZpZWxkID0gdGhpcy5maWVsZC5maWVsZDtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICBsZXQgb2JqID0ge1xuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB2YWxpZGF0aW9uczogdGhpcy52YWxpZGF0aW9ucyxcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIF9pZDogdGhpcy5faWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICAgIG9ialsnbWluRGF0ZSddID0gdGhpcy5taW5EYXRlO1xuICAgICAgICBvYmpbJ21heERhdGUnXSA9IHRoaXMubWF4RGF0ZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgb2JqWydtaW4nXSA9IHRoaXMubWluO1xuICAgICAgICBvYmpbJ21heCddID0gdGhpcy5tYXg7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqXCIsb2JqKTtcblxuXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmZpZWxkLmNoaWxkLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmllbGQgPT09IHRoaXMuY3VycmVudEl0ZW0uZmllbGQpO1xuICAgICAgdGhpcy5maWVsZC5jaGlsZC5zcGxpY2UoaW5kZXgsIDEsIG9iailcblxuICAgICAgLy8gbGV0IG5ld09iaiA9ICB0aGlzLmZpZWxkLmNoaWxkLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIC8vICAgaWYgKGl0ZW0uZmllbGQgPT0gdGhpcy5jdXJyZW50SXRlbS5maWVsZCkge1xuICAgICAgLy8gICAgIC8vIHRoaXMuZmllbGQuY2hpbGRbdGhpcy5jdXJyZW50SXRlbS5wb3NpdGlvbl0gPSBvYmo7XG4gICAgICAvLyAgICAgcmV0dXJuIG9iajtcbiAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICByZXR1cm4gaXRlbTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdhYWFhYWFhYWFhYScsIHRoaXMuZmllbGQpO1xuXG5cblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cblxuICAgICAgLy8gdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG5cblxuICAgICAgLy8gdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICAvLyB0aGlzLmZpZWxkLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAvLyB0aGlzLmZpZWxkLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIC8vIHRoaXMuZmllbGQub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIC8vIHRoaXMuZmllbGQuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgICAvLyBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgLy8gICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgICAvLyAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgIC8vICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG4gICAgICAvLyB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgLy8gICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbiA9IHRoaXMubWluO1xuICAgICAgLy8gICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heCA9IHRoaXMubWF4O1xuICAgICAgLy8gfVxuXG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbGlkYXRpb25zXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWRcIiwgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJzZGRzXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgLy8gdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcblxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkXCIsIHRoaXMuZmllbGQpO1xuICAgICAgdGhpcy5vcGVuRWRpdENoaWxkID0gZmFsc2U7XG5cbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KHRoaXMuYWN0aXZlTW9kZWxEYXRhKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMub3BlbkVkaXRDaGlsZCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKCk7XG4gICAgLy8gIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBoaWRlJztcbiAgfVxuXG4gIGN1cnJlbnRJdGVtOiBhbnk7XG5cbiAgbG9hZEZvcm1FbGVtZW50KGl0ZW0sIGlkKSB7XG4gICAgY29uc29sZS5sb2coXCJpdGVtIC0tLVwiLCBpdGVtLCBcImlkXCIsIGlkKTtcbiAgICB0aGlzLmFjdGl2ZU1vZGVsRGF0YSA9IFwiXCI7XG4gICAgdGhpcy5sYWJlbCA9IGl0ZW0ubGFiZWw7XG4gICAgdGhpcy5jdXJyZW50SXRlbSA9IGl0ZW07XG4gICAgdGhpcy5hbGxEYXRhID0gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKCk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZmllbGQnLCB0aGlzLmZpZWxkKTtcbiAgICBkZWJ1Z2dlclxuXG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddWzBdLmNoaWxkLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkZGF0YSA9IHRoaXMuZmllbGQuY2hpbGQuZmlsdGVyKHQgPT4gdC5maWVsZCAhPT0gaXRlbS5maWVsZCk7XG4gICAgLy8gfVxuXG5cblxuICAgIGNvbnNvbGUubG9nKCdtdWx0aSBzZWxlY3QnLCB0aGlzLmFsbERhdGEpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbHRlcmVkZGF0YScsIHRoaXMuZmlsdGVyZWRkYXRhKVxuICAgIHRoaXMudHlwZSA9IGl0ZW0udHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gaXRlbS5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBpdGVtLm9wdGlvbnM7XG4gICAgdGhpcy5faWQgPSBpdGVtLl9pZDtcbiAgICAvLyB0aGlzLnJlcXVpcmVkID0gaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICBpZiAoaXRlbS50eXBlID09IFwiZGF0ZVwiKSB7XG4gICAgICB0aGlzLm1pbkRhdGUgPSBpdGVtLnZhbGlkYXRpb25zLm1pbkRhdGU7XG4gICAgICB0aGlzLm1heERhdGUgPSBpdGVtLnZhbGlkYXRpb25zLm1heERhdGVcbiAgICAgIHRoaXMuYXV0b0NvbGxlY3QgPSBpdGVtLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0O1xuICAgIH1cbiAgICBlbHNlIGlmIChpdGVtLnR5cGUgPT0gXCJzbGlkZXJcIikge1xuICAgICAgdGhpcy5taW4gPSBpdGVtLnZhbGlkYXRpb25zLm1pbjtcbiAgICAgIHRoaXMubWF4ID0gaXRlbS52YWxpZGF0aW9ucy5tYXg7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5yZXF1aXJlZCA9IHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcIml0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWRcIixcbiAgICAvLyB0aGlzLnJlcXVpcmVkLCBcImxhYmVsXCIsIHRoaXMubGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibGFiZWxcIix0aGlzLmxhYmVsKTtcbiAgICB0aGlzLm9wZW5FZGl0Q2hpbGQgPSB0aGlzLm9wZW5FZGl0Q2hpbGQgPyBmYWxzZSA6IHRydWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1vZGFsQnV0dG9uXCIpLmNsaWNrKCk7XG4gICAgLy8gdGhpcy5vcGVuKHRoaXMubXlNb2RhbCk7XG4gICAgLy8gdGhpcy5teU1vZGFsLnNob3coKTtcbiAgICAvLyB0aGlzLm15TW9kYWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnbW9kYWwgZmFkZSBzaG93JztcbiAgfVxuXG4gIGRlbGV0ZUNvbmRpdGlvbihkYXRhLCB2YWx1ZSkge1xuICAgIC8vIHZhciBpbmRleCA9IHRoaXMubGlzdE9mUmVsYXRpb24uaW5kZXhPZih2YWx1ZSk7XG4gICAgLy8gaWYgKGluZGV4ID4gLTEpIHtcbiAgICB0aGlzLmxpc3RPZlJlbGF0aW9uLnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvblswXS5jaGlsZC5zcGxpY2UodmFsdWUsIDEpO1xuICAgIC8vIH1cblxuICAgIGNvbnNvbGUubG9nKCdhZnRlciBkZWxldGUgZGF0YScsIHRoaXMubGlzdE9mUmVsYXRpb24pO1xuICB9XG5cbiAgZGVsZXRlRWxlbWVudChpdGVtLCBpbmRleCkge1xuICAgIGl0ZW0uYWN0aW9uID0gJ2RlbGV0ZSc7XG4gICAgdGhpcy5maWVsZC5pc0RlbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5maWVsZC5jaGlsZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChpdGVtKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkLCAnaW5kZXgnLCBpbmRleCk7XG4gICAgY29uc29sZS5sb2coJ2FmdGVyIGRlbGV0ZScsIHRoaXMuYWxsRGF0YSk7XG5cbiAgfVxuXG4gIGNvcHlFbGVtZW50KGl0ZW0sIGluZGV4KSB7XG4gICAgLy8gdGhpcy5maWVsZC5wdXNoKGl0ZW0pO1xuICAgIGl0ZW0uYWN0aW9uID0gJ2NvcHknO1xuICAgIGNvbnNvbGUubG9nKFwiY29weSBmaWVsZCAtLS0tLS0tLS0tXCIsIGl0ZW0sICdpbmRleCcsIGluZGV4KTtcbiAgICB0aGlzLmZpZWxkLmNoaWxkLnB1c2goaXRlbSk7XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KGl0ZW0pO1xuXG4gIH1cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5maWVsZC5jaGlsZCwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxuXG59XG4iXX0=