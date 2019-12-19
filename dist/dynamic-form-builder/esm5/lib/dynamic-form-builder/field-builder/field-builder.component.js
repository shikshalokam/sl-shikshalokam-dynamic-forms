/**
 * @fileoverview added by tsickle
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
        };
        console.log("condiObj", condiObj);
        /** @type {?} */
        var getSelectQuestion = this.allData['questionList']['questionList'].filter((/**
         * @param {?} ele
         * @return {?}
         */
        function (ele) {
            if (ele.field == _this.field.field) {
                return ele;
            }
        }));
        console.log("getSelectQuestion", getSelectQuestion);
        /** @type {?} */
        var isAvailable = false;
        if (getSelectQuestion['visibleIf'] && getSelectQuestion['visibleIf'].length > 0) {
            isAvailable = getSelectQuestion['visibleIf'].filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.visibleIf.field == _this.field.field) {
                    return true;
                }
            }));
        }
        /** @type {?} */
        var allData = [];
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
        this.allData = this.dynamicServe.getALl();
        console.log(this.allData, " all questions ", this.allData['questionList']);
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
        this.copyOrDeleteEvent.emit(JSON.stringify(newObj));
        console.log("field delete", this.field);
    };
    FieldBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'field-builder',
                    template: "\n  <style>\n  .mat-slider-horizontal {\n    min-width: 80% !important;\n  }\n  .example-radio-group {\n    display: flex;\n    flex-direction: block;\n    margin: 15px 0;\n  }\n\n  .mat-form-field {\n    display: block;\n    position: relative;\n    flex: auto;\n    min-width: 0;\n    width: 372px;\n  }\n  .input-group {\n    position: relative;\n     border-collapse: separate;\n     display: block;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  .action-component {\n    padding:10px 10px 0px 0px;\n    right: 0px;\n    cursor: pointer;\n    float: right;\n  \n}\nspan.cursor-pntr {\n  cursor: pointer;\n  padding: 2px;\n}\n.form-control {\n  display: block;\n  visibility: hidden;\n\n}\n.label.col-md-8.form-control-label {\n  text-decoration: underline;\n}\n\n  </style>\n  <div class=\"row\"  *ngIf=\"openEdit\" style=\"padding: 15px;\n  border: 1px solid #ccc;margin-top:10px;width:85%;margin-top:40px;margin: auto;\n  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);\">\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" name=\"label\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" name=\"Description\">\n      </mat-form-field>\n    </div>\n\n<div class=\"col-sm-6 \" style=\"display:none\">\n  <mat-form-field>\n  <mat-label>Input Type</mat-label>\n    <mat-select  [(ngModel)]=\"type\">\n      <mat-option value=\"text\">text</mat-option>\n      <mat-option value=\"number\">number</mat-option>\n      <mat-option value=\"radio\">radio</mat-option>\n      <mat-option value=\"date\">date</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"col-sm-6\">\n<mat-form-field>\n<mat-label>Pages</mat-label>\n  <mat-select  [(ngModel)]=\"pageNumber\">\n    <mat-option value=\"page_1\">page 1</mat-option>\n    <mat-option value=\"page_2\">page 2</mat-option>\n    <mat-option value=\"page_3\">page 3</mat-option>\n  </mat-select>\n</mat-form-field>\n</div>\n \n<div class=\"col-sm-6\">\n<mat-form-field>\n<mat-label>Criteria</mat-label>\n  <mat-select  [(ngModel)]=\"draftCriteriaId\">\n    <mat-option *ngFor=\"let item of criteriaList\" value=\"item._id\">{{ item.name}}</mat-option>\n   </mat-select>\n</mat-form-field>\n</div>\n\n\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Min\" matInput  [(ngModel)]=\"min\" name=\"min value\">\n    </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Max\" matInput  [(ngModel)]=\"max\" name=\"min value\">\n    </mat-form-field>\n    </div>\n    \n  <div class=\"col-sm-6\" *ngIf=\"type=='date'\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" placeholder=\"Choose a min date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" placeholder=\"Choose a max date\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerMaxDate></mat-datepicker>\n    </mat-form-field>\n\n\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n    <label for=\"label\" class=\"col-sm-12\">Options</label>\n    \n    <ul class=\"col\" *ngFor=\"let opt of options;let index\">\n     <li class=\"\">\n      <span>{{opt.label}} </span><span style=\"\n      margin-left: 30px;\" (click)=\"deleteOption(opt,index)\">\n      <i class=\"fa fa-trash\"></i></span>\n    </li>\n    </ul>\n\n    <div class=\"col-sm-6\">\n    <div class=\"input-group\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Label\" matInput style=\"margin-bottom: 10px;\" [(ngModel)]=\"newOptionLabel\" name=\"newOption\">\n    </mat-form-field>\n    <mat-form-field>\n    <input type=\"tex\" matInput name=\"newOption\" placeholder=\"key\"  [(ngModel)]=\"newOptionKey\">\n    </mat-form-field>  \n    </div>\n      <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"AddNewOptions()\">\n      Add\n      </button>\n    </div>\n    </div>\n\n        \n    <div class=\"col-sm-12\">\n<label id=\"example-radio-group-label\">Do you want to related the question based on below options ?</label>\n<mat-radio-group\naria-labelledby=\"example-radio-group-label\"\nclass=\"example-radio-group\"\n[(ngModel)]=\"selectedOption\">\n<mat-radio-button class=\"example-radio-button\" *ngFor=\"let ele of options\"  [value]=\"ele\">\n{{ ele.label }}\n</mat-radio-button>\n</mat-radio-group>\n</div>\n\n\n<div class=\"col-sm-6\">\n<mat-form-field >\n<mat-label>Select Question to add </mat-label>\n<select matNativeControl [(ngModel)]=\"currentSelectedQtn\" >\n<option *ngFor=\"let values of allData.questionList.questionList\"  [ngValue]=\"values\"> {{ values.label }} </option>\n</select>  \n</mat-form-field>\n</div>\n\n<div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n<mat-form-field >\n<mat-label>Select Condition </mat-label>\n<select matNativeControl [(ngModel)]=\"condition\" >\n<option *ngFor=\"let values of conditionArray\"  [ngValue]=\"values.condition\"> {{ values.label }} </option>\n</select>\n</mat-form-field>\n</div>\n\n<div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n<mat-form-field>\n  <input type=\"tex\" matInput name=\"conditionMatchValue\" placeholder=\"\"  [(ngModel)]=\"conditionMatchValue\">\n  </mat-form-field> \n</div>\n\n<div class=\"col-sm-2\">\n<button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"parentMapping()\">\nAdd\n</button>\n</div>\n<ul class=\"col-sm-12\" *ngFor=\"let relate of listOfRelation;let index\">\n <li class=\"col-sm-12\">\n  <span>{{relate.field}} </span><span style=\"\n  margin-left: 30px;\" >\n  <i class=\"fa fa-trash\"></i></span>\n</li>\n</ul>\n\n    \n<div class=\"col-sm-12\">\n<label id=\"example-radio-group-label\">is Reqired ?</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"required\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    Yes\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    No\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n<div class=\"col-sm-12\" *ngIf=\"type=='date'\">\n<label id=\"example-radio-group-label\">is autoCollect</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"autoCollect\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    True\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    False\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n  \n<div  class=\"col-sm-12\">\n\n<button mat-flat-button color=\"primary\" style=\"margin-right:10px;\"  (click)=\"closeModel('save')\">\nSave\n</button>\n\n</div>\n  </div>\n  <div class=\"form-group row\" [formGroup]=\"form\" style=\"padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;\">\n  <span class=\"qtn_position\"><span class=\"\">#{{ field.position }}</span></span>\n  <div class=\"action-component\" >\n\n  <span class=\"cursor-pntr\" (click)=\"copyElement(field)\"><i class=\"fa fa-copy\"></i></span>\n  <span class=\"cursor-pntr\" (click)=\"deleteElement(field)\"><i class=\"fa fa-trash\"></i> </span>\n  <span class=\"cursor-pntr\"><i class=\"fa fa-edit\" (click)=\"loadFormElement(field)\" ></i></span>\n  \n  </div>\n    <div class=\"col-md-12\" [ngSwitch]=\"field.type\">\n    <textbox *ngSwitchCase=\"'number'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <date *ngSwitchCase=\"'date'\" [field]=\"field\" [form]=\"form\"></date>\n    <slider *ngSwitchCase=\"'slider'\" [field]=\"field\" [form]=\"form\"></slider>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <lib-multi-select *ngSwitchCase=\"'matrix'\" (childrenDropEvent)=\"childrenDropEvent($event)\" [field]=\"field\" [form]=\"form\"></lib-multi-select>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div style=\"float:right\">\n       </div> \n       </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEcsT0FBUSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPaEY7SUFzV0UsK0JBRVUsWUFBdUM7UUFBdkMsaUJBQVksR0FBWixZQUFZLENBQTJCO1FBeEV2QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTNDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFnQnpELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFhMUIsbUJBQWMsR0FBTyxFQUFFLENBQUM7UUFLeEIsbUJBQWMsR0FBTztZQUNuQjtnQkFDQSxLQUFLLEVBQUMsUUFBUTtnQkFDZCxTQUFTLEVBQUMsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFDLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBQyxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUMsY0FBYztnQkFDcEIsU0FBUyxFQUFDLEdBQUc7YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBQyxXQUFXO2dCQUNqQixTQUFTLEVBQUMsR0FBRzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFDLHVCQUF1QjtnQkFDN0IsU0FBUyxFQUFDLElBQUk7YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBQyxvQkFBb0I7Z0JBQzFCLFNBQVMsRUFBQyxJQUFJO2FBQ2Y7U0FDRixDQUFBO0lBY0UsQ0FBQztJQVJKLHNCQUFJLDBDQUFPOzs7O1FBQVgs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O2dCQTdSUyx5QkFBeUI7Ozt3QkFrU2hDLEtBQUs7K0JBRUwsS0FBSzt1QkFDTCxLQUFLO21DQUVMLE1BQU07b0NBRU4sTUFBTTswQkErRE4sU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBZ1l6Qyw0QkFBQztDQUFBLEFBanVCRCxJQWl1QkM7U0F2Y1kscUJBQXFCOzs7SUFDaEMsc0NBQW9COztJQUVwQiw2Q0FBMEI7O0lBQzFCLHFDQUFtQjs7SUFFbkIsaURBQXFEOztJQUVyRCxrREFBeUQ7O0lBRXpELDRDQUFvQjs7SUFDcEIsK0NBQW9COztJQUNwQiwyQ0FBVzs7SUFBQyxvQ0FBSTs7SUFDaEIsc0NBQVc7O0lBQ1gscUNBQVU7O0lBQ1YsNENBQWlCOztJQUNqQix3Q0FBYTs7SUFDYiw2Q0FBa0I7O0lBQ2xCLCtDQUFvQjs7SUFFcEIsZ0RBQXFCOztJQUNyQiw0Q0FBaUI7O0lBQ2pCLHlDQUFjOztJQUNkLDRDQUFpQjs7SUFDakIseUNBQTBCOztJQUMxQixvQ0FBUzs7SUFDVCw0Q0FBaUI7O0lBQ2pCLHdDQUFhOztJQUNiLHdDQUFhOztJQUNiLG9DQUFTOztJQUNULG9DQUFTOztJQUNULGdEQUFvQjs7SUFDcEIsNkNBQTJCOztJQUMzQix3Q0FBWTs7SUFDWixtREFBdUI7O0lBQ3ZCLCtDQUFtQjs7SUFFbkIsK0NBQXdCOztJQUN4QiwwQ0FBYzs7SUFFZCxvREFBd0I7O0lBRXhCLCtDQXlCQzs7SUFJRCx3Q0FBNkQ7Ozs7O0lBTzNELDZDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgTmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnMgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUSElTX0VYUFIgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0ICB7IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaXNOZ1RlbXBsYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWVsZC1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHN0eWxlPlxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICBtaW4td2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBibG9jaztcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdpZHRoOiAzNzJweDtcbiAgfVxuICAuaW5wdXQtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLmFjdGlvbi1jb21wb25lbnQge1xuICAgIHBhZGRpbmc6MTBweCAxMHB4IDBweCAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICBcbn1cbnNwYW4uY3Vyc29yLXBudHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG59XG4ubGFiZWwuY29sLW1kLTguZm9ybS1jb250cm9sLWxhYmVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cInJvd1wiICAqbmdJZj1cIm9wZW5FZGl0XCIgc3R5bGU9XCJwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO21hcmdpbi10b3A6MTBweDt3aWR0aDo4NSU7bWFyZ2luLXRvcDo0MHB4O21hcmdpbjogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgWyhuZ01vZGVsKV09XCJsYWJlbFwiIG5hbWU9XCJsYWJlbFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgUGxhY2UgSG9sZGVyXCIgWyhuZ01vZGVsKV09XCJwbGFjZWhvbGRlclwiIG5hbWU9XCJwbGFjZWhvbGRlclwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJIaW50L0Rlc2NyaXB0aW9uXCIgWyhuZ01vZGVsKV09XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJEZXNjcmlwdGlvblwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02IFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5JbnB1dCBUeXBlPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3QgIFsobmdNb2RlbCldPVwidHlwZVwiPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibnVtYmVyXCI+bnVtYmVyPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+ZGF0ZTwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQ+XG48bWF0LWxhYmVsPlBhZ2VzPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICBbKG5nTW9kZWwpXT1cInBhZ2VOdW1iZXJcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMVwiPnBhZ2UgMTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMlwiPnBhZ2UgMjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfM1wiPnBhZ2UgMzwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIFxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQ+XG48bWF0LWxhYmVsPkNyaXRlcmlhPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICBbKG5nTW9kZWwpXT1cImRyYWZ0Q3JpdGVyaWFJZFwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNyaXRlcmlhTGlzdFwiIHZhbHVlPVwiaXRlbS5faWRcIj57eyBpdGVtLm5hbWV9fTwvbWF0LW9wdGlvbj5cbiAgIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWluXCIgbWF0SW5wdXQgIFsobmdNb2RlbCldPVwibWluXCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWF4XCIgbWF0SW5wdXQgIFsobmdNb2RlbCldPVwibWF4XCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J2RhdGUnXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFsobmdNb2RlbCldPVwibWluRGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWluIGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyTWF4RGF0ZVwiIFsobmdNb2RlbCldPVwibWF4RGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWF4IGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyTWF4RGF0ZVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXJNYXhEYXRlPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiICpuZ0lmPVwidHlwZT09J3JhZGlvJyB8fCB0eXBlPT0nY2hlY2tib3gnIHx8IHR5cGU9PSdkcm9wZG93bidcIj5cbiAgICA8bGFiZWwgZm9yPVwibGFiZWxcIiBjbGFzcz1cImNvbC1zbS0xMlwiPk9wdGlvbnM8L2xhYmVsPlxuICAgIFxuICAgIDx1bCBjbGFzcz1cImNvbFwiICpuZ0Zvcj1cImxldCBvcHQgb2Ygb3B0aW9ucztsZXQgaW5kZXhcIj5cbiAgICAgPGxpIGNsYXNzPVwiXCI+XG4gICAgICA8c3Bhbj57e29wdC5sYWJlbH19IDwvc3Bhbj48c3BhbiBzdHlsZT1cIlxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XCIgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihvcHQsaW5kZXgpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj5cbiAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIG1hdElucHV0IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtcIiBbKG5nTW9kZWwpXT1cIm5ld09wdGlvbkxhYmVsXCIgbmFtZT1cIm5ld09wdGlvblwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4XCIgbWF0SW5wdXQgbmFtZT1cIm5ld09wdGlvblwiIHBsYWNlaG9sZGVyPVwia2V5XCIgIFsobmdNb2RlbCldPVwibmV3T3B0aW9uS2V5XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD4gIFxuICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiICAoY2xpY2spPVwiQWRkTmV3T3B0aW9ucygpXCI+XG4gICAgICBBZGRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgICAgIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5EbyB5b3Ugd2FudCB0byByZWxhdGVkIHRoZSBxdWVzdGlvbiBiYXNlZCBvbiBiZWxvdyBvcHRpb25zID88L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG5jbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuWyhuZ01vZGVsKV09XCJzZWxlY3RlZE9wdGlvblwiPlxuPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiICpuZ0Zvcj1cImxldCBlbGUgb2Ygb3B0aW9uc1wiICBbdmFsdWVdPVwiZWxlXCI+XG57eyBlbGUubGFiZWwgfX1cbjwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQgPlxuPG1hdC1sYWJlbD5TZWxlY3QgUXVlc3Rpb24gdG8gYWRkIDwvbWF0LWxhYmVsPlxuPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwiY3VycmVudFNlbGVjdGVkUXRuXCIgPlxuPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsdWVzIG9mIGFsbERhdGEucXVlc3Rpb25MaXN0LnF1ZXN0aW9uTGlzdFwiICBbbmdWYWx1ZV09XCJ2YWx1ZXNcIj4ge3sgdmFsdWVzLmxhYmVsIH19IDwvb3B0aW9uPlxuPC9zZWxlY3Q+ICBcbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0ndGV4dCcgfHwgdHlwZT09J2RhdGUnIHx8IHR5cGU9PSdudW1iZXInXCI+XG48bWF0LWZvcm0tZmllbGQgPlxuPG1hdC1sYWJlbD5TZWxlY3QgQ29uZGl0aW9uIDwvbWF0LWxhYmVsPlxuPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwiY29uZGl0aW9uXCIgPlxuPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsdWVzIG9mIGNvbmRpdGlvbkFycmF5XCIgIFtuZ1ZhbHVlXT1cInZhbHVlcy5jb25kaXRpb25cIj4ge3sgdmFsdWVzLmxhYmVsIH19IDwvb3B0aW9uPlxuPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3RleHQnIHx8IHR5cGU9PSdkYXRlJyB8fCB0eXBlPT0nbnVtYmVyJ1wiPlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgdHlwZT1cInRleFwiIG1hdElucHV0IG5hbWU9XCJjb25kaXRpb25NYXRjaFZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIiAgWyhuZ01vZGVsKV09XCJjb25kaXRpb25NYXRjaFZhbHVlXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+IFxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxuPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiICAoY2xpY2spPVwicGFyZW50TWFwcGluZygpXCI+XG5BZGRcbjwvYnV0dG9uPlxuPC9kaXY+XG48dWwgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdGb3I9XCJsZXQgcmVsYXRlIG9mIGxpc3RPZlJlbGF0aW9uO2xldCBpbmRleFwiPlxuIDxsaSBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICA8c3Bhbj57e3JlbGF0ZS5maWVsZH19IDwvc3Bhbj48c3BhbiBzdHlsZT1cIlxuICBtYXJnaW4tbGVmdDogMzBweDtcIiA+XG4gIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9zcGFuPlxuPC9saT5cbjwvdWw+XG5cbiAgICBcbjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBSZXFpcmVkID88L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcbiAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcbiAgWyhuZ01vZGVsKV09XCJyZXF1aXJlZFwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgIFllc1xuICA8L21hdC1yYWRpby1idXR0b24+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgIE5vXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIGF1dG9Db2xsZWN0PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwiYXV0b0NvbGxlY3RcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICBUcnVlXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgRmFsc2VcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48L2Rpdj5cblxuICBcbjxkaXYgIGNsYXNzPVwiY29sLXNtLTEyXCI+XG5cbjxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjEwcHg7XCIgIChjbGljayk9XCJjbG9zZU1vZGVsKCdzYXZlJylcIj5cblNhdmVcbjwvYnV0dG9uPlxuXG48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIHN0eWxlPVwicGFkZGluZzowcHg7bWFyZ2luOjBweDttYXJnaW4tdG9wOjEwcHg7Ym94LXNoYWRvdzogMXB4IDFweCAycHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7cGFkZGluZy1ib3R0b206MTBweDtcIj5cbiAgPHNwYW4gY2xhc3M9XCJxdG5fcG9zaXRpb25cIj48c3BhbiBjbGFzcz1cIlwiPiN7eyBmaWVsZC5wb3NpdGlvbiB9fTwvc3Bhbj48L3NwYW4+XG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29tcG9uZW50XCIgPlxuXG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIiAoY2xpY2spPVwiY29weUVsZW1lbnQoZmllbGQpXCI+PGkgY2xhc3M9XCJmYSBmYS1jb3B5XCI+PC9pPjwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiIChjbGljayk9XCJkZWxldGVFbGVtZW50KGZpZWxkKVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+IDwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIChjbGljayk9XCJsb2FkRm9ybUVsZW1lbnQoZmllbGQpXCIgPjwvaT48L3NwYW4+XG4gIFxuICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cbiAgICA8dGV4dGJveCAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuICAgIDx0ZXh0Ym94ICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuICAgIDxkYXRlICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9kYXRlPlxuICAgIDxzbGlkZXIgKm5nU3dpdGNoQ2FzZT1cIidzbGlkZXInXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvc2xpZGVyPlxuICAgICAgPGRyb3Bkb3duICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZHJvcGRvd24+XG4gICAgICA8Y2hlY2tib3ggKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9jaGVja2JveD5cbiAgICAgIDxyYWRpbyAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3JhZGlvPlxuICAgICAgPGxpYi1tdWx0aS1zZWxlY3QgKm5nU3dpdGNoQ2FzZT1cIidtYXRyaXgnXCIgKGNoaWxkcmVuRHJvcEV2ZW50KT1cImNoaWxkcmVuRHJvcEV2ZW50KCRldmVudClcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9saWItbXVsdGktc2VsZWN0PlxuICAgICAgPGZpbGUgKm5nU3dpdGNoQ2FzZT1cIidmaWxlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2ZpbGU+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cbiAgICAgICA8L2Rpdj4gXG4gICAgICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbIGBcbiAgLnF0bl9wb3NpdGlvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggNXB4O1xuICAgIGNvbG9yOiAjY2NjO1xuICB9IGBcbiBdXG59KVxuXG4vLyA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIG15LTEgcC0yIGZhZGVJbkRvd24gYW5pbWF0ZWRcIiAqbmdJZj1cIiFpc1ZhbGlkICYmIGlzRGlydHlcIj57e2ZpZWxkLmxhYmVsfX0gaXMgcmVxdWlyZWQ8L2Rpdj5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnk7XG5cbiAgQElucHV0KCkgY3JpdGVyaWFMaXN0OmFueTtcbiAgQElucHV0KCkgZm9ybTogYW55O1xuXG4gIEBPdXRwdXQoKSBzZW5kRGF0YVRvUGFyZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIGNvcHlPckRlbGV0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIFxuICBjbG9zZVJlc3VsdDogc3RyaW5nO1xuICBtb2RhbFJlZmVyZW5jZTogYW55O1xuICBwYWdlTnVtYmVyOyBhbnk7XG4gIGxhYmVsOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgcGxhY2Vob2xkZXI6IGFueTtcbiAgb3B0aW9uczogYW55O1xuICBuZXdPcHRpb25LZXk6IGFueTtcbiAgbmV3T3B0aW9uTGFiZWw6IGFueTtcblxuICBhY3RpdmVNb2RlbERhdGE6IGFueTtcbiAgdmFsaWRhdGlvbnM6IGFueTtcbiAgcmVxdWlyZWQ6IGFueTtcbiAgYXV0b0NvbGxlY3Q6IGFueTtcbiAgb3BlbkVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2lkOiBhbnk7XG4gIGRlc2NyaXB0aW9uOiBhbnk7XG4gIG1pbkRhdGU6IGFueTtcbiAgbWF4RGF0ZTogYW55O1xuICBtaW46IGFueTtcbiAgbWF4OiBhbnk7XG4gIGRyYWZ0Q3JpdGVyaWFJZDphbnk7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBhbGxEYXRhOmFueTtcbiAgY3VycmVudFNlbGVjdGVkUXRuOmFueTtcbiAgc2VsZWN0ZWRPcHRpb246YW55O1xuXG4gIGxpc3RPZlJlbGF0aW9uOmFueSA9IFtdO1xuICBjb25kaXRpb246YW55O1xuXG4gIGNvbmRpdGlvbk1hdGNoVmFsdWU6YW55O1xuXG4gIGNvbmRpdGlvbkFycmF5OmFueSA9IFtcbiAgICB7XG4gICAgbGFiZWw6XCJlcXVhbHNcIixcbiAgICBjb25kaXRpb246XCI9PT1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6XCJOb3QgRXF1YWwgVG9cIixcbiAgICAgIGNvbmRpdGlvbjpcIiE9XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOlwiR3JlYXRlciBUaGFuXCIsXG4gICAgICBjb25kaXRpb246XCI+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOlwiTGVzcyBUaGFuXCIsXG4gICAgICBjb25kaXRpb246XCI8XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOlwiR3JlYXRlciBUaGFuIE9yIEVxdWFsXCIsXG4gICAgICBjb25kaXRpb246XCI+PVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDpcIkxlc3MgVGhhbiBPciBFcXVhbFwiLFxuICAgICAgY29uZGl0aW9uOlwiPD1cIlxuICAgIH1cbiAgXVxuXG5cbiAgLy8gcHJpdmF0ZSBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbXlNb2RhbDogRWxlbWVudFJlZjtcblxuICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWxcbiAgICBwcml2YXRlIGR5bmFtaWNTZXJ2ZTogRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZVxuICAgICkgeyBcblxuICAgICB9XG5cbiAgLy8gZ2V0QWxsKCl7XG4gIC8vICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7IFxuICAvLyAgICAgY29uc29sZS5sb2coXCJnZXQgYWxsIGluZm9cIixtZXNzYWdlKTtcblxuICAvLyAgICB9KTtcblxuICAvLyB9ICAgXG5cblxuICBwYXJlbnRNYXBwaW5nKCl7XG5cblxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZGl0aW9uLFwiY29uZGl0aW9uXCIsdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4sXCJzZWxlY3RlZE9wdGlvblwiLHRoaXMuc2VsZWN0ZWRPcHRpb24pO1xuICAgIGxldCBvYmogPSB7fVxuXG4gICAgLy8gb3B0aW9uOnRoaXMuc2VsZWN0ZWRPcHRpb24sXG4gICAgLy8gcXVlc3Rpb246dGhpcy5jdXJyZW50U2VsZWN0ZWRRdG5cblxuICAgIC8vIG9ialsndmlzaWJsZUlmJ10gPSBbXTtcblxuICAgIGxldCBjb25kaU9iaiA9IHtcbiAgICAgIG9wZXJhdG9yOnRoaXMuY29uZGl0aW9uLFxuICAgICAgdmFsdWU6dGhpcy5jb25kaXRpb25NYXRjaFZhbHVlLFxuICAgICAgZmllbGQ6dGhpcy5maWVsZC5maWVsZCxcbiAgICAgIC8vIHBhcmVudDp0aGlzLnNlbGVjdGVkT3B0aW9uLmZpZWxkXG5cbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKFwiY29uZGlPYmpcIixjb25kaU9iaik7XG5cbiAgICBsZXQgZ2V0U2VsZWN0UXVlc3Rpb24gPSB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddWydxdWVzdGlvbkxpc3QnXS5maWx0ZXIoZWxlID0+e1xuICAgICAgaWYoZWxlLmZpZWxkID09IHRoaXMuZmllbGQuZmllbGQpe1xuICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgfVxuICAgIH0pO1xuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiZ2V0U2VsZWN0UXVlc3Rpb25cIixnZXRTZWxlY3RRdWVzdGlvbik7XG5cbiAgICBsZXQgaXNBdmFpbGFibGUgPSBmYWxzZTtcbiAgICBpZiggZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddICYmIGdldFNlbGVjdFF1ZXN0aW9uWyd2aXNpYmxlSWYnXS5sZW5ndGggPiAwKXtcbiAgICAgIGlzQXZhaWxhYmxlID0gZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddLmZpbHRlcihpdGVtPT57XG4gICAgICAgICAgICBpZihpdGVtLnZpc2libGVJZi5maWVsZD09dGhpcy5maWVsZC5maWVsZCl7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuXG5cbiAgICBsZXQgYWxsRGF0YSA9IFtdO1xuICAgXG4gICAgIGFsbERhdGEgPSB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddWydxdWVzdGlvbkxpc3QnXS5maWx0ZXIoZWxlID0+e1xuICAgICAgICBpZihlbGUuZmllbGQgPT0gdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpe1xuXG4gICAgICAgICAgaWYoZWxlLnZpc2libGVJZiAmJiBlbGUudmlzaWJsZUlmLmxlbmd0aCA+IDAgJiYgIGlzQXZhaWxhYmxlPT1mYWxzZSl7XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmLnB1c2goY29uZGlPYmopO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZWxlLnZpc2libGVJZiA9IFtdO1xuICAgICAgICAgICAgZWxlLnZpc2libGVJZi5wdXNoKGNvbmRpT2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgcmV0dXJuIGVsZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBcblxuXG4gICAgY29uc29sZS5sb2coXCJhbGwgZGF0YSBpbiBxdWVzdGlvblwiLGFsbERhdGEpO1xuXG4gICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50KClcbiAgIFxuXG4gICAgaWYoIXRoaXMubGlzdE9mUmVsYXRpb24uaW5jbHVkZXMoY29uZGlPYmopKXtcbiAgICAgIHRoaXMubGlzdE9mUmVsYXRpb24ucHVzaChjb25kaU9iaik7XG4gICAgfSBcblxuICAgICBcblxuICAgIGlmKHRoaXMuY29uZGl0aW9uKXtcblxuICAgICAgXG5cblxuICAgIH1cbiAgICBcblxuXG4gICAgLy8gJ29wdGlvbic6dGhpcy5zZWxlY3RlZE9wdGlvbixcbiAgICAvLyAgICAgICAncXVlc3Rpb24nOnRoaXMuY3VycmVudFNlbGVjdGVkUXRuXG5cbiAgICAvLyB0aGlzLmZpZWxkLmNoaWxkUW50ID0gdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQ7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb25cIix0aGlzLmxpc3RPZlJlbGF0aW9uKTtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcblxuXG4gICAgLy8gdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4gPSB7IH07XG4gICAgXG4gICAgLy8gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLnZhbGlkYXRpb25zID0ge1xuICAgICAgJ3JlbGF0aW9uJzpbXVxuICAgIH1cblxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMgPSB7XG4gICAgICAncmVsYXRpb24nOltdXG4gIH07XG5cbiAgfVxuICBsb2FkRm9ybUVsZW1lbnQoaXRlbSkge1xuXG5cbiAgICB0aGlzLmFsbERhdGEgPSAgdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKCk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmFsbERhdGEsXCIgYWxsIHF1ZXN0aW9ucyBcIiwgdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXSk7XG5cbiAgICAvLyB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJpdGVtIC0tLVwiLCApO1xuXG4gICAgdGhpcy5hY3RpdmVNb2RlbERhdGEgPSBcIlwiO1xuICAgIHRoaXMubGFiZWwgPSBpdGVtLmxhYmVsO1xuICAgIHRoaXMudHlwZSA9IGl0ZW0udHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gaXRlbS5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBpdGVtLm9wdGlvbnM7XG4gICAgdGhpcy5kcmFmdENyaXRlcmlhSWQgPSBpdGVtLmRyYWZ0Q3JpdGVyaWFJZDtcblxuICAgIFxuXG4gICAgdGhpcy5yZXF1aXJlZCA9IGl0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWQ7XG4gICAgXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICBpZihpdGVtLnZhbGlkYXRpb25zLnJlbGF0aW9uKXtcbiAgICAgIHRoaXMubGlzdE9mUmVsYXRpb24gPSBpdGVtLnZhbGlkYXRpb25zLnJlbGF0aW9uO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnR5cGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIHRoaXMubWluRGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWluRGF0ZTtcbiAgICAgIHRoaXMubWF4RGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWF4RGF0ZVxuICAgICAgdGhpcy5hdXRvQ29sbGVjdCA9IGl0ZW0udmFsaWRhdGlvbnMuYXV0b0NvbGxlY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW0udHlwZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICB0aGlzLm1pbiA9IGl0ZW0udmFsaWRhdGlvbnMubWluO1xuICAgICAgdGhpcy5tYXggPSBpdGVtLnZhbGlkYXRpb25zLm1heDtcbiAgICB9XG5cblxuICBcbiAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZDtcbiAgICBjb25zb2xlLmxvZyhpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcIml0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWRcIiwgdGhpcy5yZXF1aXJlZCwgXCJsYWJlbFwiLCB0aGlzLmxhYmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImxhYmVsXCIsdGhpcy5sYWJlbCk7XG5cbiAgICB0aGlzLm9wZW5FZGl0ID0gdGhpcy5vcGVuRWRpdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5Nb2RhbEJ1dHRvblwiKS5jbGljaygpO1xuICAgIC8vIHRoaXMub3Blbih0aGlzLm15TW9kYWwpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5zaG93KCk7XG4gICAgLy8gdGhpcy5teU1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21vZGFsIGZhZGUgc2hvdyc7XG5cbiAgfVxuXG4gIHNhdmVFZGl0KCkge1xuICB9XG4gIGNsb3NlTW9kZWwoYWN0aW9uKSB7XG5cbiAgICBpZiAoYWN0aW9uID09IFwic2F2ZVwiKSB7XG5cblxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbGlkYXRpb25zLFwidGhpcy5maWVsZFwiLCB0aGlzLnJlcXVpcmVkKTtcbiAgICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UuY2xvc2UoKTtcblxuXG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5maWVsZCA9IHRoaXMuZmllbGQuZmllbGQ7XG5cbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICBsZXQgb2JqID0ge1xuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB2YWxpZGF0aW9uczogdGhpcy52YWxpZGF0aW9ucyxcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIF9pZDogdGhpcy5faWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICBkcmFmdENyaXRlcmlhSWQ6dGhpcy5kcmFmdENyaXRlcmlhSWQsXG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICBvYmpbJ21pbkRhdGUnXSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgb2JqWydtYXhEYXRlJ10gPSB0aGlzLm1heERhdGVcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIG9ialsnbWluJ10gPSB0aGlzLm1pbjtcbiAgICAgICAgb2JqWydtYXgnXSA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm9ialwiLG9iaik7XG5cblxuICAgIFxuXG4gICAgICAvLyB0aGlzLmZpZWxkLmxhYmVsID0gdGhpcy5sYWJlbDtcblxuXG4gICAgICB0aGlzLmZpZWxkLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgIHRoaXMuZmllbGQudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIHRoaXMuZmllbGQucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgdGhpcy5maWVsZC5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgdGhpcy5maWVsZC5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmZpZWxkLmRyYWZ0Q3JpdGVyaWFJZCA9IHRoaXMuZHJhZnRDcml0ZXJpYUlkO1xuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbiA9IHRoaXMubWluO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heCA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBpZih0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uKXtcblxuICAgICAgaWYodGhpcy5saXN0T2ZSZWxhdGlvbil7XG4gICAgICAgIG9iai52YWxpZGF0aW9ucy5yZWxhdGlvbiA9IHRoaXMubGlzdE9mUmVsYXRpb247XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb24gPSB0aGlzLmxpc3RPZlJlbGF0aW9uO1xuICAgICAgfVxuICAgICAgICBcbiAgICAgIC8vIH1cblxuICAgICAgXG5cbiAgICAgIC8vIHRoaXMuZmllbGQudmFsaWRhdGlvbnNcblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZFwiLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcInNkZHNcIiwgdGhpcy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZDtcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMuYXV0b0NvbGxlY3QgPSB0aGlzLmF1dG9Db2xsZWN0O1xuXG5cbiAgICAgIGNvbnNvbGUubG9nKG9iaixcInRoaXMuZmllbGQudmFsaWRhdGlvbnNcIix0aGlzLmZpZWxkLnZhbGlkYXRpb25zKTtcbiAgICAgIGxldCBvcCA9IHtcbiAgICAgICAgYWN0aW9uOlwic2F2ZVwiLFxuICAgICAgICBkYXRhOm9ialxuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdChvcCk7XG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdChKU09OLnN0cmluZ2lmeShvYmopKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgIHRoaXMub3BlbkVkaXQgPSBmYWxzZTtcblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQodGhpcy5hY3RpdmVNb2RlbERhdGEpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5vcGVuRWRpdCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKCk7XG4gICAgLy8gIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBoaWRlJztcbiAgfVxuXG4gIG9wZW4oY29udGVudCkge1xuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuYWN0aXZlTW9kZWxEYXRhXCIsIHNlbGVjdGVkRGF0YSk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZSA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYENsb3NlZCB3aXRoYDtcbiAgICAvLyB9LCAocmVhc29uKSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYERpc21pc3NlZGA7XG4gICAgLy8gfSk7XG4gIH1cblxuICAvLyBwcml2YXRlIGdldERpc21pc3NSZWFzb24ocmVhc29uOiBhbnkpOiBzdHJpbmcge1xuICAvLyAgIC8vIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuRVNDKSB7XG4gIC8vICAgLy8gICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XG4gIC8vICAgLy8gfSBlbHNlIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuQkFDS0RST1BfQ0xJQ0spIHtcbiAgLy8gICAvLyAgIHJldHVybiAnYnkgY2xpY2tpbmcgb24gYSBiYWNrZHJvcCc7XG4gIC8vICAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyAgIHJldHVybiBgd2l0aDogJHtyZWFzb259YDtcbiAgLy8gICAvLyB9XG4gIC8vIH1cblxuICBkZWxldGVPcHRpb24ob3B0LCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBsZXQgbmV3QXJyID0gW107XG4gICAgbGV0IG9wdGlvbnNBcnIgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgLy8gaWYoaXRlbS5sYWJsZT09b3B0LmxhYmVsICYmIGl0ZW0ua2V5PT1vcHQua2V5KXtcblxuICAgICAgLy8gfWVsc2V7XG5cbiAgICAgIC8vIH1cblxuICAgICAgcmV0dXJuIChpdGVtLmxhYmVsICE9IG9wdC5sYWJlbCAmJiBpdGVtLmtleSAhPSBvcHQua2V5KVxuXG4gICAgICAvLyBpZihpdGVtLmxhYmxlPT1vcHQubGFiZWwgJiYgaXRlbS5rZXk9PW9wdC5rZXkpe1xuXG4gICAgICAvLyB9ZWxzZXtcbiAgICAgIC8vICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyB9XG4gICAgfSlcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNBcnI7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGUgbmV3IFwiLCBvcHRpb25zQXJyKTtcbiAgfVxuICBBZGROZXdPcHRpb25zKCkge1xuXG4gICAgaWYgKHRoaXMubmV3T3B0aW9uS2V5ICE9IFwiXCIgJiYgdGhpcy5uZXdPcHRpb25MYWJlbCAhPSBcIlwiKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5uZXdPcHRpb25cIiwgdGhpcy5uZXdPcHRpb25MYWJlbCk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucykpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMucHVzaCh7XG4gICAgICAgIGtleTogdGhpcy5uZXdPcHRpb25LZXksXG4gICAgICAgIGxhYmVsOiB0aGlzLm5ld09wdGlvbkxhYmVsXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm9wdGlvbnMucHVzaFwiLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLm5ld09wdGlvbktleSA9IFwiXCI7XG4gICAgdGhpcy5uZXdPcHRpb25MYWJlbCA9IFwiXCI7XG4gIH1cblxuICBjb3B5RWxlbWVudChpdGVtKSB7XG4gICAgLy8gdGhpcy5maWVsZC5wdXNoKGl0ZW0pO1xuICAgIGl0ZW0uYWN0aW9uID0gJ2NvcHknO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgLS0tLS0tLS0tLVwiLCBpdGVtKTtcbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQoaXRlbSk7XG5cbiAgfVxuICBkZWxldGVFbGVtZW50KGl0ZW0pIHtcblxuICAgIGl0ZW0uYWN0aW9uID0gJ2RlbGV0ZSc7XG4gICAgdGhpcy5maWVsZC5pc0RlbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KGl0ZW0pO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgZGVsZXRlXCIsIHRoaXMuZmllbGQpO1xuXG4gIH1cbiAgY2hpbGRyZW5Ecm9wRXZlbnQoJGV2ZW50KXtcbiAgICBjb25zb2xlLmxvZyhcImNoaWxkcmVuRHJvcEV2ZW50XCIsIHRoaXMuZmllbGQpO1xuICAgIC8vIGNvbnN0IGFjdGlvbiAgPSAnY2hpbGREcm9wZWQnO1xuICAgIGxldCBuZXdPYmogPSB7XG4gICAgICBhY3Rpb24gOiAnY2hpbGREcm9wZWQnLFxuICAgICAgZGF0YTokZXZlbnRcbiAgICB9XG4gICBcbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQoSlNPTi5zdHJpbmdpZnkobmV3T2JqKSk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCBkZWxldGVcIiwgdGhpcy5maWVsZCk7XG4gIH1cbn1cblxuIl19