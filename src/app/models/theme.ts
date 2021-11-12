export interface Theme {
  name: string;
  properties: any;
  }
  export const theme1: Theme = {
   name: 'lightTheme',
   properties: {
    '--background-color': '#c5f0f8',
    '--card-color': '#ffffff',
    '--title-color': '#2f5d89',
    '--header-color': '#727e8d',
    '--color-option-1': '#396bae',
    '--color-option-2': '#7b98b2',
    '--color-option-3': '#496fa1',
    '--color-option-4': '#3885ca',
    '--color-option-5': '#327fc7',
    '--color-option-6': '#4581c5',
   },
  };
  export const theme2: Theme = {
   name: 'darkTheme',
   properties: {
    '--background-color': '#021025',
    '--card-color': '#051a33',
    '--title-color': '#5f8bbf',
    '--header-color': '#648cba',
    '--color-option-1': '#396bae',
    '--color-option-2': '#7b98b2',
    '--color-option-3': '#496fa1',
    '--color-option-4': '#3885ca',
    '--color-option-5': '#327fc7',
    '--color-option-6': '#4581c5',
   },
  };
