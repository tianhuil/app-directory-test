import { Paper, Stack, Text } from '@mantine/core';
import React from 'react';

export default function LoadLayout({
  zero,
  one,
  two,
  three,
  children,
}: {
  zero: React.ReactNode;
  one: React.ReactNode;
  two: React.ReactNode;
  three: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Paper w="100vw" h="100vh">
      <Text>Layout Component</Text>
      <Stack>
        {children}
        {zero}
        {one}
        {two}
        {three}
      </Stack>
    </Paper>
  );
}
