import { Injectable } from '@nestjs/common';

import { Todo } from './interface/todo.interface';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [
    {
      name: 'ToDo 1',
      description: 'ToDo 1 Description',
      done: false,
    },
  ];

  create(todo: Todo) {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }
}
