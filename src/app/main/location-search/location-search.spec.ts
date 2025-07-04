import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSearch } from './location-search';

describe('LocationSearch', () => {
  let component: LocationSearch;
  let fixture: ComponentFixture<LocationSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
