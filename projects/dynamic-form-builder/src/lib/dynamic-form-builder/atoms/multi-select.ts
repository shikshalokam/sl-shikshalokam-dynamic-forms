import { Component, Input, Output, EventEmitter, NgModule, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormBuilderService } from '../../dynamic-form-builder.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  declarations: []
})


@Component({
  selector: 'lib-multi-select',
  template: `<div [formGroup]="form" dndDropzone (dndDrop)="onDropNew($event,field)" class="card-body">
  <label class="col-md-0 form-control-label" [attr.for]="field.label">
    {{field.label}}
  </label>
  <textarea rows="2" class="form-control">

  </textarea>


  <div style="background-color: #f9f9f9;
  margin-left: 13%;
  padding: 25px;" *ngIf="field.child.length > 0" cdkDropList (cdkDropListDropped)="drop($event)">

  <div *ngIf ="field.sectionHeader" style ="text-align:center;font-size: 20px;">
  {{field.sectionHeader}}</div>

    <div *ngFor="let obj of field.child; let i =index; let data" cdkDrag>
      
      <div class="row editmatrix" *ngIf="obj.isOpen">
        <div class="col-sm-6">
          <mat-form-field>
            <input matInput placeholder="Label" [(ngModel)]="obj.label" [ngModelOptions]="{standalone: true}">
          </mat-form-field>
        </div>

        <div class="col-sm-6">
          <mat-form-field>
            <input matInput placeholder="Input Place Holder" [(ngModel)]="obj.placeholder"
              [ngModelOptions]="{standalone: true}">
          </mat-form-field>
        </div>

        <div class="col-sm-6">
          <mat-form-field>
            <input matInput placeholder="Hint/Description" [(ngModel)]="obj.description"
              [ngModelOptions]="{standalone: true}">
          </mat-form-field>
        </div>

        <div class="col-sm-6">
          <mat-form-field>
            <mat-label>Input Type</mat-label>
            <mat-select [(ngModel)]="obj.type" [ngModelOptions]="{standalone: true}">
              <mat-option value="text">text</mat-option>
              <mat-option value="number">number</mat-option>
              <mat-option value="radio">radio</mat-option>
              <mat-option value="date">date</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

        <div class="col-sm-6" *ngIf="obj.type=='slider'">
          <mat-form-field>
            <input type="text" placeholder="Min" matInput [(ngModel)]="min" [ngModelOptions]="{standalone: true}">
          </mat-form-field>
        </div>

        <div class="col-sm-6" *ngIf="obj.type=='slider'">
          <mat-form-field>
            <input type="text" placeholder="Max" matInput [(ngModel)]="max" [ngModelOptions]="{standalone: true}">
          </mat-form-field>
        </div>

        <div class="col-sm-6" *ngIf="obj.type=='date'">
          <mat-form-field>
            <input matInput [matDatepicker]="picker" [(ngModel)]="minDate" [ngModelOptions]="{standalone: true}"
              placeholder="Choose a min date">
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
          </mat-form-field>

          <mat-form-field>
            <input matInput [matDatepicker]="pickerMaxDate" [(ngModel)]="maxDate" [ngModelOptions]="{standalone: true}"
              placeholder="Choose a max date">
            <mat-datepicker-toggle matSuffix [for]="pickerMaxDate"></mat-datepicker-toggle>
            <mat-datepicker #pickerMaxDate></mat-datepicker>
          </mat-form-field>


        </div>
        <div class="col-sm-12 form-group " *ngIf="type=='radio' || type=='checkbox' || type=='dropdown'" >
          <label for="label" class="col-sm-12">Options</label>

          <div class="col-sm-7 form-group" *ngIf="type=='slider'">
            <mat-form-field>
              <input type="text" placeholder="Max" matInput [(ngModel)]="max" [ngModelOptions]="{standalone: true}">
            </mat-form-field>
          </div>

        </div>
        <div class="col-sm-6">
        <mat-form-field>
          <mat-label>Criteria</mat-label>
          <mat-select [(ngModel)]="obj.draftCriteriaId" [ngModelOptions]="{standalone: true}">
            <mat-option *ngFor="let item of criteriaList"  [value]="item._id">{{ item.name}}</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
        <div *ngIf="field.child && field.child.length > 0" class="parent-child-block col-sm-12">
          <div class="col-sm-12">
            <label id="example-radio-group-label">Do you want to related the question based on below options ?</label>
            <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
              [(ngModel)]="selectedOption" [ngModelOptions]="{standalone: true}">
              <mat-radio-button class="example-radio-button space" *ngFor="let ele of options"
                [value]="ele">
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
            <mat-form-field>
              <mat-label>Select Condition </mat-label>
              <select matNativeControl [(ngModel)]="condition" [ngModelOptions]="{standalone: true}">
                <option *ngFor="let values of conditionArray" [ngValue]="values.condition"> {{ values.label }} </option>
              </select>
            </mat-form-field>
          </div>

          <div class="col-sm-6" *ngIf="type=='text' || type=='date' || type=='number'">
            <mat-form-field>
              <input type="tex" matInput name="conditionMatchValue" placeholder="" [(ngModel)]="conditionMatchValue"
                [ngModelOptions]="{standalone: true}">
            </mat-form-field>
          </div>

          <div class="col-sm-2">
            <button mat-flat-button color="primary" class = "addbtn" (click)="parentMapping()">
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
        <div class="col-sm-6">
          <label id="example-radio-group-label">is Required ?</label>
          <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
            [ngModelOptions]="{standalone: true}" style = "padding: 5px" [(ngModel)]="required">
            <mat-radio-button  class="example-radio-button gap" [value]=true>
              Yes
            </mat-radio-button>
            <mat-radio-button  class="example-radio-button gap" [value]=false>
              No
            </mat-radio-button>
          </mat-radio-group>
        </div>

        <div class="col-sm-6">
        <label id="example-radio-group-label">Applicable ?</label>
        <mat-radio-group [ngModelOptions]="{standalone: true}" style = "padding: 5px" aria-labelledby="radio-group-label" 
        class="radio-group" [(ngModel)]="applicable">
          <mat-radio-button class="example-radio-button gap" [value]=true>
            Yes
          </mat-radio-button>
          <mat-radio-button class="example-radio-button gap" [value]=false>
            No
          </mat-radio-button>
        </mat-radio-group>
      </div>

        <div class="col-sm-7" *ngIf="type=='date'">
          <label id="example-radio-group-label">is autoCollect</label>
          <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
            [(ngModel)]="autoCollect" [ngModelOptions]="{standalone: true}">
            <mat-radio-button class="example-radio-button" [value]=true>
              True
            </mat-radio-button>
            <mat-radio-button class="example-radio-button" [value]=false>
              False
            </mat-radio-button>
          </mat-radio-group>
        </div>


        <div class="col-sm-12">
          <button mat-flat-button color="primary" style="margin-right:10px;" (click)="closeModelChild('save', obj)">
            Save
          </button>

        </div>
      </div>

      
      <div class="col-sm-2 edit-icon actions">
        <i class="fa fa-trash" title = "delete" (click)="deleteElement(obj, i)"></i>
        <i class="fa fa-copy" title = "copy" (click)="copyElement(obj, i)"></i>
        <i class="fa fa-edit" title = "edit" (click)="loadFormChildElement(obj, i)"></i>
      </div>
      <div class="col-md-0 matrixmain" [ngClass]="{'active-questn': obj.isOpen == true}" [ngSwitch]="obj.type">

        <textbox class = "mchild" *ngSwitchCase="'number'" [field]="obj" [form]="form"></textbox>

        <textbox class = "mchild" *ngSwitchCase="'text'" [field]="obj" [form]="form"></textbox>

        <date class = "mchild" *ngSwitchCase="'date'" [field]="obj" [form]="form"></date>

        <slider class = "mchild" *ngSwitchCase="'slider'" [field]="obj" [form]="form"></slider>

        <dropdown class = "mchild" *ngSwitchCase="'dropdown'" [field]="obj" [form]="form"></dropdown>

        <checkbox class = "mchild" *ngSwitchCase="'checkbox'" [field]="obj" [form]="form"></checkbox>

        <radio class = "mchild" *ngSwitchCase="'radio'" [field]="obj" [form]="form"></radio>

        <file class = "mchild" *ngSwitchCase="'file'" [field]="obj" [form]="form"></file>


      </div>
      
    </div>

  </div>
</div>
`,
  styles: [`

  .parent-child-block {
    margin-top: 10px;
    margin-bottom: 15px;
    padding: 15px;
    border: 0.02px solid #ccc;
  }

  .active-questn {
    border: 2px solid #a63936;
    border-left: none;
    border-top: none;
    border-right: none;
  }
    .form-control {
      display: none;
    }
    .mat-form-field {
      display: block;
    }
    .fa {
      padding: 3px;
    }
    .actions {
    float: right;
    cursor: pointer;
    padding: 0px;
    text-align: right;
    }
    .space {
      padding: 10px
    }
    .matrixmain {
      width: 98%;
      margin-left: 2%;
      padding-left: 10px;
      margin-top: 10px;
      box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);
      padding-bottom: 10px;
    }
    .editmatrix {
      padding: 20px;
      border: 1px solid #ccc;
      margin-top:10px;
      margin-right:0px;
   
      margin-left: 20%;
      box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);
      margin-top:20px;"
    }
    .addbtn {
      margin-top: 10px;
    }
    .mchild {
      padding-left:30px;
    }
    .gap {
      padding: 2px;
    }
    .labeloverflow {
      float: none !important;
    }
    @media only screen and (max-width: 600px) {
      .actions {
       position: inherit
      }
      .editmatrix {
        border: 1px solid rgb(204, 204, 204);
        margin: 33px 0px 7px 0px;
        box-shadow: rgba(0, 0, 0, 0.19) 1px 1px 4px 1px;
      }
      .labeloverflow {
        float: none !important;
      }
    }
    `]
})
export class MultiSelectComponent {

  @Input() field: any = {};
  @Input() criteriaList: any;
  @Input() form: any;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  @Output() sendDataToParent = new EventEmitter<string>();
  @Output() childrenDropEvent = new EventEmitter<string>();
  @Output() copyOrDeleteEvent = new EventEmitter<string>();
  @Output() onFieldUpdate = new EventEmitter();

  // obj:Object= {};

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
  childtitle: any;
  applicable: any;
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
  ];
  currentItem: any;
  draftCriteriaId:any;

  constructor(public cdr: ChangeDetectorRef,
    private dynamicServe: DynamicFormBuilderService) {
  }
  onDropNew($event, field) {
    if ($event.data.responseType && $event.data.responseType != 'matrix') {
      $event.data.mutiSelect = field;
      this.childrenDropEvent.emit($event.data);
    } else {
      console.log("not allowed");
    }
    this.loadFormChildElement(field.child[field.child.length-1], field.child.length-1);
  }

  parentMapping() {
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
    this.getSelectQuestion = this.allData['questionList']['questionList'].filter(ele => {
      if (ele.field == this.field.field) {
        return ele;
      }
    });

    let isAvailable = false;
    if (this.getSelectQuestion['visibleIf'] && this.getSelectQuestion['visibleIf'].length > 0) {
      isAvailable = this.getSelectQuestion['visibleIf'].filter(item => {
        if (item.visibleIf.field == this.field.field) {
          return true
        }
      })
    }
    let allData = [];
    let addObj = false;
    for (let i = 0; i < this.getSelectQuestion.length; i++) {
      debugger
      if (this.getSelectQuestion[i].parentChildren) {
        if (this.getSelectQuestion[i].parentChildren.indexOf(this.currentSelectedQtn.field) !== -1) {
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
      // this.sendDataToParent()
      if (!this.listOfRelation.includes(condiObj)) {
        this.listOfRelation.push(condiObj);
      }
    }
    if (this.condition) {
    }
  }

  closeModelChild(action, data) {

    if (action == "save") {
      let obj = {
        label: '',
        type: '',
        placeholder: '',
        options: '',
        validations: '',
        field: '',
        _id: this._id,
        description: '',
        isOpen:false,
        draftCriteriaId:''
      }
      obj.label = data.label;
      obj.field = data.field;
      obj.type = data.type;
      obj.placeholder = data.placeholder;
      obj.options = data.options;
      obj.description = data.description;
      obj.draftCriteriaId = data.draftCriteriaId;
      

      if (data.type == 'date') {
        obj['minDate'] = data.minDate;
        obj['maxDate'] = data.maxDate
      } else if (data.type == 'slider') {
        obj['min'] = data.min;
        obj['max'] = data.max;
      }
      var index = this.field.child.findIndex(el => el.field === this.currentItem.field);

      console.log(this.currentItem.field,"file",obj)
      this.field.child.splice(index, 1, obj)

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
      
      this.dynamicServe.updateQuestion(this.field);



      // console.log(" this.field", this.field);
      this.openEditChild = false;
     this.sendDataToParent.emit(this.field);
    } else {
      this.openEditChild = false;
      // this.modalReference.close();
    }
    // this.modalService.close();
    //  this.myModal.nativeElement.className = 'modal hide';
  }

  loadFormChildElement(loadEle, id) {
    // console.log("item ---", loadEle, "id", id);
    loadEle.expand = !loadEle.expand;
    this.field.child = this.field.child.filter(loopEle=>{
      if(loopEle){
        if(loopEle.isOpen){
          if(loadEle.field==loopEle.field){
            loopEle.isOpen=false;
            return loopEle;
          }else{
            loopEle.isOpen=false;
            return loopEle;
          }
        }else{
          if(loadEle.field==loopEle.field){
            loopEle.isOpen=true;
            return loopEle;
          }else{
            loopEle.isOpen=false;
            return loopEle;
          }
        }
      } 
    })


    this.activeModelData = "";
    this.label = loadEle.label;
    this.currentItem = loadEle;
    this.allData = this.dynamicServe.getALl();
    this.criteriaList = this.allData['criteriaList'];


    console.log('this.field', this.field);
    // for(let i = 0; i < this.allData['questionList']['questionList'][0].child.length; i++) {
    this.filtereddata = this.field.child.filter(t => t.field !== loadEle.field);
    // }
    // this.filtereddata = this.field.child;


    console.log('multi select', this.allData);
    console.log('this.filtereddata', this.filtereddata)
    this.type = loadEle.type;
    this.placeholder = loadEle.placeholder;
    this.options = loadEle.options;
    this._id = loadEle._id;
    // this.required = item.validations.required;
    this.description = loadEle.description;
    this.draftCriteriaId = loadEle.draftCriteriaId;
    if (loadEle.type == "date") {
      this.minDate = loadEle.validations.minDate;
      this.maxDate = loadEle.validations.maxDate
      this.autoCollect = loadEle.validations.autoCollect;
    }
    else if (loadEle.type == "slider") {
      this.min = loadEle.validations.min;
      this.max = loadEle.validations.max;
    }
    this.openEditChild = this.openEditChild ? false : true;
    this.cdr.detectChanges();
  }

  // To delete questions
  deleteCondition(data, value) {
    this.listOfRelation.splice(value, 1);
    this.getSelectQuestion[0].child.splice(value, 1);
  }

  // To Delete the element in the matrix
  deleteElement(item, index) {
    this.field.deleteindex = index;
    this.field.isDelete = true;
    this.sendDataToParent.emit(this.field);
  }

  // To copy the element in the matrix
  copyElement(item, index) {

    debugger;
    // this.field.push(item);
    console.log("before copy field ----------", this.field.child.length);

    let lengthOfChild = this.field.child.length + 1;
    let newobj: any = {
    action: "copy",
    description: item.description,
    field: item.field + '' +lengthOfChild,
    label: item.label,
    placeholder: item.placeholder,
    position: item.pointer,
    type: item.type
    }
   
    console.log("after copy field ----------", newobj, 'index', index);
    this.field.child.push(newobj);
    this.dynamicServe.updateQuestion(this.field);
    // this.copyOrDeleteEvent.emit(newobj);
    // this.sendDataToParent.emit(newobj);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.field.child, event.previousIndex, event.currentIndex);
  }

}
