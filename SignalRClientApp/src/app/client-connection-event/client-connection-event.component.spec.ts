import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConnectionEventComponent } from './client-connection-event.component';

describe('ClientConnectionEventComponent', () => {
  let component: ClientConnectionEventComponent;
  let fixture: ComponentFixture<ClientConnectionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientConnectionEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConnectionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
