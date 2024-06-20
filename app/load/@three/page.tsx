import { Text } from '@mantine/core';
import { PaperCard, delay } from '../../common';

export default async () => {
  await delay(3000);
  return (
    <PaperCard>
      <Text>Three Loaded</Text>
    </PaperCard>
  );
};
