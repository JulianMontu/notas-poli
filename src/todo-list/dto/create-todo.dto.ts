export class CreateTodoDto {
    readonly title: string;
    readonly description?: string;
    completed?: boolean;
  }