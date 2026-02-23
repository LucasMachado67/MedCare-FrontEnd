import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMedic } from './home-medic';

describe('HomeMedic', () => {
  let component: HomeMedic;
  let fixture: ComponentFixture<HomeMedic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMedic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMedic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
