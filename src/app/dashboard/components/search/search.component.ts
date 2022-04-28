import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() cities;
  @Output() keyup = new EventEmitter<any>();

  public value:string;

  constructor() { }

  ngOnInit() {
  }

  onKeyup($event) {
    this.value = $event.target.value;
    console.log("value",this.value);
    if(this.value) {
      this.keyup.emit($event);
    }else {
      this.cities = [];
    }
  }

}
