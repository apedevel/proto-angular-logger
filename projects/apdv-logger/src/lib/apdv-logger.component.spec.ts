import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdvLoggerComponent } from './apdv-logger.component';

describe('ApdvLoggerComponent', () => {
  let component: ApdvLoggerComponent;
  let fixture: ComponentFixture<ApdvLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApdvLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApdvLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
