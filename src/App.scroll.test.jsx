import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// --- Mocks Setup ---

// Mock Materialize (window.M)
window.M = {
  AutoInit: jest.fn(),
  Modal: {
    init: jest.fn(() => ({
      open: jest.fn(),
      close: jest.fn(),
      destroy: jest.fn(),
    })),
    getInstance: jest.fn(() => ({
      open: jest.fn(),
      close: jest.fn(),
      destroy: jest.fn(),
    })),
  },
  Tooltip: {
    init: jest.fn(),
  },
};

// Mock IntersectionObserver
window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock window.scrollTo and HTMLElement.scrollIntoView
window.scrollTo = jest.fn();
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('App Scroll Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = ''; // Clean up DOM
  });

  test('App scrolls to element defined in location.state.scrollTo on mount', () => {
    // 1. Setup target element in the DOM (App expects it to exist)
    // Note: In a real run, App renders the element (Contact section).
    // Here, even if App renders it, we can pre-append a dummy or rely on App rendering it.
    // However, App renders asynchronously due to Suspense.
    // To be safe and test the effect logic specifically, we can pre-add a dummy element
    // OR we can wait for App to render.
    // Let's rely on App rendering the Contact component since it is on the home route.

    // Actually, simply appending a dummy with the ID is safer for testing the *trigger*
    // because we don't want to depend on whether Contact.jsx finishes lazy loading instantly.
    const targetElement = document.createElement('div');
    targetElement.id = 'contact';
    document.body.appendChild(targetElement);

    // 2. Render App with the specific state
    render(
      <MemoryRouter initialEntries={[{ pathname: '/', state: { scrollTo: 'contact' } }]}>
        <App />
      </MemoryRouter>
    );

    // 3. Verify scrollIntoView is called
    expect(targetElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    // 4. Verify history was replaced to clear state (optional check based on implementation)
    // window.history.replaceState is hard to mock perfectly in JSDOM without more setup,
    // but we can check if the effect ran.
  });

  test('App does NOT scroll if location.state.scrollTo is missing', () => {
    const targetElement = document.createElement('div');
    targetElement.id = 'contact';
    document.body.appendChild(targetElement);

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(targetElement.scrollIntoView).not.toHaveBeenCalled();
  });
});
