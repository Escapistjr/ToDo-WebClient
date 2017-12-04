export enum Priority {
  LOW,
  MEDIUM,
  HIGH
}

export class Item {
  constructor() {
    this.id = 1;
    this.task = "";
    this.completed = false;
    this.priority = Priority.LOW;
  }
  id: number;
  task: string;
  completed: boolean;
  priority: Priority;
}