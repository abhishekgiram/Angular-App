import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('LightswitchComp', () => {
    it('#clicked() should toggle #isOn', () => {
      const comp = new DemoComponent();
      expect(comp.isOn)
        .withContext('off at first')
        .toBe(false);
      comp.clicked();
      expect(comp.isOn)
        .withContext('on after click')
        .toBe(true);
      comp.clicked();
      expect(comp.isOn)
        .withContext('off after second click')
        .toBe(false);
    });
  })

  it('#clicked() should set #message to "is on"', () => {
    const comp = new DemoComponent();
    expect(comp.message)
      .withContext('off at first')
      .toMatch(/is off/i);
    comp.clicked();
    expect(comp.message)
      .withContext('on after clicked')
      .toMatch(/is on/i);
  });
});

