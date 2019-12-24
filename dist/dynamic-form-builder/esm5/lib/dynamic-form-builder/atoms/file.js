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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNDO0lBOEVJO1FBTFMsVUFBSyxHQUFPLEVBQUUsQ0FBQztJQU94QixDQUFDO0lBTEQsc0JBQUksa0NBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkUsc0JBQUksa0NBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7Ozs7SUFNbkUsa0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLG9CQUFvQjtJQUN0QixDQUFDOztnQkFyRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxNQUFNO29CQUNoQixRQUFRLEVBQUUsMHRCQW1CVDtvQkFDRCxNQUFNLEVBQUM7d0JBQ0wsa25DQThDQztxQkFDRjtpQkFDSjs7Ozs7d0JBRUksS0FBSzt1QkFDTCxLQUFLOztJQVlWLG9CQUFDO0NBQUEsQUF0RkQsSUFzRkM7U0FkWSxhQUFhOzs7SUFDdEIsOEJBQXdCOztJQUN4Qiw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHRleHQsZW1haWwsdGVsLHRleHRhcmVhLHBhc3N3b3JkLCBcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhZmllbGQudmFsdWVcIiBjbGFzcz1cImRyb3AtY29udGFpbmVyIGRyb3B6b25lXCIgZHJvcFpvbmUgXFxcbiAgICAgICAgICAoZHJvcHBlZCk9XCJmaWVsZC5vblVwbG9hZCgkZXZlbnQpXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtLTBcIj5cbiAgICAgICAgICAgIERyYWcgYSBmaWxlIGhlcmUgb3JcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInVwbG9hZC1idXR0b25cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGU9XCJcIiAoY2hhbmdlKT1cImZpZWxkLm9uVXBsb2FkKCRldmVudC50YXJnZXQuZmlsZXMpXCI+IGJyb3dzZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHRvIHVwbG9hZC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQudmFsdWVcIj5cbiAgICAgICAgICA8IS0tIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Q2hhbmdlPC9idXR0b24+IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgW3NyY109XCJmaWVsZC52YWx1ZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiBcbiAgICBgLFxuICAgIHN0eWxlczpbXG4gICAgICBgXG4gICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgfVxuICAgICAgLmRyb3AtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAyMHB4IGhzbGEoMCwwJSw0JSwuMSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI2MwYzRjNztcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAjYzBjNGM3OyBcbiAgICAgIH1cbiAgICAgIC51cGxvYWQtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICM1NzU0YTM7XG4gICAgICB9XG4gICAgICAudXBsb2FkLWJ1dHRvbiBpbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAuZHJvcHpvbmUgeyBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIH1cbiAgICAgIC5kcm9wem9uZS5ob3ZlcmluZyB7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YxNjYyNDtcbiAgICAgICAgICBjb2xvcjogI2RhZGFkYSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjFzIGVhc2U7XG4gICAgICB9XG4gICAgICBgXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmaWVsZDphbnkgPSB7fTtcbiAgICBASW5wdXQoKSBmb3JtOkZvcm1Hcm91cDtcbiAgICBnZXQgaXNWYWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkOyB9XG4gICAgZ2V0IGlzRGlydHkoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTsgfVxuICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIG5nT25DaGFuZ2UoKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmllbGQudmFsdWUpO1xuICAgICAgLy8gdGhpcy5maWVsZC52YWx1ZS5cbiAgICB9XG59Il19