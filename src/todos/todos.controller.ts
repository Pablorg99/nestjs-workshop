import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interface/todo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createTodoDto: CreateTodoDto) {
    this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }
}
