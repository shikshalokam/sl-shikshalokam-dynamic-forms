/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvbXVsdGktc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFxS2xFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUEyQi9CLFlBQW1CLEdBQXNCO1FBRXZDLHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFIaEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF6QmhDLFVBQUssR0FBUSxFQUFFLENBQUM7UUFLZixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFNekQsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFrQi9CLENBQUM7Ozs7SUE1QkQsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7SUFDbkUsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7OztJQTRCbkUsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFbkQsSUFBSSxNQUFNLENBQUMsSUFBSSxD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QUUsQ0FBQztRQUN6QixzREFBc0Q7UUFDdEQsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2Qiw0REFBNEQ7SUFDOUQsQ0FBQzs7O1lBL1VGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLENBQUM7Z0JBQzNDLFlBQVksRUFBRSxFQUFFO2FBQ2pCO1lBR0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F3Skg7YUFDUjs7OztZQXRLMEQsaUJBQWlCOzs7b0JBeUt6RSxLQUFLO21CQUNMLEtBQUs7K0JBSUwsTUFBTTtnQ0FDTixNQUFNOzs7O0lBTlAscUNBQXlCOztJQUN6QixvQ0FBbUI7O0lBSW5CLGdEQUF3RDs7SUFDeEQsaURBQXlEOztJQUV6RCwrQ0FBcUI7O0lBQ3JCLDJDQUFpQjs7SUFDakIsd0NBQWM7O0lBQ2QsMkNBQWlCOztJQUNqQiw2Q0FBK0I7O0lBQy9CLG1DQUFTOztJQUNULDJDQUFpQjs7SUFDakIsdUNBQWE7O0lBQ2IsdUNBQWE7O0lBQ2IsbUNBQVM7O0lBQ1QsbUNBQVM7O0lBQ1QscUNBQVc7O0lBQ1gsb0NBQVU7O0lBQ1YsMkNBQWlCOztJQUNqQix1Q0FBYTs7SUFDYiwwQ0FBZ0I7O0lBK0doQiwyQ0FBaUI7O0lBN0dMLG1DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBOZ01vZHVsZSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW11cbn0pXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW11bHRpLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiBkbmREcm9wem9uZSAgKGRuZERyb3ApPVwib25Ecm9wTmV3KCRldmVudCxmaWVsZClcIiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtOCBmb3JtLWNvbnRyb2wtbGFiZWxcIiBbYXR0ci5mb3JdPVwiZmllbGQubGFiZWxcIj5cbiAgICAgIHt7ZmllbGQubGFiZWx9fVxuICAgIDwvbGFiZWw+XG4gIDx0ZXh0YXJlYSAgcm93cz1cIjJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICBcbiAgPC90ZXh0YXJlYT5cbiAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwib3BlbkVkaXRDaGlsZFwiIHN0eWxlPVwicGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzttYXJnaW4tdG9wOjEwcHg7IG1hcmdpbjo0MHB4OyBtYXJnaW4tbGVmdDogMjAlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcIj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgWyhuZ01vZGVsKV09XCJsYWJlbFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIklucHV0IFBsYWNlIEhvbGRlclwiIFsobmdNb2RlbCldPVwicGxhY2Vob2xkZXJcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJIaW50L0Rlc2NyaXB0aW9uXCIgWyhuZ01vZGVsKV09XCJkZXNjcmlwdGlvblwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgZm9ybS1ncm91cFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+SW5wdXQgVHlwZTwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJ0eXBlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0PC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5kYXRlPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5QYWdlczwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJwYWdlTnVtYmVyXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhZ2VfMVwiPnBhZ2UgMTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYWdlXzJcIj5wYWdlIDI8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFnZV8zXCI+cGFnZSAzPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWluXCIgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJtaW5cIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS03IGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdzbGlkZXInXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm1heFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbKG5nTW9kZWwpXT1cIm1pbkRhdGVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBtaW4gZGF0ZVwiPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJNYXhEYXRlXCIgWyhuZ01vZGVsKV09XCJtYXhEYXRlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgbWF4IGRhdGVcIj5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyTWF4RGF0ZVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXJNYXhEYXRlPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGZvcm0tZ3JvdXBcIiAqbmdJZj1cInR5cGU9PSdyYWRpbycgfHwgdHlwZT09J2NoZWNrYm94JyB8fCB0eXBlPT0nZHJvcGRvd24nXCI+XG4gICAgPGxhYmVsIGZvcj1cImxhYmVsXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5PcHRpb25zPC9sYWJlbD5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNyBmb3JtLWdyb3VwXCIgKm5nSWY9XCJ0eXBlPT0nc2xpZGVyJ1wiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1heFwiIG1hdElucHV0IFsobmdNb2RlbCldPVwibWF4XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiPlxuICAgIDxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBSZXFpcmVkID88L2xhYmVsPlxuICAgIDxtYXQtcmFkaW8tZ3JvdXAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBbKG5nTW9kZWwpXT1cInJlcXVpcmVkXCI+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgW3ZhbHVlXT10cnVlPlxuICAgICAgICBZZXNcbiAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgICAgICBOb1xuICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIiAqbmdJZj1cInR5cGU9PSdkYXRlJ1wiPlxuICAgIDxsYWJlbCBpZD1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIj5pcyBhdXRvQ29sbGVjdDwvbGFiZWw+XG4gICAgPG1hdC1yYWRpby1ncm91cCBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCIgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCIgWyhuZ01vZGVsKV09XCJhdXRvQ29sbGVjdFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPXRydWU+XG4gICAgICAgIFRydWVcbiAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPWZhbHNlPlxuICAgICAgICBGYWxzZVxuICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICA8L2Rpdj5cblxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cblxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjEwcHg7XCIgKGNsaWNrKT1cImNsb3NlTW9kZWxDaGlsZCgnc2F2ZScpXCI+XG4gICAgICBTYXZlXG4gICAgPC9idXR0b24+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImZpZWxkLmNoaWxkLmxlbmd0aCA+IDBcIj5cblxuICA8ZGl2ICpuZ0Zvcj1cImxldCBvYmogb2YgZmllbGQuY2hpbGQgbGV0IGkgPWluZGV4XCI+XG5cbiAgPGRpdiBbbmdTd2l0Y2hdPVwib2JqLnR5cGVcIiBzdHlsZT1cImZsb2F0OmxlZnQ7d2lkdGg6ODAlO21hcmdpbi1sZWZ0OjIwJTtib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjE5KTtcIj5cbiAgPGRpdiBzdHlsZT1cImZsb2F0OiByaWdodDtyaWdodDogLTkwcHg7IGN1cnNvcjpwb2ludGVyO1xuICB0b3A6IDIwcHg7XCIgY2xhc3M9XCJjb2wtc20tMiBlZGl0LWljb25cIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIiAoY2xpY2spPVwibG9hZEZvcm1FbGVtZW50KG9iaixpKVwiPjwvaT48L2Rpdj5cblxuICA8dGV4dGJveCBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuXG4gIDx0ZXh0Ym94IHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC90ZXh0Ym94PlxuXG4gIDxkYXRlIHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9kYXRlPlxuXG4gIDxzbGlkZXIgc3R5bGUgPVwicGFkZGluZy1sZWZ0OjMwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ3NsaWRlcidcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvc2xpZGVyPlxuXG4gICAgPGRyb3Bkb3duIHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZHJvcGRvd24+XG5cbiAgICA8Y2hlY2tib3ggc3R5bGUgPVwicGFkZGluZy1sZWZ0OjMwcHhcIiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIFtmaWVsZF09XCJvYmpcIiBbZm9ybV09XCJmb3JtXCI+PC9jaGVja2JveD5cblxuICAgPHJhZGlvIHN0eWxlID1cInBhZGRpbmctbGVmdDozMHB4XCIgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvcmFkaW8+XG5cbiAgICA8ZmlsZSBzdHlsZSA9XCJwYWRkaW5nLWxlZnQ6MzBweFwiICpuZ1N3aXRjaENhc2U9XCInZmlsZSdcIiBbZmllbGRdPVwib2JqXCIgW2Zvcm1dPVwiZm9ybVwiPjwvZmlsZT5cblxuICAgIFxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZmllbGQ6IGFueSA9IHt9O1xuICBASW5wdXQoKSBmb3JtOiBhbnk7XG4gIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuXG4gIEBPdXRwdXQoKSBzZW5kRGF0YVRvUGFyZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjaGlsZHJlbkRyb3BFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGFjdGl2ZU1vZGVsRGF0YTogYW55O1xuICB2YWxpZGF0aW9uczogYW55O1xuICByZXF1aXJlZDogYW55O1xuICBhdXRvQ29sbGVjdDogYW55O1xuICBvcGVuRWRpdENoaWxkOiBib29sZWFuID0gZmFsc2U7XG4gIF9pZDogYW55O1xuICBkZXNjcmlwdGlvbjogYW55O1xuICBtaW5EYXRlOiBhbnk7XG4gIG1heERhdGU6IGFueTtcbiAgbWluOiBhbnk7XG4gIG1heDogYW55O1xuICBsYWJlbDogYW55O1xuICB0eXBlOiBhbnk7XG4gIHBsYWNlaG9sZGVyOiBhbnk7XG4gIG9wdGlvbnM6IGFueTtcbiAgcGFnZU51bWJlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICAvLyB0aGlzLmZvcm0uY29udHJvbHMgPSB0aGlzLmZpZWxkLm5hbWU7XG4gICAgLy8gY29uc29sZS5sb2coXCJmb3JtXCIsdGhpcy5mb3JtKTtcblxuICB9XG4gIG9uRHJvcE5ldygkZXZlbnQsIGZpZWxkKSB7XG4gICAgY29uc29sZS5sb2coXCItLS0tIE11bHRpU2VsZWN0Q29tcG9uZW50IC1cIiwgJGV2ZW50KTtcblxuICAgIGlmKCAkZXZlbnQuZGF0YS5yZXNwb25zZVR5cGUgJiYgJGV2ZW50LmRhdGEucmVzcG9uc2VUeXBlICE9ICdtYXRyaXgnKXtcbiAgICAgICRldmVudC5kYXRhLm11dGlTZWxlY3QgPSBmaWVsZDtcbiAgICAgIHRoaXMuY2hpbGRyZW5Ecm9wRXZlbnQuZW1pdCgkZXZlbnQuZGF0YSk7XG4gICAgfVxuICAgXG4gIH1cblxuXG4gIGNsb3NlTW9kZWxDaGlsZChhY3Rpb24sIGRhdGEgPSBcIlwiKSB7XG4gICAgaWYgKGFjdGlvbiA9PSBcInNhdmVcIikge1xuICAgICAgZGVidWdnZXJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VNb2RlbFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgIC8vIHRoaXMubW9kYWxSZWZlcmVuY2UuY2xvc2UoKTtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmZpZWxkID0gdGhpcy5maWVsZC5maWVsZDtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLmxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgIC8vIHRoaXMuYWN0aXZlTW9kZWxEYXRhLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICAvLyB0aGlzLmFjdGl2ZU1vZGVsRGF0YS5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICBsZXQgb2JqID0ge1xuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB2YWxpZGF0aW9uczogdGhpcy52YWxpZGF0aW9ucyxcbiAgICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICAgIF9pZDogdGhpcy5faWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICAgIG9ialsnbWluRGF0ZSddID0gdGhpcy5taW5EYXRlO1xuICAgICAgICBvYmpbJ21heERhdGUnXSA9IHRoaXMubWF4RGF0ZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgb2JqWydtaW4nXSA9IHRoaXMubWluO1xuICAgICAgICBvYmpbJ21heCddID0gdGhpcy5tYXg7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqXCIsb2JqKTtcblxuXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmZpZWxkLmNoaWxkLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZmllbGQgPT09IHRoaXMuY3VycmVudEl0ZW0uZmllbGQpO1xuICAgICAgdGhpcy5maWVsZC5jaGlsZC5zcGxpY2UoaW5kZXgsIDEsIG9iailcblxuICAgICAgLy8gbGV0IG5ld09iaiA9ICB0aGlzLmZpZWxkLmNoaWxkLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIC8vICAgaWYgKGl0ZW0uZmllbGQgPT0gdGhpcy5jdXJyZW50SXRlbS5maWVsZCkge1xuICAgICAgLy8gICAgIC8vIHRoaXMuZmllbGQuY2hpbGRbdGhpcy5jdXJyZW50SXRlbS5wb3NpdGlvbl0gPSBvYmo7XG4gICAgICAvLyAgICAgcmV0dXJuIG9iajtcbiAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICByZXR1cm4gaXRlbTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdhYWFhYWFhYWFhYScsIHRoaXMuZmllbGQpO1xuXG5cblxuICAgICAgLy8gdGhpcy5zZW5kRGF0YVRvUGFyZW50LmVtaXQoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cblxuICAgICAgLy8gdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG5cblxuICAgICAgLy8gdGhpcy5maWVsZC5sYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICAvLyB0aGlzLmZpZWxkLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAvLyB0aGlzLmZpZWxkLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIC8vIHRoaXMuZmllbGQub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIC8vIHRoaXMuZmllbGQuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgICAvLyBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgLy8gICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgICAvLyAgIHRoaXMuZmllbGQudmFsaWRhdGlvbnMubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgIC8vICAgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5hdXRvQ29sbGVjdCA9IHRoaXMuYXV0b0NvbGxlY3Q7XG4gICAgICAvLyB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSAnc2xpZGVyJykge1xuICAgICAgLy8gICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1pbiA9IHRoaXMubWluO1xuICAgICAgLy8gICB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLm1heCA9IHRoaXMubWF4O1xuICAgICAgLy8gfVxuXG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbGlkYXRpb25zXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWRcIiwgdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCwgXCJzZGRzXCIsIHRoaXMucmVxdWlyZWQpO1xuICAgICAgLy8gdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbGlkYXRpb25zLmF1dG9Db2xsZWN0ID0gdGhpcy5hdXRvQ29sbGVjdDtcblxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmZpZWxkXCIsIHRoaXMuZmllbGQpO1xuICAgICAgdGhpcy5vcGVuRWRpdENoaWxkID0gZmFsc2U7XG5cbiAgICAgIC8vIHRoaXMuc2VuZERhdGFUb1BhcmVudC5lbWl0KHRoaXMuYWN0aXZlTW9kZWxEYXRhKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMub3BlbkVkaXRDaGlsZCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5tb2RhbFJlZmVyZW5jZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlKCk7XG4gICAgLy8gIHRoaXMubXlNb2RhbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdtb2RhbCBoaWRlJztcbiAgfVxuXG4gIGN1cnJlbnRJdGVtOiBhbnk7XG5cbiAgbG9hZEZvcm1FbGVtZW50KGl0ZW0sIGlkKSB7XG4gICAgY29uc29sZS5sb2coXCJpdGVtIC0tLVwiLCBpdGVtLCBcImlkXCIsIGlkKTtcbiAgICB0aGlzLmFjdGl2ZU1vZGVsRGF0YSA9IFwiXCI7XG4gICAgdGhpcy5sYWJlbCA9IGl0ZW0ubGFiZWw7XG5cbiAgICB0aGlzLmN1cnJlbnRJdGVtID0gaXRlbTtcblxuXG4gICAgdGhpcy50eXBlID0gaXRlbS50eXBlO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBpdGVtLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMub3B0aW9ucyA9IGl0ZW0ub3B0aW9ucztcbiAgICB0aGlzLl9pZCA9IGl0ZW0uX2lkO1xuICAgIC8vIHRoaXMucmVxdWlyZWQgPSBpdGVtLnZhbGlkYXRpb25zLnJlcXVpcmVkO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIGlmIChpdGVtLnR5cGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIHRoaXMubWluRGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWluRGF0ZTtcbiAgICAgIHRoaXMubWF4RGF0ZSA9IGl0ZW0udmFsaWRhdGlvbnMubWF4RGF0ZVxuICAgICAgdGhpcy5hdXRvQ29sbGVjdCA9IGl0ZW0udmFsaWRhdGlvbnMuYXV0b0NvbGxlY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW0udHlwZSA9PSBcInNsaWRlclwiKSB7XG4gICAgICB0aGlzLm1pbiA9IGl0ZW0udmFsaWRhdGlvbnMubWluO1xuICAgICAgdGhpcy5tYXggPSBpdGVtLnZhbGlkYXRpb25zLm1heDtcbiAgICB9XG5cbiAgICAvLyB0aGlzLnJlcXVpcmVkID0gdGhpcy5maWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZDtcblxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0udmFsaWRhdGlvbnMucmVxdWlyZWQsIFwiaXRlbS52YWxpZGF0aW9ucy5yZXF1aXJlZFwiLFxuICAgICAgLy8gdGhpcy5yZXF1aXJlZCwgXCJsYWJlbFwiLCB0aGlzLmxhYmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImxhYmVsXCIsdGhpcy5sYWJlbCk7XG4gICAgdGhpcy5vcGVuRWRpdENoaWxkID0gdGhpcy5vcGVuRWRpdENoaWxkID8gZmFsc2UgOiB0cnVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5Nb2RhbEJ1dHRvblwiKS5jbGljaygpO1xuICAgIC8vIHRoaXMub3Blbih0aGlzLm15TW9kYWwpO1xuICAgIC8vIHRoaXMubXlNb2RhbC5zaG93KCk7XG4gICAgLy8gdGhpcy5teU1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21vZGFsIGZhZGUgc2hvdyc7XG4gIH1cblxufVxuIl19