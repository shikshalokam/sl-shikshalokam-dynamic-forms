/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/dynamic-form-builder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
export class DynamicFormBuilderComponent {
    constructor() {
        this.onFieldUpdate = new EventEmitter();
        this.fields = [];
        this.formData = [];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    copyOrDeleteEvent(data) {
        /** @type {?} */
        let obj = data;
        console.log(data, "copyEvent occured");
        // data.field =(this.fields.length+1)+"question";
        // data.label = (this.fields.length+1)+" question";
        if (data.action == "copy") {
            console.log(data, "this.form before");
            /** @type {?} */
            let transferData = {
                action: "copy",
                data: data
            };
            this.onFieldUpdate.emit(transferData);
            //  data.field = (this.fields.length+1)+"question";
            //  console.log("data",data)
            // this.formBuild(obj);
        }
        else if (data.action = "delete") {
            /** @type {?} */
            var index = this.fields.indexOf(data);
            console.log("ind", index);
            this.onFieldUpdate.emit(data);
            // this.fields.splice(index, 1);
            // this.fields = this.fields.filter(function(value, index, arr){
            //   return value!=data;
            // });
            // console.log("evens",evens);
            // this.fields= evens;
            // console.log("this.form",this.form);
            // this.fields.
            // console.log(this.fields.length,"copyEvent occured",evens);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    eventFromChild(data) {
        this.onFieldUpdate.emit(data);
        console.log("data from child  ------- ", data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formData = this.fields;
        console.log("this.form ---", this.form);
        // this.formBuild();
    }
}
DynamicFormBuilderComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-form-builder',
                template: `
   
     <div cdkDropList (cdkDropListDropped)="drop($event)"> <div *ngFor="let field of fields"  cdkDrag>
          <field-builder *ngIf="!field.isDeleted" [field]="field" [form]="form"  (sendDataToParent)="eventFromChild($event)" (copyOrDeleteEvent)="copyOrDeleteEvent($event)"></field-builder>
      </div></div>`,
            },] },
];
/** @nocollapse */
DynamicFormBuilderComponent.ctorParameters = () => [];
DynamicFormBuilderComponent.propDecorators = {
    onFieldUpdate: [{ type: Output }],
    fields: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.onFieldUpdate;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.fields;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.form;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.formData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFVcEUsTUFBTSxPQUFPLDJCQUEyQjtJQU10QztRQUxVLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBRzVCLGFBQVEsR0FBTyxFQUFFLENBQUM7SUFDRixDQUFDOzs7OztJQUdqQixJQUFJLENBQUMsS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFJOztZQUVoQixHQUFHLEdBQUcsSUFBSTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFdEMsaURBQWlEO1FBQ2pELG1EQUFtRDtRQUVuRCxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUUsTUFBTSxFQUFDO1lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLGtCQUFrQixDQUFDLENBQUM7O2dCQUVsQyxZQUFZLEdBQUk7Z0JBQ2pCLE1BQU0sRUFBQyxNQUFNO2dCQUNiLElBQUksRUFBQyxJQUFJO2FBQ1Y7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV4QyxtREFBbUQ7WUFFbkQsNEJBQTRCO1lBQzFCLHVCQUF1QjtTQUV4QjthQUFLLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxRQUFRLEVBQUM7O2dCQUV4QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXpCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLGdDQUFnQztZQUloQyxnRUFBZ0U7WUFDaEUsd0JBQXdCO1lBQ3hCLE1BQU07WUFJTiw4QkFBOEI7WUFDOUIsc0JBQXNCO1lBQ3RCLHNDQUFzQztZQUN0QyxlQUFlO1lBQ2YsNkRBQTZEO1NBQzlEO0lBRUgsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBSTtRQUVqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxvQkFBb0I7SUFDdEIsQ0FBQzs7O1lBcEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUM7Ozs7bUJBSVE7YUFDbEI7Ozs7OzRCQUVFLE1BQU07cUJBQ04sS0FBSzttQkFFTCxLQUFLOzs7O0lBSE4sb0RBQTZDOztJQUM3Qyw2Q0FBNEI7O0lBRTVCLDJDQUFrQjs7SUFDbEIsK0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5bmFtaWMtZm9ybS1idWlsZGVyJyxcbiAgdGVtcGxhdGU6YFxuICAgXG4gICAgIDxkaXYgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj4gPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzXCIgIGNka0RyYWc+XG4gICAgICAgICAgPGZpZWxkLWJ1aWxkZXIgKm5nSWY9XCIhZmllbGQuaXNEZWxldGVkXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiICAoc2VuZERhdGFUb1BhcmVudCk9XCJldmVudEZyb21DaGlsZCgkZXZlbnQpXCIgKGNvcHlPckRlbGV0ZUV2ZW50KT1cImNvcHlPckRlbGV0ZUV2ZW50KCRldmVudClcIj48L2ZpZWxkLWJ1aWxkZXI+XG4gICAgICA8L2Rpdj48L2Rpdj5gLCBcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIG9uRmllbGRVcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGZpZWxkczogYW55W10gPSBbXTtcbiAgLy8gZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBmb3JtOmFueTtcbiAgZm9ybURhdGE6YW55ID0gW107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5maWVsZHMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cblxuICBjb3B5T3JEZWxldGVFdmVudChkYXRhKXtcblxuICAgIGxldCBvYmogPSBkYXRhO1xuICAgIGNvbnNvbGUubG9nKGRhdGEsXCJjb3B5RXZlbnQgb2NjdXJlZFwiKTtcblxuICAgIC8vIGRhdGEuZmllbGQgPSh0aGlzLmZpZWxkcy5sZW5ndGgrMSkrXCJxdWVzdGlvblwiO1xuICAgIC8vIGRhdGEubGFiZWwgPSAodGhpcy5maWVsZHMubGVuZ3RoKzEpK1wiIHF1ZXN0aW9uXCI7XG5cbiAgICBpZihkYXRhLmFjdGlvbj09XCJjb3B5XCIpe1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLFwidGhpcy5mb3JtIGJlZm9yZVwiKTtcblxuICAgICBsZXQgdHJhbnNmZXJEYXRhID0gIHtcbiAgICAgICAgYWN0aW9uOlwiY29weVwiLFxuICAgICAgICBkYXRhOmRhdGFcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQodHJhbnNmZXJEYXRhKTtcbiAgICAgIFxuICAgIC8vICBkYXRhLmZpZWxkID0gKHRoaXMuZmllbGRzLmxlbmd0aCsxKStcInF1ZXN0aW9uXCI7XG5cbiAgICAvLyAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YSlcbiAgICAgIC8vIHRoaXMuZm9ybUJ1aWxkKG9iaik7XG5cbiAgICB9ZWxzZSBpZihkYXRhLmFjdGlvbj1cImRlbGV0ZVwiKXtcblxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5maWVsZHMuaW5kZXhPZihkYXRhKTtcblxuICAgICAgY29uc29sZS5sb2coXCJpbmRcIixpbmRleCk7XG4gICAgICBcbiAgICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KGRhdGEpO1xuXG4gICAgICAvLyB0aGlzLmZpZWxkcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICBcblxuICAgICAgLy8gdGhpcy5maWVsZHMgPSB0aGlzLmZpZWxkcy5maWx0ZXIoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBhcnIpe1xuICAgICAgLy8gICByZXR1cm4gdmFsdWUhPWRhdGE7XG4gICAgICAvLyB9KTtcbiAgICAgXG5cbiAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXZlbnNcIixldmVucyk7XG4gICAgICAvLyB0aGlzLmZpZWxkcz0gZXZlbnM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuZm9ybVwiLHRoaXMuZm9ybSk7XG4gICAgICAvLyB0aGlzLmZpZWxkcy5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmllbGRzLmxlbmd0aCxcImNvcHlFdmVudCBvY2N1cmVkXCIsZXZlbnMpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGV2ZW50RnJvbUNoaWxkKGRhdGEpe1xuXG4gICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQoZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gY2hpbGQgIC0tLS0tLS0gXCIsZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZm9ybURhdGEgPSB0aGlzLmZpZWxkcztcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtIC0tLVwiLHRoaXMuZm9ybSlcbiAgICAvLyB0aGlzLmZvcm1CdWlsZCgpO1xuICB9XG5cbi8vICAgZm9ybUJ1aWxkKGl0ZW0pe1xuLy8gICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuXG4vLyAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG5cbi8vICAgICAvLyB2YXIgZm9ybURhdGEgPSB0aGlzLmZpZWxkcztcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5maWVsZHNcIix0aGlzLmZpZWxkcyk7IFxuXG4vLyAgICAgbGV0IGxlbiA9IHRoaXMuZmllbGRzLmxlbmd0aCArIDE7XG5cblxuLy8gICAgIHZhciBvYmogPSB7XG4vLyAgICAgICBcInBvc2l0aW9uXCI6bGVuLFxuLy8gICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4vLyAgICAgICBcInR5cGVcIjogaXRlbS50eXBlLFxuLy8gICAgICAgXCJsYWJlbFwiOiBpdGVtLmxhYmVsLFxuLy8gICAgICAgXCJwbGFjZWhvbGRlclwiOiBpdGVtLnBsYWNlaG9sZGVyLFxuLy8gICAgICAgXCJ2YWxpZGF0aW9uc1wiOml0ZW0udmFsaWRhdGlvbnMgIFxuXG4vLyAgICAgfVxuICAgXG4vLyAgICAgdGhpcy5maWVsZHMucHVzaChvYmopO1xuLy8gICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbihmKXtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcImYudHlwZVwiLCBmKTtcblxuLy8gICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuICAgXG4vLyAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuLy8gICAgIH0gZWxzZSB7XG5cbi8vICAgICAgIGxldCBvcHRzID0ge307XG4vLyAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG5cbi8vICAgICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQubGFiZWwpO1xuLy8gICAgICAgfVxuLy8gICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4vLyAgICAgfVxuLy8gICB9KTtcblxuLy8gICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhcImZpZWxkc0N0cmxzXCIsZmllbGRzQ3RybHMpO1xuLy8gfVxufVxuIl19