import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { An2PaginationComponent } from './an2-pagination.component';

describe('An2PaginationComponent', () => {
  let component: An2PaginationComponent;
  let fixture: ComponentFixture<An2PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ An2PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(An2PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
