import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Component, EventEmitter, Output, Input, ViewChild, NgModule, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatDialog, MatButtonModule, MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatSelectModule, MatTooltipModule, MatTabsModule, MatCardModule, MatDialogModule, MatStepperModule, MatTableModule, MatExpansionModule, MatPaginatorModule, MatNativeDateModule, MatToolbarModule } from '@angular/material';
import { DndModule } from 'ngx-drag-drop';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @Injectable({
//   // providedIn: 'root'
// })
class DynamicFormBuilderService {
    constructor() {
        this.communicateSubject = new Subject();
        // private messageSource = new BehaviorSubject('default message');
        // currentMessage = this.messageSource.asObservable();
        this.list = [];
        this.pagelist = [];
        this.all = [];
        this.criteriaList = [];
    }
    /**
     * @return {?}
     */
    currentMessage() {
        return this.list;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    sendData(obj) {
        console.log("obj", obj);
        this.list = obj;
        this.communicateSubject.next();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setPageNumber(data) {
        this.pagelist = data;
        console.log("data=====page", data);
        this.communicateSubject.next();
    }
    /**
     * @return {?}
     */
    getPages() {
        return this.pagelist;
    }
    /**
     * @return {?}
     */
    getPageNumbers() {
        return this.pagelist;
    }
    // setQuestionList(list){
    //   this.list = list;
    // }
    // changeMessage(message: string) {
    //   this.messageSource.next(message);
    // }
    /**
     * @return {?}
     */
    getALl() {
        // let all = {
        //   questionList:[]
        // }
        this.all = {
            criteriaList: this.criteriaList,
            questionList: this.list
        };
        console.log("executing in service", this.all);
        // return this.communicateSubject.asObservable();
        return this.all;
    }
    /**
     * @return {?}
     */
    getQuestions() {
        return this.list;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    setCriteria(list) {
        this.criteriaList = list;
    }
    /**
     * @param {?} questionEle
     * @return {?}
     */
    updateQuestion(questionEle) {
        console.log("update question", questionEle);
        this.list = this.list['questionList'].filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.field == questionEle.field) {
                return questionEle;
            }
            else {
                return item;
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicFormBuilderComponent {
    /**
     * @param {?} http
     * @param {?} _formBuilder
     * @param {?} fb
     * @param {?} dynamicServe
     */
    constructor(http, _formBuilder, fb, dynamicServe) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.fb = fb;
        this.dynamicServe = dynamicServe;
        // @Output() questionList = new EventEmitter();
        this.questionTrigger = new EventEmitter();
        this.fields = [];
        this.showQuestionBlock = true;
        // this.form = new FormGroup({
        //   fields: this.fb.array([]),
        // })
        this.form = new FormGroup({
            fields: new FormControl(JSON.stringify(this.fields))
        });
        this.unsubcribe = this.form.valueChanges.subscribe((/**
         * @param {?} update
         * @return {?}
         */
        (update) => {
            console.log(update);
            // this.fields = JSON.parse(update.fields);
        }));
    }
    /**
     * @return {?}
     */
    showQBlock() {
        this.showQuestionBlock = false;
    }
    /**
     * @return {?}
     */
    getCriteria() {
        return this.criteriaList;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.criteriaList = [];
        this.getCriteria();
        this.eventsSubscription = this.events.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.log("calling from parent with data", data);
            if (data) {
                // let dt = data;
                // this.formBuild(dt);
                this.criteriaList = data.criteriaList;
                /** @type {?} */
                let dt = data['questionArray'];
                console.log("");
                this.formBuild(dt);
                /** @type {?} */
                let completeData = {
                    questionList: data['questionArray'],
                    criteriaList: data.criteriaList
                };
                console.log(" eventsSubscription completeData", completeData);
                this.sendToService(completeData);
            }
            else {
                /** @type {?} */
                const pages = this.dynamicServe.getPageNumbers();
                /** @type {?} */
                let obj = {
                    action: "all",
                    data: this.fields,
                    pages: pages
                };
                console.log("to get all", this.fields);
                this.questionTrigger.emit(obj);
            }
        }));
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
                "icon": "date_range"
            },
            {
                "responseType": "matrix",
                "icon": "date_range"
            }
        ];
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onUpload(e) {
        console.log(e);
    }
    /**
     * @return {?}
     */
    getFields() {
        return this.fields;
    }
    /**
     * @return {?}
     */
    ngDistroy() {
        this.unsubcribe();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    sendToService(data) {
        // send message to subscribers via observable subject
        this.dynamicServe.sendData(data);
    }
    /**
     * @param {?} ele
     * @param {?} len
     * @return {?}
     */
    getToolObj(ele, len) {
        /** @type {?} */
        let obj = {};
        if (ele == 'text') {
            obj = {
                "position": len,
                "field": len + "question",
                "type": "text",
                "label": "Question",
                "placeholder": "Please enter your question here",
                "description": "",
                "validations": {
                    "required": true,
                    "minLenght": "",
                    "maxLength": ""
                }
            };
        }
        else if (ele == 'number') {
            obj = {
                "field": len + "question",
                "type": "number",
                "position": len,
                "label": "Question",
                "placeholder": "Please enter your question here",
                "description": "",
                "validations": {
                    "required": true,
                    "minLenght": "",
                    "maxLength": ""
                }
            };
        }
        else if (ele == 'radio') {
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
                    { key: 'R1', label: 'Label 1' },
                    { key: 'R2', label: 'Label 2' }
                ]
            };
        }
        else if (ele == "checkbox") {
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
            };
        }
        else if (ele == "dropdown") {
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
            };
        }
        else if (ele == "date") {
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
                options: []
            };
        }
        else if (ele == 'matrix') {
            if (ele == 'childDroped') {
                /** @type {?} */
                let childdata = {
                    field: len + "question",
                    "type": ele.type,
                    "position": len,
                    "label": "Question",
                    "child": [],
                    "placeholder": "Please add Child's here",
                    "description": "",
                    "validations": {
                        "required": false,
                        "minLenght": "",
                        "maxLength": ""
                    }
                };
            }
            obj = {
                "field": len + "question",
                "type": "matrix",
                "label": "Question",
                "position": len,
                "child": [],
                "placeholder": "Please add Child's here",
                "description": "",
                "validations": {
                    "required": false,
                    "minLenght": "",
                    "maxLength": ""
                }
            };
        }
        else if (ele == "slider") {
            obj = {
                field: len + "question",
                type: 'slider',
                "position": len,
                name: len + ". question",
                label: ". question",
                description: "",
                required: true,
                "validations": {
                    "required": true,
                    "min": "",
                    "max": "",
                    "maxDate": "",
                    "minDate": "",
                },
                options: []
            };
        }
        return obj;
    }
    /**
     * @param {?} ele
     * @param {?=} action
     * @return {?}
     */
    onDrop(ele, action = "") {
        this.showQuestionBlock = false;
        console.log("drop ele", ele);
        if (ele.data) {
            ele = ele.data.responseType;
        }
        /** @type {?} */
        let len = this.fields.length + 1;
        /** @type {?} */
        var obj = {};
        console.log(action, "calling from child copy", ele);
        debugger;
        if (action == "copy") {
            /** @type {?} */
            let copyObj = {
                "position": len,
                "field": ele.field ? ele.field : len + "question",
                "type": ele.type,
                "label": ele.label,
                "placeholder": ele.placeholder,
                "validations": ele.validations,
                "options": ele.options,
                "description": ele.description,
                "copied": true
            };
            obj = copyObj;
        }
        else {
            obj = this.getToolObj(ele, len);
        }
        /** @type {?} */
        let elem = this.fields;
        /** @type {?} */
        let trnasformData = {
            action: 'add',
            data: obj
        };
        console.log("transf", trnasformData);
        this.formData.push(obj);
        /** @type {?} */
        let fieldsCtrls = {};
        this.form = new FormGroup(fieldsCtrls);
        console.log("------", obj);
        for (let f of this.formData) {
            if (f['type'] != 'checkbox') {
                console.log("f.type", f['field']);
                fieldsCtrls[f['field']] = new FormControl(f['value'] || '');
            }
            else {
                /** @type {?} */
                let opts = {};
                for (let opt of f['options']) {
                    opts[opt.key] = new FormControl(opt.label);
                }
                fieldsCtrls[f['field']] = new FormGroup(opts);
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
        /** @type {?} */
        let completeData = {
            questionList: this.fields,
            criteriaList: this.criteriaList
        };
        console.log("completeData", completeData);
        this.sendToService(completeData);
        // this.questionTrigger.emit(trnasformData);
        this.questionTrigger.emit(trnasformData);
        // console.log("fields controls", this.form);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    formBuild(data) {
        /** @type {?} */
        let formData = [];
        this.fields = [];
        this.fields.slice(this.fields.length, 0);
        formData = data;
        /** @type {?} */
        let fieldsCtrls = {};
        this.form = new FormGroup(fieldsCtrls);
        for (let f of formData) {
            if (f['type'] != 'checkbox') {
                console.log("f.type", f['field']);
                fieldsCtrls[f['field']] = new FormControl(f['value'] || '');
            }
            else {
                /** @type {?} */
                let opts = {};
                for (let opt of f['options']) {
                    opts[opt.key] = new FormControl(opt.label);
                }
                fieldsCtrls[f['field']] = new FormGroup(opts);
            }
        }
        this.form = new FormGroup(fieldsCtrls);
        this.fields = formData;
        /** @type {?} */
        let obj = {
            action: "all",
            data: formData
        };
        console.log("this.fields-------", this.fields);
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
    /**
     * @param {?} value
     * @return {?}
     */
    onSubmit(value) {
        console.log("value", this.fields);
        // this.questionList.emit(this.fields);
        /** @type {?} */
        let obj = {
            action: "all",
            data: this.fields
        };
        this.questionTrigger.emit(obj);
    }
    // (event) {
    //   console.log('Element was dragged', event);
    // }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFieldUpdate($event) {
        console.log("eventData sssssss------", $event);
        /** @type {?} */
        let eventObj = $event;
        /** @type {?} */
        let trnasformData = {};
        if ($event.action == "addnew") {
            this.onDrop($event.data.element);
        }
        if ($event.action == "copy") {
            this.onDrop($event.data, "copy");
        }
        else if ($event.action == "delete") {
            // this.fields = this.fields.filter( each => {
            //   return each.field != $event.data.field
            // })
            // console.log("$event",$event.data.field); 
            trnasformData = {
                action: 'delete',
                data: $event
            };
        }
        else if ($event.action == 'childDelete') {
            trnasformData = {
                action: 'childDelete',
                data: $event
            };
        }
        else if ($event.action == "childDroped") {
            console.log('this.fields', this.fields);
            /** @type {?} */
            var final = this.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.field === eventObj.data.mutiSelect.field) {
                    console.log("");
                    console.log(eventObj.data.mutiSelect.field, '====== this.fields  =====', item);
                    // if(item.child){
                    /** @type {?} */
                    let obj = this.getToolObj($event.data.responseType, item.child.length + 1);
                    // }
                    item.child.push(obj);
                    trnasformData = {
                        action: 'childDroped',
                        data: $event
                    };
                    return item;
                }
                else {
                    return item;
                }
            }));
            // final.push(obj);
            // this.fields
            console.log('final result', final);
            // console.log("main obj", obj);
        }
        else {
            trnasformData = {
                action: 'update',
                data: $event
            };
        }
        this.questionTrigger.emit(trnasformData);
    }
}
DynamicFormBuilderComponent.decorators = [
    { type: Component, args: [{
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
    list-style: none;
    padding: 10px;
    margin-bottom: 10px;
    color: midnightblue;
    width: 100%;
    text-align: left;
    display: block;
    margin: 1%;
    font-size: 16px;
    border: 1px solid midnightblue;
    padding: 6px;
    cursor: pointer;
    text-transform: capitalize;
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
      padding: 0 px;
      float: right;
    }
    .element i.material-icons {
      vertical-align: middle;
      float: right;
    }
    .add-qicons{
     
      // background: #d9d9f9;
      padding: 5px;
      text-align: center;
      width:100%
      margin: auto;
      // box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);
    }
    .qtype {
      float: left;
      margin-left: 5pxpx;
    }
    .space {
      padding-top:20px;
    }

    @media only screen and (max-width:600px) {
      .qtype {
        float: left;
        width: 50%
        margin-left: 0px;
      }
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
      
            <span  class ="qtype" *ngFor="let item of jsonData" >
              <span [dndDraggable]="item" (click)="onDrop(item.responseType)"  class="toolbar"  >
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
            },] },
];
/** @nocollapse */
DynamicFormBuilderComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: FormBuilder },
    { type: FormBuilder },
    { type: DynamicFormBuilderService }
];
DynamicFormBuilderComponent.propDecorators = {
    events: [{ type: Input }],
    questionTrigger: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicFormBuilderComponent$1 {
    constructor() {
        this.onFieldUpdate = new EventEmitter();
        this.fields = [];
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
                "icon": "date_range"
            },
            {
                "responseType": "matrix",
                "icon": "date_range"
            }
        ];
    }
    ;
    /**
     * @param {?} element
     * @return {?}
     */
    addElement(element) {
        /** @type {?} */
        let obj = {
            action: "addnew",
            element: element
        };
        this.copyOrDeleteEvent(obj);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    copyOrDeleteEvent(data) {
        debugger;
        console.log('data type', data);
        console.log('this.fields', this.fields);
        if (typeof (data) === 'string') {
            data = JSON.parse(data);
        }
        // let childdata = data;
        // let finaldata = JSON.parse(childdata);
        // console.log(JSON.parse(data),"parse copyEvent occured");
        // let obj = data;
        console.log(data, "copyEvent occured");
        // data.field =(this.fields.length+1)+"question";
        // data.label = (this.fields.length+1)+" question";
        if (data.action == "addnew") {
            /** @type {?} */
            let transferData = {
                action: "addnew",
                data: data
            };
            this.onFieldUpdate.emit(transferData);
        }
        else if (data.action == "copy") {
            console.log(data, "this.form before");
            /** @type {?} */
            let transferData = {
                action: "copy",
                data: data
            };
            this.onFieldUpdate.emit(transferData);
            //  data.field = (this.fields.length+1)+"question";
            //  console.log("data",data)
            // this.formBuild(obj);
        }
        else if (data.action == "delete") {
            // var index = this.fields.indexOf(data);
            // console.log("ind", index);
            this.onFieldUpdate.emit(data);
            // this.fields.splice(index, 1);
            // this.fields = this.fields.filter(function(value, index, arr){
            //   return value!=data;
            // });
            // console.log("evens",evens);
            // this.fields= evens;
            // console.log("this.form",this.form);
            // this.fields.
            // console.log(this.fields.length,"copyEvent occured",evens);
        }
        else if (data.action == "childDelete") {
            // console.log('childDelete', this.fields);
            // var index = this.fields[0].child.indexOf(data);
            // console.log("ind", index);
            this.onFieldUpdate.emit(data);
        }
        else if (data.action == "childDroped") {
            this.onFieldUpdate.emit(data);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    eventFromChild(data) {
        this.onFieldUpdate.emit(data);
        console.log("data from child  ------- ", data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formData = this.fields;
        console.log("this.form ---", this.form);
        // this.formBuild();
    }
}
DynamicFormBuilderComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-form-builder',
                styles: [`
      
  .addElement {
    display:none;
  }
  .add-qicons {
    display:none;
    font-size: 17px;
    width: 60%;
    margin-left: 40%;
    background: #a5f1d7;
    float: left;
    padding: 0px;
  }
  .element {
    line-height: 26px;
    font-size: 17px;
    padding: 6px;
    margin: 8px;
    border: 1px solid midnightblue;
    font-weight: bold;
    color: midnightblue;
  }
  .element i.material-icons {
    vertical-align: middle;
    float: right;
  }
  .addElement:hover .add-qicons {
    display:block;
  }
  `],
                template: `
   
     <div cdkDropList (cdkDropListDropped)="drop($event)"> <div *ngFor="let field of fields"  cdkDrag>
          <field-builder *ngIf="!field.isDeleted" [field]="field" [form]="form"  
          (sendDataToParent)="eventFromChild($event)" (copyOrDeleteEvent)="copyOrDeleteEvent($event)">
          </field-builder>
          <div class="addElement">
          <div style="float: right;
          font-size: 4.5em;
          color: midnightblue;
          cursor: pointer;
          line-height: 46px;">+</div>

          <div class="col add-qicons">
              <div class="col-sm-6"  *ngFor="let item of jsonData;let i = index">
                <div *ngIf="i <= 4" class="element" (click)="addElement(item.responseType)"  >
                  <span  >
                  <i class="material-icons">{{ item.icon }}</i>{{ item.responseType }}
                  </span>
                </div>
                <div *ngIf="i > 4" class="element" (click)="addElement(item.responseType)" >
                  <span   >
                  <i class="material-icons">{{ item.icon }}</i>{{ item.responseType }}
                  </span>
                </div>
              </div>
              </div>
         
          </div>
      </div></div>`
            },] },
];
/** @nocollapse */
DynamicFormBuilderComponent$1.ctorParameters = () => [];
DynamicFormBuilderComponent$1.propDecorators = {
    onFieldUpdate: [{ type: Output }],
    fields: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>
class FieldBuilderComponent {
    /**
     * @param {?} dynamicServe
     * @param {?} _snackBar
     * @param {?} dialog
     */
    constructor(dynamicServe, _snackBar, dialog) {
        this.dynamicServe = dynamicServe;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.sendDataToParent = new EventEmitter();
        this.copyOrDeleteEvent = new EventEmitter();
        this.pages = [{
                label: 'page 1',
                value: 'page 1'
            }, {
                label: 'page 2',
                value: 'page 2'
            }, {
                label: 'page 3',
                value: 'page 3'
            }];
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
        if (this.condition) ;
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
        this.dynamicServe.setPageNumber(this.pages);
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
        // this.pages = this.pages
        this.required = item.validations.required;
        this.description = item.description;
        this.pageNumber = item.pageNumber;
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
                pageNumber: this.pageNumber,
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
            this.field.pageNumber = this.pageNumber;
            this.field.draftCriteriaId = this.draftCriteriaId;
            // this.field.field = this.field.field;
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
            this.dynamicServe.updateQuestion(this.field);
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
        // this.deleteDraftCriteria();
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
    /**
     * @return {?}
     */
    AddNewOptions() {
        if (this.newOptionLabel != "") {
            this.newOptionKey = 'R' + this.options.length;
            console.log("this.newOption", this.newOptionLabel);
            if (Array.isArray(this.options)) ;
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
    /**
     * @param {?} data
     * @return {?}
     */
    add(data) {
        console.log(' add data', data);
        /** @type {?} */
        let page = {
            label: 'page' + ' ' + (data.length + 1),
            value: 'page' + ' ' + (data.length + 1),
        };
        this.pages.push(page);
        this.dynamicServe.setPageNumber(this.pages);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    eventFromChild($event) {
        if ($event.action == 'copy') ;
        else {
            $event.action = 'childDelete';
        }
        this.copyOrDeleteEvent.emit($event);
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
  margin-left: 90%
}
.spacearoundbtn{
  margin-top: 10px;
  margin-bottom: 15px;
}
.label.col-md-8.form-control-label {
  text-decoration: underline;
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
  <div class="row" *ngIf="openEdit" style="padding: 15px;
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
        <mat-select [(ngModel)]="type">
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
  
        <mat-select [(ngModel)]="pageNumber">
          <mat-option *ngFor="let page of pages; let i = index" value="{{page.value}}">{{page.label}}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <div class="col-sm-1">
      <span class="cursor-pntr addicon"><i title="Add Page" class="fa fa-plus"
          (click)="add(pages)"></i></span>
    </div>
  
    <div class="col-sm-6">
      <mat-form-field>
        <mat-label>Criteria</mat-label>
        <mat-select [(ngModel)]="draftCriteriaId">
          <mat-option *ngFor="let item of criteriaList" [value]="item._id">{{ item.name}}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <div class="col-sm-6">
    <label id="example-radio-group-label">is Reqired ?</label>
    <mat-radio-group aria-labelledby="radio-group-label" class="radio-group" [(ngModel)]="required">
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
        <input type="text" placeholder="Min" matInput [(ngModel)]="min" name="min value">
      </mat-form-field>
    </div>
  
    <div class="col-sm-6" *ngIf="type=='slider'">
      <mat-form-field>
        <input type="text" placeholder="Max" matInput [(ngModel)]="max" name="min value">
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
    <div class="" *ngIf="type=='radio' || type=='checkbox' || type=='dropdown'">
      <label for="label" class="col-sm-12">Options</label>
  
      <ul class="col-sm-12 option-ul" *ngFor="let opt of options;let i = index">
        <li class="">
          <span>{{opt.label}} </span><span style="
      margin-left: 30px;cursor: pointer" title = "delete" (click)="deleteOption(opt,i)">
            <i class="fa fa-trash"></i></span>
        </li>
      </ul>
  
      <div class="col-sm-12">
        <div class="input-group pull-left col-sm-6">
          <mat-form-field>
            <input type="text" placeholder="Label" matInput style="" [(ngModel)]="newOptionLabel"
              name="newOption">
          </mat-form-field>
        </div>
        <button mat-flat-button color="primary" class = "spacearoundbtn" (click)="AddNewOptions()">
          Add
        </button>
      </div>
    </div>
  
    <div *ngIf="filtereddata && filtereddata.length > 0">
      <div class="col-sm-12">
        <label id="example-radio-group-label">Do you want to related the question based on below options ?</label>
        <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
          [(ngModel)]="selectedOption">
          <mat-radio-button class="example-radio-button" *ngFor="let ele of options" [value]="ele">
            {{ ele.label }}
          </mat-radio-button>
        </mat-radio-group>
      </div>
  
  
      <div class="col-sm-6">
        <mat-form-field>
          <mat-label>Select Question to add </mat-label>
          <select matNativeControl [(ngModel)]="currentSelectedQtn">
            <option *ngFor="let values of filtereddata" [ngValue]="values"> {{ values.label }} </option>
          </select>
        </mat-form-field>
      </div>
  
      <div class="col-sm-6" *ngIf="type=='text' || type=='date' || type=='number'">
        <mat-form-field>
          <mat-label>Select Condition </mat-label>
          <select matNativeControl [(ngModel)]="condition">
            <option *ngFor="let values of conditionArray" [ngValue]="values.condition"> {{ values.label }} </option>
          </select>
        </mat-form-field>
      </div>
  
      <div class="col-sm-6" *ngIf="type=='text' || type=='date' || type=='number'">
        <mat-form-field>
          <input type="text" matInput name="conditionMatchValue" placeholder="Value" [(ngModel)]="conditionMatchValue">
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
  
  
   
  
    <div class="col-sm-12" *ngIf="type=='date'">  
    <label id="example-radio-group-label">is autoCollect</label>
      <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group" [(ngModel)]="autoCollect">
        <mat-radio-button class="example-radio-button" [value]=true>
          True
        </mat-radio-button>
        <mat-radio-button class="example-radio-button" [value]=false>
          False
        </mat-radio-button>
      </mat-radio-group>
    </div>
  
  
    <div class="col-sm-12">
  
      <button mat-flat-button color="primary" style="margin-right:10px;" (click)="closeModel('save')">
        Save
      </button>
  
    </div>
  
  </div>
  <div class="form-group row" [formGroup]="form"
    style="padding:0px;margin:0px;margin-top:10px;box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);padding-bottom:10px;">
    <span class="qtn_position"><span class="">#{{ field.position }}</span></span>
  
    <div class="action-component">
  
      <span class="cursor-pntr" title = "delete" (click)="deleteElement(field)"><i class="fa fa-trash"></i> </span>
      <span class="cursor-pntr" title = "copy" (click)="copyElement(field)"><i class="fa fa-copy"></i></span>
      <span class="cursor-pntr" title = "edit"><i class="fa fa-edit" (click)="loadFormElement(field)"></i></span>
  
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
            },] },
];
/** @nocollapse */
FieldBuilderComponent.ctorParameters = () => [
    { type: DynamicFormBuilderService },
    { type: MatSnackBar },
    { type: MatDialog }
];
FieldBuilderComponent.propDecorators = {
    field: [{ type: Input }],
    criteriaList: [{ type: Input }],
    form: [{ type: Input }],
    sendDataToParent: [{ type: Output }],
    copyOrDeleteEvent: [{ type: Output }],
    myModal: [{ type: ViewChild, args: ['content', { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
class TextBoxComponent {
    constructor() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    /**
     * @return {?}
     */
    get isValid() { return this.form.controls[this.field.name].valid; }
    /**
     * @return {?}
     */
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}
TextBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'textbox',
                template: `
      <div [formGroup]="form">
      <label class="col-md-0 form-control-label labeloverflow" [attr.for]="field.label">
      {{field.label}}
      </label>
    
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.field" [name]="field.field" >
        <textarea *ngIf="field.multiline"  [id]="field.field"
        rows="20" class="form-control" [placeholder]="field.placeholder"></textarea>

      </div> 
    `,
                styles: [`
    .form-control {
      display: none;
    }
    .labeloverflow {
      float: left;
    }
    `]
            },] },
];
/** @nocollapse */
TextBoxComponent.ctorParameters = () => [];
TextBoxComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropDownComponent {
    constructor() {
        this.field = {};
    }
}
DropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'dropdown',
                template: `
      <div [formGroup]="form">
      <label class="col-sm-0 form-control-label labeloverflow" [attr.for]="field.label">
      {{field.label}}
    </label>
        <select class="form-control" [id]="field.field">
          <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.label}}</option>
        </select>
      </div> 
    `,
                styles: [`
    .form-control {
      display: none;
    }
    .labeloverflow {
      float: left;
      padding-top: 5px;
    }
    `]
            },] },
];
/** @nocollapse */
DropDownComponent.ctorParameters = () => [];
DropDownComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
class FileComponent {
    constructor() {
        this.field = {};
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
    ngOnChange() {
        console.log(this.field.value);
        // this.field.value.
    }
}
FileComponent.decorators = [
    { type: Component, args: [{
                selector: 'file',
                template: `
      <div [formGroup]="form">
        <div *ngIf="!field.value" class="drop-container dropzone" dropZone \
          (dropped)="field.onUpload($event)">
          <p class="m-0">
            Drag a file here or
            <label class="upload-button">
              <input type="file" multiple="" (change)="field.onUpload($event.target.files)"> browse
            </label>
            to upload.
          </p>
        </div>
        <div *ngIf="field.value">
          <!-- <button type="button" class="btn btn-primary">Change</button> -->
          <div class="card">
            <img class="card-img-top" [src]="field.value">
          </div>
        </div>
      </div> 
    `,
                styles: [
                    `
      .form-control {
        display:none;
      }
      .drop-container {
        background: #fff;
        border-radius: 6px;
        height: 150px;
        width: 100%;
        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed #c0c4c7;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        color: #c0c4c7; 
      }
      .upload-button {
        display: inline-block;
        border: none;
        outline: none;
        cursor: pointer;
        color: #5754a3;
      }
      .upload-button input {
        display: none;
      }
      .dropzone { 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column; 
        border-radius: 5px;
        background: white;
        margin: 10px 0;
      }
      .dropzone.hovering {
          border: 2px solid #f16624;
          color: #dadada !important;
      }
      progress::-webkit-progress-value {
        transition: width 0.1s ease;
      }
      `
                ]
            },] },
];
/** @nocollapse */
FileComponent.ctorParameters = () => [];
FileComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckBoxComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get isValid() { return this.form.controls[this.field.name].valid; }
    /**
     * @return {?}
     */
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}
CheckBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox',
                template: `
      <div [formGroup]="form">
      <label class="col-sm -12 form-control-label labeloverflow" [attr.for]="field.label">
      {{field.label}}
    </label>
        <div [formGroupName]="field.field" >
          <div *ngFor="let opt of field.options" class="form-check form-check">
          <label class="form-check-label checkflow">
             <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
             {{opt.label}}</label>
          </div>
        </div>

      </div> 
    `,
                styles: [`
    .form-control {
      display: none;
    }
    .labeloverflow {
      float: left;
      padding-top: 5px;
    }
    .checkflow {
      float: left;
      width: 100%
    }
    `]
            },] },
];
CheckBoxComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioComponent {
    constructor() {
        this.field = {};
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'radio',
                template: `
      <div [formGroup]="form">
      <label class="col-sm-12 form-control-label labeloverflow" [attr.for]="field.label">
      {{field.label}}
    </label>
        <div class="form-check rnxtline" *ngFor="let opt of field.options">
          <input class="form-check-input" type="radio" [id]="field.field" [value]="opt.key">
          <label class="form-check-label space">
            {{opt.label}}
          </label>
        </div>
      </div> 
    `,
                styles: [`
    .form-control {
      display: none;
    }
    .space {
      padding-left: 5px
    }
    .labeloverflow {
      float: left;
      padding-top: 5px;
    }
     .rnxtline {
       float: left;
       width: 100%
     }
    `]
            },] },
];
RadioComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
class DateComponent {
    constructor() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    /**
     * @return {?}
     */
    get isValid() { return this.form.controls[this.field.name].valid; }
    /**
     * @return {?}
     */
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}
DateComponent.decorators = [
    { type: Component, args: [{
                selector: 'date',
                template: `
      <div [formGroup]="form">
      <label class="col-md-8 form-control-label labeloverflow" [attr.for]="field.label">
      {{field.label}}
    </label>
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control" 
         [id]="field.field" [name]="field.field">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [id]="field.field"
        rows="20" class="form-control" [placeholder]="field.placeholder"></textarea>

      </div> 
    `,
                styles: [`
    .form-control {
      display: none;
    } .labeloverflow {
      float: left;
      padding-top: 5px;
    }
    `]
            },] },
];
/** @nocollapse */
DateComponent.ctorParameters = () => [];
DateComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// text,email,tel,textarea,password, 
class SliderComponent {
    constructor() {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.field = {};
    }
    /**
     * @return {?}
     */
    get isValid() { return this.form.controls[this.field.name].valid; }
    /**
     * @return {?}
     */
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'slider',
                template: `
      <div [formGroup]="form" >
      <label class="col-md-0 form-control-label labeloverflow" [attr.for]="field.label">
      {{field.label}}
    </label>
        <input *ngIf="!field.multiline" type="hidden" class="form-control" [id]="field.field" [name]="field.field">
        
        <mat-slider
   class = "tp-margin"
   [disabled] = "false"
   [invert] = "false"      
   [thumbLabel] = "false"
   [max]="field.max"
   [min]="field.min"    
   [vertical] = "false">
</mat-slider>

      </div> 
    `,
                styles: [`
    .form-control {
      display: none;
    }
    .labeloverflow {
      float: left;
    }
    `]
            },] },
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [];
SliderComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MultiSelectComponent {
    /**
     * @param {?} cdr
     * @param {?} dynamicServe
     */
    constructor(cdr, dynamicServe) {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.cdr = cdr;
        this.dynamicServe = dynamicServe;
        this.field = {};
        this.sendDataToParent = new EventEmitter();
        this.childrenDropEvent = new EventEmitter();
        this.copyOrDeleteEvent = new EventEmitter();
        this.onFieldUpdate = new EventEmitter();
        this.openEditChild = false;
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
    /**
     * @param {?} $event
     * @param {?} field
     * @return {?}
     */
    onDropNew($event, field) {
        console.log("---- MultiSelectComponent -", $event);
        if ($event.data.responseType && $event.data.responseType != 'matrix') {
            $event.data.mutiSelect = field;
            this.childrenDropEvent.emit($event.data);
        }
        else {
            console.log("not allowed");
        }
    }
    /**
     * @return {?}
     */
    parentMapping() {
        console.log(this.condition, "condition", this.currentSelectedQtn, "selectedOption", this.selectedOption);
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
        if (this.condition) ;
        // 'option':this.selectedOption,
        //       'question':this.currentSelectedQtn
        // this.field.childQnt = this.currentSelectedQtn.field;
        console.log("this.field.validations.relation", this.listOfRelation);
    }
    /**
     * @param {?} action
     * @param {?} data
     * @return {?}
     */
    closeModelChild(action, data) {
        if (action == "save") {
            console.log("closeModel", this.field);
            console.log('!!!!!!!!!!!', data);
            // this.modalReference.close();
            // this.activeModelData.field = this.field.field;
            // this.activeModelData.label = this.label;
            // this.activeModelData.type = this.type;
            // this.activeModelData.placeholder = this.placeholder;
            // this.activeModelData.options = this.options;
            /** @type {?} */
            let obj = {
                label: '',
                type: '',
                placeholder: '',
                options: '',
                validations: '',
                field: '',
                _id: this._id,
                description: ''
            };
            obj.label = data.label;
            obj.field = data.field;
            obj.type = data.type;
            obj.placeholder = data.placeholder;
            obj.options = data.options;
            obj.description = data.description;
            if (data.type == 'date') {
                obj['minDate'] = data.minDate;
                obj['maxDate'] = data.maxDate;
            }
            else if (data.type == 'slider') {
                obj['min'] = data.min;
                obj['max'] = data.max;
            }
            // console.log("obj",obj);
            debugger;
            /** @type {?} */
            var index = this.field.child.findIndex((/**
             * @param {?} el
             * @return {?}
             */
            el => el.field === this.currentItem.field));
            this.field.child.splice(index, 1, obj);
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
        }
        else {
            this.openEditChild = false;
            // this.modalReference.close();
        }
        // this.modalService.close();
        //  this.myModal.nativeElement.className = 'modal hide';
    }
    /**
     * @param {?} loadEle
     * @param {?} id
     * @return {?}
     */
    loadFormChildElement(loadEle, id) {
        console.log("item ---", loadEle, "id", id);
        loadEle.expand = !loadEle.expand;
        this.activeModelData = "";
        this.label = loadEle.label;
        this.currentItem = loadEle;
        this.allData = this.dynamicServe.getALl();
        console.log('this.field', this.field);
        // for(let i = 0; i < this.allData['questionList']['questionList'][0].child.length; i++) {
        this.filtereddata = this.field.child.filter((/**
         * @param {?} t
         * @return {?}
         */
        t => t.field !== loadEle.field));
        // }
        // this.filtereddata = this.field.child;
        console.log('multi select', this.allData);
        console.log('this.filtereddata', this.filtereddata);
        this.type = loadEle.type;
        this.placeholder = loadEle.placeholder;
        this.options = loadEle.options;
        this._id = loadEle._id;
        // this.required = item.validations.required;
        this.description = loadEle.description;
        if (loadEle.type == "date") {
            this.minDate = loadEle.validations.minDate;
            this.maxDate = loadEle.validations.maxDate;
            this.autoCollect = loadEle.validations.autoCollect;
        }
        else if (loadEle.type == "slider") {
            this.min = loadEle.validations.min;
            this.max = loadEle.validations.max;
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
    /**
     * @param {?} data
     * @param {?} value
     * @return {?}
     */
    deleteCondition(data, value) {
        // var index = this.listOfRelation.indexOf(value);
        // if (index > -1) {
        this.listOfRelation.splice(value, 1);
        this.getSelectQuestion[0].child.splice(value, 1);
        // }
        console.log('after delete data', this.listOfRelation);
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    deleteElement(item, index) {
        console.log('deleteElement', item);
        this.field.deleteindex = index;
        this.field.isDelete = true;
        // this.field.child.splice(index, 1);
        console.log('deleteElement', this.field);
        this.sendDataToParent.emit(this.field);
        // this.childrenDropEvent.emit(item);
        // console.log("field delete", this.field, 'index', index);
        // console.log('after delete', this.allData);
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    copyElement(item, index) {
        // this.field.push(item);
        console.log("before copy field ----------", this.field.child.length);
        /** @type {?} */
        let lengthOfChild = this.field.child.length + 1;
        /** @type {?} */
        let newobj = {
            action: "copy",
            description: item.description,
            field: item.field + '' + lengthOfChild,
            label: item.label,
            placeholder: item.placeholder,
            position: item.pointer,
            type: item.type
        };
        console.log("after copy field ----------", newobj, 'index', index);
        this.field.child.push(newobj);
        // this.copyOrDeleteEvent.emit(item);
        // this.sendDataToParent.emit(newobj);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.field.child, event.previousIndex, event.currentIndex);
    }
}
MultiSelectComponent.decorators = [
    { type: NgModule, args: [{
                imports: [ReactiveFormsModule, FormsModule],
                declarations: []
            },] },
    { type: Component, args: [{
                selector: 'lib-multi-select',
                template: `<div [formGroup]="form" dndDropzone (dndDrop)="onDropNew($event,field)" class="card-body">
  <label class="col-md-0 form-control-label labeloverflow" [attr.for]="field.label">
    {{field.label}}
  </label>
  <textarea rows="2" class="form-control">

  </textarea>


  <div *ngIf="field.child.length > 0" cdkDropList (cdkDropListDropped)="drop($event)">

    <div *ngFor="let obj of field.child; let i =index; let data" cdkDrag>
      <div class="col-sm-2 edit-icon actions">
        <i class="fa fa-trash" title = "delete" (click)="deleteElement(obj, i)"></i>
        <i class="fa fa-copy" title = "copy" (click)="copyElement(obj, i)"></i>
        <i class="fa fa-edit" title = "edit" (click)="loadFormChildElement(obj, i)"></i>
      </div>
      <div class="row" *ngIf="obj.expand" style="padding: 20px;
      border: 1px solid #ccc;margin-top:10px; margin:40px; margin-left: 20%;
      box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19); margin-top:20px;">

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
        <div class="col-sm-12 form-group " *ngIf="type=='radio' || type=='checkbox' || type=='dropdown'">
          <label for="label" class="col-sm-12">Options</label>

          <div class="col-sm-7 form-group" *ngIf="type=='slider'">
            <mat-form-field>
              <input type="text" placeholder="Max" matInput [(ngModel)]="max" [ngModelOptions]="{standalone: true}">
            </mat-form-field>
          </div>

        </div>

        <div *ngIf="field.child && field.child.length > 0">
          <div class="col-sm-12">
            <label id="example-radio-group-label">Do you want to related the question based on below options ?</label>
            <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
              [(ngModel)]="selectedOption" [ngModelOptions]="{standalone: true}">
              <mat-radio-button style="padding: 10px" class="example-radio-button" *ngFor="let ele of options"
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


        <div class="col-sm-12">
          <label id="example-radio-group-label">is Reqired ?</label>
          <mat-radio-group aria-labelledby="example-radio-group-label" class="example-radio-group"
            [ngModelOptions]="{standalone: true}" [(ngModel)]="required">
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

      <div class="col-md-0" [ngSwitch]="obj.type" style="width: 80%;
          margin-left: 20%;
          padding-left: 10px;
          margin-top: 10px;
          box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.19);
          padding-bottom: 30px;">

        <textbox style="padding-left:30px" *ngSwitchCase="'number'" [field]="obj" [form]="form"></textbox>

        <textbox style="padding-left:30px" *ngSwitchCase="'text'" [field]="obj" [form]="form"></textbox>

        <date style="padding-left:30px" *ngSwitchCase="'date'" [field]="obj" [form]="form"></date>

        <slider style="padding-left:30px" *ngSwitchCase="'slider'" [field]="obj" [form]="form"></slider>

        <dropdown style="padding-left:30px" *ngSwitchCase="'dropdown'" [field]="obj" [form]="form"></dropdown>

        <checkbox style="padding-left:30px" *ngSwitchCase="'checkbox'" [field]="obj" [form]="form"></checkbox>

        <radio style="padding-left:30px" *ngSwitchCase="'radio'" [field]="obj" [form]="form"></radio>

        <file style="padding-left:30px" *ngSwitchCase="'file'" [field]="obj" [form]="form"></file>


      </div>
      
    </div>

  </div>
</div>
`,
                styles: [`
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
     padding-top: 10px;
     right: -70px;
    }
    .labeloverflow {
      float: left;
    }
    @media only screen and (max-width: 600px) {
      .actions {
       position: inherit
      }
    }
    `]
            },] },
];
/** @nocollapse */
MultiSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DynamicFormBuilderService }
];
MultiSelectComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }],
    sendDataToParent: [{ type: Output }],
    childrenDropEvent: [{ type: Output }],
    copyOrDeleteEvent: [{ type: Output }],
    onFieldUpdate: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import {  } from '@angular/cdk/'
class DynamicFormBuilderModule {
}
DynamicFormBuilderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    MatButtonModule,
                    MatRadioModule,
                    MatDatepickerModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSliderModule,
                    MatSelectModule,
                    // MatIconModule
                    AngularFontAwesomeModule,
                    DragDropModule,
                    DndModule
                ],
                declarations: [
                    DynamicFormBuilderComponent$1,
                    FieldBuilderComponent,
                    TextBoxComponent,
                    DropDownComponent,
                    CheckBoxComponent,
                    FileComponent,
                    RadioComponent,
                    DateComponent,
                    SliderComponent,
                    MultiSelectComponent
                ],
                exports: [DynamicFormBuilderComponent$1],
                providers: [DynamicFormBuilderService]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicFormBuilderModule1 {
}
DynamicFormBuilderModule1.decorators = [
    { type: NgModule, args: [{
                declarations: [DynamicFormBuilderComponent],
                imports: [
                    // BrowserModule,
                    CommonModule,
                    ReactiveFormsModule,
                    DynamicFormBuilderModule,
                    HttpClientModule,
                    FormsModule,
                    MatSelectModule,
                    MatTabsModule,
                    MatDialogModule,
                    MatTooltipModule, MatTabsModule, MatRadioModule, MatCardModule,
                    MatTableModule, MatExpansionModule,
                    MatPaginatorModule,
                    MatNativeDateModule,
                    MatToolbarModule,
                    MatInputModule,
                    MatStepperModule,
                    // NgbModule.forRoot(),
                    // DragulaModule.forRoot()
                    // DragAndDropModule
                    MatFormFieldModule,
                    DndModule,
                    MatButtonModule,
                    MatDatepickerModule
                ],
                entryComponents: [],
                exports: [DynamicFormBuilderComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DynamicFormBuilderService, DynamicFormBuilderModule1, DynamicFormBuilderComponent as ɵa, CheckBoxComponent as ɵg, DateComponent as ɵj, DropDownComponent as ɵf, FileComponent as ɵh, MultiSelectComponent as ɵl, RadioComponent as ɵi, SliderComponent as ɵk, TextBoxComponent as ɵe, DynamicFormBuilderComponent$1 as ɵc, DynamicFormBuilderModule as ɵb, FieldBuilderComponent as ɵd };

//# sourceMappingURL=dynamic-form-builder.js.map