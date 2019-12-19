/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
export class DynamicFormBuilderComponent {
    constructor() {
        this.onFieldUpdate = new EventEmitter();
        this.fields = [];
        this.criteriaList = [];
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
          <field-builder [criteriaList]="criteriaList" *ngIf="!field.isDeleted" [field]="field" [form]="form"  
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
    criteriaList: [{ type: Input }],
    form: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvZHluYW1pYy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQVlwRSxNQUFNLE9BQU8sMkJBQTJCO0lBUXRDO1FBUFUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFFbkIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFHbkMsYUFBUSxHQUFPLEVBQUUsQ0FBQztJQUNGLENBQUM7Ozs7O0lBR2pCLElBQUksQ0FBQyxLQUE0QjtRQUMvQixlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLElBQUk7UUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFdkMsSUFBRyxPQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUI7UUFFRCx3QkFBd0I7UUFDeEIseUNBQXlDO1FBRXpDLDJEQUEyRDtRQUMzRCxrQkFBa0I7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUV0QyxpREFBaUQ7UUFDakQsbURBQW1EO1FBRW5ELElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBRSxNQUFNLEVBQUM7WUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsa0JBQWtCLENBQUMsQ0FBQzs7Z0JBRWxDLFlBQVksR0FBSTtnQkFDakIsTUFBTSxFQUFDLE1BQU07Z0JBQ2IsSUFBSSxFQUFDLElBQUk7YUFDVjtZQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXhDLG1EQUFtRDtZQUVuRCw0QkFBNEI7WUFDMUIsdUJBQXVCO1NBRXhCO2FBQUssSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFFLFFBQVEsRUFBQzs7Z0JBRXpCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFFckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsZ0NBQWdDO1lBSWhDLGdFQUFnRTtZQUNoRSx3QkFBd0I7WUFDeEIsTUFBTTtZQUlOLDhCQUE4QjtZQUM5QixzQkFBc0I7WUFDdEIsc0NBQXNDO1lBQ3RDLGVBQWU7WUFDZiw2REFBNkQ7U0FDOUQ7YUFBTSxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUcsYUFBYSxFQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBRUgsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBUTtRQUVyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxvQkFBb0I7SUFDdEIsQ0FBQzs7O1lBckdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUM7Ozs7OzttQkFNUTthQUNsQjs7Ozs7NEJBRUUsTUFBTTtxQkFDTixLQUFLOzJCQUVMLEtBQUs7bUJBRUwsS0FBSzs7OztJQUxOLG9EQUE2Qzs7SUFDN0MsNkNBQTRCOztJQUU1QixtREFBbUM7O0lBRW5DLDJDQUFrQjs7SUFDbEIsK0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5bmFtaWMtZm9ybS1idWlsZGVyJyxcbiAgdGVtcGxhdGU6YFxuICAgXG4gICAgIDxkaXYgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj4gPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzXCIgIGNka0RyYWc+XG4gICAgICAgICAgPGZpZWxkLWJ1aWxkZXIgW2NyaXRlcmlhTGlzdF09XCJjcml0ZXJpYUxpc3RcIiAqbmdJZj1cIiFmaWVsZC5pc0RlbGV0ZWRcIiBbZmllbGRdPVwiZmllbGRcIiBbZm9ybV09XCJmb3JtXCIgIFxuICAgICAgICAgIChzZW5kRGF0YVRvUGFyZW50KT1cImV2ZW50RnJvbUNoaWxkKCRldmVudClcIiAoY29weU9yRGVsZXRlRXZlbnQpPVwiY29weU9yRGVsZXRlRXZlbnQoJGV2ZW50KVwiPlxuICAgICAgICAgIDwvZmllbGQtYnVpbGRlcj5cbiAgICAgIDwvZGl2PjwvZGl2PmAsIFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgb25GaWVsZFVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgZmllbGRzOiBhbnlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGNyaXRlcmlhTGlzdCA6IGFueVtdID0gW107XG4gIC8vIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZm9ybTphbnk7XG4gIGZvcm1EYXRhOmFueSA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZmllbGRzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG5cbiAgY29weU9yRGVsZXRlRXZlbnQoZGF0YSl7XG5cbiAgICBjb25zb2xlLmxvZygnZGF0YSB0eXBlJywgdHlwZW9mKGRhdGEpKTtcblxuICAgIGlmKHR5cGVvZihkYXRhKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGEgID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgLy8gbGV0IGNoaWxkZGF0YSA9IGRhdGE7XG4gICAgLy8gbGV0IGZpbmFsZGF0YSA9IEpTT04ucGFyc2UoY2hpbGRkYXRhKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZGF0YSksXCJwYXJzZSBjb3B5RXZlbnQgb2NjdXJlZFwiKTtcbiAgICAvLyBsZXQgb2JqID0gZGF0YTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLFwiY29weUV2ZW50IG9jY3VyZWRcIik7XG5cbiAgICAvLyBkYXRhLmZpZWxkID0odGhpcy5maWVsZHMubGVuZ3RoKzEpK1wicXVlc3Rpb25cIjtcbiAgICAvLyBkYXRhLmxhYmVsID0gKHRoaXMuZmllbGRzLmxlbmd0aCsxKStcIiBxdWVzdGlvblwiO1xuXG4gICAgaWYoZGF0YS5hY3Rpb249PVwiY29weVwiKXtcblxuICAgICAgY29uc29sZS5sb2coZGF0YSxcInRoaXMuZm9ybSBiZWZvcmVcIik7XG5cbiAgICAgbGV0IHRyYW5zZmVyRGF0YSA9ICB7XG4gICAgICAgIGFjdGlvbjpcImNvcHlcIixcbiAgICAgICAgZGF0YTpkYXRhXG4gICAgICB9XG5cbiAgICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KHRyYW5zZmVyRGF0YSk7XG4gICAgICBcbiAgICAvLyAgZGF0YS5maWVsZCA9ICh0aGlzLmZpZWxkcy5sZW5ndGgrMSkrXCJxdWVzdGlvblwiO1xuXG4gICAgLy8gIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpXG4gICAgICAvLyB0aGlzLmZvcm1CdWlsZChvYmopO1xuXG4gICAgfWVsc2UgaWYoZGF0YS5hY3Rpb249PVwiZGVsZXRlXCIpe1xuXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmZpZWxkcy5pbmRleE9mKGRhdGEpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImluZFwiLGluZGV4KTtcbiAgICAgIFxuICAgICAgdGhpcy5vbkZpZWxkVXBkYXRlLmVtaXQoZGF0YSk7XG5cbiAgICAgIC8vIHRoaXMuZmllbGRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIFxuXG4gICAgICAvLyB0aGlzLmZpZWxkcyA9IHRoaXMuZmllbGRzLmZpbHRlcihmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGFycil7XG4gICAgICAvLyAgIHJldHVybiB2YWx1ZSE9ZGF0YTtcbiAgICAgIC8vIH0pO1xuICAgICBcblxuICAgIFxuICAgICAgLy8gY29uc29sZS5sb2coXCJldmVuc1wiLGV2ZW5zKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzPSBldmVucztcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtXCIsdGhpcy5mb3JtKTtcbiAgICAgIC8vIHRoaXMuZmllbGRzLlxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWVsZHMubGVuZ3RoLFwiY29weUV2ZW50IG9jY3VyZWRcIixldmVucyk7XG4gICAgfSBlbHNlIGlmKGRhdGEuYWN0aW9uID09XCJjaGlsZERyb3BlZFwiKXtcbiAgICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KGRhdGEpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGV2ZW50RnJvbUNoaWxkKGRhdGE6YW55KXtcblxuICAgIHRoaXMub25GaWVsZFVwZGF0ZS5lbWl0KGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBmcm9tIGNoaWxkICAtLS0tLS0tIFwiLGRhdGEpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmZvcm1EYXRhID0gdGhpcy5maWVsZHM7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZm9ybSAtLS1cIix0aGlzLmZvcm0pXG4gICAgLy8gdGhpcy5mb3JtQnVpbGQoKTtcbiAgfVxuXG4vLyAgIGZvcm1CdWlsZChpdGVtKXtcbi8vICAgICBsZXQgZmllbGRzQ3RybHMgPSB7fTtcblxuLy8gICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuXG4vLyAgICAgLy8gdmFyIGZvcm1EYXRhID0gdGhpcy5maWVsZHM7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuZmllbGRzXCIsdGhpcy5maWVsZHMpOyBcblxuLy8gICAgIGxldCBsZW4gPSB0aGlzLmZpZWxkcy5sZW5ndGggKyAxO1xuXG5cbi8vICAgICB2YXIgb2JqID0ge1xuLy8gICAgICAgXCJwb3NpdGlvblwiOmxlbixcbi8vICAgICAgIFwiZmllbGRcIjogbGVuICsgXCJxdWVzdGlvblwiLFxuLy8gICAgICAgXCJ0eXBlXCI6IGl0ZW0udHlwZSxcbi8vICAgICAgIFwibGFiZWxcIjogaXRlbS5sYWJlbCxcbi8vICAgICAgIFwicGxhY2Vob2xkZXJcIjogaXRlbS5wbGFjZWhvbGRlcixcbi8vICAgICAgIFwidmFsaWRhdGlvbnNcIjppdGVtLnZhbGlkYXRpb25zICBcblxuLy8gICAgIH1cbiAgIFxuLy8gICAgIHRoaXMuZmllbGRzLnB1c2gob2JqKTtcbi8vICAgIHRoaXMuZmllbGRzLmZvckVhY2goZnVuY3Rpb24oZil7XG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJmLnR5cGVcIiwgZik7XG5cbi8vICAgICBpZiAoZlsndHlwZSddICE9ICdjaGVja2JveCcpIHtcbiAgIFxuLy8gICAgICAgZmllbGRzQ3RybHNbZlsnZmllbGQnXV0gPSBuZXcgRm9ybUNvbnRyb2woZlsndmFsdWUnXSB8fCAnJylcbi8vICAgICB9IGVsc2Uge1xuXG4vLyAgICAgICBsZXQgb3B0cyA9IHt9O1xuLy8gICAgICAgZm9yIChsZXQgb3B0IG9mIGZbJ29wdGlvbnMnXSkge1xuXG4vLyAgICAgICAgIG9wdHNbb3B0LmtleV0gPSBuZXcgRm9ybUNvbnRyb2wob3B0LmxhYmVsKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGZpZWxkc0N0cmxzW2ZbJ2ZpZWxkJ11dID0gbmV3IEZvcm1Hcm91cChvcHRzKVxuLy8gICAgIH1cbi8vICAgfSk7XG5cbi8vICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG5cbi8vICAgLy8gY29uc29sZS5sb2coXCJmaWVsZHNDdHJsc1wiLGZpZWxkc0N0cmxzKTtcbi8vIH1cbn1cbiJdfQ==