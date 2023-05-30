import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarlojaPage } from './editarloja.page';

describe('EditarlojaPage', () => {
  let component: EditarlojaPage;
  let fixture: ComponentFixture<EditarlojaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarlojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
