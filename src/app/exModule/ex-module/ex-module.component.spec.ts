import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExModuleComponent } from './ex-module.component';

describe('ExModuleComponent', () => {
  let component: ExModuleComponent;
  let fixture: ComponentFixture<ExModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExModuleComponent]
    });
    fixture = TestBed.createComponent(ExModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
