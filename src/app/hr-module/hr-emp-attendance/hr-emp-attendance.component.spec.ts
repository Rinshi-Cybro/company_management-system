import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEmpAttendanceComponent } from './hr-emp-attendance.component';

describe('HrEmpAttendanceComponent', () => {
  let component: HrEmpAttendanceComponent;
  let fixture: ComponentFixture<HrEmpAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrEmpAttendanceComponent]
    });
    fixture = TestBed.createComponent(HrEmpAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
