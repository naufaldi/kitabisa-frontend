import { Campaign } from '@/types/campaign';
export const getListCampaign = async (): Promise<Campaign[]> => {
  const res = await fetch(`${process.env.URL_HOST}`);
  const json = await res.json();

  return json.data; // Assuming the JSON structure has a `data` field that is an array of Campaigns
};
