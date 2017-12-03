import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Item, Priority } from '../item';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {

  @Input() singleItem: Item;
  Priority = Priority;

  @Output() completedToggled = new EventEmitter();
  @Output() itemDeleted = new EventEmitter();

  constructor() { }

  toggleCompleted() {
    this.singleItem.completed = !this.singleItem.completed;
    this.completedToggled.emit(this.singleItem.completed);
  }

  deleteItem() {
    this.itemDeleted.emit();
  }

  ngOnInit() {
  }

}
