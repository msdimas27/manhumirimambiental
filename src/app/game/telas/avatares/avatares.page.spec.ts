import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvataresPage } from './avatares.page';

describe('AvataresPage', () => {
  let component: AvataresPage;
  let fixture: ComponentFixture<AvataresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvataresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvataresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
