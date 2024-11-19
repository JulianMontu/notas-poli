import { Test, TestingModule } from '@nestjs/testing';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

describe('TodoListController', () => {
  let controller: TodoListController;
  let service: TodoListService;

  // Mock del servicio
  const mockTodoListService = {
    create: jest.fn((dto: CreateTodoDto) => {
      return { id: '1', ...dto };
    }),
    findAll: jest.fn(() => [
      { id: '1', title: 'Test Todo', description: 'Test Description' },
    ]),
    findOne: jest.fn((id: string) => ({ id, title: 'Test Todo', description: 'Test Description' })),
    update: jest.fn((id: string, dto: UpdateTodoDto) => ({ id, ...dto })),
    remove: jest.fn((id: string) => ({ id, title: 'Test Todo', description: 'Test Description' })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoListController],
      providers: [
        {
          provide: TodoListService,
          useValue: mockTodoListService,
        },
      ],
    }).compile();

    controller = module.get<TodoListController>(TodoListController);
    service = module.get<TodoListService>(TodoListService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new todo', async () => {
      const dto: CreateTodoDto = { title: 'New Todo', description: 'New Description' };
      expect(await controller.create(dto)).toEqual({
        id: '1',
        ...dto,
      });
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should return an array of todos', async () => {
      expect(await controller.findAll()).toEqual([
        { id: '1', title: 'Test Todo', description: 'Test Description' },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single todo', async () => {
      const id = '1';
      expect(await controller.findOne(id)).toEqual({
        id,
        title: 'Test Todo',
        description: 'Test Description',
      });
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should update an existing todo', async () => {
      const id = '1';
      const dto: UpdateTodoDto = { title: 'Updated Todo', description: 'Updated Description' };
      expect(await controller.update(id, dto)).toEqual({
        id,
        ...dto,
      });
      expect(service.update).toHaveBeenCalledWith(id, dto);
    });
  });

  describe('remove', () => {
    it('should remove a todo', async () => {
      const id = '1';
      expect(await controller.remove(id)).toEqual({
        id,
        title: 'Test Todo',
        description: 'Test Description',
      });
      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
