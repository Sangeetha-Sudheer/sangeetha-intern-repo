import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';

describe('UserList', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('fetches and displays users from the API', async () => {
    const mockUsers = [
      {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
      },
      {
        id: 2,
        name: 'Bob',
        email: 'bob@example.com',
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockUsers),
    });

    render(<UserList />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Alice/)).toBeInTheDocument();
      expect(screen.getByText(/Bob/)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://example.com/api/users',
    );
  });

  it('shows an error when the API request fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    render(<UserList />);

    await waitFor(() => {
      expect(
        screen.getByText('Unable to load users'),
      ).toBeInTheDocument();
    });
  });
});
