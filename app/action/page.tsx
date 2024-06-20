'use client';

import { Box, Button, Flex, Loader, Paper, Stack, TextInput } from '@mantine/core';
import { useAction } from 'next-safe-action/hooks';
import { useState } from 'react';
import { greetUser } from './actions';

const FullPageChat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const { execute, isExecuting } = useAction(greetUser, {
    onSuccess: ({ data }) => {
      setMessages((_messages) => [..._messages, data?.message || '']);
      setInput('');
    },
  });

  return (
    <Paper p="md" style={{ height: '100vh' }}>
      <Stack style={{ height: '90%' }} gap="md">
        {messages.map((message, index) => (
          <Paper p="md" key={index} shadow="md">
            {message}
          </Paper>
        ))}
      </Stack>
      <Flex style={{ height: '10%' }} gap="sm">
        <Box flex="1">
          <TextInput
            placeholder="Type a message"
            value={input}
            onChange={(event) => setInput(event.currentTarget.value)}
            disabled={isExecuting}
            rightSection={isExecuting ? <Loader size={18} /> : null}
          />
        </Box>
        <Box flex="0">
          <Button onClick={() => execute({ name: input })} disabled={isExecuting}>
            Send
          </Button>
        </Box>
      </Flex>
    </Paper>
  );
};

export default FullPageChat;
