import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuiSommesNousComponent } from './page-qui-sommes-nous.component';

describe('PageQuiSommesNousComponent', () => {
  let component: PageQuiSommesNousComponent;
  let fixture: ComponentFixture<PageQuiSommesNousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuiSommesNousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuiSommesNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
