import { Paper, Text } from '@mantine/core';

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export default async () => {
  await delay(2000);
  return (
    <Paper shadow="md" m="lg">
      <Text>Two Loaded</Text>
    </Paper>
  );
};
