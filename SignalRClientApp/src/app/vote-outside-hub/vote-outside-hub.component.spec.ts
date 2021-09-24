import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteOutsideHubComponent } from './vote-outside-hub.component';

describe('VoteOutsideHubComponent', () => {
  let component: VoteOutsideHubComponent;
  let fixture: ComponentFixture<VoteOutsideHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteOutsideHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteOutsideHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
