import { Module } from '@nestjs/common';
import { TodoListModule } from './todo-list/todo-list.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/todo-list"),
    TodoListModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
