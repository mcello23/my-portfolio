import { render, screen } from '@testing-library/react';
import FrameworkCard from './FrameworkCard';

const mockFramework = {
  id: 'playwright',
  cardTitle: 'Test Playwright Card',
  cardSubtitle: 'A test subtitle for Playwright',
  stats: ['10 tests', '3 browsers', '99 CI runs', 'extra stat'],
  factoryPattern: {
    features: [
      { icon: 'blur_on', title: 'Parallel' },
      { icon: 'replay', title: 'Trace' },
      { icon: 'storage', title: 'Fixtures' },
      { icon: 'sync_alt', title: 'CI/CD' },
      { icon: 'assessment', title: 'Reports' },
      { icon: 'devices', title: 'Browsers' },
      { icon: 'bug_report', title: 'Should Be Hidden' },
    ],
  },
  cta: {
    href: 'https://github.com/mcello23/playwright-example',
    text: 'View on GitHub',
    icon: 'code',
  },
};

describe('FrameworkCard', () => {
  beforeEach(() => {
    render(<FrameworkCard framework={mockFramework} />);
  });

  test('renders card title and subtitle', () => {
    expect(screen.getByText('Test Playwright Card')).toBeInTheDocument();
    expect(screen.getByText('A test subtitle for Playwright')).toBeInTheDocument();
  });

  test('renders the themed icon for playwright', () => {
    expect(screen.getByText('theaters')).toBeInTheDocument();
  });

  test('renders only the first 3 stats', () => {
    expect(screen.getByText('10 tests')).toBeInTheDocument();
    expect(screen.getByText('3 browsers')).toBeInTheDocument();
    expect(screen.getByText('99 CI runs')).toBeInTheDocument();
    expect(screen.queryByText('extra stat')).not.toBeInTheDocument();
  });

  test('renders only the first 6 highlights', () => {
    expect(screen.getByText('Parallel')).toBeInTheDocument();
    expect(screen.getByText('Trace')).toBeInTheDocument();
    expect(screen.getByText('Fixtures')).toBeInTheDocument();
    expect(screen.getByText('CI/CD')).toBeInTheDocument();
    expect(screen.getByText('Reports')).toBeInTheDocument();
    expect(screen.getByText('Browsers')).toBeInTheDocument();
    expect(screen.queryByText('Should Be Hidden')).not.toBeInTheDocument();
  });

  test('renders CTA link with correct attributes', () => {
    const link = screen.getByRole('link', { name: /View on GitHub/i });
    expect(link).toHaveAttribute('href', 'https://github.com/mcello23/playwright-example');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveClass('fw-card__cta--primary');
  });

  test('applies CSS custom properties for theme', () => {
    const card = document.querySelector('.fw-card');
    expect(card.style.getPropertyValue('--fw-accent')).toBe('#6a1b9a');
  });
});

describe('FrameworkCard themes', () => {
  test('uses cypress theme for cypress id', () => {
    const cypressFramework = {
      ...mockFramework,
      id: 'cypress',
      cardTitle: 'Cypress Card',
    };
    render(<FrameworkCard framework={cypressFramework} />);
    expect(screen.getByText('eco')).toBeInTheDocument(); // cypress icon
  });

  test('uses selenium theme for selenium id', () => {
    const seleniumFramework = {
      ...mockFramework,
      id: 'selenium',
      cardTitle: 'Selenium Card',
    };
    render(<FrameworkCard framework={seleniumFramework} />);
    expect(screen.getByText('science')).toBeInTheDocument(); // selenium icon
  });

  test('falls back to playwright theme for unknown id', () => {
    const unknownFramework = {
      ...mockFramework,
      id: 'unknown',
      cardTitle: 'Unknown Card',
    };
    render(<FrameworkCard framework={unknownFramework} />);
    expect(screen.getByText('theaters')).toBeInTheDocument(); // playwright fallback
  });
});
