/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/field-builder/field-builder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { DynamicFormBuilderService } from '../../dynamic-form-builder.service';
var FieldBuilderComponent = /** @class */ (function () {
    function FieldBuilderComponent(dynamicServe) {
        this.dynamicServe = dynamicServe;
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
            this.field.draftCriteriaId = this.draftCriteriaId;
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
    FieldBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'field-builder',
                    template: "\n  <style>\n  .mat-slider-horizontal {\n    min-width: 80% !important;\n  }\n  .example-radio-group {\n    display: flex;\n    flex-direction: block;\n    margin: 15px 0; \n  }\n\n  .mat-form-field {\n    display: block;\n    position: relative;\n    flex: auto;\n    min-width: 0;\n    width: 372px;\n  }\n  .input-group {\n    position: relative;\n     border-collapse: separate;\n     display: block;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  .action-component {\n    padding:10px 10px 0px 0px;\n    right: 0px;\n    cursor: pointer;\n    float: right;\n  \n}\nspan.cursor-pntr {\n  cursor: pointer;\n  padding: 2px;\n}\n.form-control {\n  display: block;\n  visibility: hidden;\n\n}\n.label.col-md-8.form-control-label {\n  text-decoration: underline;\n}\n\n  </style>\n  <div class=\"row\" *ngIf=\"openEdit\" style=\"padding: 15px;\n  border: 1px solid #ccc;margin-top:10px;width:85%;margin-top:40px;margin: auto;\n  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);margin-top:20px;\">\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" name=\"label\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" name=\"Description\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6 \" style=\"display:none\">\n      <mat-form-field>\n        <mat-label>Input Type</mat-label>\n        <mat-select [(ngModel)]=\"type\">\n          <mat-option value=\"text\">text</mat-option>\n          <mat-option value=\"number\">number</mat-option>\n          <mat-option value=\"radio\">radio</mat-option>\n          <mat-option value=\"date\">date</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-5\">\n      <mat-form-field>\n        <mat-label>Pages</mat-label>\n  \n        <mat-select [(ngModel)]=\"pageNumber\">\n          <mat-option *ngFor=\"let page of pages; let i = index\" value=\"page.value\">{{page.label}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-1\">\n      <span style=\"float:right;padding-top:15px\" class=\"cursor-pntr\"><i title=\"Add Page\" class=\"fa fa-plus\"\n          (click)=\"add(pages)\"></i></span>\n    </div>\n  \n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <mat-label>Criteria</mat-label>\n        <mat-select [(ngModel)]=\"draftCriteriaId\">\n          <mat-option *ngFor=\"let item of criteriaList\" [value]=\"item._id\">{{ item.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  \n  \n  \n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n      <mat-form-field>\n        <input type=\"text\" placeholder=\"Min\" matInput [(ngModel)]=\"min\" name=\"min value\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n      <mat-form-field>\n        <input type=\"text\" placeholder=\"Max\" matInput [(ngModel)]=\"max\" name=\"min value\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"col-sm-6\" *ngIf=\"type=='date'\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" placeholder=\"Choose a min date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" placeholder=\"Choose a max date\">\n        <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n        <mat-datepicker #pickerMaxDate></mat-datepicker>\n      </mat-form-field>\n  \n  \n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n      <label for=\"label\" class=\"col-sm-12\">Options</label>\n  \n      <ul class=\"col\" *ngFor=\"let opt of options;let i = index\">\n        <li class=\"\">\n          <span>{{opt.label}} </span><span style=\"\n      margin-left: 30px;\" (click)=\"deleteOption(opt,i)\">\n            <i class=\"fa fa-trash\"></i></span>\n        </li>\n      </ul>\n  \n      <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n          <mat-form-field>\n            <input type=\"text\" placeholder=\"Label\" matInput style=\"margin-bottom: 10px;\" [(ngModel)]=\"newOptionLabel\"\n              name=\"newOption\">\n          </mat-form-field>\n          <mat-form-field>\n            <input type=\"tex\" disabled matInput name=\"newOption\" placeholder=\"key\" [(ngModel)]=\"newOptionKey\">\n          </mat-form-field>\n        </div>\n        <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\" (click)=\"AddNewOptions()\">\n          Add\n        </button>\n      </div>\n    </div>\n  \n    <div *ngIf=\"filtereddata && filtereddata.length > 0\">\n      <div class=\"col-sm-12\">\n        <label id=\"example-radio-group-label\">Do you want to related the question based on below options ?</label>\n        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n          [(ngModel)]=\"selectedOption\">\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let ele of options\" [value]=\"ele\">\n            {{ ele.label }}\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n  \n  \n      <div class=\"col-sm-6\">\n        <mat-form-field>\n          <mat-label>Select Question to add </mat-label>\n          <select matNativeControl [(ngModel)]=\"currentSelectedQtn\">\n            <option *ngFor=\"let values of filtereddata\" [ngValue]=\"values\"> {{ values.label }} </option>\n          </select>\n        </mat-form-field>\n      </div>\n  \n      <div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n        <mat-form-field>\n          <mat-label>Select Condition </mat-label>\n          <select matNativeControl [(ngModel)]=\"condition\">\n            <option *ngFor=\"let values of conditionArray\" [ngValue]=\"values.condition\"> {{ values.label }} </option>\n          </select>\n        </mat-form-field>\n      </div>\n  \n      <div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n        <mat-form-field>\n          <input type=\"tex\" matInput name=\"conditionMatchValue\" placeholder=\"\" [(ngModel)]=\"conditionMatchValue\">\n        </mat-form-field>\n      </div>\n  \n      <div class=\"col-sm-2\">\n        <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\" (click)=\"parentMapping()\">\n          Add\n        </button>\n      </div>\n    </div>\n  \n    <ul class=\"col-sm-12\" *ngFor=\"let relate of listOfRelation;let i = index\">\n      <li class=\"col-sm-12\">\n        <span>{{relate.label}} </span><span style=\"\n  margin-left: 30px;\" (click)=\"deleteCondition(relate,i)\">\n          <i class=\"fa fa-trash\"></i></span>\n      </li>\n    </ul>\n  \n  \n    <div class=\"col-sm-12\">\n      <label id=\"example-radio-group-label\">is Reqired ?</label>\n      <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" [(ngModel)]=\"required\">\n        <mat-radio-button class=\"example-radio-button\" [value]=true>\n          Yes\n        </mat-radio-button>\n        <mat-radio-button class=\"example-radio-button\" [value]=false>\n          No\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n  \n    <div class=\"col-sm-12\" *ngIf=\"type=='date'\">\n      <label id=\"example-radio-group-label\">is autoCollect</label>\n      <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" [(ngModel)]=\"autoCollect\">\n        <mat-radio-button class=\"example-radio-button\" [value]=true>\n          True\n        </mat-radio-button>\n        <mat-radio-button class=\"example-radio-button\" [value]=false>\n          False\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n  \n  \n    <div class=\"col-sm-12\">\n  \n      <button mat-flat-button color=\"primary\" style=\"margin-right:10px;\" (click)=\"closeModel('save')\">\n        Save\n      </button>\n  \n    </div>\n  \n  </div>\n  <div class=\"form-group row\" [formGroup]=\"form\"\n    style=\"padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;\">\n    <span class=\"qtn_position\"><span class=\"\">#{{ field.position }}</span></span>\n  \n    <div class=\"action-component\">\n  \n      <span class=\"cursor-pntr\" (click)=\"deleteElement(field)\"><i class=\"fa fa-trash\"></i> </span>\n      <span class=\"cursor-pntr\" (click)=\"copyElement(field)\"><i class=\"fa fa-copy\"></i></span>\n      <span class=\"cursor-pntr\"><i class=\"fa fa-edit\" (click)=\"loadFormElement(field)\"></i></span>\n  \n    </div>\n    <div class=\"col-md-12\" [ngSwitch]=\"field.type\">\n      <textbox *ngSwitchCase=\"'number'\" [field]=\"field\" [form]=\"form\"></textbox>\n      <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n      <date *ngSwitchCase=\"'date'\" [field]=\"field\" [form]=\"form\"></date>\n      <slider *ngSwitchCase=\"'slider'\" [field]=\"field\" [form]=\"form\"></slider>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <lib-multi-select *ngSwitchCase=\"'matrix'\" cdkDrag (childrenDropEvent)=\"childrenDropEvent($event)\" [field]=\"field\"\n        [form]=\"form\"></lib-multi-select>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div style=\"float:right\">\n      </div>\n    </div>\n    </div>",
                    styles: ["\n  .qtn_position {\n    float: left;\n    width: 40px;\n    padding: 5px 0px 0px 5px;\n    color: #ccc;\n  } "
                    ]
                },] },
    ];
    /** @nocollapse */
    FieldBuilderComponent.ctorParameters = function () { return [
        { type: DynamicFormBuilderService }
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
export { FieldBuilderComponent };
if (false) {
    /** @type {?} */
    FieldBuilderComponent.prototype.field;
    /** @type {?} */
    FieldBuilderComponent.prototype.criteriaList;
    /** @type {?} */
    FieldBuilderComponent.prototype.form;
    /** @type {?} */
    FieldBuilderComponent.prototype.sendDataToParent;
    /** @type {?} */
    FieldBuilderComponent.prototype.copyOrDeleteEvent;
    /** @type {?} */
    FieldBuilderComponent.prototype.filtereddata;
    /** @type {?} */
    FieldBuilderComponent.prototype.getSelectQuestion;
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
    FieldBuilderComponent.prototype.pages;
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
    FieldBuilderComponent.prototype.draftCriteriaId;
    /** @type {?} */
    FieldBuilderComponent.prototype.subscription;
    /** @type {?} */
    FieldBuilderComponent.prototype.allData;
    /** @type {?} */
    FieldBuilderComponent.prototype.currentSelectedQtn;
    /** @type {?} */
    FieldBuilderComponent.prototype.selectedOption;
    /** @type {?} */
    FieldBuilderComponent.prototype.listOfRelation;
    /** @type {?} */
    FieldBuilderComponent.prototype.condition;
    /** @type {?} */
    FieldBuilderComponent.prototype.conditionMatchValue;
    /** @type {?} */
    FieldBuilderComponent.prototype.conditionArray;
    /** @type {?} */
    FieldBuilderComponent.prototype.myModal;
    /**
     * @type {?}
     * @private
     */
    FieldBuilderComponent.prototype.dynamicServe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTy9FO0lBc1hFLCtCQUVVLFlBQXVDO1FBQXZDLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtRQXBGdkMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBYXRELFVBQUssR0FBRyxDQUFDO2dCQUNQLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxRQUFRO2FBQ2hCLEVBQUM7Z0JBQ0EsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLFFBQVE7YUFDaEIsRUFBQztnQkFDQSxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsUUFBUTthQUNoQixDQUFDLENBQUE7UUFNRixhQUFRLEdBQVksS0FBSyxDQUFDO1FBYTFCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBS3pCLG1CQUFjLEdBQVE7WUFDcEI7Z0JBQ0UsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsU0FBUyxFQUFFLEtBQUs7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLElBQUk7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLEdBQUc7YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxX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QUFVOztJQUNWLDRDQUFpQjs7SUFDakIsd0NBQWE7O0lBQ2IsNkNBQWtCOztJQUNsQiwrQ0FBb0I7O0lBRXBCLHNDQVNFOztJQUVGLGdEQUFxQjs7SUFDckIsNENBQWlCOztJQUNqQix5Q0FBYzs7SUFDZCw0Q0FBaUI7O0lBQ2pCLHlDQUEwQjs7SUFDMUIsb0NBQVM7O0lBQ1QsNENBQWlCOztJQUNqQix3Q0FBYTs7SUFDYix3Q0FBYTs7SUFDYixvQ0FBUzs7SUFDVCxvQ0FBUzs7SUFDVCxnREFBcUI7O0lBQ3JCLDZDQUEyQjs7SUFDM0Isd0NBQWE7O0lBQ2IsbURBQXdCOztJQUN4QiwrQ0FBb0I7O0lBRXBCLCtDQUF5Qjs7SUFDekIsMENBQWU7O0lBRWYsb0RBQXlCOztJQUV6QiwrQ0F5QkM7O0lBSUQsd0NBQTZEOzs7OztJQU8zRCw2Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IE5nYk1vZGFsLCBNb2RhbERpc21pc3NSZWFzb25zIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVEhJU19FWFBSIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaXNOZ1RlbXBsYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWVsZC1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHN0eWxlPlxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICBtaW4td2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBibG9jaztcbiAgICBtYXJnaW46IDE1cHggMDsgXG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiBhdXRvO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogMzcycHg7XG4gIH1cbiAgLmlucHV0LWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5hY3Rpb24tY29tcG9uZW50IHtcbiAgICBwYWRkaW5nOjEwcHggMTBweCAwcHggMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiByaWdodDtcbiAgXG59XG5zcGFuLmN1cnNvci1wbnRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAycHg7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxufVxuLmxhYmVsLmNvbC1tZC04LmZvcm0tY29udHJvbC1sYWJlbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cIm9wZW5FZGl0XCIgc3R5bGU9XCJwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO21hcmdpbi10b3A6MTBweDt3aWR0aDo4NSU7bWFyZ2luLXRvcDo0MHB4O21hcmdpbjogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7bWFyZ2luLXRvcDoyMHB4O1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIFsobmdNb2RlbCldPVwibGFiZWxcIiBuYW1lPVwibGFiZWxcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dCBQbGFjZSBIb2xkZXJcIiBbKG5nTW9kZWwpXT1cInBsYWNlaG9sZGVyXCIgbmFtZT1cInBsYWNlaG9sZGVyXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSGludC9EZXNjcmlwdGlvblwiIFsobmdNb2RlbCldPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiRGVzY3JpcHRpb25cIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPklucHV0IFR5cGU8L21hdC1sYWJlbD5cbiAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJ0eXBlXCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+cmFkaW88L21hdC1vcHRpb24+XG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+ZGF0ZTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+UGFnZXM8L21hdC1sYWJlbD5cbiAgXG4gICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwicGFnZU51bWJlclwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VzOyBsZXQgaSA9IGluZGV4XCIgdmFsdWU9XCJwYWdlLnZhbHVlXCI+e3twYWdlLmxhYmVsfX08L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XG4gICAgICA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0O3BhZGRpbmctdG9wOjE1cHhcIiBjbGFzcz1cImN1cnNvci1wbnRyXCI+PGkgdGl0bGU9XCJBZGQgUGFnZVwiIGNsYXNzPVwiZmEgZmEtcGx1c1wiXG4gICAgICAgICAgKGNsaWNrKT1cImFkZChwYWdlcylcIj48L2k+PC9zcGFuPlxuICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5Dcml0ZXJpYTwvbWF0LWxhYmVsPlxuICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImRyYWZ0Q3JpdGVyaWFJZFwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNyaXRlcmlhTGlzdFwiIFt2YWx1ZV09XCJpdGVtLl9pZFwiPnt7IGl0ZW0ubmFtZX19PC9tYXQtb3B0aW9uPlxuICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICBcbiAgXG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNaW5cIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm1pblwiIG5hbWU9XCJtaW4gdmFsdWVcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm1heFwiIG5hbWU9XCJtaW4gdmFsdWVcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J2RhdGUnXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbKG5nTW9kZWwpXT1cIm1pbkRhdGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1pbiBkYXRlXCI+XG4gICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICBcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlck1heERhdGVcIiBbKG5nTW9kZWwpXT1cIm1heERhdGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1heCBkYXRlXCI+XG4gICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyTWF4RGF0ZVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlck1heERhdGU+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIFxuICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nSWY9XCJ0eXBlPT0ncmFkaW8nIHx8IHR5cGU9PSdjaGVja2JveCcgfHwgdHlwZT09J2Ryb3Bkb3duJ1wiPlxuICAgICAgPGxhYmVsIGZvcj1cImxhYmVsXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5PcHRpb25zPC9sYWJlbD5cbiAgXG4gICAgICA8dWwgY2xhc3M9XCJjb2xcIiAqbmdGb3I9XCJsZXQgb3B0IG9mIG9wdGlvbnM7bGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJcIj5cbiAgICAgICAgICA8c3Bhbj57e29wdC5sYWJlbH19IDwvc3Bhbj48c3BhbiBzdHlsZT1cIlxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XCIgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihvcHQsaSlcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIG1hdElucHV0IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtcIiBbKG5nTW9kZWwpXT1cIm5ld09wdGlvbkxhYmVsXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5ld09wdGlvblwiPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXhcIiBkaXNhYmxlZCBtYXRJbnB1dCBuYW1lPVwibmV3T3B0aW9uXCIgcGxhY2Vob2xkZXI9XCJrZXlcIiBbKG5nTW9kZWwpXT1cIm5ld09wdGlvbktleVwiPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgKGNsaWNrKT1cIkFkZE5ld09wdGlvbnMoKVwiPlxuICAgICAgICAgIEFkZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2ICpuZ0lmPVwiZmlsdGVyZWRkYXRhICYmIGZpbHRlcmVkZGF0YS5sZW5ndGggPiAwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICAgIDxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5EbyB5b3Ugd2FudCB0byByZWxhdGVkIHRoZSBxdWVzdGlvbiBiYXNlZCBvbiBiZWxvdyBvcHRpb25zID88L2xhYmVsPlxuICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRPcHRpb25cIj5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgKm5nRm9yPVwibGV0IGVsZSBvZiBvcHRpb25zXCIgW3ZhbHVlXT1cImVsZVwiPlxuICAgICAgICAgICAge3sgZWxlLmxhYmVsIH19XG4gICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICBcbiAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxtYXQtbGFiZWw+U2VsZWN0IFF1ZXN0aW9uIHRvIGFkZCA8L21hdC1sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgWyhuZ01vZGVsKV09XCJjdXJyZW50U2VsZWN0ZWRRdG5cIj5cbiAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHZhbHVlcyBvZiBmaWx0ZXJlZGRhdGFcIiBbbmdWYWx1ZV09XCJ2YWx1ZXNcIj4ge3sgdmFsdWVzLmxhYmVsIH19IDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPC9kaXY+XG4gIFxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0ndGV4dCcgfHwgdHlwZT09J2RhdGUnIHx8IHR5cGU9PSdudW1iZXInXCI+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8bWF0LWxhYmVsPlNlbGVjdCBDb25kaXRpb24gPC9tYXQtbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwiY29uZGl0aW9uXCI+XG4gICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB2YWx1ZXMgb2YgY29uZGl0aW9uQXJyYXlcIiBbbmdWYWx1ZV09XCJ2YWx1ZXMuY29uZGl0aW9uXCI+IHt7IHZhbHVlcy5sYWJlbCB9fSA8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDwvZGl2PlxuICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3RleHQnIHx8IHR5cGU9PSdkYXRlJyB8fCB0eXBlPT0nbnVtYmVyJ1wiPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXhcIiBtYXRJbnB1dCBuYW1lPVwiY29uZGl0aW9uTWF0Y2hWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCIgWyhuZ01vZGVsKV09XCJjb25kaXRpb25NYXRjaFZhbHVlXCI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8L2Rpdj5cbiAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiIChjbGljayk9XCJwYXJlbnRNYXBwaW5nKClcIj5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgXG4gICAgPHVsIGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nRm9yPVwibGV0IHJlbGF0ZSBvZiBsaXN0T2ZSZWxhdGlvbjtsZXQgaSA9IGluZGV4XCI+XG4gICAgICA8bGkgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgPHNwYW4+e3tyZWxhdGUubGFiZWx9fSA8L3NwYW4+PHNwYW4gc3R5bGU9XCJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XCIgKGNsaWNrKT1cImRlbGV0ZUNvbmRpdGlvbihyZWxhdGUsaSlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgXG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIDxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBSZXFpcmVkID88L2xhYmVsPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCIgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCIgWyhuZ01vZGVsKV09XCJyZXF1aXJlZFwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgICAgICAgIFllc1xuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgICAgICAgIE5vXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbiAgICAgIDxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBhdXRvQ29sbGVjdDwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbKG5nTW9kZWwpXT1cImF1dG9Db2xsZWN0XCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPXRydWU+XG4gICAgICAgICAgVHJ1ZVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgICAgICAgIEZhbHNlXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvZGl2PlxuICBcbiAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICBcbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjEwcHg7XCIgKGNsaWNrKT1cImNsb3NlTW9kZWwoJ3NhdmUnKVwiPlxuICAgICAgICBTYXZlXG4gICAgICA8L2J1dHRvbj5cbiAgXG4gICAgPC9kaXY+XG4gIFxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgW2Zvcm1Hcm91cF09XCJmb3JtXCJcbiAgICBzdHlsZT1cInBhZGRpbmc6MHB4O21hcmdpbjowcHg7bWFyZ2luLXRvcDoxMHB4O2JveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO3BhZGRpbmctYm90dG9tOjEwcHg7XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJxdG5fcG9zaXRpb25cIj48c3BhbiBjbGFzcz1cIlwiPiN7eyBmaWVsZC5wb3NpdGlvbiB9fTwvc3Bhbj48L3NwYW4+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29tcG9uZW50XCI+XG4gIFxuICAgICAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiIChjbGljayk9XCJkZWxldGVFbGVtZW50KGZpZWxkKVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+IDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIiAoY2xpY2spPVwiY29weUVsZW1lbnQoZmllbGQpXCI+PGkgY2xhc3M9XCJmYSBmYS1jb3B5XCI+PC9pPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIiAoY2xpY2spPVwibG9hZEZvcm1FbGVtZW50KGZpZWxkKVwiPjwvaT48L3NwYW4+XG4gIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIiBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxuICAgICAgPHRleHRib3ggKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cbiAgICAgIDx0ZXh0Ym94ICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuICAgICAgPGRhdGUgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2RhdGU+XG4gICAgICA8c2xpZGVyICpuZ1N3aXRjaENhc2U9XCInc2xpZGVyJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3NsaWRlcj5cbiAgICAgIDxkcm9wZG93biAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2Ryb3Bkb3duPlxuICAgICAgPGNoZWNrYm94ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvY2hlY2tib3g+XG4gICAgICA8cmFkaW8gKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9yYWRpbz5cbiAgICAgIDxsaWItbXVsdGktc2VsZWN0ICpuZ1N3aXRjaENhc2U9XCInbWF0cml4J1wiIGNka0RyYWcgKGNoaWxkcmVuRHJvcEV2ZW50KT1cImNoaWxkcmVuRHJvcEV2ZW50KCRldmVudClcIiBbZmllbGRdPVwiZmllbGRcIlxuICAgICAgICBbZm9ybV09XCJmb3JtXCI+PC9saWItbXVsdGktc2VsZWN0PlxuICAgICAgPGZpbGUgKm5nU3dpdGNoQ2FzZT1cIidmaWxlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2ZpbGU+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PmAsXG4gIHN0eWxlczogW2BcbiAgLnF0bl9wb3NpdGlvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggNXB4O1xuICAgIGNvbG9yOiAjY2NjO1xuICB9IGBcbiAgXVxufSlcblxuLy8gPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBteS0xIHAtMiBmYWRlSW5Eb3duIGFuaW1hdGVkXCIgKm5nSWY9XCIhaXNWYWxpZCAmJiBpc0RpcnR5XCI+e3tmaWVsZC5sYWJlbH19IGlzIHJlcXVpcmVkPC9kaXY+XG5cbmV4cG9ydCBjbGFzcyBGaWVsZEJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55O1xuXG4gIEBJbnB1dCgpIGNyaXRlcmlhTGlzdDogYW55O1xuICBASW5wdXQoKSBmb3JtOiBhbnk7XG5cbiAgQE91dHB1dCgpIHNlbmREYXRhVG9QYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgY29weU9yRGVsZXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgZmlsdGVyZWRkYXRhOiBhbnk7XG4gIGdldFNlbGVjdFF1ZXN0aW9uOiBhbnk7XG4gIGNsb3NlUmVzdWx0OiBzdHJpbmc7XG4gIG1vZGFsUmVmZXJlbmNlOiBhbnk7XG4gIHBhZ2VOdW1iZXI7IGFueTtcbiAgbGFiZWw6IGFueTtcbiAgdHlwZTogYW55O1xuICBwbGFjZWhvbGRlcjogYW55O1xuICBvcHRpb25zOiBhbnk7XG4gIG5ld09wdGlvbktleTogYW55O1xuICBuZXdPcHRpb25MYWJlbDogYW55O1xuXG4gIHBhZ2VzID0gW3tcbiAgICBsYWJlbDogJ3BhZ2UgMScsXG4gICAgdmFsdWU6ICdwYWdlIDEnXG4gIH0se1xuICAgIGxhYmVsOiAncGFnZSAyJyxcbiAgICB2YWx1ZTogJ3BhZ2UgMidcbiAgfSx7XG4gICAgbGFiZWw6ICdwYWdlIDMnLFxuICAgIHZhbHVlOiAncGFnZSAzJ1xuICB9XVxuXG4gIGFjdGl2ZU1vZGVsRGF0YTogYW55O1xuICB2YWxpZGF0aW9uczogYW55O1xuICByZXF1aXJlZDogYW55O1xuICBhdXRvQ29sbGVjdDogYW55O1xuICBvcGVuRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBfaWQ6IGFueTtcbiAgZGVzY3JpcHRpb246IGFueTtcbiAgbWluRGF0ZTogYW55O1xuICBtYXhEYXRlOiBhbnk7XG4gIG1pbjogYW55O1xuICBtYXg6IGFueTtcbiAgZHJhZnRDcml0ZXJpYUlkOiBhbnk7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBhbGxEYXRhOiBhbnk7XG4gIGN1cnJlbnRTZWxlY3RlZFF0bjogYW55O1xuICBzZWxlY3RlZE9wdGlvbjogYW55O1xuXG4gIGxpc3RPZlJlbGF0aW9uOiBhbnkgPSBbXTtcbiAgY29uZGl0aW9uOiBhbnk7XG5cbiAgY29uZGl0aW9uTWF0Y2hWYWx1ZTogYW55O1xuXG4gIGNvbmRpdGlvbkFycmF5OiBhbnkgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiZXF1YWxzXCIsXG4gICAgICBjb25kaXRpb246IFwiPT09XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk5vdCBFcXVhbCBUb1wiLFxuICAgICAgY29uZGl0aW9uOiBcIiE9XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkdyZWF0ZXIgVGhhblwiLFxuICAgICAgY29uZGl0aW9uOiBcIj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiTGVzcyBUaGFuXCIsXG4gICAgICBjb25kaXRpb246IFwiPFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJHcmVhdGVyIFRoYW4gT3IgRXF1YWxcIixcbiAgICAgIGNvbmRpdGlvbjogXCI+PVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJMZXNzIFRoYW4gT3IgRXF1YWxcIixcbiAgICAgIGNvbmRpdGlvbjogXCI8PVwiXG4gICAgfVxuICBdXG5cblxuICAvLyBwcml2YXRlIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBteU1vZGFsOiBFbGVtZW50UmVmO1xuXG4gIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxuICAgIHByaXZhdGUgZHluYW1pY1NlcnZlOiBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlXG4gICkge1xuXG4gIH1cblxuICAvLyBnZXRBbGwoKXtcbiAgLy8gICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHsgXG4gIC8vICAgICBjb25zb2xlLmxvZyhcImdldCBhbGwgaW5mb1wiLG1lc3NhZ2UpO1xuXG4gIC8vICAgIH0pO1xuXG4gIC8vIH0gICBcblxuXG4gIHBhcmVudE1hcHBpbmcoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25kaXRpb24sIFwiY29uZGl0aW9uXCIsIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLCBcInNlbGVjdGVkT3B0aW9uXCIsIHRoaXMuc2VsZWN0ZWRPcHRpb24pO1xuICAgIGxldCBvYmogPSB7fVxuICAgIC8vIG9wdGlvbjp0aGlzLnNlbGVjdGVkT3B0aW9uLFxuICAgIC8vIHF1ZXN0aW9uOnRoaXMuY3VycmVudFNlbGVjdGVkUXRuXG4gICAgLy8gb2JqWyd2aXNpYmxlSWYnXSA9IFtdO1xuXG5cbiAgICBsZXQgY29uZGlPYmogPSB7XG4gICAgICBvcGVyYXRvcjogdGhpcy5jb25kaXRpb24sXG4gICAgICB2YWx1ZTogdGhpcy5jb25kaXRpb25NYXRjaFZhbHVlLFxuICAgICAgZmllbGQ6IHRoaXMuZmllbGQuZmllbGQsXG4gICAgICBsYWJlbDogdGhpcy5maWVsZC5sYWJlbFxuICAgICAgLy8gcGFyZW50OnRoaXMuc2VsZWN0ZWRPcHRpb24uZmllbGRcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4ucGFyZW50Q2hpbGRyZW4pIHtcbiAgICAvLyAgIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLnBhcmVudENoaWxkcmVuLnB1c2goY29uZGlPYmopO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbiA9IFtdO1xuICAgIC8vICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4ucGFyZW50Q2hpbGRyZW4ucHVzaChjb25kaU9iaik7XG4gICAgLy8gfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bicsIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29uZGlPYmpcIiwgY29uZGlPYmopO1xuICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb24gPSB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddWydxdWVzdGlvbkxpc3QnXS5maWx0ZXIoZWxlID0+IHtcbiAgICAgIGlmIChlbGUuZmllbGQgPT0gdGhpcy5maWVsZC5maWVsZCkge1xuICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJnZXRTZWxlY3RRdWVzdGlvblwiLCB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uKTtcblxuICAgIGxldCBpc0F2YWlsYWJsZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmdldFNlbGVjdFF1ZXN0aW9uWyd2aXNpYmxlSWYnXSAmJiB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uWyd2aXNpYmxlSWYnXS5sZW5ndGggPiAwKSB7XG4gICAgICBpc0F2YWlsYWJsZSA9IHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udmlzaWJsZUlmLmZpZWxkID09IHRoaXMuZmllbGQuZmllbGQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuXG5cblxuXG4gICAgY29uc29sZS5sb2coXCJhZnRlciBnZXRTZWxlY3RRdWVzdGlvblwiLCB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uKTtcblxuICAgIGxldCBhbGxEYXRhID0gW107XG5cblxuXG4gICAgbGV0IGFkZE9iaiA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWdnZXJcbiAgICAgIGlmICh0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpICE9PSAtMSkge1xuICAgICAgICAgIGFsZXJ0KFwiVmFsdWUgZXhpc3RzIVwiKVxuXG4gICAgICAgICAgYWRkT2JqID0gZmFsc2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGFkZE9iaiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbi5wdXNoKHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRPYmogPSB0cnVlO1xuICAgICAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4ucHVzaCh0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAoYWRkT2JqKSB7XG5cblxuICAgICAgYWxsRGF0YSA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcihlbGUgPT4ge1xuICAgICAgICBpZiAoZWxlLmZpZWxkID09IHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKSB7XG4gICAgICAgICAgaWYgKGVsZS52aXNpYmxlSWYgJiYgZWxlLnZpc2libGVJZi5sZW5ndGggPiAwICYmIGlzQXZhaWxhYmxlID09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmLnB1c2goY29uZGlPYmopO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmID0gW107XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmLnB1c2goY29uZGlPYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlbGVcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuXG4gICAgICBjb25zb2xlLmxvZyhcImFsbCBkYXRhIGluIHF1ZXN0aW9uXCIsIGFsbERhdGEpO1xuXG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQoKVxuXG5cblxuXG5cblxuICAgICAgaWYgKCF0aGlzLmxpc3RPZlJlbGF0aW9uLmluY2x1ZGVzKGNvbmRpT2JqKSkge1xuXG4gICAgICAgIHRoaXMubGlzdE9mUmVsYXRpb24ucHVzaChjb25kaU9iaik7XG5cblxuICAgICAgfVxuXG5cbiAgICB9XG5cblxuXG4gICAgaWYgKHRoaXMuY29uZGl0aW9uKSB7XG5cblxuXG5cbiAgICB9XG5cblxuXG4gICAgLy8gJ29wdGlvbic6dGhpcy5zZWxlY3RlZE9wdGlvbixcbiAgICAvLyAgICAgICAncXVlc3Rpb24nOnRoaXMuY3VycmVudFNlbGVjdGVkUXRuXG5cbiAgICAvLyB0aGlzLmZpZWxkLmNoaWxkUW50ID0gdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQ7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb25cIiwgdGhpcy5saXN0T2ZSZWxhdGlvbik7XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cblxuXG4gICAgLy8gdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4gPSB7IH07XG5cbiAgICAvLyB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIHRoaXMudmFsaWRhdGlvbnMgPSB7XG4gICAgICAncmVsYXRpb24nOiBbXVxuICAgIH1cblxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMgPSB7XG4gICAgICAncmVsYXRpb24nOiBbXVxuICAgIH07XG5cbiAgfVxuICBsb2FkRm9ybUVsZW1lbnQoaXRlbSkge1xuXG4gICAgY29uc29sZS5sb2coJ2xvYWRGb3JtRWxlbWVudCcsIGl0ZW0pO1xuICAgIHRoaXMuYWxsRGF0YSA9IHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5hbGxEYXRhLCBcIiBhbGwgcXVlc3Rpb25zIFwiLCB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddKTtcblxuXG5cbiAgICB0aGlzLmZpbHRlcmVkZGF0YSA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcih0ID0+IHQuZmllbGQgIT09IGl0ZW0uZmllbGQpO1xuXG4gICAgdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J107XG5cbiAgICB0aGlzLmNyaXRlcmlhTGlzdCA9IHRoaXMuYWxsRGF0YVsnY3JpdGVyaWFMaXN0J107XG4gICAgY29uc29sZS5sb2coJ2NvbnN0IGZpbHRlcmVkZGF0YScsIHRoaXMuZmlsdGVyZWRkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbGVuZ3RoJywgdGhpcy5maWx0ZXJlZGRhdGFbJ3F1ZXN0aW9uTGlzdCddLmxlbmd0aCk7XG5cbiAgICAvLyB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJpdGVtIC0tLVwiLCApO1xuXG4gICAgdGhpcy5hY3RpdmVNb2RlbERhdGEgPSBcIlwiO1xuICAgIHRoaXMubGFiZWwgPSBpdGVtLmxhYmVsO1xuICAgIHRoaXMudHlwZSA9IGl0ZW0udHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gaXRlbS5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBpdGVtLm9wdGlvbnM7XG4gICAgdGhpcy5kcmFmdENyaXRlcmlhSWQgPSBpdGVtLmRyYWZ0Q3JpdGVyaWFJZDtcbiAgICAvLyB0aGlzLnBhZ2VzID0gdGhpcy5wYWdlc1xuICAgIHRoaXMucmVxdWlyZWQgPSBpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICBpZiAoaXRlbS52YWxpZGF0aW9ucy5yZWxhdGlvbikge1xuICAgICAgdGhpcy5saXN0T2ZSZWxhdGlvbiA9IGl0ZW0udmFsaWRhdGlvbnMucmVsYXRpb247XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0udHlwZSA9PSBcImRhdGVcIikge1xuICAgICAgdGhpcy5taW5EYXRlID0gaXRlbS52YWxpZGF0aW9ucy5taW5EYXRlO1xuICAgICAgdGhpcy5tYXhEYXRlID0gaXRlbS52YWxpZGF0aW9ucy5tYXhEYXRlXG4gICAgICB0aGlzLmF1dG9Db2xsZWN0ID0gaXRlbS52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXRlbS50eXBlID09IFwic2xpZGVyXCIpIHtcbiAgICAgIHRoaXMubWluID0gaXRlbS52YWxpZGF0aW9ucy5taW47XG4gICAgICB0aGlzLm1heCA9IGl0ZW0udmFsaWRhdGlvbnMubWF4O1xuICAgIH1cblxuXG5cbiAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZDtcbiAgICBjb25zb2xlLmxvZyhpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcIml0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWRcIiwgdGhpcy5yZXF1aXJlZCwgXCJsYWJlbFwiLCB0aGlzLmxhYmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImxhYmVsXCIsdGhpcy5sYWJlbCk7XG5cbiAgICB0aGlzLm9wZW5FZGl0ID0gdGhpcy5vcGVuRWRpdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5Nb2RhbEJ1dHRvblwiKS5jbGljaygpO1xuICAgIC8vIHRoaXMub3Blbih0aGlzLm15TW9kYWwpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5zaG93KCk7XG4gICAgLy8gdGhpcy5teU1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21vZGFsIGZhZGUgc2hvdyc7XG5cbiAgfVxuXG4gIHNhdmVFZGl0KCkge1xuICB9XG4gIGNsb3NlTW9kZWwoYWN0aW9uKSB7XG5cbiAgICBpZiAoYWN0aW9uID09IFwic2F2ZVwiKSB7XG5cblxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbGlkYXRpb25zLCBcInRoaXMuZmllbGRcIiwgdGhpcy5yZXF1aXJlZCk7XG4gICAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLmNsb3NlKCk7XG5cblxuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEuZmllbGQgPSB0aGlzLmZpZWxkLmZpZWxkO1xuXG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS50eXBlID0gdGhpcy50eXBlO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgdmFsaWRhdGlvbnM6IHRoaXMudmFsaWRhdGlvbnMsXG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICBfaWQ6IHRoaXMuX2lkLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgZHJhZnRDcml0ZXJpYUlkOiB0aGlzLmRyYWZ0Q3JpdGVyaWFJZCxcblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICBvYmpbJ21pbkRhdGUnXSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgb2JqWydtYXhEYXRlJ10gPSB0aGlzLm1heERhdGVcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIG9ialsnbWluJ10gPSB0aGlzLm1pbjtcbiAgICAgICAgb2JqWydtYXgnXSA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm9ialwiLG9iaik7XG5cblxuXG5cbiAgICAgIC8vIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuXG5cbiAgICAgIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgdGhpcy5maWVsZC50eXBlID0gdGhpcy50eXBlO1xuICAgICAgdGhpcy5maWVsZC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICB0aGlzLmZpZWxkLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICB0aGlzLmZpZWxkLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZmllbGQuZHJhZnRDcml0ZXJpYUlkID0gdGhpcy5kcmFmdENyaXRlcmlhSWQ7XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluID0gdGhpcy5taW47XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4ID0gdGhpcy5tYXg7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmKHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb24pe1xuXG4gICAgICBpZiAodGhpcy5saXN0T2ZSZWxhdGlvbikge1xuICAgICAgICBvYmoudmFsaWRhdGlvbnMucmVsYXRpb24gPSB0aGlzLmxpc3RPZlJlbGF0aW9uO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uID0gdGhpcy5saXN0T2ZSZWxhdGlvbjtcbiAgICAgIH1cblxuICAgICAgLy8gfVxuXG5cblxuICAgICAgLy8gdGhpcy5maWVsZC52YWxpZGF0aW9uc1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQsIFwic2Rkc1wiLCB0aGlzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkO1xuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG5cblxuICAgICAgY29uc29sZS5sb2cob2JqLCBcInRoaXMuZmllbGQudmFsaWRhdGlvbnNcIiwgdGhpcy5maWVsZC52YWxpZGF0aW9ucyk7XG4gICAgICBsZXQgb3AgPSB7XG4gICAgICAgIGFjdGlvbjogXCJzYXZlXCIsXG4gICAgICAgIGRhdGE6IG9ialxuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdChvcCk7XG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdChKU09OLnN0cmluZ2lmeShvYmopKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgIHRoaXMub3BlbkVkaXQgPSBmYWxzZTtcblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQodGhpcy5hY3RpdmVNb2RlbERhdGEpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5vcGVuRWRpdCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKCk7XG4gICAgLy8gIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBoaWRlJztcbiAgfVxuXG4gIG9wZW4oY29udGVudCkge1xuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuYWN0aXZlTW9kZWxEYXRhXCIsIHNlbGVjdGVkRGF0YSk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZSA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYENsb3NlZCB3aXRoYDtcbiAgICAvLyB9LCAocmVhc29uKSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYERpc21pc3NlZGA7XG4gICAgLy8gfSk7XG4gIH1cblxuICAvLyBwcml2YXRlIGdldERpc21pc3NSZWFzb24ocmVhc29uOiBhbnkpOiBzdHJpbmcge1xuICAvLyAgIC8vIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuRVNDKSB7XG4gIC8vICAgLy8gICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XG4gIC8vICAgLy8gfSBlbHNlIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuQkFDS0RST1BfQ0xJQ0spIHtcbiAgLy8gICAvLyAgIHJldHVybiAnYnkgY2xpY2tpbmcgb24gYSBiYWNrZHJvcCc7XG4gIC8vICAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyAgIHJldHVybiBgd2l0aDogJHtyZWFzb259YDtcbiAgLy8gICAvLyB9XG4gIC8vIH1cblxuICBkZWxldGVPcHRpb24ob3B0LCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBsZXQgbmV3QXJyID0gW107XG4gICAgLy8gbGV0IG9wdGlvbnNBcnIgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgLy8gaWYoaXRlbS5sYWJsZT09b3B0LmxhYmVsICYmIGl0ZW0ua2V5PT1vcHQua2V5KXtcblxuICAgICAgLy8gfWVsc2V7XG5cbiAgICAgIC8vIH1cblxuICAgICAgLy8gcmV0dXJuIChpdGVtLmxhYmVsICE9IG9wdC5sYWJlbCAmJiBpdGVtLmtleSAhPSBvcHQua2V5KVxuXG4gICAgICAvLyBpZihpdGVtLmxhYmxlPT1vcHQubGFiZWwgJiYgaXRlbS5rZXk9PW9wdC5rZXkpe1xuXG4gICAgICAvLyB9ZWxzZXtcbiAgICAgIC8vICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyB9XG4gICAgLy8gfSlcbiAgICB0aGlzLm9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNBcnI7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGUgbmV3IFwiLCB0aGlzLm9wdGlvbnMpO1xuICB9XG4gIEFkZE5ld09wdGlvbnMoKSB7XG5cbiAgICBpZiAodGhpcy5uZXdPcHRpb25MYWJlbCAhPSBcIlwiKSB7XG5cbiAgICAgIHRoaXMubmV3T3B0aW9uS2V5ID0gJ1InKyB0aGlzLm9wdGlvbnMubGVuZ3RoO1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm5ld09wdGlvblwiLCB0aGlzLm5ld09wdGlvbkxhYmVsKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zLnB1c2goe1xuICAgICAgICBrZXk6IHRoaXMubmV3T3B0aW9uS2V5LFxuICAgICAgICBsYWJlbDogdGhpcy5uZXdPcHRpb25MYWJlbFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5vcHRpb25zLnB1c2hcIiwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5uZXdPcHRpb25LZXkgPSBcIlwiO1xuICAgIHRoaXMubmV3T3B0aW9uTGFiZWwgPSBcIlwiO1xuICB9XG5cbiAgY29weUVsZW1lbnQoaXRlbSkge1xuICAgIC8vIHRoaXMuZmllbGQucHVzaChpdGVtKTtcbiAgICBpdGVtLmFjdGlvbiA9ICdjb3B5JztcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIC0tLS0tLS0tLS1cIiwgaXRlbSk7XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KGl0ZW0pO1xuXG4gIH1cbiAgZGVsZXRlRWxlbWVudChpdGVtKSB7XG5cbiAgICBpdGVtLmFjdGlvbiA9ICdkZWxldGUnO1xuICAgIHRoaXMuZmllbGQuaXNEZWxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChpdGVtKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcblxuICB9XG4gIGNoaWxkcmVuRHJvcEV2ZW50KCRldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2hpbGRyZW5Ecm9wRXZlbnRcIiwgdGhpcy5maWVsZCk7XG4gICAgLy8gY29uc3QgYWN0aW9uICA9ICdjaGlsZERyb3BlZCc7XG4gICAgbGV0IG5ld09iaiA9IHtcbiAgICAgIGFjdGlvbjogJ2NoaWxkRHJvcGVkJyxcbiAgICAgIGRhdGE6ICRldmVudFxuICAgIH1cbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQobmV3T2JqKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcbiAgfVxuXG4gIGRlbGV0ZUNvbmRpdGlvbihkYXRhLCB2YWx1ZSkge1xuICAgIC8vIHZhciBpbmRleCA9IHRoaXMubGlzdE9mUmVsYXRpb24uaW5kZXhPZih2YWx1ZSk7XG4gICAgLy8gaWYgKGluZGV4ID4gLTEpIHtcbiAgICB0aGlzLmxpc3RPZlJlbGF0aW9uLnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvblswXS5wYXJlbnRDaGlsZHJlbi5zcGxpY2UodmFsdWUsIDEpO1xuICAgIC8vIH1cblxuICAgIGNvbnNvbGUubG9nKCdhZnRlciBkZWxldGUgZGF0YScsIHRoaXMubGlzdE9mUmVsYXRpb24pO1xuICB9XG5cblxuICBhZGQoZGF0YSl7XG4gICAgY29uc29sZS5sb2coJyBhZGQgZGF0YScsIGRhdGEpO1xuICAgIGxldCBwYWdlID0ge1xuICAgIGxhYmVsOiAncGFnZScrJyAnKyAoZGF0YS5sZW5ndGggKyAxKSxcbiAgICB2YWx1ZTogJ3BhZ2UnKycgJysgKGRhdGEubGVuZ3RoICsgMSkgICxcbiAgICB9XG4gICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xuICAgIHRoaXMuZHluYW1pY1NlcnZlLnNldFBhZ2VOdW1iZXIodGhpcy5wYWdlcyk7XG4gIH1cbn1cbiJdfQ==