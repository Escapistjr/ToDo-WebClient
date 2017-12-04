import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item, Priority } from '../item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updatedItem: Item;
  Priority = Priority;
  private sub: any;


  constructor(private todoService: TodoService, private routerService: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
    this.todoService.getItem(+params['id']).subscribe((item) => {this.updatedItem = item;}) ;
    });
  }

  updateItem() {
    this.routerService.navigate(['/home']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

