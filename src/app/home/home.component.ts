import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { TodoService } from '../todo.service';
import { SingleItemComponent } from '../single-item/single-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  items: Item[];
  itemCounter: number;
  completedCount: number = 0;


  constructor(private todoService: TodoService) { }

  handleCompletedToggled(isCompleted) {
    if (isCompleted) {
      this.completedCount++;
    } else {
      this.completedCount--;
    }
  }

  handleItemDeleted(i) {
    if(this.items[i].completed) {
      this.completedCount--;
    }
    this.items.splice(i, 1);
  }

  ngOnInit() {
    this.todoService.getItems().subscribe((items) => {
      this.items = items;

    this.itemCounter = this.items.length;

    items.forEach(element => { if(element.completed) this.completedCount++; });
    })
  }

}
