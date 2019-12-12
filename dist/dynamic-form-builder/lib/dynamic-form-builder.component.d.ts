import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class DynamicFormBuilderComponent implements OnInit {
    private http;
    private _formBuilder;
    private fb;
    form: FormGroup;
    unsubcribe: any;
    jsonData: any;
    formData: any;
    pageNumber: any;
    events: Observable<any>;
    questionTrigger: EventEmitter<{}>;
    eventsSubscription: any;
    fields: any[];
    constructor(http: HttpClient, _formBuilder: FormBuilder, fb: FormBuilder);
    ngOnInit(): void;
    onUpload(e: any): void;
    getFields(): any[];
    ngDistroy(): void;
    getToolObj(ele: any, len: any): {};
    onDrop(ele: any, action?: string): void;
    formBuild(data: any): void;
    onSubmit(value: any): void;
    ngOnDestroy(): void;
    onFieldUpdate($event: any): void;
}
