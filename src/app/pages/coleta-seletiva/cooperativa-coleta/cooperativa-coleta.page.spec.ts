import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CooperativaColetaPage } from './cooperativa-coleta.page';

describe('CooperativaColetaPage', () => {
  let component: CooperativaColetaPage;
  let fixture: ComponentFixture<CooperativaColetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativaColetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CooperativaColetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
