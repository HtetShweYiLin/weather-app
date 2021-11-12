import { Injectable } from '@angular/core';

import { Theme, theme1, theme2 } from "../../models/theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private active: Theme = theme1;
  private availableThemes: Theme[] = [theme1, theme2];
  private activeIndex: number = 0;
  changeActiveTheme(type): void {
    // we are using modulus to traverse array in circular fashion.
    this.activeIndex = type;
    console.log("activeIndex",this.activeIndex)
    this.active = this.availableThemes[this.activeIndex];
    console.log("changeActiveTheme",this.active)

    Object.keys(this.active.properties).forEach((property) => {
      console.log(property,this.active.properties[property])
      document.documentElement.style.setProperty(
       property,
       this.active.properties[property]
      )
    });

  }
}
