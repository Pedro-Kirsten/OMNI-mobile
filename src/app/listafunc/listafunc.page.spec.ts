import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListafuncPage } from './listafunc.page';

describe('ListafuncPage', () => {
  let component: ListafuncPage;
  let fixture: ComponentFixture<ListafuncPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListafuncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
