import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopStylistCardComponent} from './top-stylist-card.component';

describe('TopStylistCardComponent', () => {
  let component: TopStylistCardComponent;
  let fixture: ComponentFixture<TopStylistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopStylistCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStylistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
