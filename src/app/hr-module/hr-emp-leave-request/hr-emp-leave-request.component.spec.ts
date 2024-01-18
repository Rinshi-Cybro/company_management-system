import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEmpLeaveRequestComponent } from './hr-emp-leave-request.component';

describe('HrEmpLeaveRequestComponent', () => {
  let component: HrEmpLeaveRequestComponent;
  let fixture: ComponentFixture<HrEmpLeaveRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrEmpLeaveRequestComponent]
    });
    fixture = TestBed.createComponent(HrEmpLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
