import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuriosidadesPage } from './curiosidades.page';

describe('CuriosidadesPage', () => {
  let component: CuriosidadesPage;
  let fixture: ComponentFixture<CuriosidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriosidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuriosidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
