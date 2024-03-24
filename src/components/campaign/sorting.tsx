'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCampaignStore from '@/store/campaign';
import { SortCriteria } from '@/types/campaign';

export function Sorting() {
  const sortCriteria = useCampaignStore((state) => state.sortCriteria);
  const setSortCriteria = useCampaignStore((state) => state.setSortCriteria);

  const handleSortChange = (value: string) => {
    if (Object.values(SortCriteria).includes(value as SortCriteria)) {
      setSortCriteria(value as SortCriteria);
    } else {
      console.error('Invalid sort criteria:', value);
    }
  };
  return (
    <Select onValueChange={handleSortChange} defaultValue={sortCriteria}>
      <SelectTrigger className="w-[200px] capitalize">
        <SelectValue placeholder="Select by Donation Goal" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sorting by Donation Goal</SelectLabel>
          <SelectItem value={SortCriteria.Ascending} className="capitalize">
            {SortCriteria.Ascending}
          </SelectItem>
          <SelectItem value={SortCriteria.Descending} className="capitalize">
            {SortCriteria.Descending}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
