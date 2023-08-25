import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css']
})
export class TheHeaderComponent {
  @Output() selectedTab:EventEmitter<string> = new EventEmitter<string>();

  onSelectedTab(selectedTab: string) {
    this.selectedTab.emit(selectedTab);
  }
}
