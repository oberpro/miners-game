import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgToolbarComponent } from './mg-toolbar.component';

describe('MgToolbarComponent', () => {
  let component: MgToolbarComponent;
  let fixture: ComponentFixture<MgToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
