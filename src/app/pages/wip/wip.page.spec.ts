import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WipPage } from './wip.page';

describe('WipPage', () => {
  let component: WipPage;
  let fixture: ComponentFixture<WipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
