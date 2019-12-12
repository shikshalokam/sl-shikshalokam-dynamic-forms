/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/field-builder/field-builder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
// <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>
export class FieldBuilderComponent {
    constructor() {
        this.sendDataToParent = new EventEmitter();
        this.copyOrDeleteEvent = new EventEmitter();
        this.openEdit = false;
    }
    /**
     * @return {?}
     */
    get isValid() { return this.form.controls[this.field.name].valid; }
    /**
     * @return {?}
     */
    get isDirty() { return this.form.controls[this.field.name].dirty; }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.options = [];
        this.validations = {};
    }
    /**
     * @param {?} item
     * @return {?}
     */
    loadFormElement(item) {
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
            console.log("this.field", this.required);
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
  .edit-icon {
    position: relative;
  width: 36px;
  max-width: 57px;
  right: 0px;
  left: 94%;
  top: 25px;cursor: pointer;z-index: 100;
}
  </style>
  <div class="row"  *ngIf="openEdit" style="padding: 20px;
  border: 1px solid #ccc;margin-top:10px;
  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);">

    <div class="col-sm-7 form-group">
      <mat-form-field>
        <input matInput placeholder="Label" [(ngModel)]="label" name="label">
      </mat-form-field>
    </div>

    <div class="col-sm-7 form-group">
      <mat-form-field>
        <input matInput placeholder="Input Place Holder" [(ngModel)]="placeholder" name="placeholder">
      </mat-form-field>
    </div>

    <div class="col-sm-7 form-group">
      <mat-form-field>
        <input matInput placeholder="Hint/Description" [(ngModel)]="description" name="placeholder">
      </mat-form-field>
    </div>

<div class="col-sm-7 form-group">
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

<div class="col-sm-7 form-group">
<mat-form-field>
<mat-label>Pages</mat-label>
  <mat-select  [(ngModel)]="pageNumber">
    <mat-option value="page_1">page 1</mat-option>
    <mat-option value="page_2">page 2</mat-option>
    <mat-option value="page_3">page 3</mat-option>
  </mat-select>
</mat-form-field>
</div>

    <div class="col-sm-7 form-group" *ngIf="type=='slider'">
    <mat-form-field>
    <input type="text" placeholder="Min" matInput  [(ngModel)]="min" name="min value">
    </mat-form-field>
    </div>

    <div class="col-sm-7 form-group" *ngIf="type=='slider'">
    <mat-form-field>
    <input type="text" placeholder="Max" matInput  [(ngModel)]="max" name="min value">
    </mat-form-field>
    </div>
    
  <div class="col-sm-12 form-group" *ngIf="type=='date'">
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
    <div class="col-sm-12 form-group" *ngIf="type=='radio' || type=='checkbox' || type=='dropdown'">
    <label for="label" class="col-sm-12">Options</label>
    
    <ul class="col" *ngFor="let opt of options;let index">
     <li class="">
      <span>{{opt.label}} </span><span style="
      margin-left: 30px;" (click)="deleteOption(opt,index)">
      <i class="fa fa-close" style="font-size:36px;color:red"></i></span>
    </li>
    
    </ul>

    <div class="col-sm-7 form-group" *ngIf="type=='slider'">
    <mat-form-field>
    <input type="text" placeholder="Max" matInput  [(ngModel)]="max" name="min value">
    </mat-form-field>
    </div>

    <div class="col-sm-7 form-group">
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

    
<div class="col-sm-7">
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

<div class="col-sm-7" *ngIf="type=='date'">
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
  <div class="form-group row" [formGroup]="form" style="padding:10px;margin:0px;margin-top:10px;box-shadow:0 0px 0px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23)">
  <div class="col-sm-2 edit-icon" ><i class="fa fa-edit" (click)="loadFormElement(field)" ></i></div>
    <div class="col-md-12" [ngSwitch]="field.type">
    <textbox *ngSwitchCase="'number'" [field]="field" [form]="form"></textbox>
    <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
    <date *ngSwitchCase="'date'" [field]="field" [form]="form"></date>
    <slider *ngSwitchCase="'slider'" [field]="field" [form]="form"></slider>
      <dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></dropdown>
      <checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></checkbox>
      <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
      <lib-multi-select *ngSwitchCase="'multiselect'" (childrenDropEvent)="childrenDropEvent($event)" [field]="field" [form]="form"></lib-multi-select>
      <file *ngSwitchCase="'file'" [field]="field" [form]="form"></file>
      <div style="float:right">
          <span class="cursor-pntr" (click)="copyElement(field)"><i class="fa fa-copy"></i></span>
          <span class="cursor-pntr" (click)="deleteElement(field)"><i class="fa fa-trash"></i> </span>
       </div> 
       </div>`,
                styleUrls: []
            },] },
];
/** @nocollapse */
FieldBuilderComponent.ctorParameters = () => [];
FieldBuilderComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }],
    sendDataToParent: [{ type: Output }],
    copyOrDeleteEvent: [{ type: Output }],
    myModal: [{ type: ViewChild, args: ['content', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8iLCJzb3VyY2VzIjpbImxpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbU50Ryw2SEFBNkg7QUFFN0gsTUFBTSxPQUFPLHFCQUFxQjtJQXFDaEM7UUFqQ1UscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU5QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBZ0J6RCxhQUFRLEdBQVksS0FBSyxDQUFDO0lBaUJ0QixDQUFDOzs7O0lBTEwsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7SUFDbkUsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7SUFNbkUsUUFBUTtRQUVOLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7Ozs7O0lBSUQsZUFBZSxDQUFDLElBQUk7UUFHbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtB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RXBCLGdEQUFxQjs7SUFDckIsNENBQWlCOztJQUNqQix5Q0FBYzs7SUFDZCw0Q0FBaUI7O0lBQ2pCLHlDQUEwQjs7SUFDMUIsb0NBQVM7O0lBQ1QsNENBQWlCOztJQUNqQix3Q0FBYTs7SUFDYix3Q0FBYTs7SUFDYixvQ0FBUzs7SUFDVCxvQ0FBUzs7SUFJVCx3Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IE5nYk1vZGFsLCBNb2RhbERpc21pc3NSZWFzb25zIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVEhJU19FWFBSIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL291dHB1dC9vdXRwdXRfYXN0JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWVsZC1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHN0eWxlPlxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICBtaW4td2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBibG9jaztcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdpZHRoOiAzNzJweDtcbiAgfVxuICAuaW5wdXQtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLmVkaXQtaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzZweDtcbiAgbWF4LXdpZHRoOiA1N3B4O1xuICByaWdodDogMHB4O1xuICBsZWZ0OiA5NCU7XG4gIHRvcDogMjVweDtjdXJzb3I6IHBvaW50ZXI7ei1pbmRleDogMTAwO1xufVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwicm93XCIgICpuZ0lmPVwib3BlbkVkaXRcIiBzdHlsZT1cInBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7bWFyZ2luLXRvcDoxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgWyhuZ01vZGVsKV09XCJsYWJlbFwiIG5hbWU9XCJsYWJlbFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIklucHV0IFBsYWNlIEhvbGRlclwiIFsobmdNb2RlbCldPVwicGxhY2Vob2xkZXJcIiBuYW1lPVwicGxhY2Vob2xkZXJcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJIaW50L0Rlc2NyaXB0aW9uXCIgWyhuZ01vZGVsKV09XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJwbGFjZWhvbGRlclwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPklucHV0IFR5cGU8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCAgWyhuZ01vZGVsKV09XCJ0eXBlXCI+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0PC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJudW1iZXJcIj5udW1iZXI8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+cmFkaW88L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5kYXRlPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuPG1hdC1mb3JtLWZpZWxkPlxuPG1hdC1sYWJlbD5QYWdlczwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCAgWyhuZ01vZGVsKV09XCJwYWdlTnVtYmVyXCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzFcIj5wYWdlIDE8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzJcIj5wYWdlIDI8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzNcIj5wYWdlIDM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1pblwiIG1hdElucHV0ICBbKG5nTW9kZWwpXT1cIm1pblwiIG5hbWU9XCJtaW4gdmFsdWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWF4XCIgbWF0SW5wdXQgIFsobmdNb2RlbCldPVwibWF4XCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZm9ybS1ncm91cFwiICpuZ0lmPVwidHlwZT09J2RhdGUnXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFsobmdNb2RlbCldPVwibWluRGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWluIGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyTWF4RGF0ZVwiIFsobmdNb2RlbCldPVwibWF4RGF0ZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWF4IGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyTWF4RGF0ZVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXJNYXhEYXRlPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0ncmFkaW8nIHx8IHR5cGU9PSdjaGVja2JveCcgfHwgdHlwZT09J2Ryb3Bkb3duJ1wiPlxuICAgIDxsYWJlbCBmb3I9XCJsYWJlbFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+T3B0aW9uczwvbGFiZWw+XG4gICAgXG4gICAgPHVsIGNsYXNzPVwiY29sXCIgKm5nRm9yPVwibGV0IG9wdCBvZiBvcHRpb25zO2xldCBpbmRleFwiPlxuICAgICA8bGkgY2xhc3M9XCJcIj5cbiAgICAgIDxzcGFuPnt7b3B0LmxhYmVsfX0gPC9zcGFuPjxzcGFuIHN0eWxlPVwiXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcIiAoY2xpY2spPVwiZGVsZXRlT3B0aW9uKG9wdCxpbmRleClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIiBzdHlsZT1cImZvbnQtc2l6ZTozNnB4O2NvbG9yOnJlZFwiPjwvaT48L3NwYW4+XG4gICAgPC9saT5cbiAgICBcbiAgICA8L3VsPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWF4XCIgbWF0SW5wdXQgIFsobmdNb2RlbCldPVwibWF4XCIgbmFtZT1cIm1pbiB2YWx1ZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgbWF0SW5wdXQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4O1wiIFsobmdNb2RlbCldPVwibmV3T3B0aW9uTGFiZWxcIiBuYW1lPVwibmV3T3B0aW9uXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXhcIiBtYXRJbnB1dCBuYW1lPVwibmV3T3B0aW9uXCIgcGxhY2Vob2xkZXI9XCJrZXlcIiAgWyhuZ01vZGVsKV09XCJuZXdPcHRpb25LZXlcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPiAgXG4gICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgIChjbGljayk9XCJBZGROZXdPcHRpb25zKClcIj5cbiAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICBcbiAgICBcbiAgICA8L2Rpdj5cblxuICAgIFxuPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XG48bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgUmVxaXJlZCA/PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwicmVxdWlyZWRcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICBZZXNcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICBOb1xuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTdcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuPGxhYmVsIGlkPVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiPmlzIGF1dG9Db2xsZWN0PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiXG4gIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwiYXV0b0NvbGxlY3RcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICBUcnVlXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09ZmFsc2U+XG4gICAgRmFsc2VcbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48L2Rpdj5cblxuICBcbjxkaXYgIGNsYXNzPVwiY29sLXNtLTEyXCI+XG5cbjxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjEwcHg7XCIgIChjbGljayk9XCJjbG9zZU1vZGVsKCdzYXZlJylcIj5cblNhdmVcbjwvYnV0dG9uPlxuXG48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIHN0eWxlPVwicGFkZGluZzoxMHB4O21hcmdpbjowcHg7bWFyZ2luLXRvcDoxMHB4O2JveC1zaGFkb3c6MCAwcHggMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMjMpXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMiBlZGl0LWljb25cIiA+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCIgKGNsaWNrKT1cImxvYWRGb3JtRWxlbWVudChmaWVsZClcIiA+PC9pPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIiBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxuICAgIDx0ZXh0Ym94ICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3RleHRib3g+XG4gICAgPHRleHRib3ggKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L3RleHRib3g+XG4gICAgPGRhdGUgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2RhdGU+XG4gICAgPHNsaWRlciAqbmdTd2l0Y2hDYXNlPVwiJ3NsaWRlcidcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9zbGlkZXI+XG4gICAgICA8ZHJvcGRvd24gKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9kcm9wZG93bj5cbiAgICAgIDxjaGVja2JveCAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIj48L2NoZWNrYm94PlxuICAgICAgPHJhZGlvICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvcmFkaW8+XG4gICAgICA8bGliLW11bHRpLXNlbGVjdCAqbmdTd2l0Y2hDYXNlPVwiJ211bHRpc2VsZWN0J1wiIChjaGlsZHJlbkRyb3BFdmVudCk9XCJjaGlsZHJlbkRyb3BFdmVudCgkZXZlbnQpXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiPjwvbGliLW11bHRpLXNlbGVjdD5cbiAgICAgIDxmaWxlICpuZ1N3aXRjaENhc2U9XCInZmlsZSdcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCI+PC9maWxlPlxuICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXJzb3ItcG50clwiIChjbGljayk9XCJjb3B5RWxlbWVudChmaWVsZClcIj48aSBjbGFzcz1cImZhIGZhLWNvcHlcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Vyc29yLXBudHJcIiAoY2xpY2spPVwiZGVsZXRlRWxlbWVudChmaWVsZClcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPiA8L3NwYW4+XG4gICAgICAgPC9kaXY+IFxuICAgICAgIDwvZGl2PmAsXG4gIHN0eWxlVXJsczogW11cbn0pXG5cbi8vIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgbXktMSBwLTIgZmFkZUluRG93biBhbmltYXRlZFwiICpuZ0lmPVwiIWlzVmFsaWQgJiYgaXNEaXJ0eVwiPnt7ZmllbGQubGFiZWx9fSBpcyByZXF1aXJlZDwvZGl2PlxuXG5leHBvcnQgY2xhc3MgRmllbGRCdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmllbGQ6IGFueTtcbiAgQElucHV0KCkgZm9ybTogYW55O1xuXG4gIEBPdXRwdXQoKSBzZW5kRGF0YVRvUGFyZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQE91dHB1dCgpIGNvcHlPckRlbGV0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIFxuICBjbG9zZVJlc3VsdDogc3RyaW5nO1xuICBtb2RhbFJlZmVyZW5jZTogYW55O1xuICBwYWdlTnVtYmVyOyBhbnk7XG4gIGxhYmVsOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgcGxhY2Vob2xkZXI6IGFueTtcbiAgb3B0aW9uczogYW55O1xuICBuZXdPcHRpb25LZXk6IGFueTtcbiAgbmV3T3B0aW9uTGFiZWw6IGFueTtcblxuICBhY3RpdmVNb2RlbERhdGE6IGFueTtcbiAgdmFsaWRhdGlvbnM6IGFueTtcbiAgcmVxdWlyZWQ6IGFueTtcbiAgYXV0b0NvbGxlY3Q6IGFueTtcbiAgb3BlbkVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2lkOiBhbnk7XG4gIGRlc2NyaXB0aW9uOiBhbnk7XG4gIG1pbkRhdGU6IGFueTtcbiAgbWF4RGF0ZTogYW55O1xuICBtaW46IGFueTtcbiAgbWF4OiBhbnk7XG5cblxuICAvLyBwcml2YXRlIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBteU1vZGFsOiBFbGVtZW50UmVmO1xuXG4gIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgdGhpcy52YWxpZGF0aW9ucyA9IHt9XG4gIH1cblxuXG5cbiAgbG9hZEZvcm1FbGVtZW50KGl0ZW0pIHtcblxuXG4gICAgY29uc29sZS5sb2coXCJpdGVtIC0tLVwiLCBpdGVtKTtcblxuICAgIHRoaXMuYWN0aXZlTW9kZWxEYXRhID0gXCJcIjtcbiAgICB0aGlzLmxhYmVsID0gaXRlbS5sYWJlbDtcbiAgICB0aGlzLnR5cGUgPSBpdGVtLnR5cGU7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IGl0ZW0ucGxhY2Vob2xkZXI7XG4gICAgdGhpcy5vcHRpb25zID0gaXRlbS5vcHRpb25zO1xuICAgIHRoaXMuX2lkID0gaXRlbS5faWQ7XG5cbiAgICB0aGlzLnJlcXVpcmVkID0gaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZDtcbiAgICBcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIGlmIChpdGVtLnR5cGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIHRoaXMubWluRGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWluRGF0ZTtcbiAgICAgIHRoaXMubWF4RGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWF4RGF0ZVxuICAgICAgdGhpcy5hdXRvQ29sbGVjdCA9IGl0ZW0udmFsaWRhdGlvbnMuYXV0b0NvbGxlY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW0udHlwZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICB0aGlzLm1pbiA9IGl0ZW0udmFsaWRhdGlvbnMubWluO1xuICAgICAgdGhpcy5tYXggPSBpdGVtLnZhbGlkYXRpb25zLm1heDtcbiAgICB9XG5cbiAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZDtcbiAgICBcblxuXG4gICAgY29uc29sZS5sb2coaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMucmVxdWlyZWQsIFwibGFiZWxcIiwgdGhpcy5sYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJsYWJlbFwiLHRoaXMubGFiZWwpO1xuXG4gICAgdGhpcy5vcGVuRWRpdCA9IHRoaXMub3BlbkVkaXQgPyBmYWxzZSA6IHRydWU7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTW9kYWxCdXR0b25cIikuY2xpY2soKTtcbiAgICAvLyB0aGlzLm9wZW4odGhpcy5teU1vZGFsKTtcbiAgICAvLyB0aGlzLm15TW9kYWwuc2hvdygpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBmYWRlIHNob3cnO1xuXG4gIH1cblxuICBzYXZlRWRpdCgpIHtcbiAgfVxuICBjbG9zZU1vZGVsKGFjdGlvbikge1xuXG4gICAgaWYgKGFjdGlvbiA9PSBcInNhdmVcIikge1xuXG5cblxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuXG5cbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmZpZWxkID0gdGhpcy5maWVsZC5maWVsZDtcblxuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEudHlwZSA9IHRoaXMudHlwZTtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIGxldCBvYmogPSB7XG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHZhbGlkYXRpb25zOiB0aGlzLnZhbGlkYXRpb25zLFxuICAgICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgICAgX2lkOiB0aGlzLl9pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb25cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgb2JqWydtaW5EYXRlJ10gPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIG9ialsnbWF4RGF0ZSddID0gdGhpcy5tYXhEYXRlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgICBvYmpbJ21pbiddID0gdGhpcy5taW47XG4gICAgICAgIG9ialsnbWF4J10gPSB0aGlzLm1heDtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coXCJvYmpcIixvYmopO1xuXG5cbiAgICAgIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXG5cbiAgICAgIC8vIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuXG5cbiAgICAgIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgdGhpcy5maWVsZC50eXBlID0gdGhpcy50eXBlO1xuICAgICAgdGhpcy5maWVsZC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICB0aGlzLmZpZWxkLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICB0aGlzLmZpZWxkLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMuYXV0b0NvbGxlY3QgPSB0aGlzLmF1dG9Db2xsZWN0O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5taW4gPSB0aGlzLm1pbjtcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5tYXggPSB0aGlzLm1heDtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5maWVsZC52YWxpZGF0aW9uc1xuXG4gICAgICBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQsIFwic2Rkc1wiLCB0aGlzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkO1xuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG4gICAgICBcblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgIHRoaXMub3BlbkVkaXQgPSBmYWxzZTtcblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQodGhpcy5hY3RpdmVNb2RlbERhdGEpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5vcGVuRWRpdCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKCk7XG4gICAgLy8gIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBoaWRlJztcbiAgfVxuXG4gIG9wZW4oY29udGVudCkge1xuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuYWN0aXZlTW9kZWxEYXRhXCIsIHNlbGVjdGVkRGF0YSk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZSA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCk7XG4gICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYENsb3NlZCB3aXRoYDtcbiAgICAvLyB9LCAocmVhc29uKSA9PiB7XG4gICAgLy8gICB0aGlzLmNsb3NlUmVzdWx0ID0gYERpc21pc3NlZGA7XG4gICAgLy8gfSk7XG4gIH1cblxuICAvLyBwcml2YXRlIGdldERpc21pc3NSZWFzb24ocmVhc29uOiBhbnkpOiBzdHJpbmcge1xuICAvLyAgIC8vIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuRVNDKSB7XG4gIC8vICAgLy8gICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XG4gIC8vICAgLy8gfSBlbHNlIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuQkFDS0RST1BfQ0xJQ0spIHtcbiAgLy8gICAvLyAgIHJldHVybiAnYnkgY2xpY2tpbmcgb24gYSBiYWNrZHJvcCc7XG4gIC8vICAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyAgIHJldHVybiBgd2l0aDogJHtyZWFzb259YDtcbiAgLy8gICAvLyB9XG4gIC8vIH1cblxuICBkZWxldGVPcHRpb24ob3B0LCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBsZXQgbmV3QXJyID0gW107XG4gICAgbGV0IG9wdGlvbnNBcnIgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgLy8gaWYoaXRlbS5sYWJsZT09b3B0LmxhYmVsICYmIGl0ZW0ua2V5PT1vcHQua2V5KXtcblxuICAgICAgLy8gfWVsc2V7XG5cbiAgICAgIC8vIH1cblxuICAgICAgcmV0dXJuIChpdGVtLmxhYmVsICE9IG9wdC5sYWJlbCAmJiBpdGVtLmtleSAhPSBvcHQua2V5KVxuXG4gICAgICAvLyBpZihpdGVtLmxhYmxlPT1vcHQubGFiZWwgJiYgaXRlbS5rZXk9PW9wdC5rZXkpe1xuXG4gICAgICAvLyB9ZWxzZXtcbiAgICAgIC8vICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyB9XG4gICAgfSlcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNBcnI7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGUgbmV3IFwiLCBvcHRpb25zQXJyKTtcbiAgfVxuICBBZGROZXdPcHRpb25zKCkge1xuXG4gICAgaWYgKHRoaXMubmV3T3B0aW9uS2V5ICE9IFwiXCIgJiYgdGhpcy5uZXdPcHRpb25MYWJlbCAhPSBcIlwiKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5uZXdPcHRpb25cIiwgdGhpcy5uZXdPcHRpb25MYWJlbCk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucykpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMucHVzaCh7XG4gICAgICAgIGtleTogdGhpcy5uZXdPcHRpb25LZXksXG4gICAgICAgIGxhYmVsOiB0aGlzLm5ld09wdGlvbkxhYmVsXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm9wdGlvbnMucHVzaFwiLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLm5ld09wdGlvbktleSA9IFwiXCI7XG4gICAgdGhpcy5uZXdPcHRpb25MYWJlbCA9IFwiXCI7XG4gIH1cblxuICBjb3B5RWxlbWVudChpdGVtKSB7XG4gICAgLy8gdGhpcy5maWVsZC5wdXNoKGl0ZW0pO1xuICAgIGl0ZW0uYWN0aW9uID0gJ2NvcHknO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgLS0tLS0tLS0tLVwiLCBpdGVtKTtcbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQoaXRlbSk7XG5cbiAgfVxuICBkZWxldGVFbGVtZW50KGl0ZW0pIHtcblxuICAgIGl0ZW0uYWN0aW9uID0gJ2RlbGV0ZSc7XG4gICAgdGhpcy5maWVsZC5pc0RlbGV0ZSA9IHRydWU7XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudC5lbWl0KGl0ZW0pO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGQgZGVsZXRlXCIsIHRoaXMuZmllbGQpO1xuXG4gIH1cbiAgY2hpbGRyZW5Ecm9wRXZlbnQoJGV2ZW50KXtcbiAgICBjb25zb2xlLmxvZyhcImNoaWxkcmVuRHJvcEV2ZW50XCIsIHRoaXMuZmllbGQpO1xuICAgIC8vIGNvbnN0IGFjdGlvbiAgPSAnY2hpbGREcm9wZWQnO1xuICAgIGxldCBuZXdPYmogPSB7XG4gICAgICBhY3Rpb24gOiAnY2hpbGREcm9wZWQnLFxuICAgICAgZGF0YTokZXZlbnRcbiAgICB9XG4gICBcbiAgICB0aGlzLmNvcHlPckRlbGV0ZUV2ZW50LmVtaXQoSlNPTi5zdHJpbmdpZnkobmV3T2JqKSk7XG4gICAgY29uc29sZS5sb2coXCJmaWVsZCBkZWxldGVcIiwgdGhpcy5maWVsZCk7XG4gIH1cbn1cblxuIl19