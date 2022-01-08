import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FjlskdjfComponent } from './fjlskdjf.component';

describe('FjlskdjfComponent', () => {
  let component: FjlskdjfComponent;
  let fixture: ComponentFixture<FjlskdjfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FjlskdjfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FjlskdjfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
