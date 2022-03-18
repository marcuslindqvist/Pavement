import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistLeftListComponent } from './checklist-left-list.component';

describe('ChecklistLeftListComponent', () => {
  let component: ChecklistLeftListComponent;
  let fixture: ComponentFixture<ChecklistLeftListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistLeftListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistLeftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
