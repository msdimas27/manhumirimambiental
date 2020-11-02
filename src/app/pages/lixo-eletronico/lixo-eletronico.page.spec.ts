import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LixoEletronicoPage } from './lixo-eletronico.page';

describe('LixoEletronicoPage', () => {
  let component: LixoEletronicoPage;
  let fixture: ComponentFixture<LixoEletronicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LixoEletronicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LixoEletronicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
