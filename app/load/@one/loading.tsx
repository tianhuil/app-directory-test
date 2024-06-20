import { Group, Loader, Text } from '@mantine/core';
import { PaperCard } from '../../common';

export default () => (
  <PaperCard>
    <Group>
      <Loader />
      <Text>One Loading</Text>
    </Group>
  </PaperCard>
);
