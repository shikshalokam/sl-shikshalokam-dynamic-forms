/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7OztBQUk5RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBU3hELE9BQVEsRUFBRSxlQUFlLEVBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQy9ELGFBQWEsRUFBRSxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDO0lBQUE7SUF3QkMsQ0FBQzs7Z0JBeEJELFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDM0MsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWCxtQkFBbUI7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN2Qzs7SUFJQSxnQ0FBQztDQUFBLEFBeEJGLElBd0JFO1NBSFcseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIGltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuLy8gZHluYW1pYyBmb3JtIGJ1aWxkZXJcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlck1vZHVsZSB9IGZyb20gJy4vZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlJztcbi8vIGltcG9ydCB7fSBmcm9tICcuLydcblxuLy8gaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGltcG9ydCB7IE5nRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tICduZy1kcmFnLWRyb3AnO1xuLy8gaW1wb3J0IHsgRHJhZ0FuZERyb3BNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUnO1xuXG5cbi8vIGltcG9ydCB7IERyYWd1bGFNb2R1bGUgfSBmcm9tICduZzItZHJhZ3VsYSc7XG4vLyBcbi8vIGltcG9ydCAgeyAgfSBmcm9tICcnXG5cbmltcG9ydCAgeyBNYXRCdXR0b25Nb2R1bGUsTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBNYXRUYWJzTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJ1xuXG5pbXBvcnQgeyBEbmRNb2R1bGUgfSBmcm9tICduZ3gtZHJhZy1kcm9wJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgLy8gQnJvd3Nlck1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRHluYW1pY0Zvcm1CdWlsZGVyTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgLy8gTmdiTW9kdWxlLmZvclJvb3QoKSxcbiAgICAvLyBEcmFndWxhTW9kdWxlLmZvclJvb3QoKVxuICAgIC8vIERyYWdBbmREcm9wTW9kdWxlXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIERuZE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUJ1aWxkZXJNb2R1bGUxIHtcblxuXG4gfVxuIl19