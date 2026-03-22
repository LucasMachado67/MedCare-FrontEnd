import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assistants } from './assistants';

describe('Assistants', () => {
  let component: Assistants;
  let fixture: ComponentFixture<Assistants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assistants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assistants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
