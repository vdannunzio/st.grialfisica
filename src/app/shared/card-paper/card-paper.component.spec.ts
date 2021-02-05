import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardPaperComponent } from './card-paper.component';

describe('CardPaperComponent', () => {
  let component: CardPaperComponent;
  let fixture: ComponentFixture<CardPaperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
