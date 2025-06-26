export type TodoItem = {
  completed: boolean;
  id: string;
  title: string;
  userId: string;
};

export type TodoData = {
  todo: TodoItem;
};
