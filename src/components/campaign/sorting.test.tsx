// Sorting.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SortCriteria } from '@/types/campaign';
import { Sorting } from './sorting';
import useCampaignStore from '@/store/campaign';

const mockSetSortCriteria = jest.fn();

jest.mock('@/store/campaign', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    sortCriteria: SortCriteria.Ascending,
    setSortCriteria: mockSetSortCriteria,
    // Provide a mock implementation of getState
    getState: jest.fn(() => ({
      sortCriteria: SortCriteria.Ascending,
      setSortCriteria: mockSetSortCriteria,
    })),
  })),
}));

describe('Sorting Component', () => {
  beforeEach(() => {
    // Reset the mockSetSortCriteria before each test
    mockSetSortCriteria.mockReset();
  });
  it('renders the select component correctly', () => {
    render(<Sorting />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
  // it('user event select changes the sort criteria', async () => {
  //   render(<Sorting />);

  //   await userEvent.click(screen.getByRole('combobox'));

  //   const setSortCriteriaMock = useCampaignStore().setSortCriteria;
  //   expect(setSortCriteriaMock).toHaveBeenCalledWith(SortCriteria.Descending);
  // });
});
