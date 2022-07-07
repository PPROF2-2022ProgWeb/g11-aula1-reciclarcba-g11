import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionRecComponent } from './seccion-rec.component';

describe('SeccionRecComponent', () => {
  let component: SeccionRecComponent;
  let fixture: ComponentFixture<SeccionRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
