import { renderHook, act } from '@testing-library/react';
import useModal from './useModal';

describe('useModal', () => {
  it('should initialize with isOpen as false', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpen).toBe(false);
  });

  it('should set isOpen to true when openModal is called', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should set isOpen to false when closeModal is called', () => {
    const { result } = renderHook(() => useModal());

    // Open first
    act(() => {
      result.current.openModal();
    });
    expect(result.current.isOpen).toBe(true);

    // Then close
    act(() => {
      result.current.closeModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
