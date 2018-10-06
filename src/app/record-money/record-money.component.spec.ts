import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMoneyComponent } from './record-money.component';

describe('RecordMoneyComponent', () => {
  let component: RecordMoneyComponent;
  let fixture: ComponentFixture<RecordMoneyComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordMoneyComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(RecordMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
