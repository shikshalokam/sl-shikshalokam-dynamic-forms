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
    addElement(element) {
        /** @type {?} */
        let obj = {
            action: "addnew",
            element: element
        };
        this.copyOrDeleteEvent(obj);
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
        if (data.action == "addnew") {
            /** @type {?} */
            let transferData = {
                action: "addnew",
                data: data
            };
            this.onFieldUpdate.emit(transferData);
        }
        else if (data.action == "copy") {
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
                styles: [`
      
  .addElement {
    display:none;
  }
  .add-qicons {
    display:none;
    font-size: 17px;
    width: 60%;
    margin-left: 40%;
    background: #a5f1d7;
    float: left;
    padding: 0px;
  }
  .element {
    line-height: 26px;
    font-size: 17px;
    padding: 6px;
    margin: 8px;
    border: 1px solid midnightblue;
    font-weight: bold;
    color: midnightblue;
  }
  .element i.material-icons {
    vertical-align: middle;
    float: right;
  }
  .addElement:hover .add-qicons {
    display:block;
  }
  `],
                template: `
   
     <div cdkDropList (cdkDropListDropped)="drop($event)"> <div *ngFor="let field of fields"  cdkDrag>
          <field-builder *ngIf="!field.isDeleted" [field]="field" [form]="form"  
          (sendDataToParent)="eventFromChild($event)" (copyOrDeleteEvent)="copyOrDeleteEvent($event)">
          </field-builder>
          <div class="addElement">
          <div style="float: right;
          font-size: 4.5em;
          color: midnightblue;
          line-height: 46px;">+</div>

          <div class="col add-qicons">
              <div class="col-sm-6"  *ngFor="let item of jsonData;let i = index">
                <div *ngIf="i <= 4" class="element" (click)="addElement(item.responseType)"  >
                  <span  >
                  <i class="material-icons">{{ item.icon }}</i>{{ item.responseType }}
                  </span>
                </div>
                <div *ngIf="i > 4" class="element" (click)="addElement(item.responseType)" >
                  <span   >
                  <i class="material-icons">{{ item.icon }}</i>{{ item.responseType }}
                  </span>
                </div>
              </div>
              </div>
         
          </div>
      </div></div>`
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
    /** @type {?} */
    DynamicFormBuilderComponent.prototype.jsonData;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFrRXBFLE1BQU0sT0FBTywyQkFBMkI7SUFNdEM7UUFMVSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUc1QixhQUFRLEdBQU8sRUFBRSxDQUFDO1FBRWxCLGFBQVEsR0FBRztZQUNUO2dCQUNFLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixNQUFNLEVBQUUsYUFBYTthQUN0QixFQUFFO2dCQUNELGNBQWMsRUFBRSxRQUFRO2dCQUN4QixNQUFNLEVBQUUseUJBQXlCO2FBQ2xDLEVBQUU7Z0JBQ0QsY0FBYyxFQUFFLE9BQU87Z0JBQ3ZCLE1BQU0sRUFBRSxzQkFBc0I7YUFDL0I7WUFDRDtnQkFDRSxjQUFjLEVBQUUsVUFBVTtnQkFDMUIsTUFBTSxFQUFFLFdBQVc7YUFDcEI7WUFDRDtnQkFDRSxjQUFjLEVBQUUsVUFBVTtnQkFDMUIsTUFBTSxFQUFFLHdCQUF3QjthQUNqQyxFQUFFO2dCQUNELGNBQWMsRUFBRSxNQUFNO2dCQUN0QixNQUFNLEVBQUUsWUFBWTthQUNyQixFQUFFO2dCQUNELGNBQWMsRUFBRSxRQUFRO2dCQUN4QixNQUFNLEVBQUUsWUFBWTthQUNyQjtZQUNEO2dCQUNFLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixNQUFNLEVBQUUsWUFBWTthQUNyQjtTQUNGLENBQUE7SUE5QmUs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QW9CO0lBQ3RCLENBQUM7OztZQTFNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCUixDQUFDO2dCQUNGLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkE0QlE7YUFFbEI7Ozs7OzRCQUVFLE1BQU07cUJBQ04sS0FBSzttQkFFTCxLQUFLOzs7O0lBSE4sb0RBQTZDOztJQUM3Qyw2Q0FBNEI7O0lBRTVCLDJDQUFrQjs7SUFDbEIsK0NBQWtCOztJQUVsQiwrQ0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHluYW1pYy1mb3JtLWJ1aWxkZXInLFxuICBzdHlsZXM6IFtgXG4gICAgICBcbiAgLmFkZEVsZW1lbnQge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuICAuYWRkLXFpY29ucyB7XG4gICAgZGlzcGxheTpub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgYmFja2dyb3VuZDogI2E1ZjFkNztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmVsZW1lbnQge1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbWlkbmlnaHRibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBtaWRuaWdodGJsdWU7XG4gIH1cbiAgLmVsZW1lbnQgaS5tYXRlcmlhbC1pY29ucyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLmFkZEVsZW1lbnQ6aG92ZXIgLmFkZC1xaWNvbnMge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gIH1cbiAgYF0sXG4gIHRlbXBsYXRlOmBcbiAgIFxuICAgICA8ZGl2IGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+IDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiICBjZGtEcmFnPlxuICAgICAgICAgIDxmaWVsZC1idWlsZGVyICpuZ0lmPVwiIWZpZWxkLmlzRGVsZXRlZFwiIFtmaWVsZF09XCJmaWVsZFwiIFtmb3JtXT1cImZvcm1cIiAgXG4gICAgICAgICAgKHNlbmREYXRhVG9QYXJlbnQpPVwiZXZlbnRGcm9tQ2hpbGQoJGV2ZW50KVwiIChjb3B5T3JEZWxldGVFdmVudCk9XCJjb3B5T3JEZWxldGVFdmVudCgkZXZlbnQpXCI+XG4gICAgICAgICAgPC9maWVsZC1idWlsZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGRFbGVtZW50XCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OiByaWdodDtcbiAgICAgICAgICBmb250LXNpemU6IDQuNWVtO1xuICAgICAgICAgIGNvbG9yOiBtaWRuaWdodGJsdWU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XCI+KzwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBhZGQtcWljb25zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBqc29uRGF0YTtsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImkgPD0gNFwiIGNsYXNzPVwiZWxlbWVudFwiIChjbGljayk9XCJhZGRFbGVtZW50KGl0ZW0ucmVzcG9uc2VUeXBlKVwiICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7IGl0ZW0uaWNvbiB9fTwvaT57eyBpdGVtLnJlc3BvbnNlVHlwZSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpID4gNFwiIGNsYXNzPVwiZWxlbWVudFwiIChjbGljayk9XCJhZGRFbGVtZW50KGl0ZW0ucmVzcG9uc2VUeXBlKVwiID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7IGl0ZW0uaWNvbiB9fTwvaT57eyBpdGVtLnJlc3BvbnNlVHlwZSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PjwvZGl2PmBcbiAgICAgXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBvbkZpZWxkVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBmaWVsZHM6IGFueVtdID0gW107XG4gIC8vIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZm9ybTphbnk7XG4gIGZvcm1EYXRhOmFueSA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHsgfTtcbiAganNvbkRhdGEgPSBbXG4gICAge1xuICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImljb25cIjogXCJ0ZXh0X2Zvcm1hdFwiXG4gICAgfSwge1xuICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiaWNvblwiOiBcImluZGV0ZXJtaW5hdGVfY2hlY2tfYm94XCJcbiAgICB9LCB7XG4gICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInJhZGlvXCIsXG4gICAgICBcImljb25cIjogXCJyYWRpb19idXR0b25fY2hlY2tlZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlc3BvbnNlVHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcImljb25cIjogXCJjaGVja19ib3hcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJkcm9wZG93blwiLFxuICAgICAgXCJpY29uXCI6IFwiYXJyb3dfZHJvcF9kb3duX2NpcmNsZVwiXG4gICAgfSwge1xuICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJkYXRlXCIsXG4gICAgICBcImljb25cIjogXCJkYXRlX3JhbmdlXCJcbiAgICB9LCB7XG4gICAgICBcInJlc3BvbnNlVHlwZVwiOiBcInNsaWRlclwiLFxuICAgICAgXCJpY29uXCI6IFwiZGF0ZV9yYW5nZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInJlc3BvbnNlVHlwZVwiOiBcIm1hdHJpeFwiLFxuICAgICAgXCJpY29uXCI6IFwiZGF0ZV9yYW5nZVwiXG4gICAgfVxuICBdXG5cblxuICBhZGRFbGVtZW50KGVsZW1lbnQpe1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGFjdGlvbjpcImFkZG5ld1wiLFxuICAgICAgZWxlbWVudDplbGVtZW50XG4gICAgfVxuICAgIHRoaXMuY29weU9yRGVsZXRlRXZlbnQob2JqKVxuICB9XG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmZpZWxkcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxuXG4gIGNvcHlPckRlbGV0ZUV2ZW50KGRhdGEpe1xuXG4gICAgY29uc29sZS5sb2coJ2RhdGEgdHlwZScsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpZWxkcycsIHRoaXMuZmllbGRzKTtcblxuICAgIGlmKHR5cGVvZihkYXRhKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGEgID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgIFxuICAgIH1cblxuICAgIC8vIGxldCBjaGlsZGRhdGEgPSBkYXRhO1xuICAgIC8vIGxldCBmaW5hbGRhdGEgPSBKU09OLnBhcnNlKGNoaWxkZGF0YSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGRhdGEpLFwicGFyc2UgY29weUV2ZW50IG9jY3VyZWRcIik7XG4gICAgLy8gbGV0IG9iaiA9IGRhdGE7XG4gICAgY29uc29sZS5sb2coZGF0YSxcImNvcHlFdmVudCBvY2N1cmVkXCIpO1xuXG4gICAgLy8gZGF0YS5maWVsZCA9KHRoaXMuZmllbGRzLmxlbmd0aCsxKStcInF1ZXN0aW9uXCI7XG4gICAgLy8gZGF0YS5sYWJlbCA9ICh0aGlzLmZpZWxkcy5sZW5ndGgrMSkrXCIgcXVlc3Rpb25cIjtcblxuICAgIGlmKGRhdGEuYWN0aW9uPT1cImFkZG5ld1wiKXtcblxuXG4gICAgIGxldCB0cmFuc2ZlckRhdGEgPSAge1xuICAgICAgYWN0aW9uOlwiYWRkbmV3XCIsXG4gICAgICBkYXRhOmRhdGFcbiAgICB9XG5cbiAgICB0aGlzLm9uRmllbGRVcGRhdGUuZW1pdCh0cmFuc2ZlckRhdGEpO1xuXG4gICAgfWVsc2UgaWYoZGF0YS5hY3Rpb249PVwiY29weVwiKXtcblxuICAgICAgY29uc29sZS5sb2coZGF0YSxcInRoaXMuZm9ybSBiZWZvcmVcIik7XG5cbiAgICAgbGV0IHRyYW5zZmVyRGF0YSA9ICB7XG4gICAgICAgIGFjdGlvbjpcImNvcHlcIixcbiAgICAgICAgZGF0YTpkYXRhXG4gICAgICB9XG5cbiAgICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KHRyYW5zZmVyRGF0YSk7XG4gICAgICBcbiAgICAvLyAgZGF0YS5maWVsZCA9ICh0aGlzLmZpZWxkcy5sZW5ndGgrMSkrXCJxdWVzdGlvblwiO1xuXG4gICAgLy8gIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpXG4gICAgICAvLyB0aGlzLmZvcm1CdWlsZChvYmopO1xuXG4gICAgfWVsc2UgaWYoZGF0YS5hY3Rpb249PVwiZGVsZXRlXCIpe1xuXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmZpZWxkcy5pbmRleE9mKGRhdGEpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImluZFwiLGluZGV4KTtcbiAgICAgIFxuICAgICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQoZGF0YSk7XG5cbiAgICAgIHRoaXMuZmllbGRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIFxuXG4gICAgICAvLyB0aGlzLmZpZWxkcyA9IHRoaXMuZmllbGRzLmZpbHRlcihmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGFycil7XG4gICAgICAvLyAgIHJldHVybiB2YWx1ZSE9ZGF0YTtcbiAgICAgIC8vIH0pO1xuICAgICBcblxuICAgIFxuICAgICAgLy8gY29uc29sZS5sb2coXCJldmVuc1wiLGV2ZW5zKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzPSBldmVucztcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtXCIsdGhpcy5mb3JtKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzLlxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWVsZHMubGVuZ3RoLFwiY29weUV2ZW50IG9jY3VyZWRcIixldmVucyk7XG4gICAgfSBlbHNlIGlmKGRhdGEuYWN0aW9uID09XCJjaGlsZERyb3BlZFwiKXtcbiAgICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KGRhdGEpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGV2ZW50RnJvbUNoaWxkKGRhdGEpe1xuXG4gICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQoZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gY2hpbGQgIC0tLS0tLS0gXCIsZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZm9ybURhdGEgPSB0aGlzLmZpZWxkcztcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtIC0tLVwiLHRoaXMuZm9ybSlcbiAgICAvLyB0aGlzLmZvcm1CdWlsZCgpO1xuICB9XG5cbi8vICAgZm9ybUJ1aWxkKGl0ZW0pe1xuLy8gICAgIGxldCBmaWVsZHNDdHJscyA9IHt9O1xuXG4vLyAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG5cbi8vICAgICAvLyB2YXIgZm9ybURhdGEgPSB0aGlzLmZpZWxkcztcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5maWVsZHNcIix0aGlzLmZpZWxkcyk7IFxuXG4vLyAgICAgbGV0IGxlbiA9IHRoaXMuZmllbGRzLmxlbmd0aCArIDE7XG5cblxuLy8gICAgIHZhciBvYmogPSB7XG4vLyAgICAgICBcInBvc2l0aW9uXCI6bGVuLFxuLy8gICAgICAgXCJmaWVsZFwiOiBsZW4gKyBcInF1ZXN0aW9uXCIsXG4vLyAgICAgICBcInR5cGVcIjogaXRlbS50eXBlLFxuLy8gICAgICAgXCJsYWJlbFwiOiBpdGVtLmxhYmVsLFxuLy8gICAgICAgXCJwbGFjZWhvbGRlclwiOiBpdGVtLnBsYWNlaG9sZGVyLFxuLy8gICAgICAgXCJ2YWxpZGF0aW9uc1wiOml0ZW0udmFsaWRhdGlvbnMgIFxuXG4vLyAgICAgfVxuICAgXG4vLyAgICAgdGhpcy5maWVsZHMucHVzaChvYmopO1xuLy8gICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbihmKXtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcImYudHlwZVwiLCBmKTtcblxuLy8gICAgIGlmIChmWyd0eXBlJ10gIT0gJ2NoZWNrYm94Jykge1xuICAgXG4vLyAgICAgICBmaWVsZHNDdHJsc1tmWydmaWVsZCddXSA9IG5ldyBGb3JtQ29udHJvbChmWyd2YWx1ZSddIHx8ICcnKVxuLy8gICAgIH0gZWxzZSB7XG5cbi8vICAgICAgIGxldCBvcHRzID0ge307XG4vLyAgICAgICBmb3IgKGxldCBvcHQgb2YgZlsnb3B0aW9ucyddKSB7XG5cbi8vICAgICAgICAgb3B0c1tvcHQua2V5XSA9IG5ldyBGb3JtQ29udHJvbChvcHQubGFiZWwpO1xuLy8gICAgICAgfVxuLy8gICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUdyb3VwKG9wdHMpXG4vLyAgICAgfVxuLy8gICB9KTtcblxuLy8gICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhcImZpZWxkc0N0cmxzXCIsZmllbGRzQ3RybHMpO1xuLy8gfVxufVxuIl19