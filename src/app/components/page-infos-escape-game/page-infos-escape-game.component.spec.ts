import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfosEscapeGameComponent } from './page-infos-escape-game.component';

describe('PageInfosEscapeGameComponent', () => {
  let component: PageInfosEscapeGameComponent;
  let fixture: ComponentFixture<PageInfosEscapeGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInfosEscapeGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfosEscapeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
