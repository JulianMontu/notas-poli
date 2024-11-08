import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodoListService } from "./todo-list.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { Todo } from "./entities/todo.entity";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Controller()
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Post('/create')
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoListService.create(createTodoDto);
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