import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DynamicFormBuilderService } from './dynamic-form-builder.service';
import { Observable } from 'rxjs';
export declare class DynamicFormBuilderComponent implements OnInit {
    private http;
    private _formBuilder;
    private fb;
    private dynamicServe;
    form: FormGroup;
    unsubcribe: any;
    jsonData: any;
    formData: any;
    pageNumber: any;
    events: Observable<any>;
    questionTrigger: EventEmitter<{}>;
    eventsSubscription: any;
    criteriaList: any;
    fields: any[];
    showQuestionBlock: boolean;
    constructor(http: HttpClient, _formBuilder: FormBuilder, fb: FormBuilder, dynamicServe: DynamicFormBuilderService);
    showQBlock(): void;
    getCriteria(): any;
    ngOnInit(): void;
    onUpload(e: any): void;
    getFields(): any[];
    ngDistroy(): void;
    sendToService(data: any): void;
    getToolObj(ele: any, len: any): {};
    onDrop(ele: any, action?: string): void;
    formBuild(data: any): void;
    onSubmit(value: any): void;
    ngOnDestroy(): void;
    onFieldUpdate($event: any): void;
}
