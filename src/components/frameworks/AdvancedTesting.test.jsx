import { render, screen } from '@testing-library/react';
import AdvancedTesting from './AdvancedTesting';

describe('AdvancedTesting', () => {
  beforeEach(() => {
    render(<AdvancedTesting />);
  });

  describe('Shared endpoints card', () => {
    test('renders "Endpoints Tested" label', () => {
      expect(screen.getByText('Endpoints Tested')).toBeInTheDocument();
    });

    test('renders 3 endpoint badges as links', () => {
      const dogLink = screen.getByRole('link', { name: /Dog API/i });
      expect(dogLink).toHaveAttribute('href', 'https://dog.ceo/dog-api/');
      expect(dogLink).toHaveAttribute('target', '_blank');
      expect(dogLink).toHaveAttribute('rel', 'noopener noreferrer');

      const emojiLink = screen.getByRole('link', { name: /EmojiHub/i });
      expect(emojiLink).toHaveAttribute('href', 'https://github.com/cheatsnake/emojihub');

      const artLink = screen.getByRole('link', { name: /Art Institute/i });
      expect(artLink).toHaveAttribute('href', 'https://api.artic.edu/docs/');
    });
  });

  describe('API cards grid', () => {
    test('renders 3 API cards', () => {
      const cards = document.querySelectorAll('.fw-api-card');
      expect(cards).toHaveLength(3);
    });
  });

  describe('k6 card', () => {
    test('renders title and subtitle', () => {
      expect(screen.getByText('k6')).toBeInTheDocument();
      expect(screen.getByText('Performance & Load Testing')).toBeInTheDocument();
    });

    test('renders stats', () => {
      expect(screen.getByText('3 suites')).toBeInTheDocument();
      expect(screen.getByText('13 endpoints')).toBeInTheDocument();
      expect(screen.getByText('90 VUs')).toBeInTheDocument();
    });

    test('renders 4 feature tiles', () => {
      expect(screen.getByText('Smoke')).toBeInTheDocument();
      expect(screen.getByText('Load')).toBeInTheDocument();
      expect(screen.getByText('Stress')).toBeInTheDocument();
    });

    test('renders GitHub link', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const k6Link = links.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/k6-example-repo'
      );
      expect(k6Link).toBeTruthy();
      expect(k6Link).toHaveAttribute('target', '_blank');
      expect(k6Link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Jest + Supertest card', () => {
    test('renders title and subtitle', () => {
      expect(screen.getByText('Jest + Supertest')).toBeInTheDocument();
      expect(screen.getByText('API Testing')).toBeInTheDocument();
    });

    test('renders stats', () => {
      expect(screen.getByText('12 tests')).toBeInTheDocument();
      expect(screen.getByText('3 services')).toBeInTheDocument();
      expect(screen.getByText('schema validation')).toBeInTheDocument();
    });

    test('renders 4 feature tiles', () => {
      expect(screen.getByText('Validation')).toBeInTheDocument();
      expect(screen.getByText('Coverage')).toBeInTheDocument();
      expect(screen.getByText('Contracts')).toBeInTheDocument();
    });

    test('renders GitHub link', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const stLink = links.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/supertest-example-repo'
      );
      expect(stLink).toBeTruthy();
    });
  });

  describe('Postman / Newman card', () => {
    test('renders title and subtitle', () => {
      expect(screen.getByText('Postman / Newman')).toBeInTheDocument();
      expect(screen.getByText('API Collections')).toBeInTheDocument();
    });

    test('renders stats', () => {
      expect(screen.getByText('1 collection')).toBeInTheDocument();
      expect(screen.getByText('JUnit + HTML')).toBeInTheDocument();
      expect(screen.getByText('fail-fast CI')).toBeInTheDocument();
    });

    test('renders 4 feature tiles', () => {
      expect(screen.getByText('Runner')).toBeInTheDocument();
      expect(screen.getByText('Collection')).toBeInTheDocument();
      expect(screen.getByText('Reports')).toBeInTheDocument();
      expect(screen.getByText('Env Overrides')).toBeInTheDocument();
    });

    test('renders GitHub link', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const pmLink = links.find(
        (l) => l.getAttribute('href') === 'https://github.com/mcello23/postman-example-repo'
      );
      expect(pmLink).toBeTruthy();
    });
  });

  describe('All CTA links', () => {
    test('all 3 API links open in new tab securely', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      expect(links).toHaveLength(3);
      links.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    test('all CTA links have primary hover class', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      links.forEach((link) => {
        expect(link).toHaveClass('fw-card__cta--primary');
      });
    });
  });

  describe('Theme CSS variables', () => {
    test('each card applies unique accent color', () => {
      const cards = document.querySelectorAll('.fw-api-card');
      const accents = Array.from(cards).map((c) => c.style.getPropertyValue('--fw-accent'));
      expect(accents).toEqual(['#6a1b9a', '#1565c0', '#e65100']);
    });
  });
});
