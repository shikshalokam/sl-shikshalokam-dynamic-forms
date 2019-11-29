import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  template:`
   
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"  (sendDataToParent)="eventFromChild($event)" (copyOrDeleteEvent)="copyOrDeleteEvent($event)"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <button type="submit" [disabled]="!form.valid" class="btn btn-primary" >Save</button>
          <strong >Saved all values</strong>
        </div>
      </div>

  `, 
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  // form: FormGroup;
  @Input() form:any;
  formData:any = [];
  constructor() { }


  copyOrDeleteEvent(data){

    let obj = data;
    console.log(data,"copyEvent occured");

    // data.field =(this.fields.length+1)+"question";
    // data.label = (this.fields.length+1)+" question";

    if(data.action=="copy"){

      console.log(data,"this.form before");


      
    //  data.field = (this.fields.length+1)+"question";

    //  console.log("data",data)
      this.formBuild(obj);

    }else if(data.action="delete"){

      var index = this.fields.indexOf(data);

      console.log("ind",index);

      this.fields.splice(index, 1);

      // this.fields = this.fields.filter(function(value, index, arr){
      //   return value!=data;
      // });
     

    
      // console.log("evens",evens);
      // this.fields= evens;
      // console.log("this.form",this.form);
      // this.fields.
      // console.log(this.fields.length,"copyEvent occured",evens);
    }
    
  }

  eventFromChild(data){
    console.log("data from child",data);
  }

  ngOnInit() {

    this.formData = this.fields;

    console.log("this.form ---",this.form)
    // this.formBuild();
  }

  formBuild(item){
    let fieldsCtrls = {};

    this.form = new FormGroup(fieldsCtrls);

    // var formData = this.fields;

    // console.log("this.fields",this.fields); 

    let len = this.fields.length + 1;


    var obj = {
      "position":len,
      "field": len + "question",
      "type": item.type,
      "label": item.label,
      "placeholder": item.placeholder,
      "validations":item.validations  

    }
   
    this.fields.push(obj);
   this.fields.forEach(function(f){
    // console.log("f.type", f);

    if (f['type'] != 'checkbox') {
   
      fieldsCtrls[f['field']] = new FormControl(f['value'] || '')
    } else {

      let opts = {};
      for (let opt of f['options']) {

        opts[opt.key] = new FormControl(opt.label);
      }
      fieldsCtrls[f['field']] = new FormGroup(opts)
    }
  });

  this.form = new FormGroup(fieldsCtrls);

  // console.log("fieldsCtrls",fieldsCtrls);
}
}
