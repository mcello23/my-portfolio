import React, { useRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useFocusTrap from './useFocusTrap';

const TestComponent = ({ isActive }) => {
  const containerRef = useRef(null);
  useFocusTrap(containerRef, isActive);

  return (
    <div>
      <button>Outside Before</button>
      <div ref={containerRef} data-testid="trap-container">
        <button>First</button>
        <input type="text" placeholder="Middle" />
        <button>Last</button>
      </div>
      <button>Outside After</button>
    </div>
  );
};

describe('useFocusTrap', () => {
  it('should focus the first element when active', () => {
    render(<TestComponent isActive={true} />);
    expect(screen.getByText('First')).toHaveFocus();
  });

  it('should not focus the first element when inactive', () => {
    render(<TestComponent isActive={false} />);
    // Focus should remain on body or wherever it was
    expect(screen.getByText('First')).not.toHaveFocus();
  });

  it('should trap focus inside the container', () => {
    render(<TestComponent isActive={true} />);
    const container = screen.getByTestId('trap-container');
    const firstBtn = screen.getByText('First');
    const lastBtn = screen.getByText('Last');

    // Initial focus
    expect(firstBtn).toHaveFocus();

    // Tab from first -> Middle
    // Note: JS DOM doesn't automatically move focus on event dispatch, we have to mock behavior or check preventDefault
    // But the hook implements specific logic for First -> Shift+Tab and Last -> Tab.
    // Let's test those boundaries.

    // 1. Last Element -> Tab -> Should go to First
    lastBtn.focus();
    expect(lastBtn).toHaveFocus();

    const tabEvent = new window.KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
      shiftKey: false,
    });

    // We need to dispatch on the container or element bubbling up
    // The hook attaches listener to 'element' (containerRef.current)
    container.dispatchEvent(tabEvent);

    // The hook calls preventDefault() and manually focuses firstElement
    expect(firstBtn).toHaveFocus();
  });

  it('should trap focus when shift-tabbing from first element', () => {
    render(<TestComponent isActive={true} />);
    const container = screen.getByTestId('trap-container');
    const firstBtn = screen.getByText('First');
    const lastBtn = screen.getByText('Last');

    // 1. First Element -> Shift + Tab -> Should go to Last
    firstBtn.focus();
    expect(firstBtn).toHaveFocus();

    const shiftTabEvent = new window.KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
      shiftKey: true,
    });

    container.dispatchEvent(shiftTabEvent);

    expect(lastBtn).toHaveFocus();
  });

  it('should do nothing if no focusable elements found', () => {
    const EmptyComponent = ({ isActive }) => {
      const containerRef = useRef(null);
      useFocusTrap(containerRef, isActive);
      return (
        <div ref={containerRef} data-testid="empty-container">
          No inputs here
        </div>
      );
    };

    render(<EmptyComponent isActive={true} />);
    // Should not crash
    expect(screen.getByText('No inputs here')).toBeInTheDocument();
  });
});
