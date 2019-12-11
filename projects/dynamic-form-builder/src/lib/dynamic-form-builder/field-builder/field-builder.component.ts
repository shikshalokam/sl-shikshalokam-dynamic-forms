import { Component, Input, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
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
  box-shadow:0 4px 8px rgba(0,0,0,0.19), 0 2px 0px rgba(0,0,0,0.23);margin-left: 0px;
  margin-right: 0px;">

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
  <div class="form-group row" [formGroup]="form" style="background:#def9d8f5;padding:10px;margin:0px;margin-top:10px;box-shadow:0 0px 0px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23)">
  
  


  <div class="col-sm-2 edit-icon" ><i class="fa fa-edit" (click)="loadFormElement(field)" ></i></div>
    <label class="col-md-12 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
    <div class="col-md-12" [ngSwitch]="field.type">
    <textbox *ngSwitchCase="'number'" [field]="field" [form]="form"></textbox>
    <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
    <date *ngSwitchCase="'date'" [field]="field" [form]="form"></date>
    <slider *ngSwitchCase="'slider'" [field]="field" [form]="form"></slider>
      <dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></dropdown>
      <checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></checkbox>
      <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
      <file *ngSwitchCase="'file'" [field]="field" [form]="form"></file>
      <div style="float:right">
          <span class="cursor-pntr" (click)="copyElement(field)"><i class="fa fa-copy"></i></span>
          <span class="cursor-pntr" (click)="deleteElement(field)"><i class="fa fa-trash"></i> </span>
       </div> 
       </div>`,
  styleUrls: []
})

// <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>

export class FieldBuilderComponent implements OnInit {
  @Input() field: any;
  @Input() form: any;

  @Output() sendDataToParent = new EventEmitter<string>();

  @Output() copyOrDeleteEvent = new EventEmitter<string>();

  closeResult: string;
  modalReference: any;
  pageNumber; any;
  label: any;
  type: any;
  placeholder: any;
  options: any;
  newOptionKey: any;
  newOptionLabel: any;

  activeModelData: any;
  validations: any;
  required: any;
  autoCollect: any;
  openEdit: boolean = false;
  _id: any;
  description: any;
  minDate: any;
  maxDate: any;
  min: any;
  max: any;


  // private modalRef: NgbModalRef;
  @ViewChild('content', { static: false }) myModal: ElementRef;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor(
    // private modalService: NgbModal
  ) { }

  ngOnInit() {

    this.options = [];
    this.validations = {}
  }



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
      this.maxDate = item.validations.maxDate
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

  saveEdit() {
  }
  closeModel(action) {

    if (action == "save") {



      console.log("this.field", this.required);
      // this.modalReference.close();


      // this.activeModelData.field = this.field.field;

      // this.activeModelData.label = this.label;
      // this.activeModelData.type = this.type;
      // this.activeModelData.placeholder = this.placeholder;
      // this.activeModelData.options = this.options;

      let obj = {
        label: this.label,
        type: this.type,
        placeholder: this.placeholder,
        options: this.options,
        validations: this.validations,
        field: this.field,
        _id: this._id,
        description: this.description
      }

      if (this.type == 'date') {
        obj['minDate'] = this.minDate;
        obj['maxDate'] = this.maxDate
      } else if (this.type == 'slider') {
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
      } else if (this.type == 'slider') {
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

    } else {

      this.openEdit = false;
      // this.modalReference.close();
    }

    // this.modalService.close();
    //  this.myModal.nativeElement.className = 'modal hide';
  }

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

  deleteOption(opt, index) {
    console.log("delete", this.options);

    // let newArr = [];
    let optionsArr = this.options.filter(item => {
      // if(item.lable==opt.label && item.key==opt.key){

      // }else{

      // }

      return (item.label != opt.label && item.key != opt.key)

      // if(item.lable==opt.label && item.key==opt.key){

      // }else{
      //   return true;
      // }
    })

    this.options = optionsArr;
    console.log("delete new ", optionsArr);
  }
  AddNewOptions() {

    if (this.newOptionKey != "" && this.newOptionLabel != "") {

      console.log("this.newOption", this.newOptionLabel);

      if (Array.isArray(this.options)) {

      } else {
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

  copyElement(item) {
    // this.field.push(item);
    item.action = 'copy';
    console.log("field ----------", item);
    this.copyOrDeleteEvent.emit(item);

  }
  deleteElement(item) {

    item.action = 'delete';
    this.field.isDelete = true;
    this.copyOrDeleteEvent.emit(item);
    console.log("field delete", this.field);

  }
}

