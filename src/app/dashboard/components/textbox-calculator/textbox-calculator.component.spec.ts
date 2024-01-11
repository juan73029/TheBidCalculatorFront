import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxCalculatorComponent } from './textbox-calculator.component';

describe('TextboxCalculatorComponent', () => {
  let component: TextboxCalculatorComponent;
  let fixture: ComponentFixture<TextboxCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextboxCalculatorComponent]
    });
    fixture = TestBed.createComponent(TextboxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
