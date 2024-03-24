import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Sorting() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sorting by Donation Goal</SelectLabel>
          <SelectItem value="top">Top Donation</SelectItem>
          <SelectItem value="lower">Lower Donation</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
