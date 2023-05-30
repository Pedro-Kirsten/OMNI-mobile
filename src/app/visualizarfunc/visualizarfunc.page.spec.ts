import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarfuncPage } from './visualizarfunc.page';

describe('VisualizarfuncPage', () => {
  let component: VisualizarfuncPage;
  let fixture: ComponentFixture<VisualizarfuncPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisualizarfuncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
