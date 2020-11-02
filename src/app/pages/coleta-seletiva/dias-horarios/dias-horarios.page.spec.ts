import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiasHorariosPage } from './dias-horarios.page';

describe('DiasHorariosPage', () => {
  let component: DiasHorariosPage;
  let fixture: ComponentFixture<DiasHorariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasHorariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiasHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
