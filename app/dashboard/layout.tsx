import { Box, Paper, ScrollArea } from '@mantine/core';
import { Search } from './search';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box w="100vw" h="100vh">
      <Paper p="xs" h="60px" shadow="lg" bg="blue" radius={0}>
        <Search />
      </Paper>
      <ScrollArea h="calc(100% - 60px)" style={{ overflowY: 'auto' }}>
        {children}
      </ScrollArea>
    </Box>
  );
}
