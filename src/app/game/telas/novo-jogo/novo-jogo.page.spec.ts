import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovoJogoPage } from './novo-jogo.page';

describe('NovoJogoPage', () => {
  let component: NovoJogoPage;
  let fixture: ComponentFixture<NovoJogoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoJogoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovoJogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
