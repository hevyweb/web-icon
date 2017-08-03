import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {UncategorizedComponent} from './uncategorized.component';

describe('IconListComponent', () => {
    let component: UncategorizedComponent;
  let fixture: ComponentFixture<UncategorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncategorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncategorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
