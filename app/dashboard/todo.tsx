'use client';

import { Button, Flex, Title } from '@mantine/core';
import { removeTodo } from './todos';

export interface Todo {
  id: number;
  text: string;
}

export const TodoComp: React.FC<Todo> = ({ id, text }) => (
  <Flex key={id} p="xs">
    <Title order={4} flex={1}>
      {text}
    </Title>
    <Button onClick={() => removeTodo(id)}>Delete</Button>
  </Flex>
);
