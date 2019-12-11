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
        // console.log("eventData ------", $event);
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
                    template: "<style>\n  p {\n      font-family: Lato;\n    }\n    .noPadding {\n        padding: 0px;\n    }\n    .margin-5 {\n        margin-top:5%;\n    }\n    .element {\n      border: 1px solid #ccc;\n      padding: 10px;\n      margin-bottom: 10px;\n      color: #333;\n      text-align: left;\n      text-transform: capitalize;\n      box-shadow: 0 0px 0px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23);\n  }\n    .form-group {\n        margin-bottom: 0.5rem;\n        border: 1px solid #ece7e7;\n    }\n    .cursor-pntr {\n        cursor: pointer;\n    }\n    \n    \n  </style>\n  <div class=\"col-sm-12\">\n      <div class=\"col-sm-4 noPadding\">\n        <div class=\"card\">\n          <div class=\"card-header\">ToolBox</div>\n          <div class=\"card-body\">\n            <!-- <dynamic-form-builder [fields]=\"getFields()\"></dynamic-form-builder> -->\n      \n            <div *ngFor=\"let item of jsonData\">\n              <div [dndDraggable]=\"item\"  class=\"col-sm-12 element\"  >{{ item.responseType }}</div>\n              <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement(item.responseType)\" >Number</div> -->\n            </div>\n            <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement('input')\" >Input</div>\n            <div class=\"col-sm-12 element\" (click)=\"addFormElement('number')\" >Number</div> -->\n          </div>\n        </div>\n      </div>\n\n    <div class=\"col-sm-8 noPadding\">\n    <mat-tab-group>\n    <mat-tab label=\"Page 1\"> \n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"Page 2\"> \n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n     </mat-tab>\n    <mat-tab label=\"Page 3\">\n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n     </mat-tab>\n    </mat-tab-group>\n      </div>\n\n\n      </div>\n      <div class=\"col-sm-12\">\n      </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLHNCQUFzQixDQUFDOztBQU0vRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBcUdFLHFDQUFvQixJQUFnQixFQUFVLFlBQXlCLEVBQVUsRUFBZTtRQUE1RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhOztRQUx0RixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUd4Qiw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9CLEtBQUs7UUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQU07WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQiwyQ0FBMkM7UUFDN0MsQ0FBQyxFQUFD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QUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEM7YUFDQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFFO1lBQzdCLGFBQWEsR0FBRztnQkFDZCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFBO1NBQ0Y7YUFBTTtZQUNMLGFBQWEsR0FBRztnQkFDZCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3pCLENBQUE7U0FDRjtRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQTVjRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLDY0RkFpRkM7b0JBQ1gsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7Ozs7Z0JBN0ZRLFVBQVU7Z0JBRGMsV0FBVztnQkFBWCxXQUFXOzs7eUJBdUd6QyxLQUFLO2tDQUVMLE1BQU07O0lBNldULGtDQUFDO0NBQUEsQUE3Y0QsSUE2Y0M7U0F2WFksMkJBQTJCOzs7SUFDdEMsMkNBQXVCOztJQUN2QixpREFBZ0I7O0lBQ2hCLCtDQUFjOztJQUNkLCtDQUFjOztJQUNkLGlEQUFnQjs7SUFHaEIsNkNBQWlDOztJQUVqQyxzREFBK0M7O0lBQy9DLHlEQUF1Qjs7SUFFdkIsNkNBQTBCOzs7OztJQUVkLDJDQUF3Qjs7Ozs7SUFBRSxtREFBaUM7Ozs7O0lBQUUseUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEbmREcm9wRXZlbnQgfSBmcm9tICduZ3gtZHJhZy1kcm9wJ1xuXG4vLyBpbXBvcnQgIHsgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWR5bmFtaWMtZm9ybS1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGA8c3R5bGU+XG4gIHAge1xuICAgICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgfVxuICAgIC5ub1BhZGRpbmcge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5tYXJnaW4tNSB7XG4gICAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgfVxuICAgIC5lbGVtZW50IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgYm94LXNoYWRvdzogMCAwcHggMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMjMpO1xuICB9XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2U3ZTc7XG4gICAgfVxuICAgIC5jdXJzb3ItcG50ciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgXG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBub1BhZGRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5Ub29sQm94PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPCEtLSA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+IC0tPlxuICAgICAgXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGpzb25EYXRhXCI+XG4gICAgICAgICAgICAgIDxkaXYgW2RuZERyYWdnYWJsZV09XCJpdGVtXCIgIGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAgPnt7IGl0ZW0ucmVzcG9uc2VUeXBlIH19PC9kaXY+XG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KGl0ZW0ucmVzcG9uc2VUeXBlKVwiID5OdW1iZXI8L2Rpdj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KCdpbnB1dCcpXCIgPklucHV0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAoY2xpY2spPVwiYWRkRm9ybUVsZW1lbnQoJ251bWJlcicpXCIgPk51bWJlcjwvZGl2PiAtLT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOCBub1BhZGRpbmdcIj5cbiAgICA8bWF0LXRhYi1ncm91cD5cbiAgICA8bWF0LXRhYiBsYWJlbD1cIlBhZ2UgMVwiPiBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgZG5kRHJvcHpvbmUgY2xhc3M9XCJjYXJkLWJvZHlcIiAoZG5kRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWF0LXRhYj5cbiAgICA8bWF0LXRhYiBsYWJlbD1cIlBhZ2UgMlwiPiBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgZG5kRHJvcHpvbmUgY2xhc3M9XCJjYXJkLWJvZHlcIiAoZG5kRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICA8L21hdC10YWI+XG4gICAgPG1hdC10YWIgbGFiZWw9XCJQYWdlIDNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgZG5kRHJvcHpvbmUgY2xhc3M9XCJjYXJkLWJvZHlcIiAoZG5kRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICA8L21hdC10YWI+XG4gICAgPC9tYXQtdGFiLWdyb3VwPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICA8L2Rpdj5gLFxuICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG4gIHVuc3ViY3JpYmU6IGFueTtcbiAganNvbkRhdGE6IGFueTtcbiAgZm9ybURhdGE6IGFueTtcbiAgcGFnZU51bWJlcjogYW55O1xuXG4gIC8vIEBJbnB1dCgpIGRhdGE7XG4gIEBJbnB1dCgpIGV2ZW50czogT2JzZXJ2YWJsZTxhbnk+O1xuICAvLyBAT3V0cHV0KCkgcXVlc3Rpb25MaXN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcXVlc3Rpb25UcmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBldmVudHNTdWJzY3JpcHRpb246IGFueVxuXG4gIHB1YmxpYyBmaWVsZHM6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgLy8gdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgLy8gICBmaWVsZHM6IHRoaXMuZmIuYXJyYXkoW10pLFxuICAgIC8vIH0pXG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBmaWVsZHM6IG5ldyBGb3JtQ29udHJvbChKU09OLnN0cmluZ2lmeSh0aGlzLmZpZWxkcykpXG4gICAgfSlcblxuICAgIHRoaXMudW5zdWJjcmliZSA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZSk7XG4gICAgICAvLyB0aGlzLmZpZWxkcyA9IEpTT04ucGFyc2UodXBkYXRlLmZpZWxkcyk7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmV2ZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRzLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGluZyBmcm9tIHBhcmVudCB3aXRoIGRhdGFcIiwgZGF0YSk7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBsZXQgZHQgPSBkYXRhO1xuICAgICAgICB0aGlzLmZvcm1CdWlsZChkdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgIGFjdGlvbjogXCJhbGxcIixcbiAgICAgICAgICBkYXRhOiB0aGlzLmZpZWxkc1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG8gZ2V0IGFsbFwiLCB0aGlzLmZpZWxkcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQob2JqKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm9ybURhdGEgPSBbXTtcbiAgICB0aGlzLmpzb25EYXRhID0gW1xuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInRleHRcIixcblxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInJhZGlvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRyb3Bkb3duXCJcbiAgICAgIH0se1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOlwiZGF0ZVwiXG4gICAgICB9LHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjpcInNsaWRlclwiXG4gICAgICB9XG4gICAgXVxuICB9XG4gIG9uVXBsb2FkKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuXG4gIGdldEZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHM7XG4gIH1cblxuICBuZ0Rpc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YmNyaWJlKCk7XG4gIH1cbiAgb25Ecm9wKGVsZSwgYWN0aW9uID0gXCJcIikge1xuICAgIGNvbnNvbGUubG9nKFwiZHJvcCBlbGVcIixlbGUpO1xuICAgIGlmKGVsZS5kYXRhKXtcbiAgICAgIGVsZSA9IGVsZS5kYXRhLnJlc3BvbnNlVHlwZVxuICAgIH1cbiAgICBsZXQgbGVuID0gdGhpcy5maWVsZHMubGVuZ3RoICsgMTtcbiAgICB2YXIgb2JqID0ge307XG4gICAgaWYgKGFjdGlvbiA9PSBcImNvcHlcIikge1xuICAgICAgbGV0IGNvcHlPYmogPSB7XG4gICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IGVsZS50eXBlLFxuICAgICAgICBcImxhYmVsXCI6IGVsZS5sYWJlbCxcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBlbGUucGxhY2Vob2xkZXIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjogZWxlLnZhbGlkYXRpb25zLFxuICAgICAgICBcIm9wdGlvbnNcIjogZWxlLm9wdGlvbnMsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjplbGUuZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICAgIG9iaiA9IGNvcHlPYmo7XG5cbiAgICB9IGVsc2Uge1xuXG5cblxuXG4gICAgICBpZiAoZWxlID09ICd0ZXh0Jykge1xuICAgICAgICBvYmogPSB7XG4gICAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBlbnRlciB5b3VyIHF1ZXN0aW9uIGhlcmVcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJcIixcbiAgICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsZSA9PSAnbnVtYmVyJykge1xuICAgICAgICBvYmogPSB7XG4gICAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGVudGVyIHlvdXIgcXVlc3Rpb24gaGVyZVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlwiLFxuICAgICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxlID09ICdyYWRpbycpIHtcbiAgICAgICAgb2JqID0ge1xuICAgICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246XCJcIixcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ0xhYmVsIDEnIH0sXG4gICAgICAgICAgICB7IGtleTogJ29wdGlvbjInLCBsYWJlbDogJ0xhYmVsIDEnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxlID09IFwiY2hlY2tib3hcIikge1xuICAgICAgICBvYmogPSB7XG4gICAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlwiXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdvcHRpb24gMScgfSxcbiAgICAgICAgICAgIHsga2V5OiAnb3B0aW9uMicsIGxhYmVsOiAnb3B0aW9uIDInIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxlID09IFwiZHJvcGRvd25cIikge1xuICAgICAgICBvYmogPSB7XG4gICAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgICB0eXBlOiAnZHJvcGRvd24nLFxuICAgICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICB2YWx1ZTogJ29wdGlvbjEnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlwiXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdPcHRpb24gMScgfSxcbiAgICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDInIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGVsZSA9PSBcImRhdGVcIikge1xuICAgICAgICBvYmogPSB7XG4gICAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlwiXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIixcbiAgICAgICAgICAgIFwibWF4RGF0ZVwiOlwiXCIsXG4gICAgICAgICAgICBcIm1pbkRhdGVcIjpcIlwiLFxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICBcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmIChlbGUgPT0gXCJzbGlkZXJcIikge1xuICAgICAgICBvYmogPSB7XG4gICAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246XCJcIixcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWluXCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1heFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJtYXhEYXRlXCI6XCJcIixcbiAgICAgICAgICAgIFwibWluRGF0ZVwiOlwiXCIsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgIFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBsZXQgZWxlbSA9IHRoaXMuZmllbGRzO1xuICAgIGxldCB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgYWN0aW9uOiAnYWRkJyxcbiAgICAgIGRhdGE6IG9ialxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zZlwiLCB0cm5hc2Zvcm1EYXRhKTtcbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuXG4gICAgdGhpcy5mb3JtRGF0YS5wdXNoKG9iaik7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLVwiLCBvYmopO1xuICAgIGZvciAobGV0IGYgb2YgdGhpcy5mb3JtRGF0YSkge1xuXG5cbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGZbJ2ZpZWxkJ10pO1xuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBsZXQgb3B0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG5cbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IGNyZWRzID0gdGhpcy5mb3JtLmNvbnRyb2xzLmZpZWxkcyBhcyBGb3JtQXJyYXk7XG4gICAgICAvLyBjcmVkcy5wdXNoKHRoaXMuZmIuZ3JvdXAoZmllbGRzQ3RybHMpKTtcblxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZpZWxkc0N0cmxzXCIsZmllbGRzQ3RybHMpO1xuXG4gICAgICAvLyB0aGlzLmZvcm1EYXRhID0gIHRoaXMuZmllbGRzO1xuXG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIC8vIHRoaXMuZmllbGRzXG4gICAgLy8gdGhpcy5mb3JtQnVpbGQoKTtcbiAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZHMgY29udHJvbHNcIiwgdGhpcy5mb3JtKTtcblxuICB9XG5cblxuICBmb3JtQnVpbGQoZGF0YSkge1xuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xuICAgIHRoaXMuZmllbGRzID0gW107XG5cbiAgICB0aGlzLmZpZWxkcy5zbGljZSh0aGlzLmZpZWxkcy5sZW5ndGgsIDApO1xuICAgIGZvcm1EYXRhID0gZGF0YTtcbiAgICBsZXQgZmllbGRzQ3RybHMgPSB7fTtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICBmb3IgKGxldCBmIG9mIGZvcm1EYXRhKSB7XG4gICAgICBpZiAoZlsndHlwZSddICE9ICdjaGVja2JveCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmLnR5cGVcIiwgZlsnZmllbGQnXSk7XG4gICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Db250cm9sKGZbJ3ZhbHVlJ10gfHwgJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgb3B0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG4gICAgICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQubGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcblxuICAgIHRoaXMuZmllbGRzID0gZm9ybURhdGE7XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGFjdGlvbjogXCJhbGxcIixcbiAgICAgIGRhdGE6IGZvcm1EYXRhXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkcy0tLS0tLS1cIiwgdGhpcy5maWVsZHMpO1xuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQob2JqKTtcblxuXG4gICAgLy8gdGhpcy5maWVsZHMgPSBkYXRhO1xuXG4gICAgLy8gbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkc1wiLCBkYXRhKTtcbiAgICAvLyBmb3IgKGxldCBmIG9mIGRhdGEpIHtcblxuXG4gICAgLy8gICBpZiAoZi50eXBlICE9ICdjaGVja2JveCcpIHtcblxuICAgIC8vICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Db250cm9sKGYudmFsdWUgfHwgJycpXG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBsZXQgb3B0cyA9IHt9O1xuICAgIC8vICAgICBmb3IgKGxldCBvcHQgb2YgZi5vcHRpb25zKSB7XG5cbiAgICAvLyAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC52YWx1ZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZmllbGRzQ3RybHNbZi5uYW1lXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gIH1cblxuICBvblN1Ym1pdCh2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKFwidmFsdWVcIiwgdGhpcy5maWVsZHMpO1xuXG4gICAgLy8gdGhpcy5xdWVzdGlvbkxpc3QuZW1pdCh0aGlzLmZpZWxkcyk7XG5cbiAgICBsZXQgb2JqID0ge1xuICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgZGF0YTogdGhpcy5maWVsZHNcbiAgICB9XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuICB9XG5cblxuICAvLyAoZXZlbnQpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnRWxlbWVudCB3YXMgZHJhZ2dlZCcsIGV2ZW50KTtcbiAgLy8gfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgfVxuICBvbkZpZWxkVXBkYXRlKCRldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZXZlbnREYXRhIC0tLS0tLVwiLCAkZXZlbnQpO1xuICAgIGxldCB0cm5hc2Zvcm1EYXRhID0ge307XG4gICAgaWYgKCRldmVudC5hY3Rpb24gPT0gXCJjb3B5XCIpIHtcbiAgICAgIHRoaXMub25Ecm9wKCRldmVudC5kYXRhLCBcImNvcHlcIik7XG4gICAgfSBlbHNlXG4gICAgICBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgIHRybmFzZm9ybURhdGEgPSB7XG4gICAgICAgICAgYWN0aW9uOiAnZGVsZXRlJyxcbiAgICAgICAgICBkYXRhOiAkZXZlbnRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJuYXNmb3JtRGF0YSA9IHtcbiAgICAgICAgICBhY3Rpb246ICd1cGRhdGUnLFxuICAgICAgICAgIGRhdGE6IEpTT04ucGFyc2UoJGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdCh0cm5hc2Zvcm1EYXRhKTtcbiAgfVxufVxuIl19