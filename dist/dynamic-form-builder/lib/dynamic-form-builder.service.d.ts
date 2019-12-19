import { Subject, Observable } from 'rxjs';
export declare class DynamicFormBuilderService {
    communicateSubject: Subject<any>;
    list: any;
    all: any;
    constructor();
    currentMessage(): any;
    sendData(obj: any): void;
    getALl(): Observable<any>;
}
