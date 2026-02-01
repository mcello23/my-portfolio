import { renderHook } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import useKeyPress from './useKeyPress';

describe('useKeyPress', () => {
  it('should call action when matching key is pressed', () => {
    const action = jest.fn();
    renderHook(() => useKeyPress('Escape', action));

    fireEvent.keyUp(window, { key: 'Escape' });
    expect(action).toHaveBeenCalledTimes(1);
  });

  it('should not call action when different key is pressed', () => {
    const action = jest.fn();
    renderHook(() => useKeyPress('Escape', action));

    fireEvent.keyUp(window, { key: 'Enter' });
    expect(action).not.toHaveBeenCalled();
  });

  it('should cleanup event listener on unmount', () => {
    const action = jest.fn();
    const { unmount } = renderHook(() => useKeyPress('Escape', action));

    unmount();

    fireEvent.keyUp(window, { key: 'Escape' });
    expect(action).not.toHaveBeenCalled();
  });
});
