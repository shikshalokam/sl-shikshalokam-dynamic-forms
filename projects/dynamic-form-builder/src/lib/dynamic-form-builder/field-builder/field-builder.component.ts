import { Component, Input, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'field-builder',
  template: `
  <style>

  .example-radio-group {
    display: flex;
    flex-direction: block;
    margin: 15px 0;
  }
  
  .example-radio-button {
    margin: 5px;
  }
  .edit-icon {
    position: relative;
  width: 36px;
  max-width: 57px;
  right: 0px;
  left: 94%;
  top: 25px;cursor: pointer;z-index: 100;
}
  </style>
  <div class="row"  *ngIf="openEdit" style="padding: 20px;
  border: 1px solid #ccc;margin-top:10px;
  box-shadow:0 4px 8px rgba(0,0,0,0.19), 0 2px 0px rgba(0,0,0,0.23);margin-left: 0px;
  margin-right: 0px;">

  <div class="col-sm-12 form-group">
      <label for="label">Label</label>
        <div class="input-group">
        <input type="text" class="form-control" [(ngModel)]="label" name="label">
        </div>
      </div>
      <div class="col-sm-12 form-group">
      <label for="label">Input Place Holder</label>
        <div class="input-group">
        <input type="text" class="form-control" [(ngModel)]="placeholder" name="placeholder">
        </div>
      </div>
      <div class="col-sm-12 form-group">
    <label for="label">Input Type</label>
      <select class="form-control" [(ngModel)]="type" name="type">
        <option value="text">text</option>
        <option value="number">number</option>
        <option value="radio">radio</option>
      </select>
    </div>
    <div class="col-sm-12 form-group" *ngIf="type=='radio' || type=='checkbox' || type=='dropdown'">
    <label for="label">Options</label>
    
    <ul class="col" *ngFor="let opt of options">
     <li class="">
      {{opt.label}}
    </li>
    
    </ul>
    <div class="col"> 
    
    <input type="tex" name="newOption" placeholder="Label" class="col-sm-4" [(ngModel)]="newOptionLabel">
    <input type="tex" name="newOption" placeholder="key" class="col-sm-4" [(ngModel)]="newOptionKey">
  <div class="col-sm-2 btn btn-primary" (click)="AddNewOptions()">Add</div>
    </div>
    </div>

    

<label id="example-radio-group-label">is Reqired ?</label>
<mat-radio-group
  aria-labelledby="example-radio-group-label"
  class="example-radio-group"
  [(ngModel)]="required">
  <mat-radio-button class="example-radio-button" value="Yes">
    Yes
  </mat-radio-button>
  <mat-radio-button class="example-radio-button" value="No">
    No
  </mat-radio-button>
</mat-radio-group>

  
<div  class="col-sm-12">

<button mat-flat-button color="primary" style="margin-right:10px;"  (click)="closeModel('save')">
Save
</button>

</div>
  </div>
  <div class="form-group row" [formGroup]="form" style="background:#def9d8f5;padding:10px;margin:0px;margin-top:10px;box-shadow:0 0px 0px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23)">
  
  


  <div class="col-sm-2 edit-icon" ><i class="fa fa-edit" (click)="loadFormElement(field)" ></i></div>
    <label class="col-md-12 form-control-label" [attr.for]="field.label">
      {{field.label}}
    </label>
    <div class="col-md-12" [ngSwitch]="field.type">
    <textbox *ngSwitchCase="'number'" [field]="field" [form]="form"></textbox>
    <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
      <dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></dropdown>
      <checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></checkbox>
      <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
      <file *ngSwitchCase="'file'" [field]="field" [form]="form"></file>
      <div style="float:right">
          <span class="cursor-pntr" (click)="copyElement(field)"><i class="fa fa-copy"></i></span>
          <span class="cursor-pntr" (click)="deleteElement(field)"><i class="fa fa-trash"></i> </span>
       </div> 
       </div>`,
styleUrls: []
})

// <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>

export class FieldBuilderComponent implements OnInit {
  @Input() field: any;
  @Input() form: any;

  @Output() sendDataToParent = new EventEmitter<string>();

  @Output() copyOrDeleteEvent = new EventEmitter<string>();

  closeResult: string;
  modalReference: any;

  label:any;
  type:any;
  placeholder:any;
  options:any;
  newOptionKey:any;
  newOptionLabel:any;

  activeModelData: any;
  validations:any;
  required:any;
  openEdit:boolean = false;
  _id:any;

  // private modalRef: NgbModalRef;
  @ViewChild('content',{static:false}) myModal: ElementRef;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor(
    // private modalService: NgbModal
    ) { }

  ngOnInit() {

    this.options = [];
    this.validations = {}
  }



  loadFormElement(item) {


    console.log("item ---",  item);

     this.activeModelData = "";
    // this.activeModelData = data;

    this.label = item.label;
    this.type = item.type;
    this.placeholder = item.placeholder;
    this.options = item.options;
    this._id= item._id;
  



    // this.required = data

    this.required = this.field.validations.required;
    

    console.log( item.validations.required,"item.validations.required",this.required,"label",this.label);
    // console.log("label",this.label);

    this.openEdit = this.openEdit? false:true;
    // document.getElementById("openModalButton").click();
    // this.open(this.myModal);
    // this.myModal.show();
    // this.myModal.nativeElement.className = 'modal fade show';

  }

  saveEdit() {
  }
  closeModel(action) {

    if (action == "save") {



      console.log("this.field",this.required);
      // this.modalReference.close();


      // this.activeModelData.field = this.field.field;
      
      // this.activeModelData.label = this.label;
      // this.activeModelData.type = this.type;
      // this.activeModelData.placeholder = this.placeholder;
      // this.activeModelData.options = this.options;

      let obj={
        label:this.label,
        type:this.type,
        placeholder:this.placeholder,
        options:this.options,
        validations:this.validations,
        field:this.field,
        _id:this._id
      }

      console.log("obj",obj);


      this.sendDataToParent.emit(JSON.stringify(obj));

      
      // this.field.label = this.label;


      this.field.label = this.label;
      this.field.type = this.type;
      this.field.placeholder = this.placeholder;
      this.field.options = this.options;

      // this.field.validations

      console.log(" this.field.validations.required", this.field.validations.required,"sdds",this.required);
      this.field.validations.required = this.required;

      // console.log(" this.field", this.field);
   this.openEdit =false;
      
      // this.sendDataToParent.emit(this.activeModelData);

    } else {

      this.openEdit =false;
      // this.modalReference.close();
    }

    // this.modalService.close();
    //  this.myModal.nativeElement.className = 'modal hide';
  }

  open(content) {



    // console.log(" this.activeModelData", selectedData);
    // this.modalReference = this.modalService.open(content);
    // this.modalReference.result.then((result) => {
    //   this.closeResult = `Closed with`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed`;
    // });
  }

  // private getDismissReason(reason: any): string {
  //   // if (reason === ModalDismissReasons.ESC) {
  //   //   return 'by pressing ESC';
  //   // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //   //   return 'by clicking on a backdrop';
  //   // } else {
  //   //   return `with: ${reason}`;
  //   // }
  // }

  AddNewOptions(){

    if(this.newOptionKey!="" && this.newOptionLabel!="" ){

      console.log("this.newOption",this.newOptionLabel);

      if(Array.isArray(this.options)){
        
      }else{
        this.options = [];
      }
      this.options.push({
        key:this.newOptionKey,
        label:this.newOptionLabel
      });

      console.log("this.options.push",this.options);
    }
    this.newOptionKey="";
    this.newOptionLabel = "";
  }

  copyElement(item){
    // this.field.push(item);
    item.action='copy';
    this.copyOrDeleteEvent.emit(item);
    console.log("field",item);
  }
  deleteElement(item){

    item.action='delete';
    this.field.isDelete = true;
    this.copyOrDeleteEvent.emit(item);
    console.log("field delete",this.field);

  }
}

