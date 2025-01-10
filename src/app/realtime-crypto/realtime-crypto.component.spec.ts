import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeCryptoComponent } from './realtime-crypto.component';

describe('RealtimeCryptoComponent', () => {
  let component: RealtimeCryptoComponent;
  let fixture: ComponentFixture<RealtimeCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeCryptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
