import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
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

})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onFieldUpdate = new EventEmitter();
  @Input() fields: any[] = [];
  // form: FormGroup;
  @Input() form: any;
  formData: any = [];
  constructor() { };
  jsonData = [
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
      "icon": "arrow_forward"
    },
    {
      "responseType": "matrix",
      "icon": "kitchen"
    }
  ]


  addElement(element) {

    let obj = {
      action: "addnew",
      element: element
    }
    this.copyOrDeleteEvent(obj)
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }

  copyOrDeleteEvent(data) {
    debugger
    console.log('data type', data);
    console.log('this.fields', this.fields);

    if (typeof (data) === 'string') {
      data = JSON.parse(data);

    }
    // let childdata = data;
    // let finaldata = JSON.parse(childdata);
    // console.log(JSON.parse(data),"parse copyEvent occured");
    // let obj = data;
    // data.field =(this.fields.length+1)+"question";
    // data.label = (this.fields.length+1)+" question";

    if (data.action == "addnew") {
      let transferData = {
        action: "addnew",
        data: data
      }
      this.onFieldUpdate.emit(transferData);

    } else if (data.action == "copy") {
      console.log(data, "this.form before");
      let transferData = {
        action: "copy",
        data: data
      }
      this.onFieldUpdate.emit(transferData);
      //  data.field = (this.fields.length+1)+"question";
      //  console.log("data",data)
      // this.formBuild(obj);
    } else if (data.action == "delete") {
      // var index = this.fields.indexOf(data);
      // console.log("ind", index);
      this.onFieldUpdate.emit(data);
      // this.fields.splice(index, 1);
      // this.fields = this.fields.filter(function(value, index, arr){
      //   return value!=data;
      // });
    } else if(data.action == "childDelete"){
      // console.log('childDelete', this.fields);
      // var index = this.fields[0].child.indexOf(data);
      // console.log("ind", index);
      this.onFieldUpdate.emit(data);
    }
     else if (data.action == "childDroped") {
      this.onFieldUpdate.emit(data);
    }else{
      console.log("data reciving in reload block");
      this.onFieldUpdate.emit(data);
    }

  }

  eventFromChild(data) {

    this.onFieldUpdate.emit(data);
    console.log("data from child  ------- ", data);
  }

  ngOnInit() {

    this.formData = this.fields;

    console.log("this.form ---", this.form)
    // this.formBuild();
  }

  //   formBuild(item){
  //     let fieldsCtrls = {};

  //     this.form = new FormGroup(fieldsCtrls);

  //     // var formData = this.fields;

  //     // console.log("this.fields",this.fields); 

  //     let len = this.fields.length + 1;


  //     var obj = {
  //       "position":len,
  //       "field": len + "question",
  //       "type": item.type,
  //       "label": item.label,
  //       "placeholder": item.placeholder,
  //       "validations":item.validations  

  //     }

  //     this.fields.push(obj);
  //    this.fields.forEach(function(f){
  //     // console.log("f.type", f);

  //     if (f['type'] != 'checkbox') {

  //       fieldsCtrls[f['field']] = new FormControl(f['value'] || '')
  //     } else {

  //       let opts = {};
  //       for (let opt of f['options']) {

  //         opts[opt.key] = new FormControl(opt.label);
  //       }
  //       fieldsCtrls[f['field']] = new FormGroup(opts)
  //     }
  //   });

  //   this.form = new FormGroup(fieldsCtrls);

  //   // console.log("fieldsCtrls",fieldsCtrls);
  // }
}
