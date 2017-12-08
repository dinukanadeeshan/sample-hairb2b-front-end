import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopStylistsComponent} from './top-stylists.component';

describe('TopStylistsComponent', () => {
  let component: TopStylistsComponent;
  let fixture: ComponentFixture<TopStylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopStylistsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
