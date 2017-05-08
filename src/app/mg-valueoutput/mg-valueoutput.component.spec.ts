import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgValueoutputComponent } from './mg-valueoutput.component';

describe('MgValueoutputComponent', () => {
  let component: MgValueoutputComponent;
  let fixture: ComponentFixture<MgValueoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgValueoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgValueoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
