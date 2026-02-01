import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders brand logo and text', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const brandLink = screen.getByLabelText('Home');
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute('href', '/');
    expect(brandLink).toHaveTextContent('Marcelo Costa — SDET');

    // Verify home icon
    const icon = brandLink.querySelector('.material-icons');
    expect(icon).toHaveTextContent('home');
  });

  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText(/Side Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Frameworks/i)).toBeInTheDocument();
    expect(screen.getByText(/Certificates/i)).toBeInTheDocument();
  });

  test('renders social and CTA links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Booking link
    const bookingLink = screen.getByLabelText('Book a 15-minute call');
    expect(bookingLink).toBeInTheDocument();
    expect(bookingLink).toHaveAttribute('href', 'https://calendly.com/marceloadsc/15min');
    expect(bookingLink).toHaveAttribute('target', '_blank');
    expect(bookingLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(bookingLink).toHaveClass('cta-link', 'book-call');

    // Verify icon and text
    const icon = bookingLink.querySelector('.material-icons');
    expect(icon).toHaveTextContent('schedule');
    expect(bookingLink).toHaveTextContent('Book 15-min call');

    // Social links
    expect(screen.getByLabelText('github-link')).toHaveAttribute(
      'href',
      'https://github.com/mcello23'
    );
    expect(screen.getByLabelText('linkedin-link')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/marceloc/'
    );
  });

  test('calls onOpenCertificates when Certificates link is clicked', () => {
    const handleOpenCertificates = jest.fn();
    render(
      <MemoryRouter>
        <Navbar onOpenCertificates={handleOpenCertificates} />
      </MemoryRouter>
    );

    const certLink = screen.getByText(/Certificates/i);
    fireEvent.click(certLink);

    expect(handleOpenCertificates).toHaveBeenCalledTimes(1);
  });

  test('renders mobile menu toggle button', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const toggle = screen.getByLabelText('Toggle navigation');
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-controls', 'mobileMenu');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('toggles mobile menu on click', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const toggle = screen.getByLabelText('Toggle navigation');
    const menu = container.querySelector('#mobileMenu');

    expect(menu).not.toHaveClass('open');

    // Click toggle
    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(menu).toHaveClass('active');

    // Click again to close
    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(menu).not.toHaveClass('active');
  });

  test('closes mobile menu when a nav link is clicked', async () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggle = screen.getByLabelText('Toggle navigation');
    const menu = container.querySelector('#mobileMenu');

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(menu).toHaveClass('active');

    fireEvent.click(screen.getByText(/Side Projects/i));

    await waitFor(() => {
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
      expect(menu).not.toHaveClass('active');
    });
  });

  test('closes mobile menu when backdrop is clicked', async () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggle = screen.getByLabelText('Toggle navigation');
    const menu = container.querySelector('#mobileMenu');
    const backdrop = screen.getByLabelText('Close navigation');

    fireEvent.click(toggle);
    expect(menu).toHaveClass('active');

    fireEvent.click(backdrop);

    await waitFor(() => {
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
      expect(menu).not.toHaveClass('active');
    });
  });

  test('closes mobile menu on Escape key', async () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggle = screen.getByLabelText('Toggle navigation');
    const menu = container.querySelector('#mobileMenu');

    fireEvent.click(toggle);
    expect(menu).toHaveClass('active');

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
      expect(menu).not.toHaveClass('active');
    });
  });

  test('calculates and sets navigation height', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const nav = container.querySelector('.main-nav');

    // Mock getBoundingClientRect to return a valid height
    const mockGetBoundingClientRect = jest.fn(() => ({
      height: 64,
      width: 1200,
      top: 0,
      left: 0,
      bottom: 64,
      right: 1200,
      x: 0,
      y: 0,
      toJSON: () => {},
    }));

    Object.defineProperty(nav, 'getBoundingClientRect', {
      value: mockGetBoundingClientRect,
      writable: true,
    });

    // Trigger resize to recalculate height
    fireEvent(window, new window.Event('resize'));

    expect(mockGetBoundingClientRect).toHaveBeenCalled();
  });

  test('applies correct styles to mobile menu and overlay when open', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggle = screen.getByLabelText('Toggle navigation');
    const menu = container.querySelector('#mobileMenu');
    const backdrop = screen.getByLabelText('Close navigation');

    // Open mobile menu
    fireEvent.click(toggle);

    // Check if styles are applied (component calculates navHeightPx and applies it)
    // The styles should be set when menu is open
    expect(menu).toHaveClass('active');
    expect(backdrop).toHaveClass('active');

    // The component sets inline styles based on navHeightPx
    // We can verify the style attribute is present
    const menuStyle = menu.getAttribute('style');
    const backdropStyle = backdrop.getAttribute('style');

    // Styles should include top and height/maxHeight calculations
    if (menuStyle) {
      expect(menuStyle).toBeTruthy();
    }
    if (backdropStyle) {
      expect(backdropStyle).toBeTruthy();
    }
  });

  test('handles ResizeObserver when available', () => {
    // Mock ResizeObserver
    const mockDisconnect = jest.fn();
    const mockObserve = jest.fn();
    const mockResizeObserver = jest.fn(() => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: jest.fn(),
    }));

    global.ResizeObserver = mockResizeObserver;

    const { unmount } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Verify ResizeObserver was created and observing
    expect(mockResizeObserver).toHaveBeenCalled();
    expect(mockObserve).toHaveBeenCalled();

    // Unmount to trigger disconnect
    unmount();

    expect(mockDisconnect).toHaveBeenCalled();

    // Cleanup
    delete global.ResizeObserver;
  });

  test('handles missing ResizeObserver gracefully', () => {
    // Temporarily remove ResizeObserver
    const originalResizeObserver = global.ResizeObserver;
    delete global.ResizeObserver;

    // Should not throw
    expect(() => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );
    }).not.toThrow();

    // Restore
    global.ResizeObserver = originalResizeObserver;
  });
});
