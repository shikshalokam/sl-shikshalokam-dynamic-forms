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
                    template: "\n  <style>\n  .mat-slider-horizontal {\n    min-width: 80% !important;\n  }\n  .example-radio-group {\n    display: flex;\n    flex-direction: block;\n    margin: 15px 0;\n  }\n\n  .mat-form-field {\n    display: block;\n    position: relative;\n    flex: auto;\n    min-width: 0;\n    width: 372px;\n  }\n  .input-group {\n    position: relative;\n     border-collapse: separate;\n     display: block;\n  }\n  \n  .example-radio-button {\n    margin: 5px;\n  }\n  .action-component {\n    padding:10px 10px 0px 0px;\n    right: 0px;\n    cursor: pointer;\n    float: right;\n  \n}\nspan.cursor-pntr {\n  cursor: pointer;\n  padding: 2px;\n}\n.form-control {\n  display: block;\n  visibility: hidden;\n\n}\n.label.col-md-8.form-control-label {\n  text-decoration: underline;\n}\n\n  </style>\n  <div class=\"row\"  *ngIf=\"openEdit\" style=\"padding: 15px;\n  border: 1px solid #ccc;margin-top:10px;width:85%;margin: auto;\n  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);\">\n\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Label\" [(ngModel)]=\"label\" name=\"label\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Input Place Holder\" [(ngModel)]=\"placeholder\" name=\"placeholder\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Hint/Description\" [(ngModel)]=\"description\" name=\"Description\">\n      </mat-form-field>\n    </div>\n\n<div class=\"col-sm-6 \" style=\"display:none\">\n  <mat-form-field>\n  <mat-label>Input Type</mat-label>\n    <mat-select  [(ngModel)]=\"type\">\n      <mat-option value=\"text\">text</mat-option>\n      <mat-option value=\"number\">number</mat-option>\n      <mat-option value=\"radio\">radio</mat-option>\n      <mat-option value=\"date\">date</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"col-sm-6\">\n<mat-form-field>\n<mat-label>Pages</mat-label>\n  <mat-select  [(ngModel)]=\"pageNumber\">\n    <mat-option value=\"page_1\">page 1</mat-option>\n    <mat-option value=\"page_2\">page 2</mat-option>\n    <mat-option value=\"page_3\">page 3</mat-option>\n  </mat-select>\n</mat-form-field>\n</div>\n \n<div class=\"col-sm-6\">\n<mat-form-field>\n<mat-label>Criteria</mat-label>\n  <mat-select  [(ngModel)]=\"draftCriteriaId\">\n    <mat-option *ngFor=\"let item of criteriaList\" value=\"item._id\">{{ item.name}}</mat-option>\n   </mat-select>\n</mat-form-field>\n</div>\n\n\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Min\" matInput  [(ngModel)]=\"min\" name=\"min value\">\n    </mat-form-field>\n    </div>\n\n    <div class=\"col-sm-6\" *ngIf=\"type=='slider'\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Max\" matInput  [(ngModel)]=\"max\" name=\"min value\">\n    </mat-form-field>\n    </div>\n    \n  <div class=\"col-sm-6\" *ngIf=\"type=='date'\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"minDate\" placeholder=\"Choose a min date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"pickerMaxDate\" [(ngModel)]=\"maxDate\" placeholder=\"Choose a max date\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerMaxDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerMaxDate></mat-datepicker>\n    </mat-form-field>\n\n\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"type=='radio' || type=='checkbox' || type=='dropdown'\">\n    <label for=\"label\" class=\"col-sm-12\">Options</label>\n    \n    <ul class=\"col\" *ngFor=\"let opt of options;let index\">\n     <li class=\"\">\n      <span>{{opt.label}} </span><span style=\"\n      margin-left: 30px;\" (click)=\"deleteOption(opt,index)\">\n      <i class=\"fa fa-trash\"></i></span>\n    </li>\n    </ul>\n\n    <div class=\"col-sm-6\">\n    <div class=\"input-group\">\n    <mat-form-field>\n    <input type=\"text\" placeholder=\"Label\" matInput style=\"margin-bottom: 10px;\" [(ngModel)]=\"newOptionLabel\" name=\"newOption\">\n    </mat-form-field>\n    <mat-form-field>\n    <input type=\"tex\" matInput name=\"newOption\" placeholder=\"key\"  [(ngModel)]=\"newOptionKey\">\n    </mat-form-field>  \n    </div>\n      <button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"AddNewOptions()\">\n      Add\n      </button>\n    </div>\n    </div>\n\n        \n    <div class=\"col-sm-12\">\n<label id=\"example-radio-group-label\">Do you want to related the question based on below options ?</label>\n<mat-radio-group\naria-labelledby=\"example-radio-group-label\"\nclass=\"example-radio-group\"\n[(ngModel)]=\"selectedOption\">\n<mat-radio-button class=\"example-radio-button\" *ngFor=\"let ele of options\"  [value]=\"ele\">\n{{ ele.label }}\n</mat-radio-button>\n</mat-radio-group>\n</div>\n\n\n<div class=\"col-sm-6\">\n<mat-form-field >\n<mat-label>Select Question to add </mat-label>\n<select matNativeControl [(ngModel)]=\"currentSelectedQtn\" >\n<option *ngFor=\"let values of allData.questionList.questionList\"  [ngValue]=\"values\"> {{ values.label }} </option>\n</select>  \n</mat-form-field>\n</div>\n\n<div class=\"col-sm-6\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n<mat-form-field >\n<mat-label>Select Condition </mat-label>\n<select matNativeControl [(ngModel)]=\"condition\" >\n<option *ngFor=\"let values of conditionArray\"  [ngValue]=\"values.condition\"> {{ values.label }} </option>\n</select>\n</mat-form-field>\n</div>\n\n<div class=\"col-sm-12\" *ngIf=\"type=='text' || type=='date' || type=='number'\">\n<mat-form-field>\n  <input type=\"tex\" matInput name=\"conditionMatchValue\" placeholder=\"\"  [(ngModel)]=\"conditionMatchValue\">\n  </mat-form-field> \n</div>\n\n<div class=\"col-sm-2\">\n<button mat-flat-button color=\"primary\" style=\"margin-top: 10px;\"  (click)=\"parentMapping()\">\nAdd\n</button>\n</div>\n<ul class=\"col-sm-12\" *ngFor=\"let relate of listOfRelation;let index\">\n <li class=\"col-sm-12\">\n  <span>{{relate.field}} </span><span style=\"\n  margin-left: 30px;\" >\n  <i class=\"fa fa-trash\"></i></span>\n</li>\n</ul>\n\n    \n<div class=\"col-sm-12\">\n<label id=\"example-radio-group-label\">is Reqired ?</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"required\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    Yes\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    No\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n<div class=\"col-sm-12\" *ngIf=\"type=='date'\">\n<label id=\"example-radio-group-label\">is autoCollect</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"autoCollect\">\n  <mat-radio-button class=\"example-radio-button\" [value]=true>\n    True\n  </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" [value]=false>\n    False\n  </mat-radio-button>\n</mat-radio-group>\n</div>\n\n  \n<div  class=\"col-sm-12\">\n\n<button mat-flat-button color=\"primary\" style=\"margin-right:10px;\"  (click)=\"closeModel('save')\">\nSave\n</button>\n\n</div>\n  </div>\n  <div class=\"form-group row\" [formGroup]=\"form\" style=\"padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;\">\n  <span class=\"qtn_position\"><span class=\"\">#{{ field.position }}</span></span>\n  <div class=\"action-component\" >\n\n  <span class=\"cursor-pntr\" (click)=\"copyElement(field)\"><i class=\"fa fa-copy\"></i></span>\n  <span class=\"cursor-pntr\" (click)=\"deleteElement(field)\"><i class=\"fa fa-trash\"></i> </span>\n  <span class=\"cursor-pntr\"><i class=\"fa fa-edit\" (click)=\"loadFormElement(field)\" ></i></span>\n  \n  </div>\n    <div class=\"col-md-12\" [ngSwitch]=\"field.type\">\n    <textbox *ngSwitchCase=\"'number'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <date *ngSwitchCase=\"'date'\" [field]=\"field\" [form]=\"form\"></date>\n    <slider *ngSwitchCase=\"'slider'\" [field]=\"field\" [form]=\"form\"></slider>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <lib-multi-select *ngSwitchCase=\"'multiselect'\" (childrenDropEvent)=\"childrenDropEvent($event)\" [field]=\"field\" [form]=\"form\"></lib-multi-select>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div style=\"float:right\">\n         \n       </div> \n       </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEcsT0FBUSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPaEY7SUF5V0UsK0JBRVUsWUFBdUM7UUFBdkMsaUJBQVksR0FBWixZQUFZLENBQTJCO1FBeEV2QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTNDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFnQnpELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFhMUIsbUJBQWMsR0FBTyxFQUFFLENBQUM7UUFLeEIsbUJBQWMsR0FBTztZQUNuQjtnQkFDQSxLQUFLLEVBQUMsUUFBUTtnQkFDZCxTQUFTLEVBQUMsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFDLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBQyxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUMsY0FBYztnQkFDcEIsU0FBUyxFQUFDLEdBQUc7YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBQyxXQUFXO2dCQUNqQixTQUFTLEVBQUMsR0FBRzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFDLHVCQUF1QjtnQkFDN0IsU0FBUyxFQUFDLElBQUk7YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBQyxvQkFBb0I7Z0JBQzFCLFNBQVMsRUFBQyxJQUFJO2FBQ2Y7U0FDRixDQUFBO0lBY0UsQ0FBQztJQVJKLHNCQUFJLDBDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ25FLHNCQUFJLDBDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBU25FLFlBQVk7SUFDWiwyRUFBMkU7SUFDM0UsMkNBQTJDO0lBRTNDLFNBQVM7SUFFVCxPQUFPOzs7Ozs7Ozs7SUFHUCw2Q0FBYTs7Ozs7Ozs7O0lBQWI7UUFBQSxpQkEyRkM7UUF4RkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztZQUNqRyxHQUFHLEdBQUcsRUFBRTtRQUVaLDhCQUE4QjtRQUM5QixtQ0FBbUM7UUFFbkMseUJBQXlCOzs7Ozs7WUFFckIsUUFBUSxHQUFHO1lBQ2IsUUFBUSxFQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3ZCLEtBQUssRUFBQyxJQUFJLENBQUMsbUJBQW1CO1lBQzlCLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7U0FHdkI7UUFHRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsQ0FBQzs7WUFFN0IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxHQUFHO1lBQzdFLElBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQztnQkFDL0IsT0FBTyxHQUFHLENBQUM7YUFDWjtRQUNILENBQUMsRUFBQztRQUlGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsaUJBQWlCLENBQUMsQ0FBQzs7WUFFL0MsV0FBVyxHQUFHLEtBQUs7UUFDdkIsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQzlFLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNsRCxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDO29CQUN4QyxPQUFPLElBQUksQ0FBQTtpQkFDWjtZQUNQLENBQUMsRUFBQyxDQUFBO1NBQ0g7O1lBSUcsT0FBTyxHQUFHLEVBQUU7UUFFZixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxHQUFHO1lBQzlELElBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFDO2dCQUU1QyxJQUFHLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFLLFdBQVcsSUFBRSxLQUFLLEVBQUM7b0JBQ2xFLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QjtxQkFBSTtvQkFDSCxHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCO2dCQUVELE9BQU8sR0FBRyxDQUFDO2FBQ1o7aUJBQUk7Z0JBQ0gsT0FBTyxHQUFHLENBQUE7YUFDWDtRQUNILENBQUMsRUFBQyxDQUFDO1FBSUwsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUU1QywwQkFBMEI7UUFHMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFDO1lBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO1FBSUQsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1NBS2pCO1FBSUQsZ0NBQWdDO1FBQ2hDLDJDQUEyQztRQUUzQyx1REFBdUQ7UUFFdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFHckUsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUlFLGlDQUFpQztRQUVqQyw4QkFBOEI7UUFFOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixVQUFVLEVBQUMsRUFBRTtTQUNkLENBQUE7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRztZQUN2QixVQUFVLEVBQUMsRUFBRTtTQUNoQixDQUFDO0lBRUYsQ0FBQzs7Ozs7SUFDRCwrQ0FBZTs7OztJQUFmLFVBQWdCLElBQUk7UUFHbEIsSUFBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFMUUsNkJBQTZCO1FBRTdCLDZCQUE2QjtRQUU3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBSTVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFFMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXBDLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztTQUNqRDtRQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7U0FDakQ7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztTQUNqQztRQUlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hHLG1DQUFtQztRQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdDLHNEQUFzRDtRQUN0RCwyQkFBMkI7UUFDM0IsdUJBQXVCO1FBQ3ZCLDREQUE0RDtJQUU5RCxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFDRCwwQ0FBVTs7OztJQUFWLFVBQVcsTUFBTTtRQUVmLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUlwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7Z0JBV3RELEdBQUcsR0FBRztnQkFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLGVBQWUsRUFBQyxJQUFJLENBQUMsZUFBZTthQUVyQztZQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7Z0JBQ3ZCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM5QixHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQTthQUM5QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO2dCQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDdkI7WUFFRCwwQkFBMEI7WUFLMUIsaUNBQWlDO1lBR2pDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRWxELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDdkQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3ZDO1lBRUQsdUNBQXVDO1lBRXZDLElBQUcsSUFBSSxDQUFDLGNBQWMsRUFBQztnQkFDckIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDdkQ7WUFFRCxJQUFJO1lBSUoseUJBQXlCO1lBRXpCLDJHQUEyRztZQUMzRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUd0RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyx3QkFBd0IsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztnQkFDN0QsRUFBRSxHQUFHO2dCQUNQLE1BQU0sRUFBQyxNQUFNO2dCQUNiLElBQUksRUFBQyxHQUFHO2FBQ1Q7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLG1EQUFtRDtZQUVuRCwwQ0FBMEM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFFdEIsb0RBQW9EO1NBRXJEO2FBQU07WUFFTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QiwrQkFBK0I7U0FDaEM7UUFFRCw2QkFBNkI7UUFDN0Isd0RBQXdEO0lBQzFELENBQUM7Ozs7O0lBRUQsb0NBQUk7Ozs7SUFBSixVQUFLLE9BQU87UUFJVixzREFBc0Q7UUFDdEQseURBQXlEO1FBQ3pELGdEQUFnRDtRQUNoRCxzQ0FBc0M7UUFDdEMsbUJBQW1CO1FBQ25CLG9DQUFvQztRQUNwQyxNQUFNO0lBQ1IsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCxpREFBaUQ7SUFDakQsbUNBQW1DO0lBQ25DLG1FQUFtRTtJQUNuRSw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0lBRUosNENBQVk7Ozs7Ozs7Ozs7Ozs7OztJQUFaLFVBQWEsR0FBRyxFQUFFLEtBQUs7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7WUFHaEMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsSUFBSTtZQUN2QyxrREFBa0Q7WUFFbEQsU0FBUztZQUVULElBQUk7WUFFSixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRXZELGtEQUFrRDtZQUVsRCxTQUFTO1lBQ1QsaUJBQWlCO1lBQ2pCLElBQUk7UUFDTixDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsNkNBQWE7OztJQUFiO1FBRUUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsRUFBRTtZQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVuRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2FBRWhDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQzNCLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCwyQ0FBVzs7OztJQUFYLFVBQVksSUFBSTtRQUNkLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsQ0FBQzs7Ozs7SUFDRCw2Q0FBYTs7OztJQUFiLFVBQWMsSUFBSTtRQUVoQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUMsQ0FBQzs7Ozs7SUFDRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsTUFBTTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O1lBRXpDLE1BQU0sR0FBRztZQUNYLE1BQU0sRUFBRyxhQUFhO1lBQ3RCLElBQUksRUFBQyxNQUFNO1NBQ1o7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBbnVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwwNFJBOFFFO29CQUNaLE1BQU0sRUFBRSxDQUFFLGdIQU1QO3FCQUNIO2lCQUNEOzs7O2dCQWhTUyx5QkFBeUI7Ozt3QkFxU2hDLEtBQUs7K0JBRUwsS0FBSzt1QkFDTCxLQUFLO21DQUVMLE1BQU07b0NBRU4sTUFBTTswQkErRE4sU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBZ1l6Qyw0QkFBQztDQUFBLEFBcHVCRCxJQW91QkM7U0F2Y1kscUJBQXFCOzs7SUFDaEMsc0NBQW9COztJQUVwQiw2Q0FBMEI7O0lBQzFCLHFDQUFtQjs7SUFFbkIsaURBQXFEOztJQUVyRCxrREFBeUQ7O0lBRXpELDRDQUFvQjs7SUFDcEIsK0NBQW9COztJQUNwQiwyQ0FBVzs7SUFBQyxvQ0FBSTs7SUFDaEIsc0NBQVc7O0lBQ1gscUNBQVU7O0lBQ1YsNENBQWlCOztJQUNqQix3Q0FBYTs7SUFDYiw2Q0FBa0I7O0lBQ2xCLCtDQUFvQjs7SUFFcEIsZ0RBQXFCOztJQUNyQiw0Q0FBaUI7O0lBQ2pCLHlDQUFjOztJQUNkLDRDQUFpQjs7SUFDakIseUNBQTBCOztJQUMxQixvQ0FBUzs7SUFDVCw0Q0FBaUI7O0lBQ2pCLHdDQUFhOztJQUNiLHdDQUFhOztJQUNiLG9DQUFTOztJQUNULG9DQUFTOztJQUNULGdEQUFvQjs7SUFDcEIsNkNBQTJCOztJQUMzQix3Q0FBWTs7SUFDWixtREFBdUI7O0lBQ3ZCLCtDQUFtQjs7SUFFbkIsK0NBQXdCOztJQUN4QiwwQ0FBYzs7SUFFZCxvREFBd0I7O0lBRXhCLCtDQXlCQzs7SUFJRCx3Q0FBNkQ7Ozs7O0lBTzNELDZDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgTmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnMgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUSElTX0VYUFIgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0ICB7IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaXNOZ1RlbXBsYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWVsZC1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHN0eWxlPlxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICBtaW4td2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBibG9jaztcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdpZHRoOiAzNzJweDtcbiAgfVxuICAuaW5wdXQtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLmFjdGlvbi1jb21wb25lbnQge1xuICAgIHBhZGRpbmc6MTBweCAxMHB4IDBweCAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICBcbn1cbnNwYW4uY3Vyc29yLXBudHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG59XG4ubGFiZWwuY29sLW1kLTguZm9ybS1jb250cm9sLWxhYmVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cInJvd1wiICAqbmdJZj1cIm9wZW5FZGl0XCIgc3R5bGU9XCJwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO21hcmdpbi10b3A6MTBweDt3aWR0aDo4NSU7bWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIFsobmdNb2RlbCldPVwibGFiZWxcIiBuYW1lPVwibGFiZWxcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgUGxhY2UgSG9sZGVyXCIgWyhuZ01vZGVsKV09XCJwbGFjZWhvbGRlclwiIG5hbWU9XCJwbGFjZWhvbGRlclwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJIaW50L0Rlc2NyaXB0aW9uXCIgWyhuZ01vZGVsKV09XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJEZXNjcmlwdGlvblwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02IFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5JbnB1dCBUeXBlPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3QgIFsobmdNb2RlbCldPVwidHlwZVwiPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibnVtYmVyXCI+bnVtYmVyPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+ZGF0ZTwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQ+XG48bWF0LWxhYmVsPlBhZ2VzPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICBbKG5nTW9kZWwpXT1cInBhZ2VOdW1iZXJcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMVwiPnBhZ2UgMTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMlwiPnBhZ2UgMjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfM1wiPnBhZ2UgMzwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIFxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQ+XG48bWF0LWxhYmVsPkNyaXRlcmlhPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICBbKG5nTW9kZWwpXT1cImRyYWZ0Q3JpdGVyaWFJZFwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNyaXRlcmlhTGlzdFwiIHZhbHVlPVwiaXRlbS5faWRcIj57eyBpdGVtLm5hbWV9fTwvbWF0LW9wdGlvbj5cbiAgIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWluXCIgbWF0SW5wdXQgIFsobmdNb2RlbCldPVwibWluXCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWF4XCIgbWF0SW5wdXQgIFsobmdNb2RlbCldPVwibWF4XCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J2RhdGUnXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFsobmdNb2RlbCldPVwibWluRGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWluIGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyTWF4RGF0ZVwiIFsobmdNb2RlbCldPVwibWF4RGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWF4IGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyTWF4RGF0ZVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXJNYXhEYXRlPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiICpuZ0lmPVwidHlwZT09J3JhZGlvJyB8fCB0eXBlPT0nY2hlY2tib3gnIHx8IHR5cGU9PSdkcm9wZG93bidcIj5cbiAgICA8bGFiZWwgZm9yPVwibGFiZWxcIiBjbGFzcz1cImNvbC1zbS0xMlwiPk9wdGlvbnM8L2xhYmVsPlxuICAgIFxuICAgIDx1bCBjbGFzcz1cImNvbFwiICpuZ0Zvcj1cImxldCBvcHQgb2Ygb3B0aW9ucztsZXQgaW5kZXhcIj5cbiAgICAgPGxpIGNsYXNzPVwiXCI+XG4gICAgICA8c3Bhbj57e29wdC5sYWJlbH19IDwvc3Bhbj48c3BhbiBzdHlsZT1cIlxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XCIgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihvcHQsaW5kZXgpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj5cbiAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIG1hdElucHV0IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtcIiBbKG5nTW9kZWwpXT1cIm5ld09wdGlvbkxhYmVsXCIgbmFtZT1cIm5ld09wdGlvblwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4XCIgbWF0SW5wdXQgbmFtZT1cIm5ld09wdGlvblwiIHBsYWNlaG9sZGVyPVwia2V5XCIgIFsobmdNb2RlbCldPVwibmV3T3B0aW9uS2V5XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD4gIFxuICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiICAoY2xpY2spPVwiQWRkTmV3T3B0aW9ucygpXCI+XG4gICAgICBBZGRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgICAgIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5EbyB5b3Ugd2FudCB0byByZWxhdGVkIHRoZSBxdWVzdGlvbiBiYXNlZCBvbiBiZWxvdyBvcHRpb25zID88L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG5jbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuWyhuZ01vZGVsKV09XCJzZWxlY3RlZE9wdGlvblwiPlxuPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiICpuZ0Zvcj1cImxldCBlbGUgb2Ygb3B0aW9uc1wiICBbdmFsdWVdPVwiZWxlXCI+XG57eyBlbGUubGFiZWwgfX1cbjwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQgPlxuPG1hdC1sYWJlbD5TZWxlY3QgUXVlc3Rpb24gdG8gYWRkIDwvbWF0LWxhYmVsPlxuPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwiY3VycmVudFNlbGVjdGVkUXRuXCIgPlxuPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsdWVzIG9mIGFsbERhdGEucXVlc3Rpb25MaXN0LnF1ZXN0aW9uTGlzdFwiICBbbmdWYWx1ZV09XCJ2YWx1ZXNcIj4ge3sgdmFsdWVzLmxhYmVsIH19IDwvb3B0aW9uPlxuPC9zZWxlY3Q+ICBcbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0ndGV4dCcgfHwgdHlwZT09J2RhdGUnIHx8IHR5cGU9PSdudW1iZXInXCI+XG48bWF0LWZvcm0tZmllbGQgPlxuPG1hdC1sYWJlbD5TZWxlY3QgQ29uZGl0aW9uIDwvbWF0LWxhYmVsPlxuPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwiY29uZGl0aW9uXCIgPlxuPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsdWVzIG9mIGNvbmRpdGlvbkFycmF5XCIgIFtuZ1ZhbHVlXT1cInZhbHVlcy5jb25kaXRpb25cIj4ge3sgdmFsdWVzLmxhYmVsIH19IDwvb3B0aW9uPlxuPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdJZj1cInR5cGU9PSd0ZXh0JyB8fCB0eXBlPT0nZGF0ZScgfHwgdHlwZT09J251bWJlcidcIj5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXhcIiBtYXRJbnB1dCBuYW1lPVwiY29uZGl0aW9uTWF0Y2hWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCIgIFsobmdNb2RlbCldPVwiY29uZGl0aW9uTWF0Y2hWYWx1ZVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPiBcbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cbjxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIiAgKGNsaWNrKT1cInBhcmVudE1hcHBpbmcoKVwiPlxuQWRkXG48L2J1dHRvbj5cbjwvZGl2PlxuPHVsIGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nRm9yPVwibGV0IHJlbGF0ZSBvZiBsaXN0T2ZSZWxhdGlvbjtsZXQgaW5kZXhcIj5cbiA8bGkgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgPHNwYW4+e3tyZWxhdGUuZmllbGR9fSA8L3NwYW4+PHNwYW4gc3R5bGU9XCJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XCIgPlxuICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj5cbjwvbGk+XG48L3VsPlxuXG4gICAgXG48ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG48bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgUmVxaXJlZCA/PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwicmVxdWlyZWRcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICBZZXNcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICBOb1xuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBhdXRvQ29sbGVjdDwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG4gIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIlxuICBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuICBbKG5nTW9kZWwpXT1cImF1dG9Db2xsZWN0XCI+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPXRydWU+XG4gICAgVHJ1ZVxuICA8L21hdC1yYWRpby1idXR0b24+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgIEZhbHNlXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cbiAgXG48ZGl2ICBjbGFzcz1cImNvbC1zbS0xMlwiPlxuXG48YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoxMHB4O1wiICAoY2xpY2spPVwiY2xvc2VNb2RlbCgnc2F2ZScpXCI+XG5TYXZlXG48L2J1dHRvbj5cblxuPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiBzdHlsZT1cInBhZGRpbmc6MHB4O21hcmdpbjowcHg7bWFyZ2luLXRvcDoxMHB4O2JveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO3BhZGRpbmctYm90dG9tOjEwcHg7XCI+XG4gIDxzcGFuIGNsYXNzPVwicXRuX3Bvc2l0aW9uXCI+PHNwYW4gY2xhc3M9XCJcIj4je3sgZmllbGQucG9zaXRpb24gfX08L3NwYW4+PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbXBvbmVudFwiID5cblxuICA8c3BhbiBjbGFzcz1cImN1cnNvci1wbnRyXCIgKGNsaWNrKT1cImNvcHlFbGVtZW50KGZpZWxkKVwiPjxpIGNsYXNzPVwiZmEgZmEtY29weVwiPjwvaT48L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIiAoY2xpY2spPVwiZGVsZXRlRWxlbWVudChmaWVsZClcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPiA8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIiAoY2xpY2spPVwibG9hZEZvcm1FbGVtZW50KGZpZWxkKVwiID48L2k+PC9zcGFuPlxuICBcbiAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XG4gICAgPHRleHRib3ggKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cbiAgICA8dGV4dGJveCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cbiAgICA8ZGF0ZSAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZGF0ZT5cbiAgICA8c2xpZGVyICpuZ1N3aXRjaENhc2U9XCInc2xpZGVyJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3NsaWRlcj5cbiAgICAgIDxkcm9wZG93biAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2Ryb3Bkb3duPlxuICAgICAgPGNoZWNrYm94ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvY2hlY2tib3g+XG4gICAgICA8cmFkaW8gKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9yYWRpbz5cbiAgICAgIDxsaWItbXVsdGktc2VsZWN0ICpuZ1N3aXRjaENhc2U9XCInbXVsdGlzZWxlY3QnXCIgKGNoaWxkcmVuRHJvcEV2ZW50KT1cImNoaWxkcmVuRHJvcEV2ZW50KCRldmVudClcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9saWItbXVsdGktc2VsZWN0PlxuICAgICAgPGZpbGUgKm5nU3dpdGNoQ2FzZT1cIidmaWxlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2ZpbGU+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cbiAgICAgICAgIFxuICAgICAgIDwvZGl2PiBcbiAgICAgICA8L2Rpdj5gLFxuICBzdHlsZXM6IFsgYFxuICAucXRuX3Bvc2l0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCA1cHg7XG4gICAgY29sb3I6ICNjY2M7XG4gIH0gYFxuIF1cbn0pXG5cbi8vIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgbXktMSBwLTIgZmFkZUluRG93biBhbmltYXRlZFwiICpuZ0lmPVwiIWlzVmFsaWQgJiYgaXNEaXJ0eVwiPnt7ZmllbGQubGFiZWx9fSBpcyByZXF1aXJlZDwvZGl2PlxuXG5leHBvcnQgY2xhc3MgRmllbGRCdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmllbGQ6IGFueTtcblxuICBASW5wdXQoKSBjcml0ZXJpYUxpc3Q6YW55O1xuICBASW5wdXQoKSBmb3JtOiBhbnk7XG5cbiAgQE91dHB1dCgpIHNlbmREYXRhVG9QYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgY29weU9yRGVsZXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgXG4gIGNsb3NlUmVzdWx0OiBzdHJpbmc7XG4gIG1vZGFsUmVmZXJlbmNlOiBhbnk7XG4gIHBhZ2VOdW1iZXI7IGFueTtcbiAgbGFiZWw6IGFueTtcbiAgdHlwZTogYW55O1xuICBwbGFjZWhvbGRlcjogYW55O1xuICBvcHRpb25zOiBhbnk7XG4gIG5ld09wdGlvbktleTogYW55O1xuICBuZXdPcHRpb25MYWJlbDogYW55O1xuXG4gIGFjdGl2ZU1vZGVsRGF0YTogYW55O1xuICB2YWxpZGF0aW9uczogYW55O1xuICByZXF1aXJlZDogYW55O1xuICBhdXRvQ29sbGVjdDogYW55O1xuICBvcGVuRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBfaWQ6IGFueTtcbiAgZGVzY3JpcHRpb246IGFueTtcbiAgbWluRGF0ZTogYW55O1xuICBtYXhEYXRlOiBhbnk7XG4gIG1pbjogYW55O1xuICBtYXg6IGFueTtcbiAgZHJhZnRDcml0ZXJpYUlkOmFueTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGFsbERhdGE6YW55O1xuICBjdXJyZW50U2VsZWN0ZWRRdG46YW55O1xuICBzZWxlY3RlZE9wdGlvbjphbnk7XG5cbiAgbGlzdE9mUmVsYXRpb246YW55ID0gW107XG4gIGNvbmRpdGlvbjphbnk7XG5cbiAgY29uZGl0aW9uTWF0Y2hWYWx1ZTphbnk7XG5cbiAgY29uZGl0aW9uQXJyYXk6YW55ID0gW1xuICAgIHtcbiAgICBsYWJlbDpcImVxdWFsc1wiLFxuICAgIGNvbmRpdGlvbjpcIj09PVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDpcIk5vdCBFcXVhbCBUb1wiLFxuICAgICAgY29uZGl0aW9uOlwiIT1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6XCJHcmVhdGVyIFRoYW5cIixcbiAgICAgIGNvbmRpdGlvbjpcIj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6XCJMZXNzIFRoYW5cIixcbiAgICAgIGNvbmRpdGlvbjpcIjxcIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6XCJHcmVhdGVyIFRoYW4gT3IgRXF1YWxcIixcbiAgICAgIGNvbmRpdGlvbjpcIj49XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOlwiTGVzcyBUaGFuIE9yIEVxdWFsXCIsXG4gICAgICBjb25kaXRpb246XCI8PVwiXG4gICAgfVxuICBdXG5cblxuICAvLyBwcml2YXRlIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBteU1vZGFsOiBFbGVtZW50UmVmO1xuXG4gIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxuICAgIHByaXZhdGUgZHluYW1pY1NlcnZlOiBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlXG4gICAgKSB7IFxuXG4gICAgIH1cblxuICAvLyBnZXRBbGwoKXtcbiAgLy8gICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHsgXG4gIC8vICAgICBjb25zb2xlLmxvZyhcImdldCBhbGwgaW5mb1wiLG1lc3NhZ2UpO1xuXG4gIC8vICAgIH0pO1xuXG4gIC8vIH0gICBcblxuXG4gIHBhcmVudE1hcHBpbmcoKXtcblxuXG4gICAgY29uc29sZS5sb2codGhpcy5jb25kaXRpb24sXCJjb25kaXRpb25cIix0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bixcInNlbGVjdGVkT3B0aW9uXCIsdGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gICAgbGV0IG9iaiA9IHt9XG5cbiAgICAvLyBvcHRpb246dGhpcy5zZWxlY3RlZE9wdGlvbixcbiAgICAvLyBxdWVzdGlvbjp0aGlzLmN1cnJlbnRTZWxlY3RlZFF0blxuXG4gICAgLy8gb2JqWyd2aXNpYmxlSWYnXSA9IFtdO1xuXG4gICAgbGV0IGNvbmRpT2JqID0ge1xuICAgICAgb3BlcmF0b3I6dGhpcy5jb25kaXRpb24sXG4gICAgICB2YWx1ZTp0aGlzLmNvbmRpdGlvbk1hdGNoVmFsdWUsXG4gICAgICBmaWVsZDp0aGlzLmZpZWxkLmZpZWxkLFxuICAgICAgLy8gcGFyZW50OnRoaXMuc2VsZWN0ZWRPcHRpb24uZmllbGRcblxuICAgIH1cblxuXG4gICAgY29uc29sZS5sb2coXCJjb25kaU9ialwiLGNvbmRpT2JqKTtcblxuICAgIGxldCBnZXRTZWxlY3RRdWVzdGlvbiA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcihlbGUgPT57XG4gICAgICBpZihlbGUuZmllbGQgPT0gdGhpcy5maWVsZC5maWVsZCl7XG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgICB9XG4gICAgfSk7XG5cblxuXG4gICAgY29uc29sZS5sb2coXCJnZXRTZWxlY3RRdWVzdGlvblwiLGdldFNlbGVjdFF1ZXN0aW9uKTtcblxuICAgIGxldCBpc0F2YWlsYWJsZSA9IGZhbHNlO1xuICAgIGlmKCBnZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10gJiYgZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddLmxlbmd0aCA+IDApe1xuICAgICAgaXNBdmFpbGFibGUgPSBnZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10uZmlsdGVyKGl0ZW09PntcbiAgICAgICAgICAgIGlmKGl0ZW0udmlzaWJsZUlmLmZpZWxkPT10aGlzLmZpZWxkLmZpZWxkKXtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG5cblxuICAgIGxldCBhbGxEYXRhID0gW107XG4gICBcbiAgICAgYWxsRGF0YSA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcihlbGUgPT57XG4gICAgICAgIGlmKGVsZS5maWVsZCA9PSB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCl7XG5cbiAgICAgICAgICBpZihlbGUudmlzaWJsZUlmICYmIGVsZS52aXNpYmxlSWYubGVuZ3RoID4gMCAmJiAgaXNBdmFpbGFibGU9PWZhbHNlKXtcbiAgICAgICAgICAgIGVsZS52aXNpYmxlSWYucHVzaChjb25kaU9iaik7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmID0gW107XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmLnB1c2goY29uZGlPYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICByZXR1cm4gZWxlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIFxuXG5cbiAgICBjb25zb2xlLmxvZyhcImFsbCBkYXRhIGluIHF1ZXN0aW9uXCIsYWxsRGF0YSk7XG5cbiAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQoKVxuICAgXG5cbiAgICBpZighdGhpcy5saXN0T2ZSZWxhdGlvbi5pbmNsdWRlcyhjb25kaU9iaikpe1xuICAgICAgdGhpcy5saXN0T2ZSZWxhdGlvbi5wdXNoKGNvbmRpT2JqKTtcbiAgICB9IFxuXG4gICAgIFxuXG4gICAgaWYodGhpcy5jb25kaXRpb24pe1xuXG4gICAgICBcblxuXG4gICAgfVxuICAgIFxuXG5cbiAgICAvLyAnb3B0aW9uJzp0aGlzLnNlbGVjdGVkT3B0aW9uLFxuICAgIC8vICAgICAgICdxdWVzdGlvbic6dGhpcy5jdXJyZW50U2VsZWN0ZWRRdG5cblxuICAgIC8vIHRoaXMuZmllbGQuY2hpbGRRbnQgPSB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZDtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZWxhdGlvblwiLHRoaXMubGlzdE9mUmVsYXRpb24pO1xuXG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuXG5cbiAgICAvLyB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0biA9IHsgfTtcbiAgICBcbiAgICAvLyB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIHRoaXMudmFsaWRhdGlvbnMgPSB7XG4gICAgICAncmVsYXRpb24nOltdXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucyA9IHtcbiAgICAgICdyZWxhdGlvbic6W11cbiAgfTtcblxuICB9XG4gIGxvYWRGb3JtRWxlbWVudChpdGVtKSB7XG5cblxuICAgIHRoaXMuYWxsRGF0YSA9ICB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuYWxsRGF0YSxcIiBhbGwgcXVlc3Rpb25zIFwiLCB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddKTtcblxuICAgIC8vIHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIml0ZW0gLS0tXCIsICk7XG5cbiAgICB0aGlzLmFjdGl2ZU1vZGVsRGF0YSA9IFwiXCI7XG4gICAgdGhpcy5sYWJlbCA9IGl0ZW0ubGFiZWw7XG4gICAgdGhpcy50eXBlID0gaXRlbS50eXBlO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBpdGVtLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMub3B0aW9ucyA9IGl0ZW0ub3B0aW9ucztcbiAgICB0aGlzLmRyYWZ0Q3JpdGVyaWFJZCA9IGl0ZW0uZHJhZnRDcml0ZXJpYUlkO1xuXG4gICAgXG5cbiAgICB0aGlzLnJlcXVpcmVkID0gaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZDtcbiAgICBcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIGlmKGl0ZW0udmFsaWRhdGlvbnMucmVsYXRpb24pe1xuICAgICAgdGhpcy5saXN0T2ZSZWxhdGlvbiA9IGl0ZW0udmFsaWRhdGlvbnMucmVsYXRpb247XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0udHlwZSA9PSBcImRhdGVcIikge1xuICAgICAgdGhpcy5taW5EYXRlID0gaXRlbS52YWxpZGF0aW9ucy5taW5EYXRlO1xuICAgICAgdGhpcy5tYXhEYXRlID0gaXRlbS52YWxpZGF0aW9ucy5tYXhEYXRlXG4gICAgICB0aGlzLmF1dG9Db2xsZWN0ID0gaXRlbS52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXRlbS50eXBlID09IFwic2xpZGVyXCIpIHtcbiAgICAgIHRoaXMubWluID0gaXRlbS52YWxpZGF0aW9ucy5taW47XG4gICAgICB0aGlzLm1heCA9IGl0ZW0udmFsaWRhdGlvbnMubWF4O1xuICAgIH1cblxuXG4gIFxuICAgIHRoaXMucmVxdWlyZWQgPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuICAgIGNvbnNvbGUubG9nKGl0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWQsIFwiaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZFwiLCB0aGlzLnJlcXVpcmVkLCBcImxhYmVsXCIsIHRoaXMubGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibGFiZWxcIix0aGlzLmxhYmVsKTtcblxuICAgIHRoaXMub3BlbkVkaXQgPSB0aGlzLm9wZW5FZGl0ID8gZmFsc2UgOiB0cnVlO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1vZGFsQnV0dG9uXCIpLmNsaWNrKCk7XG4gICAgLy8gdGhpcy5vcGVuKHRoaXMubXlNb2RhbCk7XG4gICAgLy8gdGhpcy5teU1vZGFsLnNob3coKTtcbiAgICAvLyB0aGlzLm15TW9kYWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnbW9kYWwgZmFkZSBzaG93JztcblxuICB9XG5cbiAgc2F2ZUVkaXQoKSB7XG4gIH1cbiAgY2xvc2VNb2RlbChhY3Rpb24pIHtcblxuICAgIGlmIChhY3Rpb24gPT0gXCJzYXZlXCIpIHtcblxuXG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsaWRhdGlvbnMsXCJ0aGlzLmZpZWxkXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuXG5cbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmZpZWxkID0gdGhpcy5maWVsZC5maWVsZDtcblxuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIGxldCBvYmogPSB7XG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHZhbGlkYXRpb25zOiB0aGlzLnZhbGlkYXRpb25zLFxuICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgX2lkOiB0aGlzLl9pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIGRyYWZ0Q3JpdGVyaWFJZDp0aGlzLmRyYWZ0Q3JpdGVyaWFJZCxcbiAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICAgIG9ialsnbWluRGF0ZSddID0gdGhpcy5taW5EYXRlO1xuICAgICAgICBvYmpbJ21heERhdGUnXSA9IHRoaXMubWF4RGF0ZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgb2JqWydtaW4nXSA9IHRoaXMubWluO1xuICAgICAgICBvYmpbJ21heCddID0gdGhpcy5tYXg7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqXCIsb2JqKTtcblxuXG4gICAgXG5cbiAgICAgIC8vIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuXG5cbiAgICAgIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgdGhpcy5maWVsZC50eXBlID0gdGhpcy50eXBlO1xuICAgICAgdGhpcy5maWVsZC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICB0aGlzLmZpZWxkLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICB0aGlzLmZpZWxkLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZmllbGQuZHJhZnRDcml0ZXJpYUlkID0gdGhpcy5kcmFmdENyaXRlcmlhSWQ7XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluID0gdGhpcy5taW47XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4ID0gdGhpcy5tYXg7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmKHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb24pe1xuXG4gICAgICBpZih0aGlzLmxpc3RPZlJlbGF0aW9uKXtcbiAgICAgICAgb2JqLnZhbGlkYXRpb25zLnJlbGF0aW9uID0gdGhpcy5saXN0T2ZSZWxhdGlvbjtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZWxhdGlvbiA9IHRoaXMubGlzdE9mUmVsYXRpb247XG4gICAgICB9XG4gICAgICAgIFxuICAgICAgLy8gfVxuXG4gICAgICBcblxuICAgICAgLy8gdGhpcy5maWVsZC52YWxpZGF0aW9uc1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQsIFwic2Rkc1wiLCB0aGlzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkO1xuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG5cblxuICAgICAgY29uc29sZS5sb2cob2JqLFwidGhpcy5maWVsZC52YWxpZGF0aW9uc1wiLHRoaXMuZmllbGQudmFsaWRhdGlvbnMpO1xuICAgICAgbGV0IG9wID0ge1xuICAgICAgICBhY3Rpb246XCJzYXZlXCIsXG4gICAgICAgIGRhdGE6b2JqXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KG9wKTtcbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkXCIsIHRoaXMuZmllbGQpO1xuICAgICAgdGhpcy5vcGVuRWRpdCA9IGZhbHNlO1xuXG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdCh0aGlzLmFjdGl2ZU1vZGVsRGF0YSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLm9wZW5FZGl0ID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcbiAgICAvLyAgdGhpcy5teU1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21vZGFsIGhpZGUnO1xuICB9XG5cbiAgb3Blbihjb250ZW50KSB7XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5hY3RpdmVNb2RlbERhdGFcIiwgc2VsZWN0ZWREYXRhKTtcbiAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlID0gdGhpcy5tb2RhbFNlcnZpY2Uub3Blbihjb250ZW50KTtcbiAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAvLyAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgQ2xvc2VkIHdpdGhgO1xuICAgIC8vIH0sIChyZWFzb24pID0+IHtcbiAgICAvLyAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgRGlzbWlzc2VkYDtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgZ2V0RGlzbWlzc1JlYXNvbihyZWFzb246IGFueSk6IHN0cmluZyB7XG4gIC8vICAgLy8gaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5FU0MpIHtcbiAgLy8gICAvLyAgIHJldHVybiAnYnkgcHJlc3NpbmcgRVNDJztcbiAgLy8gICAvLyB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5CQUNLRFJPUF9DTElDSykge1xuICAvLyAgIC8vICAgcmV0dXJuICdieSBjbGlja2luZyBvbiBhIGJhY2tkcm9wJztcbiAgLy8gICAvLyB9IGVsc2Uge1xuICAvLyAgIC8vICAgcmV0dXJuIGB3aXRoOiAke3JlYXNvbn1gO1xuICAvLyAgIC8vIH1cbiAgLy8gfVxuXG4gIGRlbGV0ZU9wdGlvbihvcHQsIGluZGV4KSB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGVcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgIC8vIGxldCBuZXdBcnIgPSBbXTtcbiAgICBsZXQgb3B0aW9uc0FyciA9IHRoaXMub3B0aW9ucy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAvLyBpZihpdGVtLmxhYmxlPT1vcHQubGFiZWwgJiYgaXRlbS5rZXk9PW9wdC5rZXkpe1xuXG4gICAgICAvLyB9ZWxzZXtcblxuICAgICAgLy8gfVxuXG4gICAgICByZXR1cm4gKGl0ZW0ubGFiZWwgIT0gb3B0LmxhYmVsICYmIGl0ZW0ua2V5ICE9IG9wdC5rZXkpXG5cbiAgICAgIC8vIGlmKGl0ZW0ubGFibGU9PW9wdC5sYWJlbCAmJiBpdGVtLmtleT09b3B0LmtleSl7XG5cbiAgICAgIC8vIH1lbHNle1xuICAgICAgLy8gICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIH1cbiAgICB9KVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc0FycjtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSBuZXcgXCIsIG9wdGlvbnNBcnIpO1xuICB9XG4gIEFkZE5ld09wdGlvbnMoKSB7XG5cbiAgICBpZiAodGhpcy5uZXdPcHRpb25LZXkgIT0gXCJcIiAmJiB0aGlzLm5ld09wdGlvbkxhYmVsICE9IFwiXCIpIHtcblxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm5ld09wdGlvblwiLCB0aGlzLm5ld09wdGlvbkxhYmVsKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHtcbiAgICAgICAga2V5OiB0aGlzLm5ld09wdGlvbktleSxcbiAgICAgICAgbGFiZWw6IHRoaXMubmV3T3B0aW9uTGFiZWxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMub3B0aW9ucy5wdXNoXCIsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMubmV3T3B0aW9uS2V5ID0gXCJcIjtcbiAgICB0aGlzLm5ld09wdGlvbkxhYmVsID0gXCJcIjtcbiAgfVxuXG4gIGNvcHlFbGVtZW50KGl0ZW0pIHtcbiAgICAvLyB0aGlzLmZpZWxkLnB1c2goaXRlbSk7XG4gICAgaXRlbS5hY3Rpb24gPSAnY29weSc7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCAtLS0tLS0tLS0tXCIsIGl0ZW0pO1xuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChpdGVtKTtcblxuICB9XG4gIGRlbGV0ZUVsZW1lbnQoaXRlbSkge1xuXG4gICAgaXRlbS5hY3Rpb24gPSAnZGVsZXRlJztcbiAgICB0aGlzLmZpZWxkLmlzRGVsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQoaXRlbSk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCBkZWxldGVcIiwgdGhpcy5maWVsZCk7XG5cbiAgfVxuICBjaGlsZHJlbkRyb3BFdmVudCgkZXZlbnQpe1xuICAgIGNvbnNvbGUubG9nKFwiY2hpbGRyZW5Ecm9wRXZlbnRcIiwgdGhpcy5maWVsZCk7XG4gICAgLy8gY29uc3QgYWN0aW9uICA9ICdjaGlsZERyb3BlZCc7XG4gICAgbGV0IG5ld09iaiA9IHtcbiAgICAgIGFjdGlvbiA6ICdjaGlsZERyb3BlZCcsXG4gICAgICBkYXRhOiRldmVudFxuICAgIH1cbiAgIFxuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChKU09OLnN0cmluZ2lmeShuZXdPYmopKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcbiAgfVxufVxuXG4iXX0=