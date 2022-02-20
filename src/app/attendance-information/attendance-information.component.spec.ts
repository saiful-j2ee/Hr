import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceInformationComponent } from './attendance-information.component';

describe('AttendanceInformationComponent', () => {
  let component: AttendanceInformationComponent;
  let fixture: ComponentFixture<AttendanceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
