/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import  { } from './dynamic-form-builder.service'
import { Observable } from 'rxjs';
export class DynamicFormBuilderComponent {
    /**
     * @param {?} http
     * @param {?} _formBuilder
     * @param {?} fb
     */
    constructor(http, _formBuilder, fb) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.fb = fb;
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
    ngOnInit() {
        this.eventsSubscription = this.events.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.log("calling from parent with data", data);
            if (data) {
                /** @type {?} */
                let dt = data;
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
        // console.log("eventData ------", $event);
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
          <div class="card-header">ToolBox</div>
          <div class="card-body">
            <!-- <dynamic-form-builder [fields]="getFields()"></dynamic-form-builder> -->
      
            <div *ngFor="let item of jsonData">
              <div [dndDraggable]="item"  class="col-sm-12 element"  >{{ item.responseType }}</div>
              <!-- <div class="col-sm-12 element" (click)="addFormElement(item.responseType)" >Number</div> -->
            </div>
            <!-- <div class="col-sm-12 element" (click)="addFormElement('input')" >Input</div>
            <div class="col-sm-12 element" (click)="addFormElement('number')" >Number</div> -->
          </div>
        </div>
      </div>

    <div class="col-sm-8 noPadding">
    <mat-tab-group>
    <mat-tab label="Page 1"> 
    <div class="card">
          <div dndDropzone class="card-body" (dndDrop)="onDrop($event)">
              <form (ngSubmit)="onSubmit(this.form.value)" [formGroup]="form" class="form-horizontal">
            <dynamic-form-builder [fields]="getFields()" [form]="form"  (onFieldUpdate)="onFieldUpdate($event)" ></dynamic-form-builder>
            </form>
          </div>
        </div>
    </mat-tab>
    <mat-tab label="Page 2"> 
    <div class="card">
          <div dndDropzone class="card-body" (dndDrop)="onDrop($event)">
              <form (ngSubmit)="onSubmit(this.form.value)" [formGroup]="form" class="form-horizontal">
            <dynamic-form-builder [fields]="getFields()" [form]="form"  (onFieldUpdate)="onFieldUpdate($event)" ></dynamic-form-builder>
            </form>
          </div>
        </div>
     </mat-tab>
    <mat-tab label="Page 3">
    <div class="card">
          <div dndDropzone class="card-body" (dndDrop)="onDrop($event)">
              <form (ngSubmit)="onSubmit(this.form.value)" [formGroup]="form" class="form-horizontal">
            <dynamic-form-builder [fields]="getFields()" [form]="form"  (onFieldUpdate)="onFieldUpdate($event)" ></dynamic-form-builder>
            </form>
          </div>
        </div>
     </mat-tab>
    </mat-tab-group>
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
    { type: FormBuilder }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7O0FBTS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUF3RmxDLE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQWV0QyxZQUFvQixJQUFnQixFQUFVLFlBQXlCLEVBQVUsRUFBZTtRQUE1RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhOztRQUx0RixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUd4Qiw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9CLEtBQUs7UUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENB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QU0sQ0FBQzthQUN6QixDQUFBO1NBQ0Y7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUE1Y0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBaUZDO2dCQUNYLFNBQVMsRUFBRSxFQUFFO2FBQ2Q7Ozs7WUE3RlEsVUFBVTtZQURjLFdBQVc7WUFBWCxXQUFXOzs7cUJBdUd6QyxLQUFLOzhCQUVMLE1BQU07Ozs7SUFUUCwyQ0FBdUI7O0lBQ3ZCLGlEQUFnQjs7SUFDaEIsK0NBQWM7O0lBQ2QsK0NBQWM7O0lBQ2QsaURBQWdCOztJQUdoQiw2Q0FBaUM7O0lBRWpDLHNEQUErQzs7SUFDL0MseURBQXVCOztJQUV2Qiw2Q0FBMEI7Ozs7O0lBRWQsMkNBQXdCOzs7OztJQUFFLG1EQUFpQzs7Ozs7SUFBRSx5Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IERuZERyb3BFdmVudCB9IGZyb20gJ25neC1kcmFnLWRyb3AnXG5cbi8vIGltcG9ydCAgeyB9IGZyb20gJy4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZHluYW1pYy1mb3JtLWJ1aWxkZXInLFxuICB0ZW1wbGF0ZTogYDxzdHlsZT5cbiAgcCB7XG4gICAgICBmb250LWZhbWlseTogTGF0bztcbiAgICB9XG4gICAgLm5vUGFkZGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLm1hcmdpbi01IHtcbiAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICB9XG4gICAgLmVsZW1lbnQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBib3gtc2hhZG93OiAwIDBweCAwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4yMyk7XG4gIH1cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjZTdlNztcbiAgICB9XG4gICAgLmN1cnNvci1wbnRyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICBcbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00IG5vUGFkZGluZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlRvb2xCb3g8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8IS0tIDxkeW5hbWljLWZvcm0tYnVpbGRlciBbZmllbGRzXT1cImdldEZpZWxkcygpXCI+PC9keW5hbWljLWZvcm0tYnVpbGRlcj4gLS0+XG4gICAgICBcbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YganNvbkRhdGFcIj5cbiAgICAgICAgICAgICAgPGRpdiBbZG5kRHJhZ2dhYmxlXT1cIml0ZW1cIiAgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiICA+e3sgaXRlbS5yZXNwb25zZVR5cGUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAoY2xpY2spPVwiYWRkRm9ybUVsZW1lbnQoaXRlbS5yZXNwb25zZVR5cGUpXCIgPk51bWJlcjwvZGl2PiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGVsZW1lbnRcIiAoY2xpY2spPVwiYWRkRm9ybUVsZW1lbnQoJ2lucHV0JylcIiA+SW5wdXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudCgnbnVtYmVyJylcIiA+TnVtYmVyPC9kaXY+IC0tPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS04IG5vUGFkZGluZ1wiPlxuICAgIDxtYXQtdGFiLWdyb3VwPlxuICAgIDxtYXQtdGFiIGxhYmVsPVwiUGFnZSAxXCI+IFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBkbmREcm9wem9uZSBjbGFzcz1cImNhcmQtYm9keVwiIChkbmREcm9wKT1cIm9uRHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCh0aGlzLmZvcm0udmFsdWUpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxkeW5hbWljLWZvcm0tYnVpbGRlciBbZmllbGRzXT1cImdldEZpZWxkcygpXCIgW2Zvcm1dPVwiZm9ybVwiICAob25GaWVsZFVwZGF0ZSk9XCJvbkZpZWxkVXBkYXRlKCRldmVudClcIiA+PC9keW5hbWljLWZvcm0tYnVpbGRlcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tYXQtdGFiPlxuICAgIDxtYXQtdGFiIGxhYmVsPVwiUGFnZSAyXCI+IFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBkbmREcm9wem9uZSBjbGFzcz1cImNhcmQtYm9keVwiIChkbmREcm9wKT1cIm9uRHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCh0aGlzLmZvcm0udmFsdWUpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxkeW5hbWljLWZvcm0tYnVpbGRlciBbZmllbGRzXT1cImdldEZpZWxkcygpXCIgW2Zvcm1dPVwiZm9ybVwiICAob25GaWVsZFVwZGF0ZSk9XCJvbkZpZWxkVXBkYXRlKCRldmVudClcIiA+PC9keW5hbWljLWZvcm0tYnVpbGRlcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIDwvbWF0LXRhYj5cbiAgICA8bWF0LXRhYiBsYWJlbD1cIlBhZ2UgM1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBkbmREcm9wem9uZSBjbGFzcz1cImNhcmQtYm9keVwiIChkbmREcm9wKT1cIm9uRHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCh0aGlzLmZvcm0udmFsdWUpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxkeW5hbWljLWZvcm0tYnVpbGRlciBbZmllbGRzXT1cImdldEZpZWxkcygpXCIgW2Zvcm1dPVwiZm9ybVwiICAob25GaWVsZFVwZGF0ZSk9XCJvbkZpZWxkVXBkYXRlKCRldmVudClcIiA+PC9keW5hbWljLWZvcm0tYnVpbGRlcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIDwvbWF0LXRhYj5cbiAgICA8L21hdC10YWItZ3JvdXA+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIDwvZGl2PmAsXG4gIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgdW5zdWJjcmliZTogYW55O1xuICBqc29uRGF0YTogYW55O1xuICBmb3JtRGF0YTogYW55O1xuICBwYWdlTnVtYmVyOiBhbnk7XG5cbiAgLy8gQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgZXZlbnRzOiBPYnNlcnZhYmxlPGFueT47XG4gIC8vIEBPdXRwdXQoKSBxdWVzdGlvbkxpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBxdWVzdGlvblRyaWdnZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV2ZW50c1N1YnNjcmlwdGlvbjogYW55XG5cbiAgcHVibGljIGZpZWxkczogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICAvLyB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAvLyAgIGZpZWxkczogdGhpcy5mYi5hcnJheShbXSksXG4gICAgLy8gfSlcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGZpZWxkczogbmV3IEZvcm1Db250cm9sKEpTT04uc3RyaW5naWZ5KHRoaXMuZmllbGRzKSlcbiAgICB9KVxuXG4gICAgdGhpcy51bnN1YmNyaWJlID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2codXBkYXRlKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzID0gSlNPTi5wYXJzZSh1cGRhdGUuZmllbGRzKTtcbiAgICB9KTtcbiAgfVxuXG5cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZXZlbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudHMuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjYWxsaW5nIGZyb20gcGFyZW50IHdpdGggZGF0YVwiLCBkYXRhKTtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGxldCBkdCA9IGRhdGE7XG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkKGR0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgICAgIGRhdGE6IHRoaXMuZmllbGRzXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ0byBnZXQgYWxsXCIsIHRoaXMuZmllbGRzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3JtRGF0YSA9IFtdO1xuICAgIHRoaXMuanNvbkRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwidGV4dFwiLFxuXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwicmFkaW9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwiZHJvcGRvd25cIlxuICAgICAgfSx7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6XCJkYXRlXCJcbiAgICAgIH0se1xuICAgICAgICBcInJlc3BvbnNlVHlwZVwiOlwic2xpZGVyXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbiAgb25VcGxvYWQoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG5cbiAgZ2V0RmllbGRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkcztcbiAgfVxuXG4gIG5nRGlzdHJveSgpIHtcbiAgICB0aGlzLnVuc3ViY3JpYmUoKTtcbiAgfVxuICBvbkRyb3AoZWxlLCBhY3Rpb24gPSBcIlwiKSB7XG4gICAgY29uc29sZS5sb2coXCJkcm9wIGVsZVwiLGVsZSk7XG4gICAgaWYoZWxlLmRhdGEpe1xuICAgICAgZWxlID0gZWxlLmRhdGEucmVzcG9uc2VUeXBlXG4gICAgfVxuICAgIGxldCBsZW4gPSB0aGlzLmZpZWxkcy5sZW5ndGggKyAxO1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAoYWN0aW9uID09IFwiY29weVwiKSB7XG4gICAgICBsZXQgY29weU9iaiA9IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBsZW4sXG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogZWxlLnR5cGUsXG4gICAgICAgIFwibGFiZWxcIjogZWxlLmxhYmVsLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IGVsZS5wbGFjZWhvbGRlcixcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBlbGUudmFsaWRhdGlvbnMsXG4gICAgICAgIFwib3B0aW9uc1wiOiBlbGUub3B0aW9ucyxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOmVsZS5kZXNjcmlwdGlvblxuICAgICAgfVxuICAgICAgb2JqID0gY29weU9iajtcblxuICAgIH0gZWxzZSB7XG5cblxuXG5cbiAgICAgIGlmIChlbGUgPT0gJ3RleHQnKSB7XG4gICAgICAgIG9iaiA9IHtcbiAgICAgICAgICBcInBvc2l0aW9uXCI6IGxlbixcbiAgICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGVudGVyIHlvdXIgcXVlc3Rpb24gaGVyZVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlwiLFxuICAgICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxlID09ICdudW1iZXInKSB7XG4gICAgICAgIG9iaiA9IHtcbiAgICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgICAgICBcImxhYmVsXCI6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgZW50ZXIgeW91ciBxdWVzdGlvbiBoZXJlXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwiXCIsXG4gICAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbGUgPT0gJ3JhZGlvJykge1xuICAgICAgICBvYmogPSB7XG4gICAgICAgICAgZmllbGQ6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcIlwiLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnTGFiZWwgMScgfSxcbiAgICAgICAgICAgIHsga2V5OiAnb3B0aW9uMicsIGxhYmVsOiAnTGFiZWwgMScgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbGUgPT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgIG9iaiA9IHtcbiAgICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246XCJcIixcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ29wdGlvbiAxJyB9LFxuICAgICAgICAgICAgeyBrZXk6ICdvcHRpb24yJywgbGFiZWw6ICdvcHRpb24gMicgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbGUgPT0gXCJkcm9wZG93blwiKSB7XG4gICAgICAgIG9iaiA9IHtcbiAgICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICAgIHR5cGU6ICdkcm9wZG93bicsXG4gICAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICAgIHZhbHVlOiAnb3B0aW9uMScsXG4gICAgICAgICAgZGVzY3JpcHRpb246XCJcIixcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ09wdGlvbiAxJyB9LFxuICAgICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdPcHRpb24gMicgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZWxlID09IFwiZGF0ZVwiKSB7XG4gICAgICAgIG9iaiA9IHtcbiAgICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246XCJcIixcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJtYXhEYXRlXCI6XCJcIixcbiAgICAgICAgICAgIFwibWluRGF0ZVwiOlwiXCIsXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgIFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYgKGVsZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICAgIG9iaiA9IHtcbiAgICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcIlwiLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtaW5cIjogXCJcIixcbiAgICAgICAgICAgIFwibWF4XCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1heERhdGVcIjpcIlwiLFxuICAgICAgICAgICAgXCJtaW5EYXRlXCI6XCJcIixcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cblxuICAgIGxldCBlbGVtID0gdGhpcy5maWVsZHM7XG4gICAgbGV0IHRybmFzZm9ybURhdGEgPSB7XG4gICAgICBhY3Rpb246ICdhZGQnLFxuICAgICAgZGF0YTogb2JqXG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwidHJhbnNmXCIsIHRybmFzZm9ybURhdGEpO1xuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQodHJuYXNmb3JtRGF0YSk7XG5cbiAgICB0aGlzLmZvcm1EYXRhLnB1c2gob2JqKTtcbiAgICBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tXCIsIG9iaik7XG4gICAgZm9yIChsZXQgZiBvZiB0aGlzLmZvcm1EYXRhKSB7XG5cblxuICAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJmLnR5cGVcIiwgZlsnZmllbGQnXSk7XG4gICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Db250cm9sKGZbJ3ZhbHVlJ10gfHwgJycpXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxldCBvcHRzID0ge307XG4gICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcblxuICAgICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgY3JlZHMgPSB0aGlzLmZvcm0uY29udHJvbHMuZmllbGRzIGFzIEZvcm1BcnJheTtcbiAgICAgIC8vIGNyZWRzLnB1c2godGhpcy5mYi5ncm91cChmaWVsZHNDdHJscykpO1xuXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGRzQ3RybHNcIixmaWVsZHNDdHJscyk7XG5cbiAgICAgIC8vIHRoaXMuZm9ybURhdGEgPSAgdGhpcy5maWVsZHM7XG5cbiAgICB9XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gICAgLy8gdGhpcy5maWVsZHNcbiAgICAvLyB0aGlzLmZvcm1CdWlsZCgpO1xuICAgIHRoaXMuZmllbGRzLnB1c2gob2JqKTtcbiAgICBjb25zb2xlLmxvZyhcImZpZWxkcyBjb250cm9sc1wiLCB0aGlzLmZvcm0pO1xuXG4gIH1cblxuXG4gIGZvcm1CdWlsZChkYXRhKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG4gICAgdGhpcy5maWVsZHMgPSBbXTtcblxuICAgIHRoaXMuZmllbGRzLnNsaWNlKHRoaXMuZmllbGRzLmxlbmd0aCwgMCk7XG4gICAgZm9ybURhdGEgPSBkYXRhO1xuICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgIGZvciAobGV0IGYgb2YgZm9ybURhdGEpIHtcbiAgICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImYudHlwZVwiLCBmWydmaWVsZCddKTtcbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUNvbnRyb2woZlsndmFsdWUnXSB8fCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvcHRzID0ge307XG4gICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcbiAgICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4gICAgdGhpcy5maWVsZHMgPSBmb3JtRGF0YTtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgYWN0aW9uOiBcImFsbFwiLFxuICAgICAgZGF0YTogZm9ybURhdGFcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZmllbGRzLS0tLS0tLVwiLCB0aGlzLmZpZWxkcyk7XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdChvYmopO1xuXG5cbiAgICAvLyB0aGlzLmZpZWxkcyA9IGRhdGE7XG5cbiAgICAvLyBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGRzXCIsIGRhdGEpO1xuICAgIC8vIGZvciAobGV0IGYgb2YgZGF0YSkge1xuXG5cbiAgICAvLyAgIGlmIChmLnR5cGUgIT0gJ2NoZWNrYm94Jykge1xuXG4gICAgLy8gICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woZi52YWx1ZSB8fCAnJylcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGxldCBvcHRzID0ge307XG4gICAgLy8gICAgIGZvciAobGV0IG9wdCBvZiBmLm9wdGlvbnMpIHtcblxuICAgIC8vICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LnZhbHVlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgfVxuXG4gIG9uU3VibWl0KHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLCB0aGlzLmZpZWxkcyk7XG5cbiAgICAvLyB0aGlzLnF1ZXN0aW9uTGlzdC5lbWl0KHRoaXMuZmllbGRzKTtcblxuICAgIGxldCBvYmogPSB7XG4gICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICBkYXRhOiB0aGlzLmZpZWxkc1xuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG4gIH1cblxuXG4gIC8vIChldmVudCkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdFbGVtZW50IHdhcyBkcmFnZ2VkJywgZXZlbnQpO1xuICAvLyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICB9XG4gIG9uRmllbGRVcGRhdGUoJGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJldmVudERhdGEgLS0tLS0tXCIsICRldmVudCk7XG4gICAgbGV0IHRybmFzZm9ybURhdGEgPSB7fTtcbiAgICBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImNvcHlcIikge1xuICAgICAgdGhpcy5vbkRyb3AoJGV2ZW50LmRhdGEsIFwiY29weVwiKTtcbiAgICB9IGVsc2VcbiAgICAgIGlmICgkZXZlbnQuYWN0aW9uID09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgdHJuYXNmb3JtRGF0YSA9IHtcbiAgICAgICAgICBhY3Rpb246ICdkZWxldGUnLFxuICAgICAgICAgIGRhdGE6ICRldmVudFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgICAgZGF0YTogSlNPTi5wYXJzZSgkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KHRybmFzZm9ybURhdGEpO1xuICB9XG59XG4iXX0=