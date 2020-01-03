import { __values } from 'tslib';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Component, EventEmitter, Output, Input, ViewChild, NgModule, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatDialog, MatButtonModule, MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatSelectModule, MatTooltipModule, MatTabsModule, MatCardModule, MatDialogModule, MatStepperModule, MatTableModule, MatExpansionModule, MatPaginatorModule, MatNativeDateModule, MatToolbarModule } from '@angular/material';
import { DndModule } from 'ngx-drag-drop';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @Injectable({
//   // providedIn: 'root'
// })
var  
// @Injectable({
//   // providedIn: 'root'
// })
DynamicFormBuilderService = /** @class */ (function () {
    function DynamicFormBuilderService() {
        this.communicateSubject = new Subject();
        // private messageSource = new BehaviorSubject('default message');
        // currentMessage = this.messageSource.asObservable();
        this.list = [];
        this.all = [];
        this.criteriaList = [];
    }
    /**
     * @return {?}
     */
    DynamicFormBuilderService.prototype.currentMessage = /**
     * @return {?}
     */
    function () {
        return this.list;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DynamicFormBuilderService.prototype.sendData = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        console.log("obj", obj);
        this.list = obj;
        this.communicateSubject.next();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DynamicFormBuilderService.prototype.setPageNumber = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.pagelist = data;
        this.communicateSubject.next();
    };
    /**
     * @return {?}
     */
    DynamicFormBuilderService.prototype.getPageNumbers = /**
     * @return {?}
     */
    function () {
        return this.pagelist;
    };
    // setQuestionList(list){
    //   this.list = list;
    // }
    // changeMessage(message: string) {
    //   this.messageSource.next(message);
    // }
    // setQuestionList(list){
    //   this.list = list;
    // }
    // changeMessage(message: string) {
    //   this.messageSource.next(message);
    // }
    /**
     * @return {?}
     */
    DynamicFormBuilderService.prototype.getALl = 
    // setQuestionList(list){
    //   this.list = list;
    // }
    // changeMessage(message: string) {
    //   this.messageSource.next(message);
    // }
    /**
     * @return {?}
     */
    function () {
        // let all = {
        //   questionList:[]
        // }
        this.all = {
            criteriaList: this.criteriaList,
            questionList: this.list
        };
        console.log("executing in service", this.all);
        // return this.communicateSubject.asObservable();
        return this.all;
    };
    /**
     * @return {?}
     */
    DynamicFormBuilderService.prototype.getQuestions = /**
     * @return {?}
     */
    function () {
        return this.list;
    };
    /**
     * @param {?} list
     * @return {?}
     */
    DynamicFormBuilderService.prototype.setCriteria = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this.criteriaList = list;
    };
    /**
     * @param {?} questionEle
     * @return {?}
     */
    DynamicFormBuilderService.prototype.updateQuestion = /**
     * @param {?} questionEle
     * @return {?}
     */
    function (questionEle) {
        console.log("update question", questionEle);
        this.list = this.list['questionList'].filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.field == questionEle.field) {
                return questionEle;
            }
            else {
                return item;
            }
        }));
    };
    return DynamicFormBuilderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.getCriteria();
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
                console.log(" eventsSubscription completeData", completeData);
                _this.sendToService(completeData);
            }
            else {
                /** @type {?} */
                var pages = _this.dynamicServe.getPageNumbers();
                /** @type {?} */
                var obj = {
                    action: "all",
                    data: _this.fields,
                    pages: pages
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
                "field": len + "question",
                "type": "number",
                "position": len,
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
                field: len + "question",
                "position": len,
                type: 'radio',
                name: len + ". question",
                label: "Question",
                description: "",
                required: true,
                "validations": {
                    "required": true,
                    "minLenght": "",
                    "maxLength": ""
                },
                options: [
                    { key: 'R1', label: 'Label 1' },
                    { key: 'R2', label: 'Label 2' }
                ]
            };
        }
        else if (ele == "checkbox") {
            obj = {
                field: len + "question",
                type: "checkbox",
                "position": len,
                name: len + ". question",
                label: "Question",
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
                "position": len,
                name: len + ". question",
                label: "Question",
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
                "position": len,
                name: len + ". question",
                label: "Question",
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
                    field: len + "question",
                    "type": ele.type,
                    "position": len,
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
            obj = {
                "field": len + "question",
                "type": "matrix",
                "label": "Question",
                "position": len,
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
                "position": len,
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
                "description": ele.description,
                "copied": true
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
        this.formData.push(obj);
        /** @type {?} */
        var fieldsCtrls = {};
        this.form = new FormGroup(fieldsCtrls);
        console.log("------", obj);
        try {
            for (var _c = __values(this.formData), _d = _c.next(); !_d.done; _d = _c.next()) {
                var f = _d.value;
                if (f['type'] != 'checkbox') {
                    console.log("f.type", f['field']);
                    fieldsCtrls[f['field']] = new FormControl(f['value'] || '');
                }
                else {
                    /** @type {?} */
                    var opts = {};
                    try {
                        for (var _e = __values(f['options']), _f = _e.next(); !_f.done; _f = _e.next()) {
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
        // this.questionTrigger.emit(trnasformData);
        // this.questionTrigger.emit(trnasformData);
        // console.log("fields controls", this.form);
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
            for (var formData_1 = __values(formData), formData_1_1 = formData_1.next(); !formData_1_1.done; formData_1_1 = formData_1.next()) {
                var f = formData_1_1.value;
                if (f['type'] != 'checkbox') {
                    console.log("f.type", f['field']);
                    fieldsCtrls[f['field']] = new FormControl(f['value'] || '');
                }
                else {
                    /** @type {?} */
                    var opts = {};
                    try {
                        for (var _c = __values(f['options']), _d = _c.next(); !_d.done; _d = _c.next()) {
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
        console.log("eventData sssssss------", $event);
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
        else if ($event.action == 'childDelete') {
            trnasformData = {
                action: 'childDelete',
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
                data: $event
            };
        }
        this.questionTrigger.emit(trnasformData);
    };
    DynamicFormBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-dynamic-form-builder',
                    template: "<style>\n  p {\n      font-family: Lato;\n    }\n    .noPadding {\n        padding: 0px;\n    }\n    .margin-5 {\n        margin-top:5%;\n    }\n    .element {\n      border: 1px solid midnightblue;\n    list-style: none;\n    padding: 10px;\n    margin-bottom: 10px;\n    color: midnightblue;\n    width: 100%;\n    text-align: left;\n    cursor: pointer;  \n    text-transform: capitalize;\n  }\n  .element-old {\n    border: 1px solid #ccc;\n    padding: 10px;\n    margin-bottom: 10px;\n    color: #333;\n    text-align: left;\n    text-transform: capitalize;\n  }\n\n   .toolbar {\n    border: 1px solid midnightblue;\n    list-style: none;\n    padding: 10px;\n    margin-bottom: 10px;\n    color: midnightblue;\n    width: 100%;\n    text-align: left;\n    cursor: pointer;\n    text-transform: capitalize;\n   }\n    .element span {\n      text-transform: uppercase !important;\n    }\n    .form-group {\n        margin-bottom: 0.5rem;\n        border: 1px solid #ece7e7;\n    }\n    .cursor-pntr {\n        cursor: pointer;\n    }\n\n    .showQBlock {\n      background: #a5f1d7;\n      padding: 50px;\n      opacity: 0.75;\n      min-height: 390px;\n    }\n    \n    .start-create {\n      width: 50%;\n      margin:auto;\n      padding:20px;\n    }\n    .start-create:hover .add-qicons{\n      display:block;\n    }\n    .toolbar i.material-icons {\n      vertical-align: middle;\n      padding: 6px;\n    }\n    .element i.material-icons {\n      vertical-align: middle;\n      float: right;\n    }\n    .add-qicons{\n     \n      // background: #d9d9f9;\n      padding: 5px;\n      text-align: center;\n      width:100%\n      margin: auto;\n      // box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);\n    }\n    \n  </style>\n  <div class=\"col-sm-12\">\n      \n\n    <div class=\"col-sm-12 noPadding\">\n    <div class=\"card showQBlock\" *ngIf=\"fields.length <= 0 && showQuestionBlock\">\n\n      <div>\n        <div class=\"start-create\">\n         <h2 class=\"text-center\" ><span class=\"start-create\">Start Creating a Question</span></h2>\n         <div class=\"add-qicons\">\n              <div class=\"col-sm-6\"  *ngFor=\"let item of jsonData;let i = index\">\n                <div *ngIf=\"i <= 4\" class=\"element\"   (click)=\"onDrop(item.responseType)\">\n                  <span  >\n                  <i class=\"material-icons\">{{ item.icon }}</i>{{ item.responseType }}\n                  </span>\n                </div>\n                <div *ngIf=\"i > 4\" class=\"element\" (click)=\"onDrop(item.responseType)\">\n                  <span   >\n                  <i class=\"material-icons\">{{ item.icon }}</i>{{ item.responseType }}\n                  </span>\n                </div>\n              </div>\n              </div>\n         </div>\n      </div>\n\n    </div>\n    <div class=\"card\" *ngIf=\"fields.length > 0 || !showQuestionBlock\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12\" style=\"padding-top:25px\" *ngIf=\"fields.length > 0  || !showQuestionBlock\">\n          \n          <div  class=\"col-md-12\">\n            <!-- <dynamic-form-builder [fields]=\"getFields()\"></dynamic-form-builder> -->\n      \n            <span *ngFor=\"let item of jsonData\" >\n              <span [dndDraggable]=\"item\" (click)=\"onDrop(item.responseType)\"  class=\"toolbar\"  >\n            {{ item.responseType }}   <i class=\"material-icons\">{{ item.icon }}</i>\n             </span>\n              </span>\n\n              <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement(item.responseType)\" >Number</div> -->\n            <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement('input')\" >Input</div>\n            <div class=\"col-sm-12 element\" (click)=\"addFormElement('number')\" >Number</div> -->\n\n          </div>\n      </div>\n\n\n      \n      <div class=\"col-sm-12\">\n      </div>",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicFormBuilderComponent$1 = /** @class */ (function () {
    function DynamicFormBuilderComponent() {
        this.onFieldUpdate = new EventEmitter();
        this.fields = [];
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
    }
    /**
     * @param {?} element
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.addElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var obj = {
            action: "addnew",
            element: element
        };
        this.copyOrDeleteEvent(obj);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.copyOrDeleteEvent = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        debugger;
        console.log('data type', data);
        console.log('this.fields', this.fields);
        if (typeof (data) === 'string') {
            data = JSON.parse(data);
        }
        // let childdata = data;
        // let finaldata = JSON.parse(childdata);
        // console.log(JSON.parse(data),"parse copyEvent occured");
        // let obj = data;
        console.log(data, "copyEvent occured");
        // data.field =(this.fields.length+1)+"question";
        // data.label = (this.fields.length+1)+" question";
        if (data.action == "addnew") {
            /** @type {?} */
            var transferData = {
                action: "addnew",
                data: data
            };
            this.onFieldUpdate.emit(transferData);
        }
        else if (data.action == "copy") {
            console.log(data, "this.form before");
            /** @type {?} */
            var transferData = {
                action: "copy",
                data: data
            };
            this.onFieldUpdate.emit(transferData);
            //  data.field = (this.fields.length+1)+"question";
            //  console.log("data",data)
            // this.formBuild(obj);
        }
        else if (data.action == "delete") {
            // var index = this.fields.indexOf(data);
            // console.log("ind", index);
            this.onFieldUpdate.emit(data);
            // this.fields.splice(index, 1);
            // this.fields = this.fields.filter(function(value, index, arr){
            //   return value!=data;
            // });
            // console.log("evens",evens);
            // this.fields= evens;
            // console.log("this.form",this.form);
            // this.fields.
            // console.log(this.fields.length,"copyEvent occured",evens);
        }
        else if (data.action == "childDelete") {
            // console.log('childDelete', this.fields);
            // var index = this.fields[0].child.indexOf(data);
            // console.log("ind", index);
            this.onFieldUpdate.emit(data);
        }
        else if (data.action == "childDroped") {
            this.onFieldUpdate.emit(data);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.eventFromChild = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.onFieldUpdate.emit(data);
        console.log("data from child  ------- ", data);
    };
    /**
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.formData = this.fields;
        console.log("this.form ---", this.form);
        // this.formBuild();
    };
    DynamicFormBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-form-builder',
                    styles: ["\n      \n  .addElement {\n    display:none;\n  }\n  .add-qicons {\n    display:none;\n    font-size: 17px;\n    width: 60%;\n    margin-left: 40%;\n    background: #a5f1d7;\n    float: left;\n    padding: 0px;\n  }\n  .element {\n    line-height: 26px;\n    font-size: 17px;\n    padding: 6px;\n    margin: 8px;\n    border: 1px solid midnightblue;\n    font-weight: bold;\n    color: midnightblue;\n  }\n  .element i.material-icons {\n    vertical-align: middle;\n    float: right;\n  }\n  .addElement:hover .add-qicons {\n    display:block;\n  }\n  "],
                    template: "\n   \n     <div cdkDropList (cdkDropListDropped)=\"drop($event)\"> <div *ngFor=\"let field of fields\"  cdkDrag>\n          <field-builder *ngIf=\"!field.isDeleted\" [field]=\"field\" [form]=\"form\"  \n          (sendDataToParent)=\"eventFromChild($event)\" (copyOrDeleteEvent)=\"copyOrDeleteEvent($event)\">\n          </field-builder>\n          <div class=\"addElement\">\n          <div style=\"float: right;\n          font-size: 4.5em;\n          color: midnightblue;\n          cursor: pointer;\n          line-height: 46px;\">+</div>\n\n          <div class=\"col add-qicons\">\n              <div class=\"col-sm-6\"  *ngFor=\"let item of jsonData;let i = index\">\n                <div *ngIf=\"i <= 4\" class=\"element\" (click)=\"addElement(item.responseType)\"  >\n                  <span  >\n                  <i class=\"material-icons\">{{ item.icon }}</i>{{ item.responseType }}\n                  </span>\n                </div>\n                <div *ngIf=\"i > 4\" class=\"element\" (click)=\"addElement(item.responseType)\" >\n                  <span   >\n                  <i class=\"material-icons\">{{ item.icon }}</i>{{ item.responseType }}\n                  </span>\n                </div>\n              </div>\n              </div>\n         \n          </div>\n      </div></div>"
                },] },
    ];
    /** @nocollapse */
    DynamicFormBuilderComponent.ctorParameters = function () { return []; };
    DynamicFormBuilderComponent.propDecorators = {
        onFieldUpdate: [{ type: Output }],
        fields: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DynamicFormBuilderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldBuilderComponent = /** @class */ (function () {
    function FieldBuilderComponent(dynamicServe, _snackBar, dialog) {
        this.dynamicServe = dynamicServe;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.sendDataToParent = new EventEmitter();
        this.copyOrDeleteEvent = new EventEmitter();
        this.pages = [{
                label: 'page 1',
                value: 'page 1'
            }, {
                label: 'page 2',
                value: 'page 2'
            }, {
                label: 'page 3',
                value: 'page 3'
            }];
        this.openEdit = false;
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
    // getAll(){
    //   this.subscription = this.dynamicServe.getALl().subscribe(message => { 
    //     console.log("get all info",message);
    //    });
    // }   
    // getAll(){
    //   this.subscription = this.dynamicServe.getALl().subscribe(message => { 
    //     console.log("get all info",message);
    //    });
    // }   
    /**
     * @return {?}
     */
    FieldBuilderComponent.prototype.parentMapping = 
    // getAll(){
    //   this.subscription = this.dynamicServe.getALl().subscribe(message => { 
    //     console.log("get all info",message);
    //    });
    // }   
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log(this.condition, "condition", this.currentSelectedQtn, "selectedOption", this.selectedOption);
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
        if (this.condition) ;
        // 'option':this.selectedOption,
        //       'question':this.currentSelectedQtn
        // this.field.childQnt = this.currentSelectedQtn.field;
        console.log("this.field.validations.relation", this.listOfRelation);
    };
    /**
     * @return {?}
     */
    FieldBuilderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.currentSelectedQtn = { };
        // this.dynamicServe.getALl();
        this.options = [];
        this.validations = {
            'relation': []
        };
        this.field.validations = {
            'relation': []
        };
        this.dynamicServe.setPageNumber(this.pages);
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
        console.log('loadFormElement', item);
        this.allData = this.dynamicServe.getALl();
        console.log(this.allData, " all questions ", this.allData['questionList']);
        this.filtereddata = this.allData['questionList']['questionList'].filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return t.field !== item.field; }));
        this.allData['questionList']['questionList'];
        this.criteriaList = this.allData['criteriaList'];
        console.log('const filtereddata', this.filtereddata);
        // console.log('length', this.filtereddata['questionList'].length);
        // this.dynamicServe.getALl()
        // console.log("item ---", );
        this.activeModelData = "";
        this.label = item.label;
        this.type = item.type;
        this.placeholder = item.placeholder;
        this.options = item.options;
        this.draftCriteriaId = item.draftCriteriaId;
        // this.pages = this.pages
        this.required = item.validations.required;
        this.description = item.description;
        this.pageNumber = item.pageNumber;
        if (item.validations.relation) {
            this.listOfRelation = item.validations.relation;
        }
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
            console.log(this.validations, "this.field", this.required);
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
                description: this.description,
                pageNumber: this.pageNumber,
                draftCriteriaId: this.draftCriteriaId,
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
            // this.field.label = this.label;
            this.field.label = this.label;
            this.field.type = this.type;
            this.field.placeholder = this.placeholder;
            this.field.options = this.options;
            this.field.description = this.description;
            this.field.pageNumber = this.pageNumber;
            this.field.draftCriteriaId = this.draftCriteriaId;
            // this.field.field = this.field.field;
            if (this.type == 'date') {
                this.field.validations.minDate = this.minDate;
                this.field.validations.maxDate = this.maxDate;
                this.field.validations.autoCollect = this.autoCollect;
            }
            else if (this.type == 'slider') {
                this.field.validations.min = this.min;
                this.field.validations.max = this.max;
            }
            // if(this.field.validations.relation){
            if (this.listOfRelation) {
                obj.validations.relation = this.listOfRelation;
                this.field.validations.relation = this.listOfRelation;
            }
            // }
            // this.field.validations
            // console.log(" this.field.validations.required", this.field.validations.required, "sdds", this.required);
            this.field.validations.required = this.required;
            this.field.validations.autoCollect = this.autoCollect;
            console.log(obj, "this.field.validations", this.field.validations);
            /** @type {?} */
            var op = {
                action: "save",
                data: obj
            };
            this.dynamicServe.updateQuestion(this.field);
            this.sendDataToParent.emit(op);
            // this.sendDataToParent.emit(JSON.stringify(obj));
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
        // this.deleteDraftCriteria();
        console.log("delete", this.options);
        // let newArr = [];
        // let optionsArr = this.options.filter(item => {
        // if(item.lable==opt.label && item.key==opt.key){
        // }else{
        // }
        // return (item.label != opt.label && item.key != opt.key)
        // if(item.lable==opt.label && item.key==opt.key){
        // }else{
        //   return true;
        // }
        // })
        this.options.splice(index, 1);
        // this.options = optionsArr;
        console.log("delete new ", this.options);
    };
    /**
     * @return {?}
     */
    FieldBuilderComponent.prototype.AddNewOptions = /**
     * @return {?}
     */
    function () {
        if (this.newOptionLabel != "") {
            this.newOptionKey = 'R' + this.options.length;
            console.log("this.newOption", this.newOptionLabel);
            if (Array.isArray(this.options)) ;
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
        this.copyOrDeleteEvent.emit(newObj);
        console.log("field delete", this.field);
    };
    /**
     * @param {?} data
     * @param {?} value
     * @return {?}
     */
    FieldBuilderComponent.prototype.deleteCondition = /**
     * @param {?} data
     * @param {?} value
     * @return {?}
     */
    function (data, value) {
        // var index = this.listOfRelation.indexOf(value);
        // if (index > -1) {
        this.listOfRelation.splice(value, 1);
        this.getSelectQuestion[0].parentChildren.splice(value, 1);
        // }
        console.log('after delete data', this.listOfRelation);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FieldBuilderComponent.prototype.add = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log(' add data', data);
        /** @type {?} */
        var page = {
            label: 'page' + ' ' + (data.length + 1),
            value: 'page' + ' ' + (data.length + 1),
        };
        this.pages.push(page);
        this.dynamicServe.setPageNumber(this.pages);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FieldBuilderComponent.prototype.eventFromChild = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        console.log('sri==========', $event);
        $event.action = 'childDelete';
        this.copyOrDeleteEvent.emit($event);
    };
    FieldBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'field-builder',
                    template: "\n  <style>\n  .mat-slider-horizontal {\n    min-width: 80% !important;\n  }\n  .example-radio-group {\n    display: flex;\n    flex-direction: block;\n    margin: 15px 0; \n  }\n\n  .mat-form-field {\n    display: block;\n    position: relative;\n    flex: auto;\n    min-width: 0;\n    width: 372px;\n  }\n  .input-group {\n    position: relative;\n     border-collapse: separate;\n     display: block;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  .action-component {\n    padding:10px 10px 0px 0px;\n    right: 0px;\n    cursor: pointer;\n    float: right;\n  \n}\nspan.cursor-pntr {\n  cursor: pointer;\n  padding: 3px;\n}\n.form-control {\n  display: block;\n  visibility: hidden;\n\n}\n.label.col-md-8.form-control-label {\n  text-decoration: underline;\n}\n\n  </style>\n  <div class=\"row\" *ngIf=\"openEdit\" style=\"padding: 15px;\n  border: 1px solid #ccc;margin-top:10px;width:85%;margin-top:40px;margin: auto;\n  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);margin-top:20px;\">\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" name=\"label\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" name=\"Description\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6 \" style=\"display:none\">\n      <mat-form-field>\n        <mat-label>Input Type</mat-label>\n        <mat-select [(ngModel)]=\"type\">\n          <mat-option value=\"text\">text</mat-option>\n          <mat-option value=\"number\">number</mat-option>\n          <mat-option value=\"radio\">radio</mat-option>\n          <mat-option value=\"date\">date</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-5\">\n      <mat-form-field>\n        <mat-label>Pages</mat-label>\n  \n        <mat-select [(ngModel)]=\"pageNumber\">\n          <mat-option *ngFor=\"let page of pages; let i = index\" value=\"{{page.value}}\">{{page.label}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-1\">\n      <span style=\"float:right;padding-top:15px\" class=\"cursor-pntr\"><i title=\"Add Page\" class=\"fa fa-plus\"\n          (click)=\"add(pages)\"></i></span>\n    </div>\n  \n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <mat-label>Criteria</mat-label>\n        <mat-select [(ngModel)]=\"draftCriteriaId\">\n          <mat-option *ngFor=\"let item of criteriaList\" [value]=\"item._id\">{{ item.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n    <label id=\"example-radio-group-label\">is Reqired ?</label>\n    <mat-radio-group aria-labelledby=\"radio-group-label\" class=\"radio-group\" [(ngModel)]=\"required\">\n      <mat-radio-button class=\"example-radio-button\" [value]=true>\n        Yes\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" [value]=false>\n        No\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n  \n  \n  \n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n      <mat-form-field>\n        <input type=\"text\" placeholder=\"Min\" matInput [(ngModel)]=\"min\" name=\"min value\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n      <mat-form-field>\n        <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" name=\"min value\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6\" *ngIf=\"type=='date'\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" placeholder=\"Choose a min date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" placeholder=\"Choose a max date\">\n        <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n        <mat-datepicker #pickerMaxDate></mat-datepicker>\n      </mat-form-field>\n  \n  \n    </div>\n    <div class=\"\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n      <label for=\"label\" class=\"col-sm-12\">Options</label>\n  \n      <ul class=\"col-sm-12 option-ul\" *ngFor=\"let opt of options;let i = index\">\n        <li class=\"\">\n          <span>{{opt.label}} </span><span style=\"\n      margin-left: 30px;cursor: pointer\" title = \"delete\" (click)=\"deleteOption(opt,i)\">\n            <i class=\"fa fa-trash\"></i></span>\n        </li>\n      </ul>\n  \n      <div class=\"col-sm-12\">\n        <div class=\"input-group pull-left col-sm-6\">\n          <mat-form-field>\n            <input type=\"text\" placeholder=\"Label\" matInput style=\"\" [(ngModel)]=\"newOptionLabel\"\n              name=\"newOption\">\n          </mat-form-field>\n        </div>\n        <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\" (click)=\"AddNewOptions()\">\n          Add\n        </button>\n      </div>\n    </div>\n  \n    <div *ngIf=\"filtereddata && filtereddata.length > 0\">\n      <div class=\"col-sm-12\">\n        <label id=\"example-radio-group-label\">Do you want to related the question based on below options ?</label>\n        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n          [(ngModel)]=\"selectedOption\">\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let ele of options\" [value]=\"ele\">\n            {{ ele.label }}\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n  \n  \n      <div class=\"col-sm-6\">\n        <mat-form-field>\n          <mat-label>Select Question to add </mat-label>\n          <select matNativeControl [(ngModel)]=\"currentSelectedQtn\">\n            <option *ngFor=\"let values of filtereddata\" [ngValue]=\"values\"> {{ values.label }} </option>\n          </select>\n        </mat-form-field>\n      </div>\n  \n      <div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n        <mat-form-field>\n          <mat-label>Select Condition </mat-label>\n          <select matNativeControl [(ngModel)]=\"condition\">\n            <option *ngFor=\"let values of conditionArray\" [ngValue]=\"values.condition\"> {{ values.label }} </option>\n          </select>\n        </mat-form-field>\n      </div>\n  \n      <div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n        <mat-form-field>\n          <input type=\"tex\" matInput name=\"conditionMatchValue\" placeholder=\"\" [(ngModel)]=\"conditionMatchValue\">\n        </mat-form-field>\n      </div>\n  \n      <div class=\"col-sm-2\">\n        <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\" (click)=\"parentMapping()\">\n          Add\n        </button>\n      </div>\n    </div>\n  \n    <ul class=\"col-sm-12\" *ngFor=\"let relate of listOfRelation;let i = index\">\n      <li class=\"col-sm-12\">\n        <span>{{relate.label}} </span><span style=\"\n  margin-left: 30px;\" (click)=\"deleteCondition(relate,i)\">\n          <i class=\"fa fa-trash\"></i></span>\n      </li>\n    </ul>\n  \n  \n   \n  \n    <div class=\"col-sm-12\" *ngIf=\"type=='date'\">  \n    <label id=\"example-radio-group-label\">is autoCollect</label>\n      <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" [(ngModel)]=\"autoCollect\">\n        <mat-radio-button class=\"example-radio-button\" [value]=true>\n          True\n        </mat-radio-button>\n        <mat-radio-button class=\"example-radio-button\" [value]=false>\n          False\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n  \n  \n    <div class=\"col-sm-12\">\n  \n      <button mat-flat-button color=\"primary\" style=\"margin-right:10px;\" (click)=\"closeModel('save')\">\n        Save\n      </button>\n  \n    </div>\n  \n  </div>\n  <div class=\"form-group row\" [formGroup]=\"form\"\n    style=\"padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;\">\n    <span class=\"qtn_position\"><span class=\"\">#{{ field.position }}</span></span>\n  \n    <div class=\"action-component\">\n  \n      <span class=\"cursor-pntr\" title = \"delete\" (click)=\"deleteElement(field)\"><i class=\"fa fa-trash\"></i> </span>\n      <span class=\"cursor-pntr\" title = \"copy\" (click)=\"copyElement(field)\"><i class=\"fa fa-copy\"></i></span>\n      <span class=\"cursor-pntr\" title = \"edit\"><i class=\"fa fa-edit\" (click)=\"loadFormElement(field)\"></i></span>\n  \n    </div>\n    <div class=\"col-md-12\" [ngSwitch]=\"field.type\">\n      <textbox *ngSwitchCase=\"'number'\" [field]=\"field\" [form]=\"form\"></textbox>\n      <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n      <date *ngSwitchCase=\"'date'\" [field]=\"field\" [form]=\"form\"></date>\n      <slider *ngSwitchCase=\"'slider'\" [field]=\"field\" [form]=\"form\"></slider>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <lib-multi-select *ngSwitchCase=\"'matrix'\" cdkDrag   (sendDataToParent)=\"eventFromChild($event)\" \n      (childrenDropEvent)=\"childrenDropEvent($event)\" [field]=\"field\" [form]=\"form\"></lib-multi-select>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div style=\"float:right\">\n      </div>\n    </div>\n    </div>",
                    styles: ["\n  .qtn_position {\n    float: left;\n    width: 40px;\n    padding: 5px 0px 0px 5px;\n    color: #ccc;\n  }\n  .radio-group {\n    display: inline-block;\n    margin: 15px 0; \n  }\n   .option-ul {\n    padding-left: 44px;\n    padding-top: 5px;\n   }\n  \n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    FieldBuilderComponent.ctorParameters = function () { return [
        { type: DynamicFormBuilderService },
        { type: MatSnackBar },
        { type: MatDialog }
    ]; };
    FieldBuilderComponent.propDecorators = {
        field: [{ type: Input }],
        criteriaList: [{ type: Input }],
        form: [{ type: Input }],
        sendDataToParent: [{ type: Output }],
        copyOrDeleteEvent: [{ type: Output }],
        myModal: [{ type: ViewChild, args: ['content', { static: false },] }]
    };
    return FieldBuilderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    Object.defineProperty(TextBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    TextBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'textbox',
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-md-0 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n      </label>\n    \n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.field\" [name]=\"field.field\" >\n        <textarea *ngIf=\"field.multiline\"  [id]=\"field.field\"\n        rows=\"20\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n\n      </div> \n    ",
                    styles: ["\n    .form-control {\n      display: none;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    TextBoxComponent.ctorParameters = function () { return []; };
    TextBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return TextBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.field = {};
    }
    DropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dropdown',
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-sm-0 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <select class=\"form-control\" [id]=\"field.field\">\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.label}}</option>\n        </select>\n      </div> \n    ",
                    styles: ["\n    .form-control {\n      display: none;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    DropDownComponent.ctorParameters = function () { return []; };
    DropDownComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DropDownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
var FileComponent = /** @class */ (function () {
    function FileComponent() {
        this.field = {};
    }
    Object.defineProperty(FileComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileComponent.prototype, "isDirty", {
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
    FileComponent.prototype.ngOnChange = /**
     * @return {?}
     */
    function () {
        console.log(this.field.value);
        // this.field.value.
    };
    FileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'file',
                    template: "\n      <div [formGroup]=\"form\">\n        <div *ngIf=\"!field.value\" class=\"drop-container dropzone\" dropZone           (dropped)=\"field.onUpload($event)\">\n          <p class=\"m-0\">\n            Drag a file here or\n            <label class=\"upload-button\">\n              <input type=\"file\" multiple=\"\" (change)=\"field.onUpload($event.target.files)\"> browse\n            </label>\n            to upload.\n          </p>\n        </div>\n        <div *ngIf=\"field.value\">\n          <!-- <button type=\"button\" class=\"btn btn-primary\">Change</button> -->\n          <div class=\"card\">\n            <img class=\"card-img-top\" [src]=\"field.value\">\n          </div>\n        </div>\n      </div> \n    ",
                    styles: [
                        "\n      .form-control {\n        display:none;\n      }\n      .drop-container {\n        background: #fff;\n        border-radius: 6px;\n        height: 150px;\n        width: 100%;\n        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px dashed #c0c4c7;\n      }\n      p {\n        font-size: 16px;\n        font-weight: 400;\n        color: #c0c4c7; \n      }\n      .upload-button {\n        display: inline-block;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        color: #5754a3;\n      }\n      .upload-button input {\n        display: none;\n      }\n      .dropzone { \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; \n        border-radius: 5px;\n        background: white;\n        margin: 10px 0;\n      }\n      .dropzone.hovering {\n          border: 2px solid #f16624;\n          color: #dadada !important;\n      }\n      progress::-webkit-progress-value {\n        transition: width 0.1s ease;\n      }\n      "
                    ]
                },] },
    ];
    /** @nocollapse */
    FileComponent.ctorParameters = function () { return []; };
    FileComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return FileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(CheckBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    CheckBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'checkbox',
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-sm -12 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <div [formGroupName]=\"field.field\" >\n          <div *ngFor=\"let opt of field.options\" class=\"form-check form-check\">\n          <label class=\"form-check-label\">\n             <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" />\n             {{opt.label}}</label>\n          </div>\n        </div>\n\n      </div> \n    ",
                    styles: ["\n    .form-control {\n      display: none;\n    }\n    "]
                },] },
    ];
    CheckBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return CheckBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.field = {};
    }
    RadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'radio',
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-sm-12 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [id]=\"field.field\" [value]=\"opt.key\">\n          <label class=\"form-check-label space\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div> \n    ",
                    styles: ["\n    .form-control {\n      display: none;\n    }\n    .space {\n      padding-left: 5px\n    }\n    "]
                },] },
    ];
    RadioComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return RadioComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
var DateComponent = /** @class */ (function () {
    function DateComponent() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    Object.defineProperty(DateComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    DateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date',
                    template: "\n      <div [formGroup]=\"form\">\n      <label class=\"col-md-8 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\" \n         [id]=\"field.field\" [name]=\"field.field\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [id]=\"field.field\"\n        rows=\"20\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n\n      </div> \n    ",
                    styles: ["\n    .form-control {\n      display: none;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    DateComponent.ctorParameters = function () { return []; };
    DateComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    Object.defineProperty(SliderComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    SliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slider',
                    template: "\n      <div [formGroup]=\"form\" >\n      <label class=\"col-md-0 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n        <input *ngIf=\"!field.multiline\" type=\"hidden\" class=\"form-control\" [id]=\"field.field\" [name]=\"field.field\">\n        \n        <mat-slider\n   class = \"tp-margin\"\n   [disabled] = \"false\"\n   [invert] = \"false\"      \n   [thumbLabel] = \"false\"\n   [max]=\"field.max\"\n   [min]=\"field.min\"    \n   [vertical] = \"false\">\n</mat-slider>\n\n      </div> \n    ",
                    styles: ["\n    .form-control {\n      display: none;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return []; };
    SliderComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return SliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.onFieldUpdate = new EventEmitter();
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
        if (this.condition) ;
        // 'option':this.selectedOption,
        //       'question':this.currentSelectedQtn
        // this.field.childQnt = this.currentSelectedQtn.field;
        console.log("this.field.validations.relation", this.listOfRelation);
    };
    /**
     * @param {?} action
     * @param {?} data
     * @return {?}
     */
    MultiSelectComponent.prototype.closeModelChild = /**
     * @param {?} action
     * @param {?} data
     * @return {?}
     */
    function (action, data) {
        var _this = this;
        if (action == "save") {
            console.log("closeModel", this.field);
            console.log('!!!!!!!!!!!', data);
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
            obj.label = data.label;
            obj.field = data.field;
            obj.type = data.type;
            obj.placeholder = data.placeholder;
            obj.options = data.options;
            obj.description = data.description;
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
        item.expand = !item.expand;
        this.activeModelData = "";
        this.label = item.label;
        this.currentItem = item;
        this.allData = this.dynamicServe.getALl();
        console.log('this.field', this.field);
        // for(let i = 0; i < this.allData['questionList']['questionList'][0].child.length; i++) {
        this.filtereddata = this.field.child.filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return t.field !== item.field; }));
        // }
        // this.filtereddata = this.field.child;
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
        console.log('deleteElement', item);
        item.deleteindex = index;
        item.action = 'childDelete';
        this.field.isDelete = true;
        this.field.child.splice(index, 1);
        this.sendDataToParent.emit(item);
        // this.childrenDropEvent.emit(item);
        // console.log("field delete", this.field, 'index', index);
        // console.log('after delete', this.allData);
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
                    template: "<div [formGroup]=\"form\" dndDropzone (dndDrop)=\"onDropNew($event,field)\" class=\"card-body\">\n  <label class=\"col-md-0 form-control-label\" [attr.for]=\"field.label\">\n    {{field.label}}\n  </label>\n  <textarea rows=\"2\" class=\"form-control\">\n\n  </textarea>\n\n\n  <div *ngIf=\"field.child.length > 0\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n    <div *ngFor=\"let obj of field.child; let i =index; let data\" cdkDrag>\n      <div style=\"float: right;right: -70px; cursor:pointer; padding-top: 10px\" class=\"col-sm-2 edit-icon\">\n        <i class=\"fa fa-trash\" title = \"delete\" (click)=\"deleteElement(obj, i)\"></i>\n        <i class=\"fa fa-copy\" title = \"copy\" (click)=\"copyElement(obj, i)\"></i>\n        <i class=\"fa fa-edit\" title = \"edit\" (click)=\"loadFormElement(obj, i)\"></i>\n      </div>\n      <div class=\"row\" *ngIf=\"obj.expand\" style=\"padding: 20px;\n      border: 1px solid #ccc;margin-top:10px; margin:40px; margin-left: 20%;\n      box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19); margin-top:20px;\">\n\n        <div class=\"col-sm-6\">\n          <mat-form-field>\n            <input matInput placeholder=\"Label\" [(ngModel)]=\"obj.label\" [ngModelOptions]=\"{standalone: true}\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <mat-form-field>\n            <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"obj.placeholder\"\n              [ngModelOptions]=\"{standalone: true}\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <mat-form-field>\n            <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"obj.description\"\n              [ngModelOptions]=\"{standalone: true}\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <mat-form-field>\n            <mat-label>Input Type</mat-label>\n            <mat-select [(ngModel)]=\"obj.type\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-option value=\"text\">text</mat-option>\n              <mat-option value=\"number\">number</mat-option>\n              <mat-option value=\"radio\">radio</mat-option>\n              <mat-option value=\"date\">date</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-sm-6\" *ngIf=\"obj.type=='slider'\">\n          <mat-form-field>\n            <input type=\"text\" placeholder=\"Min\" matInput [(ngModel)]=\"min\" [ngModelOptions]=\"{standalone: true}\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-sm-6\" *ngIf=\"obj.type=='slider'\">\n          <mat-form-field>\n            <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" [ngModelOptions]=\"{standalone: true}\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-sm-6\" *ngIf=\"obj.type=='date'\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" [ngModelOptions]=\"{standalone: true}\"\n              placeholder=\"Choose a min date\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" [ngModelOptions]=\"{standalone: true}\"\n              placeholder=\"Choose a max date\">\n            <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n            <mat-datepicker #pickerMaxDate></mat-datepicker>\n          </mat-form-field>\n\n\n        </div>\n        <div class=\"col-sm-12 form-group \" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n          <label for=\"label\" class=\"col-sm-12\">Options</label>\n\n          <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n            <mat-form-field>\n              <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" [ngModelOptions]=\"{standalone: true}\">\n            </mat-form-field>\n          </div>\n\n        </div>\n\n        <div *ngIf=\"field.child && field.child.length > 0\">\n          <div class=\"col-sm-12\">\n            <label id=\"example-radio-group-label\">Do you want to related the question based on below options ?</label>\n            <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n              [(ngModel)]=\"selectedOption\" [ngModelOptions]=\"{standalone: true}\">\n              <mat-radio-button style=\"padding: 10px\" class=\"example-radio-button\" *ngFor=\"let ele of options\"\n                [value]=\"ele\">\n                {{ ele.label }}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n\n\n          <div class=\"col-sm-6\">\n            <mat-form-field>\n              <mat-label>Select Question to add </mat-label>\n              <select matNativeControl [(ngModel)]=\"currentSelectedQtn\" [ngModelOptions]=\"{standalone: true}\">\n                <option *ngFor=\"let values of filtereddata\" [ngValue]=\"values\"> {{ values.label }} </option>\n              </select>\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Select Condition </mat-label>\n              <select matNativeControl [(ngModel)]=\"condition\" [ngModelOptions]=\"{standalone: true}\">\n                <option *ngFor=\"let values of conditionArray\" [ngValue]=\"values.condition\"> {{ values.label }} </option>\n              </select>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n            <mat-form-field>\n              <input type=\"tex\" matInput name=\"conditionMatchValue\" placeholder=\"\" [(ngModel)]=\"conditionMatchValue\"\n                [ngModelOptions]=\"{standalone: true}\">\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-sm-2\">\n            <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\" (click)=\"parentMapping()\">\n              Add\n            </button>\n          </div>\n        </div>\n\n        <ul class=\"col-sm-12\" *ngFor=\"let relate of listOfRelation;let i = index\">\n          <li class=\"col-sm-12\">\n            <span>{{relate.label}} </span><span style=\"\n      margin-left: 30px;\" (click)=\"deleteCondition(relate,i)\">\n              <i class=\"fa fa-trash\"></i></span>\n          </li>\n        </ul>\n\n\n        <div class=\"col-sm-12\">\n          <label id=\"example-radio-group-label\">is Reqired ?</label>\n          <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n            [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"required\">\n            <mat-radio-button class=\"example-radio-button\" [value]=true>\n              Yes\n            </mat-radio-button>\n            <mat-radio-button class=\"example-radio-button\" [value]=false>\n              No\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"col-sm-7\" *ngIf=\"type=='date'\">\n          <label id=\"example-radio-group-label\">is autoCollect</label>\n          <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n            [(ngModel)]=\"autoCollect\" [ngModelOptions]=\"{standalone: true}\">\n            <mat-radio-button class=\"example-radio-button\" [value]=true>\n              True\n            </mat-radio-button>\n            <mat-radio-button class=\"example-radio-button\" [value]=false>\n              False\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n\n          <button mat-flat-button color=\"primary\" style=\"margin-right:10px;\" (click)=\"closeModelChild('save', obj)\">\n            Save\n          </button>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-0\" [ngSwitch]=\"obj.type\" style=\"width: 80%;\n          margin-left: 20%;\n          padding-left: 10px;\n          margin-top: 10px;\n          box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);\n          padding-bottom: 10px;\">\n\n        <textbox style=\"padding-left:30px\" *ngSwitchCase=\"'number'\" [field]=\"obj\" [form]=\"form\"></textbox>\n\n        <textbox style=\"padding-left:30px\" *ngSwitchCase=\"'text'\" [field]=\"obj\" [form]=\"form\"></textbox>\n\n        <date style=\"padding-left:30px\" *ngSwitchCase=\"'date'\" [field]=\"obj\" [form]=\"form\"></date>\n\n        <slider style=\"padding-left:30px\" *ngSwitchCase=\"'slider'\" [field]=\"obj\" [form]=\"form\"></slider>\n\n        <dropdown style=\"padding-left:30px\" *ngSwitchCase=\"'dropdown'\" [field]=\"obj\" [form]=\"form\"></dropdown>\n\n        <checkbox style=\"padding-left:30px\" *ngSwitchCase=\"'checkbox'\" [field]=\"obj\" [form]=\"form\"></checkbox>\n\n        <radio style=\"padding-left:30px\" *ngSwitchCase=\"'radio'\" [field]=\"obj\" [form]=\"form\"></radio>\n\n        <file style=\"padding-left:30px\" *ngSwitchCase=\"'file'\" [field]=\"obj\" [form]=\"form\"></file>\n\n\n      </div>\n      \n    </div>\n\n  </div>\n</div>\n",
                    styles: ["\n    .form-control {\n      display: none;\n    }\n    .mat-form-field {\n      display: block;\n    }\n    .fa {\n      padding: 3px;\n    }\n    "]
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
        copyOrDeleteEvent: [{ type: Output }],
        onFieldUpdate: [{ type: Output }]
    };
    return MultiSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import {  } from '@angular/cdk/'
var DynamicFormBuilderModule = /** @class */ (function () {
    function DynamicFormBuilderModule() {
    }
    DynamicFormBuilderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                        MatButtonModule,
                        MatRadioModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSliderModule,
                        MatSelectModule,
                        // MatIconModule
                        AngularFontAwesomeModule,
                        DragDropModule,
                        DndModule
                    ],
                    declarations: [
                        DynamicFormBuilderComponent$1,
                        FieldBuilderComponent,
                        TextBoxComponent,
                        DropDownComponent,
                        CheckBoxComponent,
                        FileComponent,
                        RadioComponent,
                        DateComponent,
                        SliderComponent,
                        MultiSelectComponent
                    ],
                    exports: [DynamicFormBuilderComponent$1],
                    providers: [DynamicFormBuilderService]
                },] },
    ];
    return DynamicFormBuilderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicFormBuilderModule1 = /** @class */ (function () {
    function DynamicFormBuilderModule1() {
    }
    DynamicFormBuilderModule1.decorators = [
        { type: NgModule, args: [{
                    declarations: [DynamicFormBuilderComponent],
                    imports: [
                        // BrowserModule,
                        CommonModule,
                        ReactiveFormsModule,
                        DynamicFormBuilderModule,
                        HttpClientModule,
                        FormsModule,
                        MatSelectModule,
                        MatTabsModule,
                        MatDialogModule,
                        MatTooltipModule, MatTabsModule, MatRadioModule, MatCardModule,
                        MatTableModule, MatExpansionModule,
                        MatPaginatorModule,
                        MatNativeDateModule,
                        MatToolbarModule,
                        MatInputModule,
                        MatStepperModule,
                        // NgbModule.forRoot(),
                        // DragulaModule.forRoot()
                        // DragAndDropModule
                        MatFormFieldModule,
                        DndModule,
                        MatButtonModule,
                        MatDatepickerModule
                    ],
                    entryComponents: [],
                    exports: [DynamicFormBuilderComponent]
                },] },
    ];
    return DynamicFormBuilderModule1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DynamicFormBuilderService, DynamicFormBuilderModule1, DynamicFormBuilderComponent as ɵa, CheckBoxComponent as ɵg, DateComponent as ɵj, DropDownComponent as ɵf, FileComponent as ɵh, MultiSelectComponent as ɵl, RadioComponent as ɵi, SliderComponent as ɵk, TextBoxComponent as ɵe, DynamicFormBuilderComponent$1 as ɵc, DynamicFormBuilderModule as ɵb, FieldBuilderComponent as ɵd };

//# sourceMappingURL=dynamic-form-builder.js.map