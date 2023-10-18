import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecupPassPage } from './recup-pass.page';

describe('RecupPassPage', () => {
  let component: RecupPassPage;
  let fixture: ComponentFixture<RecupPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecupPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
