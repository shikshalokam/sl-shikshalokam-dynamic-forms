/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-form-builder.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// @Injectable({
//   // providedIn: 'root'
// })
export class DynamicFormBuilderService {
    constructor() {
        this.communicateSubject = new Subject();
        // private messageSource = new BehaviorSubject('default message');
        // currentMessage = this.messageSource.asObservable();
        this.list = [];
        this.all = [];
    }
    /**
     * @return {?}
     */
    currentMessage() {
        return this.list;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    sendData(obj) {
        console.log("obj", obj);
        this.list = obj;
        this.communicateSubject.next();
    }
    // setQuestionList(list){
    //   this.list = list;
    // }
    // changeMessage(message: string) {
    //   this.messageSource.next(message);
    // }
    /**
     * @return {?}
     */
    getALl() {
        // let all = {
        //   questionList:[]
        // }
        this.all = {
            questionList: this.list
        };
        // return this.communicateSubject.asObservable();
        return this.all;
    }
}
if (false) {
    /** @type {?} */
    DynamicFormBuilderService.prototype.communicateSubject;
    /** @type {?} */
    DynamicFormBuilderService.prototype.list;
    /** @type {?} */
    DynamicFormBuilderService.prototype.all;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFrQixPQUFPLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7QUFNMUQsTUFBTSxPQUFPLHlCQUF5QjtJQVdwQztRQVRBLHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDOzs7UUFLdEQsU0FBSSxHQUFLLEVBQUUsQ0FBQztRQUVaLFFBQUcsR0FBTSxFQUFFLENBQUM7SUFFSSxDQUFDOzs7O0lBRWpCLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRztRQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7Ozs7O0lBVUQsTUFBTTtRQUVKLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsSUFBSTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUc7WUFDVCxZQUFZLEVBQUMsSUFBSSxDQUFDLElBQUk7U0FDdkIsQ0FBQTtRQUNELGlEQUFpRDtRQUNqRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUdGOzs7SUE1Q0MsdURBQXNEOztJQUt0RCx5Q0FBWTs7SUFFWix3Q0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCxTdWJqZWN0LE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuXG4vLyBASW5qZWN0YWJsZSh7XG4vLyAgIC8vIHByb3ZpZGVkSW46ICdyb290J1xuLy8gfSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUJ1aWxkZXJTZXJ2aWNlIHtcblxuICBjb21tdW5pY2F0ZVN1YmplY3Q6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAvLyBwcml2YXRlIG1lc3NhZ2VTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCdkZWZhdWx0IG1lc3NhZ2UnKTtcbiAgLy8gY3VycmVudE1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgbGlzdDphbnk9W107XG5cbiAgYWxsOmFueSA9W107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBjdXJyZW50TWVzc2FnZSgpe1xuICAgIHJldHVybiB0aGlzLmxpc3Q7XG4gIH1cblxuICBzZW5kRGF0YShvYmopIHtcblxuICAgIGNvbnNvbGUubG9nKFwib2JqXCIsb2JqKTtcblxuICAgIHRoaXMubGlzdCA9IG9iajtcbiAgICB0aGlzLmNvbW11bmljYXRlU3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICAvLyBzZXRRdWVzdGlvbkxpc3QobGlzdCl7XG4gIC8vICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgLy8gfVxuXG4gIC8vIGNoYW5nZU1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gIC8vICAgdGhpcy5tZXNzYWdlU291cmNlLm5leHQobWVzc2FnZSk7XG4gIC8vIH1cblxuICBnZXRBTGwoKTogT2JzZXJ2YWJsZTxhbnk+e1xuXG4gICAgLy8gbGV0IGFsbCA9IHtcbiAgICAvLyAgIHF1ZXN0aW9uTGlzdDpbXVxuICAgIC8vIH1cbiAgICB0aGlzLmFsbCA9IHtcbiAgICAgIHF1ZXN0aW9uTGlzdDp0aGlzLmxpc3RcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoaXMuY29tbXVuaWNhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHJldHVybiB0aGlzLmFsbDtcbiAgfVxuXG4gIFxufSJdfQ==