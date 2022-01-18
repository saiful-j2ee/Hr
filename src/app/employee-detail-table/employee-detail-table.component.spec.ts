import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailTableComponent } from './employee-detail-table.component';

describe('EmployeeDetailTableComponent', () => {
  let component: EmployeeDetailTableComponent;
  let fixture: ComponentFixture<EmployeeDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
