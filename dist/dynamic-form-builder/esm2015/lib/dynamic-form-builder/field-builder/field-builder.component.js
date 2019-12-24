/**
 * @fileoverview added by tsickle
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
        /** @type {?} */
        let optionsArr = this.options.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
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
    }
    /**
     * @return {?}
     */
    AddNewOptions() {
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

<div class="col-sm-6">
<mat-form-field>
<mat-label>Pages</mat-label>
  <mat-select  [(ngModel)]="pageNumber">
    <mat-option value="page_1">page 1</mat-option>
    <mat-option value="page_2">page 2</mat-option>
    <mat-option value="page_3">page 3</mat-option>
  </mat-select>
</mat-form-field>
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
    
    <ul class="col" *ngFor="let opt of options;let index">
     <li class="">
      <span>{{opt.label}} </span><span style="
      margin-left: 30px;" (click)="deleteOption(opt,index)">
      <i class="fa fa-trash"></i></span>
    </li>
    </ul>

    <div class="col-sm-6">
    <div class="input-group">
    <mat-form-field>
    <input type="text" placeholder="Label" matInput style="margin-bottom: 10px;" [(ngModel)]="newOptionLabel" name="newOption">
    </mat-form-field>
    <mat-form-field>
    <input type="tex" matInput name="newOption" placeholder="key"  [(ngModel)]="newOptionKey">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFnUy9FLDZIQUE2SDtBQUU3SCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBNkVoQyxZQUVVLFlBQXVDO1FBQXZDLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtRQXpFdkMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBaUJ0RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBYTFCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBS3pCLG1CQUFjLEdBQVE7WUFDcEI7Z0JBQ0UsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsU0FBUyxFQUFFLEtBQUs7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLElBQUk7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLEdBQUc7YUFDZjtZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixTQUFTLEVBQUUsR0FBRzthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsU0FBUyxFQUFFLElBQUk7YUFDaEI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixTQUFTLEVBQUUsSUFBSTthQUNoQjtTQUNGLENB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QUVMLE1BQU07Z0NBRU4sTUFBTTtzQkFnRU4sU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUF2RXZDLHNDQUFvQjs7SUFFcEIsNkNBQTJCOztJQUMzQixxQ0FBbUI7O0lBRW5CLGlEQUFxRDs7SUFFckQsa0RBQXNEOztJQUN0RCw2Q0FBa0I7O0lBQ2xCLGtEQUF1Qjs7SUFDdkIsNENBQW9COztJQUNwQiwrQ0FBb0I7O0lBQ3BCLDJDQUFXOztJQUFDLG9DQUFJOztJQUNoQixzQ0FBVzs7SUFDWCxxQ0FBVTs7SUFDViw0Q0FBaUI7O0lBQ2pCLHdDQUFhOztJQUNiLDZDQUFrQjs7SUFDbEIsK0NBQW9COztJQUVwQixnREFBcUI7O0lBQ3JCLDRDQUFpQjs7SUFDakIseUNBQWM7O0lBQ2QsNENBQWlCOztJQUNqQix5Q0FBMEI7O0lBQzFCLG9DQUFTOztJQUNULDRDQUFpQjs7SUFDakIsd0NBQWE7O0lBQ2Isd0NBQWE7O0lBQ2Isb0NBQVM7O0lBQ1Qsb0NBQVM7O0lBQ1QsZ0RBQXFCOztJQUNyQiw2Q0FBMkI7O0lBQzNCLHdDQUFhOztJQUNiLG1EQUF3Qjs7SUFDeEIsK0NBQW9COztJQUVwQiwrQ0FBeUI7O0lBQ3pCLDBDQUFlOztJQUVmLG9EQUF5Qjs7SUFFekIsK0NBeUJDOztJQUlELHdDQUE2RDs7Ozs7SUFPM0QsNkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBOZ2JNb2RhbCwgTW9kYWxEaXNtaXNzUmVhc29ucyB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFRISVNfRVhQUiB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzTmdUZW1wbGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmllbGQtYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzdHlsZT5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgbWluLXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgfVxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4IDA7IFxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDM3MnB4O1xuICB9XG4gIC5pbnB1dC1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuYWN0aW9uLWNvbXBvbmVudCB7XG4gICAgcGFkZGluZzoxMHB4IDEwcHggMHB4IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIFxufVxuc3Bhbi5jdXJzb3ItcG50ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMnB4O1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbn1cbi5sYWJlbC5jb2wtbWQtOC5mb3JtLWNvbnRyb2wtbGFiZWwge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwicm93XCIgICpuZ0lmPVwib3BlbkVkaXRcIiBzdHlsZT1cInBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7bWFyZ2luLXRvcDoxMHB4O3dpZHRoOjg1JTttYXJnaW4tdG9wOjQwcHg7bWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjE5KTttYXJnaW4tdG9wOjIwcHg7XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgWyhuZ01vZGVsKV09XCJsYWJlbFwiIG5hbWU9XCJsYWJlbFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgUGxhY2UgSG9sZGVyXCIgWyhuZ01vZGVsKV09XCJwbGFjZWhvbGRlclwiIG5hbWU9XCJwbGFjZWhvbGRlclwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJIaW50L0Rlc2NyaXB0aW9uXCIgWyhuZ01vZGVsKV09XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJEZXNjcmlwdGlvblwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02IFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5JbnB1dCBUeXBlPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3QgIFsobmdNb2RlbCldPVwidHlwZVwiPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibnVtYmVyXCI+bnVtYmVyPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+ZGF0ZTwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQ+XG48bWF0LWxhYmVsPlBhZ2VzPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICBbKG5nTW9kZWwpXT1cInBhZ2VOdW1iZXJcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMVwiPnBhZ2UgMTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMlwiPnBhZ2UgMjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfM1wiPnBhZ2UgMzwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIFxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQ+XG48bWF0LWxhYmVsPkNyaXRlcmlhPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICBbKG5nTW9kZWwpXT1cImRyYWZ0Q3JpdGVyaWFJZFwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNyaXRlcmlhTGlzdFwiIHZhbHVlPVwiaXRlbS5faWRcIj57eyBpdGVtLm5hbWV9fTwvbWF0LW9wdGlvbj5cbiAgIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWluXCIgbWF0SW5wdXQgIFsobmdNb2RlbCldPVwibWluXCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWF4XCIgbWF0SW5wdXQgIFsobmdNb2RlbCldPVwibWF4XCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J2RhdGUnXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFsobmdNb2RlbCldPVwibWluRGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWluIGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyTWF4RGF0ZVwiIFsobmdNb2RlbCldPVwibWF4RGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWF4IGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyTWF4RGF0ZVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXJNYXhEYXRlPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiICpuZ0lmPVwidHlwZT09J3JhZGlvJyB8fCB0eXBlPT0nY2hlY2tib3gnIHx8IHR5cGU9PSdkcm9wZG93bidcIj5cbiAgICA8bGFiZWwgZm9yPVwibGFiZWxcIiBjbGFzcz1cImNvbC1zbS0xMlwiPk9wdGlvbnM8L2xhYmVsPlxuICAgIFxuICAgIDx1bCBjbGFzcz1cImNvbFwiICpuZ0Zvcj1cImxldCBvcHQgb2Ygb3B0aW9ucztsZXQgaW5kZXhcIj5cbiAgICAgPGxpIGNsYXNzPVwiXCI+XG4gICAgICA8c3Bhbj57e29wdC5sYWJlbH19IDwvc3Bhbj48c3BhbiBzdHlsZT1cIlxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XCIgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihvcHQsaW5kZXgpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj5cbiAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIG1hdElucHV0IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweDtcIiBbKG5nTW9kZWwpXT1cIm5ld09wdGlvbkxhYmVsXCIgbmFtZT1cIm5ld09wdGlvblwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4XCIgbWF0SW5wdXQgbmFtZT1cIm5ld09wdGlvblwiIHBsYWNlaG9sZGVyPVwia2V5XCIgIFsobmdNb2RlbCldPVwibmV3T3B0aW9uS2V5XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD4gIFxuICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiICAoY2xpY2spPVwiQWRkTmV3T3B0aW9ucygpXCI+XG4gICAgICBBZGRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48ZGl2ICpuZ0lmID1cImZpbHRlcmVkZGF0YSAmJiBmaWx0ZXJlZGRhdGEubGVuZ3RoID4gMFwiPiAgICBcbjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5EbyB5b3Ugd2FudCB0byByZWxhdGVkIHRoZSBxdWVzdGlvbiBiYXNlZCBvbiBiZWxvdyBvcHRpb25zID88L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG5jbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuWyhuZ01vZGVsKV09XCJzZWxlY3RlZE9wdGlvblwiPlxuPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiICpuZ0Zvcj1cImxldCBlbGUgb2Ygb3B0aW9uc1wiICBbdmFsdWVdPVwiZWxlXCI+XG57eyBlbGUubGFiZWwgfX1cbjwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG48bWF0LWZvcm0tZmllbGQgPlxuPG1hdC1sYWJlbD5TZWxlY3QgUXVlc3Rpb24gdG8gYWRkIDwvbWF0LWxhYmVsPlxuPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwiY3VycmVudFNlbGVjdGVkUXRuXCIgPlxuPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsdWVzIG9mIGZpbHRlcmVkZGF0YVwiICBbbmdWYWx1ZV09XCJ2YWx1ZXNcIj4ge3sgdmFsdWVzLmxhYmVsIH19IDwvb3B0aW9uPlxuPC9zZWxlY3Q+ICBcbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0ndGV4dCcgfHwgdHlwZT09J2RhdGUnIHx8IHR5cGU9PSdudW1iZXInXCI+XG48bWF0LWZvcm0tZmllbGQgPlxuPG1hdC1sYWJlbD5TZWxlY3QgQ29uZGl0aW9uIDwvbWF0LWxhYmVsPlxuPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwiY29uZGl0aW9uXCIgPlxuPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsdWVzIG9mIGNvbmRpdGlvbkFycmF5XCIgIFtuZ1ZhbHVlXT1cInZhbHVlcy5jb25kaXRpb25cIj4ge3sgdmFsdWVzLmxhYmVsIH19IDwvb3B0aW9uPlxuPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3RleHQnIHx8IHR5cGU9PSdkYXRlJyB8fCB0eXBlPT0nbnVtYmVyJ1wiPlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgdHlwZT1cInRleFwiIG1hdElucHV0IG5hbWU9XCJjb25kaXRpb25NYXRjaFZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIiAgWyhuZ01vZGVsKV09XCJjb25kaXRpb25NYXRjaFZhbHVlXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+IFxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxuPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiICAoY2xpY2spPVwicGFyZW50TWFwcGluZygpXCI+XG5BZGRcbjwvYnV0dG9uPlxuPC9kaXY+XG48L2Rpdj5cbjx1bCBjbGFzcz1cImNvbC1zbS0xMlwiICpuZ0Zvcj1cImxldCByZWxhdGUgb2YgbGlzdE9mUmVsYXRpb247bGV0IGkgPSBpbmRleFwiPlxuIDxsaSBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICA8c3Bhbj57e3JlbGF0ZS5sYWJlbH19IDwvc3Bhbj48c3BhbiBzdHlsZT1cIlxuICBtYXJnaW4tbGVmdDogMzBweDtcIiAoY2xpY2spPVwiZGVsZXRlQ29uZGl0aW9uKHJlbGF0ZSxpKVwiPlxuICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj5cbjwvbGk+XG48L3VsPlxuXG4gICAgXG48ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG48bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgUmVxaXJlZCA/PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwicmVxdWlyZWRcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICBZZXNcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICBOb1xuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBhdXRvQ29sbGVjdDwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG4gIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIlxuICBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuICBbKG5nTW9kZWwpXT1cImF1dG9Db2xsZWN0XCI+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPXRydWU+XG4gICAgVHJ1ZVxuICA8L21hdC1yYWRpby1idXR0b24+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgIEZhbHNlXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cbiAgXG48ZGl2ICBjbGFzcz1cImNvbC1zbS0xMlwiPlxuXG48YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoxMHB4O1wiICAoY2xpY2spPVwiY2xvc2VNb2RlbCgnc2F2ZScpXCI+XG5TYXZlXG48L2J1dHRvbj5cblxuPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiBzdHlsZT1cInBhZGRpbmc6MHB4O21hcmdpbjowcHg7bWFyZ2luLXRvcDoxMHB4O2JveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO3BhZGRpbmctYm90dG9tOjEwcHg7XCI+XG4gIDxzcGFuIGNsYXNzPVwicXRuX3Bvc2l0aW9uXCI+PHNwYW4gY2xhc3M9XCJcIj4je3sgZmllbGQucG9zaXRpb24gfX08L3NwYW4+PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbXBvbmVudFwiID5cblxuICA8c3BhbiBjbGFzcz1cImN1cnNvci1wbnRyXCIgKGNsaWNrKT1cImRlbGV0ZUVsZW1lbnQoZmllbGQpXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4gPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImN1cnNvci1wbnRyXCIgKGNsaWNrKT1cImNvcHlFbGVtZW50KGZpZWxkKVwiPjxpIGNsYXNzPVwiZmEgZmEtY29weVwiPjwvaT48L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIiAoY2xpY2spPVwibG9hZEZvcm1FbGVtZW50KGZpZWxkKVwiID48L2k+PC9zcGFuPlxuICBcbiAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XG4gICAgPHRleHRib3ggKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cbiAgICA8dGV4dGJveCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cbiAgICA8ZGF0ZSAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZGF0ZT5cbiAgICA8c2xpZGVyICpuZ1N3aXRjaENhc2U9XCInc2xpZGVyJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3NsaWRlcj5cbiAgICAgIDxkcm9wZG93biAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2Ryb3Bkb3duPlxuICAgICAgPGNoZWNrYm94ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvY2hlY2tib3g+XG4gICAgICA8cmFkaW8gKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9yYWRpbz5cbiAgICAgIDxsaWItbXVsdGktc2VsZWN0ICpuZ1N3aXRjaENhc2U9XCInbWF0cml4J1wiICBjZGtEcmFnIChjaGlsZHJlbkRyb3BFdmVudCk9XCJjaGlsZHJlbkRyb3BFdmVudCgkZXZlbnQpXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvbGliLW11bHRpLXNlbGVjdD5cbiAgICAgIDxmaWxlICpuZ1N3aXRjaENhc2U9XCInZmlsZSdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9maWxlPlxuICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+XG4gICAgICAgPC9kaXY+IFxuICAgICAgIDwvZGl2PmAsXG4gIHN0eWxlczogW2BcbiAgLnF0bl9wb3NpdGlvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggNXB4O1xuICAgIGNvbG9yOiAjY2NjO1xuICB9IGBcbiAgXVxufSlcblxuLy8gPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBteS0xIHAtMiBmYWRlSW5Eb3duIGFuaW1hdGVkXCIgKm5nSWY9XCIhaXNWYWxpZCAmJiBpc0RpcnR5XCI+e3tmaWVsZC5sYWJlbH19IGlzIHJlcXVpcmVkPC9kaXY+XG5cbmV4cG9ydCBjbGFzcyBGaWVsZEJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55O1xuXG4gIEBJbnB1dCgpIGNyaXRlcmlhTGlzdDogYW55O1xuICBASW5wdXQoKSBmb3JtOiBhbnk7XG5cbiAgQE91dHB1dCgpIHNlbmREYXRhVG9QYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgY29weU9yRGVsZXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgZmlsdGVyZWRkYXRhOiBhbnk7XG4gIGdldFNlbGVjdFF1ZXN0aW9uOiBhbnk7XG4gIGNsb3NlUmVzdWx0OiBzdHJpbmc7XG4gIG1vZGFsUmVmZXJlbmNlOiBhbnk7XG4gIHBhZ2VOdW1iZXI7IGFueTtcbiAgbGFiZWw6IGFueTtcbiAgdHlwZTogYW55O1xuICBwbGFjZWhvbGRlcjogYW55O1xuICBvcHRpb25zOiBhbnk7XG4gIG5ld09wdGlvbktleTogYW55O1xuICBuZXdPcHRpb25MYWJlbDogYW55O1xuXG4gIGFjdGl2ZU1vZGVsRGF0YTogYW55O1xuICB2YWxpZGF0aW9uczogYW55O1xuICByZXF1aXJlZDogYW55O1xuICBhdXRvQ29sbGVjdDogYW55O1xuICBvcGVuRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBfaWQ6IGFueTtcbiAgZGVzY3JpcHRpb246IGFueTtcbiAgbWluRGF0ZTogYW55O1xuICBtYXhEYXRlOiBhbnk7XG4gIG1pbjogYW55O1xuICBtYXg6IGFueTtcbiAgZHJhZnRDcml0ZXJpYUlkOiBhbnk7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBhbGxEYXRhOiBhbnk7XG4gIGN1cnJlbnRTZWxlY3RlZFF0bjogYW55O1xuICBzZWxlY3RlZE9wdGlvbjogYW55O1xuXG4gIGxpc3RPZlJlbGF0aW9uOiBhbnkgPSBbXTtcbiAgY29uZGl0aW9uOiBhbnk7XG5cbiAgY29uZGl0aW9uTWF0Y2hWYWx1ZTogYW55O1xuXG4gIGNvbmRpdGlvbkFycmF5OiBhbnkgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiZXF1YWxzXCIsXG4gICAgICBjb25kaXRpb246IFwiPT09XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk5vdCBFcXVhbCBUb1wiLFxuICAgICAgY29uZGl0aW9uOiBcIiE9XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkdyZWF0ZXIgVGhhblwiLFxuICAgICAgY29uZGl0aW9uOiBcIj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiTGVzcyBUaGFuXCIsXG4gICAgICBjb25kaXRpb246IFwiPFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJHcmVhdGVyIFRoYW4gT3IgRXF1YWxcIixcbiAgICAgIGNvbmRpdGlvbjogXCI+PVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJMZXNzIFRoYW4gT3IgRXF1YWxcIixcbiAgICAgIGNvbmRpdGlvbjogXCI8PVwiXG4gICAgfVxuICBdXG5cblxuICAvLyBwcml2YXRlIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBteU1vZGFsOiBFbGVtZW50UmVmO1xuXG4gIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxuICAgIHByaXZhdGUgZHluYW1pY1NlcnZlOiBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlXG4gICkge1xuXG4gIH1cblxuICAvLyBnZXRBbGwoKXtcbiAgLy8gICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpLnN1YnNjcmliZShtZXNzYWdlID0+IHsgXG4gIC8vICAgICBjb25zb2xlLmxvZyhcImdldCBhbGwgaW5mb1wiLG1lc3NhZ2UpO1xuXG4gIC8vICAgIH0pO1xuXG4gIC8vIH0gICBcblxuXG4gIHBhcmVudE1hcHBpbmcoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25kaXRpb24sIFwiY29uZGl0aW9uXCIsIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLCBcInNlbGVjdGVkT3B0aW9uXCIsIHRoaXMuc2VsZWN0ZWRPcHRpb24pO1xuICAgIGxldCBvYmogPSB7fVxuICAgIC8vIG9wdGlvbjp0aGlzLnNlbGVjdGVkT3B0aW9uLFxuICAgIC8vIHF1ZXN0aW9uOnRoaXMuY3VycmVudFNlbGVjdGVkUXRuXG4gICAgLy8gb2JqWyd2aXNpYmxlSWYnXSA9IFtdO1xuXG5cbiAgICBsZXQgY29uZGlPYmogPSB7XG4gICAgICBvcGVyYXRvcjogdGhpcy5jb25kaXRpb24sXG4gICAgICB2YWx1ZTogdGhpcy5jb25kaXRpb25NYXRjaFZhbHVlLFxuICAgICAgZmllbGQ6IHRoaXMuZmllbGQuZmllbGQsXG4gICAgICBsYWJlbDogdGhpcy5maWVsZC5sYWJlbFxuICAgICAgLy8gcGFyZW50OnRoaXMuc2VsZWN0ZWRPcHRpb24uZmllbGRcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4ucGFyZW50Q2hpbGRyZW4pIHtcbiAgICAvLyAgIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLnBhcmVudENoaWxkcmVuLnB1c2goY29uZGlPYmopO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5wYXJlbnRDaGlsZHJlbiA9IFtdO1xuICAgIC8vICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4ucGFyZW50Q2hpbGRyZW4ucHVzaChjb25kaU9iaik7XG4gICAgLy8gfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bicsIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29uZGlPYmpcIiwgY29uZGlPYmopO1xuICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb24gPSB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddWydxdWVzdGlvbkxpc3QnXS5maWx0ZXIoZWxlID0+IHtcbiAgICAgIGlmIChlbGUuZmllbGQgPT0gdGhpcy5maWVsZC5maWVsZCkge1xuICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJnZXRTZWxlY3RRdWVzdGlvblwiLCB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uKTtcblxuICAgIGxldCBpc0F2YWlsYWJsZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmdldFNlbGVjdFF1ZXN0aW9uWyd2aXNpYmxlSWYnXSAmJiB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uWyd2aXNpYmxlSWYnXS5sZW5ndGggPiAwKSB7XG4gICAgICBpc0F2YWlsYWJsZSA9IHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25bJ3Zpc2libGVJZiddLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udmlzaWJsZUlmLmZpZWxkID09IHRoaXMuZmllbGQuZmllbGQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuXG5cblxuXG4gICAgY29uc29sZS5sb2coXCJhZnRlciBnZXRTZWxlY3RRdWVzdGlvblwiLCB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uKTtcblxuICAgIGxldCBhbGxEYXRhID0gW107XG5cblxuXG4gICAgbGV0IGFkZE9iaiA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWdnZXJcbiAgICAgIGlmICh0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQpICE9PSAtMSkge1xuICAgICAgICAgIGFsZXJ0KFwiVmFsdWUgZXhpc3RzIVwiKVxuXG4gICAgICAgICAgYWRkT2JqID0gZmFsc2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGFkZE9iaiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvbltpXS5wYXJlbnRDaGlsZHJlbi5wdXNoKHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRPYmogPSB0cnVlO1xuICAgICAgICB0aGlzLmdldFNlbGVjdFF1ZXN0aW9uW2ldLnBhcmVudENoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0UXVlc3Rpb25baV0ucGFyZW50Q2hpbGRyZW4ucHVzaCh0aGlzLmN1cnJlbnRTZWxlY3RlZFF0bi5maWVsZCk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAoYWRkT2JqKSB7XG5cblxuICAgICAgYWxsRGF0YSA9IHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J11bJ3F1ZXN0aW9uTGlzdCddLmZpbHRlcihlbGUgPT4ge1xuICAgICAgICBpZiAoZWxlLmZpZWxkID09IHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKSB7XG4gICAgICAgICAgaWYgKGVsZS52aXNpYmxlSWYgJiYgZWxlLnZpc2libGVJZi5sZW5ndGggPiAwICYmIGlzQXZhaWxhYmxlID09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmLnB1c2goY29uZGlPYmopO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmID0gW107XG4gICAgICAgICAgICBlbGUudmlzaWJsZUlmLnB1c2goY29uZGlPYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlbGVcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuXG4gICAgICBjb25zb2xlLmxvZyhcImFsbCBkYXRhIGluIHF1ZXN0aW9uXCIsIGFsbERhdGEpO1xuXG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQoKVxuXG5cblxuXG5cblxuICAgICAgaWYgKCF0aGlzLmxpc3RPZlJlbGF0aW9uLmluY2x1ZGVzKGNvbmRpT2JqKSkge1xuXG4gICAgICAgIHRoaXMubGlzdE9mUmVsYXRpb24ucHVzaChjb25kaU9iaik7XG5cblxuICAgICAgfVxuXG5cbiAgICB9XG5cblxuXG4gICAgaWYgKHRoaXMuY29uZGl0aW9uKSB7XG5cblxuXG5cbiAgICB9XG5cblxuXG4gICAgLy8gJ29wdGlvbic6dGhpcy5zZWxlY3RlZE9wdGlvbixcbiAgICAvLyAgICAgICAncXVlc3Rpb24nOnRoaXMuY3VycmVudFNlbGVjdGVkUXRuXG5cbiAgICAvLyB0aGlzLmZpZWxkLmNoaWxkUW50ID0gdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4uZmllbGQ7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb25cIiwgdGhpcy5saXN0T2ZSZWxhdGlvbik7XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cblxuXG4gICAgLy8gdGhpcy5jdXJyZW50U2VsZWN0ZWRRdG4gPSB7IH07XG5cbiAgICAvLyB0aGlzLmR5bmFtaWNTZXJ2ZS5nZXRBTGwoKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIHRoaXMudmFsaWRhdGlvbnMgPSB7XG4gICAgICAncmVsYXRpb24nOiBbXVxuICAgIH1cblxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMgPSB7XG4gICAgICAncmVsYXRpb24nOiBbXVxuICAgIH07XG5cbiAgfVxuICBsb2FkRm9ybUVsZW1lbnQoaXRlbSkge1xuXG4gICAgY29uc29sZS5sb2coJ2xvYWRGb3JtRWxlbWVudCcsIGl0ZW0pO1xuICAgIHRoaXMuYWxsRGF0YSA9IHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5hbGxEYXRhLCBcIiBhbGwgcXVlc3Rpb25zIFwiLCB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddKTtcblxuICAgIHRoaXMuZmlsdGVyZWRkYXRhID0gdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J10uZmlsdGVyKHQgPT4gdC5maWVsZCAhPT0gaXRlbS5maWVsZCk7XG5cbiAgICB0aGlzLmFsbERhdGFbJ3F1ZXN0aW9uTGlzdCddWydxdWVzdGlvbkxpc3QnXVxuICAgIGNvbnNvbGUubG9nKCdjb25zdCBmaWx0ZXJlZGRhdGEnLCB0aGlzLmZpbHRlcmVkZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2xlbmd0aCcsIHRoaXMuZmlsdGVyZWRkYXRhWydxdWVzdGlvbkxpc3QnXS5sZW5ndGgpO1xuXG4gICAgLy8gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKClcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiaXRlbSAtLS1cIiwgKTtcblxuICAgIHRoaXMuYWN0aXZlTW9kZWxEYXRhID0gXCJcIjtcbiAgICB0aGlzLmxhYmVsID0gaXRlbS5sYWJlbDtcbiAgICB0aGlzLnR5cGUgPSBpdGVtLnR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGl0ZW0ucGxhY2Vob2xkZXI7XG4gICAgdGhpcy5vcHRpb25zID0gaXRlbS5vcHRpb25zO1xuICAgIHRoaXMuZHJhZnRDcml0ZXJpYUlkID0gaXRlbS5kcmFmdENyaXRlcmlhSWQ7XG5cblxuXG4gICAgdGhpcy5yZXF1aXJlZCA9IGl0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWQ7XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIGlmIChpdGVtLnZhbGlkYXRpb25zLnJlbGF0aW9uKSB7XG4gICAgICB0aGlzLmxpc3RPZlJlbGF0aW9uID0gaXRlbS52YWxpZGF0aW9ucy5yZWxhdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoaXRlbS50eXBlID09IFwiZGF0ZVwiKSB7XG4gICAgICB0aGlzLm1pbkRhdGUgPSBpdGVtLnZhbGlkYXRpb25zLm1pbkRhdGU7XG4gICAgICB0aGlzLm1heERhdGUgPSBpdGVtLnZhbGlkYXRpb25zLm1heERhdGVcbiAgICAgIHRoaXMuYXV0b0NvbGxlY3QgPSBpdGVtLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0O1xuICAgIH1cbiAgICBlbHNlIGlmIChpdGVtLnR5cGUgPT0gXCJzbGlkZXJcIikge1xuICAgICAgdGhpcy5taW4gPSBpdGVtLnZhbGlkYXRpb25zLm1pbjtcbiAgICAgIHRoaXMubWF4ID0gaXRlbS52YWxpZGF0aW9ucy5tYXg7XG4gICAgfVxuXG5cblxuICAgIHRoaXMucmVxdWlyZWQgPSB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuICAgIGNvbnNvbGUubG9nKGl0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWQsIFwiaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZFwiLCB0aGlzLnJlcXVpcmVkLCBcImxhYmVsXCIsIHRoaXMubGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibGFiZWxcIix0aGlzLmxhYmVsKTtcblxuICAgIHRoaXMub3BlbkVkaXQgPSB0aGlzLm9wZW5FZGl0ID8gZmFsc2UgOiB0cnVlO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1vZGFsQnV0dG9uXCIpLmNsaWNrKCk7XG4gICAgLy8gdGhpcy5vcGVuKHRoaXMubXlNb2RhbCk7XG4gICAgLy8gdGhpcy5teU1vZGFsLnNob3coKTtcbiAgICAvLyB0aGlzLm15TW9kYWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnbW9kYWwgZmFkZSBzaG93JztcblxuICB9XG5cbiAgc2F2ZUVkaXQoKSB7XG4gIH1cbiAgY2xvc2VNb2RlbChhY3Rpb24pIHtcblxuICAgIGlmIChhY3Rpb24gPT0gXCJzYXZlXCIpIHtcblxuXG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsaWRhdGlvbnMsIFwidGhpcy5maWVsZFwiLCB0aGlzLnJlcXVpcmVkKTtcbiAgICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UuY2xvc2UoKTtcblxuXG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5maWVsZCA9IHRoaXMuZmllbGQuZmllbGQ7XG5cbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICBsZXQgb2JqID0ge1xuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB2YWxpZGF0aW9uczogdGhpcy52YWxpZGF0aW9ucyxcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIF9pZDogdGhpcy5faWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICBkcmFmdENyaXRlcmlhSWQ6IHRoaXMuZHJhZnRDcml0ZXJpYUlkLFxuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICAgIG9ialsnbWluRGF0ZSddID0gdGhpcy5taW5EYXRlO1xuICAgICAgICBvYmpbJ21heERhdGUnXSA9IHRoaXMubWF4RGF0ZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgb2JqWydtaW4nXSA9IHRoaXMubWluO1xuICAgICAgICBvYmpbJ21heCddID0gdGhpcy5tYXg7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqXCIsb2JqKTtcblxuXG5cblxuICAgICAgLy8gdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG5cblxuICAgICAgdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICB0aGlzLmZpZWxkLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICB0aGlzLmZpZWxkLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIHRoaXMuZmllbGQub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIHRoaXMuZmllbGQuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5maWVsZC5kcmFmdENyaXRlcmlhSWQgPSB0aGlzLmRyYWZ0Q3JpdGVyaWFJZDtcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMuYXV0b0NvbGxlY3QgPSB0aGlzLmF1dG9Db2xsZWN0O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5taW4gPSB0aGlzLm1pbjtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5tYXggPSB0aGlzLm1heDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYodGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZWxhdGlvbil7XG5cbiAgICAgIGlmICh0aGlzLmxpc3RPZlJlbGF0aW9uKSB7XG4gICAgICAgIG9iai52YWxpZGF0aW9ucy5yZWxhdGlvbiA9IHRoaXMubGlzdE9mUmVsYXRpb247XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVsYXRpb24gPSB0aGlzLmxpc3RPZlJlbGF0aW9uO1xuICAgICAgfVxuXG4gICAgICAvLyB9XG5cblxuXG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbGlkYXRpb25zXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWRcIiwgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJzZGRzXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcblxuXG4gICAgICBjb25zb2xlLmxvZyhvYmosIFwidGhpcy5maWVsZC52YWxpZGF0aW9uc1wiLCB0aGlzLmZpZWxkLnZhbGlkYXRpb25zKTtcbiAgICAgIGxldCBvcCA9IHtcbiAgICAgICAgYWN0aW9uOiBcInNhdmVcIixcbiAgICAgICAgZGF0YTogb2JqXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KG9wKTtcbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkXCIsIHRoaXMuZmllbGQpO1xuICAgICAgdGhpcy5vcGVuRWRpdCA9IGZhbHNlO1xuXG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdCh0aGlzLmFjdGl2ZU1vZGVsRGF0YSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLm9wZW5FZGl0ID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcbiAgICAvLyAgdGhpcy5teU1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21vZGFsIGhpZGUnO1xuICB9XG5cbiAgb3Blbihjb250ZW50KSB7XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5hY3RpdmVNb2RlbERhdGFcIiwgc2VsZWN0ZWREYXRhKTtcbiAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlID0gdGhpcy5tb2RhbFNlcnZpY2Uub3Blbihjb250ZW50KTtcbiAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAvLyAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgQ2xvc2VkIHdpdGhgO1xuICAgIC8vIH0sIChyZWFzb24pID0+IHtcbiAgICAvLyAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgRGlzbWlzc2VkYDtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgZ2V0RGlzbWlzc1JlYXNvbihyZWFzb246IGFueSk6IHN0cmluZyB7XG4gIC8vICAgLy8gaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5FU0MpIHtcbiAgLy8gICAvLyAgIHJldHVybiAnYnkgcHJlc3NpbmcgRVNDJztcbiAgLy8gICAvLyB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5CQUNLRFJPUF9DTElDSykge1xuICAvLyAgIC8vICAgcmV0dXJuICdieSBjbGlja2luZyBvbiBhIGJhY2tkcm9wJztcbiAgLy8gICAvLyB9IGVsc2Uge1xuICAvLyAgIC8vICAgcmV0dXJuIGB3aXRoOiAke3JlYXNvbn1gO1xuICAvLyAgIC8vIH1cbiAgLy8gfVxuXG4gIGRlbGV0ZU9wdGlvbihvcHQsIGluZGV4KSB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGVcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgIC8vIGxldCBuZXdBcnIgPSBbXTtcbiAgICBsZXQgb3B0aW9uc0FyciA9IHRoaXMub3B0aW9ucy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAvLyBpZihpdGVtLmxhYmxlPT1vcHQubGFiZWwgJiYgaXRlbS5rZXk9PW9wdC5rZXkpe1xuXG4gICAgICAvLyB9ZWxzZXtcblxuICAgICAgLy8gfVxuXG4gICAgICByZXR1cm4gKGl0ZW0ubGFiZWwgIT0gb3B0LmxhYmVsICYmIGl0ZW0ua2V5ICE9IG9wdC5rZXkpXG5cbiAgICAgIC8vIGlmKGl0ZW0ubGFibGU9PW9wdC5sYWJlbCAmJiBpdGVtLmtleT09b3B0LmtleSl7XG5cbiAgICAgIC8vIH1lbHNle1xuICAgICAgLy8gICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIH1cbiAgICB9KVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc0FycjtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSBuZXcgXCIsIG9wdGlvbnNBcnIpO1xuICB9XG4gIEFkZE5ld09wdGlvbnMoKSB7XG5cbiAgICBpZiAodGhpcy5uZXdPcHRpb25LZXkgIT0gXCJcIiAmJiB0aGlzLm5ld09wdGlvbkxhYmVsICE9IFwiXCIpIHtcblxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm5ld09wdGlvblwiLCB0aGlzLm5ld09wdGlvbkxhYmVsKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zLnB1c2goe1xuICAgICAgICBrZXk6IHRoaXMubmV3T3B0aW9uS2V5LFxuICAgICAgICBsYWJlbDogdGhpcy5uZXdPcHRpb25MYWJlbFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5vcHRpb25zLnB1c2hcIiwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5uZXdPcHRpb25LZXkgPSBcIlwiO1xuICAgIHRoaXMubmV3T3B0aW9uTGFiZWwgPSBcIlwiO1xuICB9XG5cbiAgY29weUVsZW1lbnQoaXRlbSkge1xuICAgIC8vIHRoaXMuZmllbGQucHVzaChpdGVtKTtcbiAgICBpdGVtLmFjdGlvbiA9ICdjb3B5JztcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIC0tLS0tLS0tLS1cIiwgaXRlbSk7XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KGl0ZW0pO1xuXG4gIH1cbiAgZGVsZXRlRWxlbWVudChpdGVtKSB7XG5cbiAgICBpdGVtLmFjdGlvbiA9ICdkZWxldGUnO1xuICAgIHRoaXMuZmllbGQuaXNEZWxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChpdGVtKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcblxuICB9XG4gIGNoaWxkcmVuRHJvcEV2ZW50KCRldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2hpbGRyZW5Ecm9wRXZlbnRcIiwgdGhpcy5maWVsZCk7XG4gICAgLy8gY29uc3QgYWN0aW9uICA9ICdjaGlsZERyb3BlZCc7XG4gICAgbGV0IG5ld09iaiA9IHtcbiAgICAgIGFjdGlvbjogJ2NoaWxkRHJvcGVkJyxcbiAgICAgIGRhdGE6ICRldmVudFxuICAgIH1cbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQobmV3T2JqKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcbiAgfVxuXG4gIGRlbGV0ZUNvbmRpdGlvbihkYXRhLCB2YWx1ZSkge1xuICAgIC8vIHZhciBpbmRleCA9IHRoaXMubGlzdE9mUmVsYXRpb24uaW5kZXhPZih2YWx1ZSk7XG4gICAgLy8gaWYgKGluZGV4ID4gLTEpIHtcbiAgICB0aGlzLmxpc3RPZlJlbGF0aW9uLnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgdGhpcy5nZXRTZWxlY3RRdWVzdGlvblswXS5wYXJlbnRDaGlsZHJlbi5zcGxpY2UodmFsdWUsIDEpO1xuICAgIC8vIH1cblxuICAgIGNvbnNvbGUubG9nKCdhZnRlciBkZWxldGUgZGF0YScsIHRoaXMubGlzdE9mUmVsYXRpb24pO1xuICB9XG59XG4iXX0=