import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfosBowlingComponent } from './page-infos-bowling.component';

describe('PageInfosBowlingComponent', () => {
  let component: PageInfosBowlingComponent;
  let fixture: ComponentFixture<PageInfosBowlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInfosBowlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfosBowlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
