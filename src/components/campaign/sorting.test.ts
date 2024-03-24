// In your Sorting.test.js or Sorting.test.tsx file
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sorting } from '@/components/campaign/sorting';
import useCampaignStore from '@/store/campaign';
import { SortCriteria } from '@/types/campaign';
import userEvent from '@testing-library/user-event';

// Mock the store
jest.mock('@/store/campaign', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Utility function to setup tests with the ability to provide initial state and actions
const setup = (initialState = {}) => {
  const mockSetSortCriteria = jest.fn();
  useCampaignStore.mockImplementation((selector) => ({
    sortCriteria: initialState.sortCriteria || SortCriteria.Ascending,
    setSortCriteria: mockSetSortCriteria,
  }));
  render(<Sorting />);
  return { mockSetSortCriteria };
};

test('Sorting component renders with default value', () => {
  setup({ sortCriteria: SortCriteria.Ascending });
  expect(screen.getByText('Select by Donation Goal')).toBeInTheDocument();
  expect(screen.getByText('ascending')).toBeInTheDocument();
  expect(screen.getByText('descending')).toBeInTheDocument();
});

test('Can select a different sort criteria', async () => {
  const { mockSetSortCriteria } = setup({
    sortCriteria: SortCriteria.Ascending,
  });

  // Open the select dropdown
  userEvent.click(screen.getByText('Select by Donation Goal'));

  // Select "Descending"
  const descendingOption = screen.getByText('descending');
  userEvent.click(descendingOption);

  expect(mockSetSortCriteria).toHaveBeenCalledWith(SortCriteria.Descending);
});
