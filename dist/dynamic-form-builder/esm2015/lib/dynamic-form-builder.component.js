/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DynamicFormBuilderService } from './dynamic-form-builder.service';
// import  { } from './dynamic-form-builder.service'
import { Observable } from 'rxjs';
export class DynamicFormBuilderComponent {
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
                console.log("completeData", completeData);
                this.sendToService(completeData);
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
                "label": len + ". question",
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
                "label": len + ". question",
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
                type: 'radio',
                name: len + ". question",
                label: len + ". question",
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
                field: len + "question",
                type: "checkbox",
                name: len + ". question",
                label: len + ". question",
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
                name: len + ". question",
                label: len + ". question",
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
                name: len + ". question",
                label: len + ". question",
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
                    "field": len + "question",
                    "type": ele.type,
                    "label": len + ". question",
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
            /** @type {?} */
            let finalchild = [];
            finalchild.push();
            obj = {
                "field": len + "question",
                "type": "matrix",
                "label": len + ". question",
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
                label: len + ". question",
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
        };
        console.log("transf", trnasformData);
        this.questionTrigger.emit(trnasformData);
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
        this.questionTrigger.emit(trnasformData);
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
        if ($event.action == "addnew") {
            this.onDrop($event.data.element);
        }
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
                data: JSON.parse($event)
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
    }
    .start-create:hover .add-qicons{
      display:block;
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
    
  </style>
  <div class="col-sm-12">
      

    <div class="col-sm-12 noPadding">
    <div class="card showQBlock" *ngIf="showQuestionBlock">

      <div>
        <div class="start-create">
         <h2 class="text-center" ><a class="start-create">Start Creating a Question</a></h2>
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
      <div class="col-sm-4" style="padding-top:25px" *ngIf="!showQuestionBlock">
          
          <div  class="col-md-12">
            <!-- <dynamic-form-builder [fields]="getFields()"></dynamic-form-builder> -->
      
            <span *ngFor="let item of jsonData" style ="padding:5px">
              <span [dndDraggable]="item"  class="element"  >{{ item.responseType }}</span>
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
if (false) {
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.form;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.unsubcribe;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.jsonData;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.formData;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.pageNumber;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.events;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.questionTrigger;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.eventsSubscription;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.criteriaList;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.fields;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.showQuestionBlock;
    /**
     * @type {?}
     * @private
     */
    DynamicFormBuilderComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    DynamicFormBuilderComponent.prototype._formBuilder;
    /**
     * @type {?}
     * @private
     */
    DynamicFormBuilderComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    DynamicFormBuilderComponent.prototype.dynamicServe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUcvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFJM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWtJbEMsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7OztJQWlCdEMsWUFBb0IsSUFBZ0IsRUFDMUIsWUFBeUIsRUFDekIsRUFBZSxFQUNmLFlBQXVDO1FBSDdCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUEyQjs7UUFWdkMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXhDLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFDMUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBT3ZCLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsS0FBSztRQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDeEIsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JELENBQUMsQ0FBQTtRQUVGLElBQUks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Q2I7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUM7aUJBQ2I7WUFDSCxDQUFDLEVBQUM7WUFFSixtQkFBbUI7WUFHbkIsY0FBYztZQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRW5DLGdDQUFnQztTQUVqQzthQUFNO1lBQ0wsYUFBYSxHQUFHO2dCQUNkLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDekIsQ0FBQTtTQUNGO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBN25CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUEySEM7Z0JBQ1gsU0FBUyxFQUFFLEVBQUU7YUFDZDs7OztZQXhJUSxVQUFVO1lBRGMsV0FBVztZQUFYLFdBQVc7WUFJbkMseUJBQXlCOzs7cUJBOEkvQixLQUFLOzhCQUVMLE1BQU07Ozs7SUFUUCwyQ0FBdUI7O0lBQ3ZCLGlEQUFnQjs7SUFDaEIsK0NBQWM7O0lBQ2QsK0NBQWM7O0lBQ2QsaURBQWdCOztJQUdoQiw2Q0FBaUM7O0lBRWpDLHNEQUErQzs7SUFDL0MseURBQXdCOztJQUN4QixtREFBa0I7O0lBRWxCLDZDQUEwQjs7SUFDMUIsd0RBQXlCOzs7OztJQUViLDJDQUF3Qjs7Ozs7SUFDbEMsbURBQWlDOzs7OztJQUNqQyx5Q0FBdUI7Ozs7O0lBQ3ZCLG1EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRG5kRHJvcEV2ZW50IH0gZnJvbSAnbmd4LWRyYWctZHJvcCdcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UnO1xuXG4vLyBpbXBvcnQgIHsgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWR5bmFtaWMtZm9ybS1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGA8c3R5bGU+XG4gIHAge1xuICAgICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgfVxuICAgIC5ub1BhZGRpbmcge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5tYXJnaW4tNSB7XG4gICAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgfVxuICAgIC5lbGVtZW50IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG1pZG5pZ2h0Ymx1ZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogbWlkbmlnaHRibHVlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbiAgLmVsZW1lbnQtb2xkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG5cbiAgICAuZWxlbWVudCBzcGFuIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2U3ZTc7XG4gICAgfVxuICAgIC5jdXJzb3ItcG50ciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuc2hvd1FCbG9jayB7XG4gICAgICBiYWNrZ3JvdW5kOiAjYTVmMWQ3O1xuICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICBtaW4taGVpZ2h0OiAzOTBweDtcbiAgICB9XG4gICAgXG4gICAgLnN0YXJ0LWNyZWF0ZSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWFyZ2luOmF1dG87XG4gICAgfVxuICAgIC5zdGFydC1jcmVhdGU6aG92ZXIgLmFkZC1xaWNvbnN7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICAuZWxlbWVudCBpLm1hdGVyaWFsLWljb25zIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIC5hZGQtcWljb25ze1xuICAgICBcbiAgICAgIC8vIGJhY2tncm91bmQ6ICNkOWQ5Zjk7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDoxMDAlXG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAvLyBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcbiAgICB9XG4gICAgXG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIFxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBub1BhZGRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaG93UUJsb2NrXCIgKm5nSWY9XCJzaG93UXVlc3Rpb25CbG9ja1wiPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhcnQtY3JlYXRlXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiID48YSBjbGFzcz1cInN0YXJ0LWNyZWF0ZVwiPlN0YXJ0IENyZWF0aW5nIGEgUXVlc3Rpb248L2E+PC9oMj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtcWljb25zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBqc29uRGF0YTtsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImkgPD0gNFwiIGNsYXNzPVwiZWxlbWVudFwiICAgKGNsaWNrKT1cIm9uRHJvcChpdGVtLnJlc3BvbnNlVHlwZSlcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3sgaXRlbS5pY29uIH19PC9pPnt7IGl0ZW0ucmVzcG9uc2VUeXBlIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImkgPiA0XCIgY2xhc3M9XCJlbGVtZW50XCIgKGNsaWNrKT1cIm9uRHJvcChpdGVtLnJlc3BvbnNlVHlwZSlcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7IGl0ZW0uaWNvbiB9fTwvaT57eyBpdGVtLnJlc3BvbnNlVHlwZSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdJZj1cImZpZWxkcy5sZW5ndGggPiAwIHx8ICFzaG93UXVlc3Rpb25CbG9ja1wiPlxuICAgICAgICAgIDxkaXYgZG5kRHJvcHpvbmUgY2xhc3M9XCJjYXJkLWJvZHlcIiAoZG5kRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQodGhpcy5mb3JtLnZhbHVlKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1mb3JtLWJ1aWxkZXIgW2ZpZWxkc109XCJnZXRGaWVsZHMoKVwiIFtmb3JtXT1cImZvcm1cIiAgKG9uRmllbGRVcGRhdGUpPVwib25GaWVsZFVwZGF0ZSgkZXZlbnQpXCIgPjwvZHluYW1pYy1mb3JtLWJ1aWxkZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIiBzdHlsZT1cInBhZGRpbmctdG9wOjI1cHhcIiAqbmdJZj1cIiFzaG93UXVlc3Rpb25CbG9ja1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8IS0tIDxkeW5hbWljLWZvcm0tYnVpbGRlciBbZmllbGRzXT1cImdldEZpZWxkcygpXCI+PC9keW5hbWljLWZvcm0tYnVpbGRlcj4gLS0+XG4gICAgICBcbiAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBpdGVtIG9mIGpzb25EYXRhXCIgc3R5bGUgPVwicGFkZGluZzo1cHhcIj5cbiAgICAgICAgICAgICAgPHNwYW4gW2RuZERyYWdnYWJsZV09XCJpdGVtXCIgIGNsYXNzPVwiZWxlbWVudFwiICA+e3sgaXRlbS5yZXNwb25zZVR5cGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudChpdGVtLnJlc3BvbnNlVHlwZSlcIiA+TnVtYmVyPC9kaXY+IC0tPlxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAoY2xpY2spPVwiYWRkRm9ybUVsZW1lbnQoJ2lucHV0JylcIiA+SW5wdXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudCgnbnVtYmVyJylcIiA+TnVtYmVyPC9kaXY+IC0tPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIDwvZGl2PmAsXG4gIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgdW5zdWJjcmliZTogYW55O1xuICBqc29uRGF0YTogYW55O1xuICBmb3JtRGF0YTogYW55O1xuICBwYWdlTnVtYmVyOiBhbnk7XG5cbiAgLy8gQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgZXZlbnRzOiBPYnNlcnZhYmxlPGFueT47XG4gIC8vIEBPdXRwdXQoKSBxdWVzdGlvbkxpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBxdWVzdGlvblRyaWdnZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV2ZW50c1N1YnNjcmlwdGlvbjogYW55O1xuICBjcml0ZXJpYUxpc3Q6IGFueTtcblxuICBwdWJsaWMgZmllbGRzOiBhbnlbXSA9IFtdO1xuICBzaG93UXVlc3Rpb25CbG9jayA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGR5bmFtaWNTZXJ2ZTogRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZVxuICApIHtcbiAgICAvLyB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAvLyAgIGZpZWxkczogdGhpcy5mYi5hcnJheShbXSksXG4gICAgLy8gfSlcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGZpZWxkczogbmV3IEZvcm1Db250cm9sKEpTT04uc3RyaW5naWZ5KHRoaXMuZmllbGRzKSlcbiAgICB9KVxuXG4gICAgdGhpcy51bnN1YmNyaWJlID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2codXBkYXRlKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzID0gSlNPTi5wYXJzZSh1cGRhdGUuZmllbGRzKTtcbiAgICB9KTtcbiAgfVxuXG5cblxuICBzaG93UUJsb2NrKCkge1xuICAgIHRoaXMuc2hvd1F1ZXN0aW9uQmxvY2sgPSBmYWxzZTtcbiAgfVxuXG4gIGdldENyaXRlcmlhKCkge1xuICAgIHJldHVybiB0aGlzLmNyaXRlcmlhTGlzdDtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyaXRlcmlhTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxpbmcgZnJvbSBwYXJlbnQgd2l0aCBkYXRhXCIsIGRhdGEpO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgLy8gbGV0IGR0ID0gZGF0YTtcbiAgICAgICAgLy8gdGhpcy5mb3JtQnVpbGQoZHQpO1xuICAgICAgICB0aGlzLmNyaXRlcmlhTGlzdCA9IGRhdGEuY3JpdGVyaWFMaXN0O1xuICAgICAgICBsZXQgZHQgPSBkYXRhWydxdWVzdGlvbkFycmF5J107XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJcIilcbiAgICAgICAgdGhpcy5mb3JtQnVpbGQoZHQpO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZURhdGEgPSB7XG4gICAgICAgICAgcXVlc3Rpb25MaXN0OiBkYXRhWydxdWVzdGlvbkFycmF5J10sXG4gICAgICAgICAgY3JpdGVyaWFMaXN0OiBkYXRhLmNyaXRlcmlhTGlzdFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZURhdGFcIiwgY29tcGxldGVEYXRhKTtcbiAgICAgICAgdGhpcy5zZW5kVG9TZXJ2aWNlKGNvbXBsZXRlRGF0YSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgICAgIGRhdGE6IHRoaXMuZmllbGRzXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ0byBnZXQgYWxsXCIsIHRoaXMuZmllbGRzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3JtRGF0YSA9IFtdO1xuICAgIHRoaXMuanNvbkRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwidGV4dFwiLFxuICAgICAgICBcImljb25cIjogXCJ0ZXh0X2Zvcm1hdFwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwiaWNvblwiOiBcImluZGV0ZXJtaW5hdGVfY2hlY2tfYm94XCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgICBcImljb25cIjogXCJyYWRpb19idXR0b25fY2hlY2tlZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICAgIFwiaWNvblwiOiBcImNoZWNrX2JveFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRyb3Bkb3duXCIsXG4gICAgICAgIFwiaWNvblwiOiBcImFycm93X2Ryb3BfZG93bl9jaXJjbGVcIlxuICAgICAgfSwge1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRhdGVcIixcbiAgICAgICAgXCJpY29uXCI6IFwiZGF0ZV9yYW5nZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwic2xpZGVyXCIsXG4gICAgICAgIFwiaWNvblwiOiBcImRhdGVfcmFuZ2VcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJtYXRyaXhcIixcbiAgICAgICAgXCJpY29uXCI6IFwiZGF0ZV9yYW5nZVwiXG4gICAgICB9XG4gICAgXVxuICB9XG4gIG9uVXBsb2FkKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuXG4gIGdldEZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHM7XG4gIH1cblxuICBuZ0Rpc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YmNyaWJlKCk7XG4gIH1cblxuICBzZW5kVG9TZXJ2aWNlKGRhdGEpOiB2b2lkIHtcbiAgICAvLyBzZW5kIG1lc3NhZ2UgdG8gc3Vic2NyaWJlcnMgdmlhIG9ic2VydmFibGUgc3ViamVjdFxuICAgIHRoaXMuZHluYW1pY1NlcnZlLnNlbmREYXRhKGRhdGEpO1xuICB9XG5cbiAgZ2V0VG9vbE9iaihlbGUsIGxlbikge1xuXG4gICAgbGV0IG9iaiA9IHtcblxuICAgIH1cbiAgICBpZiAoZWxlID09ICd0ZXh0Jykge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgXCJsYWJlbFwiOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBlbnRlciB5b3VyIHF1ZXN0aW9uIGhlcmVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSAnbnVtYmVyJykge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgZW50ZXIgeW91ciBxdWVzdGlvbiBoZXJlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gJ3JhZGlvJykge1xuICAgICAgb2JqID0ge1xuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnTGFiZWwgMScgfSxcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjInLCBsYWJlbDogJ0xhYmVsIDEnIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09IFwiY2hlY2tib3hcIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdvcHRpb24gMScgfSxcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjInLCBsYWJlbDogJ29wdGlvbiAyJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSBcImRyb3Bkb3duXCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgdmFsdWU6ICdvcHRpb24xJyxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ09wdGlvbiAxJyB9LFxuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDInIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChlbGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhEYXRlXCI6IFwiXCIsXG4gICAgICAgICAgXCJtaW5EYXRlXCI6IFwiXCIsXG5cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSAnbWF0cml4Jykge1xuICAgICAgaWYgKGVsZSA9PSAnY2hpbGREcm9wZWQnKSB7XG4gICAgICAgIGxldCBjaGlsZGRhdGEgPSB7XG4gICAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IGVsZS50eXBlLFxuICAgICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJjaGlsZFwiOiBbXSxcbiAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGFkZCBDaGlsZCdzIGhlcmVcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmaW5hbGNoaWxkID0gW107XG5cbiAgICAgIGZpbmFsY2hpbGQucHVzaCgpXG5cblxuICAgICAgb2JqID0ge1xuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwibWF0cml4XCIsXG4gICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwiY2hpbGRcIjogW10sXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgYWRkIENoaWxkJ3MgaGVyZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2UsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pblwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhEYXRlXCI6IFwiXCIsXG4gICAgICAgICAgXCJtaW5EYXRlXCI6IFwiXCIsXG5cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgb25Ecm9wKGVsZSwgYWN0aW9uID0gXCJcIikge1xuXG4gICAgdGhpcy5zaG93UXVlc3Rpb25CbG9jayA9ZmFsc2U7XG4gICAgY29uc29sZS5sb2coXCJkcm9wIGVsZVwiLCBlbGUpO1xuICAgIGlmIChlbGUuZGF0YSkge1xuICAgICAgZWxlID0gZWxlLmRhdGEucmVzcG9uc2VUeXBlXG4gICAgfVxuICAgIGxldCBsZW4gPSB0aGlzLmZpZWxkcy5sZW5ndGggKyAxO1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAoYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICBsZXQgY29weU9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogZWxlLnR5cGUsXG4gICAgICAgIFwibGFiZWxcIjogZWxlLmxhYmVsLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IGVsZS5wbGFjZWhvbGRlcixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBlbGUudmFsaWRhdGlvbnMsXG4gICAgICAgIFwib3B0aW9uc1wiOiBlbGUub3B0aW9ucyxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBlbGUuZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICAgIG9iaiA9IGNvcHlPYmo7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgIG9iaiA9IHRoaXMuZ2V0VG9vbE9iaihlbGUsIGxlbik7XG5cblxuXG4gICAgfVxuXG5cbiAgICBsZXQgZWxlbSA9IHRoaXMuZmllbGRzO1xuICAgIGxldCB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgYWN0aW9uOiAnYWRkJyxcbiAgICAgIGRhdGE6IG9ialxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRyYW5zZlwiLCB0cm5hc2Zvcm1EYXRhKTtcbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuXG4gICAgdGhpcy5mb3JtRGF0YS5wdXNoKG9iaik7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLVwiLCBvYmopO1xuICAgIGZvciAobGV0IGYgb2YgdGhpcy5mb3JtRGF0YSkge1xuXG5cbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGZbJ2ZpZWxkJ10pO1xuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBsZXQgb3B0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG5cbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IGNyZWRzID0gdGhpcy5mb3JtLmNvbnRyb2xzLmZpZWxkcyBhcyBGb3JtQXJyYXk7XG4gICAgICAvLyBjcmVkcy5wdXNoKHRoaXMuZmIuZ3JvdXAoZmllbGRzQ3RybHMpKTtcblxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZpZWxkc0N0cmxzXCIsZmllbGRzQ3RybHMpO1xuXG4gICAgICAvLyB0aGlzLmZvcm1EYXRhID0gIHRoaXMuZmllbGRzO1xuXG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIC8vIHRoaXMuZmllbGRzXG4gICAgLy8gdGhpcy5mb3JtQnVpbGQoKTtcbiAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG4gICAgbGV0IGNvbXBsZXRlRGF0YSA9IHtcbiAgICAgIHF1ZXN0aW9uTGlzdDogdGhpcy5maWVsZHMsXG4gICAgICBjcml0ZXJpYUxpc3Q6IHRoaXMuY3JpdGVyaWFMaXN0XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjb21wbGV0ZURhdGFcIiwgY29tcGxldGVEYXRhKTtcbiAgICB0aGlzLnNlbmRUb1NlcnZpY2UoY29tcGxldGVEYXRhKTtcblxuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQodHJuYXNmb3JtRGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZpZWxkcyBjb250cm9sc1wiLCB0aGlzLmZvcm0pO1xuXG4gIH1cblxuXG4gIGZvcm1CdWlsZChkYXRhKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG4gICAgdGhpcy5maWVsZHMgPSBbXTtcblxuICAgIHRoaXMuZmllbGRzLnNsaWNlKHRoaXMuZmllbGRzLmxlbmd0aCwgMCk7XG4gICAgZm9ybURhdGEgPSBkYXRhO1xuICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIGZvciAobGV0IGYgb2YgZm9ybURhdGEpIHtcbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImYudHlwZVwiLCBmWydmaWVsZCddKTtcbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUNvbnRyb2woZlsndmFsdWUnXSB8fCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvcHRzID0ge307XG4gICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4gICAgdGhpcy5maWVsZHMgPSBmb3JtRGF0YTtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgZGF0YTogZm9ybURhdGFcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGRzLS0tLS0tLVwiLCB0aGlzLmZpZWxkcyk7XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuXG5cbiAgICAvLyB0aGlzLmZpZWxkcyA9IGRhdGE7XG5cbiAgICAvLyBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGRzXCIsIGRhdGEpO1xuICAgIC8vIGZvciAobGV0IGYgb2YgZGF0YSkge1xuXG5cbiAgICAvLyAgIGlmIChmLnR5cGUgIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgLy8gICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woZi52YWx1ZSB8fCAnJylcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGxldCBvcHRzID0ge307XG4gICAgLy8gICAgIGZvciAobGV0IG9wdCBvZiBmLm9wdGlvbnMpIHtcblxuICAgIC8vICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LnZhbHVlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgfVxuXG4gIG9uU3VibWl0KHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLCB0aGlzLmZpZWxkcyk7XG5cbiAgICAvLyB0aGlzLnF1ZXN0aW9uTGlzdC5lbWl0KHRoaXMuZmllbGRzKTtcblxuICAgIGxldCBvYmogPSB7XG4gICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICBkYXRhOiB0aGlzLmZpZWxkc1xuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG4gIH1cblxuXG4gIC8vIChldmVudCkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdFbGVtZW50IHdhcyBkcmFnZ2VkJywgZXZlbnQpO1xuICAvLyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICB9XG4gIG9uRmllbGRVcGRhdGUoJGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJldmVudERhdGEgc3Nzc3Nzcy0tLS0tLVwiLCAkZXZlbnQuZGF0YSk7XG5cbiAgICBsZXQgZXZlbnRPYmogPSAkZXZlbnRcbiAgICBsZXQgdHJuYXNmb3JtRGF0YSA9IHt9O1xuICAgIGlmKCRldmVudC5hY3Rpb249PVwiYWRkbmV3XCIpe1xuICAgICAgdGhpcy5vbkRyb3AoJGV2ZW50LmRhdGEuZWxlbWVudCk7XG4gICAgfVxuICAgIGlmICgkZXZlbnQuYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICB0aGlzLm9uRHJvcCgkZXZlbnQuZGF0YSwgXCJjb3B5XCIpO1xuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImRlbGV0ZVwiKSB7XG4gICAgICB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgICBhY3Rpb246ICdkZWxldGUnLFxuICAgICAgICBkYXRhOiAkZXZlbnRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCRldmVudC5hY3Rpb24gPT0gXCJjaGlsZERyb3BlZFwiKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpZWxkcycsIHRoaXMuZmllbGRzKTtcblxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5maWVsZHMuZmlsdGVyKFxuICAgICAgICBpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5maWVsZCA9PT0gZXZlbnRPYmouZGF0YS5tdXRpU2VsZWN0LmZpZWxkKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnRPYmouZGF0YS5tdXRpU2VsZWN0LmZpZWxkLCAnPT09PT09IHRoaXMuZmllbGRzICA9PT09PScsIGl0ZW0pO1xuXG4gICAgICAgICAgICAvLyBpZihpdGVtLmNoaWxkKXtcbiAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLmdldFRvb2xPYmooJGV2ZW50LmRhdGEucmVzcG9uc2VUeXBlLCBpdGVtLmNoaWxkLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBpdGVtLmNoaWxkLnB1c2gob2JqKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBmaW5hbC5wdXNoKG9iaik7XG5cblxuICAgICAgLy8gdGhpcy5maWVsZHNcblxuICAgICAgY29uc29sZS5sb2coJ2ZpbmFsIHJlc3VsdCcsIGZpbmFsKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJtYWluIG9ialwiLCBvYmopO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRybmFzZm9ybURhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIGRhdGE6IEpTT04ucGFyc2UoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuICB9XG59XG4iXX0=