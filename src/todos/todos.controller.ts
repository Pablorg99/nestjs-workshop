import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {}

  @Get()
  async findAll(): Promise<any[]> {
    return ['async answer'];
  }
}
