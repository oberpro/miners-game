import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgEinheitComponent } from './mg-einheit.component';

describe('MgEinheitComponent', () => {
  let component: MgEinheitComponent;
  let fixture: ComponentFixture<MgEinheitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgEinheitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgEinheitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
