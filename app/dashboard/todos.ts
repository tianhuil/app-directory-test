'use server';

export const addTodo = (text: string) => {
  console.log('Add TODO', text);
};

export const removeTodo = (id: number) => {
  console.log('Remove TODO', id);
};
