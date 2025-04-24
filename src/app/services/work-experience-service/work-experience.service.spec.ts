import { TestBed } from '@angular/core/testing';
import { WorkExperienceService } from './work-experience.service';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

describe('WorkExperienceService', () => {
  let service: WorkExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [
          AngularFireModule.initializeApp(environment.firebase),
      ],
    });
    service = TestBed.inject(WorkExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get WorkExperience collection', () => {
    expect(service.getWorkExperience()).not.toBeNull();
  });
});
