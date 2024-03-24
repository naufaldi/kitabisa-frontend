export enum CampaignerType {
  Personal = 'PERSONAL',
  Organization = 'ORGANIZATION',
}

export type ResponseDataListCampaign = {
  response_code: string;
  response_desc: ResponseDesc;
  data: Campaign[];
};

export type ResponseDesc = {
  id: string;
  en: string;
};

export type Campaign = {
  id: number;
  order: number;
  parent_project_id: number;
  title: string;
  expired: number;
  image: string;
  days_remaining: number;
  donation_received: number;
  campaigner: string;
  campaigner_type: CampaignerType;
  campaigner_badge: string;
  campaigner_is_verified: boolean;
  category_name: string;
  is_forever_running: boolean;
  is_open_goal: boolean;
  request_userdata: boolean;
  donation_target: number;
  donation_percentage: number;
  short_url: string;
  is_featured: number;
  custom_fb_pixel: string;
};
