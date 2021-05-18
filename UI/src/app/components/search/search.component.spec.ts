import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly @Output value of search input in component', () => {
    spyOn(component.searchInputValue, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    fixture.nativeElement.querySelector('input').value = '6';
    const inputText = fixture.nativeElement.querySelector('input').value;

    button.click();
    fixture.detectChanges();

    expect(component.searchInputValue.emit).toHaveBeenCalledWith(inputText);
  });
});
