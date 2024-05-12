import { Stack, Title } from '@mantine/core';

const getData = () => ['abc', 'def', 'ghi'];

const DashboardPage = () => {
  const data = getData();
  return (
    <Stack>
      {data.map((item) => (
        <Title key={item} order={2}>
          {item}
        </Title>
      ))}
    </Stack>
  );
};

export default DashboardPage;
