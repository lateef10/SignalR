import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubmethodComponent } from './hubmethod.component';

describe('HubmethodComponent', () => {
  let component: HubmethodComponent;
  let fixture: ComponentFixture<HubmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubmethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
