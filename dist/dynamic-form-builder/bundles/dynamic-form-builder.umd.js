(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common/http'), require('rxjs'), require('@angular/common'), require('@angular/cdk/drag-drop'), require('angular-font-awesome'), require('@angular/material'), require('ngx-drag-drop')) :
    typeof define === 'function' && define.amd ? define('dynamic-form-builder', ['exports', '@angular/core', '@angular/forms', '@angular/common/http', 'rxjs', '@angular/common', '@angular/cdk/drag-drop', 'angular-font-awesome', '@angular/material', 'ngx-drag-drop'], factory) :
    (global = global || self, factory(global['dynamic-form-builder'] = {}, global.ng.core, global.ng.forms, global.ng.common.http, global.rxjs, global.ng.common, global.ng.cdk['drag-drop'], global.angularFontAwesome, global.ng.material, global.ngxDragDrop));
}(this, (function (exports, core, forms, http, rxjs, common, dragDrop, angularFontAwesome, material, ngxDragDrop) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder.service.ts
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
        }
        return DynamicFormBuilderService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicFormBuilderComponent = /** @class */ (function () {
        function DynamicFormBuilderComponent(http, _formBuilder, fb) {
            this.http = http;
            this._formBuilder = _formBuilder;
            this.fb = fb;
            // @Output() questionList = new EventEmitter();
            this.questionTrigger = new core.EventEmitter();
            this.fields = [];
            // this.form = new FormGroup({
            //   fields: this.fb.array([]),
            // })
            this.form = new forms.FormGroup({
                fields: new forms.FormControl(JSON.stringify(this.fields))
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
            this.form = new forms.FormGroup(fieldsCtrls);
            try {
                // console.log("------", obj);
                for (var _c = __values(this.formData), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var f = _d.value;
                    if (f['type'] != 'checkbox') {
                        console.log("f.type", f['field']);
                        fieldsCtrls[f['field']] = new forms.FormControl(f['value'] || '');
                    }
                    else {
                        /** @type {?} */
                        var opts = {};
                        try {
                            for (var _e = __values(f['options']), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var opt = _f.value;
                                opts[opt.key] = new forms.FormControl(opt.label);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        fieldsCtrls[f['field']] = new forms.FormGroup(opts);
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
            this.form = new forms.FormGroup(fieldsCtrls);
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
            this.form = new forms.FormGroup(fieldsCtrls);
            try {
                for (var formData_1 = __values(formData), formData_1_1 = formData_1.next(); !formData_1_1.done; formData_1_1 = formData_1.next()) {
                    var f = formData_1_1.value;
                    if (f['type'] != 'checkbox') {
                        console.log("f.type", f['field']);
                        fieldsCtrls[f['field']] = new forms.FormControl(f['value'] || '');
                    }
                    else {
                        /** @type {?} */
                        var opts = {};
                        try {
                            for (var _c = __values(f['options']), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var opt = _d.value;
                                opts[opt.key] = new forms.FormControl(opt.label);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        fieldsCtrls[f['field']] = new forms.FormGroup(opts);
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
            this.form = new forms.FormGroup(fieldsCtrls);
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
            { type: core.Component, args: [{
                        selector: 'lib-dynamic-form-builder',
                        template: "<style>\n  p {\n      font-family: Lato;\n    }\n    .noPadding {\n        padding: 0px;\n    }\n    .margin-5 {\n        margin-top:5%;\n    }\n    .element {\n      border: 1px solid #ccc;\n      padding: 10px;\n      margin-bottom: 10px;\n      color: #333;\n      text-align: left;\n      text-transform: capitalize;\n      box-shadow: 0 0px 0px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23);\n  }\n    .form-group {\n        margin-bottom: 0.5rem;\n        border: 1px solid #ece7e7;\n    }\n    .cursor-pntr {\n        cursor: pointer;\n    }\n    \n    \n  </style>\n  <div class=\"col-sm-12\">\n      <div class=\"col-sm-4 noPadding\">\n        <div class=\"card\">\n          <div class=\"card-header\">ToolBox</div>\n          <div class=\"card-body\">\n            <!-- <dynamic-form-builder [fields]=\"getFields()\"></dynamic-form-builder> -->\n      \n            <div *ngFor=\"let item of jsonData\">\n              <div [dndDraggable]=\"item\"  class=\"col-sm-12 element\"  >{{ item.responseType }}</div>\n              <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement(item.responseType)\" >Number</div> -->\n            </div>\n            <!-- <div class=\"col-sm-12 element\" (click)=\"addFormElement('input')\" >Input</div>\n            <div class=\"col-sm-12 element\" (click)=\"addFormElement('number')\" >Number</div> -->\n          </div>\n        </div>\n      </div>\n\n    <div class=\"col-sm-8 noPadding\">\n    <mat-tab-group>\n    <mat-tab label=\"Page 1\"> \n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"Page 2\"> \n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n     </mat-tab>\n    <mat-tab label=\"Page 3\">\n    <div class=\"card\">\n          <div dndDropzone class=\"card-body\" (dndDrop)=\"onDrop($event)\">\n              <form (ngSubmit)=\"onSubmit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n            <dynamic-form-builder [fields]=\"getFields()\" [form]=\"form\"  (onFieldUpdate)=\"onFieldUpdate($event)\" ></dynamic-form-builder>\n            </form>\n          </div>\n        </div>\n     </mat-tab>\n    </mat-tab-group>\n      </div>\n\n\n      </div>\n      <div class=\"col-sm-12\">\n      </div>",
                        styleUrls: []
                    },] },
        ];
        /** @nocollapse */
        DynamicFormBuilderComponent.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: forms.FormBuilder },
            { type: forms.FormBuilder }
        ]; };
        DynamicFormBuilderComponent.propDecorators = {
            events: [{ type: core.Input }],
            questionTrigger: [{ type: core.Output }]
        };
        return DynamicFormBuilderComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/dynamic-form-builder.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicFormBuilderComponent$1 = /** @class */ (function () {
        function DynamicFormBuilderComponent() {
            this.onFieldUpdate = new core.EventEmitter();
            this.fields = [];
            this.formData = [];
        }
        /**
         * @param {?} event
         * @return {?}
         */
        DynamicFormBuilderComponent.prototype.drop = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            dragDrop.moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
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
            /** @type {?} */
            var obj = data;
            console.log(data, "copyEvent occured");
            // data.field =(this.fields.length+1)+"question";
            // data.label = (this.fields.length+1)+" question";
            if (data.action == "copy") {
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
            else if (data.action = "delete") {
                /** @type {?} */
                var index = this.fields.indexOf(data);
                console.log("ind", index);
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
            { type: core.Component, args: [{
                        selector: 'dynamic-form-builder',
                        template: "\n   \n     <div cdkDropList (cdkDropListDropped)=\"drop($event)\"> <div *ngFor=\"let field of fields\"  cdkDrag>\n          <field-builder *ngIf=\"!field.isDeleted\" [field]=\"field\" [form]=\"form\"  (sendDataToParent)=\"eventFromChild($event)\" (copyOrDeleteEvent)=\"copyOrDeleteEvent($event)\"></field-builder>\n      </div></div>",
                    },] },
        ];
        /** @nocollapse */
        DynamicFormBuilderComponent.ctorParameters = function () { return []; };
        DynamicFormBuilderComponent.propDecorators = {
            onFieldUpdate: [{ type: core.Output }],
            fields: [{ type: core.Input }],
            form: [{ type: core.Input }]
        };
        return DynamicFormBuilderComponent;
    }());
    if (false) {
        /** @type {?} */
        DynamicFormBuilderComponent$1.prototype.onFieldUpdate;
        /** @type {?} */
        DynamicFormBuilderComponent$1.prototype.fields;
        /** @type {?} */
        DynamicFormBuilderComponent$1.prototype.form;
        /** @type {?} */
        DynamicFormBuilderComponent$1.prototype.formData;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/field-builder/field-builder.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FieldBuilderComponent = /** @class */ (function () {
        function FieldBuilderComponent() {
            this.sendDataToParent = new core.EventEmitter();
            this.copyOrDeleteEvent = new core.EventEmitter();
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
        FieldBuilderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'field-builder',
                        template: "\n  <style>\n  .mat-slider-horizontal {\n    min-width: 80% !important;\n  }\n  .example-radio-group {\n    display: flex;\n    flex-direction: block;\n    margin: 15px 0;\n  }\n\n  .mat-form-field {\n    display: block;\n    position: relative;\n    flex: auto;\n    min-width: 0;\n    width: 372px;\n  }\n  .input-group {\n    position: relative;\n     border-collapse: separate;\n     display: block;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  .edit-icon {\n    position: relative;\n  width: 36px;\n  max-width: 57px;\n  right: 0px;\n  left: 94%;\n  top: 25px;cursor: pointer;z-index: 100;\n}\n  </style>\n  <div class=\"row\"  *ngIf=\"openEdit\" style=\"padding: 20px;\n  border: 1px solid #ccc;margin-top:10px;\n  box-shadow:0 4px 8px rgba(0,0,0,0.19), 0 2px 0px rgba(0,0,0,0.23);margin-left: 0px;\n  margin-right: 0px;\">\n\n    <div class=\"col-sm-7 form-group\">\n      <mat-form-field>\n        <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" name=\"label\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-7 form-group\">\n      <mat-form-field>\n        <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-7 form-group\">\n      <mat-form-field>\n        <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n\n<div class=\"col-sm-7 form-group\">\n  <mat-form-field>\n  <mat-label>Input Type</mat-label>\n    <mat-select  [(ngModel)]=\"type\">\n      <mat-option value=\"text\">text</mat-option>\n      <mat-option value=\"number\">number</mat-option>\n      <mat-option value=\"radio\">radio</mat-option>\n      <mat-option value=\"date\">date</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"col-sm-7 form-group\">\n<mat-form-field>\n<mat-label>Input Type</mat-label>\n  <mat-select  [(ngModel)]=\"pageNumber\">\n    <mat-option value=\"page_1\">page 1</mat-option>\n    <mat-option value=\"page_2\">page 2</mat-option>\n    <mat-option value=\"page_3\">page 3</mat-option>\n  </mat-select>\n</mat-form-field>\n</div>\n\n    <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Min\" matInput  [(ngModel)]=\"min\" name=\"min value\">\n    </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Max\" matInput  [(ngModel)]=\"max\" name=\"min value\">\n    </mat-form-field>\n    </div>\n    \n  <div class=\"col-sm-12 form-group\" *ngIf=\"type=='date'\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" placeholder=\"Choose a min date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" placeholder=\"Choose a max date\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerMaxDate></mat-datepicker>\n    </mat-form-field>\n\n\n    </div>\n    <div class=\"col-sm-12 form-group\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n    <label for=\"label\" class=\"col-sm-12\">Options</label>\n    \n    <ul class=\"col\" *ngFor=\"let opt of options;let index\">\n     <li class=\"\">\n      <span>{{opt.label}} </span><span style=\"\n      margin-left: 30px;\" (click)=\"deleteOption(opt,index)\">\n      <i class=\"fa fa-close\" style=\"font-size:36px;color:red\"></i></span>\n    </li>\n    \n    </ul>\n\n    <div class=\"col-sm-7 form-group\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Max\" matInput  [(ngModel)]=\"max\" name=\"min value\">\n    </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-7 form-group\">\n    <div class=\"input-group\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Label\" matInput style=\"margin-bottom: 10px;\" [(ngModel)]=\"newOptionLabel\" name=\"newOption\">\n    </mat-form-field>\n    <mat-form-field>\n    <input type=\"tex\" matInput name=\"newOption\" placeholder=\"key\"  [(ngModel)]=\"newOptionKey\">\n    </mat-form-field>  \n    </div>\n      <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"AddNewOptions()\">\n      Add\n      </button>\n    </div>\n\n    \n    \n    </div>\n\n    \n<div class=\"col-sm-7\">\n<label id=\"example-radio-group-label\">is Reqired ?</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"required\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    Yes\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    No\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n<div class=\"col-sm-7\" *ngIf=\"type=='date'\">\n<label id=\"example-radio-group-label\">is autoCollect</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"autoCollect\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    True\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    False\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n  \n<div  class=\"col-sm-12\">\n\n<button mat-flat-button color=\"primary\" style=\"margin-right:10px;\"  (click)=\"closeModel('save')\">\nSave\n</button>\n\n</div>\n  </div>\n  <div class=\"form-group row\" [formGroup]=\"form\" style=\"background:#def9d8f5;padding:10px;margin:0px;margin-top:10px;box-shadow:0 0px 0px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23)\">\n  \n  \n\n\n  <div class=\"col-sm-2 edit-icon\" ><i class=\"fa fa-edit\" (click)=\"loadFormElement(field)\" ></i></div>\n    <label class=\"col-md-12 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n    </label>\n    <div class=\"col-md-12\" [ngSwitch]=\"field.type\">\n    <textbox *ngSwitchCase=\"'number'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <date *ngSwitchCase=\"'date'\" [field]=\"field\" [form]=\"form\"></date>\n    <slider *ngSwitchCase=\"'slider'\" [field]=\"field\" [form]=\"form\"></slider>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div style=\"float:right\">\n          <span class=\"cursor-pntr\" (click)=\"copyElement(field)\"><i class=\"fa fa-copy\"></i></span>\n          <span class=\"cursor-pntr\" (click)=\"deleteElement(field)\"><i class=\"fa fa-trash\"></i> </span>\n       </div> \n       </div>",
                        styleUrls: []
                    },] },
        ];
        /** @nocollapse */
        FieldBuilderComponent.ctorParameters = function () { return []; };
        FieldBuilderComponent.propDecorators = {
            field: [{ type: core.Input }],
            form: [{ type: core.Input }],
            sendDataToParent: [{ type: core.Output }],
            copyOrDeleteEvent: [{ type: core.Output }],
            myModal: [{ type: core.ViewChild, args: ['content', { static: false },] }]
        };
        return FieldBuilderComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/atoms/textbox.ts
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
            { type: core.Component, args: [{
                        selector: 'textbox',
                        template: "\n      <div [formGroup]=\"form\" >\n    \n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.field\" [name]=\"field.field\" [formControlName]=\"field.field\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [formControlName]=\"field.field\" [id]=\"field.field\"\n        rows=\"20\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n\n      </div> \n    "
                    },] },
        ];
        /** @nocollapse */
        TextBoxComponent.ctorParameters = function () { return []; };
        TextBoxComponent.propDecorators = {
            field: [{ type: core.Input }],
            form: [{ type: core.Input }]
        };
        return TextBoxComponent;
    }());
    if (false) {
        /** @type {?} */
        TextBoxComponent.prototype.field;
        /** @type {?} */
        TextBoxComponent.prototype.form;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/atoms/dropdown.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropDownComponent = /** @class */ (function () {
        function DropDownComponent() {
            this.field = {};
        }
        DropDownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dropdown',
                        template: "\n      <div [formGroup]=\"form\">\n        <select class=\"form-control\" [id]=\"field.field\" [formControlName]=\"field.field\">\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.label}}</option>\n        </select>\n      </div> \n    "
                    },] },
        ];
        /** @nocollapse */
        DropDownComponent.ctorParameters = function () { return []; };
        DropDownComponent.propDecorators = {
            field: [{ type: core.Input }],
            form: [{ type: core.Input }]
        };
        return DropDownComponent;
    }());
    if (false) {
        /** @type {?} */
        DropDownComponent.prototype.field;
        /** @type {?} */
        DropDownComponent.prototype.form;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/atoms/file.ts
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
            { type: core.Component, args: [{
                        selector: 'file',
                        template: "\n      <div [formGroup]=\"form\">\n        <div *ngIf=\"!field.value\" class=\"drop-container dropzone\" dropZone           (dropped)=\"field.onUpload($event)\">\n          <p class=\"m-0\">\n            Drag a file here or\n            <label class=\"upload-button\">\n              <input type=\"file\" multiple=\"\" (change)=\"field.onUpload($event.target.files)\"> browse\n            </label>\n            to upload.\n          </p>\n        </div>\n        <div *ngIf=\"field.value\">\n          <!-- <button type=\"button\" class=\"btn btn-primary\">Change</button> -->\n          <div class=\"card\">\n            <img class=\"card-img-top\" [src]=\"field.value\">\n          </div>\n        </div>\n      </div> \n    ",
                        styles: [
                            "\n      .drop-container {\n        background: #fff;\n        border-radius: 6px;\n        height: 150px;\n        width: 100%;\n        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px dashed #c0c4c7;\n      }\n      p {\n        font-size: 16px;\n        font-weight: 400;\n        color: #c0c4c7; \n      }\n      .upload-button {\n        display: inline-block;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        color: #5754a3;\n      }\n      .upload-button input {\n        display: none;\n      }\n      .dropzone { \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; \n        border-radius: 5px;\n        background: white;\n        margin: 10px 0;\n      }\n      .dropzone.hovering {\n          border: 2px solid #f16624;\n          color: #dadada !important;\n      }\n      progress::-webkit-progress-value {\n        transition: width 0.1s ease;\n      }\n      "
                        ]
                    },] },
        ];
        /** @nocollapse */
        FileComponent.ctorParameters = function () { return []; };
        FileComponent.propDecorators = {
            field: [{ type: core.Input }],
            form: [{ type: core.Input }]
        };
        return FileComponent;
    }());
    if (false) {
        /** @type {?} */
        FileComponent.prototype.field;
        /** @type {?} */
        FileComponent.prototype.form;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/atoms/checkbox.ts
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
            { type: core.Component, args: [{
                        selector: 'checkbox',
                        template: "\n      <div [formGroup]=\"form\">\n        <div [formGroupName]=\"field.field\" >\n          <div *ngFor=\"let opt of field.options\" class=\"form-check form-check\">\n          <label class=\"form-check-label\">\n             <input [formControlName]=\"opt.key\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" />\n             {{opt.label}}</label>\n          </div>\n        </div>\n\n      </div> \n    "
                    },] },
        ];
        CheckBoxComponent.propDecorators = {
            field: [{ type: core.Input }],
            form: [{ type: core.Input }]
        };
        return CheckBoxComponent;
    }());
    if (false) {
        /** @type {?} */
        CheckBoxComponent.prototype.field;
        /** @type {?} */
        CheckBoxComponent.prototype.form;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/atoms/radio.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RadioComponent = /** @class */ (function () {
        function RadioComponent() {
            this.field = {};
        }
        RadioComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'radio',
                        template: "\n      <div [formGroup]=\"form\">\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [formControlName]=\"field.field\" [id]=\"field.field\" [value]=\"opt.key\" >\n          <label class=\"form-check-label\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div> \n    "
                    },] },
        ];
        RadioComponent.propDecorators = {
            field: [{ type: core.Input }],
            form: [{ type: core.Input }]
        };
        return RadioComponent;
    }());
    if (false) {
        /** @type {?} */
        RadioComponent.prototype.field;
        /** @type {?} */
        RadioComponent.prototype.form;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/atoms/date.ts
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
            { type: core.Component, args: [{
                        selector: 'date',
                        template: "\n      <div [formGroup]=\"form\" >\n    \n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.field\" [name]=\"field.field\" [formControlName]=\"field.field\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [formControlName]=\"field.field\" [id]=\"field.field\"\n        rows=\"20\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n\n      </div> \n    "
                    },] },
        ];
        /** @nocollapse */
        DateComponent.ctorParameters = function () { return []; };
        DateComponent.propDecorators = {
            field: [{ type: core.Input }],
            form: [{ type: core.Input }]
        };
        return DateComponent;
    }());
    if (false) {
        /** @type {?} */
        DateComponent.prototype.field;
        /** @type {?} */
        DateComponent.prototype.form;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/atoms/slider.ts
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
            { type: core.Component, args: [{
                        selector: 'slider',
                        template: "\n      <div [formGroup]=\"form\" >\n    \n        <input *ngIf=\"!field.multiline\" type=\"hidden\" class=\"form-control\"  [id]=\"field.field\" [name]=\"field.field\" [formControlName]=\"field.field\">\n        \n        <mat-slider\n   class = \"tp-margin\"\n   [disabled] = \"false\"\n   [invert] = \"false\"      \n   [thumbLabel] = \"false\"\n   [max]=\"field.max\"\n   [min]=\"field.min\"    \n   [vertical] = \"false\">\n</mat-slider>\n\n      </div> \n    "
                    },] },
        ];
        /** @nocollapse */
        SliderComponent.ctorParameters = function () { return []; };
        SliderComponent.propDecorators = {
            field: [{ type: core.Input }],
            form: [{ type: core.Input }]
        };
        return SliderComponent;
    }());
    if (false) {
        /** @type {?} */
        SliderComponent.prototype.field;
        /** @type {?} */
        SliderComponent.prototype.form;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder/dynamic-form-builder.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import {  } from '@angular/cdk/'
    var DynamicFormBuilderModule = /** @class */ (function () {
        function DynamicFormBuilderModule() {
        }
        DynamicFormBuilderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            material.MatButtonModule,
                            material.MatRadioModule,
                            material.MatDatepickerModule,
                            material.MatFormFieldModule,
                            material.MatInputModule,
                            material.MatSliderModule,
                            material.MatSelectModule,
                            // MatIconModule
                            angularFontAwesome.AngularFontAwesomeModule,
                            dragDrop.DragDropModule
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
                            SliderComponent
                        ],
                        exports: [DynamicFormBuilderComponent$1],
                        providers: []
                    },] },
        ];
        return DynamicFormBuilderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-form-builder.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicFormBuilderModule1 = /** @class */ (function () {
        function DynamicFormBuilderModule1() {
        }
        DynamicFormBuilderModule1.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DynamicFormBuilderComponent],
                        imports: [
                            // BrowserModule,
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            DynamicFormBuilderModule,
                            http.HttpClientModule,
                            forms.FormsModule,
                            material.MatSelectModule,
                            material.MatTabsModule,
                            // NgbModule.forRoot(),
                            // DragulaModule.forRoot()
                            // DragAndDropModule
                            material.MatFormFieldModule,
                            ngxDragDrop.DndModule,
                            material.MatButtonModule,
                            material.MatDatepickerModule
                        ],
                        exports: [DynamicFormBuilderComponent]
                    },] },
        ];
        return DynamicFormBuilderModule1;
    }());

    exports.DynamicFormBuilderModule1 = DynamicFormBuilderModule1;
    exports.DynamicFormBuilderService = DynamicFormBuilderService;
    exports.ɵa = DynamicFormBuilderComponent;
    exports.ɵb = DynamicFormBuilderModule;
    exports.ɵc = DynamicFormBuilderComponent$1;
    exports.ɵd = FieldBuilderComponent;
    exports.ɵe = TextBoxComponent;
    exports.ɵf = DropDownComponent;
    exports.ɵg = CheckBoxComponent;
    exports.ɵh = FileComponent;
    exports.ɵi = RadioComponent;
    exports.ɵj = DateComponent;
    exports.ɵk = SliderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dynamic-form-builder.umd.js.map
