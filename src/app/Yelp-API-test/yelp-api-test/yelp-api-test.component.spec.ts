import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpApiTestComponent } from './yelp-api-test.component';

describe('YelpApiTestComponent', () => {
  let component: YelpApiTestComponent;
  let fixture: ComponentFixture<YelpApiTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelpApiTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpApiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
