import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


// components
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './atoms/textbox';
import { DropDownComponent } from './atoms/dropdown';
import { FileComponent } from './atoms/file';
import { CheckBoxComponent } from './atoms/checkbox';
import { RadioComponent } from './atoms/radio';
import { DateComponent } from './atoms/date';
import { SliderComponent } from './atoms/slider';

// import {MatIconModule} from '@angular/material/icon';
// import { NgDragDropModule } from 'ng-drag-drop';
// import { DragAndDropModule } from 'angular-draggable-droppable';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import  {
  MatButtonModule,
  MatRadioModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule ,
  MatSliderModule,
  MatSelectModule
} from '@angular/material';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MultiSelectComponent } from './atoms/multi-select';
import { DndModule } from 'ngx-drag-drop';


import {  DynamicFormBuilderService } from '../dynamic-form-builder.service'

// import {  } from '@angular/cdk/'




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    // MatIconModule
    AngularFontAwesomeModule,
    DragDropModule,
    DndModule
  ],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    FileComponent,
    RadioComponent,
    DateComponent,
    SliderComponent,
    MultiSelectComponent
    
  ],
  exports: [DynamicFormBuilderComponent],
  providers: [DynamicFormBuilderService]
})
export class DynamicFormBuilderModule { }
