import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarracaContactoComponent } from './barraca-contacto.component';

describe('BarracaContactoComponent', () => {
  let component: BarracaContactoComponent;
  let fixture: ComponentFixture<BarracaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarracaContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarracaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
