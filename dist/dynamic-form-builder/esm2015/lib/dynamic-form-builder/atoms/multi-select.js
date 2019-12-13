/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/multi-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, NgModule, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
export class MultiSelectComponent {
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
        $event.data.mutiSelect = field;
        this.childrenDropEvent.emit($event.data);
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
  <div style="float: right;right: -90px; cursor:pointer;
  top: 20px;" class="col-sm-2 edit-icon"><i class="fa fa-edit" (click)="loadFormElement(obj, i)">{{i}}</i></div>
  <div [ngSwitch]="obj.type" style="width:80%;margin-left:20%">

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
if (false) {
    /** @type {?} */
    MultiSelectComponent.prototype.field;
    /** @type {?} */
    MultiSelectComponent.prototype.form;
    /** @type {?} */
    MultiSelectComponent.prototype.sendDataToParent;
    /** @type {?} */
    MultiSelectComponent.prototype.childrenDropEvent;
    /** @type {?} */
    MultiSelectComponent.prototype.activeModelData;
    /** @type {?} */
    MultiSelectComponent.prototype.validations;
    /** @type {?} */
    MultiSelectComponent.prototype.required;
    /** @type {?} */
    MultiSelectComponent.prototype.autoCollect;
    /** @type {?} */
    MultiSelectComponent.prototype.openEditChild;
    /** @type {?} */
    MultiSelectComponent.prototype._id;
    /** @type {?} */
    MultiSelectComponent.prototype.description;
    /** @type {?} */
    MultiSelectComponent.prototype.minDate;
    /** @type {?} */
    MultiSelectComponent.prototype.maxDate;
    /** @type {?} */
    MultiSelectComponent.prototype.min;
    /** @type {?} */
    MultiSelectComponent.prototype.max;
    /** @type {?} */
    MultiSelectComponent.prototype.label;
    /** @type {?} */
    MultiSelectComponent.prototype.type;
    /** @type {?} */
    MultiSelectComponent.prototype.placeholder;
    /** @type {?} */
    MultiSelectComponent.prototype.options;
    /** @type {?} */
    MultiSelectComponent.prototype.pageNumber;
    /** @type {?} */
    MultiSelectComponent.prototype.currentItem;
    /** @type {?} */
    MultiSelectComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvbXVsdGktc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBb0tsRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBMkIvQixZQUFtQixHQUFzQjtRQUV2Qyx3Q0FBd0M7UUFDeEMsaUNBQWlDO1FBSGhCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBekJoQyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBS2YscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM5QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBTXpELGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBa0IvQixDQUFDOzs7O0lBNUJELElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O0lBQ25FLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUE0Qm5FLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMs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QUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQztnQkFDM0MsWUFBWSxFQUFFLEVBQUU7YUFDakI7WUFHQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBdUpIO2FBQ1I7Ozs7WUFySzBELGlCQUFpQjs7O29CQXdLekUsS0FBSzttQkFDTCxLQUFLOytCQUlMLE1BQU07Z0NBQ04sTUFBTTs7OztJQU5QLHFDQUF5Qjs7SUFDekIsb0NBQW1COztJQUluQixnREFBd0Q7O0lBQ3hELGlEQUF5RDs7SUFFekQsK0NBQXFCOztJQUNyQiwyQ0FBaUI7O0lBQ2pCLHdDQUFjOztJQUNkLDJDQUFpQjs7SUFDakIsNkNBQStCOztJQUMvQixtQ0FBUzs7SUFDVCwyQ0FBaUI7O0lBQ2pCLHVDQUFhOztJQUNiLHVDQUFhOztJQUNiLG1DQUFTOztJQUNULG1DQUFTOztJQUNULHFDQUFXOztJQUNYLG9DQUFVOztJQUNWLDJDQUFpQjs7SUFDakIsdUNBQWE7O0lBQ2IsMENBQWdCOztJQTJHaEIsMkNBQWlCOztJQXpHTCxtQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdNb2R1bGUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdXG59KVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1tdWx0aS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCIgZG5kRHJvcHpvbmUgIChkbmREcm9wKT1cIm9uRHJvcE5ldygkZXZlbnQsZmllbGQpXCIgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTggZm9ybS1jb250cm9sLWxhYmVsXCIgW2F0dHIuZm9yXT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICA8L2xhYmVsPlxuICA8dGV4dGFyZWEgIHJvd3M9XCIyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgXG4gIDwvdGV4dGFyZWE+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cIm9wZW5FZGl0Q2hpbGRcIiBzdHlsZT1cInBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7bWFyZ2luLXRvcDoxMHB4OyBtYXJnaW46NDBweDsgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHJnYmEoMCwwLDAsMC4xOSk7XCI+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIFsobmdNb2RlbCldPVwibGFiZWxcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dCBQbGFjZSBIb2xkZXJcIiBbKG5nTW9kZWwpXT1cInBsYWNlaG9sZGVyXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSGludC9EZXNjcmlwdGlvblwiIFsobmdNb2RlbCldPVwiZGVzY3JpcHRpb25cIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPklucHV0IFR5cGU8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwidHlwZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJudW1iZXJcIj5udW1iZXI8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmFkaW9cIj5yYWRpbzwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+ZGF0ZTwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+UGFnZXM8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwicGFnZU51bWJlclwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzFcIj5wYWdlIDE8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFnZV8yXCI+cGFnZSAyPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfM1wiPnBhZ2UgMzwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1pblwiIG1hdElucHV0IFsobmdNb2RlbCldPVwibWluXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWF4XCIgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJtYXhcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgWyhuZ01vZGVsKV09XCJtaW5EYXRlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWluIGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyTWF4RGF0ZVwiIFsobmdNb2RlbCldPVwibWF4RGF0ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIG1heCBkYXRlXCI+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlck1heERhdGVcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyTWF4RGF0ZT48L21hdC1kYXRlcGlja2VyPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cblxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0ncmFkaW8nIHx8IHR5cGU9PSdjaGVja2JveCcgfHwgdHlwZT09J2Ryb3Bkb3duJ1wiPlxuICAgIDxsYWJlbCBmb3I9XCJsYWJlbFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+T3B0aW9uczwvbGFiZWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiICpuZ0lmPVwidHlwZT09J3NsaWRlcidcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm1heFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cbiAgICA8bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgUmVxaXJlZCA/PC9sYWJlbD5cbiAgICA8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJyZXF1aXJlZFwiPlxuICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIFt2YWx1ZV09dHJ1ZT5cbiAgICAgICAgWWVzXG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICAgICAgTm9cbiAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCIgKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIj5cbiAgICA8bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+aXMgYXV0b0NvbGxlY3Q8L2xhYmVsPlxuICAgIDxtYXQtcmFkaW8tZ3JvdXAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiIFsobmdNb2RlbCldPVwiYXV0b0NvbGxlY3RcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgICAgICBUcnVlXG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT1mYWxzZT5cbiAgICAgICAgRmFsc2VcbiAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG5cbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoxMHB4O1wiIChjbGljayk9XCJjbG9zZU1vZGVsQ2hpbGQoJ3NhdmUnKVwiPlxuICAgICAgU2F2ZVxuICAgIDwvYnV0dG9uPlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJmaWVsZC5jaGlsZC5sZW5ndGggPiAwXCI+XG5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgb2JqIG9mIGZpZWxkLmNoaWxkIGxldCBpID1pbmRleFwiPlxuICA8ZGl2IHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O3JpZ2h0OiAtOTBweDsgY3Vyc29yOnBvaW50ZXI7XG4gIHRvcDogMjBweDtcIiBjbGFzcz1cImNvbC1zbS0yIGVkaXQtaWNvblwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIChjbGljayk9XCJsb2FkRm9ybUVsZW1lbnQob2JqLCBpKVwiPnt7aX19PC9pPjwvZGl2PlxuICA8ZGl2IFtuZ1N3aXRjaF09XCJvYmoudHlwZVwiIHN0eWxlPVwid2lkdGg6ODAlO21hcmdpbi1sZWZ0OjIwJVwiPlxuXG4gIDx0ZXh0Ym94IHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCIgW2ZpZWxkXT1cIm9ialwiIFtmb3JtXT1cImZvcm1cIj48L3RleHRib3g+XG5cbiAgPHRleHRib3ggc3R5bGUgPVwicGFkZGluZy1sZWZ0OjMwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCIgW2ZpZWxkXT1cIm9ialwiIFtmb3JtXT1cImZvcm1cIj48L3RleHRib3g+XG5cbiAgPGRhdGUgc3R5bGUgPVwicGFkZGluZy1sZWZ0OjMwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgW2ZpZWxkXT1cIm9ialwiIFtmb3JtXT1cImZvcm1cIj48L2RhdGU+XG5cbiAgPHNsaWRlciBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCInc2xpZGVyJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9zbGlkZXI+XG5cbiAgICA8ZHJvcGRvd24gc3R5bGUgPVwicGFkZGluZy1sZWZ0OjMwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9kcm9wZG93bj5cblxuICAgIDxjaGVja2JveCBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgW2ZpZWxkXT1cIm9ialwiIFtmb3JtXT1cImZvcm1cIj48L2NoZWNrYm94PlxuXG4gICA8cmFkaW8gc3R5bGUgPVwicGFkZGluZy1sZWZ0OjMwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9yYWRpbz5cblxuICAgIDxmaWxlIHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidmaWxlJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9maWxlPlxuXG4gICAgXG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU2VsZWN0Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XG4gIEBJbnB1dCgpIGZvcm06IGFueTtcbiAgZ2V0IGlzVmFsaWQoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDsgfVxuICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG5cbiAgQE91dHB1dCgpIHNlbmREYXRhVG9QYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNoaWxkcmVuRHJvcEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgYWN0aXZlTW9kZWxEYXRhOiBhbnk7XG4gIHZhbGlkYXRpb25zOiBhbnk7XG4gIHJlcXVpcmVkOiBhbnk7XG4gIGF1dG9Db2xsZWN0OiBhbnk7XG4gIG9wZW5FZGl0Q2hpbGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2lkOiBhbnk7XG4gIGRlc2NyaXB0aW9uOiBhbnk7XG4gIG1pbkRhdGU6IGFueTtcbiAgbWF4RGF0ZTogYW55O1xuICBtaW46IGFueTtcbiAgbWF4OiBhbnk7XG4gIGxhYmVsOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgcGxhY2Vob2xkZXI6IGFueTtcbiAgb3B0aW9uczogYW55O1xuICBwYWdlTnVtYmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgIC8vIHRoaXMuZm9ybS5jb250cm9scyA9IHRoaXMuZmllbGQubmFtZTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZvcm1cIix0aGlzLmZvcm0pO1xuXG4gIH1cbiAgb25Ecm9wTmV3KCRldmVudCwgZmllbGQpIHtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0gTXVsdGlTZWxlY3RDb21wb25lbnQgLVwiLCAkZXZlbnQpO1xuICAgICRldmVudC5kYXRhLm11dGlTZWxlY3QgPSBmaWVsZDtcbiAgICB0aGlzLmNoaWxkcmVuRHJvcEV2ZW50LmVtaXQoJGV2ZW50LmRhdGEpO1xuICB9XG5cblxuICBjbG9zZU1vZGVsQ2hpbGQoYWN0aW9uLCBkYXRhID0gXCJcIikge1xuICAgIGlmIChhY3Rpb24gPT0gXCJzYXZlXCIpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgICBjb25zb2xlLmxvZyhcImNsb3NlTW9kZWxcIiwgdGhpcy5maWVsZCk7XG4gICAgICAvLyB0aGlzLm1vZGFsUmVmZXJlbmNlLmNsb3NlKCk7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5maWVsZCA9IHRoaXMuZmllbGQuZmllbGQ7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS50eXBlID0gdGhpcy50eXBlO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgLy8gdGhpcy5hY3RpdmVNb2RlbERhdGEub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgdmFsaWRhdGlvbnM6IHRoaXMudmFsaWRhdGlvbnMsXG4gICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgICBfaWQ6IHRoaXMuX2lkLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgICBvYmpbJ21pbkRhdGUnXSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgb2JqWydtYXhEYXRlJ10gPSB0aGlzLm1heERhdGVcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09ICdzbGlkZXInKSB7XG4gICAgICAgIG9ialsnbWluJ10gPSB0aGlzLm1pbjtcbiAgICAgICAgb2JqWydtYXgnXSA9IHRoaXMubWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm9ialwiLG9iaik7XG5cblxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5maWVsZC5jaGlsZC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmZpZWxkID09PSB0aGlzLmN1cnJlbnRJdGVtLmZpZWxkKTtcbiAgICAgIHRoaXMuZmllbGQuY2hpbGQuc3BsaWNlKGluZGV4LCAxLCBvYmopXG5cbiAgICAgIC8vIGxldCBuZXdPYmogPSAgdGhpcy5maWVsZC5jaGlsZC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAvLyAgIGlmIChpdGVtLmZpZWxkID09IHRoaXMuY3VycmVudEl0ZW0uZmllbGQpIHtcbiAgICAgIC8vICAgICAvLyB0aGlzLmZpZWxkLmNoaWxkW3RoaXMuY3VycmVudEl0ZW0ucG9zaXRpb25dID0gb2JqO1xuICAgICAgLy8gICAgIHJldHVybiBvYmo7XG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZygnYWFhYWFhYWFhYWEnLCB0aGlzLmZpZWxkKTtcblxuXG5cbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXG5cbiAgICAgIC8vIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuXG5cbiAgICAgIC8vIHRoaXMuZmllbGQubGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgLy8gdGhpcy5maWVsZC50eXBlID0gdGhpcy50eXBlO1xuICAgICAgLy8gdGhpcy5maWVsZC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICAvLyB0aGlzLmZpZWxkLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAvLyB0aGlzLmZpZWxkLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcblxuICAgICAgLy8gaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIC8vICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuICAgICAgLy8gICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG4gICAgICAvLyAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMuYXV0b0NvbGxlY3QgPSB0aGlzLmF1dG9Db2xsZWN0O1xuICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3NsaWRlcicpIHtcbiAgICAgIC8vICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5taW4gPSB0aGlzLm1pbjtcbiAgICAgIC8vICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5tYXggPSB0aGlzLm1heDtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gdGhpcy5maWVsZC52YWxpZGF0aW9uc1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkXCIsIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQsIFwic2Rkc1wiLCB0aGlzLnJlcXVpcmVkKTtcbiAgICAgIC8vIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkO1xuICAgICAgLy8gdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG5cblxuICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5maWVsZFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgIHRoaXMub3BlbkVkaXRDaGlsZCA9IGZhbHNlO1xuXG4gICAgICAvLyB0aGlzLnNlbmREYXRhVG9QYXJlbnQuZW1pdCh0aGlzLmFjdGl2ZU1vZGVsRGF0YSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLm9wZW5FZGl0Q2hpbGQgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLm1vZGFsU2VydmljZS5jbG9zZSgpO1xuICAgIC8vICB0aGlzLm15TW9kYWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnbW9kYWwgaGlkZSc7XG4gIH1cblxuICBjdXJyZW50SXRlbTogYW55O1xuXG4gIGxvYWRGb3JtRWxlbWVudChpdGVtLCBpZCkge1xuICAgIGNvbnNvbGUubG9nKFwiaXRlbSAtLS1cIiwgaXRlbSwgXCJpZFwiLCBpZCk7XG4gICAgdGhpcy5hY3RpdmVNb2RlbERhdGEgPSBcIlwiO1xuICAgIHRoaXMubGFiZWwgPSBpdGVtLmxhYmVsO1xuXG4gICAgdGhpcy5jdXJyZW50SXRlbSA9IGl0ZW07XG5cblxuICAgIHRoaXMudHlwZSA9IGl0ZW0udHlwZTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gaXRlbS5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBpdGVtLm9wdGlvbnM7XG4gICAgdGhpcy5faWQgPSBpdGVtLl9pZDtcbiAgICAvLyB0aGlzLnJlcXVpcmVkID0gaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICBpZiAoaXRlbS50eXBlID09IFwiZGF0ZVwiKSB7XG4gICAgICB0aGlzLm1pbkRhdGUgPSBpdGVtLnZhbGlkYXRpb25zLm1pbkRhdGU7XG4gICAgICB0aGlzLm1heERhdGUgPSBpdGVtLnZhbGlkYXRpb25zLm1heERhdGVcbiAgICAgIHRoaXMuYXV0b0NvbGxlY3QgPSBpdGVtLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0O1xuICAgIH1cbiAgICBlbHNlIGlmIChpdGVtLnR5cGUgPT0gXCJzbGlkZXJcIikge1xuICAgICAgdGhpcy5taW4gPSBpdGVtLnZhbGlkYXRpb25zLm1pbjtcbiAgICAgIHRoaXMubWF4ID0gaXRlbS52YWxpZGF0aW9ucy5tYXg7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5yZXF1aXJlZCA9IHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkLCBcIml0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWRcIixcbiAgICAgIC8vIHRoaXMucmVxdWlyZWQsIFwibGFiZWxcIiwgdGhpcy5sYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJsYWJlbFwiLHRoaXMubGFiZWwpO1xuICAgIHRoaXMub3BlbkVkaXRDaGlsZCA9IHRoaXMub3BlbkVkaXRDaGlsZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTW9kYWxCdXR0b25cIikuY2xpY2soKTtcbiAgICAvLyB0aGlzLm9wZW4odGhpcy5teU1vZGFsKTtcbiAgICAvLyB0aGlzLm15TW9kYWwuc2hvdygpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBmYWRlIHNob3cnO1xuICB9XG5cbn1cbiJdfQ==