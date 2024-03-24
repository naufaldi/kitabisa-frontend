import { SortCriteria } from '@/types/campaign';
import { create } from 'zustand';

type useCampaignStoreProps = {
  sortCriteria: SortCriteria;
  setSortCriteria: (criteria: SortCriteria) => void;
};
const useCampaignStore = create<useCampaignStoreProps>((set) => ({
  sortCriteria: SortCriteria.Ascending, // Set the default sorting criteria to 'ascending'
  setSortCriteria: (criteria) => set({ sortCriteria: criteria }),
}));

export default useCampaignStore;
