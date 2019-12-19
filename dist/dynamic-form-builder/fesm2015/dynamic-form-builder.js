import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output, Input, ViewChild, NgModule, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatSelectModule, MatTabsModule } from '@angular/material';
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
        this.all = [];
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
            questionList: this.list
        };
        // return this.communicateSubject.asObservable();
        return this.all;
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
     * @param {?} data
     * @return {?}
     */
    sendToService(data) {
        // send message to subscribers via observable subject
        this.dynamicServe.sendData(data);
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
        this.eventsSubscription = this.events.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.log("calling from parent with data === ", data);
            if (data) {
                console.log("criteria list", data.criteriaList);
                this.criteriaList = data.criteriaList;
                /** @type {?} */
                let dt = data['questionArray'];
                this.formBuild(dt);
            }
            else {
                /** @type {?} */
                let obj = {
                    action: "all",
                    data: this.fields
                };
                console.log("to get all", this.fields);
                this.questionTrigger.emit(obj);
            }
        }));
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
            }, {
                "responseType": "date"
            }, {
                "responseType": "slider"
            },
            {
                "responseType": "matrix"
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
                "position": len,
                "field": len + "question",
                "type": "number",
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
                "position": len,
                field: len + "question",
                type: 'radio',
                name: len + ". question",
                "label": "Question",
                description: "",
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
            };
        }
        else if (ele == "checkbox") {
            obj = {
                "position": len,
                field: len + "question",
                type: "checkbox",
                name: len + ". question",
                "label": "Question",
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
                "position": len,
                field: len + "question",
                type: 'dropdown',
                name: len + ". question",
                "label": "Question",
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
                "position": len,
                field: len + "question",
                type: 'date',
                name: len + ". question",
                "label": "Question",
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
                    "position": len,
                    "field": len + "question",
                    "type": ele.type,
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
                "position": len,
                "field": len + "question",
                "type": "matrix",
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
        else if (ele == "slider") {
            obj = {
                field: len + "question",
                type: 'slider',
                name: len + ". question",
                "label": "Question",
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
        console.log("drop ele", ele);
        if (ele.data) {
            ele = ele.data.responseType;
        }
        /** @type {?} */
        let len = this.fields.length + 1;
        /** @type {?} */
        var obj = {};
        if (action == "copy") {
            /** @type {?} */
            let copyObj = {
                "position": len,
                "field": len + "question",
                "type": ele.type,
                "label": ele.label,
                "placeholder": ele.placeholder,
                "validations": ele.validations,
                "options": ele.options,
                "description": ele.description
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
        }
        // console.log("transf", trnasformData);
        ;
        // console.log("transf", trnasformData);
        this.questionTrigger.emit(trnasformData);
        this.formData.push(obj);
        /** @type {?} */
        let fieldsCtrls = {};
        this.form = new FormGroup(fieldsCtrls);
        // console.log("------", obj);
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
            criteriaList: this.criteriaList,
            questionList: this.fields
        };
        console.log("completeData", completeData);
        this.sendToService(completeData);
        console.log("fields controls", this.form);
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
        console.log("eventData sssssss------", $event.data);
        /** @type {?} */
        let eventObj = $event;
        /** @type {?} */
        let trnasformData = {};
        if ($event.action == "copy") {
            this.onDrop($event.data, "copy");
        }
        else if ($event.action == "delete") {
            trnasformData = {
                action: 'delete',
                data: $event
            };
        }
        else if ($event.action == "childDroped") {
            console.log('this.fields  in child', this.fields);
            /** @type {?} */
            var final = this.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.field === eventObj.data.mutiSelect.field) {
                    /** @type {?} */
                    let obj = this.getToolObj($event.data.responseType, item.child.length + 1);
                    item.child.push(obj);
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
        /** @type {?} */
        let completeData = {
            questionList: this.fields,
            criteriaList: this.criteriaList
        };
        console.log("completeData", completeData);
        this.sendToService(completeData);
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
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 10px;
      color: #333;
      text-align: left;
      text-transform: capitalize;
      box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.19);
  }
    .form-group {
        margin-bottom: 0.5rem;
        border: 1px solid #ece7e7;
    }
    span.cursor-pntr {
        cursor: pointer;
        padding: 2px;
    }
    
    
  </style>
  <div class="col-sm-12">
      

    <div class="col-sm-12 noPadding">
   
    <div class="card">
          <div dndDropzone class="card-body" (dndDrop)="onDrop($event)" >
              <form (ngSubmit)="onSubmit(this.form.value)" [formGroup]="form" class="form-horizontal">
            <dynamic-form-builder [criteriaList]="getCriteria()" [fields]="getFields()" [form]="form"  (onFieldUpdate)="onFieldUpdate($event)" ></dynamic-form-builder>
            </form>
          </div>
        </div>
      </div>

      <div class="col-sm-4" style="padding-top:25px">
          
          <div  class="col-md-12">
            <!-- <dynamic-form-builder [criteriaList]="getCriteria()" [fields]="getFields()"></dynamic-form-builder> -->
      
            <span *ngFor="let item of jsonData" style ="padding:5px">
              <span [dndDraggable]="item"  class="element"  >{{ item.responseType=='multiselect'?'metrix':item.responseType }}</span>
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
        this.criteriaList = [];
        this.formData = [];
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
        console.log('data type', typeof (data));
        if (typeof (data) === 'string') {
            data = JSON.parse(data);
            console.log('inside string');
        }
        // let childdata = data;
        // let finaldata = JSON.parse(childdata);
        // console.log(JSON.parse(data),"parse copyEvent occured");
        // let obj = data;
        console.log(data, "copyEvent occured");
        // data.field =(this.fields.length+1)+"question";
        // data.label = (this.fields.length+1)+" question";
        if (data.action == "copy") {
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
            /** @type {?} */
            var index = this.fields.indexOf(data);
            console.log("ind", index);
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
                template: `
   
     <div cdkDropList (cdkDropListDropped)="drop($event)"> <div *ngFor="let field of fields"  cdkDrag>
          <field-builder [criteriaList]="criteriaList" *ngIf="!field.isDeleted" [field]="field" [form]="form"  
          (sendDataToParent)="eventFromChild($event)" (copyOrDeleteEvent)="copyOrDeleteEvent($event)">
          </field-builder>
      </div></div>`,
            },] },
];
/** @nocollapse */
DynamicFormBuilderComponent$1.ctorParameters = () => [];
DynamicFormBuilderComponent$1.propDecorators = {
    onFieldUpdate: [{ type: Output }],
    fields: [{ type: Input }],
    criteriaList: [{ type: Input }],
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
      <label class="col-md-8 form-control-label" [attr.for]="field.label">
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
      <label class="col-md-8 form-control-label" [attr.for]="field.label">
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
      <label class="col-md-12 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
        <div [formGroupName]="field.field" >
          <div *ngFor="let opt of field.options" class="form-check form-check">
          <label class="form-check-label">
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
      <label class="col-md-12 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
        <div class="form-check" *ngFor="let opt of field.options">
          <input class="form-check-input" type="radio" [id]="field.field" [value]="opt.key">
          <label class="form-check-label">
            {{opt.label}}
          </label>
        </div>
      </div> 
    `,
                styles: [`
    .form-control {
      display: none;
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
      <label class="col-md-8 form-control-label" [attr.for]="field.label">
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
      <label class="col-md-0 form-control-label" [attr.for]="field.label">
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
     */
    constructor(cdr) {
        // this.form.controls = this.field.name;
        // console.log("form",this.form);
        this.cdr = cdr;
        this.field = {};
        this.sendDataToParent = new EventEmitter();
        this.childrenDropEvent = new EventEmitter();
        this.openEditChild = false;
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
    }
    /**
     * @param {?} action
     * @param {?=} data
     * @return {?}
     */
    closeModelChild(action, data = "") {
        if (action == "save") {
            debugger;
            console.log("closeModel", this.field);
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
            /** @type {?} */
            var index = this.field.child.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => item.field === this.currentItem.field));
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
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    loadFormElement(item, id) {
        console.log("item ---", item, "id", id);
        this.activeModelData = "";
        this.label = item.label;
        this.currentItem = item;
        this.type = item.type;
        this.placeholder = item.placeholder;
        this.options = item.options;
        this._id = item._id;
        // this.required = item.validations.required;
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
}
MultiSelectComponent.decorators = [
    { type: NgModule, args: [{
                imports: [ReactiveFormsModule, FormsModule],
                declarations: []
            },] },
    { type: Component, args: [{
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
  <div *ngIf="field.child.length > 0">

  <div *ngFor="let obj of field.child let i =index">

  <div [ngSwitch]="obj.type" style="float:left;width:80%;margin-left:20%;box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.19);">
  <div style="float: right;right: -90px; cursor:pointer;
  top: 20px;" class="col-sm-2 edit-icon"><i class="fa fa-edit" (click)="loadFormElement(obj,i)"></i></div>

  <textbox style ="padding-left:30px" *ngSwitchCase="'number'" [field]="obj" [form]="form"></textbox>

  <textbox style ="padding-left:30px" *ngSwitchCase="'text'" [field]="obj" [form]="form"></textbox>

  <date style ="padding-left:30px" *ngSwitchCase="'date'" [field]="obj" [form]="form"></date>

  <slider style ="padding-left:30px" *ngSwitchCase="'slider'" [field]="obj" [form]="form"></slider>

    <dropdown style ="padding-left:30px" *ngSwitchCase="'dropdown'" [field]="obj" [form]="form"></dropdown>

    <checkbox style ="padding-left:30px" *ngSwitchCase="'checkbox'" [field]="obj" [form]="form"></checkbox>

   <radio style ="padding-left:30px" *ngSwitchCase="'radio'" [field]="obj" [form]="form"></radio>

    <file style ="padding-left:30px" *ngSwitchCase="'file'" [field]="obj" [form]="form"></file>

    
  </div>
  </div>
  </div>
  </div>`,
            },] },
];
/** @nocollapse */
MultiSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
MultiSelectComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }],
    sendDataToParent: [{ type: Output }],
    childrenDropEvent: [{ type: Output }]
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
                    // NgbModule.forRoot(),
                    // DragulaModule.forRoot()
                    // DragAndDropModule
                    MatFormFieldModule,
                    DndModule,
                    MatButtonModule,
                    MatDatepickerModule
                ],
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