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
            label: 'page' + ' ' + data.length + 1,
            value: 'page' + ' ' + data.length + 1,
        };
        this.pages.push(page);
    };
    FieldBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'field-builder',
                    template: "\n  <style>\n  .mat-slider-horizontal {\n    min-width: 80% !important;\n  }\n  .example-radio-group {\n    display: flex;\n    flex-direction: block;\n    margin: 15px 0; \n  }\n\n  .mat-form-field {\n    display: block;\n    position: relative;\n    flex: auto;\n    min-width: 0;\n    width: 372px;\n  }\n  .input-group {\n    position: relative;\n     border-collapse: separate;\n     display: block;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  .action-component {\n    padding:10px 10px 0px 0px;\n    right: 0px;\n    cursor: pointer;\n    float: right;\n  \n}\nspan.cursor-pntr {\n  cursor: pointer;\n  padding: 2px;\n}\n.form-control {\n  display: block;\n  visibility: hidden;\n\n}\n.label.col-md-8.form-control-label {\n  text-decoration: underline;\n}\n\n  </style>\n  <div class=\"row\"  *ngIf=\"openEdit\" style=\"padding: 15px;\n  border: 1px solid #ccc;margin-top:10px;width:85%;margin-top:40px;margin: auto;\n  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);margin-top:20px;\">\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" name=\"label\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" name=\"Description\">\n      </mat-form-field>\n    </div>\n\n<div class=\"col-sm-6 \" style=\"display:none\">\n  <mat-form-field>\n  <mat-label>Input Type</mat-label>\n    <mat-select  [(ngModel)]=\"type\">\n      <mat-option value=\"text\">text</mat-option>\n      <mat-option value=\"number\">number</mat-option>\n      <mat-option value=\"radio\">radio</mat-option>\n      <mat-option value=\"date\">date</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"col-sm-6\">\n<mat-form-field>\n<mat-label>Pages</mat-label>\n\n  <mat-select  [(ngModel)]=\"pageNumber\">\n    <mat-option  *ngFor = \"let page of pages; let i = index\" value=\"page.value\">{{page.label}}</mat-option>\n  </mat-select>\n  <span style = \"float:right\" class=\"cursor-pntr\"><i class=\"fa fa-plus\" (click)=\"add(pages)\" ></i></span>\n</mat-form-field>\n</div>\n \n<div class=\"col-sm-6\">\n<mat-form-field>\n<mat-label>Criteria</mat-label>\n  <mat-select  [(ngModel)]=\"draftCriteriaId\">\n    <mat-option *ngFor=\"let item of criteriaList\" value=\"item._id\">{{ item.name}}</mat-option>\n   </mat-select>\n</mat-form-field>\n</div>\n\n\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Min\" matInput  [(ngModel)]=\"min\" name=\"min value\">\n    </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Max\" matInput  [(ngModel)]=\"max\" name=\"min value\">\n    </mat-form-field>\n    </div>\n    \n  <div class=\"col-sm-6\" *ngIf=\"type=='date'\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" placeholder=\"Choose a min date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" placeholder=\"Choose a max date\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerMaxDate></mat-datepicker>\n    </mat-form-field>\n\n\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n    <label for=\"label\" class=\"col-sm-12\">Options</label>\n    \n    <ul class=\"col\" *ngFor=\"let opt of options;let i = index\">\n     <li class=\"\">\n      <span>{{opt.label}} </span><span style=\"\n      margin-left: 30px;\" (click)=\"deleteOption(opt,i)\">\n      <i class=\"fa fa-trash\"></i></span>\n    </li>\n    </ul>\n\n    <div class=\"col-sm-6\">\n    <div class=\"input-group\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Label\" matInput style=\"margin-bottom: 10px;\" [(ngModel)]=\"newOptionLabel\" name=\"newOption\">\n    </mat-form-field>\n    <mat-form-field>\n    <input type=\"tex\" disabled matInput name=\"newOption\" placeholder=\"key\"  [(ngModel)]=\"newOptionKey\">\n    </mat-form-field>  \n    </div>\n      <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"AddNewOptions()\">\n      Add\n      </button>\n    </div>\n    </div>\n\n<div *ngIf =\"filtereddata && filtereddata.length > 0\">    \n<div class=\"col-sm-12\">\n<label id=\"example-radio-group-label\">Do you want to related the question based on below options ?</label>\n<mat-radio-group\naria-labelledby=\"example-radio-group-label\"\nclass=\"example-radio-group\"\n[(ngModel)]=\"selectedOption\">\n<mat-radio-button class=\"example-radio-button\" *ngFor=\"let ele of options\"  [value]=\"ele\">\n{{ ele.label }}\n</mat-radio-button>\n</mat-radio-group>\n</div>\n\n\n<div class=\"col-sm-6\">\n<mat-form-field >\n<mat-label>Select Question to add </mat-label>\n<select matNativeControl [(ngModel)]=\"currentSelectedQtn\" >\n<option *ngFor=\"let values of filtereddata\"  [ngValue]=\"values\"> {{ values.label }} </option>\n</select>  \n</mat-form-field>\n</div>\n\n<div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n<mat-form-field >\n<mat-label>Select Condition </mat-label>\n<select matNativeControl [(ngModel)]=\"condition\" >\n<option *ngFor=\"let values of conditionArray\"  [ngValue]=\"values.condition\"> {{ values.label }} </option>\n</select>\n</mat-form-field>\n</div>\n\n<div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n<mat-form-field>\n  <input type=\"tex\" matInput name=\"conditionMatchValue\" placeholder=\"\"  [(ngModel)]=\"conditionMatchValue\">\n  </mat-form-field> \n</div>\n\n<div class=\"col-sm-2\">\n<button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"parentMapping()\">\nAdd\n</button>\n</div>\n</div>\n<ul class=\"col-sm-12\" *ngFor=\"let relate of listOfRelation;let i = index\">\n <li class=\"col-sm-12\">\n  <span>{{relate.label}} </span><span style=\"\n  margin-left: 30px;\" (click)=\"deleteCondition(relate,i)\">\n  <i class=\"fa fa-trash\"></i></span>\n</li>\n</ul>\n\n    \n<div class=\"col-sm-12\">\n<label id=\"example-radio-group-label\">is Reqired ?</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"required\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    Yes\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    No\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n<div class=\"col-sm-12\" *ngIf=\"type=='date'\">\n<label id=\"example-radio-group-label\">is autoCollect</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"autoCollect\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    True\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    False\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n  \n<div  class=\"col-sm-12\">\n\n<button mat-flat-button color=\"primary\" style=\"margin-right:10px;\"  (click)=\"closeModel('save')\">\nSave\n</button>\n\n</div>\n  </div>\n  <div class=\"form-group row\" [formGroup]=\"form\" style=\"padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;\">\n  <span class=\"qtn_position\"><span class=\"\">#{{ field.position }}</span></span>\n  <div class=\"action-component\" >\n\n  <span class=\"cursor-pntr\" (click)=\"deleteElement(field)\"><i class=\"fa fa-trash\"></i> </span>\n  <span class=\"cursor-pntr\" (click)=\"copyElement(field)\"><i class=\"fa fa-copy\"></i></span>\n  <span class=\"cursor-pntr\"><i class=\"fa fa-edit\" (click)=\"loadFormElement(field)\" ></i></span>\n  \n  </div>\n    <div class=\"col-md-12\" [ngSwitch]=\"field.type\">\n    <textbox *ngSwitchCase=\"'number'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <date *ngSwitchCase=\"'date'\" [field]=\"field\" [form]=\"form\"></date>\n    <slider *ngSwitchCase=\"'slider'\" [field]=\"field\" [form]=\"form\"></slider>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <lib-multi-select *ngSwitchCase=\"'matrix'\"  cdkDrag (childrenDropEvent)=\"childrenDropEvent($event)\" [field]=\"field\" [form]=\"form\"></lib-multi-select>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div style=\"float:right\">\n       </div> \n       </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTy9FO0lBbVhFLCtCQUVVLFlBQXVDO1FBQXZDLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtRQXBGdkMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBYXRELFVBQUssR0FBRyxDQUFDO2dCQUNQLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxRQUFRO2FBQ2hCLEVBQUM7Z0JBQ0EsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLFFBQVE7YUFDaEIsRUFBQztnQkFDQSxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsUUFBUTthQUNoQixDQUFDLENBQUE7UUFNRixhQUFRLEdBQVksS0FBSyxDQUFDO1FBYTFCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBS3pCLG1CQUFjLEdBQVE7WUFDcEI7Z0JBQ0UsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsU0FBUyxFQUFFLEtBQUs7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLElBQUk7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLEdBQUc7YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxX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LDRDQUFpQjs7SUFDakIsd0NBQWE7O0lBQ2Isd0NBQWE7O0lBQ2Isb0NBQVM7O0lBQ1Qsb0NBQVM7O0lBQ1QsZ0RBQXFCOztJQUNyQiw2Q0FBMkI7O0lBQzNCLHdDQUFhOztJQUNiLG1EQUF3Qjs7SUFDeEIsK0NBQW9COztJQUVwQiwrQ0FBeUI7O0lBQ3pCLDBDQUFlOztJQUVmLG9EQUF5Qjs7SUFFekIsK0NBeUJDOztJQUlELHdDQUE2RDs7Ozs7SUFPM0QsNkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBOZ2JNb2RhbCwgTW9kYWxEaXNtaXNzUmVhc29ucyB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFRISVNfRVhQUiB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzTmdUZW1wbGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmllbGQtYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzdHlsZT5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgbWluLXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgfVxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4IDA7IFxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDM3MnB4O1xuICB9XG4gIC5pbnB1dC1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuYWN0aW9uLWNvbXBvbmVudCB7XG4gICAgcGFkZGluZzoxMHB4IDEwcHggMHB4IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIFxufVxuc3Bhbi5jdXJzb3ItcG50ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMnB4O1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbn1cbi5sYWJlbC5jb2wtbWQtOC5mb3JtLWNvbnRyb2wtbGFiZWwge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwicm93XCIgICpuZ0lmPVwib3BlbkVkaXRcIiBzdHlsZT1cInBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7bWFyZ2luLXRvcDoxMHB4O3dpZHRoOjg1JTttYXJnaW4tdG9wOjQwcHg7bWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjE5KTttYXJnaW4tdG9wOjIwcHg7XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgWyhuZ01vZGVsKV09XCJsYWJlbFwiIG5hbWU9XCJsYWJlbFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgUGxhY2UgSG9sZGVyXCIgWyhuZ01vZGVsKV09XCJwbGFjZWhvbGRlclwiIG5hbWU9XCJwbGFjZWhvbGRlclwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJIaW50L0Rlc2NyaXB0aW9uXCIgWyhuZ01vZGVsKV09XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJEZXNjcmlwdGlvblwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02IFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5JbnB1dCBUeXBlPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3QgIFsobmdNb2RlbCldPVwidHlwZVwiPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibnVtYmVyXCI+bnVtYmVyPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+ZGF0ZTwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQ+XG48bWF0LWxhYmVsPlBhZ2VzPC9tYXQtbGFiZWw+XG5cbiAgPG1hdC1zZWxlY3QgIFsobmdNb2RlbCldPVwicGFnZU51bWJlclwiPlxuICAgIDxtYXQtb3B0aW9uICAqbmdGb3IgPSBcImxldCBwYWdlIG9mIHBhZ2VzOyBsZXQgaSA9IGluZGV4XCIgdmFsdWU9XCJwYWdlLnZhbHVlXCI+e3twYWdlLmxhYmVsfX08L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbiAgPHNwYW4gc3R5bGUgPSBcImZsb2F0OnJpZ2h0XCIgY2xhc3M9XCJjdXJzb3ItcG50clwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiIChjbGljayk9XCJhZGQocGFnZXMpXCIgPjwvaT48L3NwYW4+XG48L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG4gXG48ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbjxtYXQtZm9ybS1maWVsZD5cbjxtYXQtbGFiZWw+Q3JpdGVyaWE8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgIFsobmdNb2RlbCldPVwiZHJhZnRDcml0ZXJpYUlkXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY3JpdGVyaWFMaXN0XCIgdmFsdWU9XCJpdGVtLl9pZFwiPnt7IGl0ZW0ubmFtZX19PC9tYXQtb3B0aW9uPlxuICAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNaW5cIiBtYXRJbnB1dCAgWyhuZ01vZGVsKV09XCJtaW5cIiBuYW1lPVwibWluIHZhbHVlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCAgWyhuZ01vZGVsKV09XCJtYXhcIiBuYW1lPVwibWluIHZhbHVlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgWyhuZ01vZGVsKV09XCJtaW5EYXRlXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBtaW4gZGF0ZVwiPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJNYXhEYXRlXCIgWyhuZ01vZGVsKV09XCJtYXhEYXRlXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBtYXggZGF0ZVwiPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJNYXhEYXRlXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlck1heERhdGU+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nSWY9XCJ0eXBlPT0ncmFkaW8nIHx8IHR5cGU9PSdjaGVja2JveCcgfHwgdHlwZT09J2Ryb3Bkb3duJ1wiPlxuICAgIDxsYWJlbCBmb3I9XCJsYWJlbFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+T3B0aW9uczwvbGFiZWw+XG4gICAgXG4gICAgPHVsIGNsYXNzPVwiY29sXCIgKm5nRm9yPVwibGV0IG9wdCBvZiBvcHRpb25zO2xldCBpID0gaW5kZXhcIj5cbiAgICAgPGxpIGNsYXNzPVwiXCI+XG4gICAgICA8c3Bhbj57e29wdC5sYWJlbH19IDwvc3Bhbj48c3BhbiBzdHlsZT1cIlxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XCIgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihvcHQsaSlcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9zcGFuPlxuICAgIDwvbGk+XG4gICAgPC91bD5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgbWF0SW5wdXQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiIFsobmdNb2RlbCldPVwibmV3T3B0aW9uTGFiZWxcIiBuYW1lPVwibmV3T3B0aW9uXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXhcIiBkaXNhYmxlZCBtYXRJbnB1dCBuYW1lPVwibmV3T3B0aW9uXCIgcGxhY2Vob2xkZXI9XCJrZXlcIiAgWyhuZ01vZGVsKV09XCJuZXdPcHRpb25LZXlcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPiAgXG4gICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgIChjbGljayk9XCJBZGROZXdPcHRpb25zKClcIj5cbiAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjxkaXYgKm5nSWYgPVwiZmlsdGVyZWRkYXRhICYmIGZpbHRlcmVkZGF0YS5sZW5ndGggPiAwXCI+ICAgIFxuPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPkRvIHlvdSB3YW50IHRvIHJlbGF0ZWQgdGhlIHF1ZXN0aW9uIGJhc2VkIG9uIGJlbG93IG9wdGlvbnMgPzwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG5hcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcbmNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG5bKG5nTW9kZWwpXT1cInNlbGVjdGVkT3B0aW9uXCI+XG48bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgKm5nRm9yPVwibGV0IGVsZSBvZiBvcHRpb25zXCIgIFt2YWx1ZV09XCJlbGVcIj5cbnt7IGVsZS5sYWJlbCB9fVxuPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbjxtYXQtZm9ybS1maWVsZCA+XG48bWF0LWxhYmVsPlNlbGVjdCBRdWVzdGlvbiB0byBhZGQgPC9tYXQtbGFiZWw+XG48c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgWyhuZ01vZGVsKV09XCJjdXJyZW50U2VsZWN0ZWRRdG5cIiA+XG48b3B0aW9uICpuZ0Zvcj1cImxldCB2YWx1ZXMgb2YgZmlsdGVyZWRkYXRhXCIgIFtuZ1ZhbHVlXT1cInZhbHVlc1wiPiB7eyB2YWx1ZXMubGFiZWwgfX0gPC9vcHRpb24+XG48L3NlbGVjdD4gIFxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSd0ZXh0JyB8fCB0eXBlPT0nZGF0ZScgfHwgdHlwZT09J251bWJlcidcIj5cbjxtYXQtZm9ybS1maWVsZCA+XG48bWF0LWxhYmVsPlNlbGVjdCBDb25kaXRpb24gPC9tYXQtbGFiZWw+XG48c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgWyhuZ01vZGVsKV09XCJjb25kaXRpb25cIiA+XG48b3B0aW9uICpuZ0Zvcj1cImxldCB2YWx1ZXMgb2YgY29uZGl0aW9uQXJyYXlcIiAgW25nVmFsdWVdPVwidmFsdWVzLmNvbmRpdGlvblwiPiB7eyB2YWx1ZXMubGFiZWwgfX0gPC9vcHRpb24+XG48L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0ndGV4dCcgfHwgdHlwZT09J2RhdGUnIHx8IHR5cGU9PSdudW1iZXInXCI+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCB0eXBlPVwidGV4XCIgbWF0SW5wdXQgbmFtZT1cImNvbmRpdGlvbk1hdGNoVmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiICBbKG5nTW9kZWwpXT1cImNvbmRpdGlvbk1hdGNoVmFsdWVcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD4gXG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XG48YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgIChjbGljayk9XCJwYXJlbnRNYXBwaW5nKClcIj5cbkFkZFxuPC9idXR0b24+XG48L2Rpdj5cbjwvZGl2PlxuPHVsIGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nRm9yPVwibGV0IHJlbGF0ZSBvZiBsaXN0T2ZSZWxhdGlvbjtsZXQgaSA9IGluZGV4XCI+XG4gPGxpIGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gIDxzcGFuPnt7cmVsYXRlLmxhYmVsfX0gPC9zcGFuPjxzcGFuIHN0eWxlPVwiXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1wiIChjbGljayk9XCJkZWxldGVDb25kaXRpb24ocmVsYXRlLGkpXCI+XG4gIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9zcGFuPlxuPC9saT5cbjwvdWw+XG5cbiAgICBcbjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBSZXFpcmVkID88L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcbiAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcbiAgWyhuZ01vZGVsKV09XCJyZXF1aXJlZFwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgIFllc1xuICA8L21hdC1yYWRpby1idXR0b24+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgIE5vXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIGF1dG9Db2xsZWN0PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwiYXV0b0NvbGxlY3RcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICBUcnVlXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgRmFsc2VcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48L2Rpdj5cblxuICBcbjxkaXYgIGNsYXNzPVwiY29sLXNtLTEyXCI+XG5cbjxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjEwcHg7XCIgIChjbGljayk9XCJjbG9zZU1vZGVsKCdzYXZlJylcIj5cblNhdmVcbjwvYnV0dG9uPlxuXG48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIHN0eWxlPVwicGFkZGluZzowcHg7bWFyZ2luOjBweDttYXJnaW4tdG9wOjEwcHg7Ym94LXNoYWRvdzogMXB4IDFweCAycHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7cGFkZGluZy1ib3R0b206MTBweDtcIj5cbiAgPHNwYW4gY2xhc3M9XCJxdG5fcG9zaXRpb25cIj48c3BhbiBjbGFzcz1cIlwiPiN7eyBmaWVsZC5wb3NpdGlvbiB9fTwvc3Bhbj48L3NwYW4+XG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29tcG9uZW50XCIgPlxuXG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIiAoY2xpY2spPVwiZGVsZXRlRWxlbWVudChmaWVsZClcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPiA8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIiAoY2xpY2spPVwiY29weUVsZW1lbnQoZmllbGQpXCI+PGkgY2xhc3M9XCJmYSBmYS1jb3B5XCI+PC9pPjwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIChjbGljayk9XCJsb2FkRm9ybUVsZW1lbnQoZmllbGQpXCIgPjwvaT48L3NwYW4+XG4gIFxuICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cbiAgICA8dGV4dGJveCAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuICAgIDx0ZXh0Ym94ICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuICAgIDxkYXRlICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9kYXRlPlxuICAgIDxzbGlkZXIgKm5nU3dpdGNoQ2FzZT1cIidzbGlkZXInXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvc2xpZGVyPlxuICAgICAgPGRyb3Bkb3duICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZHJvcGRvd24+XG4gICAgICA8Y2hlY2tib3ggKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9jaGVja2JveD5cbiAgICAgIDxyYWRpbyAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3JhZGlvPlxuICAgICAgPGxpYi1tdWx0aS1zZWxlY3QgKm5nU3dpdGNoQ2FzZT1cIidtYXRyaXgnXCIgIGNka0RyYWcgKGNoaWxkcmVuRHJvcEV2ZW50KT1cImNoaWxkcmVuRHJvcEV2ZW50KCRldmVudClcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9saWItbXVsdGktc2VsZWN0PlxuICAgICAgPGZpbGUgKm5nU3dpdGNoQ2FzZT1cIidmaWxlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2ZpbGU+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cbiAgICAgICA8L2Rpdj4gXG4gICAgICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbYFxuICAucXRuX3Bvc2l0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCA1cHg7XG4gICAgY29sb3I6ICNjY2M7XG4gIH0gYFxuICBdXG59KVxuXG4vLyA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIG15LTEgcC0yIGZhZGVJbkRvd24gYW5pbWF0ZWRcIiAqbmdJZj1cIiFpc1ZhbGlkICYmIGlzRGlydHlcIj57e2ZpZWxkLmxhYmVsfX0gaXMgcmVxdWlyZWQ8L2Rpdj5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnk7XG5cbiAgQElucHV0KCkgY3JpdGVyaWFMaXN0OiBhbnk7XG4gIEBJbnB1dCgpIGZvcm06IGFueTtcblxuICBAT3V0cHV0KCkgc2VuZERhdGFUb1BhcmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBjb3B5T3JEZWxldGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBmaWx0ZXJlZGRhdGE6IGFueTtcbiAgZ2V0U2VsZWN0UXVlc3Rpb246IGFueTtcbiAgY2xvc2VSZXN1bHQ6IHN0cmluZztcbiAgbW9kYWxSZWZlcmVuY2U6IGFueTtcbiAgcGFnZU51bWJlcjsgYW55O1xuICBsYWJlbDogYW55O1xuICB0eXBlOiBhbnk7XG4gIHBsYWNlaG9sZGVyOiBhbnk7XG4gIG9wdGlvbnM6IGFueTtcbiAgbmV3T3B0aW9uS2V5OiBhbnk7XG4gIG5ld09wdGlvbkxhYmVsOiBhbnk7XG5cbiAgcGFnZXMgPSBbe1xuICAgIGxhYmVsOiAncGFnZSAxJyxcbiAgICB2YWx1ZTogJ3BhZ2UgMSdcbiAgfSx7XG4gICAgbGFiZWw6ICdwYWdlIDInLFxuICAgIHZhbHVlOiAncGFnZSAyJ1xuICB9LHtcbiAgICBsYWJlbDogJ3BhZ2UgMycsXG4gICAgdmFsdWU6ICdwYWdlIDMnXG4gIH1dXG5cbiAgYWN0aXZlTW9kZWxEYXRhOiBhbnk7XG4gIHZhbGlkYXRpb25zOiBhbnk7XG4gIHJlcXVpcmVkOiBhbnk7XG4gIGF1dG9Db2xsZWN0OiBhbnk7XG4gIG9wZW5FZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIF9pZDogYW55O1xuICBkZXNjcmlwdGlvbjogYW55O1xuICBtaW5EYXRlOiBhbnk7XG4gIG1heERhdGU6IGFueTtcbiAgbWluOiBhbnk7XG4gIG1heDogYW55O1xuICBkcmFmdENyaXRlcmlhSWQ6IGFueTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGFsbERhdGE6IGFueTtcbiAgY3VycmVudFNlbGVjdGVkUXRuOiBhbnk7XG4gIHNlbGVjdGVkT3B0aW9uOiBhbnk7XG5cbiAgbGlzdE9mUmVsYXRpb246IGFueSA9IFtdO1xuICBjb25kaXRpb246IGFueTtcblxuICBjb25kaXRpb25NYXRjaFZhbHVlOiBhbnk7XG5cbiAgY29uZGl0aW9uQXJyYXk6IGFueSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJlcXVhbHNcIixcbiAgICAgIGNvbmRpdGlvbjogXCI9PT1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiTm90IEVxdWFsIFRvXCIsXG4gICAgICBjb25kaXRpb246IFwiIT1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiR3JlYXRlciBUaGFuXCIsXG4gICAgICBjb25kaXRpb246IFwiPlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJMZXNzIFRoYW5cIixcbiAgICAgIGNvbmRpdGlvbjogXCI8XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkdyZWF0ZXIgVGhhbiBPciBFcXVhbFwiLFxuICAgICAgY29uZGl0aW9uOiBcIj49XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkxlc3MgVGhhbiBPciBFcXVhbFwiLFxuICAgICAgY29uZGl0aW9uOiBcIjw9XCJcbiAgICB9XG4gIF1cblxuXG4gIC8vIHByaXZhdGUgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG15TW9kYWw6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICAgcHJpdmF0ZSBkeW5hbWljU2VydmU6IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2VcbiAgKSB7XG5cbiAgfVxuXG4gIC8vIGdldEFsbCgpe1xuICAvLyAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4geyBcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZ2V0IGFsbCBpbmZvXCIsbWVzc2FnZSk7XG5cbiAgLy8gICAgfSk7XG5cbiAgLy8gfSAgIFxuXG5cbiAgcGFyZW50TWFwcGluZygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmRpdGlvbiwgXCJjb25kaXRpb25cIiwgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4sIFwic2VsZWN0ZWRPcHRpb25cIiwgdGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gICAgbGV0IG9iaiA9IHt9XG4gICAgLy8gb3B0aW9uOnRoaXMuc2VsZWN0ZWRPcHRpb24sXG4gICAgLy8gcXVlc3Rpb246dGhpcy5jdXJyZW50U2VsZWN0ZWRRdG5cbiAgICAvLyBvYmpbJ3Zpc2libGVJZiddID0gW107XG5cblxuICAgIGxldCBjb25kaU9iaiA9IHtcbiAgICAgIG9wZXJhdG9yOiB0aGlzLmNvbmRpdGlvbixcbiAgICAgIHZhbHVlOiB0aGlzLmNvbmRpdGlvbk1hdGNoVmFsdWUsXG4gICAgICBmaWVsZDogdGhpcy5maWVsZC5maWVsZCxcbiAgICAgIGxhYmVsOiB0aGlzLmZpZWxkLmxhYmVsXG4gICAgICAvLyBwYXJlbnQ6dGhpcy5zZWxlY3RlZE9wdGlvbi5maWVsZFxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbikge1xuICAgIC8vICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4ucGFyZW50Q2hpbGRyZW4ucHVzaChjb25kaU9iaik7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLnBhcmVudENoaWxkcmVuID0gW107XG4gICAgLy8gICB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbi5wdXNoKGNvbmRpT2JqKTtcbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2coJ3RoaXMuY3VycmVudFNlbGVjdGVkUXRuJywgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4pO1xuXG4gICAgY29uc29sZS5sb2coXCJjb25kaU9ialwiLCBjb25kaU9iaik7XG4gICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbiA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcihlbGUgPT4ge1xuICAgICAgaWYgKGVsZS5maWVsZCA9PSB0aGlzLmZpZWxkLmZpZWxkKSB7XG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImdldFNlbGVjdFF1ZXN0aW9uXCIsIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb24pO1xuXG4gICAgbGV0IGlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddICYmIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddLmxlbmd0aCA+IDApIHtcbiAgICAgIGlzQXZhaWxhYmxlID0gdGhpcy5nZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10uZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS52aXNpYmxlSWYuZmllbGQgPT0gdGhpcy5maWVsZC5maWVsZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG5cblxuXG5cbiAgICBjb25zb2xlLmxvZyhcImFmdGVyIGdldFNlbGVjdFF1ZXN0aW9uXCIsIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb24pO1xuXG4gICAgbGV0IGFsbERhdGEgPSBbXTtcblxuXG5cbiAgICBsZXQgYWRkT2JqID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCkgIT09IC0xKSB7XG4gICAgICAgICAgYWxlcnQoXCJWYWx1ZSBleGlzdHMhXCIpXG5cbiAgICAgICAgICBhZGRPYmogPSBmYWxzZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgYWRkT2JqID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuLnB1c2godGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE9iaiA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbi5wdXNoKHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmIChhZGRPYmopIHtcblxuXG4gICAgICBhbGxEYXRhID0gdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J10uZmlsdGVyKGVsZSA9PiB7XG4gICAgICAgIGlmIChlbGUuZmllbGQgPT0gdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpIHtcbiAgICAgICAgICBpZiAoZWxlLnZpc2libGVJZiAmJiBlbGUudmlzaWJsZUlmLmxlbmd0aCA+IDAgJiYgaXNBdmFpbGFibGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGVsZS52aXNpYmxlSWYucHVzaChjb25kaU9iaik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS52aXNpYmxlSWYgPSBbXTtcbiAgICAgICAgICAgIGVsZS52aXNpYmxlSWYucHVzaChjb25kaU9iaik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGVsZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG5cbiAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGRhdGEgaW4gcXVlc3Rpb25cIiwgYWxsRGF0YSk7XG5cbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudCgpXG5cblxuXG5cblxuXG4gICAgICBpZiAoIXRoaXMubGlzdE9mUmVsYXRpb24uaW5jbHVkZXMoY29uZGlPYmopKSB7XG5cbiAgICAgICAgdGhpcy5saXN0T2ZSZWxhdGlvbi5wdXNoKGNvbmRpT2JqKTtcblxuXG4gICAgICB9XG5cblxuICAgIH1cblxuXG5cbiAgICBpZiAodGhpcy5jb25kaXRpb24pIHtcblxuXG5cblxuICAgIH1cblxuXG5cbiAgICAvLyAnb3B0aW9uJzp0aGlzLnNlbGVjdGVkT3B0aW9uLFxuICAgIC8vICAgICAgICdxdWVzdGlvbic6dGhpcy5jdXJyZW50U2VsZWN0ZWRRdG5cblxuICAgIC8vIHRoaXMuZmllbGQuY2hpbGRRbnQgPSB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZDtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZWxhdGlvblwiLCB0aGlzLmxpc3RPZlJlbGF0aW9uKTtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuXG5cbiAgICAvLyB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0biA9IHsgfTtcblxuICAgIC8vIHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgdGhpcy52YWxpZGF0aW9ucyA9IHtcbiAgICAgICdyZWxhdGlvbic6IFtdXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucyA9IHtcbiAgICAgICdyZWxhdGlvbic6IFtdXG4gICAgfTtcblxuICB9XG4gIGxvYWRGb3JtRWxlbWVudChpdGVtKSB7XG5cbiAgICBjb25zb2xlLmxvZygnbG9hZEZvcm1FbGVtZW50JywgaXRlbSk7XG4gICAgdGhpcy5hbGxEYXRhID0gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKCk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmFsbERhdGEsIFwiIGFsbCBxdWVzdGlvbnMgXCIsIHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J10pO1xuXG4gICAgdGhpcy5maWx0ZXJlZGRhdGEgPSB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddWydxdWVzdGlvbkxpc3QnXS5maWx0ZXIodCA9PiB0LmZpZWxkICE9PSBpdGVtLmZpZWxkKTtcblxuICAgIHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddXG4gICAgY29uc29sZS5sb2coJ2NvbnN0IGZpbHRlcmVkZGF0YScsIHRoaXMuZmlsdGVyZWRkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbGVuZ3RoJywgdGhpcy5maWx0ZXJlZGRhdGFbJ3F1ZXN0aW9uTGlzdCddLmxlbmd0aCk7XG5cbiAgICAvLyB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJpdGVtIC0tLVwiLCApO1xuXG4gICAgdGhpcy5hY3RpdmVNb2RlbERhdGEgPSBcIlwiO1xuICAgIHRoaXMubGFiZWwgPSBpdGVtLmxhYmVsO1xuICAgIHRoaXMudHlwZSA9IGl0ZW0udHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gaXRlbS5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBpdGVtLm9wdGlvbnM7XG4gICAgdGhpcy5kcmFmdENyaXRlcmlhSWQgPSBpdGVtLmRyYWZ0Q3JpdGVyaWFJZDtcblxuXG5cbiAgICB0aGlzLnJlcXVpcmVkID0gaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZDtcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYgKGl0ZW0udmFsaWRhdGlvbnMucmVsYXRpb24pIHtcbiAgICAgIHRoaXMubGlzdE9mUmVsYXRpb24gPSBpdGVtLnZhbGlkYXRpb25zLnJlbGF0aW9uO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnR5cGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIHRoaXMubWluRGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWluRGF0ZTtcbiAgICAgIHRoaXMubWF4RGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWF4RGF0ZVxuICAgICAgdGhpcy5hdXRvQ29sbGVjdCA9IGl0ZW0udmFsaWRhdGlvbnMuYXV0b0NvbGxlY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW0udHlwZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICB0aGlzLm1pbiA9IGl0ZW0udmFsaWRhdGlvbnMubWluO1xuICAgICAgdGhpcy5tYXggPSBpdGVtLnZhbGlkYXRpb25zLm1heDtcbiAgICB9XG5cblxuXG4gICAgdGhpcy5yZXF1aXJlZCA9IHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQ7XG4gICAgY29uc29sZS5sb2coaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMucmVxdWlyZWQsIFwibGFiZWxcIiwgdGhpcy5sYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJsYWJlbFwiLHRoaXMubGFiZWwpO1xuXG4gICAgdGhpcy5vcGVuRWRpdCA9IHRoaXMub3BlbkVkaXQgPyBmYWxzZSA6IHRydWU7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTW9kYWxCdXR0b25cIikuY2xpY2soKTtcbiAgICAvLyB0aGlzLm9wZW4odGhpcy5teU1vZGFsKTtcbiAgICAvLyB0aGlzLm15TW9kYWwuc2hvdygpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBmYWRlIHNob3cnO1xuXG4gIH1cblxuICBzYXZlRWRpdCgpIHtcbiAgfVxuICBjbG9zZU1vZGVsKGFjdGlvbikge1xuXG4gICAgaWYgKGFjdGlvbiA9PSBcInNhdmVcIikge1xuXG5cblxuICAgICAgY29uc29sZS5sb2codGhpcy52YWxpZGF0aW9ucywgXCJ0aGlzLmZpZWxkXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuXG5cbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmZpZWxkID0gdGhpcy5maWVsZC5maWVsZDtcblxuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIGxldCBvYmogPSB7XG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHZhbGlkYXRpb25zOiB0aGlzLnZhbGlkYXRpb25zLFxuICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgX2lkOiB0aGlzLl9pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIGRyYWZ0Q3JpdGVyaWFJZDogdGhpcy5kcmFmdENyaXRlcmlhSWQsXG5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgb2JqWydtaW5EYXRlJ10gPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIG9ialsnbWF4RGF0ZSddID0gdGhpcy5tYXhEYXRlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgICBvYmpbJ21pbiddID0gdGhpcy5taW47XG4gICAgICAgIG9ialsnbWF4J10gPSB0aGlzLm1heDtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coXCJvYmpcIixvYmopO1xuXG5cblxuXG4gICAgICAvLyB0aGlzLmZpZWxkLmxhYmVsID0gdGhpcy5sYWJlbDtcblxuXG4gICAgICB0aGlzLmZpZWxkLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgIHRoaXMuZmllbGQudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIHRoaXMuZmllbGQucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgdGhpcy5maWVsZC5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgdGhpcy5maWVsZC5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmZpZWxkLmRyYWZ0Q3JpdGVyaWFJZCA9IHRoaXMuZHJhZnRDcml0ZXJpYUlkO1xuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbiA9IHRoaXMubWluO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heCA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBpZih0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uKXtcblxuICAgICAgaWYgKHRoaXMubGlzdE9mUmVsYXRpb24pIHtcbiAgICAgICAgb2JqLnZhbGlkYXRpb25zLnJlbGF0aW9uID0gdGhpcy5saXN0T2ZSZWxhdGlvbjtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZWxhdGlvbiA9IHRoaXMubGlzdE9mUmVsYXRpb247XG4gICAgICB9XG5cbiAgICAgIC8vIH1cblxuXG5cbiAgICAgIC8vIHRoaXMuZmllbGQudmFsaWRhdGlvbnNcblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZFwiLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcInNkZHNcIiwgdGhpcy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMuYXV0b0NvbGxlY3QgPSB0aGlzLmF1dG9Db2xsZWN0O1xuXG5cbiAgICAgIGNvbnNvbGUubG9nKG9iaiwgXCJ0aGlzLmZpZWxkLnZhbGlkYXRpb25zXCIsIHRoaXMuZmllbGQudmFsaWRhdGlvbnMpO1xuICAgICAgbGV0IG9wID0ge1xuICAgICAgICBhY3Rpb246IFwic2F2ZVwiLFxuICAgICAgICBkYXRhOiBvYmpcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQob3ApO1xuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGRcIiwgdGhpcy5maWVsZCk7XG4gICAgICB0aGlzLm9wZW5FZGl0ID0gZmFsc2U7XG5cbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KHRoaXMuYWN0aXZlTW9kZWxEYXRhKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMub3BlbkVkaXQgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLm1vZGFsU2VydmljZS5jbG9zZSgpO1xuICAgIC8vICB0aGlzLm15TW9kYWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnbW9kYWwgaGlkZSc7XG4gIH1cblxuICBvcGVuKGNvbnRlbnQpIHtcblxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmFjdGl2ZU1vZGVsRGF0YVwiLCBzZWxlY3RlZERhdGEpO1xuICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQpO1xuICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIC8vICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBDbG9zZWQgd2l0aGA7XG4gICAgLy8gfSwgKHJlYXNvbikgPT4ge1xuICAgIC8vICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBEaXNtaXNzZWRgO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBnZXREaXNtaXNzUmVhc29uKHJlYXNvbjogYW55KTogc3RyaW5nIHtcbiAgLy8gICAvLyBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkVTQykge1xuICAvLyAgIC8vICAgcmV0dXJuICdieSBwcmVzc2luZyBFU0MnO1xuICAvLyAgIC8vIH0gZWxzZSBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkJBQ0tEUk9QX0NMSUNLKSB7XG4gIC8vICAgLy8gICByZXR1cm4gJ2J5IGNsaWNraW5nIG9uIGEgYmFja2Ryb3AnO1xuICAvLyAgIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gICByZXR1cm4gYHdpdGg6ICR7cmVhc29ufWA7XG4gIC8vICAgLy8gfVxuICAvLyB9XG5cbiAgZGVsZXRlT3B0aW9uKG9wdCwgaW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gbGV0IG5ld0FyciA9IFtdO1xuICAgIC8vIGxldCBvcHRpb25zQXJyID0gdGhpcy5vcHRpb25zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIC8vIGlmKGl0ZW0ubGFibGU9PW9wdC5sYWJlbCAmJiBpdGVtLmtleT09b3B0LmtleSl7XG5cbiAgICAgIC8vIH1lbHNle1xuXG4gICAgICAvLyB9XG5cbiAgICAgIC8vIHJldHVybiAoaXRlbS5sYWJlbCAhPSBvcHQubGFiZWwgJiYgaXRlbS5rZXkgIT0gb3B0LmtleSlcblxuICAgICAgLy8gaWYoaXRlbS5sYWJsZT09b3B0LmxhYmVsICYmIGl0ZW0ua2V5PT1vcHQua2V5KXtcblxuICAgICAgLy8gfWVsc2V7XG4gICAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gfVxuICAgIC8vIH0pXG4gICAgdGhpcy5vcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyB0aGlzLm9wdGlvbnMgPSBvcHRpb25zQXJyO1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIG5ldyBcIiwgdGhpcy5vcHRpb25zKTtcbiAgfVxuICBBZGROZXdPcHRpb25zKCkge1xuXG4gICAgaWYgKHRoaXMubmV3T3B0aW9uTGFiZWwgIT0gXCJcIikge1xuXG4gICAgICB0aGlzLm5ld09wdGlvbktleSA9ICdSJysgdGhpcy5vcHRpb25zLmxlbmd0aDtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5uZXdPcHRpb25cIiwgdGhpcy5uZXdPcHRpb25MYWJlbCk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucykpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHtcbiAgICAgICAga2V5OiB0aGlzLm5ld09wdGlvbktleSxcbiAgICAgICAgbGFiZWw6IHRoaXMubmV3T3B0aW9uTGFiZWxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMub3B0aW9ucy5wdXNoXCIsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMubmV3T3B0aW9uS2V5ID0gXCJcIjtcbiAgICB0aGlzLm5ld09wdGlvbkxhYmVsID0gXCJcIjtcbiAgfVxuXG4gIGNvcHlFbGVtZW50KGl0ZW0pIHtcbiAgICAvLyB0aGlzLmZpZWxkLnB1c2goaXRlbSk7XG4gICAgaXRlbS5hY3Rpb24gPSAnY29weSc7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCAtLS0tLS0tLS0tXCIsIGl0ZW0pO1xuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChpdGVtKTtcblxuICB9XG4gIGRlbGV0ZUVsZW1lbnQoaXRlbSkge1xuXG4gICAgaXRlbS5hY3Rpb24gPSAnZGVsZXRlJztcbiAgICB0aGlzLmZpZWxkLmlzRGVsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQoaXRlbSk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCBkZWxldGVcIiwgdGhpcy5maWVsZCk7XG5cbiAgfVxuICBjaGlsZHJlbkRyb3BFdmVudCgkZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImNoaWxkcmVuRHJvcEV2ZW50XCIsIHRoaXMuZmllbGQpO1xuICAgIC8vIGNvbnN0IGFjdGlvbiAgPSAnY2hpbGREcm9wZWQnO1xuICAgIGxldCBuZXdPYmogPSB7XG4gICAgICBhY3Rpb246ICdjaGlsZERyb3BlZCcsXG4gICAgICBkYXRhOiAkZXZlbnRcbiAgICB9XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KG5ld09iaik7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCBkZWxldGVcIiwgdGhpcy5maWVsZCk7XG4gIH1cblxuICBkZWxldGVDb25kaXRpb24oZGF0YSwgdmFsdWUpIHtcbiAgICAvLyB2YXIgaW5kZXggPSB0aGlzLmxpc3RPZlJlbGF0aW9uLmluZGV4T2YodmFsdWUpO1xuICAgIC8vIGlmIChpbmRleCA+IC0xKSB7XG4gICAgdGhpcy5saXN0T2ZSZWxhdGlvbi5zcGxpY2UodmFsdWUsIDEpO1xuICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25bMF0ucGFyZW50Q2hpbGRyZW4uc3BsaWNlKHZhbHVlLCAxKTtcbiAgICAvLyB9XG5cbiAgICBjb25zb2xlLmxvZygnYWZ0ZXIgZGVsZXRlIGRhdGEnLCB0aGlzLmxpc3RPZlJlbGF0aW9uKTtcbiAgfVxuXG5cbiAgYWRkKGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKCcgYWRkIGRhdGEnLCBkYXRhKTtcbiAgICBsZXQgcGFnZSA9IHtcbiAgICBsYWJlbDogJ3BhZ2UnKycgJysgZGF0YS5sZW5ndGggKyAxLFxuICAgIHZhbHVlOiAncGFnZScrJyAnKyBkYXRhLmxlbmd0aCArIDEgICxcbiAgICB9XG4gICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xuICB9XG59XG4iXX0=