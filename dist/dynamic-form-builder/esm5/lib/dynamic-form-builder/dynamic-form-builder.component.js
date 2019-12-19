/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
var DynamicFormBuilderComponent = /** @class */ (function () {
    function DynamicFormBuilderComponent() {
        this.onFieldUpdate = new EventEmitter();
        this.fields = [];
        this.criteriaList = [];
        this.formData = [];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.copyOrDeleteEvent = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
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
            var transferData = {
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
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.eventFromChild = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.onFieldUpdate.emit(data);
        console.log("data from child  ------- ", data);
    };
    /**
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.formData = this.fields;
        console.log("this.form ---", this.form);
        // this.formBuild();
    };
    DynamicFormBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-form-builder',
                    template: "\n   \n     <div cdkDropList (cdkDropListDropped)=\"drop($event)\"> <div *ngFor=\"let field of fields\"  cdkDrag>\n          <field-builder [criteriaList]=\"criteriaList\" *ngIf=\"!field.isDeleted\" [field]=\"field\" [form]=\"form\"  \n          (sendDataToParent)=\"eventFromChild($event)\" (copyOrDeleteEvent)=\"copyOrDeleteEvent($event)\">\n          </field-builder>\n      </div></div>",
                },] },
    ];
    /** @nocollapse */
    DynamicFormBuilderComponent.ctorParameters = function () { return []; };
    DynamicFormBuilderComponent.propDecorators = {
        onFieldUpdate: [{ type: Output }],
        fields: [{ type: Input }],
        criteriaList: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DynamicFormBuilderComponent;
}());
export { DynamicFormBuilderComponent };
if (false) {
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.onFieldUpdate;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.fields;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.criteriaList;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.form;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.formData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTtJQWtCRTtRQVBVLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBRW5CLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBR25DLGFBQVEsR0FBTyxFQUFFLENBQUM7SUFDRixDQUFDOzs7OztJQUdqQiwwQ0FBSTs7OztJQUFKLFVBQUssS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCx1REFBaUI7Ozs7SUFBakIsVUFBa0IsSUFBSTtRQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV2QyxJQUFHLE9BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM5QjtRQUVELHdCQUF3QjtRQUN4Qix5Q0FBeUM7UUFFekMsMkRBQTJEO1FBQzNELGtCQUFrQjtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXRDLGlEQUFpRDtRQUNqRCxtREFBbUQ7UUFFbkQsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFFLE1BQU0sRUFBQztZQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxrQkFBa0IsQ0FBQyxDQUFDOztnQkFFbEMsWUFBWSxHQUFJO2dCQUNqQixNQUFNLEVBQUMsTUFBTTtnQkFDYixJQUFJLEVBQUMsSUFBSTthQUNWO1lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFeEMsbURBQW1EO1lBRW5ELDRCQUE0QjtZQUMxQix1QkFBdUI7U0FFeEI7YUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUUsUUFBUSxFQUFDOztnQkFFekIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztZQUV6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixnQ0FBZ0M7WUFJaEMsZ0VBQWdFO1lBQ2hFLHdCQUF3QjtZQUN4QixNQUFNO1lBSU4sOEJBQThCO1lBQzlCLHNCQUFzQjtZQUN0QixzQ0FBc0M7WUFDdEMsZUFBZTtZQUNmLDZEQUE2RDtTQUM5RDthQUFNLElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBRyxhQUFhLEVBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFFSCxDQUFDOzs7OztJQUVELG9EQUFjOzs7O0lBQWQsVUFBZSxJQUFRO1FBRXJCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUVFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsb0JBQW9CO0lBQ3RCLENBQUM7O2dCQXJHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFDLHdZQU1RO2lCQUNsQjs7Ozs7Z0NBRUUsTUFBTTt5QkFDTixLQUFLOytCQUVMLEtBQUs7dUJBRUwsS0FBSzs7SUFtSVIsa0NBQUM7Q0FBQSxBQW5KRCxJQW1KQztTQXpJWSwyQkFBMkI7OztJQUN0QyxvREFBNkM7O0lBQzdDLDZDQUE0Qjs7SUFFNUIsbURBQW1DOztJQUVuQywyQ0FBa0I7O0lBQ2xCLCtDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeW5hbWljLWZvcm0tYnVpbGRlcicsXG4gIHRlbXBsYXRlOmBcbiAgIFxuICAgICA8ZGl2IGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+IDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiICBjZGtEcmFnPlxuICAgICAgICAgIDxmaWVsZC1idWlsZGVyIFtjcml0ZXJpYUxpc3RdPVwiY3JpdGVyaWFMaXN0XCIgKm5nSWY9XCIhZmllbGQuaXNEZWxldGVkXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiICBcbiAgICAgICAgICAoc2VuZERhdGFUb1BhcmVudCk9XCJldmVudEZyb21DaGlsZCgkZXZlbnQpXCIgKGNvcHlPckRlbGV0ZUV2ZW50KT1cImNvcHlPckRlbGV0ZUV2ZW50KCRldmVudClcIj5cbiAgICAgICAgICA8L2ZpZWxkLWJ1aWxkZXI+XG4gICAgICA8L2Rpdj48L2Rpdj5gLCBcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIG9uRmllbGRVcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGZpZWxkczogYW55W10gPSBbXTtcblxuICBASW5wdXQoKSBjcml0ZXJpYUxpc3QgOiBhbnlbXSA9IFtdO1xuICAvLyBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGZvcm06YW55O1xuICBmb3JtRGF0YTphbnkgPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmZpZWxkcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxuXG4gIGNvcHlPckRlbGV0ZUV2ZW50KGRhdGEpe1xuXG4gICAgY29uc29sZS5sb2coJ2RhdGEgdHlwZScsIHR5cGVvZihkYXRhKSk7XG5cbiAgICBpZih0eXBlb2YoZGF0YSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRhICA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZygnaW5zaWRlIHN0cmluZycpO1xuICAgIH1cblxuICAgIC8vIGxldCBjaGlsZGRhdGEgPSBkYXRhO1xuICAgIC8vIGxldCBmaW5hbGRhdGEgPSBKU09OLnBhcnNlKGNoaWxkZGF0YSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGRhdGEpLFwicGFyc2UgY29weUV2ZW50IG9jY3VyZWRcIik7XG4gICAgLy8gbGV0IG9iaiA9IGRhdGE7XG4gICAgY29uc29sZS5sb2coZGF0YSxcImNvcHlFdmVudCBvY2N1cmVkXCIpO1xuXG4gICAgLy8gZGF0YS5maWVsZCA9KHRoaXMuZmllbGRzLmxlbmd0aCsxKStcInF1ZXN0aW9uXCI7XG4gICAgLy8gZGF0YS5sYWJlbCA9ICh0aGlzLmZpZWxkcy5sZW5ndGgrMSkrXCIgcXVlc3Rpb25cIjtcblxuICAgIGlmKGRhdGEuYWN0aW9uPT1cImNvcHlcIil7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsXCJ0aGlzLmZvcm0gYmVmb3JlXCIpO1xuXG4gICAgIGxldCB0cmFuc2ZlckRhdGEgPSAge1xuICAgICAgICBhY3Rpb246XCJjb3B5XCIsXG4gICAgICAgIGRhdGE6ZGF0YVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdCh0cmFuc2ZlckRhdGEpO1xuICAgICAgXG4gICAgLy8gIGRhdGEuZmllbGQgPSAodGhpcy5maWVsZHMubGVuZ3RoKzEpK1wicXVlc3Rpb25cIjtcblxuICAgIC8vICBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhKVxuICAgICAgLy8gdGhpcy5mb3JtQnVpbGQob2JqKTtcblxuICAgIH1lbHNlIGlmKGRhdGEuYWN0aW9uPT1cImRlbGV0ZVwiKXtcblxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5maWVsZHMuaW5kZXhPZihkYXRhKTtcblxuICAgICAgY29uc29sZS5sb2coXCJpbmRcIixpbmRleCk7XG4gICAgICBcbiAgICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KGRhdGEpO1xuXG4gICAgICAvLyB0aGlzLmZpZWxkcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICBcblxuICAgICAgLy8gdGhpcy5maWVsZHMgPSB0aGlzLmZpZWxkcy5maWx0ZXIoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBhcnIpe1xuICAgICAgLy8gICByZXR1cm4gdmFsdWUhPWRhdGE7XG4gICAgICAvLyB9KTtcbiAgICAgXG5cbiAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXZlbnNcIixldmVucyk7XG4gICAgICAvLyB0aGlzLmZpZWxkcz0gZXZlbnM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuZm9ybVwiLHRoaXMuZm9ybSk7XG4gICAgICAvLyB0aGlzLmZpZWxkcy5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmllbGRzLmxlbmd0aCxcImNvcHlFdmVudCBvY2N1cmVkXCIsZXZlbnMpO1xuICAgIH0gZWxzZSBpZihkYXRhLmFjdGlvbiA9PVwiY2hpbGREcm9wZWRcIil7XG4gICAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdChkYXRhKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBldmVudEZyb21DaGlsZChkYXRhOmFueSl7XG5cbiAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdChkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBjaGlsZCAgLS0tLS0tLSBcIixkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5mb3JtRGF0YSA9IHRoaXMuZmllbGRzO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmZvcm0gLS0tXCIsdGhpcy5mb3JtKVxuICAgIC8vIHRoaXMuZm9ybUJ1aWxkKCk7XG4gIH1cblxuLy8gICBmb3JtQnVpbGQoaXRlbSl7XG4vLyAgICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbi8vICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcblxuLy8gICAgIC8vIHZhciBmb3JtRGF0YSA9IHRoaXMuZmllbGRzO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkc1wiLHRoaXMuZmllbGRzKTsgXG5cbi8vICAgICBsZXQgbGVuID0gdGhpcy5maWVsZHMubGVuZ3RoICsgMTtcblxuXG4vLyAgICAgdmFyIG9iaiA9IHtcbi8vICAgICAgIFwicG9zaXRpb25cIjpsZW4sXG4vLyAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbi8vICAgICAgIFwidHlwZVwiOiBpdGVtLnR5cGUsXG4vLyAgICAgICBcImxhYmVsXCI6IGl0ZW0ubGFiZWwsXG4vLyAgICAgICBcInBsYWNlaG9sZGVyXCI6IGl0ZW0ucGxhY2Vob2xkZXIsXG4vLyAgICAgICBcInZhbGlkYXRpb25zXCI6aXRlbS52YWxpZGF0aW9ucyAgXG5cbi8vICAgICB9XG4gICBcbi8vICAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG4vLyAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGYpO1xuXG4vLyAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG4gICBcbi8vICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Db250cm9sKGZbJ3ZhbHVlJ10gfHwgJycpXG4vLyAgICAgfSBlbHNlIHtcblxuLy8gICAgICAgbGV0IG9wdHMgPSB7fTtcbi8vICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcblxuLy8gICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4vLyAgICAgICB9XG4vLyAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGRzQ3RybHNcIixmaWVsZHNDdHJscyk7XG4vLyB9XG59XG4iXX0=