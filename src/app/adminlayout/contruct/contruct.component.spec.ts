import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContructComponent } from './contruct.component';

describe('ContructComponent', () => {
  let component: ContructComponent;
  let fixture: ComponentFixture<ContructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContructComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
