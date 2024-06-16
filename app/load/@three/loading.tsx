import { Group, Loader, Text } from '@mantine/core';
import { PaperCard } from '../common';

export default () => (
  <PaperCard>
    <Group>
      <Loader />
      <Text>Three Loading</Text>
    </Group>
  </PaperCard>
);
