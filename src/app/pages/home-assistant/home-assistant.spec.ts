import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAssistant } from './home-assistant';

describe('HomeAssistant', () => {
  let component: HomeAssistant;
  let fixture: ComponentFixture<HomeAssistant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAssistant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAssistant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
