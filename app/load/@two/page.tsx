import { Text } from '@mantine/core';
import { delay, PaperCard } from '../../common';

export default async () => {
  await delay(2000);
  return (
    <PaperCard>
      <Text>Two Loaded</Text>
    </PaperCard>
  );
};
