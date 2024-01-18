import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrModuleComponent } from './hr-module.component';

describe('HrModuleComponent', () => {
  let component: HrModuleComponent;
  let fixture: ComponentFixture<HrModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrModuleComponent]
    });
    fixture = TestBed.createComponent(HrModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
