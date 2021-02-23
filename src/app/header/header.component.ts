import { Component } from '@angular/core';

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
}
