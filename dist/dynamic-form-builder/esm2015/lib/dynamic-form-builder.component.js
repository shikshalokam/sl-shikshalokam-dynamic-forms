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
            },
            {
                "responseType": "multiselect"
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
        else if (ele == 'multiselect') {
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
                "type": "multiselect",
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
            /** @type {?} */
            let obj = this.getToolObj($event.data.responseType, this.fields.length + 1);
            console.log('this.fields', this.fields);
            /** @type {?} */
            const final = this.fields.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.field === eventObj.data.mutiSelect.field) {
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
            console.log("main obj", obj);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7O0FBTS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUF3RmxDLE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQWV0QyxZQUFvQixJQUFnQixFQUFVLFlBQXlCLEVBQVUsRUFBZTtRQUE1RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhOztRQUx0RixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUd4Qiw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9CLEtBQUs7UUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENB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QUFXOzs7cUJBdUd6QyxLQUFLOzhCQUVMLE1BQU07Ozs7SUFUUCwyQ0FBdUI7O0lBQ3ZCLGlEQUFnQjs7SUFDaEIsK0NBQWM7O0lBQ2QsK0NBQWM7O0lBQ2QsaURBQWdCOztJQUdoQiw2Q0FBaUM7O0lBRWpDLHNEQUErQzs7SUFDL0MseURBQXVCOztJQUV2Qiw2Q0FBMEI7Ozs7O0lBRWQsMkNBQXdCOzs7OztJQUFFLG1EQUFpQzs7Ozs7SUFBRSx5Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IERuZERyb3BFdmVudCB9IGZyb20gJ25neC1kcmFnLWRyb3AnXG5cbi8vIGltcG9ydCAgeyB9IGZyb20gJy4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZHluYW1pYy1mb3JtLWJ1aWxkZXInLFxuICB0ZW1wbGF0ZTogYDxzdHlsZT5cbiAgcCB7XG4gICAgICBmb250LWZhbWlseTogTGF0bztcbiAgICB9XG4gICAgLm5vUGFkZGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLm1hcmdpbi01IHtcbiAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICB9XG4gICAgLmVsZW1lbnQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcbiAgfVxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlN2U3O1xuICAgIH1cbiAgICAuY3Vyc29yLXBudHIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIFxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTQgbm9QYWRkaW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+VG9vbEJveDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDwhLS0gPGR5bmFtaWMtZm9ybS1idWlsZGVyIFtmaWVsZHNdPVwiZ2V0RmllbGRzKClcIj48L2R5bmFtaWMtZm9ybS1idWlsZGVyPiAtLT5cbiAgICAgIFxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBqc29uRGF0YVwiPlxuICAgICAgICAgICAgICA8ZGl2IFtkbmREcmFnZ2FibGVdPVwiaXRlbVwiICBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgID57eyBpdGVtLnJlc3BvbnNlVHlwZSB9fTwvZGl2PlxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudChpdGVtLnJlc3BvbnNlVHlwZSlcIiA+TnVtYmVyPC9kaXY+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZWxlbWVudFwiIChjbGljayk9XCJhZGRGb3JtRWxlbWVudCgnaW5wdXQnKVwiID5JbnB1dDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBlbGVtZW50XCIgKGNsaWNrKT1cImFkZEZvcm1FbGVtZW50KCdudW1iZXInKVwiID5OdW1iZXI8L2Rpdj4gLS0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTggbm9QYWRkaW5nXCI+XG4gICAgPG1hdC10YWItZ3JvdXA+XG4gICAgPG1hdC10YWIgbGFiZWw9XCJQYWdlIDFcIj4gXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGRuZERyb3B6b25lIGNsYXNzPVwiY2FyZC1ib2R5XCIgKGRuZERyb3ApPVwib25Ecm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KHRoaXMuZm9ybS52YWx1ZSlcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPGR5bmFtaWMtZm9ybS1idWlsZGVyIFtmaWVsZHNdPVwiZ2V0RmllbGRzKClcIiBbZm9ybV09XCJmb3JtXCIgIChvbkZpZWxkVXBkYXRlKT1cIm9uRmllbGRVcGRhdGUoJGV2ZW50KVwiID48L2R5bmFtaWMtZm9ybS1idWlsZGVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L21hdC10YWI+XG4gICAgPG1hdC10YWIgbGFiZWw9XCJQYWdlIDJcIj4gXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGRuZERyb3B6b25lIGNsYXNzPVwiY2FyZC1ib2R5XCIgKGRuZERyb3ApPVwib25Ecm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KHRoaXMuZm9ybS52YWx1ZSlcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPGR5bmFtaWMtZm9ybS1idWlsZGVyIFtmaWVsZHNdPVwiZ2V0RmllbGRzKClcIiBbZm9ybV09XCJmb3JtXCIgIChvbkZpZWxkVXBkYXRlKT1cIm9uRmllbGRVcGRhdGUoJGV2ZW50KVwiID48L2R5bmFtaWMtZm9ybS1idWlsZGVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgPC9tYXQtdGFiPlxuICAgIDxtYXQtdGFiIGxhYmVsPVwiUGFnZSAzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGRuZERyb3B6b25lIGNsYXNzPVwiY2FyZC1ib2R5XCIgKGRuZERyb3ApPVwib25Ecm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KHRoaXMuZm9ybS52YWx1ZSlcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPGR5bmFtaWMtZm9ybS1idWlsZGVyIFtmaWVsZHNdPVwiZ2V0RmllbGRzKClcIiBbZm9ybV09XCJmb3JtXCIgIChvbkZpZWxkVXBkYXRlKT1cIm9uRmllbGRVcGRhdGUoJGV2ZW50KVwiID48L2R5bmFtaWMtZm9ybS1idWlsZGVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgPC9tYXQtdGFiPlxuICAgIDwvbWF0LXRhYi1ncm91cD5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICB1bnN1YmNyaWJlOiBhbnk7XG4gIGpzb25EYXRhOiBhbnk7XG4gIGZvcm1EYXRhOiBhbnk7XG4gIHBhZ2VOdW1iZXI6IGFueTtcblxuICAvLyBASW5wdXQoKSBkYXRhO1xuICBASW5wdXQoKSBldmVudHM6IE9ic2VydmFibGU8YW55PjtcbiAgLy8gQE91dHB1dCgpIHF1ZXN0aW9uTGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHF1ZXN0aW9uVHJpZ2dlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXZlbnRzU3Vic2NyaXB0aW9uOiBhbnlcblxuICBwdWJsaWMgZmllbGRzOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICAgIC8vIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIC8vICAgZmllbGRzOiB0aGlzLmZiLmFycmF5KFtdKSxcbiAgICAvLyB9KVxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgZmllbGRzOiBuZXcgRm9ybUNvbnRyb2woSlNPTi5zdHJpbmdpZnkodGhpcy5maWVsZHMpKVxuICAgIH0pXG5cbiAgICB0aGlzLnVuc3ViY3JpYmUgPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodXBkYXRlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh1cGRhdGUpO1xuICAgICAgLy8gdGhpcy5maWVsZHMgPSBKU09OLnBhcnNlKHVwZGF0ZS5maWVsZHMpO1xuICAgIH0pO1xuICB9XG5cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5ldmVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxpbmcgZnJvbSBwYXJlbnQgd2l0aCBkYXRhXCIsIGRhdGEpO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgbGV0IGR0ID0gZGF0YTtcbiAgICAgICAgdGhpcy5mb3JtQnVpbGQoZHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICAgICAgZGF0YTogdGhpcy5maWVsZHNcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInRvIGdldCBhbGxcIiwgdGhpcy5maWVsZHMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmZvcm1EYXRhID0gW107XG4gICAgdGhpcy5qc29uRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJ0ZXh0XCIsXG5cbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIH0sIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJkcm9wZG93blwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwiZGF0ZVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwic2xpZGVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwibXVsdGlzZWxlY3RcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuICBvblVwbG9hZChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cblxuICBnZXRGaWVsZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRzO1xuICB9XG5cbiAgbmdEaXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJjcmliZSgpO1xuICB9XG5cblxuICBnZXRUb29sT2JqKGVsZSwgbGVuKSB7XG5cbiAgICBsZXQgb2JqID0ge1xuXG4gICAgfVxuICAgIGlmIChlbGUgPT0gJ3RleHQnKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICBcImxhYmVsXCI6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxlYXNlIGVudGVyIHlvdXIgcXVlc3Rpb24gaGVyZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09ICdudW1iZXInKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgICAgXCJsYWJlbFwiOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBlbnRlciB5b3VyIHF1ZXN0aW9uIGhlcmVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSAncmFkaW8nKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdMYWJlbCAxJyB9LFxuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMicsIGxhYmVsOiAnTGFiZWwgMScgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbGUgPT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgbmFtZTogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRpb25zXCI6IHtcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGtleTogJ29wdGlvbjEnLCBsYWJlbDogJ29wdGlvbiAxJyB9LFxuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMicsIGxhYmVsOiAnb3B0aW9uIDInIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09IFwiZHJvcGRvd25cIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiAnZHJvcGRvd24nLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICB2YWx1ZTogJ29wdGlvbjEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pbkxlbmdodFwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4TGVuZ3RoXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsga2V5OiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDEnIH0sXG4gICAgICAgICAgeyBrZXk6ICdvcHRpb24xJywgbGFiZWw6ICdPcHRpb24gMicgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZSA9PSBcImRhdGVcIikge1xuICAgICAgb2JqID0ge1xuICAgICAgICBmaWVsZDogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIG5hbWU6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBsYWJlbDogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgXCJ2YWxpZGF0aW9uc1wiOiB7XG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhMZW5ndGhcIjogXCJcIixcbiAgICAgICAgICBcIm1heERhdGVcIjogXCJcIixcbiAgICAgICAgICBcIm1pbkRhdGVcIjogXCJcIixcblxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiBbXG5cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlID09ICdtdWx0aXNlbGVjdCcpIHtcbiAgICAgIGlmIChlbGUgPT0gJ2NoaWxkRHJvcGVkJykge1xuICAgICAgICBsZXQgY2hpbGRkYXRhID0ge1xuICAgICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuICAgICAgICAgIFwidHlwZVwiOiBlbGUudHlwZSxcbiAgICAgICAgICBcImxhYmVsXCI6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICAgIFwiY2hpbGRcIjogW10sXG4gICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBhZGQgQ2hpbGQncyBoZXJlXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwibWluTGVuZ2h0XCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZmluYWxjaGlsZCA9IFtdO1xuXG4gICAgICBmaW5hbGNoaWxkLnB1c2goKVxuXG5cbiAgICAgIG9iaiA9IHtcbiAgICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIm11bHRpc2VsZWN0XCIsXG4gICAgICAgIFwibGFiZWxcIjogbGVuICsgXCIuIHF1ZXN0aW9uXCIsXG4gICAgICAgIFwiY2hpbGRcIjogW10sXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQbGVhc2UgYWRkIENoaWxkJ3MgaGVyZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2UsXG4gICAgICAgICAgXCJtaW5MZW5naHRcIjogXCJcIixcbiAgICAgICAgICBcIm1heExlbmd0aFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIGZpZWxkOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4gICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICBuYW1lOiBsZW4gKyBcIi4gcXVlc3Rpb25cIixcbiAgICAgICAgbGFiZWw6IGxlbiArIFwiLiBxdWVzdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjoge1xuICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm1pblwiOiBcIlwiLFxuICAgICAgICAgIFwibWF4XCI6IFwiXCIsXG4gICAgICAgICAgXCJtYXhEYXRlXCI6IFwiXCIsXG4gICAgICAgICAgXCJtaW5EYXRlXCI6IFwiXCIsXG5cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogW1xuXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgb25Ecm9wKGVsZSwgYWN0aW9uID0gXCJcIikge1xuICAgIGNvbnNvbGUubG9nKFwiZHJvcCBlbGVcIiwgZWxlKTtcbiAgICBpZiAoZWxlLmRhdGEpIHtcbiAgICAgIGVsZSA9IGVsZS5kYXRhLnJlc3BvbnNlVHlwZVxuICAgIH1cbiAgICBsZXQgbGVuID0gdGhpcy5maWVsZHMubGVuZ3RoICsgMTtcbiAgICB2YXIgb2JqID0ge307XG4gICAgaWYgKGFjdGlvbiA9PSBcImNvcHlcIikge1xuICAgICAgbGV0IGNvcHlPYmogPSB7XG4gICAgICAgIFwicG9zaXRpb25cIjogbGVuLFxuICAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IGVsZS50eXBlLFxuICAgICAgICBcImxhYmVsXCI6IGVsZS5sYWJlbCxcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBlbGUucGxhY2Vob2xkZXIsXG4gICAgICAgIFwidmFsaWRhdGlvbnNcIjogZWxlLnZhbGlkYXRpb25zLFxuICAgICAgICBcIm9wdGlvbnNcIjogZWxlLm9wdGlvbnMsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogZWxlLmRlc2NyaXB0aW9uXG4gICAgICB9XG4gICAgICBvYmogPSBjb3B5T2JqO1xuXG4gICAgfSBlbHNlIHtcblxuXG4gICAgICBvYmogPSB0aGlzLmdldFRvb2xPYmooZWxlLCBsZW4pO1xuXG5cblxuICAgIH1cblxuXG4gICAgbGV0IGVsZW0gPSB0aGlzLmZpZWxkcztcbiAgICBsZXQgdHJuYXNmb3JtRGF0YSA9IHtcbiAgICAgIGFjdGlvbjogJ2FkZCcsXG4gICAgICBkYXRhOiBvYmpcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJ0cmFuc2ZcIiwgdHJuYXNmb3JtRGF0YSk7XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdCh0cm5hc2Zvcm1EYXRhKTtcblxuICAgIHRoaXMuZm9ybURhdGEucHVzaChvYmopO1xuICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuXG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gICAgLy8gY29uc29sZS5sb2coXCItLS0tLS1cIiwgb2JqKTtcbiAgICBmb3IgKGxldCBmIG9mIHRoaXMuZm9ybURhdGEpIHtcblxuXG4gICAgICBpZiAoZlsndHlwZSddICE9ICdjaGVja2JveCcpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImYudHlwZVwiLCBmWydmaWVsZCddKTtcbiAgICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUNvbnRyb2woZlsndmFsdWUnXSB8fCAnJylcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgbGV0IG9wdHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgb3B0IG9mIGZbJ29wdGlvbnMnXSkge1xuXG4gICAgICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQubGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCBjcmVkcyA9IHRoaXMuZm9ybS5jb250cm9scy5maWVsZHMgYXMgRm9ybUFycmF5O1xuICAgICAgLy8gY3JlZHMucHVzaCh0aGlzLmZiLmdyb3VwKGZpZWxkc0N0cmxzKSk7XG5cblxuICAgICAgLy8gY29uc29sZS5sb2coXCJmaWVsZHNDdHJsc1wiLGZpZWxkc0N0cmxzKTtcblxuICAgICAgLy8gdGhpcy5mb3JtRGF0YSA9ICB0aGlzLmZpZWxkcztcblxuICAgIH1cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICAvLyB0aGlzLmZpZWxkc1xuICAgIC8vIHRoaXMuZm9ybUJ1aWxkKCk7XG4gICAgdGhpcy5maWVsZHMucHVzaChvYmopO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGRzIGNvbnRyb2xzXCIsIHRoaXMuZm9ybSk7XG5cbiAgfVxuXG5cbiAgZm9ybUJ1aWxkKGRhdGEpIHtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcbiAgICB0aGlzLmZpZWxkcyA9IFtdO1xuXG4gICAgdGhpcy5maWVsZHMuc2xpY2UodGhpcy5maWVsZHMubGVuZ3RoLCAwKTtcbiAgICBmb3JtRGF0YSA9IGRhdGE7XG4gICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gICAgZm9yIChsZXQgZiBvZiBmb3JtRGF0YSkge1xuICAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGZbJ2ZpZWxkJ10pO1xuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9wdHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgb3B0IG9mIGZbJ29wdGlvbnMnXSkge1xuICAgICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG5cbiAgICB0aGlzLmZpZWxkcyA9IGZvcm1EYXRhO1xuICAgIGxldCBvYmogPSB7XG4gICAgICBhY3Rpb246IFwiYWxsXCIsXG4gICAgICBkYXRhOiBmb3JtRGF0YVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5maWVsZHMtLS0tLS0tXCIsIHRoaXMuZmllbGRzKTtcbiAgICB0aGlzLnF1ZXN0aW9uVHJpZ2dlci5lbWl0KG9iaik7XG5cblxuICAgIC8vIHRoaXMuZmllbGRzID0gZGF0YTtcblxuICAgIC8vIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZHNcIiwgZGF0YSk7XG4gICAgLy8gZm9yIChsZXQgZiBvZiBkYXRhKSB7XG5cblxuICAgIC8vICAgaWYgKGYudHlwZSAhPSAnY2hlY2tib3gnKSB7XG5cbiAgICAvLyAgICAgZmllbGRzQ3RybHNbZi5uYW1lXSA9IG5ldyBGb3JtQ29udHJvbChmLnZhbHVlIHx8ICcnKVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgbGV0IG9wdHMgPSB7fTtcbiAgICAvLyAgICAgZm9yIChsZXQgb3B0IG9mIGYub3B0aW9ucykge1xuXG4gICAgLy8gICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQudmFsdWUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICB9XG5cbiAgb25TdWJtaXQodmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIHRoaXMuZmllbGRzKTtcblxuICAgIC8vIHRoaXMucXVlc3Rpb25MaXN0LmVtaXQodGhpcy5maWVsZHMpO1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGFjdGlvbjogXCJhbGxcIixcbiAgICAgIGRhdGE6IHRoaXMuZmllbGRzXG4gICAgfVxuICAgIHRoaXMucXVlc3Rpb25UcmlnZ2VyLmVtaXQob2JqKTtcbiAgfVxuXG5cbiAgLy8gKGV2ZW50KSB7XG4gIC8vICAgY29uc29sZS5sb2coJ0VsZW1lbnQgd2FzIGRyYWdnZWQnLCBldmVudCk7XG4gIC8vIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gIH1cbiAgb25GaWVsZFVwZGF0ZSgkZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImV2ZW50RGF0YSBzc3Nzc3NzLS0tLS0tXCIsICRldmVudC5kYXRhKTtcblxuICAgIGxldCBldmVudE9iaiA9ICRldmVudFxuICAgIGxldCB0cm5hc2Zvcm1EYXRhID0ge307XG4gICAgaWYgKCRldmVudC5hY3Rpb24gPT0gXCJjb3B5XCIpIHtcbiAgICAgIHRoaXMub25Ecm9wKCRldmVudC5kYXRhLCBcImNvcHlcIik7XG4gICAgfSBlbHNlIGlmICgkZXZlbnQuYWN0aW9uID09IFwiZGVsZXRlXCIpIHtcbiAgICAgIHRybmFzZm9ybURhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ2RlbGV0ZScsXG4gICAgICAgIGRhdGE6ICRldmVudFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoJGV2ZW50LmFjdGlvbiA9PSBcImNoaWxkRHJvcGVkXCIpIHtcbiAgICAgIGxldCBvYmogPSB0aGlzLmdldFRvb2xPYmooJGV2ZW50LmRhdGEucmVzcG9uc2VUeXBlLCB0aGlzLmZpZWxkcy5sZW5ndGggKyAxKTtcblxuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmllbGRzJywgdGhpcy5maWVsZHMpO1xuXG4gICAgICBjb25zdCBmaW5hbCA9IHRoaXMuZmllbGRzLmZpbHRlcihcbiAgICAgICAgaXRlbSA9PiB7XG4gICAgICAgICAgaWYoaXRlbS5maWVsZCA9PT0gZXZlbnRPYmouZGF0YS5tdXRpU2VsZWN0LmZpZWxkKXtcbiAgICAgICAgICAgIGl0ZW0uY2hpbGQucHVzaChvYmopO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpbmFsLnB1c2gob2JqKTtcblxuXG4gICAgICAgIC8vIHRoaXMuZmllbGRzXG5cbiAgICAgIGNvbnNvbGUubG9nKCdmaW5hbCByZXN1bHQnLCBmaW5hbCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwibWFpbiBvYmpcIiwgb2JqKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0cm5hc2Zvcm1EYXRhID0ge1xuICAgICAgICBhY3Rpb246ICd1cGRhdGUnLFxuICAgICAgICBkYXRhOiBKU09OLnBhcnNlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5xdWVzdGlvblRyaWdnZXIuZW1pdCh0cm5hc2Zvcm1EYXRhKTtcbiAgfVxufVxuIl19