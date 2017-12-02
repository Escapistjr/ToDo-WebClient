import { Injectable } from '@angular/core';
import { Item, Priority } from './item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodoService {

  items: Item[] = [{
    task: "uzeti od zakija pare",
    completed: false,
    priority: Priority.HIGH
  },{
    task: "uzeti od zakija pare opet",
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
