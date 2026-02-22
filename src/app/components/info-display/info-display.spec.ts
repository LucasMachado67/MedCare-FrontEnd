import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDisplay } from './info-display';

describe('InfoDisplay', () => {
  let component: InfoDisplay;
  let fixture: ComponentFixture<InfoDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
