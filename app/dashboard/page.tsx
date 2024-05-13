import { Stack } from '@mantine/core';
import { TodoComp, type Todo } from './todo';

const getTodo = (): Todo[] => [
  { id: 1, text: 'First todo' },
  { id: 2, text: 'Second todo' },
  { id: 3, text: 'Third todo' },
];

const DashboardPage = () => {
  const todo = getTodo();
  return (
    <Stack>
      {todo.map(({ id, text }) => (
        <TodoComp key={id} id={id} text={text} />
      ))}
    </Stack>
  );
};

export default DashboardPage;
