/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import  { } from './dynamic-form-builder.service'
import { Observable } from 'rxjs';
var DynamicFormBuilderComponent = /** @class */ (function () {
    function DynamicFormBuilderComponent(http, _formBuilder, fb) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.fb = fb;
        // @Output() questionList = new EventEmitter();
        this.questionTrigger = new EventEmitter();
        this.fields = [];
        // this.form = new FormGroup({
        //   fields: this.fb.array([]),
        // })
        this.form = new FormGroup({
            fields: new FormControl(JSON.stringify(this.fields))
        });
        this.unsubcribe = this.form.valueChanges.subscribe((/**
         * @param {?} update
         * @return {?}
         */
        function (update) {
            console.log(update);
            // this.fields = JSON.parse(update.fields);
        }));
    }
    /**
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.eventsSubscription = this.events.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.log("calling from parent with data", data);
            if (data) {
                /** @type {?} */
                var dt = data;
                _this.formBuild(dt);
            }
            else {
                /** @type {?} */
                var obj = {
                    action: "all",
                    data: _this.fields
                };
                console.log("to get all", _this.fields);
                _this.questionTrigger.emit(obj);
            }
        }));
        this.formData = [];
        this.jsonData = [
            {
                "responseType": "text",
            }, {
                "responseType": "number",
            }, {
                "responseType": "radio",
            },
            {
                "responseType": "checkbox",
            },
            {
                "responseType": "dropdown"
            }, {
                "responseType": "date"
            }, {
                "responseType": "slider"
            },
            {
                "responseType": "multiselect"
            }
        ];
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.onUpload = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log(e);
    };
    /**
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.getFields = /**
     * @return {?}
     */
    function () {
        return this.fields;
    };
    /**
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.ngDistroy = /**
     * @return {?}
     */
    function () {
        this.unsubcribe();
    };
    /**
     * @param {?} ele
     * @param {?} len
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.getToolObj = /**
     * @param {?} ele
     * @param {?} len
     * @return {?}
     */
    function (ele, len) {
        /** @type {?} */
        var obj = {};
        if (ele == 'text') {
            obj = {
                "position": len,
                "field": len + "question",
                "type": "text",
                "label": len + ". question",
                "placeholder": "Please enter your question here",
                "description": "",
                "validations": {
                    "required": true,
                    "minLenght": "",
                    "maxLength": ""
                }
            };
        }
        else if (ele == 'number') {
            obj = {
                "field": len + "question",
                "type": "number",
                "label": len + ". question",
                "placeholder": "Please enter your question here",
                "description": "",
                "validations": {
                    "required": true,
                    "minLenght": "",
                    "maxLength": ""
                }
            };
        }
        else if (ele == 'radio') {
            obj = {
                field: len + "question",
                type: 'radio',
                name: len + ". question",
                label: len + ". question",
                description: "",
                required: true,
                "validations": {
                    "required": true,
                    "minLenght": "",
                    "maxLength": ""
                },
                options: [
                    { key: 'option1', label: 'Label 1' },
                    { key: 'option2', label: 'Label 1' }
                ]
            };
        }
        else if (ele == "checkbox") {
            obj = {
                field: len + "question",
                type: "checkbox",
                name: len + ". question",
                label: len + ". question",
                description: "",
                required: true,
                "validations": {
                    "required": true,
                    "minLenght": "",
                    "maxLength": ""
                },
                options: [
                    { key: 'option1', label: 'option 1' },
                    { key: 'option2', label: 'option 2' }
                ]
            };
        }
        else if (ele == "dropdown") {
            obj = {
                field: len + "question",
                type: 'dropdown',
                name: len + ". question",
                label: len + ". question",
                value: 'option1',
                description: "",
                required: true,
                "validations": {
                    "required": true,
                    "minLenght": "",
                    "maxLength": ""
                },
                options: [
                    { key: 'option1', label: 'Option 1' },
                    { key: 'option1', label: 'Option 2' }
                ]
            };
        }
        else if (ele == "date") {
            obj = {
                field: len + "question",
                type: 'date',
                name: len + ". question",
                label: len + ". question",
                description: "",
                required: true,
                "validations": {
                    "required": true,
                    "minLenght": "",
                    "maxLength": "",
                    "maxDate": "",
                    "minDate": "",
                },
                options: []
            };
        }
        else if (ele == 'multiselect') {
            if (ele == 'childDroped') {
                /** @type {?} */
                var childdata = {
                    "field": len + "question",
                    "type": ele.type,
                    "label": len + ". question",
                    "child": [],
                    "placeholder": "Please add Child's here",
                    "description": "",
                    "validations": {
                        "required": false,
                        "minLenght": "",
                        "maxLength": ""
                    }
                };
            }
            /** @type {?} */
            var finalchild = [];
            finalchild.push();
            obj = {
                "field": len + "question",
                "type": "multiselect",
                "label": len + ". question",
                "child": [],
                "placeholder": "Please add Child's here",
                "description": "",
                "validations": {
                    "required": false,
                    "minLenght": "",
                    "maxLength": ""
                }
            };
        }
        else if (ele == "slider") {
            obj = {
                field: len + "question",
                type: 'slider',
                name: len + ". question",
                label: len + ". question",
                description: "",
                required: true,
                "validations": {
                    "required": true,
                    "min": "",
                    "max": "",
                    "maxDate": "",
                    "minDate": "",
                },
                options: []
            };
        }
        return obj;
    };
    /**
     * @param {?} ele
     * @param {?=} action
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.onDrop = /**
     * @param {?} ele
     * @param {?=} action
     * @return {?}
     */
    function (ele, action) {
        var e_1, _a, e_2, _b;
        if (action === void 0) { action = ""; }
        console.log("drop ele", ele);
        if (ele.data) {
            ele = ele.data.responseType;
        }
        /** @type {?} */
        var len = this.fields.length + 1;
        /** @type {?} */
        var obj = {};
        if (action == "copy") {
            /** @type {?} */
            var copyObj = {
                "position": len,
                "field": len + "question",
                "type": ele.type,
                "label": ele.label,
                "placeholder": ele.placeholder,
                "validations": ele.validations,
                "options": ele.options,
                "description": ele.description
            };
            obj = copyObj;
        }
        else {
            obj = this.getToolObj(ele, len);
        }
        /** @type {?} */
        var elem = this.fields;
        /** @type {?} */
        var trnasformData = {
            action: 'add',
            data: obj
        }
        // console.log("transf", trnasformData);
        ;
        // console.log("transf", trnasformData);
        this.questionTrigger.emit(trnasformData);
        this.formData.push(obj);
        /** @type {?} */
        var fieldsCtrls = {};
        this.form = new FormGroup(fieldsCtrls);
        try {
            // console.log("------", obj);
            for (var _c = tslib_1.__values(this.formData), _d = _c.next(); !_d.done; _d = _c.next()) {
                var f = _d.value;
                if (f['type'] != 'checkbox') {
                    console.log("f.type", f['field']);
                    fieldsCtrls[f['field']] = new FormControl(f['value'] || '');
                }
                else {
                    /** @type {?} */
                    var opts = {};
                    try {
                        for (var _e = tslib_1.__values(f['options']), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var opt = _f.value;
                            opts[opt.key] = new FormControl(opt.label);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    fieldsCtrls[f['field']] = new FormGroup(opts);
                }
                // const creds = this.form.controls.fields as FormArray;
                // creds.push(this.fb.group(fieldsCtrls));
                // console.log("fieldsCtrls",fieldsCtrls);
                // this.formData =  this.fields;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.form = new FormGroup(fieldsCtrls);
        // this.fields
        // this.formBuild();
        this.fields.push(obj);
        console.log("fields controls", this.form);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.formBuild = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var e_3, _a, e_4, _b;
        /** @type {?} */
        var formData = [];
        this.fields = [];
        this.fields.slice(this.fields.length, 0);
        formData = data;
        /** @type {?} */
        var fieldsCtrls = {};
        this.form = new FormGroup(fieldsCtrls);
        try {
            for (var formData_1 = tslib_1.__values(formData), formData_1_1 = formData_1.next(); !formData_1_1.done; formData_1_1 = formData_1.next()) {
                var f = formData_1_1.value;
                if (f['type'] != 'checkbox') {
                    console.log("f.type", f['field']);
                    fieldsCtrls[f['field']] = new FormControl(f['value'] || '');
                }
                else {
                    /** @type {?} */
                    var opts = {};
                    try {
                        for (var _c = tslib_1.__values(f['options']), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var opt = _d.value;
                            opts[opt.key] = new FormControl(opt.label);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    fieldsCtrls[f['field']] = new FormGroup(opts);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (formData_1_1 && !formData_1_1.done && (_a = formData_1.return)) _a.call(formData_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.form = new FormGroup(fieldsCtrls);
        this.fields = formData;
        /** @type {?} */
        var obj = {
            action: "all",
            data: formData
        };
        console.log("this.fields-------", this.fields);
        this.questionTrigger.emit(obj);
        // this.fields = data;
        // let fieldsCtrls = {};
        // console.log(" this.fields", data);
        // for (let f of data) {
        //   if (f.type != 'checkbox') {
        //     fieldsCtrls[f.name] = new FormControl(f.value || '')
        //   } else {
        //     let opts = {};
        //     for (let opt of f.options) {
        //       opts[opt.key] = new FormControl(opt.value);
        //     }
        //     fieldsCtrls[f.name] = new FormGroup(opts)
        //   }
        // }
        // this.form = new FormGroup(fieldsCtrls);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.onSubmit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        console.log("value", this.fields);
        // this.questionList.emit(this.fields);
        /** @type {?} */
        var obj = {
            action: "all",
            data: this.fields
        };
        this.questionTrigger.emit(obj);
    };
    // (event) {
    //   console.log('Element was dragged', event);
    // }
    // (event) {
    //   console.log('Element was dragged', event);
    // }
    /**
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.ngOnDestroy = 
    // (event) {
    //   console.log('Element was dragged', event);
    // }
    /**
     * @return {?}
     */
    function () {
        this.eventsSubscription.unsubscribe();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.onFieldUpdate = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        console.log("eventData sssssss------", $event.data);
        /** @type {?} */
        var eventObj = $event;
        /** @type {?} */
        var trnasformData = {};
        if ($event.action == "copy") {
            this.onDrop($event.data, "copy");
        }
        else if ($event.action == "delete") {
            trnasformData = {
                action: 'delete',
                data: $event
            };
        }
        else if ($event.action == "childDroped") {
            /** @type {?} */
            var obj_1 = this.getToolObj($event.data.responseType, this.fields.length + 1);
            console.log('this.fields', this.fields);
            /** @type {?} */
            var final = this.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.field === eventObj.data.mutiSelect.field) {
                    item.child.push(obj_1);
                    return item;
                }
                else {
                    return item;
                }
            }));
            // final.push(obj);
            // this.fields
            console.log('final result', final);
            console.log("main obj", obj_1);
        }
        else {
            trnasformData = {
                action: 'update',
                data: JSON.parse($event)
            };
        }
        this.questionTrigger.emit(trnasformData);
    };
    DynamicFormBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-dynamic-form-builder',
                    template: "<style>\n  p {\n      font-family: Lato;\n    }\n    .noPadding {\n        padding: 0px;\n    }\n    .margin-5 {\n        margin-top:5%;\n    }\n    .element {\n      border: 1px solid #ccc;\n      padding: 10px;\n      margin-bottom: 10px;\n      color: #333;\n      text-align: left;\n      text-transform: capitalize;\n      box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);\n  }\n    .form-group {\n        margin-bottom: 0.5rem;\n        border: 1px solid #ece7e7;\n    }\n    .cursor-pntr {\n        cursor: pointer;\n    }\n    \n    \n  </style>\n  <div class=\"col-sm-12\">\n      <div class=\"col-sm-4 noPadding\">\n        <div class=\"card\">\n          <div class=\"card-header\">ToolBox</div>\n          <div class=\"card-body\">\n            <!-- <dynamic-form-builder [fields]=\"getFields()\"></dynamic-form-builder> -->\n      \n            <div *ngFor=\"let item of jsonData\">\n              <div [dndDraggable]=\"item\"  class=\"col-sm-12 element\"  >{{ item.responseType }}</div>\n              <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement(item.responseType)\" >Number</div> -->\n            </div>\n            <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement('input')\" >Input</div>\n            <div class=\"col-sm-12 element\" (click)=\"addFormElement('number')\" >Number</div> -->\n          </div>\n        </div>\n      </div>\n\n    <div class=\"col-sm-8 noPadding\">\n    <mat-tab-group>\n    <mat-tab label=\"Page 1\"> \n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"Page 2\"> \n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n     </mat-tab>\n    <mat-tab label=\"Page 3\">\n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n     </mat-tab>\n    </mat-tab-group>\n      </div>\n\n\n      </div>\n      <div class=\"col-sm-12\">\n      </div>",
                    styleUrls: []
                },] },
    ];
    /** @nocollapse */
    DynamicFormBuilderComponent.ctorParameters = function () { return [
        { type: HttpClient },
        { type: FormBuilder },
        { type: FormBuilder }
    ]; };
    DynamicFormBuilderComponent.propDecorators = {
        events: [{ type: Input }],
        questionTrigger: [{ type: Output }]
    };
    return DynamicFormBuilderComponent;
}());
export { DynamicFormBuilderComponent };
if (false) {
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.form;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.unsubcribe;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.jsonData;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.formData;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.pageNumber;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.events;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.questionTrigger;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.eventsSubscription;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    DynamicFormBuilderComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    DynamicFormBuilderComponent.prototype._formBuilder;
    /**
     * @type {?}
     * @private
     */
    DynamicFormBuilderComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLHNCQUFzQixDQUFDOztBQU0vRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBcUdFLHFDQUFvQixJQUFnQixFQUFVLFlBQXlCLEVBQVUsRUFBZTtRQUE1RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhOztRQUx0RixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUd4Qiw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9CLEtBQUs7UUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQU07WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQiwyQ0FBMkM7UUFDN0MsQ0FBQyxFQUFD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SyxDQUFDLE1BQU0sQ0FBQzthQUN6QixDQUFBO1NBQ0Y7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkF0aEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsdTNGQWlGQztvQkFDWCxTQUFTLEVBQUUsRUFBRTtpQkFDZDs7OztnQkE3RlEsVUFBVTtnQkFEYyxXQUFXO2dCQUFYLFdBQVc7Ozt5QkF1R3pDLEtBQUs7a0NBRUwsTUFBTTs7SUF1YlQsa0NBQUM7Q0FBQSxBQXZoQkQsSUF1aEJDO1NBamNZLDJCQUEyQjs7O0lBQ3RDLDJDQUF1Qjs7SUFDdkIsaURBQWdCOztJQUNoQiwrQ0FBYzs7SUFDZCwrQ0FBYzs7SUFDZCxpREFBZ0I7O0lBR2hCLDZDQUFpQzs7SUFFakMsc0RBQStDOztJQUMvQyx5REFBdUI7O0lBRXZCLDZDQUEwQjs7Ozs7SUFFZCwyQ0FBd0I7Ozs7O0lBQUUsbURBQWlDOzs7OztJQUFFLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRG5kRHJvcEV2ZW50IH0gZnJvbSAnbmd4LWRyYWctZHJvcCdcblxuLy8gaW1wb3J0ICB7IH0gZnJvbSAnLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1keW5hbWljLWZvcm0tYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgPHN0eWxlPlxuICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIH1cbiAgICAubm9QYWRkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAubWFyZ2luLTUge1xuICAgICAgICBtYXJnaW4tdG9wOjUlO1xuICAgIH1cbiAgICAuZWxlbWVudCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO1xuICB9XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2U3ZTc7XG4gICAgfVxuICAgIC5jdXJzb3ItcG50ciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgXG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBub1BhZGRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5Ub29sQm94PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPCEtLSA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+IC0tPlxuICAgICAgXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGpzb25EYXRhXCI+XG4gICAgICAgICAgICAgIDxkaXYgW2RuZERyYWdnYWJsZV09XCJpdGVtXCIgIGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAgPnt7IGl0ZW0ucmVzcG9uc2VUeXBlIH19PC9kaXY+XG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KGl0ZW0ucmVzcG9uc2VUeXBlKVwiID5OdW1iZXI8L2Rpdj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KCdpbnB1dCcpXCIgPklucHV0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAoY2xpY2spPVwiYWRkRm9ybUVsZW1lbnQoJ251bWJlcicpXCIgPk51bWJlcjwvZGl2PiAtLT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOCBub1BhZGRpbmdcIj5cbiAgICA8bWF0LXRhYi1ncm91cD5cbiAgICA8bWF0LXRhYiBsYWJlbD1cIlBhZ2UgMVwiPiBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgZG5kRHJvcHpvbmUgY2xhc3M9XCJjYXJkLWJvZHlcIiAoZG5kRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWF0LXRhYj5cbiAgICA8bWF0LXRhYiBsYWJlbD1cIlBhZ2UgMlwiPiBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgZG5kRHJvcHpvbmUgY2xhc3M9XCJjYXJkLWJvZHlcIiAoZG5kRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICA8L21hdC10YWI+XG4gICAgPG1hdC10YWIgbGFiZWw9XCJQYWdlIDNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgZG5kRHJvcHpvbmUgY2xhc3M9XCJjYXJkLWJvZHlcIiAoZG5kRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICA8L21hdC10YWI+XG4gICAgPC9tYXQtdGFiLWdyb3VwPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICA8L2Rpdj5gLFxuICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG4gIHVuc3ViY3JpYmU6IGFueTtcbiAganNvbkRhdGE6IGFueTtcbiAgZm9ybURhdGE6IGFueTtcbiAgcGFnZU51bWJlcjogYW55O1xuXG4gIC8vIEBJbnB1dCgpIGRhdGE7XG4gIEBJbnB1dCgpIGV2ZW50czogT2JzZXJ2YWJsZTxhbnk+O1xuICAvLyBAT3V0cHV0KCkgcXVlc3Rpb25MaXN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcXVlc3Rpb25UcmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBldmVudHNTdWJzY3JpcHRpb246IGFueVxuXG4gIHB1YmxpYyBmaWVsZHM6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgLy8gdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgLy8gICBmaWVsZHM6IHRoaXMuZmIuYXJyYXkoW10pLFxuICAgIC8vIH0pXG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBmaWVsZHM6IG5ldyBGb3JtQ29udHJvbChKU09OLnN0cmluZ2lmeSh0aGlzLmZpZWxkcykpXG4gICAgfSlcblxuICAgIHRoaXMudW5zdWJjcmliZSA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZSk7XG4gICAgICAvLyB0aGlzLmZpZWxkcyA9IEpTT04ucGFyc2UodXBkYXRlLmZpZWxkcyk7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmV2ZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRzLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGluZyBmcm9tIHBhcmVudCB3aXRoIGRhdGFcIiwgZGF0YSk7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBsZXQgZHQgPSBkYXRhO1xuICAgICAgICB0aGlzLmZvcm1CdWlsZChkdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgIGFjdGlvbjogXCJhbGxcIixcbiAgICAgICAgICBkYXRhOiB0aGlzLmZpZWxkc1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG8gZ2V0IGFsbFwiLCB0aGlzLmZpZWxkcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQob2JqKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm9ybURhdGEgPSBbXTtcbiAgICB0aGlzLmpzb25EYXRhID0gW1xuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInRleHRcIixcblxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInJhZGlvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRyb3Bkb3duXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJkYXRlXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJzbGlkZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJtdWx0aXNlbGVjdFwiXG4gICAgICB9XG4gICAgXVxuICB9XG4gIG9uVXBsb2FkKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuXG4gIGdldEZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHM7XG4gIH1cblxuICBuZ0Rpc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YmNyaWJlKCk7XG4gIH1cblxuXG4gIGdldFRvb2xPYmooZWxlLCBsZW4pIHtcblxuICAgIGxldCBvYmogPSB7XG5cbiAgICB9XG4gICAgaWYgKGVsZSA9PSAndGV4dCcpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgZW50ZXIgeW91ciBxdWVzdGlvbiBoZXJlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gJ251bWJlcicpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgICBcImxhYmVsXCI6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGVudGVyIHlvdXIgcXVlc3Rpb24gaGVyZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09ICdyYWRpbycpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ0xhYmVsIDEnIH0sXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24yJywgbGFiZWw6ICdMYWJlbCAxJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnb3B0aW9uIDEnIH0sXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24yJywgbGFiZWw6ICdvcHRpb24gMicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gXCJkcm9wZG93blwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdkcm9wZG93bicsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIHZhbHVlOiAnb3B0aW9uMScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdPcHRpb24gMScgfSxcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ09wdGlvbiAyJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlID09IFwiZGF0ZVwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4RGF0ZVwiOiBcIlwiLFxuICAgICAgICAgIFwibWluRGF0ZVwiOiBcIlwiLFxuXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcblxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gJ211bHRpc2VsZWN0Jykge1xuICAgICAgaWYgKGVsZSA9PSAnY2hpbGREcm9wZWQnKSB7XG4gICAgICAgIGxldCBjaGlsZGRhdGEgPSB7XG4gICAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IGVsZS50eXBlLFxuICAgICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJjaGlsZFwiOiBbXSxcbiAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGFkZCBDaGlsZCdzIGhlcmVcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmaW5hbGNoaWxkID0gW107XG5cbiAgICAgIGZpbmFsY2hpbGQucHVzaCgpXG5cblxuICAgICAgb2JqID0ge1xuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwibXVsdGlzZWxlY3RcIixcbiAgICAgICAgXCJsYWJlbFwiOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJjaGlsZFwiOiBbXSxcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBhZGQgQ2hpbGQncyBoZXJlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09IFwic2xpZGVyXCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluXCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhcIjogXCJcIixcbiAgICAgICAgICBcIm1heERhdGVcIjogXCJcIixcbiAgICAgICAgICBcIm1pbkRhdGVcIjogXCJcIixcblxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG5cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBvbkRyb3AoZWxlLCBhY3Rpb24gPSBcIlwiKSB7XG4gICAgY29uc29sZS5sb2coXCJkcm9wIGVsZVwiLCBlbGUpO1xuICAgIGlmIChlbGUuZGF0YSkge1xuICAgICAgZWxlID0gZWxlLmRhdGEucmVzcG9uc2VUeXBlXG4gICAgfVxuICAgIGxldCBsZW4gPSB0aGlzLmZpZWxkcy5sZW5ndGggKyAxO1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAoYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICBsZXQgY29weU9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogZWxlLnR5cGUsXG4gICAgICAgIFwibGFiZWxcIjogZWxlLmxhYmVsLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IGVsZS5wbGFjZWhvbGRlcixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBlbGUudmFsaWRhdGlvbnMsXG4gICAgICAgIFwib3B0aW9uc1wiOiBlbGUub3B0aW9ucyxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBlbGUuZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICAgIG9iaiA9IGNvcHlPYmo7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgIG9iaiA9IHRoaXMuZ2V0VG9vbE9iaihlbGUsIGxlbik7XG5cblxuXG4gICAgfVxuXG5cbiAgICBsZXQgZWxlbSA9IHRoaXMuZmllbGRzO1xuICAgIGxldCB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgYWN0aW9uOiAnYWRkJyxcbiAgICAgIGRhdGE6IG9ialxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zZlwiLCB0cm5hc2Zvcm1EYXRhKTtcbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuXG4gICAgdGhpcy5mb3JtRGF0YS5wdXNoKG9iaik7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLVwiLCBvYmopO1xuICAgIGZvciAobGV0IGYgb2YgdGhpcy5mb3JtRGF0YSkge1xuXG5cbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGZbJ2ZpZWxkJ10pO1xuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBsZXQgb3B0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG5cbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IGNyZWRzID0gdGhpcy5mb3JtLmNvbnRyb2xzLmZpZWxkcyBhcyBGb3JtQXJyYXk7XG4gICAgICAvLyBjcmVkcy5wdXNoKHRoaXMuZmIuZ3JvdXAoZmllbGRzQ3RybHMpKTtcblxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZpZWxkc0N0cmxzXCIsZmllbGRzQ3RybHMpO1xuXG4gICAgICAvLyB0aGlzLmZvcm1EYXRhID0gIHRoaXMuZmllbGRzO1xuXG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIC8vIHRoaXMuZmllbGRzXG4gICAgLy8gdGhpcy5mb3JtQnVpbGQoKTtcbiAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZHMgY29udHJvbHNcIiwgdGhpcy5mb3JtKTtcblxuICB9XG5cblxuICBmb3JtQnVpbGQoZGF0YSkge1xuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xuICAgIHRoaXMuZmllbGRzID0gW107XG5cbiAgICB0aGlzLmZpZWxkcy5zbGljZSh0aGlzLmZpZWxkcy5sZW5ndGgsIDApO1xuICAgIGZvcm1EYXRhID0gZGF0YTtcbiAgICBsZXQgZmllbGRzQ3RybHMgPSB7fTtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICBmb3IgKGxldCBmIG9mIGZvcm1EYXRhKSB7XG4gICAgICBpZiAoZlsndHlwZSddICE9ICdjaGVja2JveCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmLnR5cGVcIiwgZlsnZmllbGQnXSk7XG4gICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Db250cm9sKGZbJ3ZhbHVlJ10gfHwgJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgb3B0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG4gICAgICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQubGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcblxuICAgIHRoaXMuZmllbGRzID0gZm9ybURhdGE7XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGFjdGlvbjogXCJhbGxcIixcbiAgICAgIGRhdGE6IGZvcm1EYXRhXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkcy0tLS0tLS1cIiwgdGhpcy5maWVsZHMpO1xuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQob2JqKTtcblxuXG4gICAgLy8gdGhpcy5maWVsZHMgPSBkYXRhO1xuXG4gICAgLy8gbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkc1wiLCBkYXRhKTtcbiAgICAvLyBmb3IgKGxldCBmIG9mIGRhdGEpIHtcblxuXG4gICAgLy8gICBpZiAoZi50eXBlICE9ICdjaGVja2JveCcpIHtcblxuICAgIC8vICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Db250cm9sKGYudmFsdWUgfHwgJycpXG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBsZXQgb3B0cyA9IHt9O1xuICAgIC8vICAgICBmb3IgKGxldCBvcHQgb2YgZi5vcHRpb25zKSB7XG5cbiAgICAvLyAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC52YWx1ZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZmllbGRzQ3RybHNbZi5uYW1lXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gIH1cblxuICBvblN1Ym1pdCh2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKFwidmFsdWVcIiwgdGhpcy5maWVsZHMpO1xuXG4gICAgLy8gdGhpcy5xdWVzdGlvbkxpc3QuZW1pdCh0aGlzLmZpZWxkcyk7XG5cbiAgICBsZXQgb2JqID0ge1xuICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgZGF0YTogdGhpcy5maWVsZHNcbiAgICB9XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuICB9XG5cblxuICAvLyAoZXZlbnQpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnRWxlbWVudCB3YXMgZHJhZ2dlZCcsIGV2ZW50KTtcbiAgLy8gfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgfVxuICBvbkZpZWxkVXBkYXRlKCRldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiZXZlbnREYXRhIHNzc3Nzc3MtLS0tLS1cIiwgJGV2ZW50LmRhdGEpO1xuXG4gICAgbGV0IGV2ZW50T2JqID0gJGV2ZW50XG4gICAgbGV0IHRybmFzZm9ybURhdGEgPSB7fTtcbiAgICBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImNvcHlcIikge1xuICAgICAgdGhpcy5vbkRyb3AoJGV2ZW50LmRhdGEsIFwiY29weVwiKTtcbiAgICB9IGVsc2UgaWYgKCRldmVudC5hY3Rpb24gPT0gXCJkZWxldGVcIikge1xuICAgICAgdHJuYXNmb3JtRGF0YSA9IHtcbiAgICAgICAgYWN0aW9uOiAnZGVsZXRlJyxcbiAgICAgICAgZGF0YTogJGV2ZW50XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgkZXZlbnQuYWN0aW9uID09IFwiY2hpbGREcm9wZWRcIikge1xuICAgICAgbGV0IG9iaiA9IHRoaXMuZ2V0VG9vbE9iaigkZXZlbnQuZGF0YS5yZXNwb25zZVR5cGUsIHRoaXMuZmllbGRzLmxlbmd0aCArIDEpO1xuXG4gICAgICBjb25zb2xlLmxvZygndGhpcy5maWVsZHMnLCB0aGlzLmZpZWxkcyk7XG5cbiAgICAgIGNvbnN0IGZpbmFsID0gdGhpcy5maWVsZHMuZmlsdGVyKFxuICAgICAgICBpdGVtID0+IHtcbiAgICAgICAgICBpZihpdGVtLmZpZWxkID09PSBldmVudE9iai5kYXRhLm11dGlTZWxlY3QuZmllbGQpe1xuICAgICAgICAgICAgaXRlbS5jaGlsZC5wdXNoKG9iaik7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZmluYWwucHVzaChvYmopO1xuXG5cbiAgICAgICAgLy8gdGhpcy5maWVsZHNcblxuICAgICAgY29uc29sZS5sb2coJ2ZpbmFsIHJlc3VsdCcsIGZpbmFsKTtcblxuICAgICAgY29uc29sZS5sb2coXCJtYWluIG9ialwiLCBvYmopO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRybmFzZm9ybURhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIGRhdGE6IEpTT04ucGFyc2UoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuICB9XG59XG4iXX0=