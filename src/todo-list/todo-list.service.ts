import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo } from "./entities/todo.entity";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Injectable()
export class TodoListService {
    constructor(@InjectModel(Todo.name) private readonly todoModel: Model<Todo>) {}

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
      const createdTodo = new this.todoModel(createTodoDto);
      return createdTodo.save();
    }
  
    async findAll(): Promise<Todo[]> {
      return this.todoModel.find().exec();
    }
  
    async findOne(id: string): Promise<Todo> {
      return this.todoModel.findById(id).exec();
    }
  
    async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
      return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true }).exec();
    }
  
    async remove(id: string): Promise<Todo> {
      return this.todoModel.findByIdAndDelete(id).exec();
    }
}
