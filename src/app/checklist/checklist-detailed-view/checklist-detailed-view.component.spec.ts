import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistDetailedViewComponent } from './checklist-detailed-view.component';

describe('ChecklistDetailedViewComponent', () => {
  let component: ChecklistDetailedViewComponent;
  let fixture: ComponentFixture<ChecklistDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistDetailedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
