import { Component, Input, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'field-builder',
  template: `
  <div  *ngIf="openEdit" style="padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);">

  <div class="form-group">
      <label for="lable">Label</label>
        <div class="input-group">
        <input type="text" class="form-control" [(ngModel)]="label" name="lable">
        </div>
      </div>
      <div class="form-group">
      <label for="lable">Input Place Holder</label>
        <div class="input-group">
        <input type="text" class="form-control" [(ngModel)]="placeholder" name="placeholder">
        </div>
      </div>
      <div class="form-group">
    <label for="lable">Input Type</label>
      <select class="form-control" [(ngModel)]="type" name="type">
        <option value="text">text</option>
        <option value="number">number</option>
        <option value="radio">radio</option>
      </select>
    </div>
    <div class="form-group" *ngIf="type=='radio'">
    <label for="lable">Options</label>
    
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

    <div class="custom-control custom-radio">
  <input type="checkbox" class="custom-control-input"  [(ngModel)]="required"  id=" " name="defaultExampleRadios">
  <label class="custom-control-label" for="defaultChecked">is Reqired ?</label>
</div>
  
<div  class="col-sm-12">
<button type="button" class="btn btn-outline-dark" (click)="closeModel('save')">Save</button>
</div>
  </div>
  <div class="form-group row" [formGroup]="form" style="background:#f4f4f4;padding:20px;margin:0px;margin-top:10px;">
  
  


  <div class="col-sm-2 edit-icon" ><i class="fa fa-edit" (click)="loadFormElement(field)"  data-toggle="collapse" data-target="#demo"></i></div>
    <label class="col-md-12 form-control-label" [attr.for]="field.label">
      {{field.label}}
      <strong class="text-danger" *ngIf="field.required">*</strong>
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
       </div>
  

  <button class="btn btn-lg btn-outline-primary" id="openModalButton" [hidden]="true" (click)="open(content)">dm</button>
  <ng-template #content let-modal>
  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Edit Fields</h4>
    <button type="button" class="close" aria-label="Close" (click)="closeModel('close')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
      <div class="form-group">
      <label for="lable">Label</label>
        <div class="input-group">
        <input type="text" class="form-control" [(ngModel)]="label" name="lable">
        </div>
      </div>
      <div class="form-group">
      <label for="lable">Input Place Holder</label>
        <div class="input-group">
        <input type="text" class="form-control" [(ngModel)]="placeholder" name="placeholder">
        </div>
      </div>
      <div class="form-group">
    <label for="lable">Input Type</label>
      <select class="form-control" [(ngModel)]="type" name="type">
        <option value="text">text</option>
        <option value="number">number</option>
        <option value="radio">radio</option>
      </select>
    </div>
    <div class="form-group" *ngIf="type=='radio'">
    <label for="lable">Options</label>
    
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


<div class="custom-control custom-radio">
  <input type="checkbox" class="custom-control-input"  [(ngModel)]="required"  id="defaultChecked" name="defaultExampleRadios">
  <label class="custom-control-label" for="defaultChecked">is Reqired ?</label>
</div>
    
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="closeModel('save')">Save</button>
  </div>
</ng-template>`,
styleUrls: ['./field-builder.component.css']
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


    // console.log("form --data",  item.validations.required);

    // this.activeModelData = "";
    // this.activeModelData = data;

    this.label = item.label;
    // if(item.validations.required){
    //   this.type = 
    // }
    this.type = item.validations.required;
    this.placeholder = item.placeholder;
    this.options = item.options;



    // this.required = data

    this.required = this.field.validations.required;
    

    console.log( item.validations.required,"item.validations.required",this.required,"lable",this.label);
    // console.log("lable",this.label);

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
        lable:this.label,
        type:this.type,
        placeholder:this.placeholder,
        options:this.options,
        validations:this.validations
      }


      this.sendDataToParent.emit(this.activeModelData);

      
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
    this.copyOrDeleteEvent.emit(item);
    console.log("field",item);

  }
}

