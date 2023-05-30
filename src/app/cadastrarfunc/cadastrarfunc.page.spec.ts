import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarfuncPage } from './cadastrarfunc.page';

describe('CadastrarfuncPage', () => {
  let component: CadastrarfuncPage;
  let fixture: ComponentFixture<CadastrarfuncPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarfuncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
