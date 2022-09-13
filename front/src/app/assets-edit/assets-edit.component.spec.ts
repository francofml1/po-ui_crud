import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PoPageDynamicEditModule } from '@po-ui/ng-templates';

import { AssetsEditComponent } from './assets-edit.component';

describe('AssetsEditComponent', () => {
  let component: AssetsEditComponent;
  let fixture: ComponentFixture<AssetsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PoPageDynamicEditModule
      ],
      declarations: [ AssetsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
