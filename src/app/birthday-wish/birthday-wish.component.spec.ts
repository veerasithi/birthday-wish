import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayWishComponent } from './birthday-wish.component';

describe('BirthdayWishComponent', () => {
  let component: BirthdayWishComponent;
  let fixture: ComponentFixture<BirthdayWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayWishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthdayWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
