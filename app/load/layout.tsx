import { Paper, Stack, Text } from '@mantine/core';

export default function LoadLayout({
  one,
  two,
  three,
  children,
}: {
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
        {one}
        {two}
        {three}
      </Stack>
    </Paper>
  );
}
