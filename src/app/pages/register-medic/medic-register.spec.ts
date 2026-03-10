import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicRegister } from './medic-register';

describe('MedicRegister', () => {
  let component: MedicRegister;
  let fixture: ComponentFixture<MedicRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
