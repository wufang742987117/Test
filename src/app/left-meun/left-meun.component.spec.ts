import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMeunComponent } from './left-meun.component';

describe('LeftMeunComponent', () => {
  let component: LeftMeunComponent;
  let fixture: ComponentFixture<LeftMeunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMeunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMeunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
