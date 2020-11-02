import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampeaoPage } from './campeao.page';

describe('CampeaoPage', () => {
  let component: CampeaoPage;
  let fixture: ComponentFixture<CampeaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampeaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampeaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
