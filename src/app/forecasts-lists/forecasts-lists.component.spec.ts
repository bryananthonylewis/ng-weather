import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ForcastsListsComponent } from "./forecasts-lists.component";

describe("ForcastsListsComponent", () => {
  let component: ForcastsListsComponent;
  let fixture: ComponentFixture<ForcastsListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForcastsListsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
