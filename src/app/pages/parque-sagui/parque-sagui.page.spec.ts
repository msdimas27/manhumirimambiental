import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParqueSaguiPage } from './parque-sagui.page';

describe('ParqueSaguiPage', () => {
  let component: ParqueSaguiPage;
  let fixture: ComponentFixture<ParqueSaguiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParqueSaguiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParqueSaguiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
