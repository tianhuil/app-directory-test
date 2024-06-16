import { Paper, Text } from '@mantine/core';

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export default async () => {
  await delay(1);
  return (
    <Paper shadow="md" m="lg">
      <Text>Page</Text>
    </Paper>
  );
};
