import { renderHook, waitFor } from '@testing-library/react';
import useFetch from './useFetch';

global.fetch = jest.fn();

describe('useFetch', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should return data when fetch is successful', async () => {
    const mockData = { message: 'success' };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() => useFetch('https://api.example.com/data'));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it('should return error when fetch fails', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    const { result } = renderHook(() => useFetch('https://api.example.com/data'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toEqual(new Error('Network response was not ok'));
    expect(result.current.data).toBe(null);
  });

  it('should return error when fetch throws an exception', async () => {
    const mockError = new Error('Network error');
    fetch.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useFetch('https://api.example.com/data'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toEqual(mockError);
    expect(result.current.data).toBe(null);
  });
});
