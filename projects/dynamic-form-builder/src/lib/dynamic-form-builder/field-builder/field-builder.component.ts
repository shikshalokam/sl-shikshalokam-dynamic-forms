import { Component, Input, OnInit, ViewChild, ElementRef, EventEmitter, Output, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DynamicFormBuilderService } from '../../dynamic-form-builder.service';
import { Subscription } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent, MatPaginator, MatTableDataSource, MatSort, MatSnackBar, MatDialog } from '@angular/material';

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
    width: 100%;
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
  padding: 3px;
}
.form-control {
  display: block;
  visibility: hidden;

}
.addicon {
  margin-top: 17px;
  text-align: right;
  font-size: 17px;
}
.spacearoundbtn{
  margin-left: 10px;
}
.label.col-md-8.form-control-label {
  text-decoration: underline;
}
.labeloverflow {
  float: left;
}

.questionEditBlock {
  padding: 15px;
  border: 1px solid #ccc;margin-top:10px;width:85%;margin-top:40px;margin: auto;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);margin-top:20px;
}
.question-list {
  padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;
  
}
.active-questn {
  border: 2px solid #a63936;
  border-left: none;
  border-top: none;
  border-right: none;
}
.parent-child-block {
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 15px;
  border: 0.02px solid #ccc;
}
.custom-error {
   margin-top : -20px;
}

@media only screen and (max-width: 600px) {
  .col-sm-12 {
    padding: 0px
  }
  .col-sm-6 {
    padding: 0px
  }
}
  </style>
  <div class="row questionEditBlock" *ngIf="field.isOpen == true"  [formGroup]="editForm">
    <div class="col-sm-6" >
      <mat-form-field>
        <input matInput placeholder="Label" name="label" formControlName="label">
     </mat-form-field>
      <span class="mat-error custom-error" *ngIf="formValidate('label')">
        Invalid Label
      </span>
    </div>
  
    <div class="col-sm-6">
      <mat-form-field>
        <input matInput placeholder="Input Place Holder" formControlName="placeholder" name="placeholder">
      </mat-form-field>
      <span class="mat-error custom-error" *ngIf="formValidate('placeholder')">
        Invalid placeholder
      </span>
    </div>
  
    <div class="col-sm-6">
      <mat-form-field>
        <input matInput placeholder="Hint/Description" formControlName="description" name="Description">
      </mat-form-field>
      <span class="mat-error custom-error" *ngIf="formValidate('description')">
        Invalid placeholder
      </span>
    </div>
  
    <div class="col-sm-6 " style="display:none">
      <mat-form-field>
        <mat-label>Input Type</mat-label>
        <mat-select >
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
  
        <mat-select formControlName="pageNumber" >
          <mat-option *ngFor="let page of pages; let i = index" value="{{page.value}}">{{page.label}}</mat-option>
        </mat-select>

      </mat-form-field>
      <span class="mat-error custom-error" *ngIf="formValidate('pageNumber')">
      Please select Page Number
    </span>
    </div>
    <div class="col-sm-1 addicon">
      <span class="cursor-pntr"><i title="Add Page" class="fa fa-plus"
          (click)="add(pages)"></i></span>
    </div>
  
    <div class="col-sm-6">
      <mat-form-field>
        <mat-label>Criteria</mat-label>
        <mat-select formControlName="draftCriteriaId" >
          <mat-option *ngFor="let item of criteriaList" [value]="item._id">{{ item.name}}</mat-option>
        </mat-select>
      </mat-form-field>
      <span class="mat-error custom-error" *ngIf="formValidate('draftCriteriaId')">
      Please select criteria
    </span>
    </div>

    <div class="col-sm-6">
    <mat-form-field>
      <input matInput placeholder="prefix" formControlName="prefix" name="prefix">
    </mat-form-field>
    <span class="mat-error custom-error" *ngIf="formValidate('prefix')">
    prefix required
    </span>
  </div>


    <div class="col-sm-6" *ngIf="type=='number'">
    <mat-form-field>
      <input matInput placeholder="Weightage" formControlName="weightage" name="weightage">
    </mat-form-field>
    <span class="mat-error custom-error" *ngIf="formValidate('weightage')">
    weightage required
    </span>
  </div>

    <div class="col-sm-6">
    <label id="example-radio-group-label">is Required ?</label>
    <mat-radio-group aria-labelledby="radio-group-label" class="radio-group"  formControlName="required">
      <mat-radio-button class="example-radio-button"  [checked]="true" [value]=true>
        Yes
      </mat-radio-button>
      <mat-radio-button class="example-radio-button" [value]=false >
        No
      </mat-radio-button>
    </mat-radio-group>
    <span class="mat-error custom-error" *ngIf="formValidate('required')">
      Invalid
    </span>
  </div>

  <div class="col-sm-6" *ngIf="type=='matrix'">
        <mat-form-field>
          <input type="text" placeholder="child section Header" matInput formControlName="sectionHeader">
        </mat-form-field>
      </div>
    <div class="col-sm-6" *ngIf="type=='slider'">
      <mat-form-field>
        <input type="text" placeholder="Min" matInput formControlName="min" name="min value">
      </mat-form-field>
      <span class="mat-error custom-error" *ngIf="formValidate('min')">
      Min value required
    </span>
    </div>

 <div class="col-sm-6">
  <label id="example-radio-group-label">Applicable ?</label>
  <mat-radio-group aria-labelledby="radio-group-label" formControlName="applicable" class="radio-group">
    <mat-radio-button class="example-radio-button" [value]=true>
      Yes
    </mat-radio-button>
    <mat-radio-button class="example-radio-button" [value]=false>
      No
    </mat-radio-button>
  </mat-radio-group>
 </div>

 <div class="col-sm-6">
 <label id="example-radio-group-label">Allow Audio Recording?</label>
 <mat-radio-group aria-labelledby="radio-group-label" formControlName="audiorecording" class="radio-group">
   <mat-radio-button class="example-radio-button" [value]=true>
     Yes
   </mat-radio-button>
   <mat-radio-button class="example-radio-button" [value]=false>
     No
   </mat-radio-button>
 </mat-radio-group>
</div>

<div class="col-sm-6">
<label id="example-radio-group-label">show Remarks ?</label>
<mat-radio-group aria-labelledby="radio-group-label" class="radio-group"  formControlName="remarks">
  <mat-radio-button class="example-radio-button" [value]=true>
    Yes
  </mat-radio-button>
  <mat-radio-button class="example-radio-button" [value]=false>
    No
  </mat-radio-button>
</mat-radio-group>
</div>

<div class="col-sm-6">
<label id="example-radio-group-label">File Required ?</label>
<mat-radio-group aria-labelledby="radio-group-label" class="radio-group" formControlName="filerequired">
  <mat-radio-button class="example-radio-button" value="true">
    Yes
  </mat-radio-button>
  <mat-radio-button class="example-radio-button" checked value="false">
    No
  </mat-radio-button>
</mat-radio-group>
</div>

<div class="col-sm-6" *ngIf="type=='date'">
<label id="example-radio-group-label">is autoCollect ?</label>
<mat-radio-group aria-labelledby="radio-group-label" class="radio-group"  formControlName="autoCollect">
  <mat-radio-button class="example-radio-button" [value]=true>
    Yes
  </mat-radio-button>
  <mat-radio-button class="example-radio-button" [value]=false>
    No
  </mat-radio-button>
</mat-radio-group>
</div>


<div class="col-sm-6" *ngIf="type=='matrix'">
<label id="example-radio-group-label">Instance Identifier</label>
<mat-radio-group aria-labelledby="radio-group-label"  formControlName="Instance"  class="radio-group">
  <mat-radio-button class="example-radio-button" [value]=true>
    Yes
  </mat-radio-button>
  <mat-radio-button class="example-radio-button" [value]=false>
    No
  </mat-radio-button>
</mat-radio-group>
</div>
  
    <div class="col-sm-6" *ngIf="type=='slider'">
      <mat-form-field>
        <input type="text" placeholder="Max" matInput formControlName="max" name="min value">
      </mat-form-field>
      <span class="mat-error custom-error" *ngIf="formValidate('max')">
      max value required
    </span>
    </div>

     
      
  
    <div *ngIf="type=='date'">
      <div class="col-sm-6">
        <mat-form-field>
          <input matInput [matDatepicker]="picker" formControlName="minDate" placeholder="Choose a min date">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
        <span class="mat-error custom-error" *ngIf="formValidate('minDate')">
        Min Date is required
      </span>
      </div>
    <div class="col-sm-6">
        <mat-form-field>
          <input matInput [matDatepicker]="pickerMaxDate" formControlName="maxDate" placeholder="Choose a max date">
          <mat-datepicker-toggle matSuffix [for]="pickerMaxDate"></mat-datepicker-toggle>
          <mat-datepicker #pickerMaxDate></mat-datepicker>
        </mat-form-field>
        <span class="mat-error custom-error" *ngIf="formValidate('maxDate')">
        max Date is required
      </span>
    </div>

    <div class="col-sm-6">
      <mat-form-field>
        <mat-label>Date format</mat-label>
        <mat-select formControlName="dateformat" >
          <mat-option *ngFor="let item of dateFormates" [value]="item.value">{{ item.value}}</mat-option>
        </mat-select>
      </mat-form-field>
      <span class="mat-error custom-error" *ngIf="formValidate('dateformat')">
      Please select Date Format
    </span>
    </div>
    </div>
    <div class="" *ngIf="type=='radio' || type=='checkbox' || type=='dropdown'" >
      <label for="label" class="col-sm-12">Options</label>

      <ul class="col-sm-12 option-ul" *ngFor="let opt of options;let i = index">
        <li class="">
          <span>{{opt.label}} </span>
          <span class="col-sm-6">
          <mat-form-field>
          <input type="text" formControlName = "labelHint" placeholder="Hint" matInput name="hint">
        </mat-form-field>
          </span>
          <span style="margin-left: 30px;cursor: pointer" title = "delete" (click)="deleteOption(opt,i)">
            <i class="fa fa-trash"></i></span>
        </li>
      </ul>
  
      <div class="col-sm-12">
        <div class="input-group pull-left col-sm-6">
          <mat-form-field>
            <input type="text" placeholder="Label" matInput style="" formControlName="newOptionLabel"
              name="newOption">
          </mat-form-field>

          <span class="mat-error custom-error" *ngIf="formValidate('newOptionLabel')">
        Invalid Label
      </span>

        </div>
        <button mat-flat-button color="primary" class = "spacearoundbtn" (click)="AddNewOptions()">
          Add
        </button>
      </div>
    </div>
  
    <div class="col-sm-12 ">
    <div *ngIf="filtereddata && filtereddata.length > 0" class="parent-child-block col-sm-12">
      <div class="col-sm-12">
        <label id="example-radio-group-label">Do you want to related the question based on below options ?</label>
        <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
        formControlName="selectedOption"  style="display:none" >
          <mat-radio-button class="example-radio-button" *ngFor="let ele of options" [value]="ele">
            {{ ele.label }}
          </mat-radio-button>
        </mat-radio-group>
      </div>
  
  
      <div class="col-sm-6">
        <mat-form-field>
          <mat-label>Select Question to add </mat-label>
          <select matNativeControl   formControlName="currentSelectedQtn"  (change)="parentMapQuestionChange()">
            <option *ngFor="let values of filtereddata" [ngValue]="values"> {{ values.label }} </option>
          </select>
        </mat-form-field>
      </div>

      
      <div class="col-sm-6" *ngIf="optionQntList.length <= 0">
        <mat-form-field>
          <mat-label>Select Condition </mat-label>
          <select matNativeControl formControlName="condition" >
            <option *ngFor="let values of conditionArray" [ngValue]="values.condition"> {{ values.label }} </option>
          </select>
        </mat-form-field>
      </div>
  
      
      <div class="col-sm-6" *ngIf="optionQntList && optionQntList.length > 0" >
      <mat-form-field>
        <mat-label>Select Options </mat-label>
        <select matNativeControl formControlName="conditionMatchValue" >
          <option *ngFor="let values of optionQntList" [ngValue]="values.key"> {{ values.label }} </option>
        </select>
      </mat-form-field>
    </div>

      <div class="col-sm-6" *ngIf="optionQntList.length <= 0" >
        <mat-form-field>
          <input type="text" matInput name="conditionMatchValue" placeholder="Value" formControlName="conditionMatchValue">
        </mat-form-field>
      </div>
  
      <div class="col-sm-2">
        <button mat-flat-button color="primary" class = "spacearoundbtn" (click)="parentMapping()">
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

    </div>
  

    <div class="col-sm-12" *ngIf="editForm.value.filerequired == 'true'">
    <div class="parent-child-block col-sm-12">
      <div class="col-sm-6">
        <mat-form-field>
          <mat-label>No of Files</mat-label>
          <select matNativeControl formControlName="filecount" (change)="filesChange()">
            <option *ngFor="let values of filecounts" [ngValue]="values"> {{ values.value }} </option>
          </select>
        </mat-form-field>
      </div>
  
      <div class="col-sm-6">
        <mat-form-field>
          <mat-label>File Format</mat-label>
          <select matNativeControl formControlName="fileType">
            <option *ngFor="let values of fileTypes" [ngValue]="values"> {{ values.filetype }} </option>
          </select>
        </mat-form-field>
      </div>
  
  
      <div class="col-sm-6">
      <label id="example-radio-group-label">Caption ?</label>
      <mat-radio-group aria-labelledby="radio-group-label" class="radio-group"  formControlName="caption">
        <mat-radio-button class="example-radio-button" [value]=true>
          Yes
        </mat-radio-button>
        <mat-radio-button class="example-radio-button" [value]=false>
          No
        </mat-radio-button>
      </mat-radio-group>
    </div>

    </div>
  </div>

  
    <div class="col-sm-12">
  
      <button mat-flat-button color="primary" style="margin-right:10px;" (click)="closeModel('save')">
        Save
      </button>
  
    </div>
  </div>
  <div class="form-group row question-list" [ngClass]="{'active-questn': field.isOpen == true}" [formGroup]="form" >
    <span class="qtn_position"><span class="">#{{ field.position }}</span></span>
  
    <div class="action-component">
  
      <span class="cursor-pntr" title = "delete" (click)="deleteElement(field)"><i class="fa fa-trash"></i> </span>
      <span class="cursor-pntr" title = "copy" (click)="copyElement(field)"><i class="fa fa-copy"></i></span>
      <span class="cursor-pntr" title = "edit"><i class="fa fa-edit" (click)="loadFormElement(field)"></i ></span>
  
    </div>
    <div class="col-md-12" [ngSwitch]="field.type">
      <textbox *ngSwitchCase="'number'" [field]="field" [form]="form"></textbox>
      <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
      <date *ngSwitchCase="'date'" [field]="field" [form]="form"></date>
      <slider *ngSwitchCase="'slider'" [field]="field" [form]="form"></slider>
      <dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></dropdown>
      <checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></checkbox>
      <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
      <lib-multi-select *ngSwitchCase="'matrix'" cdkDrag   (sendDataToParent)="eventFromChild($event)" 
      (childrenDropEvent)="childrenDropEvent($event)" [field]="field" [form]="form"></lib-multi-select>
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
  }
  .radio-group {
    display: inline-block;
    margin: 15px 0; 
  }
   .option-ul {
    padding-left: 44px;
    padding-top: 5px;
   }
  
  `
  ]
})

// <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>

export class FieldBuilderComponent implements OnInit, AfterViewChecked {
  @Input() field: any;

  @Input() criteriaList: any;
  @Input() form: any;

  @Output() sendDataToParent = new EventEmitter<any>();

  @Output() copyOrDeleteEvent = new EventEmitter<any>();
  filtereddata: any;
  getSelectQuestion: any;
  closeResult: string;
  modalReference: any;
  label: any;
  type: any;
  placeholder: any;
  options: any;
  newOptionKey: any;
  newOptionLabel: any;
  labelHint: any;
  dataPass: any;
  childtitle: any;

  openEditPopUp: boolean;
  pages = [{
    label: 'page 1',
    value: 'P1'
  }, {
    label: 'page 2',
    value: 'P2'
  }, {
    label: 'page 3',
    value: 'P3'
  }]

  activeModelData: any;
  validations: any;
  required: any;
  applicable: any;
  audiorecording: any;
  Instance: any;
  autoCollect: any;
  openEdit: boolean = false;
  _id: any;
  description: any;
  weightage: any;
  prefix: any;
  pageNumber: any;
  minDate: any;
  maxDate: any;
  dateformat: any;
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
  filecount: any;
  fileType: any;
  caption: any;
  remarks: any;
  filerequired: any;
  currentField: any;

  fileTypes: any = [{
    filetype: 'image/jpeg'
  }, {
    filetype: 'docx'
  },
  {
    filetype: 'pdf'
  }, {
    filetype: 'ppt'
  }]
  filecounts: any = [
    {
      value: 1
    },
    {
      value: 2
    }, {
      value: 3
    }, {
      value: 4
    }, {
      value: 5
    }, {
      value: 6
    }, {
      value: 7
    }, {
      value: 8
    }, {
      value: 9
    }, {
      value: 10
    },
  ]
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

  dateFormates: any = [
    {
      value: 'M/d/yy'
    },
    {
      value: 'YYYY-MM-DD'
    },
    {
      value: 'MM-dd-yyyy'
    },
    {
      value: 'dd-M-yyyy hh:mm:ss'
    },
    {
      value: 'dd MMMM yyyy zzzz'
    },
    {
      value: 'E, dd MMM yyyy HH:mm:ss z'
    },
  ]


  // private modalRef: NgbModalRef;
  @ViewChild('content', { static: false }) myModal: ElementRef;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  public editForm: any;
  formErrors: any;
  optionQntList: any;



  constructor(
    // private modalService: NgbModal
    private dynamicServe: DynamicFormBuilderService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private builder: FormBuilder,
    private cdRef: ChangeDetectorRef,

  ) {




  }


  // }

  // getAll(){
  //   this.subscription = this.dynamicServe.getALl().subscribe(message => { 
  //     console.log("get all info",message);

  //    });

  // }   

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  validate(element, type) {
    this.dynamicServe.validateFiled(element, type);
  }

  parentMapping() {

    this.currentSelectedQtn = this.editForm.get('currentSelectedQtn').value;

    console.log(this.editForm.get('condition').value, "--condition", this.currentSelectedQtn, "selectedOption", this.selectedOption);
    let obj = {}
    // option:this.selectedOption,
    // question:this.currentSelectedQtn
    // obj['visibleIf'] = [];

    let operator = "===";

    if (this.editForm.get('condition').value) {
      operator = this.editForm.get('condition').value;
    }
    let condiObj = {
      operator: operator,
      value: this.editForm.get('conditionMatchValue').value,
      field: this.currentSelectedQtn.field,
      label: this.editForm.get('label').value
      // parent:this.selectedOption.field
    }

    console.log("====condiObj", condiObj);

    // console.log('this.currentSelectedQtn', this.currentSelectedQtn);
    // console.log("condiObj", condiObj);
    this.getSelectQuestion = this.allData['questionList']['questionList'].filter(ele => {
      // if (ele.field == this.field.field) {
      if (ele.field == this.currentSelectedQtn.field) {
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
        if (this.getSelectQuestion[i].parentChildren.indexOf(this.field.field) !== -1) {
          addObj = false;
        } else {
          addObj = true;
          this.getSelectQuestion[i].parentChildren.push(this.field.field);
        }
      } else {
        addObj = true;
        this.getSelectQuestion[i].parentChildren = [];
        this.getSelectQuestion[i].parentChildren.push(this.field.field);
      }
    }
    // if (addObj) {
    allData = this.allData['questionList']['questionList'].filter(ele => {

      if (ele.field == this.field.field) {
        // if (ele.field == this.currentSelectedQtn.field) { //old code 
        if (ele.visibleIf && ele.visibleIf.length > 0 && isAvailable == false) {
          ele.visibleIf.push(condiObj);
        }
        else if (isAvailable && ele.visibleIf && ele.visibleIf.length > 0) {

          console.log("updating");
          ele.visibleIf = ele.visibleIf.filter(loopElement => {
            if (loopElement.field == this.currentSelectedQtn.field) {
              return condiObj;
            } else {
              loopElement;
            }
          });
          console.log("updated", ele.visibleIf);


        }
        else {
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
    // }
    // if (this.condition) {
    // }
    // 'option':this.selectedOption,
    //       'question':this.currentSelectedQtn

    // this.field.childQnt = this.currentSelectedQtn.field;

    console.log("this.field.validations.relation", this.listOfRelation);
  }

  ngOnInit() {
    this.optionQntList = [];
    this.formBuilder();
    // this.currentSelectedQtn = { };
    // this.dynamicServe.getALl();
    this.options = [];
    this.validations = {
      'relation': []
    }
    this.field.validations = {
      'relation': []
    };
    this.dynamicServe.setPageNumber(this.pages);

    const openpopup = this.dynamicServe.getALl();
    this.dataPass = openpopup['questionList']['questionList'][openpopup['questionList']
    ['questionList'].length - 1];
    console.log('===', this.dataPass);
    // if(this.fromService === this.currentposition){
    //   this.openEdit = this.openEdit ? false : true;
    // }


    this.loadFormElement(this.dataPass, 'onload');
  }

  loadFormElement(item, arg = '') {
    /**
     * updateOpenPopup() is used to update the isOpen status to false
     */
    this.dynamicServe.updateOpenPopup(item);
    console.log(this.openEditPopUp, "item.validations.required", this.field.isOpen);
    if (this.openEditPopUp == false && this.field.isOpen) {
      this.openEditPopUp = true;
    } else if (this.openEditPopUp == false && this.field.isOpen == false) {
      this.field.isOpen = true;
      this.openEditPopUp = true;
    } else if (this.field.isOpen) {
      if (arg && arg == 'onload') {
        this.openEditPopUp = true;
        this.field.isOpen = true;
      } else {
        this.openEditPopUp = false;
        this.field.isOpen = false;
      }
    } else if (this.field.isOpen == false) {
      this.field.isOpen = true;
      this.openEditPopUp = true;
    }


    /**
     * to set the popup open by default it false
     */





    /**
     * sendDataToParent() is a parent function, it helps to send an event
     * from child, based Object paramets it performs
     */
    let actionObject = {
      action: "reload",
    }
    this.sendDataToParent.emit(actionObject);

    this.allData = this.dynamicServe.getALl();
    this.filtereddata = this.allData['questionList']['questionList'].filter(t => t.field !== item.field);
    this.allData['questionList']['questionList'];
    this.criteriaList = this.allData['criteriaList'];

    this.activeModelData = "";
    this.label = item.label;
    this.type = item.type;
    this.placeholder = item.placeholder;
    this.options = item.options;
    this.draftCriteriaId = item.draftCriteriaId;
    this.required = item.validations.required;
    this.applicable = item.validations.required;
    this.audiorecording = item.validations.required;
    this.Instance = item.validations.required;
    this.currentField = item.field;
    this.description = item.description;
    this.weightage = item.weightage;
    this.prefix = item.prefix;
    this.pageNumber = item.pageNumber;


    console.log("formBuilder", item);
    let formControl = {
      label: [item.label, [Validators.required]],
      placeholder: [item.placeholder, [Validators.required]],
      description: [item.description, [Validators.required]],
      pageNumber: [item.pageNumber, [Validators.required]],
      required: [false, [Validators.required]],
      weightage: [item.weightage,[Validators.required]],
      prefix: [item.prefix, [Validators.required]],
      applicable: [false],
      sectionHeader: [item.sectionHeader],
      audiorecording: [false],
      Instance: [false],
      draftCriteriaId: [item.draftCriteriaId, [Validators.required]],
      newOptionLabel: [null],
      labelHint: [null],
      maxDate: [null],
      minDate: [null],
      dateformat:[null],
      max: [null],
      min: [null],
      autoCollect: [false],
      conditionMatchValue: [null],
      filecount: [null],
      fileType: [null],
      caption: [false],
      remarks: [false],
      filerequired: [false],
      condition: [null],
      currentSelectedQtn: [null],
      selectedOption: [null],


    }

    // this.editForm = this.builder.group();

    if (item.validations.relation) {
      this.listOfRelation = item.validations.relation;
    }
    if (item.type == "date") {
      this.minDate = item.validations.minDate;
      this.maxDate = item.validations.maxDate
      this.autoCollect = item.validations.autoCollect;
      this.dateformat = item.validations.dateformat;

      formControl.minDate = [item.validations.minDate, [Validators.required]];
      formControl.maxDate = [item.validations.maxDate, [Validators.required]];
      formControl.autoCollect = [item.validations.autoCollect];
      formControl.dateformat = [item.validations.dateformat];
    }
    else if (item.type == "slider") {
      this.min = item.validations.min;
      this.max = item.validations.max;
      formControl.min = [item.validations.min, [Validators.required]];
      formControl.max = [item.validations.max, [Validators.required]];

    }
    this.required = this.field.validations.required;
    this.applicable = this.field.validations.applicable;
    this.audiorecording = this.field.validations.audiorecording;
    this.Instance = this.field.validations.Instance;
    console.log(this.openEditPopUp, "item.validations.required", this.field.isOpen);

    // this.editForm.formBuilder()
    this.editForm = this.builder.group(formControl);

    // if(this.field.isOpen)
    // this.openEdit = this.openEdit = true;
    // document.getElementById("openModalButton").click();
    // this.open(this.myModal);
    // this.myModal.show();
    // this.myModal.nativeElement.className = 'modal fade show';

  }
  filesChange() {

  }
  saveEdit() {
  }
  closeModel(action) {

    if (action == "save") {
      let saveData = false;
      if (this.editForm.valid) {
        if (this.field.formValidation.validate) {
          saveData = true;
        } else {
          saveData = true;
        }
      } else {
        if (this.field.formValidation && this.field.formValidation.validate) {
          saveData = false;
        } else {
          saveData = true;
        }
      }
      if (saveData) {
        this.openEdit = false;
        this.field.isOpen = false;
        this.label = this.editForm.get('label').value;
        let obj = {
          label: this.editForm.get('label').value,
          type: this.type,
          placeholder: this.placeholder,
          options: this.options,
          validations: this.validations,
          sectionHeader: this.editForm.get('sectionHeader').value,
          field: this.field,
          _id: this._id,
          description: this.description,
        
          prefix: this.prefix,
          pageNumber: this.pageNumber,
          draftCriteriaId: this.draftCriteriaId,
        }
        if (this.type == 'date') {
          obj['minDate'] = this.minDate;
          obj['maxDate'] = this.maxDate
          obj['autoCollect'] = this.autoCollect
          obj['dateformat'] = this.dateformat;
        } else if (this.type == 'slider') {
          obj['min'] = this.min;
          obj['max'] = this.max;
        } else if(this.type == 'number'){
          obj['weightage'] =  this.weightage;
        }
        // this.field.label = this.label;

        this.field.label = this.editForm.get('label').value;
        this.field.type = this.type;


        // currentSelectedQtn: [null],
        // selectedOption: [null]


        this.field.placeholder = this.editForm.get('placeholder').value;
        this.field.options = this.editForm.get('options').value;
        this.field.description = this.editForm.get('description').value;
        
        this.field.pageNumber = this.editForm.get('pageNumber').value;
        this.field.draftCriteriaId = this.editForm.get('draftCriteriaId').value;
        this.field.filerequired = this.editForm.get('filerequired').value;

        // this.field.field = this.field.field;
        if (this.type == 'matrix') {
          this.field.sectionHeader = this.editForm.get('sectionHeader').value;
        } else if (this.type == 'date') {
          this.field.validations.minDate = this.editForm.get('minDate').value;
          this.field.validations.maxDate = this.editForm.get('maxDate').value;
          this.field.validations.autoCollect = this.editForm.get('autoCollect').value;
          this.field.validations.dateformat = this.editForm.get('dateformat').value;
        } else if (this.type == 'slider') {
          this.field.validations.min = this.editForm.get('max').value;
          this.field.validations.max = this.editForm.get('min').value;
        } else if(this.type == 'number'){
          this.field.weightage = this.editForm.get('weightage').value;
          this.field.validations.weightage = this.editForm.get('weightage').value;
        }
        // if(this.field.validations.relation){
        if (this.listOfRelation) {
          obj.validations.relation = this.listOfRelation;
          this.field.validations.relation = this.listOfRelation;
        }
        // }
        // this.field.validations
        this.field.validations.required = this.editForm.get('required').value;
        // this.field.validations.autoCollect = this.editForm.get('autoCollect').value;


        let actionObject = {
          action: "save",
          data: obj
        }
        this.dynamicServe.updateQuestion(this.field);
        this.sendDataToParent.emit(actionObject);
        this.openEdit = false;

      } else {
        console.log("invalid --");
        this.openEdit = true;
      }

    } else {
      this.openEdit = false;
    }
  }

  open(content) {
  }

  deleteOption(opt, index) {
    // this.deleteDraftCriteria();
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
  }
  AddNewOptions() {
    if (this.editForm.get('newOptionLabel').value != "") {
      this.newOptionKey = 'R' + this.options.length;
      if (Array.isArray(this.options)) {
      } else {
        this.options = [];
      }
      this.options.push({
        key: this.newOptionKey,
        label: this.editForm.get('newOptionLabel').value,
        hint: this.editForm.get('labelHint').value,
      });
    }
    this.newOptionKey = "";
    this.newOptionLabel = "";
    this.labelHint = '';
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
  }
  childrenDropEvent($event) {
    console.log("childrenDropEvent", this.field);
    // const action  = 'childDroped';
    let newObj = {
      action: 'childDroped',
      data: $event
    }
    this.copyOrDeleteEvent.emit(newObj);
  }

  deleteCondition(data, value) {
    // var index = this.listOfRelation.indexOf(value);
    // if (index > -1) {
    this.listOfRelation.splice(value, 1);
    this.getSelectQuestion[0].parentChildren.splice(value, 1);
    // }
  }


  add(data) {
    let page = {
      label: 'page' + ' ' + (data.length + 1),
      value: 'P' + ' ' + (data.length + 1),
    }
    this.pages.push(page);
    this.dynamicServe.setPageNumber(this.pages);
  }

  eventFromChild($event) {
    if ($event.action == 'copy') {

    } else {
      $event.action = 'childDelete';
    }

    this.copyOrDeleteEvent.emit($event);
  }

  //  deleteDraftCriteria() {
  //   let message = `Are you sure you delete criteria?`;
  //   let dialogData = new ConfirmDialogModel("Confirm Action", message);
  //   const dialogRef = this.dialog.open(ConfirmationComponent, {
  //     width: '350px',
  //     data: dialogData
  //   })
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       alert('result'+ result);
  //     }
  //   });
  // }

  // validate(field,currentField){
  //   field.
  // }

  formBuilder() {
    this.editForm = this.builder.group({
      label: [null],
      placeholder: [null],
      description: [null],
      pageNumber: [null],
      weightage: [null],
      prefix: [null],
      required: [null],
      applicable: [null],
      audiorecording: [null],
      Instance: [null],
      draftCriteriaId: [null],
      newOptionLabel: [null],
      maxDate: [null],
      minDate: [null],
      dateformat: [null],
      max: [null],
      min: [null],
      autoCollect: [null],
      conditionMatchValue: [null],
      filecount: [null],
      fileType: [null],
      caption: [null],
      remarks: [null],
      filerequired: [null],
      condition: [null],
      currentSelectedQtn: [null],
      selectedOption: [null],
      sectionHeader: [null]
    });
  }

  formValidate(el) {
    if (el) {
      if (this.field.formValidation && this.field.formValidation.fields && this.field.formValidation.validate) {
        let currentItem = this.field.formValidation.fields.filter(eachElement => {
          if (eachElement == el) {
            return true;
          } else {
            return false;
          }
        })
        if (currentItem.length > 0) {
          return this.editForm.get(el).hasError('required')
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  parentMapQuestionChange() {
    console.log("value changes", this.editForm.get('currentSelectedQtn').value);


    this.optionQntList = [];
    let currentQnt = this.editForm.get('currentSelectedQtn').value;
    if (currentQnt.type == 'radio' || currentQnt.type == 'checkbox') {
      console.log("type", currentQnt.type);
      this.optionQntList = currentQnt.options;
    }



  }
}
