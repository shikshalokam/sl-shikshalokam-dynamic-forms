import { FormGroup } from '@angular/forms';
export declare class FileComponent {
    field: any;
    form: FormGroup;
    readonly isValid: boolean;
    readonly isDirty: boolean;
    constructor();
    ngOnChange(): void;
}
