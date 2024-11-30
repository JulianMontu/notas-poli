import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodoListService } from "./todo-list.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { Todo } from "./entities/todo.entity";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import * as Sentry from '@sentry/nestjs';

@Controller()
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) { }

  @Get("/debug-sentry")
  getError() {
    try{
      throw new Error("My first Sentry error!");
    }catch(e){
      Sentry.captureException(e);
    
    }
  }

  @Post('/create')
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    debugger
    console.log('createTodoDto 1', createTodoDto);
    try{
      if(createTodoDto.title === ''){
        throw new Error('Error en el titulo');
      }
    return this.todoListService.create(createTodoDto);
    }catch(e){
      console.log('error', e);
      Sentry.captureException(e);
    }
  }

  @Get('/listar')
  async findAll(): Promise<Todo[]> {
    return this.todoListService.findAll();
  }

  @Get('/listar/:id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoListService.findOne(id);
  }

  @Put('/actualizar/:id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoListService.update(id, updateTodoDto);
  }

  @Delete('/eliminar/:id')
  async remove(@Param('id') id: string): Promise<Todo> {
    return this.todoListService.remove(id);
  }
}