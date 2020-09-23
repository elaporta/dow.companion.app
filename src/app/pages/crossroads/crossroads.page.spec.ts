import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrossroadsPage } from './crossroads.page';

describe('CrossroadsPage', () => {
  let component: CrossroadsPage;
  let fixture: ComponentFixture<CrossroadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossroadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrossroadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
