import { Paper, Text } from '@mantine/core';

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export default async () => {
  await delay(3000);
  return (
    <Paper shadow="md" m="lg">
      <Text>Three Loaded</Text>
    </Paper>
  );
};
