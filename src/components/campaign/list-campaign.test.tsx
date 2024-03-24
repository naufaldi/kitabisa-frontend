import { render, screen } from '@testing-library/react';
import ListCampaign from './list-campaign';
import { CampaignerType } from '@/types/campaign';

describe('ListCampaign Component', () => {
  it('renders correctly and sorts campaigns in ascending order', () => {
    const mockDataCampaign = [
      {
        id: 94597,
        order: 1,
        parent_project_id: 0,
        title: 'Campaign A',
        expired: 2147483647,
        image:
          'https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg',
        days_remaining: 0,
        donation_received: 178613497,
        campaigner: 'Kitabisa.com',
        campaigner_type: CampaignerType.Personal,
        campaigner_badge:
          'https://assets.kitabisa.com/images/icon__verified-user.svg',
        campaigner_is_verified: true,
        category_name: 'Bencana Alam',
        is_forever_running: true,
        is_open_goal: false,
        request_userdata: false,
        donation_target: 500000000,
        donation_percentage: 0.357227,
        short_url: 'bisabangkit',
        is_featured: 0,
        custom_fb_pixel: '',
      },
      {
        id: 94597,
        order: 1,
        parent_project_id: 0,
        title: 'Campaign B',
        expired: 2147483647,
        image:
          'https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg',
        days_remaining: 0,
        donation_received: 178613497,
        campaigner: 'Kitabisa.com',
        campaigner_type: CampaignerType.Personal,
        campaigner_badge:
          'https://assets.kitabisa.com/images/icon__verified-user.svg',
        campaigner_is_verified: true,
        category_name: 'Bencana Alam',
        is_forever_running: true,
        is_open_goal: false,
        request_userdata: false,
        donation_target: 500000000,
        donation_percentage: 0.357227,
        short_url: 'bisabangkit',
        is_featured: 0,
        custom_fb_pixel: '',
      },
    ];

    render(<ListCampaign dataCampaign={mockDataCampaign} />);

    const renderedCards = screen.getAllByTestId('mockCard');

    // Check if all mock Cards are rendered
    expect(renderedCards.length).toBe(mockDataCampaign.length);

    // Verify the order is ascending based on donation_target
    expect(renderedCards[0]).toHaveTextContent('Campaign A');
    expect(renderedCards[1]).toHaveTextContent('Campaign B');
  });
});
