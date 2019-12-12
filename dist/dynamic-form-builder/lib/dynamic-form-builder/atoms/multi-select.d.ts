import { EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class MultiSelectComponent {
    cdr: ChangeDetectorRef;
    field: any;
    form: any;
    readonly isValid: any;
    readonly isDirty: any;
    childrenDropEvent: EventEmitter<string>;
    activeModelData: any;
    validations: any;
    required: any;
    autoCollect: any;
    openEdit: boolean;
    _id: any;
    description: any;
    minDate: any;
    maxDate: any;
    min: any;
    max: any;
    label: any;
    type: any;
    placeholder: any;
    options: any;
    pageNumber: any;
    constructor(cdr: ChangeDetectorRef);
    onDropNew($event: any, field: any): void;
    closeModel(action: any): void;
    loadFormElement(item: any): void;
}
