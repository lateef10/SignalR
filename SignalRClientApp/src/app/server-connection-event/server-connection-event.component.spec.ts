import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerConnectionEventComponent } from './server-connection-event.component';

describe('ServerConnectionEventComponent', () => {
  let component: ServerConnectionEventComponent;
  let fixture: ComponentFixture<ServerConnectionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerConnectionEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerConnectionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
