/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/field-builder/field-builder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { DynamicFormBuilderService } from '../../dynamic-form-builder.service';
// <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>
export class FieldBuilderComponent {
    /**
     * @param {?} dynamicServe
     */
    constructor(dynamicServe) {
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
    /**
     * @return {?}
     */
    get isValid() { return this.form.controls[this.field.name].valid; }
    /**
     * @return {?}
     */
    get isDirty() { return this.form.controls[this.field.name].dirty; }
    // getAll(){
    //   this.subscription = this.dynamicServe.getALl().subscribe(message => { 
    //     console.log("get all info",message);
    //    });
    // }   
    /**
     * @return {?}
     */
    parentMapping() {
        console.log(this.condition, "condition", this.currentSelectedQtn, "selectedOption", this.selectedOption);
        /** @type {?} */
        let obj = {}
        // option:this.selectedOption,
        // question:this.currentSelectedQtn
        // obj['visibleIf'] = [];
        ;
        // option:this.selectedOption,
        // question:this.currentSelectedQtn
        // obj['visibleIf'] = [];
        /** @type {?} */
        let condiObj = {
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
        ele => {
            if (ele.field == this.field.field) {
                return ele;
            }
        }));
        console.log("getSelectQuestion", this.getSelectQuestion);
        /** @type {?} */
        let isAvailable = false;
        if (this.getSelectQuestion['visibleIf'] && this.getSelectQuestion['visibleIf'].length > 0) {
            isAvailable = this.getSelectQuestion['visibleIf'].filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.visibleIf.field == this.field.field) {
                    return true;
                }
            }));
        }
        console.log("after getSelectQuestion", this.getSelectQuestion);
        /** @type {?} */
        let allData = [];
        /** @type {?} */
        let addObj = false;
        for (let i = 0; i < this.getSelectQuestion.length; i++) {
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
            ele => {
                if (ele.field == this.currentSelectedQtn.field) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    loadFormElement(item) {
        console.log('loadFormElement', item);
        this.allData = this.dynamicServe.getALl();
        console.log(this.allData, " all questions ", this.allData['questionList']);
        this.filtereddata = this.allData['questionList']['questionList'].filter((/**
         * @param {?} t
         * @return {?}
         */
        t => t.field !== item.field));
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
    }
    /**
     * @return {?}
     */
    saveEdit() {
    }
    /**
     * @param {?} action
     * @return {?}
     */
    closeModel(action) {
        if (action == "save") {
            console.log(this.validations, "this.field", this.required);
            // this.modalReference.close();
            // this.activeModelData.field = this.field.field;
            // this.activeModelData.label = this.label;
            // this.activeModelData.type = this.type;
            // this.activeModelData.placeholder = this.placeholder;
            // this.activeModelData.options = this.options;
            /** @type {?} */
            let obj = {
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
            let op = {
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
    }
    /**
     * @param {?} content
     * @return {?}
     */
    open(content) {
        // console.log(" this.activeModelData", selectedData);
        // this.modalReference = this.modalService.open(content);
        // this.modalReference.result.then((result) => {
        //   this.closeResult = `Closed with`;
        // }, (reason) => {
        //   this.closeResult = `Dismissed`;
        // });
    }
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
    deleteOption(opt, index) {
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
    }
    /**
     * @return {?}
     */
    AddNewOptions() {
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    copyElement(item) {
        // this.field.push(item);
        item.action = 'copy';
        console.log("field ----------", item);
        this.copyOrDeleteEvent.emit(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    deleteElement(item) {
        item.action = 'delete';
        this.field.isDelete = true;
        this.copyOrDeleteEvent.emit(item);
        console.log("field delete", this.field);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    childrenDropEvent($event) {
        console.log("childrenDropEvent", this.field);
        // const action  = 'childDroped';
        /** @type {?} */
        let newObj = {
            action: 'childDroped',
            data: $event
        };
        this.copyOrDeleteEvent.emit(newObj);
        console.log("field delete", this.field);
    }
    /**
     * @param {?} data
     * @param {?} value
     * @return {?}
     */
    deleteCondition(data, value) {
        // var index = this.listOfRelation.indexOf(value);
        // if (index > -1) {
        this.listOfRelation.splice(value, 1);
        this.getSelectQuestion[0].parentChildren.splice(value, 1);
        // }
        console.log('after delete data', this.listOfRelation);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    add(data) {
        console.log(' add data', data);
        /** @type {?} */
        let page = {
            label: 'page' + ' ' + (data.length + 1),
            value: 'page' + ' ' + (data.length + 1),
        };
        this.pages.push(page);
        this.dynamicServe.setPageNumber(this.pages);
    }
}
FieldBuilderComponent.decorators = [
    { type: Component, args: [{
                selector: 'field-builder',
                template: `
  <style>
  .mat-slider-horizontal {
    min-width: 80% !important;
  }
  .example-radio-group {
    display: flex;
    flex-direction: block;
    margin: 15px 0; 
  }

  .mat-form-field {
    display: block;
    position: relative;
    flex: auto;
    min-width: 0;
    width: 372px;
  }
  .input-group {
    position: relative;
     border-collapse: separate;
     display: block;
  }
  
  .example-radio-button {
    margin: 5px;
  }
  .action-component {
    padding:10px 10px 0px 0px;
    right: 0px;
    cursor: pointer;
    float: right;
  
}
span.cursor-pntr {
  cursor: pointer;
  padding: 2px;
}
.form-control {
  display: block;
  visibility: hidden;

}
.label.col-md-8.form-control-label {
  text-decoration: underline;
}

  </style>
  <div class="row" *ngIf="openEdit" style="padding: 15px;
  border: 1px solid #ccc;margin-top:10px;width:85%;margin-top:40px;margin: auto;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);margin-top:20px;">
    <div class="col-sm-6">
      <mat-form-field>
        <input matInput placeholder="Label" [(ngModel)]="label" name="label">
      </mat-form-field>
    </div>
  
    <div class="col-sm-6">
      <mat-form-field>
        <input matInput placeholder="Input Place Holder" [(ngModel)]="placeholder" name="placeholder">
      </mat-form-field>
    </div>
  
    <div class="col-sm-6">
      <mat-form-field>
        <input matInput placeholder="Hint/Description" [(ngModel)]="description" name="Description">
      </mat-form-field>
    </div>
  
    <div class="col-sm-6 " style="display:none">
      <mat-form-field>
        <mat-label>Input Type</mat-label>
        <mat-select [(ngModel)]="type">
          <mat-option value="text">text</mat-option>
          <mat-option value="number">number</mat-option>
          <mat-option value="radio">radio</mat-option>
          <mat-option value="date">date</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  
    <div class="col-sm-5">
      <mat-form-field>
        <mat-label>Pages</mat-label>
  
        <mat-select [(ngModel)]="pageNumber">
          <mat-option *ngFor="let page of pages; let i = index" value="{{page.value}}">{{page.label}}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <div class="col-sm-1">
      <span style="float:right;padding-top:15px" class="cursor-pntr"><i title="Add Page" class="fa fa-plus"
          (click)="add(pages)"></i></span>
    </div>
  
    <div class="col-sm-6">
      <mat-form-field>
        <mat-label>Criteria</mat-label>
        <mat-select [(ngModel)]="draftCriteriaId">
          <mat-option *ngFor="let item of criteriaList" [value]="item._id">{{ item.name}}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  
  
  
    <div class="col-sm-6" *ngIf="type=='slider'">
      <mat-form-field>
        <input type="text" placeholder="Min" matInput [(ngModel)]="min" name="min value">
      </mat-form-field>
    </div>
  
    <div class="col-sm-6" *ngIf="type=='slider'">
      <mat-form-field>
        <input type="text" placeholder="Max" matInput [(ngModel)]="max" name="min value">
      </mat-form-field>
    </div>
  
    <div class="col-sm-6" *ngIf="type=='date'">
      <mat-form-field>
        <input matInput [matDatepicker]="picker" [(ngModel)]="minDate" placeholder="Choose a min date">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
  
      <mat-form-field>
        <input matInput [matDatepicker]="pickerMaxDate" [(ngModel)]="maxDate" placeholder="Choose a max date">
        <mat-datepicker-toggle matSuffix [for]="pickerMaxDate"></mat-datepicker-toggle>
        <mat-datepicker #pickerMaxDate></mat-datepicker>
      </mat-form-field>
  
  
    </div>
    <div class="col-sm-12" *ngIf="type=='radio' || type=='checkbox' || type=='dropdown'">
      <label for="label" class="col-sm-12">Options</label>
  
      <ul class="col" *ngFor="let opt of options;let i = index">
        <li class="">
          <span>{{opt.label}} </span><span style="
      margin-left: 30px;" (click)="deleteOption(opt,i)">
            <i class="fa fa-trash"></i></span>
        </li>
      </ul>
  
      <div class="col-sm-6">
        <div class="input-group">
          <mat-form-field>
            <input type="text" placeholder="Label" matInput style="margin-bottom: 10px;" [(ngModel)]="newOptionLabel"
              name="newOption">
          </mat-form-field>
          <mat-form-field>
            <input type="tex" disabled matInput name="newOption" placeholder="key" [(ngModel)]="newOptionKey">
          </mat-form-field>
        </div>
        <button mat-flat-button color="primary" style="margin-top: 10px;" (click)="AddNewOptions()">
          Add
        </button>
      </div>
    </div>
  
    <div *ngIf="filtereddata && filtereddata.length > 0">
      <div class="col-sm-12">
        <label id="example-radio-group-label">Do you want to related the question based on below options ?</label>
        <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
          [(ngModel)]="selectedOption">
          <mat-radio-button class="example-radio-button" *ngFor="let ele of options" [value]="ele">
            {{ ele.label }}
          </mat-radio-button>
        </mat-radio-group>
      </div>
  
  
      <div class="col-sm-6">
        <mat-form-field>
          <mat-label>Select Question to add </mat-label>
          <select matNativeControl [(ngModel)]="currentSelectedQtn">
            <option *ngFor="let values of filtereddata" [ngValue]="values"> {{ values.label }} </option>
          </select>
        </mat-form-field>
      </div>
  
      <div class="col-sm-6" *ngIf="type=='text' || type=='date' || type=='number'">
        <mat-form-field>
          <mat-label>Select Condition </mat-label>
          <select matNativeControl [(ngModel)]="condition">
            <option *ngFor="let values of conditionArray" [ngValue]="values.condition"> {{ values.label }} </option>
          </select>
        </mat-form-field>
      </div>
  
      <div class="col-sm-6" *ngIf="type=='text' || type=='date' || type=='number'">
        <mat-form-field>
          <input type="tex" matInput name="conditionMatchValue" placeholder="" [(ngModel)]="conditionMatchValue">
        </mat-form-field>
      </div>
  
      <div class="col-sm-2">
        <button mat-flat-button color="primary" style="margin-top: 10px;" (click)="parentMapping()">
          Add
        </button>
      </div>
    </div>
  
    <ul class="col-sm-12" *ngFor="let relate of listOfRelation;let i = index">
      <li class="col-sm-12">
        <span>{{relate.label}} </span><span style="
  margin-left: 30px;" (click)="deleteCondition(relate,i)">
          <i class="fa fa-trash"></i></span>
      </li>
    </ul>
  
  
    <div class="col-sm-12">
      <label id="example-radio-group-label">is Reqired ?</label>
      <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group" [(ngModel)]="required">
        <mat-radio-button class="example-radio-button" [value]=true>
          Yes
        </mat-radio-button>
        <mat-radio-button class="example-radio-button" [value]=false>
          No
        </mat-radio-button>
      </mat-radio-group>
    </div>
  
    <div class="col-sm-12" *ngIf="type=='date'">
      <label id="example-radio-group-label">is autoCollect</label>
      <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group" [(ngModel)]="autoCollect">
        <mat-radio-button class="example-radio-button" [value]=true>
          True
        </mat-radio-button>
        <mat-radio-button class="example-radio-button" [value]=false>
          False
        </mat-radio-button>
      </mat-radio-group>
    </div>
  
  
    <div class="col-sm-12">
  
      <button mat-flat-button color="primary" style="margin-right:10px;" (click)="closeModel('save')">
        Save
      </button>
  
    </div>
  
  </div>
  <div class="form-group row" [formGroup]="form"
    style="padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;">
    <span class="qtn_position"><span class="">#{{ field.position }}</span></span>
  
    <div class="action-component">
  
      <span class="cursor-pntr" (click)="deleteElement(field)"><i class="fa fa-trash"></i> </span>
      <span class="cursor-pntr" (click)="copyElement(field)"><i class="fa fa-copy"></i></span>
      <span class="cursor-pntr"><i class="fa fa-edit" (click)="loadFormElement(field)"></i></span>
  
    </div>
    <div class="col-md-12" [ngSwitch]="field.type">
      <textbox *ngSwitchCase="'number'" [field]="field" [form]="form"></textbox>
      <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
      <date *ngSwitchCase="'date'" [field]="field" [form]="form"></date>
      <slider *ngSwitchCase="'slider'" [field]="field" [form]="form"></slider>
      <dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></dropdown>
      <checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></checkbox>
      <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
      <lib-multi-select *ngSwitchCase="'matrix'" cdkDrag (childrenDropEvent)="childrenDropEvent($event)" [field]="field"
        [form]="form"></lib-multi-select>
      <file *ngSwitchCase="'file'" [field]="field" [form]="form"></file>
      <div style="float:right">
      </div>
    </div>
    </div>`,
                styles: [`
  .qtn_position {
    float: left;
    width: 40px;
    padding: 5px 0px 0px 5px;
    color: #ccc;
  } `
                ]
            },] },
];
/** @nocollapse */
FieldBuilderComponent.ctorParameters = () => [
    { type: DynamicFormBuilderService }
];
FieldBuilderComponent.propDecorators = {
    field: [{ type: Input }],
    criteriaList: [{ type: Input }],
    form: [{ type: Input }],
    sendDataToParent: [{ type: Output }],
    copyOrDeleteEvent: [{ type: Output }],
    myModal: [{ type: ViewChild, args: ['content', { static: false },] }]
};
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
    FieldBuilderComponent.prototype.pageNumber;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBbVMvRSw2SEFBNkg7QUFFN0gsTUFBTSxPQUFPLHFCQUFxQjs7OztJQXdGaEMsWUFFVSxZQUF1QztRQUF2QyxpQkFBWSxHQUFaLFlBQVksQ0FBMkI7UUFwRnZDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFM0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQVl0RCxVQUFLLEdBQUcsQ0FBQztnQkFDUCxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsUUFBUTthQUNoQixFQUFFO2dCQUNELEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxRQUFRO2FBQ2hCLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLFFBQVE7YUFDaEIsQ0FBQyxDQUFBO1FBTUYsYUFBUSxHQUFZLEtBQUssQ0FBQztRQWMxQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUt6QixtQkFBYyxHQUFRO1lBQ3BCO2dCQUNFLEtBQUssRUFBRSxRQUFRO2dCQUNmLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLFNBQVMsRUFB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QUVyRCxrREFBc0Q7O0lBQ3RELDZDQUFrQjs7SUFDbEIsa0RBQXVCOztJQUN2Qiw0Q0FBb0I7O0lBQ3BCLCtDQUFvQjs7SUFDcEIsc0NBQVc7O0lBQ1gscUNBQVU7O0lBQ1YsNENBQWlCOztJQUNqQix3Q0FBYTs7SUFDYiw2Q0FBa0I7O0lBQ2xCLCtDQUFvQjs7SUFFcEIsc0NBU0U7O0lBRUYsZ0RBQXFCOztJQUNyQiw0Q0FBaUI7O0lBQ2pCLHlDQUFjOztJQUNkLDRDQUFpQjs7SUFDakIseUNBQTBCOztJQUMxQixvQ0FBUzs7SUFDVCw0Q0FBaUI7O0lBQ2pCLDJDQUFnQjs7SUFDaEIsd0NBQWE7O0lBQ2Isd0NBQWE7O0lBQ2Isb0NBQVM7O0lBQ1Qsb0NBQVM7O0lBQ1QsZ0RBQXFCOztJQUNyQiw2Q0FBMkI7O0lBQzNCLHdDQUFhOztJQUNiLG1EQUF3Qjs7SUFDeEIsK0NBQW9COztJQUVwQiwrQ0FBeUI7O0lBQ3pCLDBDQUFlOztJQUVmLG9EQUF5Qjs7SUFFekIsK0NBeUJDOztJQUlELHdDQUE2RDs7Ozs7SUFPM0QsNkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBOZ2JNb2RhbCwgTW9kYWxEaXNtaXNzUmVhc29ucyB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFRISVNfRVhQUiB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzTmdUZW1wbGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmllbGQtYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzdHlsZT5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgbWluLXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgfVxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4IDA7IFxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDM3MnB4O1xuICB9XG4gIC5pbnB1dC1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuYWN0aW9uLWNvbXBvbmVudCB7XG4gICAgcGFkZGluZzoxMHB4IDEwcHggMHB4IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIFxufVxuc3Bhbi5jdXJzb3ItcG50ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMnB4O1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbn1cbi5sYWJlbC5jb2wtbWQtOC5mb3JtLWNvbnRyb2wtbGFiZWwge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJvcGVuRWRpdFwiIHN0eWxlPVwicGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzttYXJnaW4tdG9wOjEwcHg7d2lkdGg6ODUlO21hcmdpbi10b3A6NDBweDttYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO21hcmdpbi10b3A6MjBweDtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTGFiZWxcIiBbKG5nTW9kZWwpXT1cImxhYmVsXCIgbmFtZT1cImxhYmVsXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgUGxhY2UgSG9sZGVyXCIgWyhuZ01vZGVsKV09XCJwbGFjZWhvbGRlclwiIG5hbWU9XCJwbGFjZWhvbGRlclwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkhpbnQvRGVzY3JpcHRpb25cIiBbKG5nTW9kZWwpXT1cImRlc2NyaXB0aW9uXCIgbmFtZT1cIkRlc2NyaXB0aW9uXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5JbnB1dCBUeXBlPC9tYXQtbGFiZWw+XG4gICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwidHlwZVwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dFwiPnRleHQ8L21hdC1vcHRpb24+XG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJudW1iZXJcIj5udW1iZXI8L21hdC1vcHRpb24+XG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZGF0ZVwiPmRhdGU8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPlBhZ2VzPC9tYXQtbGFiZWw+XG4gIFxuICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInBhZ2VOdW1iZXJcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlczsgbGV0IGkgPSBpbmRleFwiIHZhbHVlPVwie3twYWdlLnZhbHVlfX1cIj57e3BhZ2UubGFiZWx9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cbiAgICAgIDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHQ7cGFkZGluZy10b3A6MTVweFwiIGNsYXNzPVwiY3Vyc29yLXBudHJcIj48aSB0aXRsZT1cIkFkZCBQYWdlXCIgY2xhc3M9XCJmYSBmYS1wbHVzXCJcbiAgICAgICAgICAoY2xpY2spPVwiYWRkKHBhZ2VzKVwiPjwvaT48L3NwYW4+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPkNyaXRlcmlhPC9tYXQtbGFiZWw+XG4gICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZHJhZnRDcml0ZXJpYUlkXCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY3JpdGVyaWFMaXN0XCIgW3ZhbHVlXT1cIml0ZW0uX2lkXCI+e3sgaXRlbS5uYW1lfX08L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gIFxuICBcbiAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1pblwiIG1hdElucHV0IFsobmdNb2RlbCldPVwibWluXCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1heFwiIG1hdElucHV0IFsobmdNb2RlbCldPVwibWF4XCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFsobmdNb2RlbCldPVwibWluRGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWluIGRhdGVcIj5cbiAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIFxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyTWF4RGF0ZVwiIFsobmdNb2RlbCldPVwibWF4RGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWF4IGRhdGVcIj5cbiAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJNYXhEYXRlXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyTWF4RGF0ZT48L21hdC1kYXRlcGlja2VyPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgXG4gIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdJZj1cInR5cGU9PSdyYWRpbycgfHwgdHlwZT09J2NoZWNrYm94JyB8fCB0eXBlPT0nZHJvcGRvd24nXCI+XG4gICAgICA8bGFiZWwgZm9yPVwibGFiZWxcIiBjbGFzcz1cImNvbC1zbS0xMlwiPk9wdGlvbnM8L2xhYmVsPlxuICBcbiAgICAgIDx1bCBjbGFzcz1cImNvbFwiICpuZ0Zvcj1cImxldCBvcHQgb2Ygb3B0aW9ucztsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxzcGFuPnt7b3B0LmxhYmVsfX0gPC9zcGFuPjxzcGFuIHN0eWxlPVwiXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcIiAoY2xpY2spPVwiZGVsZXRlT3B0aW9uKG9wdCxpKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgbWF0SW5wdXQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiIFsobmdNb2RlbCldPVwibmV3T3B0aW9uTGFiZWxcIlxuICAgICAgICAgICAgICBuYW1lPVwibmV3T3B0aW9uXCI+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleFwiIGRpc2FibGVkIG1hdElucHV0IG5hbWU9XCJuZXdPcHRpb25cIiBwbGFjZWhvbGRlcj1cImtleVwiIFsobmdNb2RlbCldPVwibmV3T3B0aW9uS2V5XCI+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIiAoY2xpY2spPVwiQWRkTmV3T3B0aW9ucygpXCI+XG4gICAgICAgICAgQWRkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgKm5nSWY9XCJmaWx0ZXJlZGRhdGEgJiYgZmlsdGVyZWRkYXRhLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPkRvIHlvdSB3YW50IHRvIHJlbGF0ZWQgdGhlIHF1ZXN0aW9uIGJhc2VkIG9uIGJlbG93IG9wdGlvbnMgPzwvbGFiZWw+XG4gICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZE9wdGlvblwiPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiAqbmdGb3I9XCJsZXQgZWxlIG9mIG9wdGlvbnNcIiBbdmFsdWVdPVwiZWxlXCI+XG4gICAgICAgICAgICB7eyBlbGUubGFiZWwgfX1cbiAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gIFxuICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPG1hdC1sYWJlbD5TZWxlY3QgUXVlc3Rpb24gdG8gYWRkIDwvbWF0LWxhYmVsPlxuICAgICAgICAgIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbKG5nTW9kZWwpXT1cImN1cnJlbnRTZWxlY3RlZFF0blwiPlxuICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsdWVzIG9mIGZpbHRlcmVkZGF0YVwiIFtuZ1ZhbHVlXT1cInZhbHVlc1wiPiB7eyB2YWx1ZXMubGFiZWwgfX0gPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8L2Rpdj5cbiAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSd0ZXh0JyB8fCB0eXBlPT0nZGF0ZScgfHwgdHlwZT09J251bWJlcidcIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxtYXQtbGFiZWw+U2VsZWN0IENvbmRpdGlvbiA8L21hdC1sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgWyhuZ01vZGVsKV09XCJjb25kaXRpb25cIj5cbiAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHZhbHVlcyBvZiBjb25kaXRpb25BcnJheVwiIFtuZ1ZhbHVlXT1cInZhbHVlcy5jb25kaXRpb25cIj4ge3sgdmFsdWVzLmxhYmVsIH19IDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPC9kaXY+XG4gIFxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0ndGV4dCcgfHwgdHlwZT09J2RhdGUnIHx8IHR5cGU9PSdudW1iZXInXCI+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleFwiIG1hdElucHV0IG5hbWU9XCJjb25kaXRpb25NYXRjaFZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIiBbKG5nTW9kZWwpXT1cImNvbmRpdGlvbk1hdGNoVmFsdWVcIj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDwvZGl2PlxuICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgKGNsaWNrKT1cInBhcmVudE1hcHBpbmcoKVwiPlxuICAgICAgICAgIEFkZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBcbiAgICA8dWwgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdGb3I9XCJsZXQgcmVsYXRlIG9mIGxpc3RPZlJlbGF0aW9uO2xldCBpID0gaW5kZXhcIj5cbiAgICAgIDxsaSBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICA8c3Bhbj57e3JlbGF0ZS5sYWJlbH19IDwvc3Bhbj48c3BhbiBzdHlsZT1cIlxuICBtYXJnaW4tbGVmdDogMzBweDtcIiAoY2xpY2spPVwiZGVsZXRlQ29uZGl0aW9uKHJlbGF0ZSxpKVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICBcbiAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIFJlcWlyZWQgPzwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbKG5nTW9kZWwpXT1cInJlcXVpcmVkXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPXRydWU+XG4gICAgICAgICAgWWVzXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgICAgICAgTm9cbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuICAgICAgPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIGF1dG9Db2xsZWN0PC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiIFsobmdNb2RlbCldPVwiYXV0b0NvbGxlY3RcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICAgICAgICBUcnVlXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgICAgICAgRmFsc2VcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG4gIFxuICBcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gIFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MTBweDtcIiAoY2xpY2spPVwiY2xvc2VNb2RlbCgnc2F2ZScpXCI+XG4gICAgICAgIFNhdmVcbiAgICAgIDwvYnV0dG9uPlxuICBcbiAgICA8L2Rpdj5cbiAgXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiBbZm9ybUdyb3VwXT1cImZvcm1cIlxuICAgIHN0eWxlPVwicGFkZGluZzowcHg7bWFyZ2luOjBweDttYXJnaW4tdG9wOjEwcHg7Ym94LXNoYWRvdzogMXB4IDFweCAycHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7cGFkZGluZy1ib3R0b206MTBweDtcIj5cbiAgICA8c3BhbiBjbGFzcz1cInF0bl9wb3NpdGlvblwiPjxzcGFuIGNsYXNzPVwiXCI+I3t7IGZpZWxkLnBvc2l0aW9uIH19PC9zcGFuPjwvc3Bhbj5cbiAgXG4gICAgPGRpdiBjbGFzcz1cImFjdGlvbi1jb21wb25lbnRcIj5cbiAgXG4gICAgICA8c3BhbiBjbGFzcz1cImN1cnNvci1wbnRyXCIgKGNsaWNrKT1cImRlbGV0ZUVsZW1lbnQoZmllbGQpXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4gPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiIChjbGljayk9XCJjb3B5RWxlbWVudChmaWVsZClcIj48aSBjbGFzcz1cImZhIGZhLWNvcHlcIj48L2k+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIChjbGljayk9XCJsb2FkRm9ybUVsZW1lbnQoZmllbGQpXCI+PC9pPjwvc3Bhbj5cbiAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XG4gICAgICA8dGV4dGJveCAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuICAgICAgPHRleHRib3ggKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3RleHRib3g+XG4gICAgICA8ZGF0ZSAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZGF0ZT5cbiAgICAgIDxzbGlkZXIgKm5nU3dpdGNoQ2FzZT1cIidzbGlkZXInXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvc2xpZGVyPlxuICAgICAgPGRyb3Bkb3duICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZHJvcGRvd24+XG4gICAgICA8Y2hlY2tib3ggKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9jaGVja2JveD5cbiAgICAgIDxyYWRpbyAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3JhZGlvPlxuICAgICAgPGxpYi1tdWx0aS1zZWxlY3QgKm5nU3dpdGNoQ2FzZT1cIidtYXRyaXgnXCIgY2RrRHJhZyAoY2hpbGRyZW5Ecm9wRXZlbnQpPVwiY2hpbGRyZW5Ecm9wRXZlbnQoJGV2ZW50KVwiIFtmaWVsZF09XCJmaWVsZFwiXG4gICAgICAgIFtmb3JtXT1cImZvcm1cIj48L2xpYi1tdWx0aS1zZWxlY3Q+XG4gICAgICA8ZmlsZSAqbmdTd2l0Y2hDYXNlPVwiJ2ZpbGUnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZmlsZT5cbiAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDpyaWdodFwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbYFxuICAucXRuX3Bvc2l0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCA1cHg7XG4gICAgY29sb3I6ICNjY2M7XG4gIH0gYFxuICBdXG59KVxuXG4vLyA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIG15LTEgcC0yIGZhZGVJbkRvd24gYW5pbWF0ZWRcIiAqbmdJZj1cIiFpc1ZhbGlkICYmIGlzRGlydHlcIj57e2ZpZWxkLmxhYmVsfX0gaXMgcmVxdWlyZWQ8L2Rpdj5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnk7XG5cbiAgQElucHV0KCkgY3JpdGVyaWFMaXN0OiBhbnk7XG4gIEBJbnB1dCgpIGZvcm06IGFueTtcblxuICBAT3V0cHV0KCkgc2VuZERhdGFUb1BhcmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBjb3B5T3JEZWxldGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBmaWx0ZXJlZGRhdGE6IGFueTtcbiAgZ2V0U2VsZWN0UXVlc3Rpb246IGFueTtcbiAgY2xvc2VSZXN1bHQ6IHN0cmluZztcbiAgbW9kYWxSZWZlcmVuY2U6IGFueTtcbiAgbGFiZWw6IGFueTtcbiAgdHlwZTogYW55O1xuICBwbGFjZWhvbGRlcjogYW55O1xuICBvcHRpb25zOiBhbnk7XG4gIG5ld09wdGlvbktleTogYW55O1xuICBuZXdPcHRpb25MYWJlbDogYW55O1xuXG4gIHBhZ2VzID0gW3tcbiAgICBsYWJlbDogJ3BhZ2UgMScsXG4gICAgdmFsdWU6ICdwYWdlIDEnXG4gIH0sIHtcbiAgICBsYWJlbDogJ3BhZ2UgMicsXG4gICAgdmFsdWU6ICdwYWdlIDInXG4gIH0sIHtcbiAgICBsYWJlbDogJ3BhZ2UgMycsXG4gICAgdmFsdWU6ICdwYWdlIDMnXG4gIH1dXG5cbiAgYWN0aXZlTW9kZWxEYXRhOiBhbnk7XG4gIHZhbGlkYXRpb25zOiBhbnk7XG4gIHJlcXVpcmVkOiBhbnk7XG4gIGF1dG9Db2xsZWN0OiBhbnk7XG4gIG9wZW5FZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIF9pZDogYW55O1xuICBkZXNjcmlwdGlvbjogYW55O1xuICBwYWdlTnVtYmVyOiBhbnk7XG4gIG1pbkRhdGU6IGFueTtcbiAgbWF4RGF0ZTogYW55O1xuICBtaW46IGFueTtcbiAgbWF4OiBhbnk7XG4gIGRyYWZ0Q3JpdGVyaWFJZDogYW55O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYWxsRGF0YTogYW55O1xuICBjdXJyZW50U2VsZWN0ZWRRdG46IGFueTtcbiAgc2VsZWN0ZWRPcHRpb246IGFueTtcblxuICBsaXN0T2ZSZWxhdGlvbjogYW55ID0gW107XG4gIGNvbmRpdGlvbjogYW55O1xuXG4gIGNvbmRpdGlvbk1hdGNoVmFsdWU6IGFueTtcblxuICBjb25kaXRpb25BcnJheTogYW55ID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcImVxdWFsc1wiLFxuICAgICAgY29uZGl0aW9uOiBcIj09PVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJOb3QgRXF1YWwgVG9cIixcbiAgICAgIGNvbmRpdGlvbjogXCIhPVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJHcmVhdGVyIFRoYW5cIixcbiAgICAgIGNvbmRpdGlvbjogXCI+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkxlc3MgVGhhblwiLFxuICAgICAgY29uZGl0aW9uOiBcIjxcIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiR3JlYXRlciBUaGFuIE9yIEVxdWFsXCIsXG4gICAgICBjb25kaXRpb246IFwiPj1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiTGVzcyBUaGFuIE9yIEVxdWFsXCIsXG4gICAgICBjb25kaXRpb246IFwiPD1cIlxuICAgIH1cbiAgXVxuXG5cbiAgLy8gcHJpdmF0ZSBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbXlNb2RhbDogRWxlbWVudFJlZjtcblxuICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWxcbiAgICBwcml2YXRlIGR5bmFtaWNTZXJ2ZTogRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZVxuICApIHtcblxuICB9XG5cbiAgLy8gZ2V0QWxsKCl7XG4gIC8vICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7IFxuICAvLyAgICAgY29uc29sZS5sb2coXCJnZXQgYWxsIGluZm9cIixtZXNzYWdlKTtcblxuICAvLyAgICB9KTtcblxuICAvLyB9ICAgXG5cblxuICBwYXJlbnRNYXBwaW5nKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZGl0aW9uLCBcImNvbmRpdGlvblwiLCB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0biwgXCJzZWxlY3RlZE9wdGlvblwiLCB0aGlzLnNlbGVjdGVkT3B0aW9uKTtcbiAgICBsZXQgb2JqID0ge31cbiAgICAvLyBvcHRpb246dGhpcy5zZWxlY3RlZE9wdGlvbixcbiAgICAvLyBxdWVzdGlvbjp0aGlzLmN1cnJlbnRTZWxlY3RlZFF0blxuICAgIC8vIG9ialsndmlzaWJsZUlmJ10gPSBbXTtcblxuXG4gICAgbGV0IGNvbmRpT2JqID0ge1xuICAgICAgb3BlcmF0b3I6IHRoaXMuY29uZGl0aW9uLFxuICAgICAgdmFsdWU6IHRoaXMuY29uZGl0aW9uTWF0Y2hWYWx1ZSxcbiAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLmZpZWxkLFxuICAgICAgbGFiZWw6IHRoaXMuZmllbGQubGFiZWxcbiAgICAgIC8vIHBhcmVudDp0aGlzLnNlbGVjdGVkT3B0aW9uLmZpZWxkXG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLnBhcmVudENoaWxkcmVuKSB7XG4gICAgLy8gICB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbi5wdXNoKGNvbmRpT2JqKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4ucGFyZW50Q2hpbGRyZW4gPSBbXTtcbiAgICAvLyAgIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLnBhcmVudENoaWxkcmVuLnB1c2goY29uZGlPYmopO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZygndGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4nLCB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bik7XG5cbiAgICBjb25zb2xlLmxvZyhcImNvbmRpT2JqXCIsIGNvbmRpT2JqKTtcbiAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uID0gdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J10uZmlsdGVyKGVsZSA9PiB7XG4gICAgICBpZiAoZWxlLmZpZWxkID09IHRoaXMuZmllbGQuZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiZ2V0U2VsZWN0UXVlc3Rpb25cIiwgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbik7XG5cbiAgICBsZXQgaXNBdmFpbGFibGUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5nZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10gJiYgdGhpcy5nZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10ubGVuZ3RoID4gMCkge1xuICAgICAgaXNBdmFpbGFibGUgPSB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uWyd2aXNpYmxlSWYnXS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnZpc2libGVJZi5maWVsZCA9PSB0aGlzLmZpZWxkLmZpZWxkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cblxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZ2V0U2VsZWN0UXVlc3Rpb25cIiwgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbik7XG5cbiAgICBsZXQgYWxsRGF0YSA9IFtdO1xuXG5cblxuICAgIGxldCBhZGRPYmogPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgICBpZiAodGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbikge1xuICAgICAgICBpZiAodGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKSAhPT0gLTEpIHtcbiAgICAgICAgICBhbGVydChcIlZhbHVlIGV4aXN0cyFcIilcblxuICAgICAgICAgIGFkZE9iaiA9IGZhbHNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBhZGRPYmogPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4ucHVzaCh0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkT2JqID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuLnB1c2godGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKGFkZE9iaikge1xuXG5cbiAgICAgIGFsbERhdGEgPSB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddWydxdWVzdGlvbkxpc3QnXS5maWx0ZXIoZWxlID0+IHtcbiAgICAgICAgaWYgKGVsZS5maWVsZCA9PSB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCkge1xuICAgICAgICAgIGlmIChlbGUudmlzaWJsZUlmICYmIGVsZS52aXNpYmxlSWYubGVuZ3RoID4gMCAmJiBpc0F2YWlsYWJsZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZWxlLnZpc2libGVJZi5wdXNoKGNvbmRpT2JqKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLnZpc2libGVJZiA9IFtdO1xuICAgICAgICAgICAgZWxlLnZpc2libGVJZi5wdXNoKGNvbmRpT2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZWxlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cblxuICAgICAgY29uc29sZS5sb2coXCJhbGwgZGF0YSBpbiBxdWVzdGlvblwiLCBhbGxEYXRhKTtcblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50KClcblxuXG5cblxuXG5cbiAgICAgIGlmICghdGhpcy5saXN0T2ZSZWxhdGlvbi5pbmNsdWRlcyhjb25kaU9iaikpIHtcblxuICAgICAgICB0aGlzLmxpc3RPZlJlbGF0aW9uLnB1c2goY29uZGlPYmopO1xuXG5cbiAgICAgIH1cblxuXG4gICAgfVxuXG5cblxuICAgIGlmICh0aGlzLmNvbmRpdGlvbikge1xuXG5cblxuXG4gICAgfVxuXG5cblxuICAgIC8vICdvcHRpb24nOnRoaXMuc2VsZWN0ZWRPcHRpb24sXG4gICAgLy8gICAgICAgJ3F1ZXN0aW9uJzp0aGlzLmN1cnJlbnRTZWxlY3RlZFF0blxuXG4gICAgLy8gdGhpcy5maWVsZC5jaGlsZFFudCA9IHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uXCIsIHRoaXMubGlzdE9mUmVsYXRpb24pO1xuXG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuID0geyB9O1xuICAgIC8vIHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpO1xuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIHRoaXMudmFsaWRhdGlvbnMgPSB7XG4gICAgICAncmVsYXRpb24nOiBbXVxuICAgIH1cblxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMgPSB7XG4gICAgICAncmVsYXRpb24nOiBbXVxuICAgIH07XG4gICAgdGhpcy5keW5hbWljU2VydmUuc2V0UGFnZU51bWJlcih0aGlzLnBhZ2VzKTtcbiAgfVxuICBsb2FkRm9ybUVsZW1lbnQoaXRlbSkge1xuXG4gICAgY29uc29sZS5sb2coJ2xvYWRGb3JtRWxlbWVudCcsIGl0ZW0pO1xuICAgIHRoaXMuYWxsRGF0YSA9IHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5hbGxEYXRhLCBcIiBhbGwgcXVlc3Rpb25zIFwiLCB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddKTtcblxuXG5cbiAgICB0aGlzLmZpbHRlcmVkZGF0YSA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcih0ID0+IHQuZmllbGQgIT09IGl0ZW0uZmllbGQpO1xuXG4gICAgdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J107XG5cbiAgICB0aGlzLmNyaXRlcmlhTGlzdCA9IHRoaXMuYWxsRGF0YVsnY3JpdGVyaWFMaXN0J107XG4gICAgY29uc29sZS5sb2coJ2NvbnN0IGZpbHRlcmVkZGF0YScsIHRoaXMuZmlsdGVyZWRkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbGVuZ3RoJywgdGhpcy5maWx0ZXJlZGRhdGFbJ3F1ZXN0aW9uTGlzdCddLmxlbmd0aCk7XG5cbiAgICAvLyB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJpdGVtIC0tLVwiLCApO1xuXG4gICAgdGhpcy5hY3RpdmVNb2RlbERhdGEgPSBcIlwiO1xuICAgIHRoaXMubGFiZWwgPSBpdGVtLmxhYmVsO1xuICAgIHRoaXMudHlwZSA9IGl0ZW0udHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gaXRlbS5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBpdGVtLm9wdGlvbnM7XG4gICAgdGhpcy5kcmFmdENyaXRlcmlhSWQgPSBpdGVtLmRyYWZ0Q3JpdGVyaWFJZDtcbiAgICAvLyB0aGlzLnBhZ2VzID0gdGhpcy5wYWdlc1xuICAgIHRoaXMucmVxdWlyZWQgPSBpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gaXRlbS5wYWdlTnVtYmVyO1xuXG4gICAgaWYgKGl0ZW0udmFsaWRhdGlvbnMucmVsYXRpb24pIHtcbiAgICAgIHRoaXMubGlzdE9mUmVsYXRpb24gPSBpdGVtLnZhbGlkYXRpb25zLnJlbGF0aW9uO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnR5cGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIHRoaXMubWluRGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWluRGF0ZTtcbiAgICAgIHRoaXMubWF4RGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWF4RGF0ZVxuICAgICAgdGhpcy5hdXRvQ29sbGVjdCA9IGl0ZW0udmFsaWRhdGlvbnMuYXV0b0NvbGxlY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW0udHlwZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICB0aGlzLm1pbiA9IGl0ZW0udmFsaWRhdGlvbnMubWluO1xuICAgICAgdGhpcy5tYXggPSBpdGVtLnZhbGlkYXRpb25zLm1heDtcbiAgICB9XG5cblxuXG4gICAgdGhpcy5yZXF1aXJlZCA9IHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQ7XG4gICAgY29uc29sZS5sb2coaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMucmVxdWlyZWQsIFwibGFiZWxcIiwgdGhpcy5sYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJsYWJlbFwiLHRoaXMubGFiZWwpO1xuXG4gICAgdGhpcy5vcGVuRWRpdCA9IHRoaXMub3BlbkVkaXQgPyBmYWxzZSA6IHRydWU7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTW9kYWxCdXR0b25cIikuY2xpY2soKTtcbiAgICAvLyB0aGlzLm9wZW4odGhpcy5teU1vZGFsKTtcbiAgICAvLyB0aGlzLm15TW9kYWwuc2hvdygpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBmYWRlIHNob3cnO1xuXG4gIH1cblxuICBzYXZlRWRpdCgpIHtcbiAgfVxuICBjbG9zZU1vZGVsKGFjdGlvbikge1xuXG4gICAgaWYgKGFjdGlvbiA9PSBcInNhdmVcIikge1xuXG5cblxuICAgICAgY29uc29sZS5sb2codGhpcy52YWxpZGF0aW9ucywgXCJ0aGlzLmZpZWxkXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuXG5cbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmZpZWxkID0gdGhpcy5maWVsZC5maWVsZDtcblxuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIGxldCBvYmogPSB7XG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHZhbGlkYXRpb25zOiB0aGlzLnZhbGlkYXRpb25zLFxuICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgX2lkOiB0aGlzLl9pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMucGFnZU51bWJlcixcbiAgICAgICAgZHJhZnRDcml0ZXJpYUlkOiB0aGlzLmRyYWZ0Q3JpdGVyaWFJZCxcblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICBvYmpbJ21pbkRhdGUnXSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgb2JqWydtYXhEYXRlJ10gPSB0aGlzLm1heERhdGVcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIG9ialsnbWluJ10gPSB0aGlzLm1pbjtcbiAgICAgICAgb2JqWydtYXgnXSA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm9ialwiLG9iaik7XG5cblxuXG5cbiAgICAgIC8vIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuXG5cbiAgICAgIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgdGhpcy5maWVsZC50eXBlID0gdGhpcy50eXBlO1xuICAgICAgdGhpcy5maWVsZC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICB0aGlzLmZpZWxkLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICB0aGlzLmZpZWxkLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZmllbGQucGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlcjtcbiAgICAgIHRoaXMuZmllbGQuZHJhZnRDcml0ZXJpYUlkID0gdGhpcy5kcmFmdENyaXRlcmlhSWQ7XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluID0gdGhpcy5taW47XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4ID0gdGhpcy5tYXg7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmKHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb24pe1xuXG4gICAgICBpZiAodGhpcy5saXN0T2ZSZWxhdGlvbikge1xuICAgICAgICBvYmoudmFsaWRhdGlvbnMucmVsYXRpb24gPSB0aGlzLmxpc3RPZlJlbGF0aW9uO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uID0gdGhpcy5saXN0T2ZSZWxhdGlvbjtcbiAgICAgIH1cblxuICAgICAgLy8gfVxuXG5cblxuICAgICAgLy8gdGhpcy5maWVsZC52YWxpZGF0aW9uc1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQsIFwic2Rkc1wiLCB0aGlzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkO1xuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG5cblxuICAgICAgY29uc29sZS5sb2cob2JqLCBcInRoaXMuZmllbGQudmFsaWRhdGlvbnNcIiwgdGhpcy5maWVsZC52YWxpZGF0aW9ucyk7XG4gICAgICBsZXQgb3AgPSB7XG4gICAgICAgIGFjdGlvbjogXCJzYXZlXCIsXG4gICAgICAgIGRhdGE6IG9ialxuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdChvcCk7XG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdChKU09OLnN0cmluZ2lmeShvYmopKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgIHRoaXMub3BlbkVkaXQgPSBmYWxzZTtcblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQodGhpcy5hY3RpdmVNb2RlbERhdGEpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5vcGVuRWRpdCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKCk7XG4gICAgLy8gIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBoaWRlJztcbiAgfVxuXG4gIG9wZW4oY29udGVudCkge1xuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuYWN0aXZlTW9kZWxEYXRhXCIsIHNlbGVjdGVkRGF0YSk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZSA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYENsb3NlZCB3aXRoYDtcbiAgICAvLyB9LCAocmVhc29uKSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYERpc21pc3NlZGA7XG4gICAgLy8gfSk7XG4gIH1cblxuICAvLyBwcml2YXRlIGdldERpc21pc3NSZWFzb24ocmVhc29uOiBhbnkpOiBzdHJpbmcge1xuICAvLyAgIC8vIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuRVNDKSB7XG4gIC8vICAgLy8gICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XG4gIC8vICAgLy8gfSBlbHNlIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuQkFDS0RST1BfQ0xJQ0spIHtcbiAgLy8gICAvLyAgIHJldHVybiAnYnkgY2xpY2tpbmcgb24gYSBiYWNrZHJvcCc7XG4gIC8vICAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyAgIHJldHVybiBgd2l0aDogJHtyZWFzb259YDtcbiAgLy8gICAvLyB9XG4gIC8vIH1cblxuICBkZWxldGVPcHRpb24ob3B0LCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBsZXQgbmV3QXJyID0gW107XG4gICAgLy8gbGV0IG9wdGlvbnNBcnIgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgIC8vIGlmKGl0ZW0ubGFibGU9PW9wdC5sYWJlbCAmJiBpdGVtLmtleT09b3B0LmtleSl7XG5cbiAgICAvLyB9ZWxzZXtcblxuICAgIC8vIH1cblxuICAgIC8vIHJldHVybiAoaXRlbS5sYWJlbCAhPSBvcHQubGFiZWwgJiYgaXRlbS5rZXkgIT0gb3B0LmtleSlcblxuICAgIC8vIGlmKGl0ZW0ubGFibGU9PW9wdC5sYWJlbCAmJiBpdGVtLmtleT09b3B0LmtleSl7XG5cbiAgICAvLyB9ZWxzZXtcbiAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgIC8vIH1cbiAgICAvLyB9KVxuICAgIHRoaXMub3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gdGhpcy5vcHRpb25zID0gb3B0aW9uc0FycjtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSBuZXcgXCIsIHRoaXMub3B0aW9ucyk7XG4gIH1cbiAgQWRkTmV3T3B0aW9ucygpIHtcblxuICAgIGlmICh0aGlzLm5ld09wdGlvbkxhYmVsICE9IFwiXCIpIHtcblxuICAgICAgdGhpcy5uZXdPcHRpb25LZXkgPSAnUicgKyB0aGlzLm9wdGlvbnMubGVuZ3RoO1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm5ld09wdGlvblwiLCB0aGlzLm5ld09wdGlvbkxhYmVsKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zLnB1c2goe1xuICAgICAgICBrZXk6IHRoaXMubmV3T3B0aW9uS2V5LFxuICAgICAgICBsYWJlbDogdGhpcy5uZXdPcHRpb25MYWJlbFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5vcHRpb25zLnB1c2hcIiwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5uZXdPcHRpb25LZXkgPSBcIlwiO1xuICAgIHRoaXMubmV3T3B0aW9uTGFiZWwgPSBcIlwiO1xuICB9XG5cbiAgY29weUVsZW1lbnQoaXRlbSkge1xuICAgIC8vIHRoaXMuZmllbGQucHVzaChpdGVtKTtcbiAgICBpdGVtLmFjdGlvbiA9ICdjb3B5JztcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIC0tLS0tLS0tLS1cIiwgaXRlbSk7XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KGl0ZW0pO1xuXG4gIH1cbiAgZGVsZXRlRWxlbWVudChpdGVtKSB7XG5cbiAgICBpdGVtLmFjdGlvbiA9ICdkZWxldGUnO1xuICAgIHRoaXMuZmllbGQuaXNEZWxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChpdGVtKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcblxuICB9XG4gIGNoaWxkcmVuRHJvcEV2ZW50KCRldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2hpbGRyZW5Ecm9wRXZlbnRcIiwgdGhpcy5maWVsZCk7XG4gICAgLy8gY29uc3QgYWN0aW9uICA9ICdjaGlsZERyb3BlZCc7XG4gICAgbGV0IG5ld09iaiA9IHtcbiAgICAgIGFjdGlvbjogJ2NoaWxkRHJvcGVkJyxcbiAgICAgIGRhdGE6ICRldmVudFxuICAgIH1cbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQobmV3T2JqKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcbiAgfVxuXG4gIGRlbGV0ZUNvbmRpdGlvbihkYXRhLCB2YWx1ZSkge1xuICAgIC8vIHZhciBpbmRleCA9IHRoaXMubGlzdE9mUmVsYXRpb24uaW5kZXhPZih2YWx1ZSk7XG4gICAgLy8gaWYgKGluZGV4ID4gLTEpIHtcbiAgICB0aGlzLmxpc3RPZlJlbGF0aW9uLnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvblswXS5wYXJlbnRDaGlsZHJlbi5zcGxpY2UodmFsdWUsIDEpO1xuICAgIC8vIH1cblxuICAgIGNvbnNvbGUubG9nKCdhZnRlciBkZWxldGUgZGF0YScsIHRoaXMubGlzdE9mUmVsYXRpb24pO1xuICB9XG5cblxuICBhZGQoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCcgYWRkIGRhdGEnLCBkYXRhKTtcbiAgICBsZXQgcGFnZSA9IHtcbiAgICAgIGxhYmVsOiAncGFnZScgKyAnICcgKyAoZGF0YS5sZW5ndGggKyAxKSxcbiAgICAgIHZhbHVlOiAncGFnZScgKyAnICcgKyAoZGF0YS5sZW5ndGggKyAxKSxcbiAgICB9XG4gICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xuICAgIHRoaXMuZHluYW1pY1NlcnZlLnNldFBhZ2VOdW1iZXIodGhpcy5wYWdlcyk7XG4gIH1cbn1cbiJdfQ==