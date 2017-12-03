import { Injectable } from '@angular/core';
import { Item, Priority } from './item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodoService {

  items: Item[] = [{
    task: "dati Zakiju pare",
    completed: true,
    priority: Priority.LOW
  },{
    task: "uzeti od zakija pare",
    completed: false,
    priority: Priority.HIGH
  },{
    task: "uzeti od zakija pare opet",
    completed: false,
    priority: Priority.MEDIUM
  },{
    task: "uzeti od zakija pare, nes vjerovati, opet",
    completed: false,
    priority: Priority.LOW
  },{
    task: "uzeti od zakija pare i opet",
    completed: false,
    priority: Priority.HIGH
  },{
    task: "uzeti od zakija pare opet al mu reci da dodje jos para",
    completed: false,
    priority: Priority.MEDIUM
  },{
    task: "uzeti od zakija pare koje misli da mi dodje",
    completed: false,
    priority: Priority.LOW
  },{
    task: "uzeti od bote sad malo pare",
    completed: false,
    priority: Priority.MEDIUM
  }
  ];

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  addItem(item: Item): Observable<Item> {
    this.items.push(item);
    return of(item);
  }
}
