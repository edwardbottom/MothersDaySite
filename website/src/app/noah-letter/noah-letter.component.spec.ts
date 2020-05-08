import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoahLetterComponent } from './noah-letter.component';

describe('NoahLetterComponent', () => {
  let component: NoahLetterComponent;
  let fixture: ComponentFixture<NoahLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoahLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoahLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
