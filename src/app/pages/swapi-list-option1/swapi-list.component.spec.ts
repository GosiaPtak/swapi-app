import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiListOpt1Component } from './swapi-list.component';

describe('SwapiListOpt1Component', () => {
  let component: SwapiListOpt1Component;
  let fixture: ComponentFixture<SwapiListOpt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwapiListOpt1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiListOpt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
