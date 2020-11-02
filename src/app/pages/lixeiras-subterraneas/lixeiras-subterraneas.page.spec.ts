import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LixeirasSubterraneasPage } from './lixeiras-subterraneas.page';

describe('LixeirasSubterraneasPage', () => {
  let component: LixeirasSubterraneasPage;
  let fixture: ComponentFixture<LixeirasSubterraneasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LixeirasSubterraneasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LixeirasSubterraneasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
