import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './card';
import { CampaignerType } from '@/types/campaign';
// Adjust the import path to your Card component location

// Mock the `next/image` since it doesn't work correctly outside of the Next.js environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // Mock with a basic img tag or any preferable representation
    return <img {...props} />;
  },
}));

describe('Card Component', () => {
  const mockData = {
    id: 94597,
    order: 1,
    parent_project_id: 0,
    title: '#BisaBangkit Bersama Kitabisa',
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
  };

  it('renders correctly and displays provided information', () => {
    render(<Card data={mockData} />);

    expect(screen.getByText(mockData.title)).toBeInTheDocument();

    expect(screen.getByText(/Rp 178.613.497/i)).toBeInTheDocument();

    expect(screen.getByText(`${mockData.days_remaining}`)).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute('src', mockData.image);
  });
});
