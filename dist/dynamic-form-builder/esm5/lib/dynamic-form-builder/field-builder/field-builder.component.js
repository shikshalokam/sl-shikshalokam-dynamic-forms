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
    FieldBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'field-builder',
                    template: "\n  <style>\n  .mat-slider-horizontal {\n    min-width: 80% !important;\n  }\n  .example-radio-group {\n    display: flex;\n    flex-direction: block;\n    margin: 15px 0; \n  }\n\n  .mat-form-field {\n    display: block;\n    position: relative;\n    flex: auto;\n    min-width: 0;\n    width: 372px;\n  }\n  .input-group {\n    position: relative;\n     border-collapse: separate;\n     display: block;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  .action-component {\n    padding:10px 10px 0px 0px;\n    right: 0px;\n    cursor: pointer;\n    float: right;\n  \n}\nspan.cursor-pntr {\n  cursor: pointer;\n  padding: 2px;\n}\n.form-control {\n  display: block;\n  visibility: hidden;\n\n}\n.label.col-md-8.form-control-label {\n  text-decoration: underline;\n}\n\n  </style>\n  <div class=\"row\"  *ngIf=\"openEdit\" style=\"padding: 15px;\n  border: 1px solid #ccc;margin-top:10px;width:85%;margin-top:40px;margin: auto;\n  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);margin-top:20px;\">\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" name=\"label\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" name=\"Description\">\n      </mat-form-field>\n    </div>\n\n<div class=\"col-sm-6 \" style=\"display:none\">\n  <mat-form-field>\n  <mat-label>Input Type</mat-label>\n    <mat-select  [(ngModel)]=\"type\">\n      <mat-option value=\"text\">text</mat-option>\n      <mat-option value=\"number\">number</mat-option>\n      <mat-option value=\"radio\">radio</mat-option>\n      <mat-option value=\"date\">date</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"col-sm-6\">\n<mat-form-field>\n<mat-label>Pages</mat-label>\n  <mat-select  [(ngModel)]=\"pageNumber\">\n    <mat-option value=\"page_1\">page 1</mat-option>\n    <mat-option value=\"page_2\">page 2</mat-option>\n    <mat-option value=\"page_3\">page 3</mat-option>\n  </mat-select>\n</mat-form-field>\n</div>\n \n<div class=\"col-sm-6\">\n<mat-form-field>\n<mat-label>Criteria</mat-label>\n  <mat-select  [(ngModel)]=\"draftCriteriaId\">\n    <mat-option *ngFor=\"let item of criteriaList\" value=\"item._id\">{{ item.name}}</mat-option>\n   </mat-select>\n</mat-form-field>\n</div>\n\n\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Min\" matInput  [(ngModel)]=\"min\" name=\"min value\">\n    </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Max\" matInput  [(ngModel)]=\"max\" name=\"min value\">\n    </mat-form-field>\n    </div>\n    \n  <div class=\"col-sm-6\" *ngIf=\"type=='date'\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" placeholder=\"Choose a min date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" placeholder=\"Choose a max date\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerMaxDate></mat-datepicker>\n    </mat-form-field>\n\n\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n    <label for=\"label\" class=\"col-sm-12\">Options</label>\n    \n    <ul class=\"col\" *ngFor=\"let opt of options;let index\">\n     <li class=\"\">\n      <span>{{opt.label}} </span><span style=\"\n      margin-left: 30px;\" (click)=\"deleteOption(opt,index)\">\n      <i class=\"fa fa-trash\"></i></span>\n    </li>\n    </ul>\n\n    <div class=\"col-sm-6\">\n    <div class=\"input-group\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Label\" matInput style=\"margin-bottom: 10px;\" [(ngModel)]=\"newOptionLabel\" name=\"newOption\">\n    </mat-form-field>\n    <mat-form-field>\n    <input type=\"tex\" matInput name=\"newOption\" placeholder=\"key\"  [(ngModel)]=\"newOptionKey\">\n    </mat-form-field>  \n    </div>\n      <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"AddNewOptions()\">\n      Add\n      </button>\n    </div>\n    </div>\n\n<div *ngIf =\"filtereddata && filtereddata.length > 0\">    \n<div class=\"col-sm-12\">\n<label id=\"example-radio-group-label\">Do you want to related the question based on below options ?</label>\n<mat-radio-group\naria-labelledby=\"example-radio-group-label\"\nclass=\"example-radio-group\"\n[(ngModel)]=\"selectedOption\">\n<mat-radio-button class=\"example-radio-button\" *ngFor=\"let ele of options\"  [value]=\"ele\">\n{{ ele.label }}\n</mat-radio-button>\n</mat-radio-group>\n</div>\n\n\n<div class=\"col-sm-6\">\n<mat-form-field >\n<mat-label>Select Question to add </mat-label>\n<select matNativeControl [(ngModel)]=\"currentSelectedQtn\" >\n<option *ngFor=\"let values of filtereddata\"  [ngValue]=\"values\"> {{ values.label }} </option>\n</select>  \n</mat-form-field>\n</div>\n\n<div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n<mat-form-field >\n<mat-label>Select Condition </mat-label>\n<select matNativeControl [(ngModel)]=\"condition\" >\n<option *ngFor=\"let values of conditionArray\"  [ngValue]=\"values.condition\"> {{ values.label }} </option>\n</select>\n</mat-form-field>\n</div>\n\n<div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n<mat-form-field>\n  <input type=\"tex\" matInput name=\"conditionMatchValue\" placeholder=\"\"  [(ngModel)]=\"conditionMatchValue\">\n  </mat-form-field> \n</div>\n\n<div class=\"col-sm-2\">\n<button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"parentMapping()\">\nAdd\n</button>\n</div>\n</div>\n<ul class=\"col-sm-12\" *ngFor=\"let relate of listOfRelation;let i = index\">\n <li class=\"col-sm-12\">\n  <span>{{relate.label}} </span><span style=\"\n  margin-left: 30px;\" (click)=\"deleteCondition(relate,i)\">\n  <i class=\"fa fa-trash\"></i></span>\n</li>\n</ul>\n\n    \n<div class=\"col-sm-12\">\n<label id=\"example-radio-group-label\">is Reqired ?</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"required\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    Yes\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    No\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n<div class=\"col-sm-12\" *ngIf=\"type=='date'\">\n<label id=\"example-radio-group-label\">is autoCollect</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"autoCollect\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    True\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    False\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n  \n<div  class=\"col-sm-12\">\n\n<button mat-flat-button color=\"primary\" style=\"margin-right:10px;\"  (click)=\"closeModel('save')\">\nSave\n</button>\n\n</div>\n  </div>\n  <div class=\"form-group row\" [formGroup]=\"form\" style=\"padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;\">\n  <span class=\"qtn_position\"><span class=\"\">#{{ field.position }}</span></span>\n  <div class=\"action-component\" >\n\n  <span class=\"cursor-pntr\" (click)=\"deleteElement(field)\"><i class=\"fa fa-trash\"></i> </span>\n  <span class=\"cursor-pntr\" (click)=\"copyElement(field)\"><i class=\"fa fa-copy\"></i></span>\n  <span class=\"cursor-pntr\"><i class=\"fa fa-edit\" (click)=\"loadFormElement(field)\" ></i></span>\n  \n  </div>\n    <div class=\"col-md-12\" [ngSwitch]=\"field.type\">\n    <textbox *ngSwitchCase=\"'number'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <date *ngSwitchCase=\"'date'\" [field]=\"field\" [form]=\"form\"></date>\n    <slider *ngSwitchCase=\"'slider'\" [field]=\"field\" [form]=\"form\"></slider>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <lib-multi-select *ngSwitchCase=\"'matrix'\"  cdkDrag (childrenDropEvent)=\"childrenDropEvent($event)\" [field]=\"field\" [form]=\"form\"></lib-multi-select>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div style=\"float:right\">\n       </div> \n       </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTy9FO0lBd1dFLCtCQUVVLFlBQXVDO1FBQXZDLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtRQXpFdkMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBaUJ0RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBYTFCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBS3pCLG1CQUFjLEdBQVE7WUFDcEI7Z0JBQ0UsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsU0FBUyxFQUFFLEtBQUs7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLElBQUk7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLEdBQUc7YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixTQUFTLEVBQUUsR0FBRzthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsU0FBUyxFQUFFLElBQUk7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixTQUFTLEVBQUUsSUFBSTthQUNoQjtTQUNGLENBQUE7SUFjRCxDQUFDO0lBUkQsc0JBQUksMENBQU87Ozs7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SzsrQkFFTCxLQUFLO3VCQUNMLEtBQUs7bUNBRUwsTUFBTTtvQ0FFTixNQUFNOzBCQWdFTixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUF5YnpDLDRCQUFDO0NBQUEsQUE1eEJELElBNHhCQztTQWpnQlkscUJBQXFCOzs7SUFDaEMsc0NBQW9COztJQUVwQiw2Q0FBMkI7O0lBQzNCLHFDQUFtQjs7SUFFbkIsaURBQXFEOztJQUVyRCxrREFBc0Q7O0lBQ3RELDZDQUFrQjs7SUFDbEIsa0RBQXVCOztJQUN2Qiw0Q0FBb0I7O0lBQ3BCLCtDQUFvQjs7SUFDcEIsMkNBQVc7O0lBQUMsb0NBQUk7O0lBQ2hCLHNDQUFXOztJQUNYLHFDQUFVOztJQUNWLDRDQUFpQjs7SUFDakIsd0NBQWE7O0lBQ2IsNkNBQWtCOztJQUNsQiwrQ0FBb0I7O0lBRXBCLGdEQUFxQjs7SUFDckIsNENBQWlCOztJQUNqQix5Q0FBYzs7SUFDZCw0Q0FBaUI7O0lBQ2pCLHlDQUEwQjs7SUFDMUIsb0NBQVM7O0lBQ1QsNENBQWlCOztJQUNqQix3Q0FBYTs7SUFDYix3Q0FBYTs7SUFDYixvQ0FBUzs7SUFDVCxvQ0FBUzs7SUFDVCxnREFBcUI7O0lBQ3JCLDZDQUEyQjs7SUFDM0Isd0NBQWE7O0lBQ2IsbURBQXdCOztJQUN4QiwrQ0FBb0I7O0lBRXBCLCtDQUF5Qjs7SUFDekIsMENBQWU7O0lBRWYsb0RBQXlCOztJQUV6QiwrQ0F5QkM7O0lBSUQsd0NBQTZEOzs7OztJQU8zRCw2Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IE5nYk1vZGFsLCBNb2RhbERpc21pc3NSZWFzb25zIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVEhJU19FWFBSIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaXNOZ1RlbXBsYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWVsZC1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHN0eWxlPlxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICBtaW4td2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBibG9jaztcbiAgICBtYXJnaW46IDE1cHggMDsgXG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiBhdXRvO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogMzcycHg7XG4gIH1cbiAgLmlucHV0LWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5hY3Rpb24tY29tcG9uZW50IHtcbiAgICBwYWRkaW5nOjEwcHggMTBweCAwcHggMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiByaWdodDtcbiAgXG59XG5zcGFuLmN1cnNvci1wbnRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAycHg7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxufVxuLmxhYmVsLmNvbC1tZC04LmZvcm0tY29udHJvbC1sYWJlbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAgKm5nSWY9XCJvcGVuRWRpdFwiIHN0eWxlPVwicGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzttYXJnaW4tdG9wOjEwcHg7d2lkdGg6ODUlO21hcmdpbi10b3A6NDBweDttYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO21hcmdpbi10b3A6MjBweDtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTGFiZWxcIiBbKG5nTW9kZWwpXT1cImxhYmVsXCIgbmFtZT1cImxhYmVsXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dCBQbGFjZSBIb2xkZXJcIiBbKG5nTW9kZWwpXT1cInBsYWNlaG9sZGVyXCIgbmFtZT1cInBsYWNlaG9sZGVyXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkhpbnQvRGVzY3JpcHRpb25cIiBbKG5nTW9kZWwpXT1cImRlc2NyaXB0aW9uXCIgbmFtZT1cIkRlc2NyaXB0aW9uXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTYgXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPklucHV0IFR5cGU8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCAgWyhuZ01vZGVsKV09XCJ0eXBlXCI+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0PC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJudW1iZXJcIj5udW1iZXI8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+cmFkaW88L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5kYXRlPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbjxtYXQtZm9ybS1maWVsZD5cbjxtYXQtbGFiZWw+UGFnZXM8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgIFsobmdNb2RlbCldPVwicGFnZU51bWJlclwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFnZV8xXCI+cGFnZSAxPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFnZV8yXCI+cGFnZSAyPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFnZV8zXCI+cGFnZSAzPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG4gXG48ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbjxtYXQtZm9ybS1maWVsZD5cbjxtYXQtbGFiZWw+Q3JpdGVyaWE8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgIFsobmdNb2RlbCldPVwiZHJhZnRDcml0ZXJpYUlkXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY3JpdGVyaWFMaXN0XCIgdmFsdWU9XCJpdGVtLl9pZFwiPnt7IGl0ZW0ubmFtZX19PC9tYXQtb3B0aW9uPlxuICAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNaW5cIiBtYXRJbnB1dCAgWyhuZ01vZGVsKV09XCJtaW5cIiBuYW1lPVwibWluIHZhbHVlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCAgWyhuZ01vZGVsKV09XCJtYXhcIiBuYW1lPVwibWluIHZhbHVlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgWyhuZ01vZGVsKV09XCJtaW5EYXRlXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBtaW4gZGF0ZVwiPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJNYXhEYXRlXCIgWyhuZ01vZGVsKV09XCJtYXhEYXRlXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBtYXggZGF0ZVwiPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJNYXhEYXRlXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlck1heERhdGU+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nSWY9XCJ0eXBlPT0ncmFkaW8nIHx8IHR5cGU9PSdjaGVja2JveCcgfHwgdHlwZT09J2Ryb3Bkb3duJ1wiPlxuICAgIDxsYWJlbCBmb3I9XCJsYWJlbFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+T3B0aW9uczwvbGFiZWw+XG4gICAgXG4gICAgPHVsIGNsYXNzPVwiY29sXCIgKm5nRm9yPVwibGV0IG9wdCBvZiBvcHRpb25zO2xldCBpbmRleFwiPlxuICAgICA8bGkgY2xhc3M9XCJcIj5cbiAgICAgIDxzcGFuPnt7b3B0LmxhYmVsfX0gPC9zcGFuPjxzcGFuIHN0eWxlPVwiXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcIiAoY2xpY2spPVwiZGVsZXRlT3B0aW9uKG9wdCxpbmRleClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9zcGFuPlxuICAgIDwvbGk+XG4gICAgPC91bD5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgbWF0SW5wdXQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiIFsobmdNb2RlbCldPVwibmV3T3B0aW9uTGFiZWxcIiBuYW1lPVwibmV3T3B0aW9uXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXhcIiBtYXRJbnB1dCBuYW1lPVwibmV3T3B0aW9uXCIgcGxhY2Vob2xkZXI9XCJrZXlcIiAgWyhuZ01vZGVsKV09XCJuZXdPcHRpb25LZXlcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPiAgXG4gICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgIChjbGljayk9XCJBZGROZXdPcHRpb25zKClcIj5cbiAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjxkaXYgKm5nSWYgPVwiZmlsdGVyZWRkYXRhICYmIGZpbHRlcmVkZGF0YS5sZW5ndGggPiAwXCI+ICAgIFxuPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPkRvIHlvdSB3YW50IHRvIHJlbGF0ZWQgdGhlIHF1ZXN0aW9uIGJhc2VkIG9uIGJlbG93IG9wdGlvbnMgPzwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG5hcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcbmNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG5bKG5nTW9kZWwpXT1cInNlbGVjdGVkT3B0aW9uXCI+XG48bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgKm5nRm9yPVwibGV0IGVsZSBvZiBvcHRpb25zXCIgIFt2YWx1ZV09XCJlbGVcIj5cbnt7IGVsZS5sYWJlbCB9fVxuPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbjxtYXQtZm9ybS1maWVsZCA+XG48bWF0LWxhYmVsPlNlbGVjdCBRdWVzdGlvbiB0byBhZGQgPC9tYXQtbGFiZWw+XG48c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgWyhuZ01vZGVsKV09XCJjdXJyZW50U2VsZWN0ZWRRdG5cIiA+XG48b3B0aW9uICpuZ0Zvcj1cImxldCB2YWx1ZXMgb2YgZmlsdGVyZWRkYXRhXCIgIFtuZ1ZhbHVlXT1cInZhbHVlc1wiPiB7eyB2YWx1ZXMubGFiZWwgfX0gPC9vcHRpb24+XG48L3NlbGVjdD4gIFxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSd0ZXh0JyB8fCB0eXBlPT0nZGF0ZScgfHwgdHlwZT09J251bWJlcidcIj5cbjxtYXQtZm9ybS1maWVsZCA+XG48bWF0LWxhYmVsPlNlbGVjdCBDb25kaXRpb24gPC9tYXQtbGFiZWw+XG48c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgWyhuZ01vZGVsKV09XCJjb25kaXRpb25cIiA+XG48b3B0aW9uICpuZ0Zvcj1cImxldCB2YWx1ZXMgb2YgY29uZGl0aW9uQXJyYXlcIiAgW25nVmFsdWVdPVwidmFsdWVzLmNvbmRpdGlvblwiPiB7eyB2YWx1ZXMubGFiZWwgfX0gPC9vcHRpb24+XG48L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0ndGV4dCcgfHwgdHlwZT09J2RhdGUnIHx8IHR5cGU9PSdudW1iZXInXCI+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCB0eXBlPVwidGV4XCIgbWF0SW5wdXQgbmFtZT1cImNvbmRpdGlvbk1hdGNoVmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiICBbKG5nTW9kZWwpXT1cImNvbmRpdGlvbk1hdGNoVmFsdWVcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD4gXG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XG48YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgIChjbGljayk9XCJwYXJlbnRNYXBwaW5nKClcIj5cbkFkZFxuPC9idXR0b24+XG48L2Rpdj5cbjwvZGl2PlxuPHVsIGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nRm9yPVwibGV0IHJlbGF0ZSBvZiBsaXN0T2ZSZWxhdGlvbjtsZXQgaSA9IGluZGV4XCI+XG4gPGxpIGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gIDxzcGFuPnt7cmVsYXRlLmxhYmVsfX0gPC9zcGFuPjxzcGFuIHN0eWxlPVwiXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1wiIChjbGljayk9XCJkZWxldGVDb25kaXRpb24ocmVsYXRlLGkpXCI+XG4gIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9zcGFuPlxuPC9saT5cbjwvdWw+XG5cbiAgICBcbjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBSZXFpcmVkID88L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcbiAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcbiAgWyhuZ01vZGVsKV09XCJyZXF1aXJlZFwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgIFllc1xuICA8L21hdC1yYWRpby1idXR0b24+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgIE5vXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIGF1dG9Db2xsZWN0PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwiYXV0b0NvbGxlY3RcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICBUcnVlXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgRmFsc2VcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48L2Rpdj5cblxuICBcbjxkaXYgIGNsYXNzPVwiY29sLXNtLTEyXCI+XG5cbjxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjEwcHg7XCIgIChjbGljayk9XCJjbG9zZU1vZGVsKCdzYXZlJylcIj5cblNhdmVcbjwvYnV0dG9uPlxuXG48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIHN0eWxlPVwicGFkZGluZzowcHg7bWFyZ2luOjBweDttYXJnaW4tdG9wOjEwcHg7Ym94LXNoYWRvdzogMXB4IDFweCAycHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7cGFkZGluZy1ib3R0b206MTBweDtcIj5cbiAgPHNwYW4gY2xhc3M9XCJxdG5fcG9zaXRpb25cIj48c3BhbiBjbGFzcz1cIlwiPiN7eyBmaWVsZC5wb3NpdGlvbiB9fTwvc3Bhbj48L3NwYW4+XG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29tcG9uZW50XCIgPlxuXG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIiAoY2xpY2spPVwiZGVsZXRlRWxlbWVudChmaWVsZClcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPiA8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIiAoY2xpY2spPVwiY29weUVsZW1lbnQoZmllbGQpXCI+PGkgY2xhc3M9XCJmYSBmYS1jb3B5XCI+PC9pPjwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIChjbGljayk9XCJsb2FkRm9ybUVsZW1lbnQoZmllbGQpXCIgPjwvaT48L3NwYW4+XG4gIFxuICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cbiAgICA8dGV4dGJveCAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuICAgIDx0ZXh0Ym94ICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuICAgIDxkYXRlICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9kYXRlPlxuICAgIDxzbGlkZXIgKm5nU3dpdGNoQ2FzZT1cIidzbGlkZXInXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvc2xpZGVyPlxuICAgICAgPGRyb3Bkb3duICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZHJvcGRvd24+XG4gICAgICA8Y2hlY2tib3ggKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9jaGVja2JveD5cbiAgICAgIDxyYWRpbyAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3JhZGlvPlxuICAgICAgPGxpYi1tdWx0aS1zZWxlY3QgKm5nU3dpdGNoQ2FzZT1cIidtYXRyaXgnXCIgIGNka0RyYWcgKGNoaWxkcmVuRHJvcEV2ZW50KT1cImNoaWxkcmVuRHJvcEV2ZW50KCRldmVudClcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9saWItbXVsdGktc2VsZWN0PlxuICAgICAgPGZpbGUgKm5nU3dpdGNoQ2FzZT1cIidmaWxlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2ZpbGU+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cbiAgICAgICA8L2Rpdj4gXG4gICAgICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbYFxuICAucXRuX3Bvc2l0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCA1cHg7XG4gICAgY29sb3I6ICNjY2M7XG4gIH0gYFxuICBdXG59KVxuXG4vLyA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIG15LTEgcC0yIGZhZGVJbkRvd24gYW5pbWF0ZWRcIiAqbmdJZj1cIiFpc1ZhbGlkICYmIGlzRGlydHlcIj57e2ZpZWxkLmxhYmVsfX0gaXMgcmVxdWlyZWQ8L2Rpdj5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnk7XG5cbiAgQElucHV0KCkgY3JpdGVyaWFMaXN0OiBhbnk7XG4gIEBJbnB1dCgpIGZvcm06IGFueTtcblxuICBAT3V0cHV0KCkgc2VuZERhdGFUb1BhcmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBjb3B5T3JEZWxldGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBmaWx0ZXJlZGRhdGE6IGFueTtcbiAgZ2V0U2VsZWN0UXVlc3Rpb246IGFueTtcbiAgY2xvc2VSZXN1bHQ6IHN0cmluZztcbiAgbW9kYWxSZWZlcmVuY2U6IGFueTtcbiAgcGFnZU51bWJlcjsgYW55O1xuICBsYWJlbDogYW55O1xuICB0eXBlOiBhbnk7XG4gIHBsYWNlaG9sZGVyOiBhbnk7XG4gIG9wdGlvbnM6IGFueTtcbiAgbmV3T3B0aW9uS2V5OiBhbnk7XG4gIG5ld09wdGlvbkxhYmVsOiBhbnk7XG5cbiAgYWN0aXZlTW9kZWxEYXRhOiBhbnk7XG4gIHZhbGlkYXRpb25zOiBhbnk7XG4gIHJlcXVpcmVkOiBhbnk7XG4gIGF1dG9Db2xsZWN0OiBhbnk7XG4gIG9wZW5FZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIF9pZDogYW55O1xuICBkZXNjcmlwdGlvbjogYW55O1xuICBtaW5EYXRlOiBhbnk7XG4gIG1heERhdGU6IGFueTtcbiAgbWluOiBhbnk7XG4gIG1heDogYW55O1xuICBkcmFmdENyaXRlcmlhSWQ6IGFueTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGFsbERhdGE6IGFueTtcbiAgY3VycmVudFNlbGVjdGVkUXRuOiBhbnk7XG4gIHNlbGVjdGVkT3B0aW9uOiBhbnk7XG5cbiAgbGlzdE9mUmVsYXRpb246IGFueSA9IFtdO1xuICBjb25kaXRpb246IGFueTtcblxuICBjb25kaXRpb25NYXRjaFZhbHVlOiBhbnk7XG5cbiAgY29uZGl0aW9uQXJyYXk6IGFueSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJlcXVhbHNcIixcbiAgICAgIGNvbmRpdGlvbjogXCI9PT1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiTm90IEVxdWFsIFRvXCIsXG4gICAgICBjb25kaXRpb246IFwiIT1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiR3JlYXRlciBUaGFuXCIsXG4gICAgICBjb25kaXRpb246IFwiPlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJMZXNzIFRoYW5cIixcbiAgICAgIGNvbmRpdGlvbjogXCI8XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkdyZWF0ZXIgVGhhbiBPciBFcXVhbFwiLFxuICAgICAgY29uZGl0aW9uOiBcIj49XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkxlc3MgVGhhbiBPciBFcXVhbFwiLFxuICAgICAgY29uZGl0aW9uOiBcIjw9XCJcbiAgICB9XG4gIF1cblxuXG4gIC8vIHByaXZhdGUgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG15TW9kYWw6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICAgcHJpdmF0ZSBkeW5hbWljU2VydmU6IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2VcbiAgKSB7XG5cbiAgfVxuXG4gIC8vIGdldEFsbCgpe1xuICAvLyAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4geyBcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZ2V0IGFsbCBpbmZvXCIsbWVzc2FnZSk7XG5cbiAgLy8gICAgfSk7XG5cbiAgLy8gfSAgIFxuXG5cbiAgcGFyZW50TWFwcGluZygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmRpdGlvbiwgXCJjb25kaXRpb25cIiwgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4sIFwic2VsZWN0ZWRPcHRpb25cIiwgdGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gICAgbGV0IG9iaiA9IHt9XG4gICAgLy8gb3B0aW9uOnRoaXMuc2VsZWN0ZWRPcHRpb24sXG4gICAgLy8gcXVlc3Rpb246dGhpcy5jdXJyZW50U2VsZWN0ZWRRdG5cbiAgICAvLyBvYmpbJ3Zpc2libGVJZiddID0gW107XG5cblxuICAgIGxldCBjb25kaU9iaiA9IHtcbiAgICAgIG9wZXJhdG9yOiB0aGlzLmNvbmRpdGlvbixcbiAgICAgIHZhbHVlOiB0aGlzLmNvbmRpdGlvbk1hdGNoVmFsdWUsXG4gICAgICBmaWVsZDogdGhpcy5maWVsZC5maWVsZCxcbiAgICAgIGxhYmVsOiB0aGlzLmZpZWxkLmxhYmVsXG4gICAgICAvLyBwYXJlbnQ6dGhpcy5zZWxlY3RlZE9wdGlvbi5maWVsZFxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbikge1xuICAgIC8vICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4ucGFyZW50Q2hpbGRyZW4ucHVzaChjb25kaU9iaik7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLnBhcmVudENoaWxkcmVuID0gW107XG4gICAgLy8gICB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbi5wdXNoKGNvbmRpT2JqKTtcbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2coJ3RoaXMuY3VycmVudFNlbGVjdGVkUXRuJywgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4pO1xuXG4gICAgY29uc29sZS5sb2coXCJjb25kaU9ialwiLCBjb25kaU9iaik7XG4gICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbiA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcihlbGUgPT4ge1xuICAgICAgaWYgKGVsZS5maWVsZCA9PSB0aGlzLmZpZWxkLmZpZWxkKSB7XG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImdldFNlbGVjdFF1ZXN0aW9uXCIsIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb24pO1xuXG4gICAgbGV0IGlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddICYmIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddLmxlbmd0aCA+IDApIHtcbiAgICAgIGlzQXZhaWxhYmxlID0gdGhpcy5nZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10uZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS52aXNpYmxlSWYuZmllbGQgPT0gdGhpcy5maWVsZC5maWVsZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG5cblxuXG5cbiAgICBjb25zb2xlLmxvZyhcImFmdGVyIGdldFNlbGVjdFF1ZXN0aW9uXCIsIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb24pO1xuXG4gICAgbGV0IGFsbERhdGEgPSBbXTtcblxuXG5cbiAgICBsZXQgYWRkT2JqID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCkgIT09IC0xKSB7XG4gICAgICAgICAgYWxlcnQoXCJWYWx1ZSBleGlzdHMhXCIpXG5cbiAgICAgICAgICBhZGRPYmogPSBmYWxzZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgYWRkT2JqID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuLnB1c2godGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE9iaiA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbi5wdXNoKHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmIChhZGRPYmopIHtcblxuXG4gICAgICBhbGxEYXRhID0gdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J10uZmlsdGVyKGVsZSA9PiB7XG4gICAgICAgIGlmIChlbGUuZmllbGQgPT0gdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpIHtcbiAgICAgICAgICBpZiAoZWxlLnZpc2libGVJZiAmJiBlbGUudmlzaWJsZUlmLmxlbmd0aCA+IDAgJiYgaXNBdmFpbGFibGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGVsZS52aXNpYmxlSWYucHVzaChjb25kaU9iaik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS52aXNpYmxlSWYgPSBbXTtcbiAgICAgICAgICAgIGVsZS52aXNpYmxlSWYucHVzaChjb25kaU9iaik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGVsZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG5cbiAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGRhdGEgaW4gcXVlc3Rpb25cIiwgYWxsRGF0YSk7XG5cbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudCgpXG5cblxuXG5cblxuXG4gICAgICBpZiAoIXRoaXMubGlzdE9mUmVsYXRpb24uaW5jbHVkZXMoY29uZGlPYmopKSB7XG5cbiAgICAgICAgdGhpcy5saXN0T2ZSZWxhdGlvbi5wdXNoKGNvbmRpT2JqKTtcblxuXG4gICAgICB9XG5cblxuICAgIH1cblxuXG5cbiAgICBpZiAodGhpcy5jb25kaXRpb24pIHtcblxuXG5cblxuICAgIH1cblxuXG5cbiAgICAvLyAnb3B0aW9uJzp0aGlzLnNlbGVjdGVkT3B0aW9uLFxuICAgIC8vICAgICAgICdxdWVzdGlvbic6dGhpcy5jdXJyZW50U2VsZWN0ZWRRdG5cblxuICAgIC8vIHRoaXMuZmllbGQuY2hpbGRRbnQgPSB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZDtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZWxhdGlvblwiLCB0aGlzLmxpc3RPZlJlbGF0aW9uKTtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuXG5cbiAgICAvLyB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0biA9IHsgfTtcblxuICAgIC8vIHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgdGhpcy52YWxpZGF0aW9ucyA9IHtcbiAgICAgICdyZWxhdGlvbic6IFtdXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucyA9IHtcbiAgICAgICdyZWxhdGlvbic6IFtdXG4gICAgfTtcblxuICB9XG4gIGxvYWRGb3JtRWxlbWVudChpdGVtKSB7XG5cbiAgICBjb25zb2xlLmxvZygnbG9hZEZvcm1FbGVtZW50JywgaXRlbSk7XG4gICAgdGhpcy5hbGxEYXRhID0gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKCk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmFsbERhdGEsIFwiIGFsbCBxdWVzdGlvbnMgXCIsIHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J10pO1xuXG4gICAgdGhpcy5maWx0ZXJlZGRhdGEgPSB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddWydxdWVzdGlvbkxpc3QnXS5maWx0ZXIodCA9PiB0LmZpZWxkICE9PSBpdGVtLmZpZWxkKTtcblxuICAgIHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddXG4gICAgY29uc29sZS5sb2coJ2NvbnN0IGZpbHRlcmVkZGF0YScsIHRoaXMuZmlsdGVyZWRkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbGVuZ3RoJywgdGhpcy5maWx0ZXJlZGRhdGFbJ3F1ZXN0aW9uTGlzdCddLmxlbmd0aCk7XG5cbiAgICAvLyB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJpdGVtIC0tLVwiLCApO1xuXG4gICAgdGhpcy5hY3RpdmVNb2RlbERhdGEgPSBcIlwiO1xuICAgIHRoaXMubGFiZWwgPSBpdGVtLmxhYmVsO1xuICAgIHRoaXMudHlwZSA9IGl0ZW0udHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gaXRlbS5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBpdGVtLm9wdGlvbnM7XG4gICAgdGhpcy5kcmFmdENyaXRlcmlhSWQgPSBpdGVtLmRyYWZ0Q3JpdGVyaWFJZDtcblxuXG5cbiAgICB0aGlzLnJlcXVpcmVkID0gaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZDtcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYgKGl0ZW0udmFsaWRhdGlvbnMucmVsYXRpb24pIHtcbiAgICAgIHRoaXMubGlzdE9mUmVsYXRpb24gPSBpdGVtLnZhbGlkYXRpb25zLnJlbGF0aW9uO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnR5cGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIHRoaXMubWluRGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWluRGF0ZTtcbiAgICAgIHRoaXMubWF4RGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWF4RGF0ZVxuICAgICAgdGhpcy5hdXRvQ29sbGVjdCA9IGl0ZW0udmFsaWRhdGlvbnMuYXV0b0NvbGxlY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW0udHlwZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICB0aGlzLm1pbiA9IGl0ZW0udmFsaWRhdGlvbnMubWluO1xuICAgICAgdGhpcy5tYXggPSBpdGVtLnZhbGlkYXRpb25zLm1heDtcbiAgICB9XG5cblxuXG4gICAgdGhpcy5yZXF1aXJlZCA9IHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQ7XG4gICAgY29uc29sZS5sb2coaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMucmVxdWlyZWQsIFwibGFiZWxcIiwgdGhpcy5sYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJsYWJlbFwiLHRoaXMubGFiZWwpO1xuXG4gICAgdGhpcy5vcGVuRWRpdCA9IHRoaXMub3BlbkVkaXQgPyBmYWxzZSA6IHRydWU7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTW9kYWxCdXR0b25cIikuY2xpY2soKTtcbiAgICAvLyB0aGlzLm9wZW4odGhpcy5teU1vZGFsKTtcbiAgICAvLyB0aGlzLm15TW9kYWwuc2hvdygpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBmYWRlIHNob3cnO1xuXG4gIH1cblxuICBzYXZlRWRpdCgpIHtcbiAgfVxuICBjbG9zZU1vZGVsKGFjdGlvbikge1xuXG4gICAgaWYgKGFjdGlvbiA9PSBcInNhdmVcIikge1xuXG5cblxuICAgICAgY29uc29sZS5sb2codGhpcy52YWxpZGF0aW9ucywgXCJ0aGlzLmZpZWxkXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuXG5cbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmZpZWxkID0gdGhpcy5maWVsZC5maWVsZDtcblxuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIGxldCBvYmogPSB7XG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHZhbGlkYXRpb25zOiB0aGlzLnZhbGlkYXRpb25zLFxuICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgX2lkOiB0aGlzLl9pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIGRyYWZ0Q3JpdGVyaWFJZDogdGhpcy5kcmFmdENyaXRlcmlhSWQsXG5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgb2JqWydtaW5EYXRlJ10gPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIG9ialsnbWF4RGF0ZSddID0gdGhpcy5tYXhEYXRlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgICBvYmpbJ21pbiddID0gdGhpcy5taW47XG4gICAgICAgIG9ialsnbWF4J10gPSB0aGlzLm1heDtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coXCJvYmpcIixvYmopO1xuXG5cblxuXG4gICAgICAvLyB0aGlzLmZpZWxkLmxhYmVsID0gdGhpcy5sYWJlbDtcblxuXG4gICAgICB0aGlzLmZpZWxkLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgIHRoaXMuZmllbGQudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIHRoaXMuZmllbGQucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgdGhpcy5maWVsZC5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgdGhpcy5maWVsZC5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmZpZWxkLmRyYWZ0Q3JpdGVyaWFJZCA9IHRoaXMuZHJhZnRDcml0ZXJpYUlkO1xuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbiA9IHRoaXMubWluO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heCA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBpZih0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uKXtcblxuICAgICAgaWYgKHRoaXMubGlzdE9mUmVsYXRpb24pIHtcbiAgICAgICAgb2JqLnZhbGlkYXRpb25zLnJlbGF0aW9uID0gdGhpcy5saXN0T2ZSZWxhdGlvbjtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZWxhdGlvbiA9IHRoaXMubGlzdE9mUmVsYXRpb247XG4gICAgICB9XG5cbiAgICAgIC8vIH1cblxuXG5cbiAgICAgIC8vIHRoaXMuZmllbGQudmFsaWRhdGlvbnNcblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZFwiLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcInNkZHNcIiwgdGhpcy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMuYXV0b0NvbGxlY3QgPSB0aGlzLmF1dG9Db2xsZWN0O1xuXG5cbiAgICAgIGNvbnNvbGUubG9nKG9iaiwgXCJ0aGlzLmZpZWxkLnZhbGlkYXRpb25zXCIsIHRoaXMuZmllbGQudmFsaWRhdGlvbnMpO1xuICAgICAgbGV0IG9wID0ge1xuICAgICAgICBhY3Rpb246IFwic2F2ZVwiLFxuICAgICAgICBkYXRhOiBvYmpcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQob3ApO1xuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGRcIiwgdGhpcy5maWVsZCk7XG4gICAgICB0aGlzLm9wZW5FZGl0ID0gZmFsc2U7XG5cbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KHRoaXMuYWN0aXZlTW9kZWxEYXRhKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMub3BlbkVkaXQgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLm1vZGFsU2VydmljZS5jbG9zZSgpO1xuICAgIC8vICB0aGlzLm15TW9kYWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnbW9kYWwgaGlkZSc7XG4gIH1cblxuICBvcGVuKGNvbnRlbnQpIHtcblxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmFjdGl2ZU1vZGVsRGF0YVwiLCBzZWxlY3RlZERhdGEpO1xuICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQpO1xuICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIC8vICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBDbG9zZWQgd2l0aGA7XG4gICAgLy8gfSwgKHJlYXNvbikgPT4ge1xuICAgIC8vICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBEaXNtaXNzZWRgO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBnZXREaXNtaXNzUmVhc29uKHJlYXNvbjogYW55KTogc3RyaW5nIHtcbiAgLy8gICAvLyBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkVTQykge1xuICAvLyAgIC8vICAgcmV0dXJuICdieSBwcmVzc2luZyBFU0MnO1xuICAvLyAgIC8vIH0gZWxzZSBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkJBQ0tEUk9QX0NMSUNLKSB7XG4gIC8vICAgLy8gICByZXR1cm4gJ2J5IGNsaWNraW5nIG9uIGEgYmFja2Ryb3AnO1xuICAvLyAgIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gICByZXR1cm4gYHdpdGg6ICR7cmVhc29ufWA7XG4gIC8vICAgLy8gfVxuICAvLyB9XG5cbiAgZGVsZXRlT3B0aW9uKG9wdCwgaW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gbGV0IG5ld0FyciA9IFtdO1xuICAgIGxldCBvcHRpb25zQXJyID0gdGhpcy5vcHRpb25zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIC8vIGlmKGl0ZW0ubGFibGU9PW9wdC5sYWJlbCAmJiBpdGVtLmtleT09b3B0LmtleSl7XG5cbiAgICAgIC8vIH1lbHNle1xuXG4gICAgICAvLyB9XG5cbiAgICAgIHJldHVybiAoaXRlbS5sYWJlbCAhPSBvcHQubGFiZWwgJiYgaXRlbS5rZXkgIT0gb3B0LmtleSlcblxuICAgICAgLy8gaWYoaXRlbS5sYWJsZT09b3B0LmxhYmVsICYmIGl0ZW0ua2V5PT1vcHQua2V5KXtcblxuICAgICAgLy8gfWVsc2V7XG4gICAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gfVxuICAgIH0pXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zQXJyO1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIG5ldyBcIiwgb3B0aW9uc0Fycik7XG4gIH1cbiAgQWRkTmV3T3B0aW9ucygpIHtcblxuICAgIGlmICh0aGlzLm5ld09wdGlvbktleSAhPSBcIlwiICYmIHRoaXMubmV3T3B0aW9uTGFiZWwgIT0gXCJcIikge1xuXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMubmV3T3B0aW9uXCIsIHRoaXMubmV3T3B0aW9uTGFiZWwpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMpKSB7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMucHVzaCh7XG4gICAgICAgIGtleTogdGhpcy5uZXdPcHRpb25LZXksXG4gICAgICAgIGxhYmVsOiB0aGlzLm5ld09wdGlvbkxhYmVsXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm9wdGlvbnMucHVzaFwiLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLm5ld09wdGlvbktleSA9IFwiXCI7XG4gICAgdGhpcy5uZXdPcHRpb25MYWJlbCA9IFwiXCI7XG4gIH1cblxuICBjb3B5RWxlbWVudChpdGVtKSB7XG4gICAgLy8gdGhpcy5maWVsZC5wdXNoKGl0ZW0pO1xuICAgIGl0ZW0uYWN0aW9uID0gJ2NvcHknO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgLS0tLS0tLS0tLVwiLCBpdGVtKTtcbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQoaXRlbSk7XG5cbiAgfVxuICBkZWxldGVFbGVtZW50KGl0ZW0pIHtcblxuICAgIGl0ZW0uYWN0aW9uID0gJ2RlbGV0ZSc7XG4gICAgdGhpcy5maWVsZC5pc0RlbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KGl0ZW0pO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgZGVsZXRlXCIsIHRoaXMuZmllbGQpO1xuXG4gIH1cbiAgY2hpbGRyZW5Ecm9wRXZlbnQoJGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJjaGlsZHJlbkRyb3BFdmVudFwiLCB0aGlzLmZpZWxkKTtcbiAgICAvLyBjb25zdCBhY3Rpb24gID0gJ2NoaWxkRHJvcGVkJztcbiAgICBsZXQgbmV3T2JqID0ge1xuICAgICAgYWN0aW9uOiAnY2hpbGREcm9wZWQnLFxuICAgICAgZGF0YTogJGV2ZW50XG4gICAgfVxuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChuZXdPYmopO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgZGVsZXRlXCIsIHRoaXMuZmllbGQpO1xuICB9XG5cbiAgZGVsZXRlQ29uZGl0aW9uKGRhdGEsIHZhbHVlKSB7XG4gICAgLy8gdmFyIGluZGV4ID0gdGhpcy5saXN0T2ZSZWxhdGlvbi5pbmRleE9mKHZhbHVlKTtcbiAgICAvLyBpZiAoaW5kZXggPiAtMSkge1xuICAgIHRoaXMubGlzdE9mUmVsYXRpb24uc3BsaWNlKHZhbHVlLCAxKTtcbiAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uWzBdLnBhcmVudENoaWxkcmVuLnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgLy8gfVxuXG4gICAgY29uc29sZS5sb2coJ2FmdGVyIGRlbGV0ZSBkYXRhJywgdGhpcy5saXN0T2ZSZWxhdGlvbik7XG4gIH1cbn1cbiJdfQ==