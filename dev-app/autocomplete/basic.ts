﻿

export class Basic {  
  public sportsData: Object[] = [
    { Id: 'Game1', Game: 'American Football' },
    { Id: 'Game2', Game: 'Badminton' },
    { Id: 'Game3', Game: 'Basketball' },
    { Id: 'Game4', Game: 'Cricket' },
    { Id: 'Game5', Game: 'Football' },
    { Id: 'Game6', Game: 'Golf' },
    { Id: 'Game7', Game: 'Hockey' },
    { Id: 'Game8', Game: 'Rugby' },
    { Id: 'Game9', Game: 'Snooker' },
    { Id: 'Game10', Game: 'Tennis' }
  ];
  // maps the appropriate column to fields property
  public fields: Object = { value: 'Game' };
  public value: string = '';
  // set the placeholder to AutoComplete input
  public waterMark: string = 'e.g. Basketball';  
}
