'use client';

import { MultiSelect } from '@mantine/core';
import React from 'react';

export function Search() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <MultiSelect
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      searchValue={searchValue}
      onSearchChange={setSearchValue}
    />
  );
}
