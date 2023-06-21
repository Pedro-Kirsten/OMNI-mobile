import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TelaprincipalPage } from './telaprincipal.page';

describe('TelaprincipalPage', () => {
  let component: TelaprincipalPage;
  let fixture: ComponentFixture<TelaprincipalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelaprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
