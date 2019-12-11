/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder/atoms/file.ts
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
                        "\n      .drop-container {\n        background: #fff;\n        border-radius: 6px;\n        height: 150px;\n        width: 100%;\n        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px dashed #c0c4c7;\n      }\n      p {\n        font-size: 16px;\n        font-weight: 400;\n        color: #c0c4c7; \n      }\n      .upload-button {\n        display: inline-block;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        color: #5754a3;\n      }\n      .upload-button input {\n        display: none;\n      }\n      .dropzone { \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; \n        border-radius: 5px;\n        background: white;\n        margin: 10px 0;\n      }\n      .dropzone.hovering {\n          border: 2px solid #f16624;\n          color: #dadada !important;\n      }\n      progress::-webkit-progress-value {\n        transition: width 0.1s ease;\n      }\n      "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNDO0lBMkVJO1FBTFMsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQU94QixDQUFDO0lBTEQsc0JBQUksa0NBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkUsc0JBQUksa0NBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7Ozs7SUFNbkUsa0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLG9CQUFvQjtJQUN0QixDQUFDOztnQkFsRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxNQUFNO29CQUNoQixRQUFRLEVBQUUsMHRCQW1CVDtvQkFDRCxNQUFNLEVBQUM7d0JBQ0wsMmpDQTJDQztxQkFDRjtpQkFDSjs7Ozs7d0JBRUksS0FBSzt1QkFDTCxLQUFLOztJQVlWLG9CQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0FkWSxhQUFhOzs7SUFDdEIsOEJBQXdCOztJQUN4Qiw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHRleHQsZW1haWwsdGVsLHRleHRhcmVhLHBhc3N3b3JkLCBcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhZmllbGQudmFsdWVcIiBjbGFzcz1cImRyb3AtY29udGFpbmVyIGRyb3B6b25lXCIgZHJvcFpvbmUgXFxcbiAgICAgICAgICAoZHJvcHBlZCk9XCJmaWVsZC5vblVwbG9hZCgkZXZlbnQpXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtLTBcIj5cbiAgICAgICAgICAgIERyYWcgYSBmaWxlIGhlcmUgb3JcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInVwbG9hZC1idXR0b25cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGU9XCJcIiAoY2hhbmdlKT1cImZpZWxkLm9uVXBsb2FkKCRldmVudC50YXJnZXQuZmlsZXMpXCI+IGJyb3dzZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHRvIHVwbG9hZC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQudmFsdWVcIj5cbiAgICAgICAgICA8IS0tIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Q2hhbmdlPC9idXR0b24+IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgW3NyY109XCJmaWVsZC52YWx1ZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiBcbiAgICBgLFxuICAgIHN0eWxlczpbXG4gICAgICBgXG4gICAgICAuZHJvcC1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDIwcHggaHNsYSgwLDAlLDQlLC4xKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjYzBjNGM3O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICNjMGM0Yzc7IFxuICAgICAgfVxuICAgICAgLnVwbG9hZC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogIzU3NTRhMztcbiAgICAgIH1cbiAgICAgIC51cGxvYWQtYnV0dG9uIGlucHV0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5kcm9wem9uZSB7IFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgfVxuICAgICAgLmRyb3B6b25lLmhvdmVyaW5nIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjE2NjI0O1xuICAgICAgICAgIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgZWFzZTtcbiAgICAgIH1cbiAgICAgIGBcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGZpZWxkOmFueSA9IHt9O1xuICAgIEBJbnB1dCgpIGZvcm06Rm9ybUdyb3VwO1xuICAgIGdldCBpc1ZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7IH1cbiAgICBnZXQgaXNEaXJ0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5OyB9XG4gIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZSgpe1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWVsZC52YWx1ZSk7XG4gICAgICAvLyB0aGlzLmZpZWxkLnZhbHVlLlxuICAgIH1cbn0iXX0=