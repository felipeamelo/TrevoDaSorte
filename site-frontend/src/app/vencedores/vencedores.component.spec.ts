import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule }          from '@angular/common/http/testing';
import { MatTableModule,
         MatProgressSpinnerModule }         from '@angular/material';
import { MatTabsModule }                    from '@angular/material/tabs';
import { VencedoresComponent }              from './vencedores.component';

describe('VencedoresComponent', () => {
  let component: VencedoresComponent;
  let fixture: ComponentFixture<VencedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatTableModule, MatProgressSpinnerModule, MatTabsModule ],
      declarations: [ VencedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VencedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
