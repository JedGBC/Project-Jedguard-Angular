import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispathAddressComponent } from './dispath-address.component';

describe('DispathAddressComponent', () => {
  let component: DispathAddressComponent;
  let fixture: ComponentFixture<DispathAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispathAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispathAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
