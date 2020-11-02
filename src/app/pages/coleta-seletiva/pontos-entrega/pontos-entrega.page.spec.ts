import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PontosEntregaPage } from './pontos-entrega.page';

describe('PontosEntregaPage', () => {
  let component: PontosEntregaPage;
  let fixture: ComponentFixture<PontosEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosEntregaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PontosEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
