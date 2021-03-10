import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

interface Manage {
  value: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}
  manage: Manage[] = [{ value: 'Save Data' }, { value: 'Fetch Data' }];
  selected = this.manage[0].value;

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
