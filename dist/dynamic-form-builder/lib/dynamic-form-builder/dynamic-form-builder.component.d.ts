import { OnInit, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class DynamicFormBuilderComponent implements OnInit {
    onFieldUpdate: EventEmitter<{}>;
    fields: any[];
    form: any;
    formData: any;
    constructor();
    jsonData: {
        "responseType": string;
        "icon": string;
    }[];
    addElement(element: any): void;
    drop(event: CdkDragDrop<string[]>): void;
    copyOrDeleteEvent(data: any): void;
    eventFromChild(data: any): void;
    ngOnInit(): void;
}
