import { TestBed } from '@angular/core/testing';

import { DynamicFormLibraryService } from './dynamic-form-library.service';

describe('DynamicFormLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicFormLibraryService = TestBed.get(DynamicFormLibraryService);
    expect(service).toBeTruthy();
  });
});
