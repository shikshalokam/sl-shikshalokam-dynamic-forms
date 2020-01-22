import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DndDropEvent } from 'ngx-drag-drop'
import { DynamicFormBuilderService } from './dynamic-form-builder.service';

// import  { } from './dynamic-form-builder.service'

import { Observable } from 'rxjs';

@Component({
  selector: 'lib-dynamic-form-builder',
  template: `<style>
  /* created own file */


p {
    font-family: Lato;
  }
  .noPadding {
      padding: 0px;
  }

  
  .element {
    border: 1px solid midnightblue;
  list-style: none;
  padding: 10px;
  margin-bottom: 10px;
  color: midnightblue;
  width: 100%;
  text-align: left;
  cursor: pointer;  
  text-transform: capitalize;
}
.element-old {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  color: #333;
  text-align: left;
  text-transform: capitalize;
}

.toolbar {
  border: 1px solid midnightblue;
  list-style: none;
  padding: 10px;
  margin-bottom: 10px;
  color: midnightblue;
  width: 100%;
  text-align: left;
  display: block;
  text-transform: capitalize;
  cursor:pointer;
  font-size: 16px;
}
.margin-5 {
    margin-top:5%;
}
  .element span {
    text-transform: uppercase !important;
  }
  .form-group {
      margin-bottom: 0.5rem;
      border: 1px solid #ece7e7;
  }
  .cursor-pntr {
      cursor: pointer;
  }

  .showQBlock {
    background: #a5f1d7;
    padding: 50px;
    opacity: 0.75;
    min-height: 390px;
  }

  .start-create {
    width: 50%;
    margin:auto;
    padding:20px;
  }
  .start-create:hover .add-qicons{
    display:block;
  }
  .toolbar i.material-icons {
    vertical-align: middle;
  }
  .element i.material-icons {
    vertical-align: middle;
    float: right;
  }
  .add-qicons{
    padding: 5px;
    text-align: center;
    width:100%;
    margin:auto;
   
  }
  .qtype {
    float: left;
  }
  .space {
    padding-top:20px;
  }

  @media only screen and (max-width:600px) {
    .start-create {
      width: 100%;
      padding: 0px;
    }
  }
  </style>
  <div class="col-sm-12">
      

    <div class="col-sm-12 noPadding">
    <div class="card showQBlock" *ngIf="fields.length <= 0 && showQuestionBlock">

      <div>
        <div class="start-create">
         <h2 class="text-center" ><span class="start-create">Start Creating a Question</span></h2>
         <div class="add-qicons">
              <div class="col-sm-6"  *ngFor="let item of jsonData;let i = index">
                <div *ngIf="i <= 4" class="element"   (click)="onDrop(item.responseType)">
                  <span  >
                  <i class="material-icons">{{ item.icon }}</i>{{ item.responseType }}
                  </span>
                </div>
                <div *ngIf="i > 4" class="element" (click)="onDrop(item.responseType)">
                  <span   >
                  <i class="material-icons">{{ item.icon }}</i>{{ item.responseType }}
                  </span>
                </div>
              </div>
              </div>
         </div>
      </div>

    </div>
    <div class="card" *ngIf="fields.length > 0 || !showQuestionBlock">
          <div dndDropzone class="card-body" (dndDrop)="onDrop($event)">
              <form (ngSubmit)="onSubmit(this.form.value)" [formGroup]="form" class="form-horizontal">
            <dynamic-form-builder [fields]="getFields()" [form]="form"  (onFieldUpdate)="onFieldUpdate($event)" ></dynamic-form-builder>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-12 space" *ngIf="fields.length > 0  || !showQuestionBlock">
          
          <div  class="col-md-12">
            <!-- <dynamic-form-builder [fields]="getFields()"></dynamic-form-builder> -->
      
            <span  class ="qtype" *ngFor="let item of jsonData">
              <span [dndDraggable]="item" (click)="onDrop(item.responseType)"  class="toolbar">
            {{ item.responseType }}   <i class="material-icons">{{ item.icon }}</i>
             </span>
              </span>

              <!-- <div class="col-sm-12 element" (click)="addFormElement(item.responseType)" >Number</div> -->
            <!-- <div class="col-sm-12 element" (click)="addFormElement('input')" >Input</div>
            <div class="col-sm-12 element" (click)="addFormElement('number')" >Number</div> -->

          </div>
      </div>


      
      <div class="col-sm-12">
      </div>`,
  styleUrls: []
})
export class DynamicFormBuilderComponent implements OnInit {
  public form: FormGroup;
  unsubcribe: any;
  jsonData: any;
  formData: any;
  pageNumber: any;

  // @Input() data;
  @Input() events: Observable<any>;
  // @Output() questionList = new EventEmitter();
  @Output() questionTrigger = new EventEmitter();
  eventsSubscription: any;
  criteriaList: any;

  public fields: any[] = [];
  showQuestionBlock = true;

  constructor(private http: HttpClient,
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
    private dynamicServe: DynamicFormBuilderService
  ) {
    // this.form = new FormGroup({
    //   fields: this.fb.array([]),
    // })
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })

    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      // this.fields = JSON.parse(update.fields);
    });
  }



  showQBlock() {
    this.showQuestionBlock = false;
  }

  getCriteria() {
    return this.criteriaList;
  }
  ngOnInit() {
    this.criteriaList = [];
    this.getCriteria();
    this.eventsSubscription = this.events.subscribe(data => {
      console.log("calling from parent with data", data);
      if (data) {
        if (data == 'validate') {
          // to get all data 
          const pages = this.dynamicServe.getPageNumbers();
          let obj = {
            action: "all",
            data: this.fields,
            pages: pages
          }
          this.questionTrigger.emit(obj);
        } else if(data=='all'){

          const pages = this.dynamicServe.getPageNumbers();
          let obj = {
            action: "all",
            data: this.fields,
            pages: pages
          }
          this.questionTrigger.emit(obj);

        }else{
          this.criteriaList = data.criteriaList;
          let dt = data['questionArray'];
           this.formBuild(dt);

           this.showQuestionBlock = true;

         
          let completeData = {
            questionList: data['questionArray'],
            criteriaList: data.criteriaList
          }
          this.sendToService(completeData);
        }
      } else {
        const pages = this.dynamicServe.getPageNumbers();
        let obj = {
          action: "all",
          data: this.fields,
          pages: pages
        }
        this.questionTrigger.emit(obj);
      }
    })
    this.formData = [];
    this.jsonData = [
      {
        "responseType": "text",
        "icon": "text_format"
      }, {
        "responseType": "number",
        "icon": "indeterminate_check_box"
      }, {
        "responseType": "radio",
        "icon": "radio_button_checked"
      },
      {
        "responseType": "checkbox",
        "icon": "check_box"
      },
      {
        "responseType": "dropdown",
        "icon": "arrow_drop_down_circle"
      }, {
        "responseType": "date",
        "icon": "date_range"
      }, {
        "responseType": "slider",
        "icon": "arrow_forward"
      },
      {
        "responseType": "matrix",
        "icon": "kitchen"
      }
    ]
  }
  onUpload(e) {
    console.log(e);
  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }

  sendToService(data): void {
    // send message to subscribers via observable subject
    this.dynamicServe.sendData(data);
  }

  getToolObj(ele, len) {

    let obj = {

    }
    if (ele == 'text') {
      obj = {
        "position": len,
        "field": len + "question",
        "type": "text",
        "label": "Question",
        "placeholder": "",
        "description": "",
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": ""
        }
      }
    } else if (ele == 'number') {
      obj = {
        "field": len + "question",
        "type": "number",
        "position": len,
        "label": "Question",
        "placeholder": "",
        "description": "",
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": ""
        }
      }
    } else if (ele == 'radio') {
      obj = {
        field: len + "question",
        "position": len,
        type: 'radio',
        name: len + ". question",
        label: "Question",
        description: "",
        required: true,
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": ""
        },
        options: [
          { key: 'R1', label: 'Label 1', hint: 'hint 1' },
          { key: 'R2', label: 'Label 2' , hint: 'hint 2'}
        ]
      }
    } else if (ele == "checkbox") {
      obj = {
        field: len + "question",
        type: "checkbox",
        "position": len,
        name: len + ". question",
        label: "Question",
        description: "",
        required: true,
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": ""
        },
        options: [
          { key: 'option1', label: 'option 1' },
          { key: 'option2', label: 'option 2' }
        ]
      }
    } else if (ele == "dropdown") {
      obj = {
        field: len + "question",
        type: 'dropdown',
        "position": len,
        name: len + ". question",
        label: "Question",
        value: 'option1',
        description: "",
        required: true,
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": ""
        },
        options: [
          { key: 'option1', label: 'Option 1' },
          { key: 'option1', label: 'Option 2' }
        ]
      }
    } else if (ele == "date") {
      obj = {
        field: len + "question",
        type: 'date',
        "position": len,
        name: len + ". question",
        label: "Question",
        description: "",
        required: true,
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": "",
          "maxDate": "",
          "minDate": "",

        },
        options: [

        ]
      }
    } else if (ele == 'matrix') {
      if (ele == 'childDroped') {
        let childdata = {
          field: len + "question",
          "type": ele.type,
          "position": len,
          "label": "Question",
          "child": [],
          "placeholder": " ",
          "description": "",
          "validations": {
            "required": false,
            "minLenght": "",
            "maxLength": ""
          }
        }
      }
      let finalchild = [];
      finalchild.push()
      obj = {
        "field": len + "question",
        "type": "matrix",
        "label": "Question",
        "position": len,
        "child": [],
        "placeholder": " ",
        "description": "",
        "validations": {
          "required": false,
          "minLenght": "",
          "maxLength": ""
        }
      }
    } else if (ele == "slider") {
      obj = {
        field: len + "question",
        type: 'slider',
        "position": len,
        name: len + ". question",
        label: "Question",
        description: "",
        required: true,
        "validations": {
          "required": true,
          "min": "",
          "max": "",
          "maxDate": "",
          "minDate": "",
        },
        options: [
        ]
      }
    }

    this.fields = this.fields.filter(ele => {
      if (ele.isOpen) {
        ele.isOpen = false;
        return ele;
      } else {
        return ele;
      }
    });
    obj['isOpen'] = true;
    return obj;
  }

  onDrop(ele, action = "") {
    this.showQuestionBlock = false;
    if (ele.data) {
      ele = ele.data.responseType
    }
    let len = this.fields.length + 1;
    var obj = {};
    if (action == "copy") {
      let copyObj = {
        "position": len,
        "field": ele.field ? ele.field : len + "question",
        "type": ele.type,
        "label": ele.label,
        "placeholder": ele.placeholder,
        "validations": ele.validations,
        "formValidation": ele.formValidation ? ele.formValidation : {},
        "options": ele.options,
        "description": ele.description,
        "copied": true
      }
      obj = copyObj;
    } else {
      obj = this.getToolObj(ele, len);
    }
    let elem = this.fields;
    let trnasformData = {
      action: 'add',
      data: obj
    }
    this.formData.push(obj);
    let fieldsCtrls = {};
    this.form = new FormGroup(fieldsCtrls);
    for (let f of this.formData) {
      if (f['type'] != 'checkbox') {
        fieldsCtrls[f['field']] = new FormControl(f['value'] || '')
      } else {
        let opts = {};
        for (let opt of f['options']) {
          opts[opt.key] = new FormControl(opt.label);
        }
        fieldsCtrls[f['field']] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
    this.fields.push(obj);
    let completeData = {
      questionList: this.fields,
      criteriaList: this.criteriaList
    }
    this.sendToService(completeData);
    this.questionTrigger.emit(trnasformData);
  }

  formBuild(data) {

    // debugger;
    console.log("form data",data);
    let formData = [];
    this.fields = [];

    this.fields.slice(this.fields.length, 0);
    formData = data;
    let fieldsCtrls = {};
    this.form = new FormGroup(fieldsCtrls);
    for (let f of formData) {
      if (f['type'] != 'checkbox') {
        fieldsCtrls[f['field']] = new FormControl(f['value'] || '')
      } else {
        let opts = {};
        for (let opt of f['options']) {
          opts[opt.key] = new FormControl(opt.label);
        }
        fieldsCtrls[f['field']] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
    this.fields = formData;
    let obj = {
      action: "all",
      data: formData
    }

    console.log("this.fields-----",this.fields);
    this.questionTrigger.emit(obj);
  }

  onSubmit(value) {
    let obj = {
      action: "all",
      data: this.fields
    }
    this.questionTrigger.emit(obj);
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }

  lastDropEle = "";
  onFieldUpdate($event) {
    let eventObj = $event
    let trnasformData = {};
    if ($event.action == "reload") {
      let dataFromServ = this.dynamicServe.getALl();
      this.fields = dataFromServ['questionList']['questionList'];
    } else if ($event.action == "addnew") {
      this.onDrop($event.data.element);
    } else if ($event.action == "copy") {
      this.onDrop($event.data, "copy");
    } else if ($event.action == "delete") {
      trnasformData = {
        action: 'delete',
        data: $event
      }
    }
    else if ($event.action == 'childDelete') {
      trnasformData = {
        action: 'childDelete',
        data: $event
      }
    }
    else if ($event.action == "childDroped") {
      var final = this.fields.filter(
        item => {
          if (item.field === eventObj.data.mutiSelect.field) {
            let obj = this.getToolObj($event.data.responseType, item.child.length + 1);
            obj['isOpen'] = false;
            item.child.push(obj);
            trnasformData = {
              action: 'childDroped',
              data: $event
            }
            return item;
          } else {
            return item;
          }
        });
    } else {
      trnasformData = {
        action: 'update',
        data: $event
      }
    }
    this.questionTrigger.emit(trnasformData);
  }
}
