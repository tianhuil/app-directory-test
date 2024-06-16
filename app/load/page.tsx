import { Text } from '@mantine/core';
import { PaperCard } from './common';

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export default async () => {
  await delay(1);
  return (
    <PaperCard>
      <Text>Page</Text>
    </PaperCard>
  );
};
