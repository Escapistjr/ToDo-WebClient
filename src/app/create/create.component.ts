import { Component, OnInit } from '@angular/core';
import { Item, Priority } from '../item';
import { Observable } from 'rxjs/Observable';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  item: Item;
  Priority = Priority;

  constructor(private todoService: TodoService, private routerService: Router) { }

  ngOnInit() {
    this.item = new Item();
  }

  submit() {
    this.todoService.addItem(this.item).subscribe((item) => {
      this.routerService.navigate(['/home']);
    });
  }

}
