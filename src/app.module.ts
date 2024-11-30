import { Module } from '@nestjs/common';
import { TodoListModule } from './todo-list/todo-list.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SentryModule } from '@sentry/nestjs/setup';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://pos_test:DoUkMVzOYjEiUWky@pos.osekwof.mongodb.net/pos?retryWrites=true&w=majority&appName=todos"),
    SentryModule.forRoot(),
    TodoListModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
