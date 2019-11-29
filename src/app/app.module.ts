import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



// dynamic form builder

// import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';

// import {} from './'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { NgDragDropModule } from 'ng-drag-drop';
// import { DragAndDropModule } from 'angular-draggable-droppable';


// import { DragulaModule } from 'ng2-dragula';


// import  { MyLibModule } from 'dist/my-lib'
import { DndModule } from 'ngx-drag-drop';

import { LibComponent } from 'src/app/lib.component';

import  { DynamicFormBuilderModule1 } from 'dynamic-form-builder';




@NgModule({
  imports:      [ BrowserModule,
     ReactiveFormsModule,
    // DynamicFormBuilderModule,
    HttpClientModule,
    // NgbModule.forRoot(),
    // DragulaModule.forRoot()
    // DragAndDropModule
    DndModule,
    // MyLibModule,
    DynamicFormBuilderModule1
  ],
  declarations: [ LibComponent ],
  bootstrap:    [ LibComponent ]
  // declarations: [ AppComponent ],
  // bootstrap:    [ AppComponent ]
})
export class AppModule { }
