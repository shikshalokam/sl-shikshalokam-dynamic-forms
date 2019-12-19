/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// private dynamicServe: DynamicFormBuilderService
import { DynamicFormBuilderService } from './dynamic-form-builder.service';
// import  { } from './dynamic-form-builder.service'
import { Observable } from 'rxjs';
var DynamicFormBuilderComponent = /** @class */ (function () {
    function DynamicFormBuilderComponent(http, _formBuilder, fb, dynamicServe) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.fb = fb;
        this.dynamicServe = dynamicServe;
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
     * @param {?} data
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.sendToService = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // send message to subscribers via observable subject
        this.dynamicServe.sendData(data);
    };
    /**
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.getCriteria = /**
     * @return {?}
     */
    function () {
        return this.criteriaList;
    };
    /**
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.criteriaList = [];
        this.eventsSubscription = this.events.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.log("calling from parent with data === ", data);
            if (data) {
                console.log("criteria list", data.criteriaList);
                _this.criteriaList = data.criteriaList;
                /** @type {?} */
                var dt = data['questionArray'];
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
                "responseType": "matrix"
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
                "label": "Question",
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
                "position": len,
                "field": len + "question",
                "type": "number",
                "label": "Question",
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
                "position": len,
                field: len + "question",
                type: 'radio',
                name: len + ". question",
                "label": "Question",
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
                "position": len,
                field: len + "question",
                type: "checkbox",
                name: len + ". question",
                "label": "Question",
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
                "position": len,
                field: len + "question",
                type: 'dropdown',
                name: len + ". question",
                "label": "Question",
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
                "position": len,
                field: len + "question",
                type: 'date',
                name: len + ". question",
                "label": "Question",
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
        else if (ele == 'matrix') {
            if (ele == 'childDroped') {
                /** @type {?} */
                var childdata = {
                    "position": len,
                    "field": len + "question",
                    "type": ele.type,
                    "label": "Question",
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
                "position": len,
                "field": len + "question",
                "type": "matrix",
                "label": "Question",
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
                "label": "Question",
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
        if (action === void 0) { action = ""; }
        var e_1, _a, e_2, _b;
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
        /** @type {?} */
        var completeData = {
            criteriaList: this.criteriaList,
            questionList: this.fields
        };
        console.log("completeData", completeData);
        this.sendToService(completeData);
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
        var _this = this;
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
            console.log('this.fields  in child', this.fields);
            /** @type {?} */
            var final = this.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.field === eventObj.data.mutiSelect.field) {
                    /** @type {?} */
                    var obj = _this.getToolObj($event.data.responseType, item.child.length + 1);
                    item.child.push(obj);
                    return item;
                }
                else {
                    return item;
                }
            }));
            // final.push(obj);
            // this.fields
            console.log('final result', final);
            // console.log("main obj", obj);
        }
        else {
            trnasformData = {
                action: 'update',
                data: $event
            };
        }
        /** @type {?} */
        var completeData = {
            questionList: this.fields,
            criteriaList: this.criteriaList
        };
        console.log("completeData", completeData);
        this.sendToService(completeData);
        this.questionTrigger.emit(trnasformData);
    };
    DynamicFormBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-dynamic-form-builder',
                    template: "<style>\n  p {\n      font-family: Lato;\n    }\n    .noPadding {\n        padding: 0px;\n    }\n    .margin-5 {\n        margin-top:5%;\n    }\n    .element {\n      border: 1px solid #ccc;\n      padding: 10px;\n      margin-bottom: 10px;\n      color: #333;\n      text-align: left;\n      text-transform: capitalize;\n      box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);\n  }\n    .form-group {\n        margin-bottom: 0.5rem;\n        border: 1px solid #ece7e7;\n    }\n    span.cursor-pntr {\n        cursor: pointer;\n        padding: 2px;\n    }\n    \n    \n  </style>\n  <div class=\"col-sm-12\">\n      \n\n    <div class=\"col-sm-12 noPadding\">\n   \n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\" >\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [criteriaList]=\"getCriteria()\" [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\" style=\"padding-top:25px\">\n          \n          <div  class=\"col-md-12\">\n            <!-- <dynamic-form-builder [criteriaList]=\"getCriteria()\" [fields]=\"getFields()\"></dynamic-form-builder> -->\n      \n            <span *ngFor=\"let item of jsonData\" style =\"padding:5px\">\n              <span [dndDraggable]=\"item\"  class=\"element\"  >{{ item.responseType=='multiselect'?'metrix':item.responseType }}</span>\n              </span>\n\n              <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement(item.responseType)\" >Number</div> -->\n            <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement('input')\" >Input</div>\n            <div class=\"col-sm-12 element\" (click)=\"addFormElement('number')\" >Number</div> -->\n\n          </div>\n      </div>\n\n\n      \n      <div class=\"col-sm-12\">\n      </div>",
                    styleUrls: []
                },] },
    ];
    /** @nocollapse */
    DynamicFormBuilderComponent.ctorParameters = function () { return [
        { type: HttpClient },
        { type: FormBuilder },
        { type: FormBuilder },
        { type: DynamicFormBuilderService }
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
    DynamicFormBuilderComponent.prototype.criteriaList;
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
    /**
     * @type {?}
     * @private
     */
    DynamicFormBuilderComponent.prototype.dynamicServe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7O0FBSy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFBOztBQUkxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBNEZFLHFDQUNVLElBQWdCLEVBQ2hCLFlBQXlCLEVBQ3pCLEVBQWUsRUFDZixZQUF1QztRQUh2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBMkI7O1FBbEJ2QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLeEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQWV4Qiw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9CLEtBQUs7UUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7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QVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxtK0RBK0RDO29CQUNYLFNBQVMsRUFBRSxFQUFFO2lCQUNkOzs7O2dCQTlFUSxVQUFVO2dCQURjLFdBQVc7Z0JBQVgsV0FBVztnQkFNbkMseUJBQXlCOzs7eUJBa0YvQixLQUFLO2tDQUVMLE1BQU07O0lBNGVULGtDQUFDO0NBQUEsQUExakJELElBMGpCQztTQXRmWSwyQkFBMkI7OztJQUN0QywyQ0FBdUI7O0lBQ3ZCLGlEQUFnQjs7SUFDaEIsK0NBQWM7O0lBQ2QsK0NBQWM7O0lBQ2QsaURBQWdCOztJQUdoQiw2Q0FBaUM7O0lBRWpDLHNEQUErQzs7SUFDL0MseURBQXdCOztJQUV4QixtREFBaUI7O0lBRWpCLDZDQUEwQjs7Ozs7SUFVeEIsMkNBQXdCOzs7OztJQUN4QixtREFBaUM7Ozs7O0lBQ2pDLHlDQUF1Qjs7Ozs7SUFDdkIsbURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEbmREcm9wRXZlbnQgfSBmcm9tICduZ3gtZHJhZy1kcm9wJ1xuLy8gcHJpdmF0ZSBkeW5hbWljU2VydmU6IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2VcblxuaW1wb3J0IHsgRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSdcblxuLy8gaW1wb3J0ICB7IH0gZnJvbSAnLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1keW5hbWljLWZvcm0tYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgPHN0eWxlPlxuICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIH1cbiAgICAubm9QYWRkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAubWFyZ2luLTUge1xuICAgICAgICBtYXJnaW4tdG9wOjUlO1xuICAgIH1cbiAgICAuZWxlbWVudCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO1xuICB9XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2U3ZTc7XG4gICAgfVxuICAgIHNwYW4uY3Vyc29yLXBudHIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICB9XG4gICAgXG4gICAgXG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIFxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBub1BhZGRpbmdcIj5cbiAgIFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBkbmREcm9wem9uZSBjbGFzcz1cImNhcmQtYm9keVwiIChkbmREcm9wKT1cIm9uRHJvcCgkZXZlbnQpXCIgPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2NyaXRlcmlhTGlzdF09XCJnZXRDcml0ZXJpYSgpXCIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiIHN0eWxlPVwicGFkZGluZy10b3A6MjVweFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8IS0tIDxkeW5hbWljLWZvcm0tYnVpbGRlciBbY3JpdGVyaWFMaXN0XT1cImdldENyaXRlcmlhKClcIiBbZmllbGRzXT1cImdldEZpZWxkcygpXCI+PC9keW5hbWljLWZvcm0tYnVpbGRlcj4gLS0+XG4gICAgICBcbiAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBpdGVtIG9mIGpzb25EYXRhXCIgc3R5bGUgPVwicGFkZGluZzo1cHhcIj5cbiAgICAgICAgICAgICAgPHNwYW4gW2RuZERyYWdnYWJsZV09XCJpdGVtXCIgIGNsYXNzPVwiZWxlbWVudFwiICA+e3sgaXRlbS5yZXNwb25zZVR5cGU9PSdtdWx0aXNlbGVjdCc/J21ldHJpeCc6aXRlbS5yZXNwb25zZVR5cGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudChpdGVtLnJlc3BvbnNlVHlwZSlcIiA+TnVtYmVyPC9kaXY+IC0tPlxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAoY2xpY2spPVwiYWRkRm9ybUVsZW1lbnQoJ2lucHV0JylcIiA+SW5wdXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudCgnbnVtYmVyJylcIiA+TnVtYmVyPC9kaXY+IC0tPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIDwvZGl2PmAsXG4gIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgdW5zdWJjcmliZTogYW55O1xuICBqc29uRGF0YTogYW55O1xuICBmb3JtRGF0YTogYW55O1xuICBwYWdlTnVtYmVyOiBhbnk7XG5cbiAgLy8gQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgZXZlbnRzOiBPYnNlcnZhYmxlPGFueT47XG4gIC8vIEBPdXRwdXQoKSBxdWVzdGlvbkxpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBxdWVzdGlvblRyaWdnZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV2ZW50c1N1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNyaXRlcmlhTGlzdDphbnk7XG5cbiAgcHVibGljIGZpZWxkczogYW55W10gPSBbXTtcblxuXG4gIHNlbmRUb1NlcnZpY2UoZGF0YSk6IHZvaWQge1xuICAgIC8vIHNlbmQgbWVzc2FnZSB0byBzdWJzY3JpYmVycyB2aWEgb2JzZXJ2YWJsZSBzdWJqZWN0XG4gICAgdGhpcy5keW5hbWljU2VydmUuc2VuZERhdGEoZGF0YSk7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgXG4gICAgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGR5bmFtaWNTZXJ2ZTogRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZVxuICAgICkge1xuICAgIC8vIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIC8vICAgZmllbGRzOiB0aGlzLmZiLmFycmF5KFtdKSxcbiAgICAvLyB9KVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgZmllbGRzOiBuZXcgRm9ybUNvbnRyb2woSlNPTi5zdHJpbmdpZnkodGhpcy5maWVsZHMpKVxuICAgIH0pXG5cbiAgICB0aGlzLnVuc3ViY3JpYmUgPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodXBkYXRlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh1cGRhdGUpO1xuICAgICAgLy8gdGhpcy5maWVsZHMgPSBKU09OLnBhcnNlKHVwZGF0ZS5maWVsZHMpO1xuICAgIH0pO1xuICB9XG5cblxuICBnZXRDcml0ZXJpYSgpe1xuICAgIHJldHVybiB0aGlzLmNyaXRlcmlhTGlzdDtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuY3JpdGVyaWFMaXN0ID0gW107XG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxpbmcgZnJvbSBwYXJlbnQgd2l0aCBkYXRhID09PSBcIiwgZGF0YSk7XG4gICAgICBpZiAoZGF0YSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JpdGVyaWEgbGlzdFwiLGRhdGEuY3JpdGVyaWFMaXN0KTtcblxuICAgICAgICB0aGlzLmNyaXRlcmlhTGlzdCA9IGRhdGEuY3JpdGVyaWFMaXN0O1xuICAgICAgICBsZXQgZHQgPSBkYXRhWydxdWVzdGlvbkFycmF5J107XG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkKGR0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgICAgIGRhdGE6IHRoaXMuZmllbGRzXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ0byBnZXQgYWxsXCIsIHRoaXMuZmllbGRzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3JtRGF0YSA9IFtdO1xuICAgIHRoaXMuanNvbkRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwidGV4dFwiLFxuXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwicmFkaW9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwiZHJvcGRvd25cIlxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRhdGVcIlxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInNsaWRlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcIm1hdHJpeFwiXG4gICAgICB9XG4gICAgXVxuICB9XG4gIG9uVXBsb2FkKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuXG4gIGdldEZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHM7XG4gIH1cblxuICBuZ0Rpc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YmNyaWJlKCk7XG4gIH1cblxuXG4gIGdldFRvb2xPYmooZWxlLCBsZW4pIHtcblxuICAgIGxldCBvYmogPSB7XG5cbiAgICB9XG4gICAgaWYgKGVsZSA9PSAndGV4dCcpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgIFwibGFiZWxcIjogIFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBlbnRlciB5b3VyIHF1ZXN0aW9uIGhlcmVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSAnbnVtYmVyJykge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgICBcImxhYmVsXCI6ICBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgZW50ZXIgeW91ciBxdWVzdGlvbiBoZXJlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gJ3JhZGlvJykge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwibGFiZWxcIjogIFwiUXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ0xhYmVsIDEnIH0sXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24yJywgbGFiZWw6ICdMYWJlbCAxJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwibGFiZWxcIjogIFwiUXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ29wdGlvbiAxJyB9LFxuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMicsIGxhYmVsOiAnb3B0aW9uIDInIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09IFwiZHJvcGRvd25cIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwibGFiZWxcIjogIFwiUXVlc3Rpb25cIixcbiAgICAgICAgdmFsdWU6ICdvcHRpb24xJyxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ09wdGlvbiAxJyB9LFxuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDInIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChlbGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwibGFiZWxcIjogIFwiUXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4RGF0ZVwiOiBcIlwiLFxuICAgICAgICAgIFwibWluRGF0ZVwiOiBcIlwiLFxuXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcblxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gJ21hdHJpeCcpIHtcbiAgICAgIGlmIChlbGUgPT0gJ2NoaWxkRHJvcGVkJykge1xuICAgICAgICBsZXQgY2hpbGRkYXRhID0ge1xuICAgICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICAgIFwidHlwZVwiOiBlbGUudHlwZSxcbiAgICAgICAgICBcImxhYmVsXCI6ICBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJjaGlsZFwiOiBbXSxcbiAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGFkZCBDaGlsZCdzIGhlcmVcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmaW5hbGNoaWxkID0gW107XG5cbiAgICAgIGZpbmFsY2hpbGQucHVzaCgpXG5cblxuICAgICAgb2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIm1hdHJpeFwiLFxuICAgICAgICBcImxhYmVsXCI6ICBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwiY2hpbGRcIjogW10sXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgYWRkIENoaWxkJ3MgaGVyZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2UsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJsYWJlbFwiOiAgXCJRdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pblwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhEYXRlXCI6IFwiXCIsXG4gICAgICAgICAgXCJtaW5EYXRlXCI6IFwiXCIsXG5cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgb25Ecm9wKGVsZSwgYWN0aW9uID0gXCJcIikge1xuICAgIGNvbnNvbGUubG9nKFwiZHJvcCBlbGVcIiwgZWxlKTtcbiAgICBpZiAoZWxlLmRhdGEpIHtcbiAgICAgIGVsZSA9IGVsZS5kYXRhLnJlc3BvbnNlVHlwZVxuICAgIH1cbiAgICBsZXQgbGVuID0gdGhpcy5maWVsZHMubGVuZ3RoICsgMTtcbiAgICB2YXIgb2JqID0ge307XG4gICAgaWYgKGFjdGlvbiA9PSBcImNvcHlcIikge1xuICAgICAgbGV0IGNvcHlPYmogPSB7XG4gICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IGVsZS50eXBlLFxuICAgICAgICBcImxhYmVsXCI6IGVsZS5sYWJlbCxcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBlbGUucGxhY2Vob2xkZXIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjogZWxlLnZhbGlkYXRpb25zLFxuICAgICAgICBcIm9wdGlvbnNcIjogZWxlLm9wdGlvbnMsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogZWxlLmRlc2NyaXB0aW9uXG4gICAgICB9XG4gICAgICBvYmogPSBjb3B5T2JqO1xuXG4gICAgfSBlbHNlIHtcblxuXG4gICAgICBvYmogPSB0aGlzLmdldFRvb2xPYmooZWxlLCBsZW4pO1xuXG5cblxuICAgIH1cblxuXG4gICAgbGV0IGVsZW0gPSB0aGlzLmZpZWxkcztcbiAgICBsZXQgdHJuYXNmb3JtRGF0YSA9IHtcbiAgICAgIGFjdGlvbjogJ2FkZCcsXG4gICAgICBkYXRhOiBvYmpcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJ0cmFuc2ZcIiwgdHJuYXNmb3JtRGF0YSk7XG5cbiAgICBcbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuXG4gICAgdGhpcy5mb3JtRGF0YS5wdXNoKG9iaik7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLVwiLCBvYmopO1xuICAgIGZvciAobGV0IGYgb2YgdGhpcy5mb3JtRGF0YSkge1xuXG5cbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGZbJ2ZpZWxkJ10pO1xuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBsZXQgb3B0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG5cbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IGNyZWRzID0gdGhpcy5mb3JtLmNvbnRyb2xzLmZpZWxkcyBhcyBGb3JtQXJyYXk7XG4gICAgICAvLyBjcmVkcy5wdXNoKHRoaXMuZmIuZ3JvdXAoZmllbGRzQ3RybHMpKTtcblxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZpZWxkc0N0cmxzXCIsZmllbGRzQ3RybHMpO1xuXG4gICAgICAvLyB0aGlzLmZvcm1EYXRhID0gIHRoaXMuZmllbGRzO1xuXG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIC8vIHRoaXMuZmllbGRzXG4gICAgLy8gdGhpcy5mb3JtQnVpbGQoKTtcbiAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG5cbiAgICBsZXQgY29tcGxldGVEYXRhID0ge1xuICAgICAgY3JpdGVyaWFMaXN0OnRoaXMuY3JpdGVyaWFMaXN0LFxuICAgICAgcXVlc3Rpb25MaXN0OnRoaXMuZmllbGRzXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVEYXRhXCIsY29tcGxldGVEYXRhKTtcbiAgICB0aGlzLnNlbmRUb1NlcnZpY2UoY29tcGxldGVEYXRhKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkcyBjb250cm9sc1wiLCB0aGlzLmZvcm0pO1xuXG4gIH1cblxuXG4gIGZvcm1CdWlsZChkYXRhKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG4gICAgdGhpcy5maWVsZHMgPSBbXTtcblxuICAgIHRoaXMuZmllbGRzLnNsaWNlKHRoaXMuZmllbGRzLmxlbmd0aCwgMCk7XG4gICAgZm9ybURhdGEgPSBkYXRhO1xuICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIGZvciAobGV0IGYgb2YgZm9ybURhdGEpIHtcbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImYudHlwZVwiLCBmWydmaWVsZCddKTtcbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUNvbnRyb2woZlsndmFsdWUnXSB8fCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvcHRzID0ge307XG4gICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4gICAgdGhpcy5maWVsZHMgPSBmb3JtRGF0YTtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgZGF0YTogZm9ybURhdGFcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGRzLS0tLS0tLVwiLCB0aGlzLmZpZWxkcyk7XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuXG5cbiAgICAvLyB0aGlzLmZpZWxkcyA9IGRhdGE7XG5cbiAgICAvLyBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGRzXCIsIGRhdGEpO1xuICAgIC8vIGZvciAobGV0IGYgb2YgZGF0YSkge1xuXG5cbiAgICAvLyAgIGlmIChmLnR5cGUgIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgLy8gICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woZi52YWx1ZSB8fCAnJylcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGxldCBvcHRzID0ge307XG4gICAgLy8gICAgIGZvciAobGV0IG9wdCBvZiBmLm9wdGlvbnMpIHtcblxuICAgIC8vICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LnZhbHVlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgfVxuXG4gIG9uU3VibWl0KHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLCB0aGlzLmZpZWxkcyk7XG5cbiAgICAvLyB0aGlzLnF1ZXN0aW9uTGlzdC5lbWl0KHRoaXMuZmllbGRzKTtcblxuICAgIGxldCBvYmogPSB7XG4gICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICBkYXRhOiB0aGlzLmZpZWxkc1xuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG4gIH1cblxuXG4gIC8vIChldmVudCkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdFbGVtZW50IHdhcyBkcmFnZ2VkJywgZXZlbnQpO1xuICAvLyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICB9XG5cblxuICBvbkZpZWxkVXBkYXRlKCRldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiZXZlbnREYXRhIHNzc3Nzc3MtLS0tLS1cIiwgJGV2ZW50LmRhdGEpO1xuXG4gICAgbGV0IGV2ZW50T2JqID0gJGV2ZW50XG4gICAgbGV0IHRybmFzZm9ybURhdGEgPSB7fTtcbiAgICBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImNvcHlcIikge1xuICAgICAgdGhpcy5vbkRyb3AoJGV2ZW50LmRhdGEsIFwiY29weVwiKTtcbiAgICB9IGVsc2UgaWYgKCRldmVudC5hY3Rpb24gPT0gXCJkZWxldGVcIikge1xuICAgICAgdHJuYXNmb3JtRGF0YSA9IHtcbiAgICAgICAgYWN0aW9uOiAnZGVsZXRlJyxcbiAgICAgICAgZGF0YTogJGV2ZW50XG4gICAgICB9XG5cbiAgICAgXG5cbiAgICB9IGVsc2UgaWYgKCRldmVudC5hY3Rpb24gPT0gXCJjaGlsZERyb3BlZFwiKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpZWxkcyAgaW4gY2hpbGQnLCB0aGlzLmZpZWxkcyk7XG5cbiAgICAgIHZhciBmaW5hbCA9IHRoaXMuZmllbGRzLmZpbHRlcihcbiAgICAgICAgaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uZmllbGQgPT09IGV2ZW50T2JqLmRhdGEubXV0aVNlbGVjdC5maWVsZCkge1xuXG4gICAgICAgICAgICBsZXQgb2JqID0gdGhpcy5nZXRUb29sT2JqKCRldmVudC5kYXRhLnJlc3BvbnNlVHlwZSwgaXRlbS5jaGlsZC5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIGl0ZW0uY2hpbGQucHVzaChvYmopO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGZpbmFsLnB1c2gob2JqKTtcblxuXG4gICAgICAvLyB0aGlzLmZpZWxkc1xuXG4gICAgICBjb25zb2xlLmxvZygnZmluYWwgcmVzdWx0JywgZmluYWwpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1haW4gb2JqXCIsIG9iaik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdHJuYXNmb3JtRGF0YSA9IHtcbiAgICAgICAgYWN0aW9uOiAndXBkYXRlJyxcbiAgICAgICAgZGF0YTogJGV2ZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNvbXBsZXRlRGF0YSA9IHtcbiAgICAgIHF1ZXN0aW9uTGlzdDp0aGlzLmZpZWxkcyxcbiAgICAgIGNyaXRlcmlhTGlzdDp0aGlzLmNyaXRlcmlhTGlzdFxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVEYXRhXCIsY29tcGxldGVEYXRhKTtcbiAgICB0aGlzLnNlbmRUb1NlcnZpY2UoY29tcGxldGVEYXRhKTtcblxuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQodHJuYXNmb3JtRGF0YSk7XG4gIH1cbn1cbiJdfQ==