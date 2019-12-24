/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatTabsModule, MatSelectModule } from '@angular/material';
import { DndModule } from 'ngx-drag-drop';
var DynamicFormBuilderModule1 = /** @class */ (function () {
    function DynamicFormBuilderModule1() {
    }
    DynamicFormBuilderModule1.decorators = [
        { type: NgModule, args: [{
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
                        // NgbModule.forRoot(),
                        // DragulaModule.forRoot()
                        // DragAndDropModule
                        MatFormFieldModule,
                        DndModule,
                        MatButtonModule,
                        MatDatepickerModule
                    ],
                    exports: [DynamicFormBuilderComponent]
                },] },
    ];
    return DynamicFormBuilderModule1;
}());
export { DynamicFormBuilderModule1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7QUFJOUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQVN4RCxPQUFRLEVBQUUsZUFBZSxFQUFDLG1CQUFtQixFQUFFLGtCQUFrQixFQUMvRCxhQUFhLEVBQUUsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUE7QUFFMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxQztJQUFBO0lBd0JDLENBQUM7O2dCQXhCRCxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQzNDLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1gsbUJBQW1CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QiwwQkFBMEI7d0JBQzFCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixTQUFTO3dCQUNULGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDdkM7O0lBSUEsZ0NBQUM7Q0FBQSxBQXhCRixJQXdCRTtTQUhXLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIGltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbi8vIGR5bmFtaWMgZm9ybSBidWlsZGVyXG5pbXBvcnQgeyBEeW5hbWljRm9ybUJ1aWxkZXJNb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtZm9ybS1idWlsZGVyL2R5bmFtaWMtZm9ybS1idWlsZGVyLm1vZHVsZSc7XG4vLyBpbXBvcnQge30gZnJvbSAnLi8nXG5cbi8vIGltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2Zvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBpbXBvcnQgeyBOZ0RyYWdEcm9wTW9kdWxlIH0gZnJvbSAnbmctZHJhZy1kcm9wJztcbi8vIGltcG9ydCB7IERyYWdBbmREcm9wTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlJztcblxuXG4vLyBpbXBvcnQgeyBEcmFndWxhTW9kdWxlIH0gZnJvbSAnbmcyLWRyYWd1bGEnO1xuLy8gXG4vLyBpbXBvcnQgIHsgIH0gZnJvbSAnJ1xuXG5pbXBvcnQgIHsgTWF0QnV0dG9uTW9kdWxlLE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgTWF0VGFic01vZHVsZSwgTWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCdcblxuaW1wb3J0IHsgRG5kTW9kdWxlIH0gZnJvbSAnbmd4LWRyYWctZHJvcCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIC8vIEJyb3dzZXJNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIER5bmFtaWNGb3JtQnVpbGRlck1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIC8vIE5nYk1vZHVsZS5mb3JSb290KCksXG4gICAgLy8gRHJhZ3VsYU1vZHVsZS5mb3JSb290KClcbiAgICAvLyBEcmFnQW5kRHJvcE1vZHVsZVxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBEbmRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0R5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyTW9kdWxlMSB7XG5cblxuIH1cbiJdfQ==