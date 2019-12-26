import { Component, Input, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DynamicFormBuilderService } from '../../dynamic-form-builder.service';
import { Subscription } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';




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
</mat-form-field>
</div>
<div class="col-sm-1">
<span style = "float:right;padding-top:25px" class="cursor-pntr"><i title="Add Page" class="fa fa-plus" (click)="add(pages)" ></i></span>
</div>
 
<div class="col-sm-6">
<mat-form-field>
<mat-label>Criteria</mat-label>
  <mat-select  [(ngModel)]="draftCriteriaId">
    <mat-option *ngFor="let item of criteriaList" [value]="item._id">{{ item.name}}</mat-option>
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
})

// <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>

export class FieldBuilderComponent implements OnInit {
  @Input() field: any;

  @Input() criteriaList: any;
  @Input() form: any;

  @Output() sendDataToParent = new EventEmitter<any>();

  @Output() copyOrDeleteEvent = new EventEmitter<any>();
  filtereddata: any;
  getSelectQuestion: any;
  closeResult: string;
  modalReference: any;
  pageNumber; any;
  label: any;
  type: any;
  placeholder: any;
  options: any;
  newOptionKey: any;
  newOptionLabel: any;

  pages = [{
    label: 'page 1',
    value: 'page 1'
  },{
    label: 'page 2',
    value: 'page 2'
  },{
    label: 'page 3',
    value: 'page 3'
  }]

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
  draftCriteriaId: any;
  subscription: Subscription;
  allData: any;
  currentSelectedQtn: any;
  selectedOption: any;

  listOfRelation: any = [];
  condition: any;

  conditionMatchValue: any;

  conditionArray: any = [
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
  ]


  // private modalRef: NgbModalRef;
  @ViewChild('content', { static: false }) myModal: ElementRef;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor(
    // private modalService: NgbModal
    private dynamicServe: DynamicFormBuilderService
  ) {

  }

  // getAll(){
  //   this.subscription = this.dynamicServe.getALl().subscribe(message => { 
  //     console.log("get all info",message);

  //    });

  // }   


  parentMapping() {
    console.log(this.condition, "condition", this.currentSelectedQtn, "selectedOption", this.selectedOption);
    let obj = {}
    // option:this.selectedOption,
    // question:this.currentSelectedQtn
    // obj['visibleIf'] = [];


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
    console.log('this.currentSelectedQtn', this.currentSelectedQtn);

    console.log("condiObj", condiObj);
    this.getSelectQuestion = this.allData['questionList']['questionList'].filter(ele => {
      if (ele.field == this.field.field) {
        return ele;
      }
    });

    console.log("getSelectQuestion", this.getSelectQuestion);

    let isAvailable = false;
    if (this.getSelectQuestion['visibleIf'] && this.getSelectQuestion['visibleIf'].length > 0) {
      isAvailable = this.getSelectQuestion['visibleIf'].filter(item => {
        if (item.visibleIf.field == this.field.field) {
          return true
        }
      })
    }





    console.log("after getSelectQuestion", this.getSelectQuestion);

    let allData = [];



    let addObj = false;
    for (let i = 0; i < this.getSelectQuestion.length; i++) {
      debugger
      if (this.getSelectQuestion[i].parentChildren) {
        if (this.getSelectQuestion[i].parentChildren.indexOf(this.currentSelectedQtn.field) !== -1) {
          alert("Value exists!")

          addObj = false;

        } else {

          addObj = true;
          this.getSelectQuestion[i].parentChildren.push(this.currentSelectedQtn.field);
        }

      } else {
        addObj = true;
        this.getSelectQuestion[i].parentChildren = [];
        this.getSelectQuestion[i].parentChildren.push(this.currentSelectedQtn.field);
      }
    }


    if (addObj) {


      allData = this.allData['questionList']['questionList'].filter(ele => {
        if (ele.field == this.currentSelectedQtn.field) {
          if (ele.visibleIf && ele.visibleIf.length > 0 && isAvailable == false) {
            ele.visibleIf.push(condiObj);
          } else {
            ele.visibleIf = [];
            ele.visibleIf.push(condiObj);
          }
          return ele;
        } else {
          return ele
        }
      });



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

  ngOnInit() {



    // this.currentSelectedQtn = { };

    // this.dynamicServe.getALl();

    this.options = [];
    this.validations = {
      'relation': []
    }

    this.field.validations = {
      'relation': []
    };

  }
  loadFormElement(item) {

    console.log('loadFormElement', item);
    this.allData = this.dynamicServe.getALl();

    console.log(this.allData, " all questions ", this.allData['questionList']);



    this.filtereddata = this.allData['questionList']['questionList'].filter(t => t.field !== item.field);

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



    this.required = item.validations.required;

    this.description = item.description;

    if (item.validations.relation) {
      this.listOfRelation = item.validations.relation;
    }

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



      console.log(this.validations, "this.field", this.required);
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
        description: this.description,
        draftCriteriaId: this.draftCriteriaId,

      }

      if (this.type == 'date') {
        obj['minDate'] = this.minDate;
        obj['maxDate'] = this.maxDate
      } else if (this.type == 'slider') {
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
      } else if (this.type == 'slider') {
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
      let op = {
        action: "save",
        data: obj
      }

      this.sendDataToParent.emit(op);
      // this.sendDataToParent.emit(JSON.stringify(obj));

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
  AddNewOptions() {

    if (this.newOptionLabel != "") {

      this.newOptionKey = 'R'+ this.options.length;
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
  childrenDropEvent($event) {
    console.log("childrenDropEvent", this.field);
    // const action  = 'childDroped';
    let newObj = {
      action: 'childDroped',
      data: $event
    }
    this.copyOrDeleteEvent.emit(newObj);
    console.log("field delete", this.field);
  }

  deleteCondition(data, value) {
    // var index = this.listOfRelation.indexOf(value);
    // if (index > -1) {
    this.listOfRelation.splice(value, 1);
    this.getSelectQuestion[0].parentChildren.splice(value, 1);
    // }

    console.log('after delete data', this.listOfRelation);
  }


  add(data){
    console.log(' add data', data);
    let page = {
    label: 'page'+' '+ (data.length + 1),
    value: 'page'+' '+ (data.length + 1)  ,
    }
    this.pages.push(page);
  }
}
