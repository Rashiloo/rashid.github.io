import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { EducationService } from '../services/education-service/education.service';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let service: EducationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(EducationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Education documents from Firestore', () => {
    expect(service.getEducation()).not.toBeNull();
  });
});
