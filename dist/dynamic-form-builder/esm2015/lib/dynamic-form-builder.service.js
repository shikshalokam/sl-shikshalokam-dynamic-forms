/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybS1idWlsZGVyLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQWtCLE9BQU8sRUFBYSxNQUFNLE1BQU0sQ0FBQzs7OztBQU0xRCxNQUFNLE9BQU8seUJBQXlCO0lBV3BDO1FBVEEsdUJBQWtCLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7OztRQUt0RCxTQUFJLEdBQUssRUFBRSxDQUFDO1FBRVosUUFBRyxHQUFNLEVBQUUsQ0FBQztJQUVJLENBQUM7Ozs7SUFFakIsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxHQUFHO1FBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7Ozs7SUFVRCxNQUFNO1FBRUosY0FBYztRQUNkLG9CQUFvQjtRQUNwQixJQUFJO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRztZQUNULFlBQVksRUFBQyxJQUFJLENBQUMsSUFBSTtTQUN2QixDQUFBO1FBQ0QsaURBQWlEO1FBQ2pELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBR0Y7OztJQTVDQyx1REFBc0Q7O0lBS3RELHlDQUFZOztJQUVaLHdDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LFN1YmplY3QsT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cbi8vIEBJbmplY3RhYmxlKHtcbi8vICAgLy8gcHJvdmlkZWRJbjogJ3Jvb3QnXG4vLyB9KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtQnVpbGRlclNlcnZpY2Uge1xuXG4gIGNvbW11bmljYXRlU3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIC8vIHByaXZhdGUgbWVzc2FnZVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ2RlZmF1bHQgbWVzc2FnZScpO1xuICAvLyBjdXJyZW50TWVzc2FnZSA9IHRoaXMubWVzc2FnZVNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBsaXN0OmFueT1bXTtcblxuICBhbGw6YW55ID1bXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGN1cnJlbnRNZXNzYWdlKCl7XG4gICAgcmV0dXJuIHRoaXMubGlzdDtcbiAgfVxuXG4gIHNlbmREYXRhKG9iaikge1xuXG4gICAgY29uc29sZS5sb2coXCJvYmpcIixvYmopO1xuXG4gICAgdGhpcy5saXN0ID0gb2JqO1xuICAgIHRoaXMuY29tbXVuaWNhdGVTdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIC8vIHNldFF1ZXN0aW9uTGlzdChsaXN0KXtcbiAgLy8gICB0aGlzLmxpc3QgPSBsaXN0O1xuICAvLyB9XG5cbiAgLy8gY2hhbmdlTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLm1lc3NhZ2VTb3VyY2UubmV4dChtZXNzYWdlKTtcbiAgLy8gfVxuXG4gIGdldEFMbCgpOiBPYnNlcnZhYmxlPGFueT57XG5cbiAgICAvLyBsZXQgYWxsID0ge1xuICAgIC8vICAgcXVlc3Rpb25MaXN0OltdXG4gICAgLy8gfVxuICAgIHRoaXMuYWxsID0ge1xuICAgICAgcXVlc3Rpb25MaXN0OnRoaXMubGlzdFxuICAgIH1cbiAgICAvLyByZXR1cm4gdGhpcy5jb21tdW5pY2F0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgcmV0dXJuIHRoaXMuYWxsO1xuICB9XG5cbiAgXG59Il19