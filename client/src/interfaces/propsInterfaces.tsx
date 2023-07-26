import { Todo, NewTodo } from "./todoInterfaces";

export interface CheckProps {
  active: boolean;
}

export interface ListProps {
  data: Todo[];
  toggleActive: (todoID: string) => void;
  removeTodo: (id: string) => void;
}

export interface TodoProps extends Todo {
  index: number;
  toggleActive: (todoID: string) => void;
  removeTodo: (id: string) => void;
}

export interface FormProps {
  addTodo: (todo: NewTodo) => void;
}
