import { Test, TestingModule } from '@nestjs/testing';
import { TodoListService } from './todo-list.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

describe('TodoListService', () => {
  let service: TodoListService;
  let model: Model<Todo>;

  const mockTodo = {
    _id: '1',
    title: 'Test Todo',
    description: 'Test description',
    completed: false,
  };

  const mockTodoModel = {
    create: jest.fn().mockResolvedValue(mockTodo), // Simula la creación del todo
    find: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue([mockTodo]),
    }),
    findById: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockTodo),
    }),
    findByIdAndUpdate: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockTodo),
    }),
    findByIdAndDelete: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockTodo),
    }),
    save: jest.fn().mockResolvedValue(mockTodo), // Simula el método save
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoListService,
        {
          provide: getModelToken(Todo.name),
          useValue: mockTodoModel,
        },
      ],
    }).compile();

    service = module.get<TodoListService>(TodoListService);
    model = module.get<Model<Todo>>(getModelToken(Todo.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });



  describe('findAll', () => {
    it('should return an array of todos', async () => {
      const result = await service.findAll();
      expect(result).toEqual([mockTodo]);
      expect(mockTodoModel.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return a todo by id', async () => {
      const result = await service.findOne('1');
      expect(result).toEqual(mockTodo);
      expect(mockTodoModel.findById).toHaveBeenCalledWith('1');
    });

    it('should return undefined if id is null or empty', async () => {
      const result = await service.findOne(null);
      expect(result).toBeUndefined();
    });
  });

  describe('update', () => {
    it('should update a todo by id', async () => {
      const updateTodoDto: UpdateTodoDto = { title: 'Updated Title' };
      const result = await service.update('1', updateTodoDto);
      expect(result).toEqual(mockTodo);
      expect(mockTodoModel.findByIdAndUpdate).toHaveBeenCalledWith(
        '1',
        updateTodoDto,
        { new: true },
      );
    });
  });

  describe('remove', () => {
    it('should delete a todo by id', async () => {
      const result = await service.remove('1');
      expect(result).toEqual(mockTodo);
      expect(mockTodoModel.findByIdAndDelete).toHaveBeenCalledWith('1');
    });
  });
});
