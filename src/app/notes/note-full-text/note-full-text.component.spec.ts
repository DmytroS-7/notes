import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFullTextComponent } from './note-full-text.component';

describe('NoteFullTextComponent', () => {
  let component: NoteFullTextComponent;
  let fixture: ComponentFixture<NoteFullTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFullTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFullTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
