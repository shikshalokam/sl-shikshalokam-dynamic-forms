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
// import {  } from '@angular/cdk/'
var DynamicFormBuilderModule = /** @class */ (function () {
    function DynamicFormBuilderModule() {
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
                        DragDropModule
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
                        SliderComponent
                    ],
                    exports: [DynamicFormBuilderComponent],
                    providers: []
                },] },
    ];
    return DynamicFormBuilderModule;
}());
export { DynamicFormBuilderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFDLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUlqRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBUSxFQUNOLGVBQWUsRUFDZixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsZUFBZSxFQUNmLGVBQWUsRUFDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBS3hEO0lBQUE7SUErQndDLENBQUM7O2dCQS9CeEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsd0JBQXdCO3dCQUN4QixjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDWiwyQkFBMkI7d0JBQzNCLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZUFBZTtxQkFFaEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQ3RDLFNBQVMsRUFBRSxFQUFFO2lCQUNkOztJQUN1QywrQkFBQztDQUFBLEFBL0J6QyxJQStCeUM7U0FBNUIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtYnVpbGRlci9maWVsZC1idWlsZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy90ZXh0Ym94JztcbmltcG9ydCB7IERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy9kcm9wZG93bic7XG5pbXBvcnQgeyBGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy9maWxlJztcbmltcG9ydCB7IENoZWNrQm94Q29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy9jaGVja2JveCc7XG5pbXBvcnQgeyBSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vYXRvbXMvcmFkaW8nO1xuaW1wb3J0IHsgRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vYXRvbXMvZGF0ZSc7XG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL2F0b21zL3NsaWRlcic7XG5cbi8vIGltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG4vLyBpbXBvcnQgeyBOZ0RyYWdEcm9wTW9kdWxlIH0gZnJvbSAnbmctZHJhZy1kcm9wJztcbi8vIGltcG9ydCB7IERyYWdBbmREcm9wTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlJztcbmltcG9ydCB7IEFuZ3VsYXJGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZm9udC1hd2Vzb21lJztcbmltcG9ydCAge1xuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlICxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xuXG4vLyBpbXBvcnQgeyAgfSBmcm9tICdAYW5ndWxhci9jZGsvJ1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAvLyBNYXRJY29uTW9kdWxlXG4gICAgQW5ndWxhckZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIERyYWdEcm9wTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCxcbiAgICBGaWVsZEJ1aWxkZXJDb21wb25lbnQsXG4gICAgVGV4dEJveENvbXBvbmVudCxcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcbiAgICBDaGVja0JveENvbXBvbmVudCxcbiAgICBGaWxlQ29tcG9uZW50LFxuICAgIFJhZGlvQ29tcG9uZW50LFxuICAgIERhdGVDb21wb25lbnQsXG4gICAgU2xpZGVyQ29tcG9uZW50XG4gICAgXG4gIF0sXG4gIGV4cG9ydHM6IFtEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQnVpbGRlck1vZHVsZSB7IH1cbiJdfQ==