import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Footer';

// Mock scrollIntoView as it is not implemented in JSDOM
window.HTMLElement.prototype.scrollIntoView = jest.fn();

// Helper component to capture current location in tests
const LocationDisplay = ({ onLocationChange }) => {
  const location = useLocation();
  onLocationChange(location);
  return null;
};

describe('Footer Navigation Logic', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = ''; // Clean up DOM
  });

  test('scrolls to contact section when clicking "Send Message" on homepage', () => {
    // 1. Setup DOM with a contact section
    const contactSection = document.createElement('div');
    contactSection.id = 'contact';
    document.body.appendChild(contactSection);

    // 2. Render Footer at root path '/'
    render(
      <MemoryRouter initialEntries={['/']}>
        <Footer />
      </MemoryRouter>
    );

    // 3. Click the button
    const sendBtn = screen.getByRole('link', { name: /Send Message/i });
    fireEvent.click(sendBtn);

    // 4. Verify scrollIntoView was called on the element
    expect(contactSection.scrollIntoView).toHaveBeenCalledTimes(1);
    expect(contactSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  test('navigates to homepage with scrollTo state when clicking "Send Message" on another page', () => {
    let currentLocation;
    const handleLocationChange = (loc) => {
      currentLocation = loc;
    };

    // 1. Render Footer at a different path '/side-projects'
    render(
      <MemoryRouter initialEntries={['/side-projects']}>
        <Footer />
        <LocationDisplay onLocationChange={handleLocationChange} />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/side-projects" element={<div>Side Projects Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    // 2. Click the button
    const sendBtn = screen.getByRole('link', { name: /Send Message/i });
    fireEvent.click(sendBtn);

    // 3. Verify navigation happened
    expect(currentLocation.pathname).toBe('/');

    // 4. Verify state was passed
    expect(currentLocation.state).toEqual({ scrollTo: 'contact' });
  });
});
