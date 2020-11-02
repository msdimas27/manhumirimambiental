import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracaPage } from './praca.page';

describe('PracaPage', () => {
  let component: PracaPage;
  let fixture: ComponentFixture<PracaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
