import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadEditComponent } from './cliente-cad-edit.component';

describe('ClienteCadEditComponent', () => {
  let component: ClienteCadEditComponent;
  let fixture: ComponentFixture<ClienteCadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
