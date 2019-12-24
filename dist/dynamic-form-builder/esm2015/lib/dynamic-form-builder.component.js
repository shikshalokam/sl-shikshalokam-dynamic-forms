/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder.component.ts
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
        this.showQuestionBlock;
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
    .cursor-pntr {
        cursor: pointer;
    }
    
    
  </style>
  <div class="col-sm-12">
      

    <div class="col-sm-12 noPadding">
  
    <div class="card" >
          <div dndDropzone class="card-body" (dndDrop)="onDrop($event)">
              <form (ngSubmit)="onSubmit(this.form.value)" [formGroup]="form" class="form-horizontal">
            <dynamic-form-builder [fields]="getFields()" [form]="form"  (onFieldUpdate)="onFieldUpdate($event)" ></dynamic-form-builder>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-4" style="padding-top:25px">
          
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFHL0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBSTNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFvRWxDLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUFpQnRDLFlBQW9CLElBQWdCLEVBQzFCLFlBQXlCLEVBQ3pCLEVBQWUsRUFDZixZQUF1QztRQUg3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBMkI7O1FBVnZDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUl4QyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBUXhCLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsS0FBSztRQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDeEIsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JELENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElB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QUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUE2REM7Z0JBQ1gsU0FBUyxFQUFFLEVBQUU7YUFDZDs7OztZQTFFUSxVQUFVO1lBRGMsV0FBVztZQUFYLFdBQVc7WUFJbkMseUJBQXlCOzs7cUJBZ0YvQixLQUFLOzhCQUVMLE1BQU07Ozs7SUFUUCwyQ0FBdUI7O0lBQ3ZCLGlEQUFnQjs7SUFDaEIsK0NBQWM7O0lBQ2QsK0NBQWM7O0lBQ2QsaURBQWdCOztJQUdoQiw2Q0FBaUM7O0lBRWpDLHNEQUErQzs7SUFDL0MseURBQXdCOztJQUN4QixtREFBaUI7O0lBRWpCLDZDQUEwQjs7SUFDMUIsd0RBQXNCOzs7OztJQUVWLDJDQUF3Qjs7Ozs7SUFDbEMsbURBQWlDOzs7OztJQUNqQyx5Q0FBdUI7Ozs7O0lBQ3ZCLG1EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRG5kRHJvcEV2ZW50IH0gZnJvbSAnbmd4LWRyYWctZHJvcCdcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UnO1xuXG4vLyBpbXBvcnQgIHsgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UnXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWR5bmFtaWMtZm9ybS1idWlsZGVyJyxcbiAgdGVtcGxhdGU6IGA8c3R5bGU+XG4gIHAge1xuICAgICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgfVxuICAgIC5ub1BhZGRpbmcge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5tYXJnaW4tNSB7XG4gICAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgfVxuICAgIC5lbGVtZW50IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7XG4gIH1cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjZTdlNztcbiAgICB9XG4gICAgLmN1cnNvci1wbnRyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICBcbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG5vUGFkZGluZ1wiPlxuICBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiID5cbiAgICAgICAgICA8ZGl2IGRuZERyb3B6b25lIGNsYXNzPVwiY2FyZC1ib2R5XCIgKGRuZERyb3ApPVwib25Ecm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KHRoaXMuZm9ybS52YWx1ZSlcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPGR5bmFtaWMtZm9ybS1idWlsZGVyIFtmaWVsZHNdPVwiZ2V0RmllbGRzKClcIiBbZm9ybV09XCJmb3JtXCIgIChvbkZpZWxkVXBkYXRlKT1cIm9uRmllbGRVcGRhdGUoJGV2ZW50KVwiID48L2R5bmFtaWMtZm9ybS1idWlsZGVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCIgc3R5bGU9XCJwYWRkaW5nLXRvcDoyNXB4XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDwhLS0gPGR5bmFtaWMtZm9ybS1idWlsZGVyIFtmaWVsZHNdPVwiZ2V0RmllbGRzKClcIj48L2R5bmFtaWMtZm9ybS1idWlsZGVyPiAtLT5cbiAgICAgIFxuICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGl0ZW0gb2YganNvbkRhdGFcIiBzdHlsZSA9XCJwYWRkaW5nOjVweFwiPlxuICAgICAgICAgICAgICA8c3BhbiBbZG5kRHJhZ2dhYmxlXT1cIml0ZW1cIiAgY2xhc3M9XCJlbGVtZW50XCIgID57eyBpdGVtLnJlc3BvbnNlVHlwZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KGl0ZW0ucmVzcG9uc2VUeXBlKVwiID5OdW1iZXI8L2Rpdj4gLS0+XG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudCgnaW5wdXQnKVwiID5JbnB1dDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KCdudW1iZXInKVwiID5OdW1iZXI8L2Rpdj4gLS0+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICB1bnN1YmNyaWJlOiBhbnk7XG4gIGpzb25EYXRhOiBhbnk7XG4gIGZvcm1EYXRhOiBhbnk7XG4gIHBhZ2VOdW1iZXI6IGFueTtcblxuICAvLyBASW5wdXQoKSBkYXRhO1xuICBASW5wdXQoKSBldmVudHM6IE9ic2VydmFibGU8YW55PjtcbiAgLy8gQE91dHB1dCgpIHF1ZXN0aW9uTGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHF1ZXN0aW9uVHJpZ2dlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXZlbnRzU3Vic2NyaXB0aW9uOiBhbnk7XG4gIGNyaXRlcmlhTGlzdDphbnk7XG5cbiAgcHVibGljIGZpZWxkczogYW55W10gPSBbXTtcbiAgc2hvd1F1ZXN0aW9uQmxvY2s6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgXG4gICAgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGR5bmFtaWNTZXJ2ZTogRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZVxuICAgICkge1xuICAgIC8vIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIC8vICAgZmllbGRzOiB0aGlzLmZiLmFycmF5KFtdKSxcbiAgICAvLyB9KVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgZmllbGRzOiBuZXcgRm9ybUNvbnRyb2woSlNPTi5zdHJpbmdpZnkodGhpcy5maWVsZHMpKVxuICAgIH0pXG5cbiAgICB0aGlzLnVuc3ViY3JpYmUgPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodXBkYXRlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh1cGRhdGUpO1xuICAgICAgLy8gdGhpcy5maWVsZHMgPSBKU09OLnBhcnNlKHVwZGF0ZS5maWVsZHMpO1xuICAgIH0pO1xuICB9XG5cblxuXG4gIHNob3dRQmxvY2soKXtcbiAgICB0aGlzLnNob3dRdWVzdGlvbkJsb2NrO1xuICB9XG5cbiAgZ2V0Q3JpdGVyaWEoKXtcbiAgICByZXR1cm4gdGhpcy5jcml0ZXJpYUxpc3Q7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcml0ZXJpYUxpc3QgPSBbXTtcblxuICAgIHRoaXMuZXZlbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudHMuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjYWxsaW5nIGZyb20gcGFyZW50IHdpdGggZGF0YVwiLCBkYXRhKTtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIC8vIGxldCBkdCA9IGRhdGE7XG4gICAgICAgIC8vIHRoaXMuZm9ybUJ1aWxkKGR0KTtcbiAgICAgICAgdGhpcy5jcml0ZXJpYUxpc3QgPSBkYXRhLmNyaXRlcmlhTGlzdDtcbiAgICAgICAgbGV0IGR0ID0gZGF0YVsncXVlc3Rpb25BcnJheSddO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXCIpXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkKGR0KTtcblxuICAgICAgICBsZXQgY29tcGxldGVEYXRhID0ge1xuICAgICAgICAgIHF1ZXN0aW9uTGlzdDpkYXRhWydxdWVzdGlvbkFycmF5J10sXG4gICAgICAgICAgY3JpdGVyaWFMaXN0OmRhdGEuY3JpdGVyaWFMaXN0XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZURhdGFcIixjb21wbGV0ZURhdGEpO1xuICAgICAgICB0aGlzLnNlbmRUb1NlcnZpY2UoY29tcGxldGVEYXRhKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICAgICAgZGF0YTogdGhpcy5maWVsZHNcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInRvIGdldCBhbGxcIiwgdGhpcy5maWVsZHMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmZvcm1EYXRhID0gW107XG4gICAgdGhpcy5qc29uRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJ0ZXh0XCIsXG5cbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJkcm9wZG93blwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwiZGF0ZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwic2xpZGVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwibWF0cml4XCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbiAgb25VcGxvYWQoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG5cbiAgZ2V0RmllbGRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkcztcbiAgfVxuXG4gIG5nRGlzdHJveSgpIHtcbiAgICB0aGlzLnVuc3ViY3JpYmUoKTtcbiAgfVxuXG4gIHNlbmRUb1NlcnZpY2UoZGF0YSk6IHZvaWQge1xuICAgIC8vIHNlbmQgbWVzc2FnZSB0byBzdWJzY3JpYmVycyB2aWEgb2JzZXJ2YWJsZSBzdWJqZWN0XG4gICAgdGhpcy5keW5hbWljU2VydmUuc2VuZERhdGEoZGF0YSk7XG4gIH1cblxuICBnZXRUb29sT2JqKGVsZSwgbGVuKSB7XG5cbiAgICBsZXQgb2JqID0ge1xuXG4gICAgfVxuICAgIGlmIChlbGUgPT0gJ3RleHQnKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICBcImxhYmVsXCI6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGVudGVyIHlvdXIgcXVlc3Rpb24gaGVyZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09ICdudW1iZXInKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgICAgXCJsYWJlbFwiOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBlbnRlciB5b3VyIHF1ZXN0aW9uIGhlcmVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSAncmFkaW8nKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdMYWJlbCAxJyB9LFxuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMicsIGxhYmVsOiAnTGFiZWwgMScgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ29wdGlvbiAxJyB9LFxuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMicsIGxhYmVsOiAnb3B0aW9uIDInIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09IFwiZHJvcGRvd25cIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiAnZHJvcGRvd24nLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICB2YWx1ZTogJ29wdGlvbjEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDEnIH0sXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdPcHRpb24gMicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZSA9PSBcImRhdGVcIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIixcbiAgICAgICAgICBcIm1heERhdGVcIjogXCJcIixcbiAgICAgICAgICBcIm1pbkRhdGVcIjogXCJcIixcblxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG5cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09ICdtYXRyaXgnKSB7XG4gICAgICBpZiAoZWxlID09ICdjaGlsZERyb3BlZCcpIHtcbiAgICAgICAgbGV0IGNoaWxkZGF0YSA9IHtcbiAgICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgICBcInR5cGVcIjogZWxlLnR5cGUsXG4gICAgICAgICAgXCJsYWJlbFwiOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICBcImNoaWxkXCI6IFtdLFxuICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgYWRkIENoaWxkJ3MgaGVyZVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGZpbmFsY2hpbGQgPSBbXTtcblxuICAgICAgZmluYWxjaGlsZC5wdXNoKClcblxuXG4gICAgICBvYmogPSB7XG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogXCJtYXRyaXhcIixcbiAgICAgICAgXCJsYWJlbFwiOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJjaGlsZFwiOiBbXSxcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBhZGQgQ2hpbGQncyBoZXJlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09IFwic2xpZGVyXCIpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluXCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhcIjogXCJcIixcbiAgICAgICAgICBcIm1heERhdGVcIjogXCJcIixcbiAgICAgICAgICBcIm1pbkRhdGVcIjogXCJcIixcblxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG5cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBvbkRyb3AoZWxlLCBhY3Rpb24gPSBcIlwiKSB7XG4gICAgY29uc29sZS5sb2coXCJkcm9wIGVsZVwiLCBlbGUpO1xuICAgIGlmIChlbGUuZGF0YSkge1xuICAgICAgZWxlID0gZWxlLmRhdGEucmVzcG9uc2VUeXBlXG4gICAgfVxuICAgIGxldCBsZW4gPSB0aGlzLmZpZWxkcy5sZW5ndGggKyAxO1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAoYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICBsZXQgY29weU9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogZWxlLnR5cGUsXG4gICAgICAgIFwibGFiZWxcIjogZWxlLmxhYmVsLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IGVsZS5wbGFjZWhvbGRlcixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBlbGUudmFsaWRhdGlvbnMsXG4gICAgICAgIFwib3B0aW9uc1wiOiBlbGUub3B0aW9ucyxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBlbGUuZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICAgIG9iaiA9IGNvcHlPYmo7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgIG9iaiA9IHRoaXMuZ2V0VG9vbE9iaihlbGUsIGxlbik7XG5cblxuXG4gICAgfVxuXG5cbiAgICBsZXQgZWxlbSA9IHRoaXMuZmllbGRzO1xuICAgIGxldCB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgYWN0aW9uOiAnYWRkJyxcbiAgICAgIGRhdGE6IG9ialxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRyYW5zZlwiLCB0cm5hc2Zvcm1EYXRhKTtcbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuXG4gICAgdGhpcy5mb3JtRGF0YS5wdXNoKG9iaik7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLVwiLCBvYmopO1xuICAgIGZvciAobGV0IGYgb2YgdGhpcy5mb3JtRGF0YSkge1xuXG5cbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGZbJ2ZpZWxkJ10pO1xuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBsZXQgb3B0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG5cbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IGNyZWRzID0gdGhpcy5mb3JtLmNvbnRyb2xzLmZpZWxkcyBhcyBGb3JtQXJyYXk7XG4gICAgICAvLyBjcmVkcy5wdXNoKHRoaXMuZmIuZ3JvdXAoZmllbGRzQ3RybHMpKTtcblxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZpZWxkc0N0cmxzXCIsZmllbGRzQ3RybHMpO1xuXG4gICAgICAvLyB0aGlzLmZvcm1EYXRhID0gIHRoaXMuZmllbGRzO1xuXG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIC8vIHRoaXMuZmllbGRzXG4gICAgLy8gdGhpcy5mb3JtQnVpbGQoKTtcbiAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG4gICAgbGV0IGNvbXBsZXRlRGF0YSA9IHtcbiAgICAgIHF1ZXN0aW9uTGlzdDp0aGlzLmZpZWxkcyxcbiAgICAgIGNyaXRlcmlhTGlzdDp0aGlzLmNyaXRlcmlhTGlzdFxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVEYXRhXCIsY29tcGxldGVEYXRhKTtcbiAgICB0aGlzLnNlbmRUb1NlcnZpY2UoY29tcGxldGVEYXRhKTtcblxuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQodHJuYXNmb3JtRGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZpZWxkcyBjb250cm9sc1wiLCB0aGlzLmZvcm0pO1xuXG4gIH1cblxuXG4gIGZvcm1CdWlsZChkYXRhKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG4gICAgdGhpcy5maWVsZHMgPSBbXTtcblxuICAgIHRoaXMuZmllbGRzLnNsaWNlKHRoaXMuZmllbGRzLmxlbmd0aCwgMCk7XG4gICAgZm9ybURhdGEgPSBkYXRhO1xuICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIGZvciAobGV0IGYgb2YgZm9ybURhdGEpIHtcbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImYudHlwZVwiLCBmWydmaWVsZCddKTtcbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUNvbnRyb2woZlsndmFsdWUnXSB8fCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvcHRzID0ge307XG4gICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4gICAgdGhpcy5maWVsZHMgPSBmb3JtRGF0YTtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgZGF0YTogZm9ybURhdGFcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGRzLS0tLS0tLVwiLCB0aGlzLmZpZWxkcyk7XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuXG5cbiAgICAvLyB0aGlzLmZpZWxkcyA9IGRhdGE7XG5cbiAgICAvLyBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGRzXCIsIGRhdGEpO1xuICAgIC8vIGZvciAobGV0IGYgb2YgZGF0YSkge1xuXG5cbiAgICAvLyAgIGlmIChmLnR5cGUgIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgLy8gICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woZi52YWx1ZSB8fCAnJylcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGxldCBvcHRzID0ge307XG4gICAgLy8gICAgIGZvciAobGV0IG9wdCBvZiBmLm9wdGlvbnMpIHtcblxuICAgIC8vICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LnZhbHVlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgfVxuXG4gIG9uU3VibWl0KHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLCB0aGlzLmZpZWxkcyk7XG5cbiAgICAvLyB0aGlzLnF1ZXN0aW9uTGlzdC5lbWl0KHRoaXMuZmllbGRzKTtcblxuICAgIGxldCBvYmogPSB7XG4gICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICBkYXRhOiB0aGlzLmZpZWxkc1xuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG4gIH1cblxuXG4gIC8vIChldmVudCkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdFbGVtZW50IHdhcyBkcmFnZ2VkJywgZXZlbnQpO1xuICAvLyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICB9XG4gIG9uRmllbGRVcGRhdGUoJGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJldmVudERhdGEgc3Nzc3Nzcy0tLS0tLVwiLCAkZXZlbnQuZGF0YSk7XG5cbiAgICBsZXQgZXZlbnRPYmogPSAkZXZlbnRcbiAgICBsZXQgdHJuYXNmb3JtRGF0YSA9IHt9O1xuICAgIGlmICgkZXZlbnQuYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICB0aGlzLm9uRHJvcCgkZXZlbnQuZGF0YSwgXCJjb3B5XCIpO1xuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImRlbGV0ZVwiKSB7XG4gICAgICB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgICBhY3Rpb246ICdkZWxldGUnLFxuICAgICAgICBkYXRhOiAkZXZlbnRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCRldmVudC5hY3Rpb24gPT0gXCJjaGlsZERyb3BlZFwiKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpZWxkcycsIHRoaXMuZmllbGRzKTtcblxuICAgICAgdmFyIGZpbmFsID0gdGhpcy5maWVsZHMuZmlsdGVyKFxuICAgICAgICBpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5maWVsZCA9PT0gZXZlbnRPYmouZGF0YS5tdXRpU2VsZWN0LmZpZWxkKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnRPYmouZGF0YS5tdXRpU2VsZWN0LmZpZWxkLCc9PT09PT0gdGhpcy5maWVsZHMgID09PT09JyxpdGVtKTtcblxuICAgICAgICAgICAgLy8gaWYoaXRlbS5jaGlsZCl7XG4gICAgICAgICAgICAgICBsZXQgb2JqID0gdGhpcy5nZXRUb29sT2JqKCRldmVudC5kYXRhLnJlc3BvbnNlVHlwZSwgaXRlbS5jaGlsZC5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBpdGVtLmNoaWxkLnB1c2gob2JqKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBmaW5hbC5wdXNoKG9iaik7XG5cblxuICAgICAgLy8gdGhpcy5maWVsZHNcblxuICAgICAgY29uc29sZS5sb2coJ2ZpbmFsIHJlc3VsdCcsIGZpbmFsKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJtYWluIG9ialwiLCBvYmopO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRybmFzZm9ybURhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIGRhdGE6IEpTT04ucGFyc2UoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuICB9XG59XG4iXX0=