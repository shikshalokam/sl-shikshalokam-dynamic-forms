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
                    template: "\n   \n     <div cdkDropList (cdkDropListDropped)=\"drop($event)\"> <div *ngFor=\"let field of fields\"  cdkDrag>\n          <field-builder *ngIf=\"!field.isDeleted\" [field]=\"field\" [form]=\"form\"  \n          (sendDataToParent)=\"eventFromChild($event)\" (copyOrDeleteEvent)=\"copyOrDeleteEvent($event)\">\n          </field-builder>\n      </div></div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEU7SUFnQkU7UUFMVSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUc1QixhQUFRLEdBQU8sRUFBRSxDQUFDO0lBQ0YsQ0FBQzs7Ozs7SUFHakIsMENBQUk7Ozs7SUFBSixVQUFLLEtBQTRCO1FBQy9CLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsdURBQWlCOzs7O0lBQWpCLFVBQWtCLElBQUk7UUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFdkMsSUFBRyxPQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUI7UUFFRCx3QkFBd0I7UUFDeEIseUNBQXlDO1FBRXpDLDJEQUEyRDtRQUMzRCxrQkFBa0I7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUV0QyxpREFBaUQ7UUFDakQsbURBQW1EO1FBRW5ELElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBRSxNQUFNLEVBQUM7WUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsa0JBQWtCLENBQUMsQ0FBQzs7Z0JBRWxDLFlBQVksR0FBSTtnQkFDakIsTUFBTSxFQUFDLE1BQU07Z0JBQ2IsSUFBSSxFQUFDLElBQUk7YUFDVjtZQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXhDLG1EQUFtRDtZQUVuRCw0QkFBNEI7WUFDMUIsdUJBQXVCO1NBRXhCO2FBQUssSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFFLFFBQVEsRUFBQzs7Z0JBRXpCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFFckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsZ0NBQWdDO1lBSWhDLGdFQUFnRTtZQUNoRSx3QkFBd0I7WUFDeEIsTUFBTTtZQUlOLDhCQUE4QjtZQUM5QixzQkFBc0I7WUFDdEIsc0NBQXNDO1lBQ3RDLGVBQWU7WUFDZiw2REFBNkQ7U0FDOUQ7YUFBTSxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUcsYUFBYSxFQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBRUgsQ0FBQzs7Ozs7SUFFRCxvREFBYzs7OztJQUFkLFVBQWUsSUFBSTtRQUVqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFFRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RDLG9CQUFvQjtJQUN0QixDQUFDOztnQkFuR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBQyx3V0FNUTtpQkFDbEI7Ozs7O2dDQUVFLE1BQU07eUJBQ04sS0FBSzt1QkFFTCxLQUFLOztJQW1JUixrQ0FBQztDQUFBLEFBakpELElBaUpDO1NBdklZLDJCQUEyQjs7O0lBQ3RDLG9EQUE2Qzs7SUFDN0MsNkNBQTRCOztJQUU1QiwyQ0FBa0I7O0lBQ2xCLCtDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeW5hbWljLWZvcm0tYnVpbGRlcicsXG4gIHRlbXBsYXRlOmBcbiAgIFxuICAgICA8ZGl2IGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+IDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiICBjZGtEcmFnPlxuICAgICAgICAgIDxmaWVsZC1idWlsZGVyICpuZ0lmPVwiIWZpZWxkLmlzRGVsZXRlZFwiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIiAgXG4gICAgICAgICAgKHNlbmREYXRhVG9QYXJlbnQpPVwiZXZlbnRGcm9tQ2hpbGQoJGV2ZW50KVwiIChjb3B5T3JEZWxldGVFdmVudCk9XCJjb3B5T3JEZWxldGVFdmVudCgkZXZlbnQpXCI+XG4gICAgICAgICAgPC9maWVsZC1idWlsZGVyPlxuICAgICAgPC9kaXY+PC9kaXY+YCwgXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBvbkZpZWxkVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBmaWVsZHM6IGFueVtdID0gW107XG4gIC8vIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZm9ybTphbnk7XG4gIGZvcm1EYXRhOmFueSA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZmllbGRzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG5cbiAgY29weU9yRGVsZXRlRXZlbnQoZGF0YSl7XG5cbiAgICBjb25zb2xlLmxvZygnZGF0YSB0eXBlJywgdHlwZW9mKGRhdGEpKTtcblxuICAgIGlmKHR5cGVvZihkYXRhKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGEgID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgLy8gbGV0IGNoaWxkZGF0YSA9IGRhdGE7XG4gICAgLy8gbGV0IGZpbmFsZGF0YSA9IEpTT04ucGFyc2UoY2hpbGRkYXRhKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZGF0YSksXCJwYXJzZSBjb3B5RXZlbnQgb2NjdXJlZFwiKTtcbiAgICAvLyBsZXQgb2JqID0gZGF0YTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLFwiY29weUV2ZW50IG9jY3VyZWRcIik7XG5cbiAgICAvLyBkYXRhLmZpZWxkID0odGhpcy5maWVsZHMubGVuZ3RoKzEpK1wicXVlc3Rpb25cIjtcbiAgICAvLyBkYXRhLmxhYmVsID0gKHRoaXMuZmllbGRzLmxlbmd0aCsxKStcIiBxdWVzdGlvblwiO1xuXG4gICAgaWYoZGF0YS5hY3Rpb249PVwiY29weVwiKXtcblxuICAgICAgY29uc29sZS5sb2coZGF0YSxcInRoaXMuZm9ybSBiZWZvcmVcIik7XG5cbiAgICAgbGV0IHRyYW5zZmVyRGF0YSA9ICB7XG4gICAgICAgIGFjdGlvbjpcImNvcHlcIixcbiAgICAgICAgZGF0YTpkYXRhXG4gICAgICB9XG5cbiAgICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KHRyYW5zZmVyRGF0YSk7XG4gICAgICBcbiAgICAvLyAgZGF0YS5maWVsZCA9ICh0aGlzLmZpZWxkcy5sZW5ndGgrMSkrXCJxdWVzdGlvblwiO1xuXG4gICAgLy8gIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpXG4gICAgICAvLyB0aGlzLmZvcm1CdWlsZChvYmopO1xuXG4gICAgfWVsc2UgaWYoZGF0YS5hY3Rpb249PVwiZGVsZXRlXCIpe1xuXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmZpZWxkcy5pbmRleE9mKGRhdGEpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImluZFwiLGluZGV4KTtcbiAgICAgIFxuICAgICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQoZGF0YSk7XG5cbiAgICAgIC8vIHRoaXMuZmllbGRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIFxuXG4gICAgICAvLyB0aGlzLmZpZWxkcyA9IHRoaXMuZmllbGRzLmZpbHRlcihmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGFycil7XG4gICAgICAvLyAgIHJldHVybiB2YWx1ZSE9ZGF0YTtcbiAgICAgIC8vIH0pO1xuICAgICBcblxuICAgIFxuICAgICAgLy8gY29uc29sZS5sb2coXCJldmVuc1wiLGV2ZW5zKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzPSBldmVucztcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtXCIsdGhpcy5mb3JtKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzLlxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWVsZHMubGVuZ3RoLFwiY29weUV2ZW50IG9jY3VyZWRcIixldmVucyk7XG4gICAgfSBlbHNlIGlmKGRhdGEuYWN0aW9uID09XCJjaGlsZERyb3BlZFwiKXtcbiAgICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KGRhdGEpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGV2ZW50RnJvbUNoaWxkKGRhdGEpe1xuXG4gICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQoZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gY2hpbGQgIC0tLS0tLS0gXCIsZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZm9ybURhdGEgPSB0aGlzLmZpZWxkcztcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtIC0tLVwiLHRoaXMuZm9ybSlcbiAgICAvLyB0aGlzLmZvcm1CdWlsZCgpO1xuICB9XG5cbi8vICAgZm9ybUJ1aWxkKGl0ZW0pe1xuLy8gICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuXG4vLyAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG5cbi8vICAgICAvLyB2YXIgZm9ybURhdGEgPSB0aGlzLmZpZWxkcztcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5maWVsZHNcIix0aGlzLmZpZWxkcyk7IFxuXG4vLyAgICAgbGV0IGxlbiA9IHRoaXMuZmllbGRzLmxlbmd0aCArIDE7XG5cblxuLy8gICAgIHZhciBvYmogPSB7XG4vLyAgICAgICBcInBvc2l0aW9uXCI6bGVuLFxuLy8gICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4vLyAgICAgICBcInR5cGVcIjogaXRlbS50eXBlLFxuLy8gICAgICAgXCJsYWJlbFwiOiBpdGVtLmxhYmVsLFxuLy8gICAgICAgXCJwbGFjZWhvbGRlclwiOiBpdGVtLnBsYWNlaG9sZGVyLFxuLy8gICAgICAgXCJ2YWxpZGF0aW9uc1wiOml0ZW0udmFsaWRhdGlvbnMgIFxuXG4vLyAgICAgfVxuICAgXG4vLyAgICAgdGhpcy5maWVsZHMucHVzaChvYmopO1xuLy8gICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbihmKXtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcImYudHlwZVwiLCBmKTtcblxuLy8gICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuICAgXG4vLyAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuLy8gICAgIH0gZWxzZSB7XG5cbi8vICAgICAgIGxldCBvcHRzID0ge307XG4vLyAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG5cbi8vICAgICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQubGFiZWwpO1xuLy8gICAgICAgfVxuLy8gICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4vLyAgICAgfVxuLy8gICB9KTtcblxuLy8gICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhcImZpZWxkc0N0cmxzXCIsZmllbGRzQ3RybHMpO1xuLy8gfVxufVxuIl19