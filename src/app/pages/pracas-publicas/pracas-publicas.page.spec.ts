import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracasPublicasPage } from './pracas-publicas.page';

describe('PracasPublicasPage', () => {
  let component: PracasPublicasPage;
  let fixture: ComponentFixture<PracasPublicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracasPublicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracasPublicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
