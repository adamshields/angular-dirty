/**
 * DropDownList Default functionality Sample
 */
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // define the JSON of data
  public sportsData;

  private dataMock: Object[] = [
    'Football',
    'Badminton',
    'Basketball',
    'Cricket',
    'Football',
  ];
  public formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      selectedItem: new FormControl('Badminton'),
    });
    setTimeout(() => (this.sportsData = this.dataMock));
  }

  public onChange(args: any): void {
    alert('change called');
  }

  onBtnClick() {
    alert(`is dirty: ${this.formGroup.dirty}`);
  }
}
