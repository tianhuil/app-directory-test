import { Text } from '@mantine/core';
import { PaperCard, delay } from '../../common';

export default async () => {
  await delay(1);
  return (
    <PaperCard>
      <Text>Zero Loaded</Text>
    </PaperCard>
  );
};
