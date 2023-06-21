import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerprodutoPage } from './verproduto.page';

describe('VerprodutoPage', () => {
  let component: VerprodutoPage;
  let fixture: ComponentFixture<VerprodutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerprodutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
