/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.showQBlock = /**
     * @return {?}
     */
    function () {
        this.showQuestionBlock;
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
            console.log("calling from parent with data", data);
            if (data) {
                // let dt = data;
                // this.formBuild(dt);
                _this.criteriaList = data.criteriaList;
                /** @type {?} */
                var dt = data['questionArray'];
                console.log("");
                _this.formBuild(dt);
                /** @type {?} */
                var completeData = {
                    questionList: data['questionArray'],
                    criteriaList: data.criteriaList
                };
                console.log("completeData", completeData);
                _this.sendToService(completeData);
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
        else if (ele == 'matrix') {
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
                "type": "matrix",
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
        };
        console.log("transf", trnasformData);
        this.questionTrigger.emit(trnasformData);
        this.formData.push(obj);
        /** @type {?} */
        var fieldsCtrls = {};
        this.form = new FormGroup(fieldsCtrls);
        console.log("------", obj);
        try {
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
            questionList: this.fields,
            criteriaList: this.criteriaList
        };
        console.log("completeData", completeData);
        this.sendToService(completeData);
        this.questionTrigger.emit(trnasformData);
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
            console.log('this.fields', this.fields);
            /** @type {?} */
            var final = this.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.field === eventObj.data.mutiSelect.field) {
                    console.log("");
                    console.log(eventObj.data.mutiSelect.field, '====== this.fields  =====', item);
                    // if(item.child){
                    /** @type {?} */
                    var obj = _this.getToolObj($event.data.responseType, item.child.length + 1);
                    // }
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
                data: JSON.parse($event)
            };
        }
        this.questionTrigger.emit(trnasformData);
    };
    DynamicFormBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-dynamic-form-builder',
                    template: "<style>\n  p {\n      font-family: Lato;\n    }\n    .noPadding {\n        padding: 0px;\n    }\n    .margin-5 {\n        margin-top:5%;\n    }\n    .element {\n      border: 1px solid #ccc;\n      padding: 10px;\n      margin-bottom: 10px;\n      color: #333;\n      text-align: left;\n      text-transform: capitalize;\n      box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);\n  }\n    .form-group {\n        margin-bottom: 0.5rem;\n        border: 1px solid #ece7e7;\n    }\n    .cursor-pntr {\n        cursor: pointer;\n    }\n    \n    \n  </style>\n  <div class=\"col-sm-12\">\n      \n\n    <div class=\"col-sm-12 noPadding\">\n  \n    <div class=\"card\" >\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\" style=\"padding-top:25px\">\n          \n          <div  class=\"col-md-12\">\n            <!-- <dynamic-form-builder [fields]=\"getFields()\"></dynamic-form-builder> -->\n      \n            <span *ngFor=\"let item of jsonData\" style =\"padding:5px\">\n              <span [dndDraggable]=\"item\"  class=\"element\"  >{{ item.responseType }}</span>\n              </span>\n\n              <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement(item.responseType)\" >Number</div> -->\n            <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement('input')\" >Input</div>\n            <div class=\"col-sm-12 element\" (click)=\"addFormElement('number')\" >Number</div> -->\n\n          </div>\n      </div>\n\n\n      \n      <div class=\"col-sm-12\">\n      </div>",
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
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.showQuestionBlock;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLHNCQUFzQixDQUFDO0FBRy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUkzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBbUZFLHFDQUFvQixJQUFnQixFQUMxQixZQUF5QixFQUN6QixFQUFlLEVBQ2YsWUFBdUM7UUFIN0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQTJCOztRQVZ2QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJeEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQVF4Qiw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9CLEtBQUs7UUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7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Q2I7WUFDSCxDQUFDLEVBQUM7WUFFSixtQkFBbUI7WUFHbkIsY0FBYztZQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRW5DLGdDQUFnQztTQUVqQzthQUFNO1lBQ0wsYUFBYSxHQUFHO2dCQUNkLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDekIsQ0FBQTtTQUNGO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0JBbmpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLHkxREE2REM7b0JBQ1gsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7Ozs7Z0JBMUVRLFVBQVU7Z0JBRGMsV0FBVztnQkFBWCxXQUFXO2dCQUluQyx5QkFBeUI7Ozt5QkFnRi9CLEtBQUs7a0NBRUwsTUFBTTs7SUF3ZVQsa0NBQUM7Q0FBQSxBQXBqQkQsSUFvakJDO1NBbGZZLDJCQUEyQjs7O0lBQ3RDLDJDQUF1Qjs7SUFDdkIsaURBQWdCOztJQUNoQiwrQ0FBYzs7SUFDZCwrQ0FBYzs7SUFDZCxpREFBZ0I7O0lBR2hCLDZDQUFpQzs7SUFFakMsc0RBQStDOztJQUMvQyx5REFBd0I7O0lBQ3hCLG1EQUFpQjs7SUFFakIsNkNBQTBCOztJQUMxQix3REFBc0I7Ozs7O0lBRVYsMkNBQXdCOzs7OztJQUNsQyxtREFBaUM7Ozs7O0lBQ2pDLHlDQUF1Qjs7Ozs7SUFDdkIsbURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEbmREcm9wRXZlbnQgfSBmcm9tICduZ3gtZHJhZy1kcm9wJ1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSc7XG5cbi8vIGltcG9ydCAgeyB9IGZyb20gJy4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZHluYW1pYy1mb3JtLWJ1aWxkZXInLFxuICB0ZW1wbGF0ZTogYDxzdHlsZT5cbiAgcCB7XG4gICAgICBmb250LWZhbWlseTogTGF0bztcbiAgICB9XG4gICAgLm5vUGFkZGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLm1hcmdpbi01IHtcbiAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICB9XG4gICAgLmVsZW1lbnQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcbiAgfVxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlN2U3O1xuICAgIH1cbiAgICAuY3Vyc29yLXBudHIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIFxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICBcblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbm9QYWRkaW5nXCI+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgPlxuICAgICAgICAgIDxkaXYgZG5kRHJvcHpvbmUgY2xhc3M9XCJjYXJkLWJvZHlcIiAoZG5kRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIiBzdHlsZT1cInBhZGRpbmctdG9wOjI1cHhcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2ICBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPCEtLSA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+IC0tPlxuICAgICAgXG4gICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBqc29uRGF0YVwiIHN0eWxlID1cInBhZGRpbmc6NXB4XCI+XG4gICAgICAgICAgICAgIDxzcGFuIFtkbmREcmFnZ2FibGVdPVwiaXRlbVwiICBjbGFzcz1cImVsZW1lbnRcIiAgPnt7IGl0ZW0ucmVzcG9uc2VUeXBlIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAoY2xpY2spPVwiYWRkRm9ybUVsZW1lbnQoaXRlbS5yZXNwb25zZVR5cGUpXCIgPk51bWJlcjwvZGl2PiAtLT5cbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KCdpbnB1dCcpXCIgPklucHV0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAoY2xpY2spPVwiYWRkRm9ybUVsZW1lbnQoJ251bWJlcicpXCIgPk51bWJlcjwvZGl2PiAtLT5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICA8L2Rpdj5gLFxuICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG4gIHVuc3ViY3JpYmU6IGFueTtcbiAganNvbkRhdGE6IGFueTtcbiAgZm9ybURhdGE6IGFueTtcbiAgcGFnZU51bWJlcjogYW55O1xuXG4gIC8vIEBJbnB1dCgpIGRhdGE7XG4gIEBJbnB1dCgpIGV2ZW50czogT2JzZXJ2YWJsZTxhbnk+O1xuICAvLyBAT3V0cHV0KCkgcXVlc3Rpb25MaXN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcXVlc3Rpb25UcmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBldmVudHNTdWJzY3JpcHRpb246IGFueTtcbiAgY3JpdGVyaWFMaXN0OmFueTtcblxuICBwdWJsaWMgZmllbGRzOiBhbnlbXSA9IFtdO1xuICBzaG93UXVlc3Rpb25CbG9jazphbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBcbiAgICBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgZHluYW1pY1NlcnZlOiBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlXG4gICAgKSB7XG4gICAgLy8gdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgLy8gICBmaWVsZHM6IHRoaXMuZmIuYXJyYXkoW10pLFxuICAgIC8vIH0pXG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBmaWVsZHM6IG5ldyBGb3JtQ29udHJvbChKU09OLnN0cmluZ2lmeSh0aGlzLmZpZWxkcykpXG4gICAgfSlcblxuICAgIHRoaXMudW5zdWJjcmliZSA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZSk7XG4gICAgICAvLyB0aGlzLmZpZWxkcyA9IEpTT04ucGFyc2UodXBkYXRlLmZpZWxkcyk7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgc2hvd1FCbG9jaygpe1xuICAgIHRoaXMuc2hvd1F1ZXN0aW9uQmxvY2s7XG4gIH1cblxuICBnZXRDcml0ZXJpYSgpe1xuICAgIHJldHVybiB0aGlzLmNyaXRlcmlhTGlzdDtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyaXRlcmlhTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxpbmcgZnJvbSBwYXJlbnQgd2l0aCBkYXRhXCIsIGRhdGEpO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgLy8gbGV0IGR0ID0gZGF0YTtcbiAgICAgICAgLy8gdGhpcy5mb3JtQnVpbGQoZHQpO1xuICAgICAgICB0aGlzLmNyaXRlcmlhTGlzdCA9IGRhdGEuY3JpdGVyaWFMaXN0O1xuICAgICAgICBsZXQgZHQgPSBkYXRhWydxdWVzdGlvbkFycmF5J107XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJcIilcbiAgICAgICAgdGhpcy5mb3JtQnVpbGQoZHQpO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZURhdGEgPSB7XG4gICAgICAgICAgcXVlc3Rpb25MaXN0OmRhdGFbJ3F1ZXN0aW9uQXJyYXknXSxcbiAgICAgICAgICBjcml0ZXJpYUxpc3Q6ZGF0YS5jcml0ZXJpYUxpc3RcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBsZXRlRGF0YVwiLGNvbXBsZXRlRGF0YSk7XG4gICAgICAgIHRoaXMuc2VuZFRvU2VydmljZShjb21wbGV0ZURhdGEpO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgIGFjdGlvbjogXCJhbGxcIixcbiAgICAgICAgICBkYXRhOiB0aGlzLmZpZWxkc1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG8gZ2V0IGFsbFwiLCB0aGlzLmZpZWxkcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQob2JqKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm9ybURhdGEgPSBbXTtcbiAgICB0aGlzLmpzb25EYXRhID0gW1xuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInRleHRcIixcblxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInJhZGlvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRyb3Bkb3duXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJkYXRlXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJzbGlkZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJtYXRyaXhcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuICBvblVwbG9hZChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cblxuICBnZXRGaWVsZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRzO1xuICB9XG5cbiAgbmdEaXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJjcmliZSgpO1xuICB9XG5cbiAgc2VuZFRvU2VydmljZShkYXRhKTogdm9pZCB7XG4gICAgLy8gc2VuZCBtZXNzYWdlIHRvIHN1YnNjcmliZXJzIHZpYSBvYnNlcnZhYmxlIHN1YmplY3RcbiAgICB0aGlzLmR5bmFtaWNTZXJ2ZS5zZW5kRGF0YShkYXRhKTtcbiAgfVxuXG4gIGdldFRvb2xPYmooZWxlLCBsZW4pIHtcblxuICAgIGxldCBvYmogPSB7XG5cbiAgICB9XG4gICAgaWYgKGVsZSA9PSAndGV4dCcpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgZW50ZXIgeW91ciBxdWVzdGlvbiBoZXJlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gJ251bWJlcicpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgICBcImxhYmVsXCI6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGVudGVyIHlvdXIgcXVlc3Rpb24gaGVyZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09ICdyYWRpbycpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ0xhYmVsIDEnIH0sXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24yJywgbGFiZWw6ICdMYWJlbCAxJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnb3B0aW9uIDEnIH0sXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24yJywgbGFiZWw6ICdvcHRpb24gMicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gXCJkcm9wZG93blwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdkcm9wZG93bicsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIHZhbHVlOiAnb3B0aW9uMScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdPcHRpb24gMScgfSxcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ09wdGlvbiAyJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlID09IFwiZGF0ZVwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4RGF0ZVwiOiBcIlwiLFxuICAgICAgICAgIFwibWluRGF0ZVwiOiBcIlwiLFxuXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcblxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gJ21hdHJpeCcpIHtcbiAgICAgIGlmIChlbGUgPT0gJ2NoaWxkRHJvcGVkJykge1xuICAgICAgICBsZXQgY2hpbGRkYXRhID0ge1xuICAgICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICAgIFwidHlwZVwiOiBlbGUudHlwZSxcbiAgICAgICAgICBcImxhYmVsXCI6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICAgIFwiY2hpbGRcIjogW10sXG4gICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBhZGQgQ2hpbGQncyBoZXJlXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZmluYWxjaGlsZCA9IFtdO1xuXG4gICAgICBmaW5hbGNoaWxkLnB1c2goKVxuXG5cbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIm1hdHJpeFwiLFxuICAgICAgICBcImxhYmVsXCI6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBcImNoaWxkXCI6IFtdLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGFkZCBDaGlsZCdzIGhlcmVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gXCJzbGlkZXJcIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5cIjogXCJcIixcbiAgICAgICAgICBcIm1heFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4RGF0ZVwiOiBcIlwiLFxuICAgICAgICAgIFwibWluRGF0ZVwiOiBcIlwiLFxuXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcblxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIG9uRHJvcChlbGUsIGFjdGlvbiA9IFwiXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcImRyb3AgZWxlXCIsIGVsZSk7XG4gICAgaWYgKGVsZS5kYXRhKSB7XG4gICAgICBlbGUgPSBlbGUuZGF0YS5yZXNwb25zZVR5cGVcbiAgICB9XG4gICAgbGV0IGxlbiA9IHRoaXMuZmllbGRzLmxlbmd0aCArIDE7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGlmIChhY3Rpb24gPT0gXCJjb3B5XCIpIHtcbiAgICAgIGxldCBjb3B5T2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBlbGUudHlwZSxcbiAgICAgICAgXCJsYWJlbFwiOiBlbGUubGFiZWwsXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogZWxlLnBsYWNlaG9sZGVyLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IGVsZS52YWxpZGF0aW9ucyxcbiAgICAgICAgXCJvcHRpb25zXCI6IGVsZS5vcHRpb25zLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGVsZS5kZXNjcmlwdGlvblxuICAgICAgfVxuICAgICAgb2JqID0gY29weU9iajtcblxuICAgIH0gZWxzZSB7XG5cblxuICAgICAgb2JqID0gdGhpcy5nZXRUb29sT2JqKGVsZSwgbGVuKTtcblxuXG5cbiAgICB9XG5cblxuICAgIGxldCBlbGVtID0gdGhpcy5maWVsZHM7XG4gICAgbGV0IHRybmFzZm9ybURhdGEgPSB7XG4gICAgICBhY3Rpb246ICdhZGQnLFxuICAgICAgZGF0YTogb2JqXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwidHJhbnNmXCIsIHRybmFzZm9ybURhdGEpO1xuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQodHJuYXNmb3JtRGF0YSk7XG5cbiAgICB0aGlzLmZvcm1EYXRhLnB1c2gob2JqKTtcbiAgICBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tXCIsIG9iaik7XG4gICAgZm9yIChsZXQgZiBvZiB0aGlzLmZvcm1EYXRhKSB7XG5cblxuICAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJmLnR5cGVcIiwgZlsnZmllbGQnXSk7XG4gICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Db250cm9sKGZbJ3ZhbHVlJ10gfHwgJycpXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxldCBvcHRzID0ge307XG4gICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcblxuICAgICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgY3JlZHMgPSB0aGlzLmZvcm0uY29udHJvbHMuZmllbGRzIGFzIEZvcm1BcnJheTtcbiAgICAgIC8vIGNyZWRzLnB1c2godGhpcy5mYi5ncm91cChmaWVsZHNDdHJscykpO1xuXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGRzQ3RybHNcIixmaWVsZHNDdHJscyk7XG5cbiAgICAgIC8vIHRoaXMuZm9ybURhdGEgPSAgdGhpcy5maWVsZHM7XG5cbiAgICB9XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gICAgLy8gdGhpcy5maWVsZHNcbiAgICAvLyB0aGlzLmZvcm1CdWlsZCgpO1xuICAgIHRoaXMuZmllbGRzLnB1c2gob2JqKTtcbiAgICBsZXQgY29tcGxldGVEYXRhID0ge1xuICAgICAgcXVlc3Rpb25MaXN0OnRoaXMuZmllbGRzLFxuICAgICAgY3JpdGVyaWFMaXN0OnRoaXMuY3JpdGVyaWFMaXN0XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjb21wbGV0ZURhdGFcIixjb21wbGV0ZURhdGEpO1xuICAgIHRoaXMuc2VuZFRvU2VydmljZShjb21wbGV0ZURhdGEpO1xuXG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdCh0cm5hc2Zvcm1EYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKFwiZmllbGRzIGNvbnRyb2xzXCIsIHRoaXMuZm9ybSk7XG5cbiAgfVxuXG5cbiAgZm9ybUJ1aWxkKGRhdGEpIHtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcbiAgICB0aGlzLmZpZWxkcyA9IFtdO1xuXG4gICAgdGhpcy5maWVsZHMuc2xpY2UodGhpcy5maWVsZHMubGVuZ3RoLCAwKTtcbiAgICBmb3JtRGF0YSA9IGRhdGE7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gICAgZm9yIChsZXQgZiBvZiBmb3JtRGF0YSkge1xuICAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGZbJ2ZpZWxkJ10pO1xuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9wdHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgb3B0IG9mIGZbJ29wdGlvbnMnXSkge1xuICAgICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG5cbiAgICB0aGlzLmZpZWxkcyA9IGZvcm1EYXRhO1xuICAgIGxldCBvYmogPSB7XG4gICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICBkYXRhOiBmb3JtRGF0YVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5maWVsZHMtLS0tLS0tXCIsIHRoaXMuZmllbGRzKTtcbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG5cblxuICAgIC8vIHRoaXMuZmllbGRzID0gZGF0YTtcblxuICAgIC8vIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZHNcIiwgZGF0YSk7XG4gICAgLy8gZm9yIChsZXQgZiBvZiBkYXRhKSB7XG5cblxuICAgIC8vICAgaWYgKGYudHlwZSAhPSAnY2hlY2tib3gnKSB7XG5cbiAgICAvLyAgICAgZmllbGRzQ3RybHNbZi5uYW1lXSA9IG5ldyBGb3JtQ29udHJvbChmLnZhbHVlIHx8ICcnKVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgbGV0IG9wdHMgPSB7fTtcbiAgICAvLyAgICAgZm9yIChsZXQgb3B0IG9mIGYub3B0aW9ucykge1xuXG4gICAgLy8gICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQudmFsdWUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICB9XG5cbiAgb25TdWJtaXQodmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIHRoaXMuZmllbGRzKTtcblxuICAgIC8vIHRoaXMucXVlc3Rpb25MaXN0LmVtaXQodGhpcy5maWVsZHMpO1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGFjdGlvbjogXCJhbGxcIixcbiAgICAgIGRhdGE6IHRoaXMuZmllbGRzXG4gICAgfVxuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQob2JqKTtcbiAgfVxuXG5cbiAgLy8gKGV2ZW50KSB7XG4gIC8vICAgY29uc29sZS5sb2coJ0VsZW1lbnQgd2FzIGRyYWdnZWQnLCBldmVudCk7XG4gIC8vIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gIH1cbiAgb25GaWVsZFVwZGF0ZSgkZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImV2ZW50RGF0YSBzc3Nzc3NzLS0tLS0tXCIsICRldmVudC5kYXRhKTtcblxuICAgIGxldCBldmVudE9iaiA9ICRldmVudFxuICAgIGxldCB0cm5hc2Zvcm1EYXRhID0ge307XG4gICAgaWYgKCRldmVudC5hY3Rpb24gPT0gXCJjb3B5XCIpIHtcbiAgICAgIHRoaXMub25Ecm9wKCRldmVudC5kYXRhLCBcImNvcHlcIik7XG4gICAgfSBlbHNlIGlmICgkZXZlbnQuYWN0aW9uID09IFwiZGVsZXRlXCIpIHtcbiAgICAgIHRybmFzZm9ybURhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ2RlbGV0ZScsXG4gICAgICAgIGRhdGE6ICRldmVudFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImNoaWxkRHJvcGVkXCIpIHtcblxuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmllbGRzJywgdGhpcy5maWVsZHMpO1xuXG4gICAgICB2YXIgZmluYWwgPSB0aGlzLmZpZWxkcy5maWx0ZXIoXG4gICAgICAgIGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmZpZWxkID09PSBldmVudE9iai5kYXRhLm11dGlTZWxlY3QuZmllbGQpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudE9iai5kYXRhLm11dGlTZWxlY3QuZmllbGQsJz09PT09PSB0aGlzLmZpZWxkcyAgPT09PT0nLGl0ZW0pO1xuXG4gICAgICAgICAgICAvLyBpZihpdGVtLmNoaWxkKXtcbiAgICAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLmdldFRvb2xPYmooJGV2ZW50LmRhdGEucmVzcG9uc2VUeXBlLCBpdGVtLmNoaWxkLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW0uY2hpbGQucHVzaChvYmopO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGZpbmFsLnB1c2gob2JqKTtcblxuXG4gICAgICAvLyB0aGlzLmZpZWxkc1xuXG4gICAgICBjb25zb2xlLmxvZygnZmluYWwgcmVzdWx0JywgZmluYWwpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1haW4gb2JqXCIsIG9iaik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdHJuYXNmb3JtRGF0YSA9IHtcbiAgICAgICAgYWN0aW9uOiAndXBkYXRlJyxcbiAgICAgICAgZGF0YTogSlNPTi5wYXJzZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQodHJuYXNmb3JtRGF0YSk7XG4gIH1cbn1cbiJdfQ==