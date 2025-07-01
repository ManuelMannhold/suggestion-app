import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitysuggestionComponent } from './activitysuggestion.component';

describe('ActivitysuggestionComponent', () => {
  let component: ActivitysuggestionComponent;
  let fixture: ComponentFixture<ActivitysuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitysuggestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitysuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
