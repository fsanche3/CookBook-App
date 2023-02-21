import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandombuttonComponent } from './randombutton.component';

describe('RandombuttonComponent', () => {
  let component: RandombuttonComponent;
  let fixture: ComponentFixture<RandombuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandombuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandombuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
