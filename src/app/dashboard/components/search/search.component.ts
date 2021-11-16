import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() keyup = new EventEmitter<any>();

  public value:string;

  constructor() { }

  ngOnInit() {
  }

  onKeyup($event) {
    this.value = $event.target.value;
    this.keyup.emit($event);
  }

}
