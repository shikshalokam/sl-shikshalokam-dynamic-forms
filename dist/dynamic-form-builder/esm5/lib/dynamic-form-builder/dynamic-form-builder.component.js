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
        this.formData = [];
        this.jsonData = [
            {
                "responseType": "text",
                "icon": "text_format"
            }, {
                "responseType": "number",
                "icon": "indeterminate_check_box"
            }, {
                "responseType": "radio",
                "icon": "radio_button_checked"
            },
            {
                "responseType": "checkbox",
                "icon": "check_box"
            },
            {
                "responseType": "dropdown",
                "icon": "arrow_drop_down_circle"
            }, {
                "responseType": "date",
                "icon": "date_range"
            }, {
                "responseType": "slider",
                "icon": "date_range"
            },
            {
                "responseType": "matrix",
                "icon": "date_range"
            }
        ];
    }
    ;
    /**
     * @param {?} element
     * @return {?}
     */
    DynamicFormBuilderComponent.prototype.addElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var obj = {
            action: "addnew",
            element: element
        };
        this.copyOrDeleteEvent(obj);
    };
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
        if (data.action == "addnew") {
            /** @type {?} */
            var transferData = {
                action: "addnew",
                data: data
            };
            this.onFieldUpdate.emit(transferData);
        }
        else if (data.action == "copy") {
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
                    styles: ["\n      \n  .addElement {\n    display:none;\n  }\n  .add-qicons {\n    display:none;\n    font-size: 17px;\n    width: 60%;\n    margin-left: 40%;\n    background: #a5f1d7;\n    float: left;\n    padding: 0px;\n  }\n  .element {\n    line-height: 26px;\n    font-size: 17px;\n    padding: 6px;\n    margin: 8px;\n    border: 1px solid midnightblue;\n    font-weight: bold;\n    color: midnightblue;\n  }\n  .element i.material-icons {\n    vertical-align: middle;\n    float: right;\n  }\n  .addElement:hover .add-qicons {\n    display:block;\n  }\n  "],
                    template: "\n   \n     <div cdkDropList (cdkDropListDropped)=\"drop($event)\"> <div *ngFor=\"let field of fields\"  cdkDrag>\n          <field-builder *ngIf=\"!field.isDeleted\" [field]=\"field\" [form]=\"form\"  \n          (sendDataToParent)=\"eventFromChild($event)\" (copyOrDeleteEvent)=\"copyOrDeleteEvent($event)\">\n          </field-builder>\n          <div class=\"addElement\">\n          <div style=\"float: right;\n          font-size: 4.5em;\n          color: midnightblue;\n          line-height: 46px;\">+</div>\n\n          <div class=\"col add-qicons\">\n              <div class=\"col-sm-6\"  *ngFor=\"let item of jsonData;let i = index\">\n                <div *ngIf=\"i <= 4\" class=\"element\" (click)=\"addElement(item.responseType)\"  >\n                  <span  >\n                  <i class=\"material-icons\">{{ item.icon }}</i>{{ item.responseType }}\n                  </span>\n                </div>\n                <div *ngIf=\"i > 4\" class=\"element\" (click)=\"addElement(item.responseType)\" >\n                  <span   >\n                  <i class=\"material-icons\">{{ item.icon }}</i>{{ item.responseType }}\n                  </span>\n                </div>\n              </div>\n              </div>\n         \n          </div>\n      </div></div>"
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
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.jsonData;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTtJQXNFRTtRQUxVLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBRzVCLGFBQVEsR0FBTyxFQUFFLENBQUM7UUFFbEIsYUFBUSxHQUFHO1lBQ1Q7Z0JBQ0UsY0FBYyxFQUFFLE1BQU07Z0JBQ3RCLE1BQU0sRUFBRSxhQUFhO2FBQ3RCLEVBQUU7Z0JBQ0QsY0FBYyxFQUFFLFFBQVE7Z0JBQ3hCLE1BQU0sRUFBRSx5QkFBeUI7YUFDbEMsRUFBRTtnQkFDRCxjQUFjLEVBQUUsT0FBTztnQkFDdkIsTUFBTSxFQUFFLHNCQUFzQjthQUMvQjtZQUNEO2dCQUNFLGNBQWMsRUFBRSxVQUFVO2dCQUMxQixNQUFNLEVBQUUsV0FBVzthQUNwQjtZQUNEO2dCQUNFLGNBQWMsRUFBRSxVQUFVO2dCQUMxQixNQUFNLEVBQUUsd0JBQXdCO2FBQ2pDLEVBQUU7Z0JBQ0QsY0FBYyxFQUFFLE1BQU07Z0JBQ3RCLE1BQU0sRUFBRSxZQUFZO2FBQ3JCLEVBQUU7Z0JBQ0QsY0FBYyxFQUFFLFFBQVE7Z0JBQ3hCLE1BQU0sRUFBRSxZQUFZO2FBQ3JCO1lBQ0Q7Z0JBQ0UsY0FBYyxFQUFFLFFBQVE7Z0JBQ3hCLE1BQU0sRUFBRSxZQUFZO2FBQ3JCO1NBQ0YsQ0FBQTtJQTlCZSxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFpQ2xCLGdEQUFVOzs7O0lBQVYsVUFBVyxPQUFPOztZQUVaLEdBQUcsR0FBRztZQUNSLE1BQU0sRUFBQyxRQUFRO1lBQ2YsT0FBTyxFQUFDLE9BQU87U0FDaEI7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7Ozs7SUFDRCwwQ0FBSTs7OztJQUFKLFVBQUssS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCx1REFBaUI7Ozs7SUFBakIsVUFBa0IsSUFBSTtRQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEMsSUFBRyxPQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRTFCO1FBRUQsd0JBQXdCO1FBQ3hCLHlDQUF5QztRQUV6QywyREFBMkQ7UUFDM0Qsa0JBQWtCO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFdEMsaURBQWlEO1FBQ2pELG1EQUFtRDtRQUVuRCxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUUsUUFBUSxFQUFDOztnQkFHcEIsWUFBWSxHQUFJO2dCQUNuQixNQUFNLEVBQUMsUUFBUTtnQkFDZixJQUFJLEVBQUMsSUFBSTthQUNWO1lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FFckM7YUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUUsTUFBTSxFQUFDO1lBRTNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLGtCQUFrQixDQUFDLENBQUM7O2dCQUVsQyxZQUFZLEdBQUk7Z0JBQ2pCLE1BQU0sRUFBQyxNQUFNO2dCQUNiLElBQUksRUFBQyxJQUFJO2FBQ1Y7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV4QyxtREFBbUQ7WUFFbkQsNEJBQTRCO1lBQzFCLHVCQUF1QjtTQUV4QjthQUFLLElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBRSxRQUFRLEVBQUM7O2dCQUV6QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXpCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUk3QixnRUFBZ0U7WUFDaEUsd0JBQXdCO1lBQ3hCLE1BQU07WUFJTiw4QkFBOEI7WUFDOUIsc0JBQXNCO1lBQ3RCLHNDQUFzQztZQUN0QyxlQUFlO1lBQ2YsNkRBQTZEO1NBQzlEO2FBQU0sSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFHLGFBQWEsRUFBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUVILENBQUM7Ozs7O0lBRUQsb0RBQWM7Ozs7SUFBZCxVQUFlLElBQUk7UUFFakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBRUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxvQkFBb0I7SUFDdEIsQ0FBQzs7Z0JBMU1GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxNQUFNLEVBQUUsQ0FBQywwaUJBOEJSLENBQUM7b0JBQ0YsUUFBUSxFQUFDLGt3Q0E0QlE7aUJBRWxCOzs7OztnQ0FFRSxNQUFNO3lCQUNOLEtBQUs7dUJBRUwsS0FBSzs7SUFvTFIsa0NBQUM7Q0FBQSxBQXhQRCxJQXdQQztTQXhMWSwyQkFBMkI7OztJQUN0QyxvREFBNkM7O0lBQzdDLDZDQUE0Qjs7SUFFNUIsMkNBQWtCOztJQUNsQiwrQ0FBa0I7O0lBRWxCLCtDQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeW5hbWljLWZvcm0tYnVpbGRlcicsXG4gIHN0eWxlczogW2BcbiAgICAgIFxuICAuYWRkRWxlbWVudCB7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG4gIC5hZGQtcWljb25zIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICBiYWNrZ3JvdW5kOiAjYTVmMWQ3O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuZWxlbWVudCB7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBtaWRuaWdodGJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcbiAgfVxuICAuZWxlbWVudCBpLm1hdGVyaWFsLWljb25zIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuYWRkRWxlbWVudDpob3ZlciAuYWRkLXFpY29ucyB7XG4gICAgZGlzcGxheTpibG9jaztcbiAgfVxuICBgXSxcbiAgdGVtcGxhdGU6YFxuICAgXG4gICAgIDxkaXYgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj4gPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzXCIgIGNka0RyYWc+XG4gICAgICAgICAgPGZpZWxkLWJ1aWxkZXIgKm5nSWY9XCIhZmllbGQuaXNEZWxldGVkXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2Zvcm1dPVwiZm9ybVwiICBcbiAgICAgICAgICAoc2VuZERhdGFUb1BhcmVudCk9XCJldmVudEZyb21DaGlsZCgkZXZlbnQpXCIgKGNvcHlPckRlbGV0ZUV2ZW50KT1cImNvcHlPckRlbGV0ZUV2ZW50KCRldmVudClcIj5cbiAgICAgICAgICA8L2ZpZWxkLWJ1aWxkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZEVsZW1lbnRcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNC41ZW07XG4gICAgICAgICAgY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcIj4rPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGFkZC1xaWNvbnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGpzb25EYXRhO2xldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaSA8PSA0XCIgY2xhc3M9XCJlbGVtZW50XCIgKGNsaWNrKT1cImFkZEVsZW1lbnQoaXRlbS5yZXNwb25zZVR5cGUpXCIgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3sgaXRlbS5pY29uIH19PC9pPnt7IGl0ZW0ucmVzcG9uc2VUeXBlIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImkgPiA0XCIgY2xhc3M9XCJlbGVtZW50XCIgKGNsaWNrKT1cImFkZEVsZW1lbnQoaXRlbS5yZXNwb25zZVR5cGUpXCIgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3sgaXRlbS5pY29uIH19PC9pPnt7IGl0ZW0ucmVzcG9uc2VUeXBlIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+PC9kaXY+YFxuICAgICBcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIG9uRmllbGRVcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGZpZWxkczogYW55W10gPSBbXTtcbiAgLy8gZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBmb3JtOmFueTtcbiAgZm9ybURhdGE6YW55ID0gW107XG4gIGNvbnN0cnVjdG9yKCkgeyB9O1xuICBqc29uRGF0YSA9IFtcbiAgICB7XG4gICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiaWNvblwiOiBcInRleHRfZm9ybWF0XCJcbiAgICB9LCB7XG4gICAgICBcInJlc3BvbnNlVHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJpY29uXCI6IFwiaW5kZXRlcm1pbmF0ZV9jaGVja19ib3hcIlxuICAgIH0sIHtcbiAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwicmFkaW9cIixcbiAgICAgIFwiaWNvblwiOiBcInJhZGlvX2J1dHRvbl9jaGVja2VkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwiaWNvblwiOiBcImNoZWNrX2JveFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRyb3Bkb3duXCIsXG4gICAgICBcImljb25cIjogXCJhcnJvd19kcm9wX2Rvd25fY2lyY2xlXCJcbiAgICB9LCB7XG4gICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImRhdGVcIixcbiAgICAgIFwiaWNvblwiOiBcImRhdGVfcmFuZ2VcIlxuICAgIH0sIHtcbiAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwic2xpZGVyXCIsXG4gICAgICBcImljb25cIjogXCJkYXRlX3JhbmdlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicmVzcG9uc2VUeXBlXCI6IFwibWF0cml4XCIsXG4gICAgICBcImljb25cIjogXCJkYXRlX3JhbmdlXCJcbiAgICB9XG4gIF1cblxuXG4gIGFkZEVsZW1lbnQoZWxlbWVudCl7XG5cbiAgICBsZXQgb2JqID0ge1xuICAgICAgYWN0aW9uOlwiYWRkbmV3XCIsXG4gICAgICBlbGVtZW50OmVsZW1lbnRcbiAgICB9XG4gICAgdGhpcy5jb3B5T3JEZWxldGVFdmVudChvYmopXG4gIH1cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZmllbGRzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG5cbiAgY29weU9yRGVsZXRlRXZlbnQoZGF0YSl7XG5cbiAgICBjb25zb2xlLmxvZygnZGF0YSB0eXBlJywgZGF0YSk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZmllbGRzJywgdGhpcy5maWVsZHMpO1xuXG4gICAgaWYodHlwZW9mKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSAgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgXG4gICAgfVxuXG4gICAgLy8gbGV0IGNoaWxkZGF0YSA9IGRhdGE7XG4gICAgLy8gbGV0IGZpbmFsZGF0YSA9IEpTT04ucGFyc2UoY2hpbGRkYXRhKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZGF0YSksXCJwYXJzZSBjb3B5RXZlbnQgb2NjdXJlZFwiKTtcbiAgICAvLyBsZXQgb2JqID0gZGF0YTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLFwiY29weUV2ZW50IG9jY3VyZWRcIik7XG5cbiAgICAvLyBkYXRhLmZpZWxkID0odGhpcy5maWVsZHMubGVuZ3RoKzEpK1wicXVlc3Rpb25cIjtcbiAgICAvLyBkYXRhLmxhYmVsID0gKHRoaXMuZmllbGRzLmxlbmd0aCsxKStcIiBxdWVzdGlvblwiO1xuXG4gICAgaWYoZGF0YS5hY3Rpb249PVwiYWRkbmV3XCIpe1xuXG5cbiAgICAgbGV0IHRyYW5zZmVyRGF0YSA9ICB7XG4gICAgICBhY3Rpb246XCJhZGRuZXdcIixcbiAgICAgIGRhdGE6ZGF0YVxuICAgIH1cblxuICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KHRyYW5zZmVyRGF0YSk7XG5cbiAgICB9ZWxzZSBpZihkYXRhLmFjdGlvbj09XCJjb3B5XCIpe1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLFwidGhpcy5mb3JtIGJlZm9yZVwiKTtcblxuICAgICBsZXQgdHJhbnNmZXJEYXRhID0gIHtcbiAgICAgICAgYWN0aW9uOlwiY29weVwiLFxuICAgICAgICBkYXRhOmRhdGFcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQodHJhbnNmZXJEYXRhKTtcbiAgICAgIFxuICAgIC8vICBkYXRhLmZpZWxkID0gKHRoaXMuZmllbGRzLmxlbmd0aCsxKStcInF1ZXN0aW9uXCI7XG5cbiAgICAvLyAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YSlcbiAgICAgIC8vIHRoaXMuZm9ybUJ1aWxkKG9iaik7XG5cbiAgICB9ZWxzZSBpZihkYXRhLmFjdGlvbj09XCJkZWxldGVcIil7XG5cbiAgICAgIHZhciBpbmRleCA9IHRoaXMuZmllbGRzLmluZGV4T2YoZGF0YSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiaW5kXCIsaW5kZXgpO1xuICAgICAgXG4gICAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdChkYXRhKTtcblxuICAgICAgdGhpcy5maWVsZHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgXG5cbiAgICAgIC8vIHRoaXMuZmllbGRzID0gdGhpcy5maWVsZHMuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgYXJyKXtcbiAgICAgIC8vICAgcmV0dXJuIHZhbHVlIT1kYXRhO1xuICAgICAgLy8gfSk7XG4gICAgIFxuXG4gICAgXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImV2ZW5zXCIsZXZlbnMpO1xuICAgICAgLy8gdGhpcy5maWVsZHM9IGV2ZW5zO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmZvcm1cIix0aGlzLmZvcm0pO1xuICAgICAgLy8gdGhpcy5maWVsZHMuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpZWxkcy5sZW5ndGgsXCJjb3B5RXZlbnQgb2NjdXJlZFwiLGV2ZW5zKTtcbiAgICB9IGVsc2UgaWYoZGF0YS5hY3Rpb24gPT1cImNoaWxkRHJvcGVkXCIpe1xuICAgICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQoZGF0YSk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZXZlbnRGcm9tQ2hpbGQoZGF0YSl7XG5cbiAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdChkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBjaGlsZCAgLS0tLS0tLSBcIixkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5mb3JtRGF0YSA9IHRoaXMuZmllbGRzO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmZvcm0gLS0tXCIsdGhpcy5mb3JtKVxuICAgIC8vIHRoaXMuZm9ybUJ1aWxkKCk7XG4gIH1cblxuLy8gICBmb3JtQnVpbGQoaXRlbSl7XG4vLyAgICAgbGV0IGZpZWxkc0N0cmxzID0ge307XG5cbi8vICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcblxuLy8gICAgIC8vIHZhciBmb3JtRGF0YSA9IHRoaXMuZmllbGRzO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmZpZWxkc1wiLHRoaXMuZmllbGRzKTsgXG5cbi8vICAgICBsZXQgbGVuID0gdGhpcy5maWVsZHMubGVuZ3RoICsgMTtcblxuXG4vLyAgICAgdmFyIG9iaiA9IHtcbi8vICAgICAgIFwicG9zaXRpb25cIjpsZW4sXG4vLyAgICAgICBcImZpZWxkXCI6IGxlbiArIFwicXVlc3Rpb25cIixcbi8vICAgICAgIFwidHlwZVwiOiBpdGVtLnR5cGUsXG4vLyAgICAgICBcImxhYmVsXCI6IGl0ZW0ubGFiZWwsXG4vLyAgICAgICBcInBsYWNlaG9sZGVyXCI6IGl0ZW0ucGxhY2Vob2xkZXIsXG4vLyAgICAgICBcInZhbGlkYXRpb25zXCI6aXRlbS52YWxpZGF0aW9ucyAgXG5cbi8vICAgICB9XG4gICBcbi8vICAgICB0aGlzLmZpZWxkcy5wdXNoKG9iaik7XG4vLyAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiZi50eXBlXCIsIGYpO1xuXG4vLyAgICAgaWYgKGZbJ3R5cGUnXSAhPSAnY2hlY2tib3gnKSB7XG4gICBcbi8vICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Db250cm9sKGZbJ3ZhbHVlJ10gfHwgJycpXG4vLyAgICAgfSBlbHNlIHtcblxuLy8gICAgICAgbGV0IG9wdHMgPSB7fTtcbi8vICAgICAgIGZvciAobGV0IG9wdCBvZiBmWydvcHRpb25zJ10pIHtcblxuLy8gICAgICAgICBvcHRzW29wdC5rZXldID0gbmV3IEZvcm1Db250cm9sKG9wdC5sYWJlbCk7XG4vLyAgICAgICB9XG4vLyAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtR3JvdXAob3B0cylcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGRzQ3RybHNcIixmaWVsZHNDdHJscyk7XG4vLyB9XG59XG4iXX0=