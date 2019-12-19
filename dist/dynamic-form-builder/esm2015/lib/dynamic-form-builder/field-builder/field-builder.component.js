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
        };
        console.log("condiObj", condiObj);
        /** @type {?} */
        let getSelectQuestion = this.allData['questionList']['questionList'].filter((/**
         * @param {?} ele
         * @return {?}
         */
        ele => {
            if (ele.field == this.field.field) {
                return ele;
            }
        }));
        console.log("getSelectQuestion", getSelectQuestion);
        /** @type {?} */
        let isAvailable = false;
        if (getSelectQuestion['visibleIf'] && getSelectQuestion['visibleIf'].length > 0) {
            isAvailable = getSelectQuestion['visibleIf'].filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.visibleIf.field == this.field.field) {
                    return true;
                }
            }));
        }
        /** @type {?} */
        let allData = [];
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
        this.copyOrDeleteEvent.emit(JSON.stringify(newObj));
        console.log("field delete", this.field);
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
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);">
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
<option *ngFor="let values of allData.questionList.questionList"  [ngValue]="values"> {{ values.label }} </option>
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
<ul class="col-sm-12" *ngFor="let relate of listOfRelation;let index">
 <li class="col-sm-12">
  <span>{{relate.field}} </span><span style="
  margin-left: 30px;" >
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

  <span class="cursor-pntr" (click)="copyElement(field)"><i class="fa fa-copy"></i></span>
  <span class="cursor-pntr" (click)="deleteElement(field)"><i class="fa fa-trash"></i> </span>
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
      <lib-multi-select *ngSwitchCase="'matrix'" (childrenDropEvent)="childrenDropEvent($event)" [field]="field" [form]="form"></lib-multi-select>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEcsT0FBUSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUErUmhGLDZIQUE2SDtBQUU3SCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBNEVoQyxZQUVVLFlBQXVDO1FBQXZDLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtRQXhFdkMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBZ0J6RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBYTFCLG1CQUFjLEdBQU8sRUFBRSxDQUFDO1FBS3hCLG1CQUFjLEdBQU87WUFDbkI7Z0JBQ0EsS0FBSyxFQUFDLFFBQVE7Z0JBQ2QsU0FBUyxFQUFDLEtBQUs7YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBQyxjQUFjO2dCQUNwQixTQUFTLEVBQUMsSUFBSTthQUNmO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFDLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBQyxHQUFHO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUMsV0FBVztnQkFDakIsU0FBUyxFQUFDLEdBQUc7YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBQyx1QkFBdUI7Z0JBQzdCLFNBQVMsRUFBQyxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUMsb0JBQW9CO2dCQUMxQixTQUFTLEVBQUMsSUFBSTthQUNmO1NBQ0YsQ0FBQTtJ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QTdSUyx5QkFBeUI7OztvQkFrU2hDLEtBQUs7MkJBRUwsS0FBSzttQkFDTCxLQUFLOytCQUVMLE1BQU07Z0NBRU4sTUFBTTtzQkErRE4sU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUF0RXZDLHNDQUFvQjs7SUFFcEIsNkNBQTBCOztJQUMxQixxQ0FBbUI7O0lBRW5CLGlEQUFxRDs7SUFFckQsa0RBQXlEOztJQUV6RCw0Q0FBb0I7O0lBQ3BCLCtDQUFvQjs7SUFDcEIsMkNBQVc7O0lBQUMsb0NBQUk7O0lBQ2hCLHNDQUFXOztJQUNYLHFDQUFVOztJQUNWLDRDQUFpQjs7SUFDakIsd0NBQWE7O0lBQ2IsNkNBQWtCOztJQUNsQiwrQ0FBb0I7O0lBRXBCLGdEQUFxQjs7SUFDckIsNENBQWlCOztJQUNqQix5Q0FBYzs7SUFDZCw0Q0FBaUI7O0lBQ2pCLHlDQUEwQjs7SUFDMUIsb0NBQVM7O0lBQ1QsNENBQWlCOztJQUNqQix3Q0FBYTs7SUFDYix3Q0FBYTs7SUFDYixvQ0FBUzs7SUFDVCxvQ0FBUzs7SUFDVCxnREFBb0I7O0lBQ3BCLDZDQUEyQjs7SUFDM0Isd0NBQVk7O0lBQ1osbURBQXVCOztJQUN2QiwrQ0FBbUI7O0lBRW5CLCtDQUF3Qjs7SUFDeEIsMENBQWM7O0lBRWQsb0RBQXdCOztJQUV4QiwrQ0F5QkM7O0lBSUQsd0NBQTZEOzs7OztJQU8zRCw2Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IE5nYk1vZGFsLCBNb2RhbERpc21pc3NSZWFzb25zIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVEhJU19FWFBSIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCAgeyBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzTmdUZW1wbGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmllbGQtYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzdHlsZT5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgbWluLXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgfVxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiBhdXRvO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogMzcycHg7XG4gIH1cbiAgLmlucHV0LWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5hY3Rpb24tY29tcG9uZW50IHtcbiAgICBwYWRkaW5nOjEwcHggMTBweCAwcHggMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiByaWdodDtcbiAgXG59XG5zcGFuLmN1cnNvci1wbnRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAycHg7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxufVxuLmxhYmVsLmNvbC1tZC04LmZvcm0tY29udHJvbC1sYWJlbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAgKm5nSWY9XCJvcGVuRWRpdFwiIHN0eWxlPVwicGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzttYXJnaW4tdG9wOjEwcHg7d2lkdGg6ODUlO21hcmdpbi10b3A6NDBweDttYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIFsobmdNb2RlbCldPVwibGFiZWxcIiBuYW1lPVwibGFiZWxcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIklucHV0IFBsYWNlIEhvbGRlclwiIFsobmdNb2RlbCldPVwicGxhY2Vob2xkZXJcIiBuYW1lPVwicGxhY2Vob2xkZXJcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSGludC9EZXNjcmlwdGlvblwiIFsobmdNb2RlbCldPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiRGVzY3JpcHRpb25cIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tNiBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+SW5wdXQgVHlwZTwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0ICBbKG5nTW9kZWwpXT1cInR5cGVcIj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dFwiPnRleHQ8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmFkaW9cIj5yYWRpbzwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZGF0ZVwiPmRhdGU8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuPG1hdC1mb3JtLWZpZWxkPlxuPG1hdC1sYWJlbD5QYWdlczwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCAgWyhuZ01vZGVsKV09XCJwYWdlTnVtYmVyXCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzFcIj5wYWdlIDE8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzJcIj5wYWdlIDI8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzNcIj5wYWdlIDM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiBcbjxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuPG1hdC1mb3JtLWZpZWxkPlxuPG1hdC1sYWJlbD5Dcml0ZXJpYTwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCAgWyhuZ01vZGVsKV09XCJkcmFmdENyaXRlcmlhSWRcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjcml0ZXJpYUxpc3RcIiB2YWx1ZT1cIml0ZW0uX2lkXCI+e3sgaXRlbS5uYW1lfX08L21hdC1vcHRpb24+XG4gICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1pblwiIG1hdElucHV0ICBbKG5nTW9kZWwpXT1cIm1pblwiIG5hbWU9XCJtaW4gdmFsdWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1heFwiIG1hdElucHV0ICBbKG5nTW9kZWwpXT1cIm1heFwiIG5hbWU9XCJtaW4gdmFsdWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICAgIFxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbKG5nTW9kZWwpXT1cIm1pbkRhdGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1pbiBkYXRlXCI+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlck1heERhdGVcIiBbKG5nTW9kZWwpXT1cIm1heERhdGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1heCBkYXRlXCI+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlck1heERhdGVcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyTWF4RGF0ZT48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiAqbmdJZj1cInR5cGU9PSdyYWRpbycgfHwgdHlwZT09J2NoZWNrYm94JyB8fCB0eXBlPT0nZHJvcGRvd24nXCI+XG4gICAgPGxhYmVsIGZvcj1cImxhYmVsXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5PcHRpb25zPC9sYWJlbD5cbiAgICBcbiAgICA8dWwgY2xhc3M9XCJjb2xcIiAqbmdGb3I9XCJsZXQgb3B0IG9mIG9wdGlvbnM7bGV0IGluZGV4XCI+XG4gICAgIDxsaSBjbGFzcz1cIlwiPlxuICAgICAgPHNwYW4+e3tvcHQubGFiZWx9fSA8L3NwYW4+PHNwYW4gc3R5bGU9XCJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1wiIChjbGljayk9XCJkZWxldGVPcHRpb24ob3B0LGluZGV4KVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L3NwYW4+XG4gICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTGFiZWxcIiBtYXRJbnB1dCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHg7XCIgWyhuZ01vZGVsKV09XCJuZXdPcHRpb25MYWJlbFwiIG5hbWU9XCJuZXdPcHRpb25cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleFwiIG1hdElucHV0IG5hbWU9XCJuZXdPcHRpb25cIiBwbGFjZWhvbGRlcj1cImtleVwiICBbKG5nTW9kZWwpXT1cIm5ld09wdGlvbktleVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+ICBcbiAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIiAgKGNsaWNrKT1cIkFkZE5ld09wdGlvbnMoKVwiPlxuICAgICAgQWRkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG48bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+RG8geW91IHdhbnQgdG8gcmVsYXRlZCB0aGUgcXVlc3Rpb24gYmFzZWQgb24gYmVsb3cgb3B0aW9ucyA/PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbmFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIlxuY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcblsobmdNb2RlbCldPVwic2VsZWN0ZWRPcHRpb25cIj5cbjxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiAqbmdGb3I9XCJsZXQgZWxlIG9mIG9wdGlvbnNcIiAgW3ZhbHVlXT1cImVsZVwiPlxue3sgZWxlLmxhYmVsIH19XG48L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjwvZGl2PlxuXG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuPG1hdC1mb3JtLWZpZWxkID5cbjxtYXQtbGFiZWw+U2VsZWN0IFF1ZXN0aW9uIHRvIGFkZCA8L21hdC1sYWJlbD5cbjxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbKG5nTW9kZWwpXT1cImN1cnJlbnRTZWxlY3RlZFF0blwiID5cbjxvcHRpb24gKm5nRm9yPVwibGV0IHZhbHVlcyBvZiBhbGxEYXRhLnF1ZXN0aW9uTGlzdC5xdWVzdGlvbkxpc3RcIiAgW25nVmFsdWVdPVwidmFsdWVzXCI+IHt7IHZhbHVlcy5sYWJlbCB9fSA8L29wdGlvbj5cbjwvc2VsZWN0PiAgXG48L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwidHlwZT09J3RleHQnIHx8IHR5cGU9PSdkYXRlJyB8fCB0eXBlPT0nbnVtYmVyJ1wiPlxuPG1hdC1mb3JtLWZpZWxkID5cbjxtYXQtbGFiZWw+U2VsZWN0IENvbmRpdGlvbiA8L21hdC1sYWJlbD5cbjxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbKG5nTW9kZWwpXT1cImNvbmRpdGlvblwiID5cbjxvcHRpb24gKm5nRm9yPVwibGV0IHZhbHVlcyBvZiBjb25kaXRpb25BcnJheVwiICBbbmdWYWx1ZV09XCJ2YWx1ZXMuY29uZGl0aW9uXCI+IHt7IHZhbHVlcy5sYWJlbCB9fSA8L29wdGlvbj5cbjwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInR5cGU9PSd0ZXh0JyB8fCB0eXBlPT0nZGF0ZScgfHwgdHlwZT09J251bWJlcidcIj5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXhcIiBtYXRJbnB1dCBuYW1lPVwiY29uZGl0aW9uTWF0Y2hWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCIgIFsobmdNb2RlbCldPVwiY29uZGl0aW9uTWF0Y2hWYWx1ZVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPiBcbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cbjxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIiAgKGNsaWNrKT1cInBhcmVudE1hcHBpbmcoKVwiPlxuQWRkXG48L2J1dHRvbj5cbjwvZGl2PlxuPHVsIGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nRm9yPVwibGV0IHJlbGF0ZSBvZiBsaXN0T2ZSZWxhdGlvbjtsZXQgaW5kZXhcIj5cbiA8bGkgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgPHNwYW4+e3tyZWxhdGUuZmllbGR9fSA8L3NwYW4+PHNwYW4gc3R5bGU9XCJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XCIgPlxuICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj5cbjwvbGk+XG48L3VsPlxuXG4gICAgXG48ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG48bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgUmVxaXJlZCA/PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwicmVxdWlyZWRcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICBZZXNcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICBOb1xuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbjxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBhdXRvQ29sbGVjdDwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG4gIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIlxuICBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuICBbKG5nTW9kZWwpXT1cImF1dG9Db2xsZWN0XCI+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPXRydWU+XG4gICAgVHJ1ZVxuICA8L21hdC1yYWRpby1idXR0b24+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgIEZhbHNlXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5cbiAgXG48ZGl2ICBjbGFzcz1cImNvbC1zbS0xMlwiPlxuXG48YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoxMHB4O1wiICAoY2xpY2spPVwiY2xvc2VNb2RlbCgnc2F2ZScpXCI+XG5TYXZlXG48L2J1dHRvbj5cblxuPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiBzdHlsZT1cInBhZGRpbmc6MHB4O21hcmdpbjowcHg7bWFyZ2luLXRvcDoxMHB4O2JveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMTkpO3BhZGRpbmctYm90dG9tOjEwcHg7XCI+XG4gIDxzcGFuIGNsYXNzPVwicXRuX3Bvc2l0aW9uXCI+PHNwYW4gY2xhc3M9XCJcIj4je3sgZmllbGQucG9zaXRpb24gfX08L3NwYW4+PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbXBvbmVudFwiID5cblxuICA8c3BhbiBjbGFzcz1cImN1cnNvci1wbnRyXCIgKGNsaWNrKT1cImNvcHlFbGVtZW50KGZpZWxkKVwiPjxpIGNsYXNzPVwiZmEgZmEtY29weVwiPjwvaT48L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIiAoY2xpY2spPVwiZGVsZXRlRWxlbWVudChmaWVsZClcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPiA8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIiAoY2xpY2spPVwibG9hZEZvcm1FbGVtZW50KGZpZWxkKVwiID48L2k+PC9zcGFuPlxuICBcbiAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XG4gICAgPHRleHRib3ggKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cbiAgICA8dGV4dGJveCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvdGV4dGJveD5cbiAgICA8ZGF0ZSAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZGF0ZT5cbiAgICA8c2xpZGVyICpuZ1N3aXRjaENhc2U9XCInc2xpZGVyJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3NsaWRlcj5cbiAgICAgIDxkcm9wZG93biAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2Ryb3Bkb3duPlxuICAgICAgPGNoZWNrYm94ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvY2hlY2tib3g+XG4gICAgICA8cmFkaW8gKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9yYWRpbz5cbiAgICAgIDxsaWItbXVsdGktc2VsZWN0ICpuZ1N3aXRjaENhc2U9XCInbWF0cml4J1wiIChjaGlsZHJlbkRyb3BFdmVudCk9XCJjaGlsZHJlbkRyb3BFdmVudCgkZXZlbnQpXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvbGliLW11bHRpLXNlbGVjdD5cbiAgICAgIDxmaWxlICpuZ1N3aXRjaENhc2U9XCInZmlsZSdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9maWxlPlxuICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+XG4gICAgICAgPC9kaXY+IFxuICAgICAgIDwvZGl2PmAsXG4gIHN0eWxlczogWyBgXG4gIC5xdG5fcG9zaXRpb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweCAwcHggMHB4IDVweDtcbiAgICBjb2xvcjogI2NjYztcbiAgfSBgXG4gXVxufSlcblxuLy8gPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBteS0xIHAtMiBmYWRlSW5Eb3duIGFuaW1hdGVkXCIgKm5nSWY9XCIhaXNWYWxpZCAmJiBpc0RpcnR5XCI+e3tmaWVsZC5sYWJlbH19IGlzIHJlcXVpcmVkPC9kaXY+XG5cbmV4cG9ydCBjbGFzcyBGaWVsZEJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55O1xuXG4gIEBJbnB1dCgpIGNyaXRlcmlhTGlzdDphbnk7XG4gIEBJbnB1dCgpIGZvcm06IGFueTtcblxuICBAT3V0cHV0KCkgc2VuZERhdGFUb1BhcmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBjb3B5T3JEZWxldGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBcbiAgY2xvc2VSZXN1bHQ6IHN0cmluZztcbiAgbW9kYWxSZWZlcmVuY2U6IGFueTtcbiAgcGFnZU51bWJlcjsgYW55O1xuICBsYWJlbDogYW55O1xuICB0eXBlOiBhbnk7XG4gIHBsYWNlaG9sZGVyOiBhbnk7XG4gIG9wdGlvbnM6IGFueTtcbiAgbmV3T3B0aW9uS2V5OiBhbnk7XG4gIG5ld09wdGlvbkxhYmVsOiBhbnk7XG5cbiAgYWN0aXZlTW9kZWxEYXRhOiBhbnk7XG4gIHZhbGlkYXRpb25zOiBhbnk7XG4gIHJlcXVpcmVkOiBhbnk7XG4gIGF1dG9Db2xsZWN0OiBhbnk7XG4gIG9wZW5FZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIF9pZDogYW55O1xuICBkZXNjcmlwdGlvbjogYW55O1xuICBtaW5EYXRlOiBhbnk7XG4gIG1heERhdGU6IGFueTtcbiAgbWluOiBhbnk7XG4gIG1heDogYW55O1xuICBkcmFmdENyaXRlcmlhSWQ6YW55O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYWxsRGF0YTphbnk7XG4gIGN1cnJlbnRTZWxlY3RlZFF0bjphbnk7XG4gIHNlbGVjdGVkT3B0aW9uOmFueTtcblxuICBsaXN0T2ZSZWxhdGlvbjphbnkgPSBbXTtcbiAgY29uZGl0aW9uOmFueTtcblxuICBjb25kaXRpb25NYXRjaFZhbHVlOmFueTtcblxuICBjb25kaXRpb25BcnJheTphbnkgPSBbXG4gICAge1xuICAgIGxhYmVsOlwiZXF1YWxzXCIsXG4gICAgY29uZGl0aW9uOlwiPT09XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOlwiTm90IEVxdWFsIFRvXCIsXG4gICAgICBjb25kaXRpb246XCIhPVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDpcIkdyZWF0ZXIgVGhhblwiLFxuICAgICAgY29uZGl0aW9uOlwiPlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDpcIkxlc3MgVGhhblwiLFxuICAgICAgY29uZGl0aW9uOlwiPFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDpcIkdyZWF0ZXIgVGhhbiBPciBFcXVhbFwiLFxuICAgICAgY29uZGl0aW9uOlwiPj1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6XCJMZXNzIFRoYW4gT3IgRXF1YWxcIixcbiAgICAgIGNvbmRpdGlvbjpcIjw9XCJcbiAgICB9XG4gIF1cblxuXG4gIC8vIHByaXZhdGUgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG15TW9kYWw6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICAgcHJpdmF0ZSBkeW5hbWljU2VydmU6IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2VcbiAgICApIHsgXG5cbiAgICAgfVxuXG4gIC8vIGdldEFsbCgpe1xuICAvLyAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4geyBcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZ2V0IGFsbCBpbmZvXCIsbWVzc2FnZSk7XG5cbiAgLy8gICAgfSk7XG5cbiAgLy8gfSAgIFxuXG5cbiAgcGFyZW50TWFwcGluZygpe1xuXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmRpdGlvbixcImNvbmRpdGlvblwiLHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLFwic2VsZWN0ZWRPcHRpb25cIix0aGlzLnNlbGVjdGVkT3B0aW9uKTtcbiAgICBsZXQgb2JqID0ge31cblxuICAgIC8vIG9wdGlvbjp0aGlzLnNlbGVjdGVkT3B0aW9uLFxuICAgIC8vIHF1ZXN0aW9uOnRoaXMuY3VycmVudFNlbGVjdGVkUXRuXG5cbiAgICAvLyBvYmpbJ3Zpc2libGVJZiddID0gW107XG5cbiAgICBsZXQgY29uZGlPYmogPSB7XG4gICAgICBvcGVyYXRvcjp0aGlzLmNvbmRpdGlvbixcbiAgICAgIHZhbHVlOnRoaXMuY29uZGl0aW9uTWF0Y2hWYWx1ZSxcbiAgICAgIGZpZWxkOnRoaXMuZmllbGQuZmllbGQsXG4gICAgICAvLyBwYXJlbnQ6dGhpcy5zZWxlY3RlZE9wdGlvbi5maWVsZFxuXG4gICAgfVxuXG5cbiAgICBjb25zb2xlLmxvZyhcImNvbmRpT2JqXCIsY29uZGlPYmopO1xuXG4gICAgbGV0IGdldFNlbGVjdFF1ZXN0aW9uID0gdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J10uZmlsdGVyKGVsZSA9PntcbiAgICAgIGlmKGVsZS5maWVsZCA9PSB0aGlzLmZpZWxkLmZpZWxkKXtcbiAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG5cbiAgICBjb25zb2xlLmxvZyhcImdldFNlbGVjdFF1ZXN0aW9uXCIsZ2V0U2VsZWN0UXVlc3Rpb24pO1xuXG4gICAgbGV0IGlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgaWYoIGdldFNlbGVjdFF1ZXN0aW9uWyd2aXNpYmxlSWYnXSAmJiBnZXRTZWxlY3RRdWVzdGlvblsndmlzaWJsZUlmJ10ubGVuZ3RoID4gMCl7XG4gICAgICBpc0F2YWlsYWJsZSA9IGdldFNlbGVjdFF1ZXN0aW9uWyd2aXNpYmxlSWYnXS5maWx0ZXIoaXRlbT0+e1xuICAgICAgICAgICAgaWYoaXRlbS52aXNpYmxlSWYuZmllbGQ9PXRoaXMuZmllbGQuZmllbGQpe1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgbGV0IGFsbERhdGEgPSBbXTtcbiAgIFxuICAgICBhbGxEYXRhID0gdGhpcy5hbGxEYXRhWydxdWVzdGlvbkxpc3QnXVsncXVlc3Rpb25MaXN0J10uZmlsdGVyKGVsZSA9PntcbiAgICAgICAgaWYoZWxlLmZpZWxkID09IHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkKXtcblxuICAgICAgICAgIGlmKGVsZS52aXNpYmxlSWYgJiYgZWxlLnZpc2libGVJZi5sZW5ndGggPiAwICYmICBpc0F2YWlsYWJsZT09ZmFsc2Upe1xuICAgICAgICAgICAgZWxlLnZpc2libGVJZi5wdXNoKGNvbmRpT2JqKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGVsZS52aXNpYmxlSWYgPSBbXTtcbiAgICAgICAgICAgIGVsZS52aXNpYmxlSWYucHVzaChjb25kaU9iaik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHJldHVybiBlbGVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgXG5cblxuICAgIGNvbnNvbGUubG9nKFwiYWxsIGRhdGEgaW4gcXVlc3Rpb25cIixhbGxEYXRhKTtcblxuICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudCgpXG4gICBcblxuICAgIGlmKCF0aGlzLmxpc3RPZlJlbGF0aW9uLmluY2x1ZGVzKGNvbmRpT2JqKSl7XG4gICAgICB0aGlzLmxpc3RPZlJlbGF0aW9uLnB1c2goY29uZGlPYmopO1xuICAgIH0gXG5cbiAgICAgXG5cbiAgICBpZih0aGlzLmNvbmRpdGlvbil7XG5cbiAgICAgIFxuXG5cbiAgICB9XG4gICAgXG5cblxuICAgIC8vICdvcHRpb24nOnRoaXMuc2VsZWN0ZWRPcHRpb24sXG4gICAgLy8gICAgICAgJ3F1ZXN0aW9uJzp0aGlzLmN1cnJlbnRTZWxlY3RlZFF0blxuXG4gICAgLy8gdGhpcy5maWVsZC5jaGlsZFFudCA9IHRoaXMuY3VycmVudFNlbGVjdGVkUXRuLmZpZWxkO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uXCIsdGhpcy5saXN0T2ZSZWxhdGlvbik7XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG5cblxuICAgIC8vIHRoaXMuY3VycmVudFNlbGVjdGVkUXRuID0geyB9O1xuICAgIFxuICAgIC8vIHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgdGhpcy52YWxpZGF0aW9ucyA9IHtcbiAgICAgICdyZWxhdGlvbic6W11cbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zID0ge1xuICAgICAgJ3JlbGF0aW9uJzpbXVxuICB9O1xuXG4gIH1cbiAgbG9hZEZvcm1FbGVtZW50KGl0ZW0pIHtcblxuXG4gICAgdGhpcy5hbGxEYXRhID0gIHRoaXMuZHluYW1pY1NlcnZlLmdldEFMbCgpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5hbGxEYXRhLFwiIGFsbCBxdWVzdGlvbnMgXCIsIHRoaXMuYWxsRGF0YVsncXVlc3Rpb25MaXN0J10pO1xuXG4gICAgLy8gdGhpcy5keW5hbWljU2VydmUuZ2V0QUxsKClcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiaXRlbSAtLS1cIiwgKTtcblxuICAgIHRoaXMuYWN0aXZlTW9kZWxEYXRhID0gXCJcIjtcbiAgICB0aGlzLmxhYmVsID0gaXRlbS5sYWJlbDtcbiAgICB0aGlzLnR5cGUgPSBpdGVtLnR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGl0ZW0ucGxhY2Vob2xkZXI7XG4gICAgdGhpcy5vcHRpb25zID0gaXRlbS5vcHRpb25zO1xuICAgIHRoaXMuZHJhZnRDcml0ZXJpYUlkID0gaXRlbS5kcmFmdENyaXRlcmlhSWQ7XG5cbiAgICBcblxuICAgIHRoaXMucmVxdWlyZWQgPSBpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuICAgIFxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYoaXRlbS52YWxpZGF0aW9ucy5yZWxhdGlvbil7XG4gICAgICB0aGlzLmxpc3RPZlJlbGF0aW9uID0gaXRlbS52YWxpZGF0aW9ucy5yZWxhdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoaXRlbS50eXBlID09IFwiZGF0ZVwiKSB7XG4gICAgICB0aGlzLm1pbkRhdGUgPSBpdGVtLnZhbGlkYXRpb25zLm1pbkRhdGU7XG4gICAgICB0aGlzLm1heERhdGUgPSBpdGVtLnZhbGlkYXRpb25zLm1heERhdGVcbiAgICAgIHRoaXMuYXV0b0NvbGxlY3QgPSBpdGVtLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0O1xuICAgIH1cbiAgICBlbHNlIGlmIChpdGVtLnR5cGUgPT0gXCJzbGlkZXJcIikge1xuICAgICAgdGhpcy5taW4gPSBpdGVtLnZhbGlkYXRpb25zLm1pbjtcbiAgICAgIHRoaXMubWF4ID0gaXRlbS52YWxpZGF0aW9ucy5tYXg7XG4gICAgfVxuXG5cbiAgXG4gICAgdGhpcy5yZXF1aXJlZCA9IHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQ7XG4gICAgY29uc29sZS5sb2coaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMucmVxdWlyZWQsIFwibGFiZWxcIiwgdGhpcy5sYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJsYWJlbFwiLHRoaXMubGFiZWwpO1xuXG4gICAgdGhpcy5vcGVuRWRpdCA9IHRoaXMub3BlbkVkaXQgPyBmYWxzZSA6IHRydWU7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTW9kYWxCdXR0b25cIikuY2xpY2soKTtcbiAgICAvLyB0aGlzLm9wZW4odGhpcy5teU1vZGFsKTtcbiAgICAvLyB0aGlzLm15TW9kYWwuc2hvdygpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBmYWRlIHNob3cnO1xuXG4gIH1cblxuICBzYXZlRWRpdCgpIHtcbiAgfVxuICBjbG9zZU1vZGVsKGFjdGlvbikge1xuXG4gICAgaWYgKGFjdGlvbiA9PSBcInNhdmVcIikge1xuXG5cblxuICAgICAgY29uc29sZS5sb2codGhpcy52YWxpZGF0aW9ucyxcInRoaXMuZmllbGRcIiwgdGhpcy5yZXF1aXJlZCk7XG4gICAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLmNsb3NlKCk7XG5cblxuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEuZmllbGQgPSB0aGlzLmZpZWxkLmZpZWxkO1xuXG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS50eXBlID0gdGhpcy50eXBlO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgdmFsaWRhdGlvbnM6IHRoaXMudmFsaWRhdGlvbnMsXG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICBfaWQ6IHRoaXMuX2lkLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgZHJhZnRDcml0ZXJpYUlkOnRoaXMuZHJhZnRDcml0ZXJpYUlkLFxuICAgICAgICBcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgb2JqWydtaW5EYXRlJ10gPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIG9ialsnbWF4RGF0ZSddID0gdGhpcy5tYXhEYXRlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgICBvYmpbJ21pbiddID0gdGhpcy5taW47XG4gICAgICAgIG9ialsnbWF4J10gPSB0aGlzLm1heDtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coXCJvYmpcIixvYmopO1xuXG5cbiAgICBcblxuICAgICAgLy8gdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG5cblxuICAgICAgdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICB0aGlzLmZpZWxkLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICB0aGlzLmZpZWxkLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIHRoaXMuZmllbGQub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIHRoaXMuZmllbGQuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5maWVsZC5kcmFmdENyaXRlcmlhSWQgPSB0aGlzLmRyYWZ0Q3JpdGVyaWFJZDtcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMuYXV0b0NvbGxlY3QgPSB0aGlzLmF1dG9Db2xsZWN0O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5taW4gPSB0aGlzLm1pbjtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5tYXggPSB0aGlzLm1heDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYodGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZWxhdGlvbil7XG5cbiAgICAgIGlmKHRoaXMubGlzdE9mUmVsYXRpb24pe1xuICAgICAgICBvYmoudmFsaWRhdGlvbnMucmVsYXRpb24gPSB0aGlzLmxpc3RPZlJlbGF0aW9uO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlbGF0aW9uID0gdGhpcy5saXN0T2ZSZWxhdGlvbjtcbiAgICAgIH1cbiAgICAgICAgXG4gICAgICAvLyB9XG5cbiAgICAgIFxuXG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbGlkYXRpb25zXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWRcIiwgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJzZGRzXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcblxuXG4gICAgICBjb25zb2xlLmxvZyhvYmosXCJ0aGlzLmZpZWxkLnZhbGlkYXRpb25zXCIsdGhpcy5maWVsZC52YWxpZGF0aW9ucyk7XG4gICAgICBsZXQgb3AgPSB7XG4gICAgICAgIGFjdGlvbjpcInNhdmVcIixcbiAgICAgICAgZGF0YTpvYmpcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQob3ApO1xuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGRcIiwgdGhpcy5maWVsZCk7XG4gICAgICB0aGlzLm9wZW5FZGl0ID0gZmFsc2U7XG5cbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KHRoaXMuYWN0aXZlTW9kZWxEYXRhKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMub3BlbkVkaXQgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLm1vZGFsU2VydmljZS5jbG9zZSgpO1xuICAgIC8vICB0aGlzLm15TW9kYWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnbW9kYWwgaGlkZSc7XG4gIH1cblxuICBvcGVuKGNvbnRlbnQpIHtcblxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmFjdGl2ZU1vZGVsRGF0YVwiLCBzZWxlY3RlZERhdGEpO1xuICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQpO1xuICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIC8vICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBDbG9zZWQgd2l0aGA7XG4gICAgLy8gfSwgKHJlYXNvbikgPT4ge1xuICAgIC8vICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBEaXNtaXNzZWRgO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBnZXREaXNtaXNzUmVhc29uKHJlYXNvbjogYW55KTogc3RyaW5nIHtcbiAgLy8gICAvLyBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkVTQykge1xuICAvLyAgIC8vICAgcmV0dXJuICdieSBwcmVzc2luZyBFU0MnO1xuICAvLyAgIC8vIH0gZWxzZSBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkJBQ0tEUk9QX0NMSUNLKSB7XG4gIC8vICAgLy8gICByZXR1cm4gJ2J5IGNsaWNraW5nIG9uIGEgYmFja2Ryb3AnO1xuICAvLyAgIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gICByZXR1cm4gYHdpdGg6ICR7cmVhc29ufWA7XG4gIC8vICAgLy8gfVxuICAvLyB9XG5cbiAgZGVsZXRlT3B0aW9uKG9wdCwgaW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gbGV0IG5ld0FyciA9IFtdO1xuICAgIGxldCBvcHRpb25zQXJyID0gdGhpcy5vcHRpb25zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIC8vIGlmKGl0ZW0ubGFibGU9PW9wdC5sYWJlbCAmJiBpdGVtLmtleT09b3B0LmtleSl7XG5cbiAgICAgIC8vIH1lbHNle1xuXG4gICAgICAvLyB9XG5cbiAgICAgIHJldHVybiAoaXRlbS5sYWJlbCAhPSBvcHQubGFiZWwgJiYgaXRlbS5rZXkgIT0gb3B0LmtleSlcblxuICAgICAgLy8gaWYoaXRlbS5sYWJsZT09b3B0LmxhYmVsICYmIGl0ZW0ua2V5PT1vcHQua2V5KXtcblxuICAgICAgLy8gfWVsc2V7XG4gICAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gfVxuICAgIH0pXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zQXJyO1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIG5ldyBcIiwgb3B0aW9uc0Fycik7XG4gIH1cbiAgQWRkTmV3T3B0aW9ucygpIHtcblxuICAgIGlmICh0aGlzLm5ld09wdGlvbktleSAhPSBcIlwiICYmIHRoaXMubmV3T3B0aW9uTGFiZWwgIT0gXCJcIikge1xuXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMubmV3T3B0aW9uXCIsIHRoaXMubmV3T3B0aW9uTGFiZWwpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMpKSB7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zLnB1c2goe1xuICAgICAgICBrZXk6IHRoaXMubmV3T3B0aW9uS2V5LFxuICAgICAgICBsYWJlbDogdGhpcy5uZXdPcHRpb25MYWJlbFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5vcHRpb25zLnB1c2hcIiwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5uZXdPcHRpb25LZXkgPSBcIlwiO1xuICAgIHRoaXMubmV3T3B0aW9uTGFiZWwgPSBcIlwiO1xuICB9XG5cbiAgY29weUVsZW1lbnQoaXRlbSkge1xuICAgIC8vIHRoaXMuZmllbGQucHVzaChpdGVtKTtcbiAgICBpdGVtLmFjdGlvbiA9ICdjb3B5JztcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIC0tLS0tLS0tLS1cIiwgaXRlbSk7XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KGl0ZW0pO1xuXG4gIH1cbiAgZGVsZXRlRWxlbWVudChpdGVtKSB7XG5cbiAgICBpdGVtLmFjdGlvbiA9ICdkZWxldGUnO1xuICAgIHRoaXMuZmllbGQuaXNEZWxldGUgPSB0cnVlO1xuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQuZW1pdChpdGVtKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkIGRlbGV0ZVwiLCB0aGlzLmZpZWxkKTtcblxuICB9XG4gIGNoaWxkcmVuRHJvcEV2ZW50KCRldmVudCl7XG4gICAgY29uc29sZS5sb2coXCJjaGlsZHJlbkRyb3BFdmVudFwiLCB0aGlzLmZpZWxkKTtcbiAgICAvLyBjb25zdCBhY3Rpb24gID0gJ2NoaWxkRHJvcGVkJztcbiAgICBsZXQgbmV3T2JqID0ge1xuICAgICAgYWN0aW9uIDogJ2NoaWxkRHJvcGVkJyxcbiAgICAgIGRhdGE6JGV2ZW50XG4gICAgfVxuICAgXG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KEpTT04uc3RyaW5naWZ5KG5ld09iaikpO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgZGVsZXRlXCIsIHRoaXMuZmllbGQpO1xuICB9XG59XG5cbiJdfQ==