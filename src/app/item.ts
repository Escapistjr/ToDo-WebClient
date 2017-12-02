export enum Priority {
  LOW,
  MEDIUM,
  HIGH
}

export class Item {
  constructor() {
    this.task = "";
    this.completed = false;
    this.priority = Priority.LOW;
  }

  task: string;
  completed: boolean;
  priority: Priority;
}