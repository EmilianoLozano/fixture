import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemisFinalComponent } from './semis-final.component';

describe('SemisFinalComponent', () => {
  let component: SemisFinalComponent;
  let fixture: ComponentFixture<SemisFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemisFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemisFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
