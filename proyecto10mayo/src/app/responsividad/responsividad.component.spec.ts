import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsividadComponent } from './responsividad.component';

describe('ResponsividadComponent', () => {
  let component: ResponsividadComponent;
  let fixture: ComponentFixture<ResponsividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
