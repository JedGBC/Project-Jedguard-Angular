import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListArticlesComponent } from './show-list-articles.component';

describe('ShowListArticlesComponent', () => {
  let component: ShowListArticlesComponent;
  let fixture: ComponentFixture<ShowListArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowListArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
