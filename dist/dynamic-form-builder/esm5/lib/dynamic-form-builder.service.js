/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// @Injectable({
//   // providedIn: 'root'
// })
var 
// @Injectable({
//   // providedIn: 'root'
// })
DynamicFormBuilderService = /** @class */ (function () {
    function DynamicFormBuilderService() {
        this.communicateSubject = new Subject();
        // private messageSource = new BehaviorSubject('default message');
        // currentMessage = this.messageSource.asObservable();
        this.list = [];
        this.all = [];
    }
    /**
     * @return {?}
     */
    DynamicFormBuilderService.prototype.currentMessage = /**
     * @return {?}
     */
    function () {
        return this.list;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DynamicFormBuilderService.prototype.sendData = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        console.log("obj", obj);
        this.list = obj;
        this.communicateSubject.next();
    };
    // setQuestionList(list){
    //   this.list = list;
    // }
    // changeMessage(message: string) {
    //   this.messageSource.next(message);
    // }
    // setQuestionList(list){
    //   this.list = list;
    // }
    // changeMessage(message: string) {
    //   this.messageSource.next(message);
    // }
    /**
     * @return {?}
     */
    DynamicFormBuilderService.prototype.getALl = 
    // setQuestionList(list){
    //   this.list = list;
    // }
    // changeMessage(message: string) {
    //   this.messageSource.next(message);
    // }
    /**
     * @return {?}
     */
    function () {
        // let all = {
        //   questionList:[]
        // }
        this.all = {
            questionList: this.list
        };
        // return this.communicateSubject.asObservable();
        return this.all;
    };
    return DynamicFormBuilderService;
}());
// @Injectable({
//   // providedIn: 'root'
// })
export { DynamicFormBuilderService };
if (false) {
    /** @type {?} */
    DynamicFormBuilderService.prototype.communicateSubject;
    /** @type {?} */
    DynamicFormBuilderService.prototype.list;
    /** @type {?} */
    DynamicFormBuilderService.prototype.all;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQWtCLE9BQU8sRUFBYSxNQUFNLE1BQU0sQ0FBQzs7OztBQU0xRDs7Ozs7SUFXRTtRQVRBLHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDOzs7UUFLdEQsU0FBSSxHQUFLLEVBQUUsQ0FBQztRQUVaLFFBQUcsR0FBTSxFQUFFLENBQUM7SUFFSSxDQUFDOzs7O0lBRWpCLGtEQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELDRDQUFROzs7O0lBQVIsVUFBUyxHQUFHO1FBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLElBQUk7SUFFSixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLElBQUk7Ozs7Ozs7Ozs7SUFFSiwwQ0FBTTs7Ozs7Ozs7OztJQUFOO1FBRUUsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixJQUFJO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRztZQUNULFlBQVksRUFBQyxJQUFJLENBQUMsSUFBSTtTQUN2QixDQUFBO1FBQ0QsaURBQWlEO1FBQ2pELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBR0gsZ0NBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDOzs7Ozs7O0lBNUNDLHVEQUFzRDs7SUFLdEQseUNBQVk7O0lBRVosd0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsU3ViamVjdCxPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuLy8gQEluamVjdGFibGUoe1xuLy8gICAvLyBwcm92aWRlZEluOiAncm9vdCdcbi8vIH0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1CdWlsZGVyU2VydmljZSB7XG5cbiAgY29tbXVuaWNhdGVTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgLy8gcHJpdmF0ZSBtZXNzYWdlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnZGVmYXVsdCBtZXNzYWdlJyk7XG4gIC8vIGN1cnJlbnRNZXNzYWdlID0gdGhpcy5tZXNzYWdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGxpc3Q6YW55PVtdO1xuXG4gIGFsbDphbnkgPVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgY3VycmVudE1lc3NhZ2UoKXtcbiAgICByZXR1cm4gdGhpcy5saXN0O1xuICB9XG5cbiAgc2VuZERhdGEob2JqKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIm9ialwiLG9iaik7XG5cbiAgICB0aGlzLmxpc3QgPSBvYmo7XG4gICAgdGhpcy5jb21tdW5pY2F0ZVN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgLy8gc2V0UXVlc3Rpb25MaXN0KGxpc3Qpe1xuICAvLyAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIC8vIH1cblxuICAvLyBjaGFuZ2VNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAvLyAgIHRoaXMubWVzc2FnZVNvdXJjZS5uZXh0KG1lc3NhZ2UpO1xuICAvLyB9XG5cbiAgZ2V0QUxsKCk6IE9ic2VydmFibGU8YW55PntcblxuICAgIC8vIGxldCBhbGwgPSB7XG4gICAgLy8gICBxdWVzdGlvbkxpc3Q6W11cbiAgICAvLyB9XG4gICAgdGhpcy5hbGwgPSB7XG4gICAgICBxdWVzdGlvbkxpc3Q6dGhpcy5saXN0XG4gICAgfVxuICAgIC8vIHJldHVybiB0aGlzLmNvbW11bmljYXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICByZXR1cm4gdGhpcy5hbGw7XG4gIH1cblxuICBcbn1cbiJdfQ==