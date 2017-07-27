import { Component } from '@angular/core';

@Component({
  selector: 'rl-demo-app',
  template: require('./app.component.html')
})
export class AppComponent {
  public tags = ['Car', 'Bus', 'Train'];
  public autocompleteTags = [];
  public autocompleteTagsWithCharLimit = [];
  public autocompleteItems = [
    'Banana',
    'Orange',
    'Apple',
    'Pear',
    'Grape',
    'Potato',
    'Peach'
  ];

  checkLength(length: number): (string) => boolean {
    return (item: string) =>  item.length >= length;
  }  
}
