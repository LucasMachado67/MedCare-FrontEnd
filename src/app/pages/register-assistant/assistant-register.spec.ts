import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantRegister } from './assistant-register';

describe('AssistantRegister', () => {
  let component: AssistantRegister;
  let fixture: ComponentFixture<AssistantRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
