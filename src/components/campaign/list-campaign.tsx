import React from 'react';
import Card from './card';
import { Campaign } from '@/types/campaign';

const ListCampaign = (dataCampaign: Campaign[]) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8">
      {dataCampaign.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};

export default ListCampaign;
