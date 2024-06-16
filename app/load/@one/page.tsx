import { Text } from '@mantine/core';
import { PaperCard, delay } from '../common';

export default async () => {
  await delay(1000);
  return (
    <PaperCard>
      <Text>One Loaded</Text>
    </PaperCard>
  );
};
