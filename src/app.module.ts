import { Module } from '@nestjs/common';
import { TodoListModule } from './todo-list/todo-list.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://notas-poli-bd:27017/todos"),
    TodoListModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
