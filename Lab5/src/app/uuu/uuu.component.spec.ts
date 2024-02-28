import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuuComponent } from './uuu.component';

describe('UuuComponent', () => {
  let component: UuuComponent;
  let fixture: ComponentFixture<UuuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UuuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
