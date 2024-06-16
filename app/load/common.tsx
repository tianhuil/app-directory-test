import { Paper } from '@mantine/core';

export const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export const PaperCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Paper shadow="lg" m="lg" p="lg">
    {children}
  </Paper>
);
