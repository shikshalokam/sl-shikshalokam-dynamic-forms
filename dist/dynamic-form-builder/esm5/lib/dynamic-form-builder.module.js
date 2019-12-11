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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7QUFJOUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFPeEQsT0FBUSxFQUFFLGVBQWUsRUFBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFDL0QsYUFBYSxFQUFFLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFBO0FBRTFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUM7SUFBQTtJQXdCQyxDQUFDOztnQkF4QkQsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUMzQyxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixZQUFZO3dCQUNYLG1CQUFtQjt3QkFDcEIsd0JBQXdCO3dCQUN4QixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsMEJBQTBCO3dCQUMxQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsU0FBUzt3QkFDVCxlQUFlO3dCQUNmLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3ZDOztJQUlBLGdDQUFDO0NBQUEsQUF4QkYsSUF3QkU7U0FIVyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLWZvcm0tYnVpbGRlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBpbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG4vLyBkeW5hbWljIGZvcm0gYnVpbGRlclxuaW1wb3J0IHsgRHluYW1pY0Zvcm1CdWlsZGVyTW9kdWxlIH0gZnJvbSAnLi9keW5hbWljLWZvcm0tYnVpbGRlci9keW5hbWljLWZvcm0tYnVpbGRlci5tb2R1bGUnO1xuLy8gaW1wb3J0IHt9IGZyb20gJy4vJ1xuXG4vLyBpbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gaW1wb3J0IHsgTmdEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ25nLWRyYWctZHJvcCc7XG4vLyBpbXBvcnQgeyBEcmFnQW5kRHJvcE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZSc7XG5cblxuLy8gaW1wb3J0IHsgRHJhZ3VsYU1vZHVsZSB9IGZyb20gJ25nMi1kcmFndWxhJztcblxuaW1wb3J0ICB7IE1hdEJ1dHRvbk1vZHVsZSxNYXREYXRlcGlja2VyTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIE1hdFRhYnNNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnXG5cbmltcG9ydCB7IERuZE1vZHVsZSB9IGZyb20gJ25neC1kcmFnLWRyb3AnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0R5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICAvLyBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBEeW5hbWljRm9ybUJ1aWxkZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICAvLyBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAgIC8vIERyYWd1bGFNb2R1bGUuZm9yUm9vdCgpXG4gICAgLy8gRHJhZ0FuZERyb3BNb2R1bGVcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRG5kTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQnVpbGRlck1vZHVsZTEge1xuXG5cbiB9XG4iXX0=