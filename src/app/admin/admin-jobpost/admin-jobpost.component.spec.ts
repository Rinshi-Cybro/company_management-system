import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobpostComponent } from './admin-jobpost.component';

describe('AdminJobpostComponent', () => {
  let component: AdminJobpostComponent;
  let fixture: ComponentFixture<AdminJobpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminJobpostComponent]
    });
    fixture = TestBed.createComponent(AdminJobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
