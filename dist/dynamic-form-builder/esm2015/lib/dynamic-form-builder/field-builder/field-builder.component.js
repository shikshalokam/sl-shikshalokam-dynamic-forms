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
  <div class="row"  *ngIf="openEdit" style="padding: 15px;
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
    <mat-select  [(ngModel)]="type">
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

  <mat-select  [(ngModel)]="pageNumber">
    <mat-option  *ngFor = "let page of pages; let i = index" value="page.value">{{page.label}}</mat-option>
  </mat-select>
  <span style = "float:right" class="cursor-pntr"><i class="fa fa-plus" (click)="add(pages)" ></i></span>
</mat-form-field>
</div>
<div class="col-sm-1">
<span style = "float:right" class="cursor-pntr"><i class="fa fa-plus" (click)="add(pages)" ></i></span>
</div>
 
<div class="col-sm-6">
<mat-form-field>
<mat-label>Criteria</mat-label>
  <mat-select  [(ngModel)]="draftCriteriaId">
    <mat-option *ngFor="let item of criteriaList" value="item._id">{{ item.name}}</mat-option>
   </mat-select>
</mat-form-field>
</div>



    <div class="col-sm-6" *ngIf="type=='slider'">
    <mat-form-field>
    <input type="text" placeholder="Min" matInput  [(ngModel)]="min" name="min value">
    </mat-form-field>
    </div>

    <div class="col-sm-6" *ngIf="type=='slider'">
    <mat-form-field>
    <input type="text" placeholder="Max" matInput  [(ngModel)]="max" name="min value">
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
    <input type="text" placeholder="Label" matInput style="margin-bottom: 10px;" [(ngModel)]="newOptionLabel" name="newOption">
    </mat-form-field>
    <mat-form-field>
    <input type="tex" disabled matInput name="newOption" placeholder="key"  [(ngModel)]="newOptionKey">
    </mat-form-field>  
    </div>
      <button mat-flat-button color="primary" style="margin-top: 10px;"  (click)="AddNewOptions()">
      Add
      </button>
    </div>
    </div>

<div *ngIf ="filtereddata && filtereddata.length > 0">    
<div class="col-sm-12">
<label id="example-radio-group-label">Do you want to related the question based on below options ?</label>
<mat-radio-group
aria-labelledby="example-radio-group-label"
class="example-radio-group"
[(ngModel)]="selectedOption">
<mat-radio-button class="example-radio-button" *ngFor="let ele of options"  [value]="ele">
{{ ele.label }}
</mat-radio-button>
</mat-radio-group>
</div>


<div class="col-sm-6">
<mat-form-field >
<mat-label>Select Question to add </mat-label>
<select matNativeControl [(ngModel)]="currentSelectedQtn" >
<option *ngFor="let values of filtereddata"  [ngValue]="values"> {{ values.label }} </option>
</select>  
</mat-form-field>
</div>

<div class="col-sm-6" *ngIf="type=='text' || type=='date' || type=='number'">
<mat-form-field >
<mat-label>Select Condition </mat-label>
<select matNativeControl [(ngModel)]="condition" >
<option *ngFor="let values of conditionArray"  [ngValue]="values.condition"> {{ values.label }} </option>
</select>
</mat-form-field>
</div>

<div class="col-sm-6" *ngIf="type=='text' || type=='date' || type=='number'">
<mat-form-field>
  <input type="tex" matInput name="conditionMatchValue" placeholder=""  [(ngModel)]="conditionMatchValue">
  </mat-form-field> 
</div>

<div class="col-sm-2">
<button mat-flat-button color="primary" style="margin-top: 10px;"  (click)="parentMapping()">
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
<mat-radio-group
  aria-labelledby="example-radio-group-label"
  class="example-radio-group"
  [(ngModel)]="required">
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
<mat-radio-group
  aria-labelledby="example-radio-group-label"
  class="example-radio-group"
  [(ngModel)]="autoCollect">
  <mat-radio-button class="example-radio-button" [value]=true>
    True
  </mat-radio-button>
  <mat-radio-button class="example-radio-button" [value]=false>
    False
  </mat-radio-button>
</mat-radio-group>
</div>

  
<div  class="col-sm-12">

<button mat-flat-button color="primary" style="margin-right:10px;"  (click)="closeModel('save')">
Save
</button>

</div>
  </div>
  <div class="form-group row" [formGroup]="form" style="padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;">
  <span class="qtn_position"><span class="">#{{ field.position }}</span></span>
  <div class="action-component" >

  <span class="cursor-pntr" (click)="deleteElement(field)"><i class="fa fa-trash"></i> </span>
  <span class="cursor-pntr" (click)="copyElement(field)"><i class="fa fa-copy"></i></span>
  <span class="cursor-pntr"><i class="fa fa-edit" (click)="loadFormElement(field)" ></i></span>
  
  </div>
    <div class="col-md-12" [ngSwitch]="field.type">
    <textbox *ngSwitchCase="'number'" [field]="field" [form]="form"></textbox>
    <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
    <date *ngSwitchCase="'date'" [field]="field" [form]="form"></date>
    <slider *ngSwitchCase="'slider'" [field]="field" [form]="form"></slider>
      <dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></dropdown>
      <checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></checkbox>
      <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
      <lib-multi-select *ngSwitchCase="'matrix'"  cdkDrag (childrenDropEvent)="childrenDropEvent($event)" [field]="field" [form]="form"></lib-multi-select>
      <file *ngSwitchCase="'file'" [field]="field" [form]="form"></file>
      <div style="float:right">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBbVMvRSw2SEFBNkg7QUFFN0gsTUFBTSxPQUFPLHFCQUFxQjs7OztJQXdGaEMsWUFFVSxZQUF1QztRQUF2QyxpQkFBWSxHQUFaLFlBQVksQ0FBMkI7UUFwRnZDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFM0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQWF0RCxVQUFLLEdBQUcsQ0FBQztnQkFDUCxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsUUFBUTthQUNoQixFQUFDO2dCQUNBLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxRQUFRO2FBQ2hCLEVBQUM7Z0JBQ0EsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLFFBQVE7YUFDaEIsQ0FBQyxDQUFBO1FBTUYsYUFBUSxHQUFZLEtBQUssQ0FBQztRQWExQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUt6QixtQkFBYyxHQUFRO1lBQ3BCO2dCQUNFLEtBQUssRUFBRSxRQUFRO2dCQUNmLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLFNBQVMsRUFB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VCxnREFBcUI7O0lBQ3JCLDZDQUEyQjs7SUFDM0Isd0NBQWE7O0lBQ2IsbURBQXdCOztJQUN4QiwrQ0FBb0I7O0lBRXBCLCtDQUF5Qjs7SUFDekIsMENBQWU7O0lBRWYsb0RBQXlCOztJQUV6QiwrQ0F5QkM7O0lBSUQsd0NBQTZEOzs7OztJQU8zRCw2Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IE5nYk1vZGFsLCBNb2RhbERpc21pc3NSZWFzb25zIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVEhJU19FWFBSIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaXNOZ1RlbXBsYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWVsZC1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHN0eWxlPlxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICBtaW4td2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBibG9jaztcbiAgICBtYXJnaW46IDE1cHggMDsgXG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiBhdXRvO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogMzcycHg7XG4gIH1cbiAgLmlucHV0LWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5hY3Rpb24tY29tcG9uZW50IHtcbiAgICBwYWRkaW5nOjEwcHggMTBweCAwcHggMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiByaWdodDtcbiAgXG59XG5zcGFuLmN1cnNvci1wbnRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAycHg7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxufVxuLmxhYmVsLmNvbC1tZC04LmZvcm0tY29udHJvbC1sYWJlbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAgKm5nSWY9XCJvcGVuRWRpdFwiIHN0eWxlPVwicGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzttYXJnaW4tdG9wOjEwcHg7d2lkdGg6ODUlO21hcmdpbi10b3A6NDBweDttYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO21hcmdpbi10b3A6MjBweDtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTGFiZWxcIiBbKG5nTW9kZWwpXT1cImxhYmVsXCIgbmFtZT1cImxhYmVsXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dCBQbGFjZSBIb2xkZXJcIiBbKG5nTW9kZWwpXT1cInBsYWNlaG9sZGVyXCIgbmFtZT1cInBsYWNlaG9sZGVyXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkhpbnQvRGVzY3JpcHRpb25cIiBbKG5nTW9kZWwpXT1cImRlc2NyaXB0aW9uXCIgbmFtZT1cIkRlc2NyaXB0aW9uXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTYgXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPklucHV0IFR5cGU8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCAgWyhuZ01vZGVsKV09XCJ0eXBlXCI+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0PC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJudW1iZXJcIj5udW1iZXI8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+cmFkaW88L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5kYXRlPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbjxtYXQtZm9ybS1maWVsZD5cbjxtYXQtbGFiZWw+UGFnZXM8L21hdC1sYWJlbD5cblxuICA8bWF0LXNlbGVjdCAgWyhuZ01vZGVsKV09XCJwYWdlTnVtYmVyXCI+XG4gICAgPG1hdC1vcHRpb24gICpuZ0ZvciA9IFwibGV0IHBhZ2Ugb2YgcGFnZXM7IGxldCBpID0gaW5kZXhcIiB2YWx1ZT1cInBhZ2UudmFsdWVcIj57e3BhZ2UubGFiZWx9fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuICA8c3BhbiBzdHlsZSA9IFwiZmxvYXQ6cmlnaHRcIiBjbGFzcz1cImN1cnNvci1wbnRyXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCIgKGNsaWNrKT1cImFkZChwYWdlcylcIiA+PC9pPjwvc3Bhbj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxuPHNwYW4gc3R5bGUgPSBcImZsb2F0OnJpZ2h0XCIgY2xhc3M9XCJjdXJzb3ItcG50clwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiIChjbGljayk9XCJhZGQocGFnZXMpXCIgPjwvaT48L3NwYW4+XG48L2Rpdj5cbiBcbjxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuPG1hdC1mb3JtLWZpZWxkPlxuPG1hdC1sYWJlbD5Dcml0ZXJpYTwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCAgWyhuZ01vZGVsKV09XCJkcmFmdENyaXRlcmlhSWRcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjcml0ZXJpYUxpc3RcIiB2YWx1ZT1cIml0ZW0uX2lkXCI+e3sgaXRlbS5uYW1lfX08L21hdC1vcHRpb24+XG4gICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1pblwiIG1hdElucHV0ICBbKG5nTW9kZWwpXT1cIm1pblwiIG5hbWU9XCJtaW4gdmFsdWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1heFwiIG1hdElucHV0ICBbKG5nTW9kZWwpXT1cIm1heFwiIG5hbWU9XCJtaW4gdmFsdWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICAgIFxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbKG5nTW9kZWwpXT1cIm1pbkRhdGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1pbiBkYXRlXCI+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlck1heERhdGVcIiBbKG5nTW9kZWwpXT1cIm1heERhdGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1heCBkYXRlXCI+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlck1heERhdGVcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyTWF4RGF0ZT48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdJZj1cInR5cGU9PSdyYWRpbycgfHwgdHlwZT09J2NoZWNrYm94JyB8fCB0eXBlPT0nZHJvcGRvd24nXCI+XG4gICAgPGxhYmVsIGZvcj1cImxhYmVsXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5PcHRpb25zPC9sYWJlbD5cbiAgICBcbiAgICA8dWwgY2xhc3M9XCJjb2xcIiAqbmdGb3I9XCJsZXQgb3B0IG9mIG9wdGlvbnM7bGV0IGkgPSBpbmRleFwiPlxuICAgICA8bGkgY2xhc3M9XCJcIj5cbiAgICAgIDxzcGFuPnt7b3B0LmxhYmVsfX0gPC9zcGFuPjxzcGFuIHN0eWxlPVwiXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcIiAoY2xpY2spPVwiZGVsZXRlT3B0aW9uKG9wdCxpKVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L3NwYW4+XG4gICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTGFiZWxcIiBtYXRJbnB1dCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHg7XCIgWyhuZ01vZGVsKV09XCJuZXdPcHRpb25MYWJlbFwiIG5hbWU9XCJuZXdPcHRpb25cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleFwiIGRpc2FibGVkIG1hdElucHV0IG5hbWU9XCJuZXdPcHRpb25cIiBwbGFjZWhvbGRlcj1cImtleVwiICBbKG5nTW9kZWwpXT1cIm5ld09wdGlvbktleVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+ICBcbiAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIiAgKGNsaWNrKT1cIkFkZE5ld09wdGlvbnMoKVwiPlxuICAgICAgQWRkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPGRpdiAqbmdJZiA9XCJmaWx0ZXJlZGRhdGEgJiYgZmlsdGVyZWRkYXRhLmxlbmd0aCA+IDBcIj4gICAgXG48ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG48bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+RG8geW91IHdhbnQgdG8gcmVsYXRlZCB0aGUgcXVlc3Rpb24gYmFzZWQgb24gYmVsb3cgb3B0aW9ucyA/PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbmFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIlxuY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcblsobmdNb2RlbCldPVwic2VsZWN0ZWRPcHRpb25cIj5cbjxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiAqbmdGb3I9XCJsZXQgZWxlIG9mIG9wdGlvbnNcIiAgW3ZhbHVlXT1cImVsZVwiPlxue3sgZWxlLmxhYmVsIH19XG48L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjwvZGl2PlxuXG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuPG1hdC1mb3JtLWZpZWxkID5cbjxtYXQtbGFiZWw+U2VsZWN0IFF1ZXN0aW9uIHRvIGFkZCA8L21hdC1sYWJlbD5cbjxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbKG5nTW9kZWwpXT1cImN1cnJlbnRTZWxlY3RlZFF0blwiID5cbjxvcHRpb24gKm5nRm9yPVwibGV0IHZhbHVlcyBvZiBmaWx0ZXJlZGRhdGFcIiAgW25nVmFsdWVdPVwidmFsdWVzXCI+IHt7IHZhbHVlcy5sYWJlbCB9fSA8L29wdGlvbj5cbjwvc2VsZWN0PiAgXG48L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3RleHQnIHx8IHR5cGU9PSdkYXRlJyB8fCB0eXBlPT0nbnVtYmVyJ1wiPlxuPG1hdC1mb3JtLWZpZWxkID5cbjxtYXQtbGFiZWw+U2VsZWN0IENvbmRpdGlvbiA8L21hdC1sYWJlbD5cbjxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbKG5nTW9kZWwpXT1cImNvbmRpdGlvblwiID5cbjxvcHRpb24gKm5nRm9yPVwibGV0IHZhbHVlcyBvZiBjb25kaXRpb25BcnJheVwiICBbbmdWYWx1ZV09XCJ2YWx1ZXMuY29uZGl0aW9uXCI+IHt7IHZhbHVlcy5sYWJlbCB9fSA8L29wdGlvbj5cbjwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSd0ZXh0JyB8fCB0eXBlPT0nZGF0ZScgfHwgdHlwZT09J251bWJlcidcIj5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXhcIiBtYXRJbnB1dCBuYW1lPVwiY29uZGl0aW9uTWF0Y2hWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCIgIFsobmdNb2RlbCldPVwiY29uZGl0aW9uTWF0Y2hWYWx1ZVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPiBcbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cbjxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIiAgKGNsaWNrKT1cInBhcmVudE1hcHBpbmcoKVwiPlxuQWRkXG48L2J1dHRvbj5cbjwvZGl2PlxuPC9kaXY+XG48dWwgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdGb3I9XCJsZXQgcmVsYXRlIG9mIGxpc3RPZlJlbGF0aW9uO2xldCBpID0gaW5kZXhcIj5cbiA8bGkgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgPHNwYW4+e3tyZWxhdGUubGFiZWx9fSA8L3NwYW4+PHNwYW4gc3R5bGU9XCJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XCIgKGNsaWNrKT1cImRlbGV0ZUNvbmRpdGlvbihyZWxhdGUsaSlcIj5cbiAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L3NwYW4+XG48L2xpPlxuPC91bD5cblxuICAgIFxuPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIFJlcWlyZWQgPzwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG4gIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIlxuICBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuICBbKG5nTW9kZWwpXT1cInJlcXVpcmVkXCI+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPXRydWU+XG4gICAgWWVzXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgTm9cbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiICpuZ0lmPVwidHlwZT09J2RhdGUnXCI+XG48bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgYXV0b0NvbGxlY3Q8L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcbiAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcbiAgWyhuZ01vZGVsKV09XCJhdXRvQ29sbGVjdFwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgIFRydWVcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICBGYWxzZVxuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjwvZGl2PlxuXG4gIFxuPGRpdiAgY2xhc3M9XCJjb2wtc20tMTJcIj5cblxuPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MTBweDtcIiAgKGNsaWNrKT1cImNsb3NlTW9kZWwoJ3NhdmUnKVwiPlxuU2F2ZVxuPC9idXR0b24+XG5cbjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgc3R5bGU9XCJwYWRkaW5nOjBweDttYXJnaW46MHB4O21hcmdpbi10b3A6MTBweDtib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtwYWRkaW5nLWJvdHRvbToxMHB4O1wiPlxuICA8c3BhbiBjbGFzcz1cInF0bl9wb3NpdGlvblwiPjxzcGFuIGNsYXNzPVwiXCI+I3t7IGZpZWxkLnBvc2l0aW9uIH19PC9zcGFuPjwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cImFjdGlvbi1jb21wb25lbnRcIiA+XG5cbiAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiIChjbGljayk9XCJkZWxldGVFbGVtZW50KGZpZWxkKVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+IDwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiIChjbGljayk9XCJjb3B5RWxlbWVudChmaWVsZClcIj48aSBjbGFzcz1cImZhIGZhLWNvcHlcIj48L2k+PC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImN1cnNvci1wbnRyXCI+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCIgKGNsaWNrKT1cImxvYWRGb3JtRWxlbWVudChmaWVsZClcIiA+PC9pPjwvc3Bhbj5cbiAgXG4gIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIiBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxuICAgIDx0ZXh0Ym94ICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3RleHRib3g+XG4gICAgPHRleHRib3ggKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3RleHRib3g+XG4gICAgPGRhdGUgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2RhdGU+XG4gICAgPHNsaWRlciAqbmdTd2l0Y2hDYXNlPVwiJ3NsaWRlcidcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9zbGlkZXI+XG4gICAgICA8ZHJvcGRvd24gKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9kcm9wZG93bj5cbiAgICAgIDxjaGVja2JveCAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2NoZWNrYm94PlxuICAgICAgPHJhZGlvICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvcmFkaW8+XG4gICAgICA8bGliLW11bHRpLXNlbGVjdCAqbmdTd2l0Y2hDYXNlPVwiJ21hdHJpeCdcIiAgY2RrRHJhZyAoY2hpbGRyZW5Ecm9wRXZlbnQpPVwiY2hpbGRyZW5Ecm9wRXZlbnQoJGV2ZW50KVwiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2xpYi1tdWx0aS1zZWxlY3Q+XG4gICAgICA8ZmlsZSAqbmdTd2l0Y2hDYXNlPVwiJ2ZpbGUnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZmlsZT5cbiAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDpyaWdodFwiPlxuICAgICAgIDwvZGl2PiBcbiAgICAgICA8L2Rpdj5gLFxuICBzdHlsZXM6IFtgXG4gIC5xdG5fcG9zaXRpb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweCAwcHggMHB4IDVweDtcbiAgICBjb2xvcjogI2NjYztcbiAgfSBgXG4gIF1cbn0pXG5cbi8vIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgbXktMSBwLTIgZmFkZUluRG93biBhbmltYXRlZFwiICpuZ0lmPVwiIWlzVmFsaWQgJiYgaXNEaXJ0eVwiPnt7ZmllbGQubGFiZWx9fSBpcyByZXF1aXJlZDwvZGl2PlxuXG5leHBvcnQgY2xhc3MgRmllbGRCdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmllbGQ6IGFueTtcblxuICBASW5wdXQoKSBjcml0ZXJpYUxpc3Q6IGFueTtcbiAgQElucHV0KCkgZm9ybTogYW55O1xuXG4gIEBPdXRwdXQoKSBzZW5kRGF0YVRvUGFyZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIGNvcHlPckRlbGV0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGZpbHRlcmVkZGF0YTogYW55O1xuICBnZXRTZWxlY3RRdWVzdGlvbjogYW55O1xuICBjbG9zZVJlc3VsdDogc3RyaW5nO1xuICBtb2RhbFJlZmVyZW5jZTogYW55O1xuICBwYWdlTnVtYmVyOyBhbnk7XG4gIGxhYmVsOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgcGxhY2Vob2xkZXI6IGFueTtcbiAgb3B0aW9uczogYW55O1xuICBuZXdPcHRpb25LZXk6IGFueTtcbiAgbmV3T3B0aW9uTGFiZWw6IGFueTtcblxuICBwYWdlcyA9IFt7XG4gICAgbGFiZWw6ICdwYWdlIDEnLFxuICAgIHZhbHVlOiAncGFnZSAxJ1xuICB9LHtcbiAgICBsYWJlbDogJ3BhZ2UgMicsXG4gICAgdmFsdWU6ICdwYWdlIDInXG4gIH0se1xuICAgIGxhYmVsOiAncGFnZSAzJyxcbiAgICB2YWx1ZTogJ3BhZ2UgMydcbiAgfV1cblxuICBhY3RpdmVNb2RlbERhdGE6IGFueTtcbiAgdmFsaWRhdGlvbnM6IGFueTtcbiAgcmVxdWlyZWQ6IGFueTtcbiAgYXV0b0NvbGxlY3Q6IGFueTtcbiAgb3BlbkVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2lkOiBhbnk7XG4gIGRlc2NyaXB0aW9uOiBhbnk7XG4gIG1pbkRhdGU6IGFueTtcbiAgbWF4RGF0ZTogYW55O1xuICBtaW46IGFueTtcbiAgbWF4OiBhbnk7XG4gIGRyYWZ0Q3JpdGVyaWFJZDogYW55O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYWxsRGF0YTogYW55O1xuICBjdXJyZW50U2VsZWN0ZWRRdG46IGFueTtcbiAgc2VsZWN0ZWRPcHRpb246IGFueTtcblxuICBsaXN0T2ZSZWxhdGlvbjogYW55ID0gW107XG4gIGNvbmRpdGlvbjogYW55O1xuXG4gIGNvbmRpdGlvbk1hdGNoVmFsdWU6IGFueTtcblxuICBjb25kaXRpb25BcnJheTogYW55ID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcImVxdWFsc1wiLFxuICAgICAgY29uZGl0aW9uOiBcIj09PVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJOb3QgRXF1YWwgVG9cIixcbiAgICAgIGNvbmRpdGlvbjogXCIhPVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJHcmVhdGVyIFRoYW5cIixcbiAgICAgIGNvbmRpdGlvbjogXCI+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkxlc3MgVGhhblwiLFxuICAgICAgY29uZGl0aW9uOiBcIjxcIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiR3JlYXRlciBUaGFuIE9yIEVxdWFsXCIsXG4gICAgICBjb25kaXRpb246IFwiPj1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiTGVzcyBUaGFuIE9yIEVxdWFsXCIsXG4gICAgICBjb25kaXRpb246IFwiPD1cIlxuICAgIH1cbiAgXVxuXG5cbiAgLy8gcHJpdmF0ZSBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbXlNb2RhbDogRWxlbWVudFJlZjtcblxuICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gIGdldCBpc0RpcnR5KCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWxcbiAgICBwcml2YXRlIGR5bmFtaWNTZXJ2ZTogRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZVxuICApIHtcblxuICB9XG5cbiAgLy8gZ2V0QWxsKCl7XG4gIC8vICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7IFxuICAvLyAgICAgY29uc29sZS5sb2coXCJnZXQgYWxsIGluZm9cIixtZXNzYWdlKTtcblxuICAvLyAgICB9KTtcblxuICAvLyB9ICAgXG5cblxuICBwYXJlbnRNYXBwaW5nKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZGl0aW9uLCBcImNvbmRpdGlvblwiLCB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0biwgXCJzZWxlY3RlZE9wdGlvblwiLCB0aGlzLnNlbGVjdGVkT3B0aW9uKTtcbiAgICBsZXQgb2JqID0ge31cbiAgICAvLyBvcHRpb246dGhpcy5zZWxlY3RlZE9wdGlvbixcbiAgICAvLyBxdWVzdGlvbjp0aGlzLmN1cnJlbnRTZWxlY3RlZFF0blxuICAgIC8vIG9ialsndmlzaWJsZUlmJ10gPSBbXTtcblxuXG4gICAgbGV0IGNvbmRpT2JqID0ge1xuICAgICAgb3BlcmF0b3I6IHRoaXMuY29uZGl0aW9uLFxuICAgICAgdmFsdWU6IHRoaXMuY29uZGl0aW9uTWF0Y2hWYWx1ZSxcbiAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLmZpZWxkLFxuICAgICAgbGFiZWw6IHRoaXMuZmllbGQubGFiZWxcbiAgICAgIC8vIHBhcmVudDp0aGlzLnNlbGVjdGVkT3B0aW9uLmZpZWxkXG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLnBhcmVudENoaWxkcmVuKSB7XG4gICAgLy8gICB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbi5wdXNoKGNvbmRpT2JqKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4ucGFyZW50Q2hpbGRyZW4gPSBbXTtcbiAgICAvLyAgIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLnBhcmVudENoaWxkcmVuLnB1c2goY29uZGlPYmopO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZygndGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4nLCB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bik7XG5cbiAgICBjb25zb2xlLmxvZyhcImNvbmRpT2JqXCIsIGNvbmRpT2JqKTtcbiAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uID0gdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J10uZmlsdGVyKGVsZSA9PiB7XG4gICAgICBpZiAoZWxlLmZpZWxkID09IHRoaXMuZmllbGQuZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiZ2V0U2VsZWN0UXVlc3Rpb25cIiwgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbik7XG5cbiAgICBsZXQgaXNBdmFpbGFibGUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5nZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10gJiYgdGhpcy5nZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10ubGVuZ3RoID4gMCkge1xuICAgICAgaXNBdmFpbGFibGUgPSB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uWyd2aXNpYmxlSWYnXS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnZpc2libGVJZi5maWVsZCA9PSB0aGlzLmZpZWxkLmZpZWxkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cblxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZ2V0U2VsZWN0UXVlc3Rpb25cIiwgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbik7XG5cbiAgICBsZXQgYWxsRGF0YSA9IFtdO1xuXG5cblxuICAgIGxldCBhZGRPYmogPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgICBpZiAodGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbikge1xuICAgICAgICBpZiAodGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKSAhPT0gLTEpIHtcbiAgICAgICAgICBhbGVydChcIlZhbHVlIGV4aXN0cyFcIilcblxuICAgICAgICAgIGFkZE9iaiA9IGZhbHNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBhZGRPYmogPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4ucHVzaCh0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkT2JqID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuLnB1c2godGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKGFkZE9iaikge1xuXG5cbiAgICAgIGFsbERhdGEgPSB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddWydxdWVzdGlvbkxpc3QnXS5maWx0ZXIoZWxlID0+IHtcbiAgICAgICAgaWYgKGVsZS5maWVsZCA9PSB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCkge1xuICAgICAgICAgIGlmIChlbGUudmlzaWJsZUlmICYmIGVsZS52aXNpYmxlSWYubGVuZ3RoID4gMCAmJiBpc0F2YWlsYWJsZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZWxlLnZpc2libGVJZi5wdXNoKGNvbmRpT2JqKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLnZpc2libGVJZiA9IFtdO1xuICAgICAgICAgICAgZWxlLnZpc2libGVJZi5wdXNoKGNvbmRpT2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZWxlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cblxuICAgICAgY29uc29sZS5sb2coXCJhbGwgZGF0YSBpbiBxdWVzdGlvblwiLCBhbGxEYXRhKTtcblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50KClcblxuXG5cblxuXG5cbiAgICAgIGlmICghdGhpcy5saXN0T2ZSZWxhdGlvbi5pbmNsdWRlcyhjb25kaU9iaikpIHtcblxuICAgICAgICB0aGlzLmxpc3RPZlJlbGF0aW9uLnB1c2goY29uZGlPYmopO1xuXG5cbiAgICAgIH1cblxuXG4gICAgfVxuXG5cblxuICAgIGlmICh0aGlzLmNvbmRpdGlvbikge1xuXG5cblxuXG4gICAgfVxuXG5cblxuICAgIC8vICdvcHRpb24nOnRoaXMuc2VsZWN0ZWRPcHRpb24sXG4gICAgLy8gICAgICAgJ3F1ZXN0aW9uJzp0aGlzLmN1cnJlbnRTZWxlY3RlZFF0blxuXG4gICAgLy8gdGhpcy5maWVsZC5jaGlsZFFudCA9IHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uXCIsIHRoaXMubGlzdE9mUmVsYXRpb24pO1xuXG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG5cblxuICAgIC8vIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuID0geyB9O1xuXG4gICAgLy8gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLnZhbGlkYXRpb25zID0ge1xuICAgICAgJ3JlbGF0aW9uJzogW11cbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zID0ge1xuICAgICAgJ3JlbGF0aW9uJzogW11cbiAgICB9O1xuXG4gIH1cbiAgbG9hZEZvcm1FbGVtZW50KGl0ZW0pIHtcblxuICAgIGNvbnNvbGUubG9nKCdsb2FkRm9ybUVsZW1lbnQnLCBpdGVtKTtcbiAgICB0aGlzLmFsbERhdGEgPSB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuYWxsRGF0YSwgXCIgYWxsIHF1ZXN0aW9ucyBcIiwgdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXSk7XG5cbiAgICB0aGlzLmZpbHRlcmVkZGF0YSA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcih0ID0+IHQuZmllbGQgIT09IGl0ZW0uZmllbGQpO1xuXG4gICAgdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J11cbiAgICBjb25zb2xlLmxvZygnY29uc3QgZmlsdGVyZWRkYXRhJywgdGhpcy5maWx0ZXJlZGRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdsZW5ndGgnLCB0aGlzLmZpbHRlcmVkZGF0YVsncXVlc3Rpb25MaXN0J10ubGVuZ3RoKTtcblxuICAgIC8vIHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIml0ZW0gLS0tXCIsICk7XG5cbiAgICB0aGlzLmFjdGl2ZU1vZGVsRGF0YSA9IFwiXCI7XG4gICAgdGhpcy5sYWJlbCA9IGl0ZW0ubGFiZWw7XG4gICAgdGhpcy50eXBlID0gaXRlbS50eXBlO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBpdGVtLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMub3B0aW9ucyA9IGl0ZW0ub3B0aW9ucztcbiAgICB0aGlzLmRyYWZ0Q3JpdGVyaWFJZCA9IGl0ZW0uZHJhZnRDcml0ZXJpYUlkO1xuXG5cblxuICAgIHRoaXMucmVxdWlyZWQgPSBpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICBpZiAoaXRlbS52YWxpZGF0aW9ucy5yZWxhdGlvbikge1xuICAgICAgdGhpcy5saXN0T2ZSZWxhdGlvbiA9IGl0ZW0udmFsaWRhdGlvbnMucmVsYXRpb247XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0udHlwZSA9PSBcImRhdGVcIikge1xuICAgICAgdGhpcy5taW5EYXRlID0gaXRlbS52YWxpZGF0aW9ucy5taW5EYXRlO1xuICAgICAgdGhpcy5tYXhEYXRlID0gaXRlbS52YWxpZGF0aW9ucy5tYXhEYXRlXG4gICAgICB0aGlzLmF1dG9Db2xsZWN0ID0gaXRlbS52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXRlbS50eXBlID09IFwic2xpZGVyXCIpIHtcbiAgICAgIHRoaXMubWluID0gaXRlbS52YWxpZGF0aW9ucy5taW47XG4gICAgICB0aGlzLm1heCA9IGl0ZW0udmFsaWRhdGlvbnMubWF4O1xuICAgIH1cblxuXG5cbiAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZDtcbiAgICBjb25zb2xlLmxvZyhpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcIml0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWRcIiwgdGhpcy5yZXF1aXJlZCwgXCJsYWJlbFwiLCB0aGlzLmxhYmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImxhYmVsXCIsdGhpcy5sYWJlbCk7XG5cbiAgICB0aGlzLm9wZW5FZGl0ID0gdGhpcy5vcGVuRWRpdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5Nb2RhbEJ1dHRvblwiKS5jbGljaygpO1xuICAgIC8vIHRoaXMub3Blbih0aGlzLm15TW9kYWwpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5zaG93KCk7XG4gICAgLy8gdGhpcy5teU1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21vZGFsIGZhZGUgc2hvdyc7XG5cbiAgfVxuXG4gIHNhdmVFZGl0KCkge1xuICB9XG4gIGNsb3NlTW9kZWwoYWN0aW9uKSB7XG5cbiAgICBpZiAoYWN0aW9uID09IFwic2F2ZVwiKSB7XG5cblxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbGlkYXRpb25zLCBcInRoaXMuZmllbGRcIiwgdGhpcy5yZXF1aXJlZCk7XG4gICAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLmNsb3NlKCk7XG5cblxuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEuZmllbGQgPSB0aGlzLmZpZWxkLmZpZWxkO1xuXG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS50eXBlID0gdGhpcy50eXBlO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgdmFsaWRhdGlvbnM6IHRoaXMudmFsaWRhdGlvbnMsXG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICBfaWQ6IHRoaXMuX2lkLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgZHJhZnRDcml0ZXJpYUlkOiB0aGlzLmRyYWZ0Q3JpdGVyaWFJZCxcblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICBvYmpbJ21pbkRhdGUnXSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgb2JqWydtYXhEYXRlJ10gPSB0aGlzLm1heERhdGVcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIG9ialsnbWluJ10gPSB0aGlzLm1pbjtcbiAgICAgICAgb2JqWydtYXgnXSA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm9ialwiLG9iaik7XG5cblxuXG5cbiAgICAgIC8vIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuXG5cbiAgICAgIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgdGhpcy5maWVsZC50eXBlID0gdGhpcy50eXBlO1xuICAgICAgdGhpcy5maWVsZC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICB0aGlzLmZpZWxkLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICB0aGlzLmZpZWxkLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZmllbGQuZHJhZnRDcml0ZXJpYUlkID0gdGhpcy5kcmFmdENyaXRlcmlhSWQ7XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWluID0gdGhpcy5taW47XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4ID0gdGhpcy5tYXg7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmKHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb24pe1xuXG4gICAgICBpZiAodGhpcy5saXN0T2ZSZWxhdGlvbikge1xuICAgICAgICBvYmoudmFsaWRhdGlvbnMucmVsYXRpb24gPSB0aGlzLmxpc3RPZlJlbGF0aW9uO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uID0gdGhpcy5saXN0T2ZSZWxhdGlvbjtcbiAgICAgIH1cblxuICAgICAgLy8gfVxuXG5cblxuICAgICAgLy8gdGhpcy5maWVsZC52YWxpZGF0aW9uc1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQsIFwic2Rkc1wiLCB0aGlzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkO1xuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG5cblxuICAgICAgY29uc29sZS5sb2cob2JqLCBcInRoaXMuZmllbGQudmFsaWRhdGlvbnNcIiwgdGhpcy5maWVsZC52YWxpZGF0aW9ucyk7XG4gICAgICBsZXQgb3AgPSB7XG4gICAgICAgIGFjdGlvbjogXCJzYXZlXCIsXG4gICAgICAgIGRhdGE6IG9ialxuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdChvcCk7XG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdChKU09OLnN0cmluZ2lmeShvYmopKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgIHRoaXMub3BlbkVkaXQgPSBmYWxzZTtcblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQodGhpcy5hY3RpdmVNb2RlbERhdGEpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5vcGVuRWRpdCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKCk7XG4gICAgLy8gIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBoaWRlJztcbiAgfVxuXG4gIG9wZW4oY29udGVudCkge1xuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuYWN0aXZlTW9kZWxEYXRhXCIsIHNlbGVjdGVkRGF0YSk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZSA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYENsb3NlZCB3aXRoYDtcbiAgICAvLyB9LCAocmVhc29uKSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYERpc21pc3NlZGA7XG4gICAgLy8gfSk7XG4gIH1cblxuICAvLyBwcml2YXRlIGdldERpc21pc3NSZWFzb24ocmVhc29uOiBhbnkpOiBzdHJpbmcge1xuICAvLyAgIC8vIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuRVNDKSB7XG4gIC8vICAgLy8gICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XG4gIC8vICAgLy8gfSBlbHNlIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuQkFDS0RST1BfQ0xJQ0spIHtcbiAgLy8gICAvLyAgIHJldHVybiAnYnkgY2xpY2tpbmcgb24gYSBiYWNrZHJvcCc7XG4gIC8vICAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyAgIHJldHVybiBgd2l0aDogJHtyZWFzb259YDtcbiAgLy8gICAvLyB9XG4gIC8vIH1cblxuICBkZWxldGVPcHRpb24ob3B0LCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBsZXQgbmV3QXJyID0gW107XG4gICAgLy8gbGV0IG9wdGlvbnNBcnIgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgLy8gaWYoaXRlbS5sYWJsZT09b3B0LmxhYmVsICYmIGl0ZW0ua2V5PT1vcHQua2V5KXtcblxuICAgICAgLy8gfWVsc2V7XG5cbiAgICAgIC8vIH1cblxuICAgICAgLy8gcmV0dXJuIChpdGVtLmxhYmVsICE9IG9wdC5sYWJlbCAmJiBpdGVtLmtleSAhPSBvcHQua2V5KVxuXG4gICAgICAvLyBpZihpdGVtLmxhYmxlPT1vcHQubGFiZWwgJiYgaXRlbS5rZXk9PW9wdC5rZXkpe1xuXG4gICAgICAvLyB9ZWxzZXtcbiAgICAgIC8vICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyB9XG4gICAgLy8gfSlcbiAgICB0aGlzLm9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNBcnI7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGUgbmV3IFwiLCB0aGlzLm9wdGlvbnMpO1xuICB9XG4gIEFkZE5ld09wdGlvbnMoKSB7XG5cbiAgICBpZiAodGhpcy5uZXdPcHRpb25MYWJlbCAhPSBcIlwiKSB7XG5cbiAgICAgIHRoaXMubmV3T3B0aW9uS2V5ID0gJ1InKyB0aGlzLm9wdGlvbnMubGVuZ3RoO1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm5ld09wdGlvblwiLCB0aGlzLm5ld09wdGlvbkxhYmVsKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zLnB1c2goe1xuICAgICAgICBrZXk6IHRoaXMubmV3T3B0aW9uS2V5LFxuICAgICAgICBsYWJlbDogdGhpcy5uZXdPcHRpb25MYWJlbFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5vcHRpb25zLnB1c2hcIiwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5uZXdPcHRpb25LZXkgPSBcIlwiO1xuICAgIHRoaXMubmV3T3B0aW9uTGFiZWwgPSBcIlwiO1xuICB9XG5cbiAgY29weUVsZW1lbnQoaXRlbSkge1xuICAgIC8vIHRoaXMuZmllbGQucHVzaChpdGVtKTtcbiAgICBpdGVtLmFjdGlvbiA9ICdjb3B5JztcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIC0tLS0tLS0tLS1cIiwgaXRlbSk7XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KGl0ZW0pO1xuXG4gIH1cbiAgZGVsZXRlRWxlbWVudChpdGVtKSB7XG5cbiAgICBpdGVtLmFjdGlvbiA9ICdkZWxldGUnO1xuICAgIHRoaXMuZmllbGQuaXNEZWxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChpdGVtKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcblxuICB9XG4gIGNoaWxkcmVuRHJvcEV2ZW50KCRldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2hpbGRyZW5Ecm9wRXZlbnRcIiwgdGhpcy5maWVsZCk7XG4gICAgLy8gY29uc3QgYWN0aW9uICA9ICdjaGlsZERyb3BlZCc7XG4gICAgbGV0IG5ld09iaiA9IHtcbiAgICAgIGFjdGlvbjogJ2NoaWxkRHJvcGVkJyxcbiAgICAgIGRhdGE6ICRldmVudFxuICAgIH1cbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQobmV3T2JqKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcbiAgfVxuXG4gIGRlbGV0ZUNvbmRpdGlvbihkYXRhLCB2YWx1ZSkge1xuICAgIC8vIHZhciBpbmRleCA9IHRoaXMubGlzdE9mUmVsYXRpb24uaW5kZXhPZih2YWx1ZSk7XG4gICAgLy8gaWYgKGluZGV4ID4gLTEpIHtcbiAgICB0aGlzLmxpc3RPZlJlbGF0aW9uLnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvblswXS5wYXJlbnRDaGlsZHJlbi5zcGxpY2UodmFsdWUsIDEpO1xuICAgIC8vIH1cblxuICAgIGNvbnNvbGUubG9nKCdhZnRlciBkZWxldGUgZGF0YScsIHRoaXMubGlzdE9mUmVsYXRpb24pO1xuICB9XG5cblxuICBhZGQoZGF0YSl7XG4gICAgY29uc29sZS5sb2coJyBhZGQgZGF0YScsIGRhdGEpO1xuICAgIGxldCBwYWdlID0ge1xuICAgIGxhYmVsOiAncGFnZScrJyAnKyAoZGF0YS5sZW5ndGggKyAxKSxcbiAgICB2YWx1ZTogJ3BhZ2UnKycgJysgKGRhdGEubGVuZ3RoICsgMSkgICxcbiAgICB9XG4gICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xuICB9XG59XG4iXX0=