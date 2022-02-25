import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgLogsComponent } from './msg-logs.component';

describe('MsgLogsComponent', () => {
  let component: MsgLogsComponent;
  let fixture: ComponentFixture<MsgLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
