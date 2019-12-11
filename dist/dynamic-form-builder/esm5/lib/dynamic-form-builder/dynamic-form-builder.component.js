/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/dynamic-form-builder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
var DynamicFormBuilderComponent = /** @class */ (function () {
    function DynamicFormBuilderComponent() {
        this.onFieldUpdate = new EventEmitter();
        this.fields = [];
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
        /** @type {?} */
        var obj = data;
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
                    template: "\n   \n     <div cdkDropList (cdkDropListDropped)=\"drop($event)\"> <div *ngFor=\"let field of fields\"  cdkDrag>\n          <field-builder *ngIf=\"!field.isDeleted\" [field]=\"field\" [form]=\"form\"  (sendDataToParent)=\"eventFromChild($event)\" (copyOrDeleteEvent)=\"copyOrDeleteEvent($event)\"></field-builder>\n      </div></div>",
                },] },
    ];
    /** @nocollapse */
    DynamicFormBuilderComponent.ctorParameters = function () { return []; };
    DynamicFormBuilderComponent.propDecorators = {
        onFieldUpdate: [{ type: Output }],
        fields: [{ type: Input }],
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
    DynamicFormBuilderComponent.prototype.form;
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.formData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEU7SUFjRTtRQUxVLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBRzVCLGFBQVEsR0FBTyxFQUFFLENBQUM7SUFDRixDQUFDOzs7OztJQUdqQiwwQ0FBSTs7OztJQUFKLFVBQUssS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCx1REFBaUI7Ozs7SUFBakIsVUFBa0IsSUFBSTs7WUFFaEIsR0FBRyxHQUFHLElBQUk7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXRDLGlEQUFpRDtRQUNqRCxtREFBbUQ7UUFFbkQsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFFLE1BQU0sRUFBQztZQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxrQkFBa0IsQ0FBQyxDQUFDOztnQkFFbEMsWUFBWSxHQUFJO2dCQUNqQixNQUFNLEVBQUMsTUFBTTtnQkFDYixJQUFJLEVBQUMsSUFBSTthQUNWO1lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFeEMsbURBQW1EO1lBRW5ELDRCQUE0QjtZQUMxQix1QkFBdUI7U0FFeEI7YUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsUUFBUSxFQUFDOztnQkFFeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztZQUV6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixnQ0FBZ0M7WUFJaEMsZ0VBQWdFO1lBQ2hFLHdCQUF3QjtZQUN4QixNQUFNO1lBSU4sOEJBQThCO1lBQzlCLHNCQUFzQjtZQUN0QixzQ0FBc0M7WUFDdEMsZUFBZTtZQUNmLDZEQUE2RDtTQUM5RDtJQUVILENBQUM7Ozs7O0lBRUQsb0RBQWM7Ozs7SUFBZCxVQUFlLElBQUk7UUFFakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBRUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxvQkFBb0I7SUFDdEIsQ0FBQzs7Z0JBcEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUMsZ1ZBSVE7aUJBQ2xCOzs7OztnQ0FFRSxNQUFNO3lCQUNOLEtBQUs7dUJBRUwsS0FBSzs7SUFzSFIsa0NBQUM7Q0FBQSxBQWxJRCxJQWtJQztTQTFIWSwyQkFBMkI7OztJQUN0QyxvREFBNkM7O0lBQzdDLDZDQUE0Qjs7SUFFNUIsMkNBQWtCOztJQUNsQiwrQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHluYW1pYy1mb3JtLWJ1aWxkZXInLFxuICB0ZW1wbGF0ZTpgXG4gICBcbiAgICAgPGRpdiBjZGtEcm9wTGlzdCAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPiA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHNcIiAgY2RrRHJhZz5cbiAgICAgICAgICA8ZmllbGQtYnVpbGRlciAqbmdJZj1cIiFmaWVsZC5pc0RlbGV0ZWRcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCIgIChzZW5kRGF0YVRvUGFyZW50KT1cImV2ZW50RnJvbUNoaWxkKCRldmVudClcIiAoY29weU9yRGVsZXRlRXZlbnQpPVwiY29weU9yRGVsZXRlRXZlbnQoJGV2ZW50KVwiPjwvZmllbGQtYnVpbGRlcj5cbiAgICAgIDwvZGl2PjwvZGl2PmAsIFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgb25GaWVsZFVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgZmllbGRzOiBhbnlbXSA9IFtdO1xuICAvLyBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGZvcm06YW55O1xuICBmb3JtRGF0YTphbnkgPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmZpZWxkcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxuXG4gIGNvcHlPckRlbGV0ZUV2ZW50KGRhdGEpe1xuXG4gICAgbGV0IG9iaiA9IGRhdGE7XG4gICAgY29uc29sZS5sb2coZGF0YSxcImNvcHlFdmVudCBvY2N1cmVkXCIpO1xuXG4gICAgLy8gZGF0YS5maWVsZCA9KHRoaXMuZmllbGRzLmxlbmd0aCsxKStcInF1ZXN0aW9uXCI7XG4gICAgLy8gZGF0YS5sYWJlbCA9ICh0aGlzLmZpZWxkcy5sZW5ndGgrMSkrXCIgcXVlc3Rpb25cIjtcblxuICAgIGlmKGRhdGEuYWN0aW9uPT1cImNvcHlcIil7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsXCJ0aGlzLmZvcm0gYmVmb3JlXCIpO1xuXG4gICAgIGxldCB0cmFuc2ZlckRhdGEgPSAge1xuICAgICAgICBhY3Rpb246XCJjb3B5XCIsXG4gICAgICAgIGRhdGE6ZGF0YVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdCh0cmFuc2ZlckRhdGEpO1xuICAgICAgXG4gICAgLy8gIGRhdGEuZmllbGQgPSAodGhpcy5maWVsZHMubGVuZ3RoKzEpK1wicXVlc3Rpb25cIjtcblxuICAgIC8vICBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhKVxuICAgICAgLy8gdGhpcy5mb3JtQnVpbGQob2JqKTtcblxuICAgIH1lbHNlIGlmKGRhdGEuYWN0aW9uPVwiZGVsZXRlXCIpe1xuXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmZpZWxkcy5pbmRleE9mKGRhdGEpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImluZFwiLGluZGV4KTtcbiAgICAgIFxuICAgICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQoZGF0YSk7XG5cbiAgICAgIC8vIHRoaXMuZmllbGRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIFxuXG4gICAgICAvLyB0aGlzLmZpZWxkcyA9IHRoaXMuZmllbGRzLmZpbHRlcihmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGFycil7XG4gICAgICAvLyAgIHJldHVybiB2YWx1ZSE9ZGF0YTtcbiAgICAgIC8vIH0pO1xuICAgICBcblxuICAgIFxuICAgICAgLy8gY29uc29sZS5sb2coXCJldmVuc1wiLGV2ZW5zKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzPSBldmVucztcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtXCIsdGhpcy5mb3JtKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzLlxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWVsZHMubGVuZ3RoLFwiY29weUV2ZW50IG9jY3VyZWRcIixldmVucyk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZXZlbnRGcm9tQ2hpbGQoZGF0YSl7XG5cbiAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdChkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBjaGlsZCAgLS0tLS0tLSBcIixkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5mb3JtRGF0YSA9IHRoaXMuZmllbGRzO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmZvcm0gLS0tXCIsdGhpcy5mb3JtKVxuICAgIC8vIHRoaXMuZm9ybUJ1aWxkKCk7XG4gIH1cblxuLy8gICBmb3JtQnVpbGQoaXRlbSl7XG4vLyAgICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbi8vICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcblxuLy8gICAgIC8vIHZhciBmb3JtRGF0YSA9IHRoaXMuZmllbGRzO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkc1wiLHRoaXMuZmllbGRzKTsgXG5cbi8vICAgICBsZXQgbGVuID0gdGhpcy5maWVsZHMubGVuZ3RoICsgMTtcblxuXG4vLyAgICAgdmFyIG9iaiA9IHtcbi8vICAgICAgIFwicG9zaXRpb25cIjpsZW4sXG4vLyAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbi8vICAgICAgIFwidHlwZVwiOiBpdGVtLnR5cGUsXG4vLyAgICAgICBcImxhYmVsXCI6IGl0ZW0ubGFiZWwsXG4vLyAgICAgICBcInBsYWNlaG9sZGVyXCI6IGl0ZW0ucGxhY2Vob2xkZXIsXG4vLyAgICAgICBcInZhbGlkYXRpb25zXCI6aXRlbS52YWxpZGF0aW9ucyAgXG5cbi8vICAgICB9XG4gICBcbi8vICAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG4vLyAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGYpO1xuXG4vLyAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG4gICBcbi8vICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Db250cm9sKGZbJ3ZhbHVlJ10gfHwgJycpXG4vLyAgICAgfSBlbHNlIHtcblxuLy8gICAgICAgbGV0IG9wdHMgPSB7fTtcbi8vICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcblxuLy8gICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4vLyAgICAgICB9XG4vLyAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGRzQ3RybHNcIixmaWVsZHNDdHJscyk7XG4vLyB9XG59XG4iXX0=