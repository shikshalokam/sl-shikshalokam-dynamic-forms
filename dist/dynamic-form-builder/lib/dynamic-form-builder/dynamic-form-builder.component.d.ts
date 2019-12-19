import { OnInit, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class DynamicFormBuilderComponent implements OnInit {
    onFieldUpdate: EventEmitter<{}>;
    fields: any[];
    criteriaList: any[];
    form: any;
    formData: any;
    constructor();
    drop(event: CdkDragDrop<string[]>): void;
    copyOrDeleteEvent(data: any): void;
    eventFromChild(data: any): void;
    ngOnInit(): void;
}
