import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColetaSeletivaPage } from './coleta-seletiva.page';

describe('ColetaSeletivaPage', () => {
  let component: ColetaSeletivaPage;
  let fixture: ComponentFixture<ColetaSeletivaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColetaSeletivaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColetaSeletivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
