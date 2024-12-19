import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeForexComponent } from './realtime-forex.component';

describe('RealtimeForexComponent', () => {
  let component: RealtimeForexComponent;
  let fixture: ComponentFixture<RealtimeForexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeForexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
