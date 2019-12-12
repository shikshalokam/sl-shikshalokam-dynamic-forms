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
        console.log('data type', typeof (data));
        if (typeof (data) === 'string') {
            data = JSON.parse(data);
            console.log('inside string');
        }
        // let childdata = data;
        // let finaldata = JSON.parse(childdata);
        // console.log(JSON.parse(data),"parse copyEvent occured");
        // let obj = data;
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
        else if (data.action == "delete") {
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
        else if (data.action == "childDroped") {
            this.onFieldUpdate.emit(data);
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
          <field-builder *ngIf="!field.isDeleted" [field]="field" [form]="form"  
          (sendDataToParent)="eventFromChild($event)" (copyOrDeleteEvent)="copyOrDeleteEvent($event)">
          </field-builder>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFZcEUsTUFBTSxPQUFPLDJCQUEyQjtJQU10QztRQUxVLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBRzVCLGFBQVEsR0FBTyxFQUFFLENBQUM7SUFDRixDQUFDOzs7OztJQUdqQixJQUFJLENBQUMsS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFJO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXZDLElBQUcsT0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsd0JBQXdCO1FBQ3hCLHlDQUF5QztRQUV6QywyREFBMkQ7UUFDM0Qsa0JBQWtCO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFdEMsaURBQWlEO1FBQ2pELG1EQUFtRDtRQUVuRCxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUUsTUFBTSxFQUFDO1lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLGtCQUFrQixDQUFDLENBQUM7O2dCQUVsQyxZQUFZLEdBQUk7Z0JBQ2pCLE1BQU0sRUFBQyxNQUFNO2dCQUNiLElBQUksRUFBQyxJQUFJO2FBQ1Y7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV4QyxtREFBbUQ7WUFFbkQsNEJBQTRCO1lBQzFCLHVCQUF1QjtTQUV4QjthQUFLLElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBRSxRQUFRLEVBQUM7O2dCQUV6QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXpCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLGdDQUFnQztZQUloQyxnRUFBZ0U7WUFDaEUsd0JBQXdCO1lBQ3hCLE1BQU07WUFJTiw4QkFBOEI7WUFDOUIsc0JBQXNCO1lBQ3RCLHNDQUFzQztZQUN0QyxlQUFlO1lBQ2YsNkRBQTZEO1NBQzlEO2FBQU0sSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFHLGFBQWEsRUFBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUVILENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQUk7UUFFakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUVOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsb0JBQW9CO0lBQ3RCLENBQUM7OztZQW5HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFDOzs7Ozs7bUJBTVE7YUFDbEI7Ozs7OzRCQUVFLE1BQU07cUJBQ04sS0FBSzttQkFFTCxLQUFLOzs7O0lBSE4sb0RBQTZDOztJQUM3Qyw2Q0FBNEI7O0lBRTVCLDJDQUFrQjs7SUFDbEIsK0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5bmFtaWMtZm9ybS1idWlsZGVyJyxcbiAgdGVtcGxhdGU6YFxuICAgXG4gICAgIDxkaXYgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj4gPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzXCIgIGNka0RyYWc+XG4gICAgICAgICAgPGZpZWxkLWJ1aWxkZXIgKm5nSWY9XCIhZmllbGQuaXNEZWxldGVkXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiICBcbiAgICAgICAgICAoc2VuZERhdGFUb1BhcmVudCk9XCJldmVudEZyb21DaGlsZCgkZXZlbnQpXCIgKGNvcHlPckRlbGV0ZUV2ZW50KT1cImNvcHlPckRlbGV0ZUV2ZW50KCRldmVudClcIj5cbiAgICAgICAgICA8L2ZpZWxkLWJ1aWxkZXI+XG4gICAgICA8L2Rpdj48L2Rpdj5gLCBcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIG9uRmllbGRVcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGZpZWxkczogYW55W10gPSBbXTtcbiAgLy8gZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBmb3JtOmFueTtcbiAgZm9ybURhdGE6YW55ID0gW107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5maWVsZHMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cblxuICBjb3B5T3JEZWxldGVFdmVudChkYXRhKXtcblxuICAgIGNvbnNvbGUubG9nKCdkYXRhIHR5cGUnLCB0eXBlb2YoZGF0YSkpO1xuXG4gICAgaWYodHlwZW9mKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSAgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBzdHJpbmcnKTtcbiAgICB9XG5cbiAgICAvLyBsZXQgY2hpbGRkYXRhID0gZGF0YTtcbiAgICAvLyBsZXQgZmluYWxkYXRhID0gSlNPTi5wYXJzZShjaGlsZGRhdGEpO1xuXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShkYXRhKSxcInBhcnNlIGNvcHlFdmVudCBvY2N1cmVkXCIpO1xuICAgIC8vIGxldCBvYmogPSBkYXRhO1xuICAgIGNvbnNvbGUubG9nKGRhdGEsXCJjb3B5RXZlbnQgb2NjdXJlZFwiKTtcblxuICAgIC8vIGRhdGEuZmllbGQgPSh0aGlzLmZpZWxkcy5sZW5ndGgrMSkrXCJxdWVzdGlvblwiO1xuICAgIC8vIGRhdGEubGFiZWwgPSAodGhpcy5maWVsZHMubGVuZ3RoKzEpK1wiIHF1ZXN0aW9uXCI7XG5cbiAgICBpZihkYXRhLmFjdGlvbj09XCJjb3B5XCIpe1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLFwidGhpcy5mb3JtIGJlZm9yZVwiKTtcblxuICAgICBsZXQgdHJhbnNmZXJEYXRhID0gIHtcbiAgICAgICAgYWN0aW9uOlwiY29weVwiLFxuICAgICAgICBkYXRhOmRhdGFcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQodHJhbnNmZXJEYXRhKTtcbiAgICAgIFxuICAgIC8vICBkYXRhLmZpZWxkID0gKHRoaXMuZmllbGRzLmxlbmd0aCsxKStcInF1ZXN0aW9uXCI7XG5cbiAgICAvLyAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YSlcbiAgICAgIC8vIHRoaXMuZm9ybUJ1aWxkKG9iaik7XG5cbiAgICB9ZWxzZSBpZihkYXRhLmFjdGlvbj09XCJkZWxldGVcIil7XG5cbiAgICAgIHZhciBpbmRleCA9IHRoaXMuZmllbGRzLmluZGV4T2YoZGF0YSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiaW5kXCIsaW5kZXgpO1xuICAgICAgXG4gICAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdChkYXRhKTtcblxuICAgICAgLy8gdGhpcy5maWVsZHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgXG5cbiAgICAgIC8vIHRoaXMuZmllbGRzID0gdGhpcy5maWVsZHMuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgYXJyKXtcbiAgICAgIC8vICAgcmV0dXJuIHZhbHVlIT1kYXRhO1xuICAgICAgLy8gfSk7XG4gICAgIFxuXG4gICAgXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImV2ZW5zXCIsZXZlbnMpO1xuICAgICAgLy8gdGhpcy5maWVsZHM9IGV2ZW5zO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmZvcm1cIix0aGlzLmZvcm0pO1xuICAgICAgLy8gdGhpcy5maWVsZHMuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpZWxkcy5sZW5ndGgsXCJjb3B5RXZlbnQgb2NjdXJlZFwiLGV2ZW5zKTtcbiAgICB9IGVsc2UgaWYoZGF0YS5hY3Rpb24gPT1cImNoaWxkRHJvcGVkXCIpe1xuICAgICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQoZGF0YSk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZXZlbnRGcm9tQ2hpbGQoZGF0YSl7XG5cbiAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdChkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBjaGlsZCAgLS0tLS0tLSBcIixkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5mb3JtRGF0YSA9IHRoaXMuZmllbGRzO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmZvcm0gLS0tXCIsdGhpcy5mb3JtKVxuICAgIC8vIHRoaXMuZm9ybUJ1aWxkKCk7XG4gIH1cblxuLy8gICBmb3JtQnVpbGQoaXRlbSl7XG4vLyAgICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbi8vICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcblxuLy8gICAgIC8vIHZhciBmb3JtRGF0YSA9IHRoaXMuZmllbGRzO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkc1wiLHRoaXMuZmllbGRzKTsgXG5cbi8vICAgICBsZXQgbGVuID0gdGhpcy5maWVsZHMubGVuZ3RoICsgMTtcblxuXG4vLyAgICAgdmFyIG9iaiA9IHtcbi8vICAgICAgIFwicG9zaXRpb25cIjpsZW4sXG4vLyAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbi8vICAgICAgIFwidHlwZVwiOiBpdGVtLnR5cGUsXG4vLyAgICAgICBcImxhYmVsXCI6IGl0ZW0ubGFiZWwsXG4vLyAgICAgICBcInBsYWNlaG9sZGVyXCI6IGl0ZW0ucGxhY2Vob2xkZXIsXG4vLyAgICAgICBcInZhbGlkYXRpb25zXCI6aXRlbS52YWxpZGF0aW9ucyAgXG5cbi8vICAgICB9XG4gICBcbi8vICAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG4vLyAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGYpO1xuXG4vLyAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG4gICBcbi8vICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Db250cm9sKGZbJ3ZhbHVlJ10gfHwgJycpXG4vLyAgICAgfSBlbHNlIHtcblxuLy8gICAgICAgbGV0IG9wdHMgPSB7fTtcbi8vICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcblxuLy8gICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4vLyAgICAgICB9XG4vLyAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGRzQ3RybHNcIixmaWVsZHNDdHJscyk7XG4vLyB9XG59XG4iXX0=