import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activitysuggestion } from './activitysuggestion';

describe('Activitysuggestion', () => {
  let component: Activitysuggestion;
  let fixture: ComponentFixture<Activitysuggestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activitysuggestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activitysuggestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
