import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesControlsComponent } from './notes-controls.component';

describe('NotesControlsComponent', () => {
  let component: NotesControlsComponent;
  let fixture: ComponentFixture<NotesControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
