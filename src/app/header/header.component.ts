import { Component, EventEmitter, Output } from '@angular/core';

interface Manage {
  value: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  manage: Manage[] = [{ value: 'Save Data' }, { value: 'Fetch Data' }];
  selected = this.manage[0].value;
  @Output() statusSelected = new EventEmitter<string>();
  onSelect(status: string) {
    this.statusSelected.emit(status);
  }
}
