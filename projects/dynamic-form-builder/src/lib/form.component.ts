// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
// import { HttpClient, HttpHeaders } from '@angular/common/http';


// @Component({
//   selector: 'form-app',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {
//   public form: FormGroup;
//   unsubcribe: any;
//   jsonData: any;
//   formData: any;


//   public fields: any[] = [
//     // {
//     //   type: 'text',
//     //   name: 'firstName',
//     //   label: 'First Name',
//     //   value: '',

//     // },
//     // {
//     //   type: 'number',
//     //   name: 'firstName',
//     //   label: 'Age',
//     //   value: '',

//     // },
//     // {
//     //   type: 'text',
//     //   name: 'lastName',
//     //   label: 'Last Name',
//     //   value: '',
//     //   required: true,
//     // },
//     // {
//     //   type: 'text',
//     //   name: 'email',
//     //   label: 'Email',
//     //   value: '',
//     //   required: true,
//     // },

//     // {
//     //   type: 'file',
//     //   name: 'picture',
//     //   label: 'Picture',
//     //   required: true,
//     //   onUpload: this.onUpload.bind(this)
//     // },
//     // {
//     //   type: 'dropdown',
//     //   name: 'country',
//     //   label: 'Country',
//     //   value: 'in',
//     //   required: true,
//     //   options: [
//     //     { key: 'in', label: 'India' },
//     //     { key: 'us', label: 'USA' }
//     //   ]
//     // },
//     // {
//     //   type: 'radio',
//     //   name: 'country',
//     //   label: 'Country',
//     //   value: 'in',
//     //   required: true,
//     //   options: [
//     //     { key: 'm', label: 'Male' },
//     //     { key: 'f', label: 'Female' }
//     //   ]
//     // },
//     // {
//     //   type: 'checkbox',
//     //   name: 'hobby',
//     //   label: 'Hobby',
//     //   required: true,
//     //   options: [
//     //     { key: 'f', label: 'Fishing' },
//     //     { key: 'c', label: 'Cooking' }
//     //   ]
//     // }
//   ];

//   constructor(private http: HttpClient, private _formBuilder: FormBuilder, private fb: FormBuilder) {
//     // this.form = new FormGroup({
//     //   fields: this.fb.array([]),
//     // })
//     this.form = new FormGroup({
//       fields: new FormControl(JSON.stringify(this.fields))
//     })

//     this.unsubcribe = this.form.valueChanges.subscribe((update) => {
//       console.log(update);
//       // this.fields = JSON.parse(update.fields);
//     });
//   }



//   ngOnInit() {
//     // this.http.get('../input.json').subscribe(data => {
//     //   //  = data;
//     //   console.log("data",data);
//     // });

//     this.formData = [];
//     this.jsonData = [
//       { 
//         "responseType": "text",

//       }, {
//         "responseType": "number",
//       }, {
//         "responseType": "radio",
//       },
//       {
//         "responseType": "checkbox",
//        },
//        {
//          "responseType": "dropdown"
//        }
//     ]


//   }
//   onUpload(e) {
//     console.log(e);

//   }

//   getFields() {
//     return this.fields;
//   }

//   ngDistroy() {
//     this.unsubcribe();
//   }
//   onDragEnd(ele) {

//     let len = this.fields.length + 1;

//     var obj = {};
//     if (ele == 'text') {
//       obj = {
//         "position":len,
//         "field": len + "question",
//         "type": "text",
//         "label": len + ". question",
//         "placeholder": "Please enter your question here",
//         "validations": {
//           "required": true,
//           "minLenght": "",
//           "maxLength": ""
//         }
//       }
//     }
//     if (ele == 'number') {
//       obj = {
//         "field": len + "question",
//         "type": "number",
//         "label": len + ". question",
//         "placeholder": "Please enter your question here",
//         "validations": {
//           "required": true,
//           "minLenght": "",
//           "maxLength": ""
//         }
//       }
//     }

//     {

//       if (ele == 'radio') {
//         obj = {
//           field: len + "question",
//           type: 'radio',
//           name: len + ". question",
//           label: len + ". question",
//           value: 'in',
//           required: true,
//           options: [
//             { key: 'm', label: 'Male' },
//             { key: 'f', label: 'Female' }
//           ]
//         }
//       }
//       if(ele=="checkbox"){
//         obj = {
//           field: len + "question",
//            type: "checkbox",
//            name: len + ". question",
//           label: len + ". question",
//           required: true,
//           options: [
//             { key: 'f', label: 'Fishing' },
//             { key: 'c', label: 'Cooking' }
//           ]
//         }
//       }
//       if(ele=="dropdown"){
//         obj =  {
//           field: len + "question",
//       type: 'dropdown',
//       name: len + ". question",
//       label: len + ". question",
//       value: 'option1',
//       required: true,
//       options: [
//         { key: 'option1', label: 'Option 1' },
//         { key: 'option1', label: 'Option 2' }
//       ]
//     }
//       }
//       let elem = this.fields;
//       this.formData.push(obj);
//       let fieldsCtrls = {};

//       this.form = new FormGroup(fieldsCtrls);
//       // console.log("------", obj);
//       for (let f of this.formData) {


//       if (f['type'] != 'checkbox') {

//         console.log("f.type", f['field']);
//         fieldsCtrls[f['field']] = new FormControl(f['value'] || '')
//       } else {

//         let opts = {};
//         for (let opt of f['options']) {

//           opts[opt.key] = new FormControl(opt.label);
//         }
//         fieldsCtrls[f['field']] = new FormGroup(opts)
//       }

//       // const creds = this.form.controls.fields as FormArray;
//       // creds.push(this.fb.group(fieldsCtrls));

      
//       // console.log("fieldsCtrls",fieldsCtrls);
     
//       // this.formData =  this.fields;

//     }
//     this.form = new FormGroup(fieldsCtrls);
//     // this.fields
//     // this.formBuild();
//     this.fields.push(obj);
//       console.log("fields controls",  this.form );
//     }
//   }

//   formBuild(){
//     let fieldsCtrls = {};

//     console.log(" this.fields", this.fields);
//     for (let f of this.fields) {
      

//       if (f.type != 'checkbox') {
       
//         fieldsCtrls[f.name] = new FormControl(f.value || '')
//       } else {
//         let opts = {};
//         for (let opt of f.options) {
         
//           opts[opt.key] = new FormControl(opt.value);
//         }
//         fieldsCtrls[f.name] = new FormGroup(opts)
//       }
//     }
//     this.form = new FormGroup(fieldsCtrls);
//   }

//   onSubmit(value) {
//     console.log("value", this.fields);
//   }

//   // (event) {
//   //   console.log('Element was dragged', event);
//   // }
// }
