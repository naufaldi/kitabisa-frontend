'use client';
import React from 'react';
import Card from './card';
import { Campaign } from '@/types/campaign';
import useCampaignStore from '@/store/campaign';

type ListCampaignProps = {
  dataCampaign: Campaign[];
};

const ListCampaign = ({ dataCampaign }: ListCampaignProps) => {
  const sortCriteria = useCampaignStore((state) => state.sortCriteria);

  const sortedCampaigns = React.useMemo(() => {
    if (sortCriteria === 'ascending') {
      return [...dataCampaign].sort(
        (a, b) => a.donation_target - b.donation_target
      );
    } else if (sortCriteria === 'descending') {
      return [...dataCampaign].sort(
        (a, b) => b.donation_target - a.donation_target
      );
    }

    return dataCampaign;
  }, [dataCampaign, sortCriteria]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8">
      {sortedCampaigns.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};

export default ListCampaign;
