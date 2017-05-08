import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgEinheitenComponent } from './mg-einheiten.component';

describe('MgEinheitenComponent', () => {
  let component: MgEinheitenComponent;
  let fixture: ComponentFixture<MgEinheitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgEinheitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgEinheitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
