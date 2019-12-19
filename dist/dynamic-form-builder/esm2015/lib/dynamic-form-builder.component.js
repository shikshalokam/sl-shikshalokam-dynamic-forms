/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// private dynamicServe: DynamicFormBuilderService
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
            /** @type {?} */
            let finalchild = [];
            finalchild.push();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFLL0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUE7O0FBSTFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFzRWxDLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUF3QnRDLFlBQ1UsSUFBZ0IsRUFDaEIsWUFBeUIsRUFDekIsRUFBZSxFQUNmLFlBQXVDO1FBSHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUEyQjs7UUFsQnZDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUt4QyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBZXhCLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsS0FBSztRQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDeEIsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JELENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQiwyQ0FBMkM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQXZCRCxhQUFhLENBQUMsSUFBSTtRQUNoQixxREFBcUQ7UUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQXVCRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxRQUFRO1FBRU4sSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEQsSUFBSSxJQUFJLEVBQUU7Z0JBRVIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUUvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O29CQUNsQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNwQjtpQkFBTTs7b0JBQ0QsR0FBRyxHQUFHO29CQUNSLE1BQU0sRUFBRSxLQUFLO29CQUNiLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDbEI7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztRQUNILENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkO2dCQUNFLGNBQWMsRUFBRSxNQUFNO2FBRXZCLEVBQUU7Z0JBQ0QsY0FBYyxFQUFFLFFBQVE7YUFDekIsRUFBRTtnQkFDRCxjQUFjLEVBQUUsT0FBTzthQUN4QjtZQUNEO2dCQUNFLGNBQWMsRUFBRSxVQUFVO2FBQzNCO1lBQ0Q7Z0JBQ0UsY0FBYyxFQUFFLFVBQVU7YUFDM0IsRUFBRTtnQkFDRCxjQUFjLEVBQUUsTUFBTTthQUN2QixFQUFFO2dCQUNELGNBQWMsRUFBRSxRQUFRO2FBQ3pCO1lBQ0Q7Z0JBQ0UsY0FBYyxFQUFFLFFBQVE7YUFDekI7U0FDRixDQUFBO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxRQUFRLENBQUMsQ0FBQztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBR0QsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHOztZQUViLEdBQUcsR0FBRyxFQUVUO1FBQ0QsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ2pCLEdBQUcsR0FBRztnQkFDSixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsR0FBRyxHQUFHLFVBQVU7Z0JBQ3pCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRyxVQUFVO2dCQUNwQixhQUFhLEVBQUUsaUNBQWlDO2dCQUNoRCxhQUFhLEVBQUUsRUFBRTtnQkFDakIsYUFBYSxFQUFFO29CQUNiLFVBQVUsRUFBRSxJQUFJO29CQUNoQixXQUFXLEVBQUUsRUFBRTtvQkFDZixXQUFXLEVBQUUsRUFBRTtpQkFDaEI7YUFDRixDQUFBO1NBQ0Y7YUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFDMUIsR0FBRyxHQUFHO2dCQUNKLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxHQUFHLEdBQUcsVUFBVTtnQkFDekIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE9BQU8sRUFBRyxVQUFVO2dCQUNwQixhQUFhLEVBQUUsaUNBQWlDO2dCQUNoRCxhQUFhLEVBQUUsRUFBRTtnQkFDakIsYUFBYSxFQUFFO29CQUNiLFVBQVUsRUFBRSxJQUFJO29CQUNoQixXQUFXLEVBQUUsRUFBRTtvQkFDZixXQUFXLEVBQUUsRUFBRTtpQkFDaEI7YUFDRixDQUFBO1NBQ0Y7YUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsR0FBRyxHQUFHO2dCQUNKLFVBQVUsRUFBRSxHQUFHO2dCQUNmLEtBQUssRUFBRSxHQUFHLEdBQUcsVUFBVTtnQkFDdkIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLEdBQUcsR0FBRyxZQUFZO2dCQUN4QixPQUFPLEVBQUcsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsYUFBYSxFQUFFO29CQUNiLFVBQVUsRUFBRSxJQUFJO29CQUNoQixXQUFXLEVBQUUsRUFBRTtvQkFDZixXQUFXLEVBQUUsRUFBRTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNwQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtpQkFDckM7YUFDRixDQUFBO1NBQ0Y7YUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUU7WUFDNUIsR0FBRyxHQUFHO2dCQUNKLFVBQVUsRUFBRSxHQUFHO2dCQUNmLEtBQUssRUFBRSxHQUFHLEdBQUcsVUFBVTtnQkFDdkIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxHQUFHLEdBQUcsWUFBWTtnQkFDeEIsT0FBTyxFQUFHLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSxFQUFFO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2dCQUNkLGFBQWEsRUFBRTtvQkFDYixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsV0FBVyxFQUFFLEVBQUU7b0JBQ2YsV0FBVyxFQUFFLEVBQUU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtvQkFDckMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7aUJBQ3RDO2FBQ0YsQ0FBQTtTQUNGO2FBQU0sSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFO1lBQzVCLEdBQUcsR0FBRztnQkFDSixVQUFVLEVBQUUsR0FBRztnQkFDZixLQUFLLEVBQUUsR0FBRyxHQUFHLFVBQVU7Z0JBQ3ZCLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsR0FBRyxHQUFHLFlBQVk7Z0JBQ3hCLE9BQU8sRUFBRyxVQUFVO2dCQUNwQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsYUFBYSxFQUFFO29CQUNiLFVBQVUsRUFBRSxJQUFJO29CQUNoQixXQUFXLEVBQUUsRUFBRTtvQkFDZixXQUFXLEVBQUUsRUFBRTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO29CQUNyQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtpQkFDdEM7YUFDRixDQUFBO1NBQ0Y7YUFDSSxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDdEIsR0FBRyxHQUFHO2dCQUNKLFVBQVUsRUFBRSxHQUFHO2dCQUNmLEtBQUssRUFBRSxHQUFHLEdBQUcsVUFBVTtnQkFDdkIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLEdBQUcsR0FBRyxZQUFZO2dCQUN4QixPQUFPLEVBQUcsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsYUFBYSxFQUFFO29CQUNiLFVBQVUsRUFBRSxJQUFJO29CQUNoQixXQUFXLEVBQUUsRUFBRTtvQkFDZixXQUFXLEVBQUUsRUFBRTtvQkFDZixTQUFTLEVBQUUsRUFBRTtvQkFDYixTQUFTLEVBQUUsRUFBRTtpQkFFZDtnQkFDRCxPQUFPLEVBQUUsRUFFUjthQUNGLENBQUE7U0FDRjthQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUMxQixJQUFJLEdBQUcsSUFBSSxhQUFhLEVBQUU7O29CQUNwQixTQUFTLEdBQUc7b0JBQ2QsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsT0FBTyxFQUFFLEdBQUcsR0FBRyxVQUFVO29CQUN6QixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7b0JBQ2hCLE9BQU8sRUFBRyxVQUFVO29CQUNwQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxhQUFhLEVBQUUseUJBQXlCO29CQUN4QyxhQUFhLEVBQUUsRUFBRTtvQkFDakIsYUFBYSxFQUFFO3dCQUNiLFVBQVUsRUFBRSxLQUFLO3dCQUNqQixXQUFXLEVBQUUsRUFBRTt3QkFDZixXQUFXLEVBQUUsRUFBRTtxQkFDaEI7aUJBQ0Y7YUFDRjs7Z0JBQ0csVUFBVSxHQUFHLEVBQUU7WUFFbkIsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFBO1lBR2pCLEdBQUcsR0FBRztnQkFDSixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsR0FBRyxHQUFHLFVBQVU7Z0JBQ3pCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUcsVUFBVTtnQkFDcEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsYUFBYSxFQUFFLHlCQUF5QjtnQkFDeEMsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGFBQWEsRUFBRTtvQkFDYixVQUFVLEVBQUUsS0FBSztvQkFDakIsV0FBVyxFQUFFLEVBQUU7b0JBQ2YsV0FBVyxFQUFFLEVBQUU7aUJBQ2hCO2FBQ0YsQ0FBQTtTQUNGO2FBQU0sSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO1lBQzFCLEdBQUcsR0FBRztnQkFDSixLQUFLLEVBQUUsR0FBRyxHQUFHLFVBQVU7Z0JBQ3ZCLElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxHQUFHLEdBQUcsWUFBWTtnQkFDeEIsT0FBTyxFQUFHLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSxFQUFFO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2dCQUNkLGFBQWEsRUFBRTtvQkFDYixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsU0FBUyxFQUFFLEVBQUU7aUJBRWQ7Z0JBQ0QsT0FBTyxFQUFFLEVBRVI7YUFDRixDQUFBO1NBQ0Y7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxHQUFHLEVBQUU7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ1osR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFBO1NBQzVCOztZQUNHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDOztZQUM1QixHQUFHLEdBQUcsRUFBRTtRQUNaLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTs7Z0JBQ2hCLE9BQU8sR0FBRztnQkFDWixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsR0FBRyxHQUFHLFVBQVU7Z0JBQ3pCLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDaEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2dCQUNsQixhQUFhLEVBQUUsR0FBRyxDQUFDLFdBQVc7Z0JBQzlCLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVztnQkFDOUIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxPQUFPO2dCQUN0QixhQUFhLEVBQUUsR0FBRyxDQUFDLFdBQVc7YUFDL0I7WUFDRCxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBRWY7YUFBTTtZQUdMLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUlqQzs7WUFHRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU07O1lBQ2xCLGFBQWEsR0FBRztZQUNsQixNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxHQUFHO1NBQ1Y7UUFDRCx3Q0FBd0M7O1FBQXhDLHdDQUF3QztRQUd4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDcEIsV0FBVyxHQUFHLEVBQUU7UUFFcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2Qyw4QkFBOEI7UUFDOUIsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBRzNCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsRUFBRTtnQkFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7YUFDNUQ7aUJBQU07O29CQUVELElBQUksR0FBRyxFQUFFO2dCQUNiLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUU1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDNUM7Z0JBQ0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzlDO1lBRUQsd0RBQXdEO1lBQ3hELDBDQUEwQztZQUcxQywwQ0FBMEM7WUFFMUMsZ0NBQWdDO1NBRWpDO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUVsQixZQUFZLEdBQUc7WUFDakIsWUFBWSxFQUFDLElBQUksQ0FBQyxZQUFZO1lBQzlCLFlBQVksRUFBQyxJQUFJLENBQUMsTUFBTTtTQUN6QjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFNUMsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsSUFBSTs7WUFDUixRQUFRLEdBQUcsRUFBRTtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxRQUFRLEdBQUcsSUFBSSxDQUFDOztZQUNaLFdBQVcsR0FBRyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTthQUM1RDtpQkFBTTs7b0JBQ0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ2IsS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1QztnQkFDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDOUM7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7O1lBQ25CLEdBQUcsR0FBRztZQUNSLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRy9CLHNCQUFzQjtRQUV0Qix3QkFBd0I7UUFFeEIscUNBQXFDO1FBQ3JDLHdCQUF3QjtRQUd4QixnQ0FBZ0M7UUFFaEMsMkRBQTJEO1FBQzNELGFBQWE7UUFDYixxQkFBcUI7UUFDckIsbUNBQW1DO1FBRW5DLG9EQUFvRDtRQUNwRCxRQUFRO1FBQ1IsZ0RBQWdEO1FBQ2hELE1BQU07UUFDTixJQUFJO1FBQ0osMENBQTBDO0lBQzVDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7OztZQUk5QixHQUFHLEdBQUc7WUFDUixNQUFNLEVBQUUsS0FBSztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNsQjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7SUFPRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3ZDLENBQUM7Ozs7O0lBR0QsYUFBYSxDQUFDLE1BQU07UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRWhELFFBQVEsR0FBRyxNQUFNOztZQUNqQixhQUFhLEdBQUcsRUFBRTtRQUN0QixJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNsQzthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUU7WUFDcEMsYUFBYSxHQUFHO2dCQUNkLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixJQUFJLEVBQUUsTUFBTTthQUNiLENBQUE7U0FJRjthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxhQUFhLEVBQUU7WUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O2dCQUU5QyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1lBQzVCLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7O3dCQUU3QyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixPQUFPLElBQUksQ0FBQztpQkFDYjtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQztpQkFDYjtZQUNILENBQUMsRUFBQztZQUVKLG1CQUFtQjtZQUduQixjQUFjO1lBRWQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFbkMsZ0NBQWdDO1NBRWpDO2FBQU07WUFDTCxhQUFhLEdBQUc7Z0JBQ2QsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQTtTQUNGOztZQUVHLFlBQVksR0FBRztZQUNqQixZQUFZLEVBQUMsSUFBSSxDQUFDLE1BQU07WUFDeEIsWUFBWSxFQUFDLElBQUksQ0FBQyxZQUFZO1NBQy9CO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUF6akJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQStEQztnQkFDWCxTQUFTLEVBQUUsRUFBRTthQUNkOzs7O1lBOUVRLFVBQVU7WUFEYyxXQUFXO1lBQVgsV0FBVztZQU1uQyx5QkFBeUI7OztxQkFrRi9CLEtBQUs7OEJBRUwsTUFBTTs7OztJQVRQLDJDQUF1Qjs7SUFDdkIsaURBQWdCOztJQUNoQiwrQ0FBYzs7SUFDZCwrQ0FBYzs7SUFDZCxpREFBZ0I7O0lBR2hCLDZDQUFpQzs7SUFFakMsc0RBQStDOztJQUMvQyx5REFBd0I7O0lBRXhCLG1EQUFpQjs7SUFFakIsNkNBQTBCOzs7OztJQVV4QiwyQ0FBd0I7Ozs7O0lBQ3hCLG1EQUFpQzs7Ozs7SUFDakMseUNBQXVCOzs7OztJQUN2QixtREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IERuZERyb3BFdmVudCB9IGZyb20gJ25neC1kcmFnLWRyb3AnXG4vLyBwcml2YXRlIGR5bmFtaWNTZXJ2ZTogRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZVxuXG5pbXBvcnQgeyBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJ1xuXG4vLyBpbXBvcnQgIHsgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWR5bmFtaWMtZm9ybS1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGA8c3R5bGU+XG4gIHAge1xuICAgICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgfVxuICAgIC5ub1BhZGRpbmcge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5tYXJnaW4tNSB7XG4gICAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgfVxuICAgIC5lbGVtZW50IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7XG4gIH1cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjZTdlNztcbiAgICB9XG4gICAgc3Bhbi5jdXJzb3ItcG50ciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgIH1cbiAgICBcbiAgICBcbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG5vUGFkZGluZ1wiPlxuICAgXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGRuZERyb3B6b25lIGNsYXNzPVwiY2FyZC1ib2R5XCIgKGRuZERyb3ApPVwib25Ecm9wKCRldmVudClcIiA+XG4gICAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCh0aGlzLmZvcm0udmFsdWUpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxkeW5hbWljLWZvcm0tYnVpbGRlciBbY3JpdGVyaWFMaXN0XT1cImdldENyaXRlcmlhKClcIiBbZmllbGRzXT1cImdldEZpZWxkcygpXCIgW2Zvcm1dPVwiZm9ybVwiICAob25GaWVsZFVwZGF0ZSk9XCJvbkZpZWxkVXBkYXRlKCRldmVudClcIiA+PC9keW5hbWljLWZvcm0tYnVpbGRlcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCIgc3R5bGU9XCJwYWRkaW5nLXRvcDoyNXB4XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDwhLS0gPGR5bmFtaWMtZm9ybS1idWlsZGVyIFtjcml0ZXJpYUxpc3RdPVwiZ2V0Q3JpdGVyaWEoKVwiIFtmaWVsZHNdPVwiZ2V0RmllbGRzKClcIj48L2R5bmFtaWMtZm9ybS1idWlsZGVyPiAtLT5cbiAgICAgIFxuICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGl0ZW0gb2YganNvbkRhdGFcIiBzdHlsZSA9XCJwYWRkaW5nOjVweFwiPlxuICAgICAgICAgICAgICA8c3BhbiBbZG5kRHJhZ2dhYmxlXT1cIml0ZW1cIiAgY2xhc3M9XCJlbGVtZW50XCIgID57eyBpdGVtLnJlc3BvbnNlVHlwZT09J211bHRpc2VsZWN0Jz8nbWV0cml4JzppdGVtLnJlc3BvbnNlVHlwZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KGl0ZW0ucmVzcG9uc2VUeXBlKVwiID5OdW1iZXI8L2Rpdj4gLS0+XG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudCgnaW5wdXQnKVwiID5JbnB1dDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KCdudW1iZXInKVwiID5OdW1iZXI8L2Rpdj4gLS0+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICB1bnN1YmNyaWJlOiBhbnk7XG4gIGpzb25EYXRhOiBhbnk7XG4gIGZvcm1EYXRhOiBhbnk7XG4gIHBhZ2VOdW1iZXI6IGFueTtcblxuICAvLyBASW5wdXQoKSBkYXRhO1xuICBASW5wdXQoKSBldmVudHM6IE9ic2VydmFibGU8YW55PjtcbiAgLy8gQE91dHB1dCgpIHF1ZXN0aW9uTGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHF1ZXN0aW9uVHJpZ2dlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXZlbnRzU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgY3JpdGVyaWFMaXN0OmFueTtcblxuICBwdWJsaWMgZmllbGRzOiBhbnlbXSA9IFtdO1xuXG5cbiAgc2VuZFRvU2VydmljZShkYXRhKTogdm9pZCB7XG4gICAgLy8gc2VuZCBtZXNzYWdlIHRvIHN1YnNjcmliZXJzIHZpYSBvYnNlcnZhYmxlIHN1YmplY3RcbiAgICB0aGlzLmR5bmFtaWNTZXJ2ZS5zZW5kRGF0YShkYXRhKTtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBcbiAgICBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgZHluYW1pY1NlcnZlOiBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlXG4gICAgKSB7XG4gICAgLy8gdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgLy8gICBmaWVsZHM6IHRoaXMuZmIuYXJyYXkoW10pLFxuICAgIC8vIH0pXG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBmaWVsZHM6IG5ldyBGb3JtQ29udHJvbChKU09OLnN0cmluZ2lmeSh0aGlzLmZpZWxkcykpXG4gICAgfSlcblxuICAgIHRoaXMudW5zdWJjcmliZSA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZSk7XG4gICAgICAvLyB0aGlzLmZpZWxkcyA9IEpTT04ucGFyc2UodXBkYXRlLmZpZWxkcyk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGdldENyaXRlcmlhKCl7XG4gICAgcmV0dXJuIHRoaXMuY3JpdGVyaWFMaXN0O1xuICB9XG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5jcml0ZXJpYUxpc3QgPSBbXTtcbiAgICB0aGlzLmV2ZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRzLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGluZyBmcm9tIHBhcmVudCB3aXRoIGRhdGEgPT09IFwiLCBkYXRhKTtcbiAgICAgIGlmIChkYXRhKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJjcml0ZXJpYSBsaXN0XCIsZGF0YS5jcml0ZXJpYUxpc3QpO1xuXG4gICAgICAgIHRoaXMuY3JpdGVyaWFMaXN0ID0gZGF0YS5jcml0ZXJpYUxpc3Q7XG4gICAgICAgIGxldCBkdCA9IGRhdGFbJ3F1ZXN0aW9uQXJyYXknXTtcbiAgICAgICAgdGhpcy5mb3JtQnVpbGQoZHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICAgICAgZGF0YTogdGhpcy5maWVsZHNcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInRvIGdldCBhbGxcIiwgdGhpcy5maWVsZHMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmZvcm1EYXRhID0gW107XG4gICAgdGhpcy5qc29uRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJ0ZXh0XCIsXG5cbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJkcm9wZG93blwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwiZGF0ZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwic2xpZGVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwibWF0cml4XCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbiAgb25VcGxvYWQoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG5cbiAgZ2V0RmllbGRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkcztcbiAgfVxuXG4gIG5nRGlzdHJveSgpIHtcbiAgICB0aGlzLnVuc3ViY3JpYmUoKTtcbiAgfVxuXG5cbiAgZ2V0VG9vbE9iaihlbGUsIGxlbikge1xuXG4gICAgbGV0IG9iaiA9IHtcblxuICAgIH1cbiAgICBpZiAoZWxlID09ICd0ZXh0Jykge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgXCJsYWJlbFwiOiAgXCJRdWVzdGlvblwiLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGVudGVyIHlvdXIgcXVlc3Rpb24gaGVyZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09ICdudW1iZXInKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwibGFiZWxcIjogIFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBlbnRlciB5b3VyIHF1ZXN0aW9uIGhlcmVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSAncmFkaW8nKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJsYWJlbFwiOiAgXCJRdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnTGFiZWwgMScgfSxcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjInLCBsYWJlbDogJ0xhYmVsIDEnIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09IFwiY2hlY2tib3hcIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJsYWJlbFwiOiAgXCJRdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnb3B0aW9uIDEnIH0sXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24yJywgbGFiZWw6ICdvcHRpb24gMicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gXCJkcm9wZG93blwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiAnZHJvcGRvd24nLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJsYWJlbFwiOiAgXCJRdWVzdGlvblwiLFxuICAgICAgICB2YWx1ZTogJ29wdGlvbjEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDEnIH0sXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdPcHRpb24gMicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZSA9PSBcImRhdGVcIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJsYWJlbFwiOiAgXCJRdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhEYXRlXCI6IFwiXCIsXG4gICAgICAgICAgXCJtaW5EYXRlXCI6IFwiXCIsXG5cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSAnbWF0cml4Jykge1xuICAgICAgaWYgKGVsZSA9PSAnY2hpbGREcm9wZWQnKSB7XG4gICAgICAgIGxldCBjaGlsZGRhdGEgPSB7XG4gICAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IGVsZS50eXBlLFxuICAgICAgICAgIFwibGFiZWxcIjogIFwiUXVlc3Rpb25cIixcbiAgICAgICAgICBcImNoaWxkXCI6IFtdLFxuICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgYWRkIENoaWxkJ3MgaGVyZVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGZpbmFsY2hpbGQgPSBbXTtcblxuICAgICAgZmluYWxjaGlsZC5wdXNoKClcblxuXG4gICAgICBvYmogPSB7XG4gICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwibWF0cml4XCIsXG4gICAgICAgIFwibGFiZWxcIjogIFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJjaGlsZFwiOiBbXSxcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBhZGQgQ2hpbGQncyBoZXJlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09IFwic2xpZGVyXCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBcImxhYmVsXCI6ICBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluXCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhcIjogXCJcIixcbiAgICAgICAgICBcIm1heERhdGVcIjogXCJcIixcbiAgICAgICAgICBcIm1pbkRhdGVcIjogXCJcIixcblxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG5cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBvbkRyb3AoZWxlLCBhY3Rpb24gPSBcIlwiKSB7XG4gICAgY29uc29sZS5sb2coXCJkcm9wIGVsZVwiLCBlbGUpO1xuICAgIGlmIChlbGUuZGF0YSkge1xuICAgICAgZWxlID0gZWxlLmRhdGEucmVzcG9uc2VUeXBlXG4gICAgfVxuICAgIGxldCBsZW4gPSB0aGlzLmZpZWxkcy5sZW5ndGggKyAxO1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAoYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICBsZXQgY29weU9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogZWxlLnR5cGUsXG4gICAgICAgIFwibGFiZWxcIjogZWxlLmxhYmVsLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IGVsZS5wbGFjZWhvbGRlcixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBlbGUudmFsaWRhdGlvbnMsXG4gICAgICAgIFwib3B0aW9uc1wiOiBlbGUub3B0aW9ucyxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBlbGUuZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICAgIG9iaiA9IGNvcHlPYmo7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgIG9iaiA9IHRoaXMuZ2V0VG9vbE9iaihlbGUsIGxlbik7XG5cblxuXG4gICAgfVxuXG5cbiAgICBsZXQgZWxlbSA9IHRoaXMuZmllbGRzO1xuICAgIGxldCB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgYWN0aW9uOiAnYWRkJyxcbiAgICAgIGRhdGE6IG9ialxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zZlwiLCB0cm5hc2Zvcm1EYXRhKTtcblxuICAgIFxuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQodHJuYXNmb3JtRGF0YSk7XG5cbiAgICB0aGlzLmZvcm1EYXRhLnB1c2gob2JqKTtcbiAgICBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tXCIsIG9iaik7XG4gICAgZm9yIChsZXQgZiBvZiB0aGlzLmZvcm1EYXRhKSB7XG5cblxuICAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJmLnR5cGVcIiwgZlsnZmllbGQnXSk7XG4gICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Db250cm9sKGZbJ3ZhbHVlJ10gfHwgJycpXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxldCBvcHRzID0ge307XG4gICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcblxuICAgICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgY3JlZHMgPSB0aGlzLmZvcm0uY29udHJvbHMuZmllbGRzIGFzIEZvcm1BcnJheTtcbiAgICAgIC8vIGNyZWRzLnB1c2godGhpcy5mYi5ncm91cChmaWVsZHNDdHJscykpO1xuXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGRzQ3RybHNcIixmaWVsZHNDdHJscyk7XG5cbiAgICAgIC8vIHRoaXMuZm9ybURhdGEgPSAgdGhpcy5maWVsZHM7XG5cbiAgICB9XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gICAgLy8gdGhpcy5maWVsZHNcbiAgICAvLyB0aGlzLmZvcm1CdWlsZCgpO1xuICAgIHRoaXMuZmllbGRzLnB1c2gob2JqKTtcblxuICAgIGxldCBjb21wbGV0ZURhdGEgPSB7XG4gICAgICBjcml0ZXJpYUxpc3Q6dGhpcy5jcml0ZXJpYUxpc3QsXG4gICAgICBxdWVzdGlvbkxpc3Q6dGhpcy5maWVsZHNcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJjb21wbGV0ZURhdGFcIixjb21wbGV0ZURhdGEpO1xuICAgIHRoaXMuc2VuZFRvU2VydmljZShjb21wbGV0ZURhdGEpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiZmllbGRzIGNvbnRyb2xzXCIsIHRoaXMuZm9ybSk7XG5cbiAgfVxuXG5cbiAgZm9ybUJ1aWxkKGRhdGEpIHtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcbiAgICB0aGlzLmZpZWxkcyA9IFtdO1xuXG4gICAgdGhpcy5maWVsZHMuc2xpY2UodGhpcy5maWVsZHMubGVuZ3RoLCAwKTtcbiAgICBmb3JtRGF0YSA9IGRhdGE7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gICAgZm9yIChsZXQgZiBvZiBmb3JtRGF0YSkge1xuICAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGZbJ2ZpZWxkJ10pO1xuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9wdHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgb3B0IG9mIGZbJ29wdGlvbnMnXSkge1xuICAgICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG5cbiAgICB0aGlzLmZpZWxkcyA9IGZvcm1EYXRhO1xuICAgIGxldCBvYmogPSB7XG4gICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICBkYXRhOiBmb3JtRGF0YVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5maWVsZHMtLS0tLS0tXCIsIHRoaXMuZmllbGRzKTtcbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG5cblxuICAgIC8vIHRoaXMuZmllbGRzID0gZGF0YTtcblxuICAgIC8vIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZHNcIiwgZGF0YSk7XG4gICAgLy8gZm9yIChsZXQgZiBvZiBkYXRhKSB7XG5cblxuICAgIC8vICAgaWYgKGYudHlwZSAhPSAnY2hlY2tib3gnKSB7XG5cbiAgICAvLyAgICAgZmllbGRzQ3RybHNbZi5uYW1lXSA9IG5ldyBGb3JtQ29udHJvbChmLnZhbHVlIHx8ICcnKVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgbGV0IG9wdHMgPSB7fTtcbiAgICAvLyAgICAgZm9yIChsZXQgb3B0IG9mIGYub3B0aW9ucykge1xuXG4gICAgLy8gICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQudmFsdWUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICB9XG5cbiAgb25TdWJtaXQodmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIHRoaXMuZmllbGRzKTtcblxuICAgIC8vIHRoaXMucXVlc3Rpb25MaXN0LmVtaXQodGhpcy5maWVsZHMpO1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGFjdGlvbjogXCJhbGxcIixcbiAgICAgIGRhdGE6IHRoaXMuZmllbGRzXG4gICAgfVxuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQob2JqKTtcbiAgfVxuXG5cbiAgLy8gKGV2ZW50KSB7XG4gIC8vICAgY29uc29sZS5sb2coJ0VsZW1lbnQgd2FzIGRyYWdnZWQnLCBldmVudCk7XG4gIC8vIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gIH1cblxuXG4gIG9uRmllbGRVcGRhdGUoJGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJldmVudERhdGEgc3Nzc3Nzcy0tLS0tLVwiLCAkZXZlbnQuZGF0YSk7XG5cbiAgICBsZXQgZXZlbnRPYmogPSAkZXZlbnRcbiAgICBsZXQgdHJuYXNmb3JtRGF0YSA9IHt9O1xuICAgIGlmICgkZXZlbnQuYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICB0aGlzLm9uRHJvcCgkZXZlbnQuZGF0YSwgXCJjb3B5XCIpO1xuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImRlbGV0ZVwiKSB7XG4gICAgICB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgICBhY3Rpb246ICdkZWxldGUnLFxuICAgICAgICBkYXRhOiAkZXZlbnRcbiAgICAgIH1cblxuICAgICBcblxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImNoaWxkRHJvcGVkXCIpIHtcblxuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmllbGRzICBpbiBjaGlsZCcsIHRoaXMuZmllbGRzKTtcblxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5maWVsZHMuZmlsdGVyKFxuICAgICAgICBpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5maWVsZCA9PT0gZXZlbnRPYmouZGF0YS5tdXRpU2VsZWN0LmZpZWxkKSB7XG5cbiAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLmdldFRvb2xPYmooJGV2ZW50LmRhdGEucmVzcG9uc2VUeXBlLCBpdGVtLmNoaWxkLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgaXRlbS5jaGlsZC5wdXNoKG9iaik7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgLy8gZmluYWwucHVzaChvYmopO1xuXG5cbiAgICAgIC8vIHRoaXMuZmllbGRzXG5cbiAgICAgIGNvbnNvbGUubG9nKCdmaW5hbCByZXN1bHQnLCBmaW5hbCk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibWFpbiBvYmpcIiwgb2JqKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgICBhY3Rpb246ICd1cGRhdGUnLFxuICAgICAgICBkYXRhOiAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29tcGxldGVEYXRhID0ge1xuICAgICAgcXVlc3Rpb25MaXN0OnRoaXMuZmllbGRzLFxuICAgICAgY3JpdGVyaWFMaXN0OnRoaXMuY3JpdGVyaWFMaXN0XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjb21wbGV0ZURhdGFcIixjb21wbGV0ZURhdGEpO1xuICAgIHRoaXMuc2VuZFRvU2VydmljZShjb21wbGV0ZURhdGEpO1xuXG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdCh0cm5hc2Zvcm1EYXRhKTtcbiAgfVxufVxuIl19