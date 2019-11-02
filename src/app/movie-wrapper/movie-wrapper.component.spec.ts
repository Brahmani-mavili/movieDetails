import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWrapperComponent } from './movie-wrapper.component';

describe('MovieWrapperComponent', () => {
  let component: MovieWrapperComponent;
  let fixture: ComponentFixture<MovieWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
