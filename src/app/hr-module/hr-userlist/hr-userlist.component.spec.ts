import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrUserlistComponent } from './hr-userlist.component';

describe('HrUserlistComponent', () => {
  let component: HrUserlistComponent;
  let fixture: ComponentFixture<HrUserlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrUserlistComponent]
    });
    fixture = TestBed.createComponent(HrUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
