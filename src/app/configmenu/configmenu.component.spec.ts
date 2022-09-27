import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmenuComponent } from './configmenu.component';

describe('ConfigmenuComponent', () => {
  let component: ConfigmenuComponent;
  let fixture: ComponentFixture<ConfigmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
