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
        console.log('data type', data);
        console.log('this.fields', this.fields);
        if (typeof (data) === 'string') {
            data = JSON.parse(data);
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
            this.fields.splice(index, 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFZcEUsTUFBTSxPQUFPLDJCQUEyQjtJQU10QztRQUxVLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBRzVCLGFBQVEsR0FBTyxFQUFFLENBQUM7SUFDRixDQUFDOzs7OztJQUdqQixJQUFJLENBQUMsS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFJO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxJQUFHLE9BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FFMUI7UUFFRCx3QkFBd0I7UUFDeEIseUNBQXlDO1FBRXpDLDJEQUEyRDtRQUMzRCxrQkFBa0I7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUV0QyxpREFBaUQ7UUFDakQsbURBQW1EO1FBRW5ELElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBRSxNQUFNLEVBQUM7WUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsa0JBQWtCLENBQUMsQ0FBQzs7Z0JBRWxDLFlBQVksR0FBSTtnQkFDakIsTUFBTSxFQUFDLE1BQU07Z0JBQ2IsSUFBSSxFQUFDLElBQUk7YUFDVjtZQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXhDLG1EQUFtRDtZQUVuRCw0QkFBNEI7WUFDMUIsdUJBQXVCO1NBRXhCO2FBQUssSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFFLFFBQVEsRUFBQzs7Z0JBRXpCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFFckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBSTdCLGdFQUFnRTtZQUNoRSx3QkFBd0I7WUFDeEIsTUFBTTtZQUlOLDhCQUE4QjtZQUM5QixzQkFBc0I7WUFDdEIsc0NBQXNDO1lBQ3RDLGVBQWU7WUFDZiw2REFBNkQ7U0FDOUQ7YUFBTSxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUcsYUFBYSxFQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBRUgsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBSTtRQUVqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxvQkFBb0I7SUFDdEIsQ0FBQzs7O1lBcEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUM7Ozs7OzttQkFNUTthQUNsQjs7Ozs7NEJBRUUsTUFBTTtxQkFDTixLQUFLO21CQUVMLEtBQUs7Ozs7SUFITixvREFBNkM7O0lBQzdDLDZDQUE0Qjs7SUFFNUIsMkNBQWtCOztJQUNsQiwrQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHluYW1pYy1mb3JtLWJ1aWxkZXInLFxuICB0ZW1wbGF0ZTpgXG4gICBcbiAgICAgPGRpdiBjZGtEcm9wTGlzdCAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPiA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHNcIiAgY2RrRHJhZz5cbiAgICAgICAgICA8ZmllbGQtYnVpbGRlciAqbmdJZj1cIiFmaWVsZC5pc0RlbGV0ZWRcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCIgIFxuICAgICAgICAgIChzZW5kRGF0YVRvUGFyZW50KT1cImV2ZW50RnJvbUNoaWxkKCRldmVudClcIiAoY29weU9yRGVsZXRlRXZlbnQpPVwiY29weU9yRGVsZXRlRXZlbnQoJGV2ZW50KVwiPlxuICAgICAgICAgIDwvZmllbGQtYnVpbGRlcj5cbiAgICAgIDwvZGl2PjwvZGl2PmAsIFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgb25GaWVsZFVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgZmllbGRzOiBhbnlbXSA9IFtdO1xuICAvLyBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGZvcm06YW55O1xuICBmb3JtRGF0YTphbnkgPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmZpZWxkcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxuXG4gIGNvcHlPckRlbGV0ZUV2ZW50KGRhdGEpe1xuXG4gICAgY29uc29sZS5sb2coJ2RhdGEgdHlwZScsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpZWxkcycsIHRoaXMuZmllbGRzKTtcblxuICAgIGlmKHR5cGVvZihkYXRhKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGEgID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgIFxuICAgIH1cblxuICAgIC8vIGxldCBjaGlsZGRhdGEgPSBkYXRhO1xuICAgIC8vIGxldCBmaW5hbGRhdGEgPSBKU09OLnBhcnNlKGNoaWxkZGF0YSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGRhdGEpLFwicGFyc2UgY29weUV2ZW50IG9jY3VyZWRcIik7XG4gICAgLy8gbGV0IG9iaiA9IGRhdGE7XG4gICAgY29uc29sZS5sb2coZGF0YSxcImNvcHlFdmVudCBvY2N1cmVkXCIpO1xuXG4gICAgLy8gZGF0YS5maWVsZCA9KHRoaXMuZmllbGRzLmxlbmd0aCsxKStcInF1ZXN0aW9uXCI7XG4gICAgLy8gZGF0YS5sYWJlbCA9ICh0aGlzLmZpZWxkcy5sZW5ndGgrMSkrXCIgcXVlc3Rpb25cIjtcblxuICAgIGlmKGRhdGEuYWN0aW9uPT1cImNvcHlcIil7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsXCJ0aGlzLmZvcm0gYmVmb3JlXCIpO1xuXG4gICAgIGxldCB0cmFuc2ZlckRhdGEgPSAge1xuICAgICAgICBhY3Rpb246XCJjb3B5XCIsXG4gICAgICAgIGRhdGE6ZGF0YVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdCh0cmFuc2ZlckRhdGEpO1xuICAgICAgXG4gICAgLy8gIGRhdGEuZmllbGQgPSAodGhpcy5maWVsZHMubGVuZ3RoKzEpK1wicXVlc3Rpb25cIjtcblxuICAgIC8vICBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhKVxuICAgICAgLy8gdGhpcy5mb3JtQnVpbGQob2JqKTtcblxuICAgIH1lbHNlIGlmKGRhdGEuYWN0aW9uPT1cImRlbGV0ZVwiKXtcblxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5maWVsZHMuaW5kZXhPZihkYXRhKTtcblxuICAgICAgY29uc29sZS5sb2coXCJpbmRcIixpbmRleCk7XG4gICAgICBcbiAgICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KGRhdGEpO1xuXG4gICAgICB0aGlzLmZpZWxkcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICBcblxuICAgICAgLy8gdGhpcy5maWVsZHMgPSB0aGlzLmZpZWxkcy5maWx0ZXIoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBhcnIpe1xuICAgICAgLy8gICByZXR1cm4gdmFsdWUhPWRhdGE7XG4gICAgICAvLyB9KTtcbiAgICAgXG5cbiAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXZlbnNcIixldmVucyk7XG4gICAgICAvLyB0aGlzLmZpZWxkcz0gZXZlbnM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuZm9ybVwiLHRoaXMuZm9ybSk7XG4gICAgICAvLyB0aGlzLmZpZWxkcy5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmllbGRzLmxlbmd0aCxcImNvcHlFdmVudCBvY2N1cmVkXCIsZXZlbnMpO1xuICAgIH0gZWxzZSBpZihkYXRhLmFjdGlvbiA9PVwiY2hpbGREcm9wZWRcIil7XG4gICAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdChkYXRhKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBldmVudEZyb21DaGlsZChkYXRhKXtcblxuICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBmcm9tIGNoaWxkICAtLS0tLS0tIFwiLGRhdGEpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmZvcm1EYXRhID0gdGhpcy5maWVsZHM7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZm9ybSAtLS1cIix0aGlzLmZvcm0pXG4gICAgLy8gdGhpcy5mb3JtQnVpbGQoKTtcbiAgfVxuXG4vLyAgIGZvcm1CdWlsZChpdGVtKXtcbi8vICAgICBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuLy8gICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4vLyAgICAgLy8gdmFyIGZvcm1EYXRhID0gdGhpcy5maWVsZHM7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuZmllbGRzXCIsdGhpcy5maWVsZHMpOyBcblxuLy8gICAgIGxldCBsZW4gPSB0aGlzLmZpZWxkcy5sZW5ndGggKyAxO1xuXG5cbi8vICAgICB2YXIgb2JqID0ge1xuLy8gICAgICAgXCJwb3NpdGlvblwiOmxlbixcbi8vICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuLy8gICAgICAgXCJ0eXBlXCI6IGl0ZW0udHlwZSxcbi8vICAgICAgIFwibGFiZWxcIjogaXRlbS5sYWJlbCxcbi8vICAgICAgIFwicGxhY2Vob2xkZXJcIjogaXRlbS5wbGFjZWhvbGRlcixcbi8vICAgICAgIFwidmFsaWRhdGlvbnNcIjppdGVtLnZhbGlkYXRpb25zICBcblxuLy8gICAgIH1cbiAgIFxuLy8gICAgIHRoaXMuZmllbGRzLnB1c2gob2JqKTtcbi8vICAgIHRoaXMuZmllbGRzLmZvckVhY2goZnVuY3Rpb24oZil7XG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJmLnR5cGVcIiwgZik7XG5cbi8vICAgICBpZiAoZlsndHlwZSddICE9ICdjaGVja2JveCcpIHtcbiAgIFxuLy8gICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUNvbnRyb2woZlsndmFsdWUnXSB8fCAnJylcbi8vICAgICB9IGVsc2Uge1xuXG4vLyAgICAgICBsZXQgb3B0cyA9IHt9O1xuLy8gICAgICAgZm9yIChsZXQgb3B0IG9mIGZbJ29wdGlvbnMnXSkge1xuXG4vLyAgICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LmxhYmVsKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuLy8gICAgIH1cbi8vICAgfSk7XG5cbi8vICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG5cbi8vICAgLy8gY29uc29sZS5sb2coXCJmaWVsZHNDdHJsc1wiLGZpZWxkc0N0cmxzKTtcbi8vIH1cbn1cbiJdfQ==