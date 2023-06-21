import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PaginalojaPage } from './paginaloja.page';

describe('PaginalojaPage', () => {
  let component: PaginalojaPage;
  let fixture: ComponentFixture<PaginalojaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginalojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
