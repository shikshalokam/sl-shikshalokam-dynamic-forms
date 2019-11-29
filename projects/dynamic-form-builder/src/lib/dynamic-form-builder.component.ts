import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DndDropEvent } from 'ngx-drag-drop'

// import  { } from './dynamic-form-builder.service'

import { Observable } from 'rxjs';

@Component({
  selector: 'lib-dynamic-form-builder',
  template: `<style>
  p {
      font-family: Lato;
    }
    .noPadding {
        padding: 0px;
    }
    .margin-5 {
        margin-top:5%;
    }
    .element {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 10px;
      color: #333;
      text-align: left;
      text-transform: capitalize;
      box-shadow: 0 0px 0px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23);
  }
    .form-group {
        margin-bottom: 0.5rem;
        border: 1px solid #ece7e7;
    }
    .cursor-pntr {
        cursor: pointer;
    }
    
    
  </style>
  <div class="col-sm-12">
      <div class="col-sm-4 noPadding">
        <div class="card">
          <div class="card-header">Elements</div>
          <div class="card-body">
            <!-- <dynamic-form-builder [fields]="getFields()"></dynamic-form-builder> -->
      
            <div *ngFor="let item of jsonData">
              <div [dndDraggable]="item" (dndEnd)="onDragEnd(item.responseType)" class="col-sm-12 element"  >{{ item.responseType }}</div>
              <!-- <div class="col-sm-12 element" (click)="addFormElement(item.responseType)" >Number</div> -->
            </div>
            <!-- <div class="col-sm-12 element" (click)="addFormElement('input')" >Input</div>
            <div class="col-sm-12 element" (click)="addFormElement('number')" >Number</div> -->
          </div>
        </div>
      </div>
      <div class="col-sm-8 noPadding">
        <div class="card">
          <div class="card-header">Dynamic Forms</div>
          <div dndDropzone class="card-body">
              <form (ngSubmit)="onSubmit(this.form.value)" [formGroup]="form" class="form-horizontal">
            <dynamic-form-builder [fields]="getFields()" [form]="form"  (onFieldUpdate)="onFieldUpdate($event)" ></dynamic-form-builder>
            </form>
          </div>
        </div>
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


  // @Input() data;
  @Input() events: Observable<any>;
  // @Output() questionList = new EventEmitter();
  @Output() questionTrigger = new EventEmitter();
  eventsSubscription: any

  public fields: any[] = [
    // {
    //   type: 'text',
    //   name: 'firstName',
    //   label: 'First Name',
    //   value: '',

    // },
    // {
    //   type: 'number',
    //   name: 'firstName',
    //   label: 'Age',
    //   value: '',

    // },
    // {
    //   type: 'text',
    //   name: 'lastName',
    //   label: 'Last Name',
    //   value: '',
    //   required: true,
    // },
    // {
    //   type: 'text',
    //   name: 'email',
    //   label: 'Email',
    //   value: '',
    //   required: true,
    // },

    // {
    //   type: 'file',
    //   name: 'picture',
    //   label: 'Picture',
    //   required: true,
    //   onUpload: this.onUpload.bind(this)
    // },
    // {
    //   type: 'dropdown',
    //   name: 'country',
    //   label: 'Country',
    //   value: 'in',
    //   required: true,
    //   options: [
    //     { key: 'in', label: 'India' },
    //     { key: 'us', label: 'USA' }
    //   ]
    // },
    // {
    //   type: 'radio',
    //   name: 'country',
    //   label: 'Country',
    //   value: 'in',
    //   required: true,
    //   options: [
    //     { key: 'm', label: 'Male' },
    //     { key: 'f', label: 'Female' }
    //   ]
    // },
    // {
    //   type: 'checkbox',
    //   name: 'hobby',
    //   label: 'Hobby',
    //   required: true,
    //   options: [
    //     { key: 'f', label: 'Fishing' },
    //     { key: 'c', label: 'Cooking' }
    //   ]
    // }
  ];

  constructor(private http: HttpClient, private _formBuilder: FormBuilder, private fb: FormBuilder) {
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



  ngOnInit() {

    this.eventsSubscription = this.events.subscribe(data => {

      console.log("calling from parent with data", data);
      // this.questionList.emit(this.fields);

      if (data) {


        // this.formBuild = [];
        let dt = data;
        this.formBuild(dt);
        // this.fields = dt;

        
      }else{

        // this.fields = formData;
      let obj = {
        action: "all",
        data: this.fields
      }

      console.log("to get all",this.fields);
      this.questionTrigger.emit(obj);

      }
    })

    // this.http.get('../input.json').subscribe(data => {
    //   //  = data;
    //   console.log("data",data);
    // });

    this.formData = [];
    this.jsonData = [
      {
        "responseType": "text",

      }, {
        "responseType": "number",
      }, {
        "responseType": "radio",
      },
      {
        "responseType": "checkbox",
      },
      {
        "responseType": "dropdown"
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
  onDragEnd(ele) {

    let len = this.fields.length + 1;

    var obj = {};
    if (ele == 'text') {
      obj = {
        "position": len,
        "field": len + "question",
        "type": "text",
        "label": len + ". question",
        "placeholder": "Please enter your question here",
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": ""
        }
      }
    }
    if (ele == 'number') {
      obj = {
        "field": len + "question",
        "type": "number",
        "label": len + ". question",
        "placeholder": "Please enter your question here",
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": ""
        }
      }
    }

    

      if (ele == 'radio') {
        obj = {
          field: len + "question",
          type: 'radio',
          name: len + ". question",
          label: len + ". question",
          value: 'in',
          required: true,
          "validations": {
            "required": true,
            "minLenght": "",
            "maxLength": ""
          },
          options: [
            { key: 'option1', label: 'Label 1' },
            { key: 'option2', label: 'Label 1' }
          ]
        }
      }
      if (ele == "checkbox") {
        obj = {
          field: len + "question",
          type: "checkbox",
          name: len + ". question",
          label: len + ". question",
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
      }
      if (ele == "dropdown") {
        obj = {
          field: len + "question",
          type: 'dropdown',
          name: len + ". question",
          label: len + ". question",
          value: 'option1',
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
      }
      let elem = this.fields;

      let trnasformData = {
        action: 'add',
        data: obj
      }
      console.log("transf", trnasformData);
      this.questionTrigger.emit(trnasformData);

      this.formData.push(obj);
      let fieldsCtrls = {};

      this.form = new FormGroup(fieldsCtrls);
      // console.log("------", obj);
      for (let f of this.formData) {


        if (f['type'] != 'checkbox') {

          console.log("f.type", f['field']);
          fieldsCtrls[f['field']] = new FormControl(f['value'] || '')
        } else {

          let opts = {};
          for (let opt of f['options']) {

            opts[opt.key] = new FormControl(opt.label);
          }
          fieldsCtrls[f['field']] = new FormGroup(opts)
        }

        // const creds = this.form.controls.fields as FormArray;
        // creds.push(this.fb.group(fieldsCtrls));


        // console.log("fieldsCtrls",fieldsCtrls);

        // this.formData =  this.fields;

      }
      this.form = new FormGroup(fieldsCtrls);
      // this.fields
      // this.formBuild();
      this.fields.push(obj);
      console.log("fields controls", this.form);
    
  }


  formBuild(data) {
     let formData = [];
     this.fields = [];

     this.fields.slice(this.fields.length,0);
     formData = data;
      let fieldsCtrls = {};
      this.form = new FormGroup(fieldsCtrls);
      for (let f of formData) {
        if (f['type'] != 'checkbox') {
          console.log("f.type", f['field']);
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

      console.log("this.fields-------",this.fields);
      this.questionTrigger.emit(obj);


      // this.fields = data;

    // let fieldsCtrls = {};

    // console.log(" this.fields", data);
    // for (let f of data) {


    //   if (f.type != 'checkbox') {

    //     fieldsCtrls[f.name] = new FormControl(f.value || '')
    //   } else {
    //     let opts = {};
    //     for (let opt of f.options) {

    //       opts[opt.key] = new FormControl(opt.value);
    //     }
    //     fieldsCtrls[f.name] = new FormGroup(opts)
    //   }
    // }
    // this.form = new FormGroup(fieldsCtrls);
  }

  onSubmit(value) {
    console.log("value", this.fields);

    // this.questionList.emit(this.fields);

    let obj = {
      action: "all",
      data: this.fields
    }
    this.questionTrigger.emit(obj);
  }


  // (event) {
  //   console.log('Element was dragged', event);
  // }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }
  onFieldUpdate($event){
    console.log("eventData ------",$event);

    let trnasformData = { };
    if($event.action=="delete"){


      console.log("delete json",$event);
       trnasformData = {
        action: 'delete',
        data: $event
       }
      }else{
        trnasformData = {
          action: 'update',
          data: JSON.parse($event)
      }
      
    }
   
    console.log("transf", trnasformData);
    this.questionTrigger.emit(trnasformData);


  }
}
