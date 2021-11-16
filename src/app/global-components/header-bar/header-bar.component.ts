import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  @Output() onChangeTheme = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changeTheme($event) {
    this.onChangeTheme.emit($event);
  }

}
