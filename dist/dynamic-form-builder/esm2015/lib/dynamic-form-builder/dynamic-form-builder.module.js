/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/dynamic-form-builder.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { MatButtonModule, MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatSelectModule } from '@angular/material';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MultiSelectComponent } from './atoms/multi-select';
import { DndModule } from 'ngx-drag-drop';
import { DynamicFormBuilderService } from '../dynamic-form-builder.service';
// import {  } from '@angular/cdk/'
export class DynamicFormBuilderModule {
}
DynamicFormBuilderModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFDLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUlqRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBUSxFQUNOLGVBQWUsRUFDZixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsZUFBZSxFQUNmLGVBQWUsRUFDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUcseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTs7QUFxQzVFLE1BQU0sT0FBTyx3QkFBd0I7OztZQWpDcEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxlQUFlO29CQUNmLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsd0JBQXdCO29CQUN4QixjQUFjO29CQUNkLFNBQVM7aUJBQ1Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLDJCQUEyQjtvQkFDM0IscUJBQXFCO29CQUNyQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixlQUFlO29CQUNmLG9CQUFvQjtpQkFFckI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtYnVpbGRlci9maWVsZC1idWlsZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy90ZXh0Ym94JztcbmltcG9ydCB7IERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy9kcm9wZG93bic7XG5pbXBvcnQgeyBGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy9maWxlJztcbmltcG9ydCB7IENoZWNrQm94Q29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy9jaGVja2JveCc7XG5pbXBvcnQgeyBSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vYXRvbXMvcmFkaW8nO1xuaW1wb3J0IHsgRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vYXRvbXMvZGF0ZSc7XG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL2F0b21zL3NsaWRlcic7XG5cbi8vIGltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG4vLyBpbXBvcnQgeyBOZ0RyYWdEcm9wTW9kdWxlIH0gZnJvbSAnbmctZHJhZy1kcm9wJztcbi8vIGltcG9ydCB7IERyYWdBbmREcm9wTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlJztcbmltcG9ydCB7IEFuZ3VsYXJGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZm9udC1hd2Vzb21lJztcbmltcG9ydCAge1xuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlICxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xuaW1wb3J0IHsgTXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2F0b21zL211bHRpLXNlbGVjdCc7XG5pbXBvcnQgeyBEbmRNb2R1bGUgfSBmcm9tICduZ3gtZHJhZy1kcm9wJztcblxuaW1wb3J0IHsgIER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWZvcm0tYnVpbGRlci5zZXJ2aWNlJ1xuLy8gaW1wb3J0IHsgIH0gZnJvbSAnQGFuZ3VsYXIvY2RrLydcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgLy8gTWF0SWNvbk1vZHVsZVxuICAgIEFuZ3VsYXJGb250QXdlc29tZU1vZHVsZSxcbiAgICBEcmFnRHJvcE1vZHVsZSxcbiAgICBEbmRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50LFxuICAgIEZpZWxkQnVpbGRlckNvbXBvbmVudCxcbiAgICBUZXh0Qm94Q29tcG9uZW50LFxuICAgIERyb3BEb3duQ29tcG9uZW50LFxuICAgIENoZWNrQm94Q29tcG9uZW50LFxuICAgIEZpbGVDb21wb25lbnQsXG4gICAgUmFkaW9Db21wb25lbnQsXG4gICAgRGF0ZUNvbXBvbmVudCxcbiAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgTXVsdGlTZWxlY3RDb21wb25lbnRcbiAgICBcbiAgXSxcbiAgZXhwb3J0czogW0R5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0R5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQnVpbGRlck1vZHVsZSB7IH1cbiJdfQ==