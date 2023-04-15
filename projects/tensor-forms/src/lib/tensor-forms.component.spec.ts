import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorFormsComponent } from './tensor-forms.component';

describe('TensorFormsComponent', () => {
  let component: TensorFormsComponent;
  let fixture: ComponentFixture<TensorFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensorFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TensorFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
