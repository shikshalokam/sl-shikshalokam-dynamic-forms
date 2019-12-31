import { NgModule } from '@angular/core';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';

import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// dynamic form builder
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
// import {} from './'

// import { FormComponent } from './form.component';
import { HttpClientModule } from '@angular/common/http';
// import { NgDragDropModule } from 'ng-drag-drop';
// import { DragAndDropModule } from 'angular-draggable-droppable';


// import { DragulaModule } from 'ng2-dragula';
// 
// import  {  } from ''
// import { ConfirmationComponent} from './common/confirmation/confirmation.component';

// import  { MatButtonModule,MatDatepickerModule, MatDialogModule, MatFormFieldModule,
//   MatTabsModule, MatSelectModule} from '@angular/material'

  import { MatTooltipModule,MatTabsModule,MatRadioModule,MatCardModule,
    MatDialogModule, MatButtonModule, MatStepperModule, MatFormFieldModule, 
    MatInputModule, MatSelectModule,MatTableModule,MatExpansionModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule
   } from '@angular/material';

import { DndModule } from 'ngx-drag-drop';


@NgModule({
  declarations: [DynamicFormBuilderComponent],
  imports: [
    // BrowserModule,
    CommonModule,
     ReactiveFormsModule,
    DynamicFormBuilderModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatTooltipModule,MatTabsModule,MatRadioModule,MatCardModule,
    MatTableModule,MatExpansionModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatInputModule,
    MatStepperModule,
    // NgbModule.forRoot(),
    // DragulaModule.forRoot()
    // DragAndDropModule
    MatFormFieldModule,
    DndModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  entryComponents: [],
  exports: [DynamicFormBuilderComponent]
})
export class DynamicFormBuilderModule1 {


 }
