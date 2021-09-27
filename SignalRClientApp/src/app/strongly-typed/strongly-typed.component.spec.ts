import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronglyTypedComponent } from './strongly-typed.component';

describe('StronglyTypedComponent', () => {
  let component: StronglyTypedComponent;
  let fixture: ComponentFixture<StronglyTypedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StronglyTypedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StronglyTypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
