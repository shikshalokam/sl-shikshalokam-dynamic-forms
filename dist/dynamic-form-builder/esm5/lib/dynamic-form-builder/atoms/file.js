/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// text,email,tel,textarea,password, 
var FileComponent = /** @class */ (function () {
    function FileComponent() {
        this.field = {};
    }
    Object.defineProperty(FileComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileComponent.prototype.ngOnChange = /**
     * @return {?}
     */
    function () {
        console.log(this.field.value);
        // this.field.value.
    };
    FileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'file',
                    template: "\n      <div [formGroup]=\"form\">\n        <div *ngIf=\"!field.value\" class=\"drop-container dropzone\" dropZone           (dropped)=\"field.onUpload($event)\">\n          <p class=\"m-0\">\n            Drag a file here or\n            <label class=\"upload-button\">\n              <input type=\"file\" multiple=\"\" (change)=\"field.onUpload($event.target.files)\"> browse\n            </label>\n            to upload.\n          </p>\n        </div>\n        <div *ngIf=\"field.value\">\n          <!-- <button type=\"button\" class=\"btn btn-primary\">Change</button> -->\n          <div class=\"card\">\n            <img class=\"card-img-top\" [src]=\"field.value\">\n          </div>\n        </div>\n      </div> \n    ",
                    styles: [
                        "\n      .form-control {\n        display:none;\n      }\n      .drop-container {\n        background: #fff;\n        border-radius: 6px;\n        height: 150px;\n        width: 100%;\n        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px dashed #c0c4c7;\n      }\n      p {\n        font-size: 16px;\n        font-weight: 400;\n        color: #c0c4c7; \n      }\n      .upload-button {\n        display: inline-block;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        color: #5754a3;\n      }\n      .upload-button input {\n        display: none;\n      }\n      .dropzone { \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; \n        border-radius: 5px;\n        background: white;\n        margin: 10px 0;\n      }\n      .dropzone.hovering {\n          border: 2px solid #f16624;\n          color: #dadada !important;\n      }\n      progress::-webkit-progress-value {\n        transition: width 0.1s ease;\n      }\n      "
                    ]
                },] },
    ];
    /** @nocollapse */
    FileComponent.ctorParameters = function () { return []; };
    FileComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return FileComponent;
}());
export { FileComponent };
if (false) {
    /** @type {?} */
    FileComponent.prototype.field;
    /** @type {?} */
    FileComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHM0M7SUE4RUk7UUFMUyxVQUFLLEdBQU8sRUFBRSxDQUFDO0lBT3hCLENBQUM7SUFMRCxzQkFBSSxrQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRSxzQkFBSSxrQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTs7OztJQU1uRSxrQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsb0JBQW9CO0lBQ3RCLENBQUM7O2dCQXJGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLFFBQVEsRUFBRSwwdEJBbUJUO29CQUNELE1BQU0sRUFBQzt3QkFDTCxrbkNBOENDO3FCQUNGO2lCQUNKOzs7Ozt3QkFFSSxLQUFLO3VCQUNMLEtBQUs7O0lBWVYsb0JBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQWRZLGFBQWE7OztJQUN0Qiw4QkFBd0I7O0lBQ3hCLDZCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gdGV4dCxlbWFpbCx0ZWwsdGV4dGFyZWEscGFzc3dvcmQsIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaWxlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFmaWVsZC52YWx1ZVwiIGNsYXNzPVwiZHJvcC1jb250YWluZXIgZHJvcHpvbmVcIiBkcm9wWm9uZSBcXFxuICAgICAgICAgIChkcm9wcGVkKT1cImZpZWxkLm9uVXBsb2FkKCRldmVudClcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm0tMFwiPlxuICAgICAgICAgICAgRHJhZyBhIGZpbGUgaGVyZSBvclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidXBsb2FkLWJ1dHRvblwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZT1cIlwiIChjaGFuZ2UpPVwiZmllbGQub25VcGxvYWQoJGV2ZW50LnRhcmdldC5maWxlcylcIj4gYnJvd3NlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgdG8gdXBsb2FkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC52YWx1ZVwiPlxuICAgICAgICAgIDwhLS0gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5DaGFuZ2U8L2J1dHRvbj4gLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBbc3JjXT1cImZpZWxkLnZhbHVlXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+IFxuICAgIGAsXG4gICAgc3R5bGVzOltcbiAgICAgIGBcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICB9XG4gICAgICAuZHJvcC1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDIwcHggaHNsYSgwLDAlLDQlLC4xKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjYzBjNGM3O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICNjMGM0Yzc7IFxuICAgICAgfVxuICAgICAgLnVwbG9hZC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogIzU3NTRhMztcbiAgICAgIH1cbiAgICAgIC51cGxvYWQtYnV0dG9uIGlucHV0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5kcm9wem9uZSB7IFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgfVxuICAgICAgLmRyb3B6b25lLmhvdmVyaW5nIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjE2NjI0O1xuICAgICAgICAgIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgZWFzZTtcbiAgICAgIH1cbiAgICAgIGBcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xuICAgIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG4gIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZSgpe1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWVsZC52YWx1ZSk7XG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbHVlLlxuICAgIH1cbn0iXX0=