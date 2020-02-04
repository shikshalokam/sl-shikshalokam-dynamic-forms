import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormLibraryComponent } from './dynamic-form-library.component';

describe('DynamicFormLibraryComponent', () => {
  let component: DynamicFormLibraryComponent;
  let fixture: ComponentFixture<DynamicFormLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
