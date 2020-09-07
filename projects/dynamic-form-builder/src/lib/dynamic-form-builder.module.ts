import { NgModule } from '@angular/core';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';

import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// dynamic form builder
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
// import {} from './'

// import { FormComponent } from './form.component';
import { HttpClientModule } from '@angular/common/http';
// import { NgDragDropModule } from 'ng-drag-drop';
// import { DragAndDropModule } from 'angular-draggable-droppable';


// import { DragulaModule } from 'ng2-dragula';

import  { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { DndModule } from 'ngx-drag-drop';


@NgModule({
  declarations: [DynamicFormBuilderComponent],
  imports: [
    // BrowserModule,
    CommonModule,
     ReactiveFormsModule,
    DynamicFormBuilderModule,
    HttpClientModule,
    // NgbModule.forRoot(),
    // DragulaModule.forRoot(),
    // DragAndDropModule,
    DndModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  exports: [DynamicFormBuilderComponent]
})
export class DynamicFormBuilderModule1 {


 }
