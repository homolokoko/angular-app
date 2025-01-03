import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenPhotoComponent } from './taken-photo.component';

describe('TakenPhotoComponent', () => {
  let component: TakenPhotoComponent;
  let fixture: ComponentFixture<TakenPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakenPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
