import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAndPaymentComponent } from './confirm-and-payment.component';

describe('ConfirmAndPaymentComponent', () => {
  let component: ConfirmAndPaymentComponent;
  let fixture: ComponentFixture<ConfirmAndPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAndPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmAndPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
