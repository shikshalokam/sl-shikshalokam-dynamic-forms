import { Component, Input, Output, EventEmitter, NgModule, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormBuilderService } from '../../dynamic-form-builder.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  declarations: []
})


@Component({
  selector: 'lib-multi-select',
  template: `<div [formGroup]="form" dndDropzone  (dndDrop)="onDropNew($event,field)" class="card-body">
  <label class="col-md-8 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
  <textarea  rows="2" class="form-control">
  
  </textarea>
  <div class="row" *ngIf="openEditChild" style="padding: 20px;
  border: 1px solid #ccc;margin-top:10px; margin:40px; margin-left: 20%;
  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);">

  <div class="col-sm-7 form-group">
    <mat-form-field>
      <input matInput placeholder="Label" [(ngModel)]="label" [ngModelOptions]="{standalone: true}">
    </mat-form-field>
  </div>

  <div class="col-sm-7 form-group">
    <mat-form-field>
      <input matInput placeholder="Input Place Holder" [(ngModel)]="placeholder" [ngModelOptions]="{standalone: true}">
    </mat-form-field>
  </div>

  <div class="col-sm-7 form-group">
    <mat-form-field>
      <input matInput placeholder="Hint/Description" [(ngModel)]="description" [ngModelOptions]="{standalone: true}">
    </mat-form-field>
  </div>

  <div class="col-sm-7 form-group">
    <mat-form-field>
      <mat-label>Input Type</mat-label>
      <mat-select [(ngModel)]="type" [ngModelOptions]="{standalone: true}">
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
      <mat-select [(ngModel)]="pageNumber" [ngModelOptions]="{standalone: true}">
        <mat-option value="page_1">page 1</mat-option>
        <mat-option value="page_2">page 2</mat-option>
        <mat-option value="page_3">page 3</mat-option>
      </mat-select>
    </mat-form-field>
  </div>

  <div class="col-sm-7 form-group" *ngIf="type=='slider'">
    <mat-form-field>
      <input type="text" placeholder="Min" matInput [(ngModel)]="min" [ngModelOptions]="{standalone: true}">
    </mat-form-field>
  </div>

  <div class="col-sm-7 form-group" *ngIf="type=='slider'">
    <mat-form-field>
      <input type="text" placeholder="Max" matInput [(ngModel)]="max" [ngModelOptions]="{standalone: true}">
    </mat-form-field>
  </div>

  <div class="col-sm-12 form-group" *ngIf="type=='date'">
    <mat-form-field>
      <input matInput [matDatepicker]="picker" [(ngModel)]="minDate" [ngModelOptions]="{standalone: true}" placeholder="Choose a min date">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>

    <mat-form-field>
      <input matInput [matDatepicker]="pickerMaxDate" [(ngModel)]="maxDate" [ngModelOptions]="{standalone: true}" placeholder="Choose a max date">
      <mat-datepicker-toggle matSuffix [for]="pickerMaxDate"></mat-datepicker-toggle>
      <mat-datepicker #pickerMaxDate></mat-datepicker>
    </mat-form-field>


  </div>
  <div class="col-sm-12 form-group" *ngIf="type=='radio' || type=='checkbox' || type=='dropdown'">
    <label for="label" class="col-sm-12">Options</label>

    <div class="col-sm-7 form-group" *ngIf="type=='slider'">
      <mat-form-field>
        <input type="text" placeholder="Max" matInput [(ngModel)]="max" [ngModelOptions]="{standalone: true}">
      </mat-form-field>
    </div>

  </div>

  <div *ngIf="filtereddata && filtereddata.length > 0">
    <div class="col-sm-12">
      <label id="example-radio-group-label">Do you want to related the question based on below options ?</label>
      <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
        [(ngModel)]="selectedOption" [ngModelOptions]="{standalone: true}">
        <mat-radio-button class="example-radio-button" *ngFor="let ele of options" [value]="ele">
          {{ ele.label }}
        </mat-radio-button>
      </mat-radio-group>
    </div>


    <div class="col-sm-6">
      <mat-form-field>
        <mat-label>Select Question to add </mat-label>
        <select matNativeControl [(ngModel)]="currentSelectedQtn" [ngModelOptions]="{standalone: true}">
          <option *ngFor="let values of filtereddata" [ngValue]="values"> {{ values.label }} </option>
        </select>
      </mat-form-field>
    </div>

    <div class="col-sm-6" *ngIf="type=='text' || type=='date' || type=='number'">
      <mat-form-field>
        <mat-label>Select Condition </mat-label>
        <select matNativeControl [(ngModel)]="condition" [ngModelOptions]="{standalone: true}">
          <option *ngFor="let values of conditionArray" [ngValue]="values.condition"> {{ values.label }} </option>
        </select>
      </mat-form-field>
    </div>

    <div class="col-sm-6" *ngIf="type=='text' || type=='date' || type=='number'">
      <mat-form-field>
        <input type="tex" matInput name="conditionMatchValue"
         placeholder="" [(ngModel)]="conditionMatchValue" [ngModelOptions]="{standalone: true}">
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


  <div class="col-sm-7">
    <label id="example-radio-group-label">is Reqired ?</label>
    <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group" [ngModelOptions]="{standalone: true}" [(ngModel)]="required">
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
    <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group" [(ngModel)]="autoCollect" [ngModelOptions]="{standalone: true}">
      <mat-radio-button class="example-radio-button" [value]=true>
        True
      </mat-radio-button>
      <mat-radio-button class="example-radio-button" [value]=false>
        False
      </mat-radio-button>
    </mat-radio-group>
  </div>


  <div class="col-sm-12">

    <button mat-flat-button color="primary" style="margin-right:10px;" (click)="closeModelChild('save')">
      Save
    </button>

  </div>
</div>
<div >
  <div *ngIf="field.child.length > 0" cdkDropList (cdkDropListDropped)="drop($event)">

  <div *ngFor="let obj of field.child let i =index" cdkDrag>
  <div style="float: right;right: -90px; cursor:pointer; top: 30px;" class="col-sm-2 edit-icon">
  <i class="fa fa-trash" (click)="deleteElement(obj, i)"></i>
  <i class="fa fa-copy" (click)="copyElement(obj, i)"></i>
  <i class="fa fa-edit" (click)="loadFormElement(obj, i)"></i>
  </div>


  <div class="col-md-12" [ngSwitch]="obj.type" style="width:80%;margin-left:20%;border:1px solid #ccc;">

  <textbox  style ="padding-left:30px" *ngSwitchCase="'number'" [field]="obj" [form]="form"></textbox>

  <textbox  style ="padding-left:30px" *ngSwitchCase="'text'" [field]="obj" [form]="form"></textbox>

  <date style ="padding-left:30px" *ngSwitchCase="'date'" [field]="obj" [form]="form"></date>

  <slider style ="padding-left:30px" *ngSwitchCase="'slider'" [field]="obj" [form]="form"></slider>

    <dropdown style ="padding-left:30px" *ngSwitchCase="'dropdown'" [field]="obj" [form]="form"></dropdown>

    <checkbox style ="padding-left:30px" *ngSwitchCase="'checkbox'" [field]="obj" [form]="form"></checkbox>

   <radio style ="padding-left:30px" *ngSwitchCase="'radio'" [field]="obj" [form]="form"></radio>

    <file style ="padding-left:30px" *ngSwitchCase="'file'" [field]="obj" [form]="form"></file>

    
  </div>
  </div>
  </div>
  </div>
  </div>`,
    styles:[`
    .form-control {
      display: none;
    }
    .fa {
      padding: 2px;
    }
    `]
})
export class MultiSelectComponent {

  @Input() field: any = {};
  @Input() form: any;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  @Output() sendDataToParent = new EventEmitter<string>();
  @Output() childrenDropEvent = new EventEmitter<string>();
  @Output() copyOrDeleteEvent = new EventEmitter<string>();

  activeModelData: any;
  validations: any;
  required: any;
  autoCollect: any;
  openEditChild: boolean = false;
  _id: any;
  description: any;
  minDate: any;
  maxDate: any;
  min: any;
  max: any;
  label: any;
  type: any;
  placeholder: any;
  options: any;
  pageNumber: any;
  allData: any;
  filtereddata: any;
  conditionMatchValue: any;
  selectedOption: any;
  currentSelectedQtn: any;
  listOfRelation: any = [];
  condition: any;
  getSelectQuestion: any;
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

  constructor(public cdr: ChangeDetectorRef,
    private dynamicServe: DynamicFormBuilderService) {

    // this.form.controls = this.field.name;
    // console.log("form",this.form);

  }
  onDropNew($event, field) {
    console.log("---- MultiSelectComponent -", $event);

    if ($event.data.responseType && $event.data.responseType != 'matrix') {

      $event.data.mutiSelect = field;
      this.childrenDropEvent.emit($event.data);
    } else {
      console.log("not allowed");
    }
  }


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

  closeModelChild(action, data = "") {
    if (action == "save") {
      console.log("closeModel", this.field);
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


      var index = this.field.child.findIndex(item => item.field === this.currentItem.field);
      this.field.child.splice(index, 1, obj)

      // let newObj =  this.field.child.filter(item => {
      //   if (item.field == this.currentItem.field) {
      //     // this.field.child[this.currentItem.position] = obj;
      //     return obj;
      //   } else {
      //     return item;
      //   }
      // });

      console.log('aaaaaaaaaaa', this.field);



      // this.sendDataToParent.emit(JSON.stringify(obj));


      // this.field.label = this.label;


      // this.field.label = this.label;
      // this.field.type = this.type;
      // this.field.placeholder = this.placeholder;
      // this.field.options = this.options;
      // this.field.description = this.description;

      // if (this.type == 'date') {
      //   this.field.validations.minDate = this.minDate;
      //   this.field.validations.maxDate = this.maxDate;
      //   this.field.validations.autoCollect = this.autoCollect;
      // } else if (this.type == 'slider') {
      //   this.field.validations.min = this.min;
      //   this.field.validations.max = this.max;
      // }

      // this.field.validations

      // console.log(" this.field.validations.required", this.field.validations.required, "sdds", this.required);
      // this.field.validations.required = this.required;
      // this.field.validations.autoCollect = this.autoCollect;


      // console.log(" this.field", this.field);
      this.openEditChild = false;

      // this.sendDataToParent.emit(this.activeModelData);

    } else {

      this.openEditChild = false;
      // this.modalReference.close();
    }

    // this.modalService.close();
    //  this.myModal.nativeElement.className = 'modal hide';
  }

  currentItem: any;

  loadFormElement(item, id) {
    console.log("item ---", item, "id", id);
    this.activeModelData = "";
    this.label = item.label;
    this.currentItem = item;
    this.allData = this.dynamicServe.getALl();
    console.log('this.field', this.field);
    debugger

    // for(let i = 0; i < this.allData['questionList']['questionList'][0].child.length; i++) {
      this.filtereddata = this.field.child.filter(t => t.field !== item.field);
    // }



    console.log('multi select', this.allData);
    console.log('this.filtereddata', this.filtereddata)
    this.type = item.type;
    this.placeholder = item.placeholder;
    this.options = item.options;
    this._id = item._id;
    // this.required = item.validations.required;
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

    // this.required = this.field.validations.required;

    // console.log(item.validations.required, "item.validations.required",
    // this.required, "label", this.label);
    // console.log("label",this.label);
    this.openEditChild = this.openEditChild ? false : true;
    this.cdr.detectChanges();
    // document.getElementById("openModalButton").click();
    // this.open(this.myModal);
    // this.myModal.show();
    // this.myModal.nativeElement.className = 'modal fade show';
  }

  deleteCondition(data, value) {
    // var index = this.listOfRelation.indexOf(value);
    // if (index > -1) {
    this.listOfRelation.splice(value, 1);
    this.getSelectQuestion[0].child.splice(value, 1);
    // }

    console.log('after delete data', this.listOfRelation);
  }

  deleteElement(item, index) {
    item.action = 'delete';
    this.field.isDelete = true;
    this.field.child.splice(index, 1);
    this.copyOrDeleteEvent.emit(item);
    console.log("field delete", this.field, 'index', index);
    console.log('after delete', this.allData);

  }

  copyElement(item, index) {
    // this.field.push(item);
    item.action = 'copy';
    console.log("copy field ----------", item, 'index', index);
    this.field.child.push(item);
    this.copyOrDeleteEvent.emit(item);

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.field.child, event.previousIndex, event.currentIndex);
  }

}
