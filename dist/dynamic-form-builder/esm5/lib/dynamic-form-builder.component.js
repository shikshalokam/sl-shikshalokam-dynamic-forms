/**
 * @fileoverview added by tsickle
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
        this.showQuestionBlock = true;
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
        this.showQuestionBlock = false;
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
                "icon": "text_format"
            }, {
                "responseType": "number",
                "icon": "indeterminate_check_box"
            }, {
                "responseType": "radio",
                "icon": "radio_button_checked"
            },
            {
                "responseType": "checkbox",
                "icon": "check_box"
            },
            {
                "responseType": "dropdown",
                "icon": "arrow_drop_down_circle"
            }, {
                "responseType": "date",
                "icon": "date_range"
            }, {
                "responseType": "slider",
                "icon": "date_range"
            },
            {
                "responseType": "matrix",
                "icon": "date_range"
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
        if (action === void 0) { action = ""; }
        var e_1, _a, e_2, _b;
        this.showQuestionBlock = false;
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
        if ($event.action == "addnew") {
            this.onDrop($event.data.element);
        }
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
                    template: "<style>\n  p {\n      font-family: Lato;\n    }\n    .noPadding {\n        padding: 0px;\n    }\n    .margin-5 {\n        margin-top:5%;\n    }\n    .element {\n      border: 1px solid midnightblue;\n    list-style: none;\n    padding: 10px;\n    margin-bottom: 10px;\n    color: midnightblue;\n    width: 100%;\n    text-align: left;\n    text-transform: capitalize;\n  }\n  .element-old {\n    border: 1px solid #ccc;\n    padding: 10px;\n    margin-bottom: 10px;\n    color: #333;\n    text-align: left;\n    text-transform: capitalize;\n  }\n\n    .element span {\n      text-transform: uppercase !important;\n    }\n    .form-group {\n        margin-bottom: 0.5rem;\n        border: 1px solid #ece7e7;\n    }\n    .cursor-pntr {\n        cursor: pointer;\n    }\n\n    .showQBlock {\n      background: #a5f1d7;\n      padding: 50px;\n      opacity: 0.75;\n      min-height: 390px;\n    }\n    \n    .start-create {\n      width: 50%;\n      margin:auto;\n    }\n    .start-create:hover .add-qicons{\n      display:block;\n    }\n    .element i.material-icons {\n      vertical-align: middle;\n      float: right;\n    }\n    .add-qicons{\n     \n      // background: #d9d9f9;\n      padding: 5px;\n      text-align: center;\n      width:100%\n      margin: auto;\n      // box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);\n    }\n    \n  </style>\n  <div class=\"col-sm-12\">\n      \n\n    <div class=\"col-sm-12 noPadding\">\n    <div class=\"card showQBlock\" *ngIf=\"showQuestionBlock\">\n\n      <div>\n        <div class=\"start-create\">\n         <h2 class=\"text-center\" ><a class=\"start-create\">Start Creating a Question</a></h2>\n         <div class=\"add-qicons\">\n              <div class=\"col-sm-6\"  *ngFor=\"let item of jsonData;let i = index\">\n                <div *ngIf=\"i <= 4\" class=\"element\"   (click)=\"onDrop(item.responseType)\">\n                  <span  >\n                  <i class=\"material-icons\">{{ item.icon }}</i>{{ item.responseType }}\n                  </span>\n                </div>\n                <div *ngIf=\"i > 4\" class=\"element\" (click)=\"onDrop(item.responseType)\">\n                  <span   >\n                  <i class=\"material-icons\">{{ item.icon }}</i>{{ item.responseType }}\n                  </span>\n                </div>\n              </div>\n              </div>\n         </div>\n      </div>\n\n    </div>\n    <div class=\"card\" *ngIf=\"fields.length > 0 || !showQuestionBlock\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\" style=\"padding-top:25px\" *ngIf=\"!showQuestionBlock\">\n          \n          <div  class=\"col-md-12\">\n            <!-- <dynamic-form-builder [fields]=\"getFields()\"></dynamic-form-builder> -->\n      \n            <span *ngFor=\"let item of jsonData\" style =\"padding:5px\">\n              <span [dndDraggable]=\"item\"  class=\"element\"  >{{ item.responseType }}</span>\n              </span>\n\n              <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement(item.responseType)\" >Number</div> -->\n            <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement('input')\" >Input</div>\n            <div class=\"col-sm-12 element\" (click)=\"addFormElement('number')\" >Number</div> -->\n\n          </div>\n      </div>\n\n\n      \n      <div class=\"col-sm-12\">\n      </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFHL0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBSTNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEM7SUFpSkUscUNBQW9CLElBQWdCLEVBQzFCLFlBQXlCLEVBQ3pCLEVBQWUsRUFDZixZQUF1QztRQUg3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBMkI7O1FBVnZDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUl4QyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBQzFCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQU92Qiw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9CLEtBQUs7UUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FB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Q2QsK0NBQWM7O0lBQ2QsaURBQWdCOztJQUdoQiw2Q0FBaUM7O0lBRWpDLHNEQUErQzs7SUFDL0MseURBQXdCOztJQUN4QixtREFBa0I7O0lBRWxCLDZDQUEwQjs7SUFDMUIsd0RBQXlCOzs7OztJQUViLDJDQUF3Qjs7Ozs7SUFDbEMsbURBQWlDOzs7OztJQUNqQyx5Q0FBdUI7Ozs7O0lBQ3ZCLG1EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRG5kRHJvcEV2ZW50IH0gZnJvbSAnbmd4LWRyYWctZHJvcCdcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UnO1xuXG4vLyBpbXBvcnQgIHsgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWR5bmFtaWMtZm9ybS1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGA8c3R5bGU+XG4gIHAge1xuICAgICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgfVxuICAgIC5ub1BhZGRpbmcge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5tYXJnaW4tNSB7XG4gICAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgfVxuICAgIC5lbGVtZW50IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG1pZG5pZ2h0Ymx1ZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogbWlkbmlnaHRibHVlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbiAgLmVsZW1lbnQtb2xkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG5cbiAgICAuZWxlbWVudCBzcGFuIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2U3ZTc7XG4gICAgfVxuICAgIC5jdXJzb3ItcG50ciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuc2hvd1FCbG9jayB7XG4gICAgICBiYWNrZ3JvdW5kOiAjYTVmMWQ3O1xuICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICBtaW4taGVpZ2h0OiAzOTBweDtcbiAgICB9XG4gICAgXG4gICAgLnN0YXJ0LWNyZWF0ZSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWFyZ2luOmF1dG87XG4gICAgfVxuICAgIC5zdGFydC1jcmVhdGU6aG92ZXIgLmFkZC1xaWNvbnN7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICAuZWxlbWVudCBpLm1hdGVyaWFsLWljb25zIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIC5hZGQtcWljb25ze1xuICAgICBcbiAgICAgIC8vIGJhY2tncm91bmQ6ICNkOWQ5Zjk7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDoxMDAlXG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAvLyBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcbiAgICB9XG4gICAgXG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIFxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBub1BhZGRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaG93UUJsb2NrXCIgKm5nSWY9XCJzaG93UXVlc3Rpb25CbG9ja1wiPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhcnQtY3JlYXRlXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiID48YSBjbGFzcz1cInN0YXJ0LWNyZWF0ZVwiPlN0YXJ0IENyZWF0aW5nIGEgUXVlc3Rpb248L2E+PC9oMj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtcWljb25zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBqc29uRGF0YTtsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImkgPD0gNFwiIGNsYXNzPVwiZWxlbWVudFwiICAgKGNsaWNrKT1cIm9uRHJvcChpdGVtLnJlc3BvbnNlVHlwZSlcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3sgaXRlbS5pY29uIH19PC9pPnt7IGl0ZW0ucmVzcG9uc2VUeXBlIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImkgPiA0XCIgY2xhc3M9XCJlbGVtZW50XCIgKGNsaWNrKT1cIm9uRHJvcChpdGVtLnJlc3BvbnNlVHlwZSlcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7IGl0ZW0uaWNvbiB9fTwvaT57eyBpdGVtLnJlc3BvbnNlVHlwZSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdJZj1cImZpZWxkcy5sZW5ndGggPiAwIHx8ICFzaG93UXVlc3Rpb25CbG9ja1wiPlxuICAgICAgICAgIDxkaXYgZG5kRHJvcHpvbmUgY2xhc3M9XCJjYXJkLWJvZHlcIiAoZG5kRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIiBzdHlsZT1cInBhZGRpbmctdG9wOjI1cHhcIiAqbmdJZj1cIiFzaG93UXVlc3Rpb25CbG9ja1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8IS0tIDxkeW5hbWljLWZvcm0tYnVpbGRlciBbZmllbGRzXT1cImdldEZpZWxkcygpXCI+PC9keW5hbWljLWZvcm0tYnVpbGRlcj4gLS0+XG4gICAgICBcbiAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBpdGVtIG9mIGpzb25EYXRhXCIgc3R5bGUgPVwicGFkZGluZzo1cHhcIj5cbiAgICAgICAgICAgICAgPHNwYW4gW2RuZERyYWdnYWJsZV09XCJpdGVtXCIgIGNsYXNzPVwiZWxlbWVudFwiICA+e3sgaXRlbS5yZXNwb25zZVR5cGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudChpdGVtLnJlc3BvbnNlVHlwZSlcIiA+TnVtYmVyPC9kaXY+IC0tPlxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAoY2xpY2spPVwiYWRkRm9ybUVsZW1lbnQoJ2lucHV0JylcIiA+SW5wdXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudCgnbnVtYmVyJylcIiA+TnVtYmVyPC9kaXY+IC0tPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIDwvZGl2PmAsXG4gIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgdW5zdWJjcmliZTogYW55O1xuICBqc29uRGF0YTogYW55O1xuICBmb3JtRGF0YTogYW55O1xuICBwYWdlTnVtYmVyOiBhbnk7XG5cbiAgLy8gQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgZXZlbnRzOiBPYnNlcnZhYmxlPGFueT47XG4gIC8vIEBPdXRwdXQoKSBxdWVzdGlvbkxpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBxdWVzdGlvblRyaWdnZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV2ZW50c1N1YnNjcmlwdGlvbjogYW55O1xuICBjcml0ZXJpYUxpc3Q6IGFueTtcblxuICBwdWJsaWMgZmllbGRzOiBhbnlbXSA9IFtdO1xuICBzaG93UXVlc3Rpb25CbG9jayA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGR5bmFtaWNTZXJ2ZTogRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZVxuICApIHtcbiAgICAvLyB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAvLyAgIGZpZWxkczogdGhpcy5mYi5hcnJheShbXSksXG4gICAgLy8gfSlcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGZpZWxkczogbmV3IEZvcm1Db250cm9sKEpTT04uc3RyaW5naWZ5KHRoaXMuZmllbGRzKSlcbiAgICB9KVxuXG4gICAgdGhpcy51bnN1YmNyaWJlID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2codXBkYXRlKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzID0gSlNPTi5wYXJzZSh1cGRhdGUuZmllbGRzKTtcbiAgICB9KTtcbiAgfVxuXG5cblxuICBzaG93UUJsb2NrKCkge1xuICAgIHRoaXMuc2hvd1F1ZXN0aW9uQmxvY2sgPSBmYWxzZTtcbiAgfVxuXG4gIGdldENyaXRlcmlhKCkge1xuICAgIHJldHVybiB0aGlzLmNyaXRlcmlhTGlzdDtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyaXRlcmlhTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxpbmcgZnJvbSBwYXJlbnQgd2l0aCBkYXRhXCIsIGRhdGEpO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgLy8gbGV0IGR0ID0gZGF0YTtcbiAgICAgICAgLy8gdGhpcy5mb3JtQnVpbGQoZHQpO1xuICAgICAgICB0aGlzLmNyaXRlcmlhTGlzdCA9IGRhdGEuY3JpdGVyaWFMaXN0O1xuICAgICAgICBsZXQgZHQgPSBkYXRhWydxdWVzdGlvbkFycmF5J107XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJcIilcbiAgICAgICAgdGhpcy5mb3JtQnVpbGQoZHQpO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZURhdGEgPSB7XG4gICAgICAgICAgcXVlc3Rpb25MaXN0OiBkYXRhWydxdWVzdGlvbkFycmF5J10sXG4gICAgICAgICAgY3JpdGVyaWFMaXN0OiBkYXRhLmNyaXRlcmlhTGlzdFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZURhdGFcIiwgY29tcGxldGVEYXRhKTtcbiAgICAgICAgdGhpcy5zZW5kVG9TZXJ2aWNlKGNvbXBsZXRlRGF0YSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgICAgIGRhdGE6IHRoaXMuZmllbGRzXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ0byBnZXQgYWxsXCIsIHRoaXMuZmllbGRzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3JtRGF0YSA9IFtdO1xuICAgIHRoaXMuanNvbkRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwidGV4dFwiLFxuICAgICAgICBcImljb25cIjogXCJ0ZXh0X2Zvcm1hdFwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwiaWNvblwiOiBcImluZGV0ZXJtaW5hdGVfY2hlY2tfYm94XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgICBcImljb25cIjogXCJyYWRpb19idXR0b25fY2hlY2tlZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICAgIFwiaWNvblwiOiBcImNoZWNrX2JveFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRyb3Bkb3duXCIsXG4gICAgICAgIFwiaWNvblwiOiBcImFycm93X2Ryb3BfZG93bl9jaXJjbGVcIlxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRhdGVcIixcbiAgICAgICAgXCJpY29uXCI6IFwiZGF0ZV9yYW5nZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwic2xpZGVyXCIsXG4gICAgICAgIFwiaWNvblwiOiBcImRhdGVfcmFuZ2VcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJtYXRyaXhcIixcbiAgICAgICAgXCJpY29uXCI6IFwiZGF0ZV9yYW5nZVwiXG4gICAgICB9XG4gICAgXVxuICB9XG4gIG9uVXBsb2FkKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuXG4gIGdldEZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHM7XG4gIH1cblxuICBuZ0Rpc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YmNyaWJlKCk7XG4gIH1cblxuICBzZW5kVG9TZXJ2aWNlKGRhdGEpOiB2b2lkIHtcbiAgICAvLyBzZW5kIG1lc3NhZ2UgdG8gc3Vic2NyaWJlcnMgdmlhIG9ic2VydmFibGUgc3ViamVjdFxuICAgIHRoaXMuZHluYW1pY1NlcnZlLnNlbmREYXRhKGRhdGEpO1xuICB9XG5cbiAgZ2V0VG9vbE9iaihlbGUsIGxlbikge1xuXG4gICAgbGV0IG9iaiA9IHtcblxuICAgIH1cbiAgICBpZiAoZWxlID09ICd0ZXh0Jykge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgXCJsYWJlbFwiOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBlbnRlciB5b3VyIHF1ZXN0aW9uIGhlcmVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSAnbnVtYmVyJykge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgZW50ZXIgeW91ciBxdWVzdGlvbiBoZXJlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gJ3JhZGlvJykge1xuICAgICAgb2JqID0ge1xuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnTGFiZWwgMScgfSxcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjInLCBsYWJlbDogJ0xhYmVsIDEnIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09IFwiY2hlY2tib3hcIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdvcHRpb24gMScgfSxcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjInLCBsYWJlbDogJ29wdGlvbiAyJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSBcImRyb3Bkb3duXCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgdmFsdWU6ICdvcHRpb24xJyxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ09wdGlvbiAxJyB9LFxuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDInIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChlbGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhEYXRlXCI6IFwiXCIsXG4gICAgICAgICAgXCJtaW5EYXRlXCI6IFwiXCIsXG5cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSAnbWF0cml4Jykge1xuICAgICAgaWYgKGVsZSA9PSAnY2hpbGREcm9wZWQnKSB7XG4gICAgICAgIGxldCBjaGlsZGRhdGEgPSB7XG4gICAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IGVsZS50eXBlLFxuICAgICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJjaGlsZFwiOiBbXSxcbiAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGFkZCBDaGlsZCdzIGhlcmVcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmaW5hbGNoaWxkID0gW107XG5cbiAgICAgIGZpbmFsY2hpbGQucHVzaCgpXG5cblxuICAgICAgb2JqID0ge1xuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwibWF0cml4XCIsXG4gICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwiY2hpbGRcIjogW10sXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgYWRkIENoaWxkJ3MgaGVyZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2UsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pblwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhEYXRlXCI6IFwiXCIsXG4gICAgICAgICAgXCJtaW5EYXRlXCI6IFwiXCIsXG5cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgb25Ecm9wKGVsZSwgYWN0aW9uID0gXCJcIikge1xuXG4gICAgdGhpcy5zaG93UXVlc3Rpb25CbG9jayA9ZmFsc2U7XG4gICAgY29uc29sZS5sb2coXCJkcm9wIGVsZVwiLCBlbGUpO1xuICAgIGlmIChlbGUuZGF0YSkge1xuICAgICAgZWxlID0gZWxlLmRhdGEucmVzcG9uc2VUeXBlXG4gICAgfVxuICAgIGxldCBsZW4gPSB0aGlzLmZpZWxkcy5sZW5ndGggKyAxO1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAoYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICBsZXQgY29weU9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogZWxlLnR5cGUsXG4gICAgICAgIFwibGFiZWxcIjogZWxlLmxhYmVsLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IGVsZS5wbGFjZWhvbGRlcixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBlbGUudmFsaWRhdGlvbnMsXG4gICAgICAgIFwib3B0aW9uc1wiOiBlbGUub3B0aW9ucyxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBlbGUuZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICAgIG9iaiA9IGNvcHlPYmo7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgIG9iaiA9IHRoaXMuZ2V0VG9vbE9iaihlbGUsIGxlbik7XG5cblxuXG4gICAgfVxuXG5cbiAgICBsZXQgZWxlbSA9IHRoaXMuZmllbGRzO1xuICAgIGxldCB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgYWN0aW9uOiAnYWRkJyxcbiAgICAgIGRhdGE6IG9ialxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRyYW5zZlwiLCB0cm5hc2Zvcm1EYXRhKTtcbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuXG4gICAgdGhpcy5mb3JtRGF0YS5wdXNoKG9iaik7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLVwiLCBvYmopO1xuICAgIGZvciAobGV0IGYgb2YgdGhpcy5mb3JtRGF0YSkge1xuXG5cbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGZbJ2ZpZWxkJ10pO1xuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBsZXQgb3B0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG5cbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IGNyZWRzID0gdGhpcy5mb3JtLmNvbnRyb2xzLmZpZWxkcyBhcyBGb3JtQXJyYXk7XG4gICAgICAvLyBjcmVkcy5wdXNoKHRoaXMuZmIuZ3JvdXAoZmllbGRzQ3RybHMpKTtcblxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZpZWxkc0N0cmxzXCIsZmllbGRzQ3RybHMpO1xuXG4gICAgICAvLyB0aGlzLmZvcm1EYXRhID0gIHRoaXMuZmllbGRzO1xuXG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIC8vIHRoaXMuZmllbGRzXG4gICAgLy8gdGhpcy5mb3JtQnVpbGQoKTtcbiAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG4gICAgbGV0IGNvbXBsZXRlRGF0YSA9IHtcbiAgICAgIHF1ZXN0aW9uTGlzdDogdGhpcy5maWVsZHMsXG4gICAgICBjcml0ZXJpYUxpc3Q6IHRoaXMuY3JpdGVyaWFMaXN0XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjb21wbGV0ZURhdGFcIiwgY29tcGxldGVEYXRhKTtcbiAgICB0aGlzLnNlbmRUb1NlcnZpY2UoY29tcGxldGVEYXRhKTtcblxuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQodHJuYXNmb3JtRGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZpZWxkcyBjb250cm9sc1wiLCB0aGlzLmZvcm0pO1xuXG4gIH1cblxuXG4gIGZvcm1CdWlsZChkYXRhKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG4gICAgdGhpcy5maWVsZHMgPSBbXTtcblxuICAgIHRoaXMuZmllbGRzLnNsaWNlKHRoaXMuZmllbGRzLmxlbmd0aCwgMCk7XG4gICAgZm9ybURhdGEgPSBkYXRhO1xuICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIGZvciAobGV0IGYgb2YgZm9ybURhdGEpIHtcbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImYudHlwZVwiLCBmWydmaWVsZCddKTtcbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUNvbnRyb2woZlsndmFsdWUnXSB8fCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvcHRzID0ge307XG4gICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4gICAgdGhpcy5maWVsZHMgPSBmb3JtRGF0YTtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgZGF0YTogZm9ybURhdGFcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGRzLS0tLS0tLVwiLCB0aGlzLmZpZWxkcyk7XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuXG5cbiAgICAvLyB0aGlzLmZpZWxkcyA9IGRhdGE7XG5cbiAgICAvLyBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGRzXCIsIGRhdGEpO1xuICAgIC8vIGZvciAobGV0IGYgb2YgZGF0YSkge1xuXG5cbiAgICAvLyAgIGlmIChmLnR5cGUgIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgLy8gICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woZi52YWx1ZSB8fCAnJylcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGxldCBvcHRzID0ge307XG4gICAgLy8gICAgIGZvciAobGV0IG9wdCBvZiBmLm9wdGlvbnMpIHtcblxuICAgIC8vICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LnZhbHVlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgfVxuXG4gIG9uU3VibWl0KHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLCB0aGlzLmZpZWxkcyk7XG5cbiAgICAvLyB0aGlzLnF1ZXN0aW9uTGlzdC5lbWl0KHRoaXMuZmllbGRzKTtcblxuICAgIGxldCBvYmogPSB7XG4gICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICBkYXRhOiB0aGlzLmZpZWxkc1xuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG4gIH1cblxuXG4gIC8vIChldmVudCkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdFbGVtZW50IHdhcyBkcmFnZ2VkJywgZXZlbnQpO1xuICAvLyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICB9XG4gIG9uRmllbGRVcGRhdGUoJGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJldmVudERhdGEgc3Nzc3Nzcy0tLS0tLVwiLCAkZXZlbnQuZGF0YSk7XG5cbiAgICBsZXQgZXZlbnRPYmogPSAkZXZlbnRcbiAgICBsZXQgdHJuYXNmb3JtRGF0YSA9IHt9O1xuICAgIGlmKCRldmVudC5hY3Rpb249PVwiYWRkbmV3XCIpe1xuICAgICAgdGhpcy5vbkRyb3AoJGV2ZW50LmRhdGEuZWxlbWVudCk7XG4gICAgfVxuICAgIGlmICgkZXZlbnQuYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICB0aGlzLm9uRHJvcCgkZXZlbnQuZGF0YSwgXCJjb3B5XCIpO1xuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImRlbGV0ZVwiKSB7XG4gICAgICB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgICBhY3Rpb246ICdkZWxldGUnLFxuICAgICAgICBkYXRhOiAkZXZlbnRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCRldmVudC5hY3Rpb24gPT0gXCJjaGlsZERyb3BlZFwiKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpZWxkcycsIHRoaXMuZmllbGRzKTtcblxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5maWVsZHMuZmlsdGVyKFxuICAgICAgICBpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5maWVsZCA9PT0gZXZlbnRPYmouZGF0YS5tdXRpU2VsZWN0LmZpZWxkKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnRPYmouZGF0YS5tdXRpU2VsZWN0LmZpZWxkLCAnPT09PT09IHRoaXMuZmllbGRzICA9PT09PScsIGl0ZW0pO1xuXG4gICAgICAgICAgICAvLyBpZihpdGVtLmNoaWxkKXtcbiAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLmdldFRvb2xPYmooJGV2ZW50LmRhdGEucmVzcG9uc2VUeXBlLCBpdGVtLmNoaWxkLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBpdGVtLmNoaWxkLnB1c2gob2JqKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBmaW5hbC5wdXNoKG9iaik7XG5cblxuICAgICAgLy8gdGhpcy5maWVsZHNcblxuICAgICAgY29uc29sZS5sb2coJ2ZpbmFsIHJlc3VsdCcsIGZpbmFsKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJtYWluIG9ialwiLCBvYmopO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRybmFzZm9ybURhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIGRhdGE6IEpTT04ucGFyc2UoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuICB9XG59XG4iXX0=