/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUMsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSWpFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUtqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFRLEVBQ04sZUFBZSxFQUNmLGNBQWMsRUFDZCxtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsZUFBZSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRyx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFBOztBQXdDNUUsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBakNwQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQix3QkFBd0I7b0JBQ3hCLGNBQWM7b0JBQ2QsU0FBUztpQkFDVjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osMkJBQTJCO29CQUMzQixxQkFBcUI7b0JBQ3JCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxhQUFhO29CQUNiLGVBQWU7b0JBQ2Ysb0JBQW9CO2lCQUVyQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLWZvcm0tYnVpbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRCdWlsZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRCb3hDb21wb25lbnQgfSBmcm9tICcuL2F0b21zL3RleHRib3gnO1xuaW1wb3J0IHsgRHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuL2F0b21zL2Ryb3Bkb3duJztcbmltcG9ydCB7IEZpbGVDb21wb25lbnQgfSBmcm9tICcuL2F0b21zL2ZpbGUnO1xuaW1wb3J0IHsgQ2hlY2tCb3hDb21wb25lbnQgfSBmcm9tICcuL2F0b21zL2NoZWNrYm94JztcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy9yYWRpbyc7XG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9hdG9tcy9kYXRlJztcbmltcG9ydCB7IFNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vYXRvbXMvc2xpZGVyJztcblxuLy8gaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbi8vIGltcG9ydCB7IE5nRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tICduZy1kcmFnLWRyb3AnO1xuLy8gaW1wb3J0IHsgRHJhZ0FuZERyb3BNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUnO1xuaW1wb3J0IHsgQW5ndWxhckZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1mb250LWF3ZXNvbWUnO1xuaW1wb3J0ICB7XG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUgLFxuICBNYXRTbGlkZXJNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XG5pbXBvcnQgeyBNdWx0aVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vYXRvbXMvbXVsdGktc2VsZWN0JztcbmltcG9ydCB7IERuZE1vZHVsZSB9IGZyb20gJ25neC1kcmFnLWRyb3AnO1xuXG5cbmltcG9ydCB7ICBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZSdcblxuLy8gaW1wb3J0IHsgIH0gZnJvbSAnQGFuZ3VsYXIvY2RrLydcblxuXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIC8vIE1hdEljb25Nb2R1bGVcbiAgICBBbmd1bGFyRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gICAgRG5kTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCxcbiAgICBGaWVsZEJ1aWxkZXJDb21wb25lbnQsXG4gICAgVGV4dEJveENvbXBvbmVudCxcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcbiAgICBDaGVja0JveENvbXBvbmVudCxcbiAgICBGaWxlQ29tcG9uZW50LFxuICAgIFJhZGlvQ29tcG9uZW50LFxuICAgIERhdGVDb21wb25lbnQsXG4gICAgU2xpZGVyQ29tcG9uZW50LFxuICAgIE11bHRpU2VsZWN0Q29tcG9uZW50XG4gICAgXG4gIF0sXG4gIGV4cG9ydHM6IFtEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUJ1aWxkZXJNb2R1bGUgeyB9XG4iXX0=