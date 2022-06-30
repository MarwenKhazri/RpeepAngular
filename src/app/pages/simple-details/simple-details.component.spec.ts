import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDetailsComponent } from './simple-details.component';

describe('SimpleDetailsComponent', () => {
  let component: SimpleDetailsComponent;
  let fixture: ComponentFixture<SimpleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
