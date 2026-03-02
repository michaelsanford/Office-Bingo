import { TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BoardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
