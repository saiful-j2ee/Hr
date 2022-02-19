import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarytableComponent } from './salarytable.component';

describe('SalarytableComponent', () => {
  let component: SalarytableComponent;
  let fixture: ComponentFixture<SalarytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarytableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
