import { Injectable } from '@angular/core';
import { Item, Priority } from './item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodoService {

  static globalItemId: number = 9;

  items: Item[] = [{
    id: 1,
    task: "dati Zakiju pare",
    completed: true,
    priority: Priority.LOW
  },{
    id: 2,
    task: "uzeti od zakija pare",
    completed: false,
    priority: Priority.HIGH
  },{
    id: 3,
    task: "uzeti od zakija pare opet",
    completed: false,
    priority: Priority.MEDIUM
  },{
    id: 4,
    task: "uzeti od zakija pare, nes vjerovati, opet",
    completed: false,
    priority: Priority.LOW
  },{
    id: 5,
    task: "uzeti od zakija pare i opet",
    completed: false,
    priority: Priority.HIGH
  },{
    id: 6,
    task: "uzeti od zakija pare opet al mu reci da dodje jos para",
    completed: false,
    priority: Priority.MEDIUM
  },{
    id: 7,
    task: "uzeti od zakija pare koje misli da mi dodje",
    completed: false,
    priority: Priority.LOW
  },{
    id: 8,
    task: "uzeti od bote sad malo pare",
    completed: false,
    priority: Priority.MEDIUM
  }
  ];

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getItem(id: number): Observable<Item> {
    for(let i=0; i < this.items.length; i++) {
      if(this.items[i].id === id) {
        return of (this.items[i]);
      } 
    }
    return of(null);
  }

  addItem(item: Item): Observable<Item> {
    item.id = TodoService.globalItemId;
    this.items.push(item);
    TodoService.globalItemId++;
    return of(item);
  }
}
