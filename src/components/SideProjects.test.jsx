import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideProjects from './SideProjects';

// Mock IntersectionObserver
window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('SideProjects Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SideProjects />
      </MemoryRouter>
    );
  });

  test('renders main title and description', () => {
    expect(screen.getByText(/Side Projects & Automation Tools/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Innovative automation solutions showcasing AI integration/i)
    ).toBeInTheDocument();
  });

  test('renders 3 project cards', () => {
    const cards = document.querySelectorAll('.fw-card');
    expect(cards).toHaveLength(3);
  });

  describe('AI Test Plan Generator Card', () => {
    test('renders card title and subtitle', () => {
      expect(screen.getByText('AI Test Plan Generator')).toBeInTheDocument();
      expect(screen.getByText(/GPT-4 powered test plan generation/i)).toBeInTheDocument();
    });

    test('renders stat badges', () => {
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('GPT-4')).toBeInTheDocument();
      expect(screen.getByText('CLI + Web UI')).toBeInTheDocument();
    });

    test('renders all 6 highlights', () => {
      expect(screen.getByText('Smart Generation')).toBeInTheDocument();
      expect(screen.getByText('Full Coverage')).toBeInTheDocument();
      expect(screen.getByText('Multi-Platform')).toBeInTheDocument();
      expect(screen.getByText('Dual Interface')).toBeInTheDocument();
      expect(screen.getByText('Export Ready')).toBeInTheDocument();
      expect(screen.getByText('Prompt Engineering')).toBeInTheDocument();
    });

    test('renders GitHub CTA link with correct href', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const aiLink = links.find(
        (link) => link.getAttribute('href') === 'https://github.com/mcello23/ai-test-plan-generator'
      );
      expect(aiLink).toBeInTheDocument();
      expect(aiLink).toHaveAttribute('target', '_blank');
      expect(aiLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Python Music Downloader Card', () => {
    test('renders card title and subtitle', () => {
      expect(screen.getByText('Python Music Downloader')).toBeInTheDocument();
      expect(screen.getByText(/High-fidelity YouTube to MP3 conversion/i)).toBeInTheDocument();
    });

    test('renders stat badges', () => {
      const stats = document.querySelectorAll('.fw-card__stat');
      const statTexts = Array.from(stats).map((s) => s.textContent);
      expect(statTexts).toContain('Python');
      expect(statTexts).toContain('yt-dlp');
      expect(statTexts).toContain('FFmpeg');
    });

    test('renders all 6 highlights', () => {
      expect(screen.getByText('192 kbps Audio')).toBeInTheDocument();
      expect(screen.getByText('Smart Search')).toBeInTheDocument();
      expect(screen.getByText('Batch Processing')).toBeInTheDocument();
      expect(screen.getByText('Error Recovery')).toBeInTheDocument();
      expect(screen.getByText('Cross-Platform')).toBeInTheDocument();
      expect(screen.getByText('Auto-Organize')).toBeInTheDocument();
    });

    test('renders GitHub CTA link with correct href', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const pythonLink = links.find(
        (link) => link.getAttribute('href') === 'https://github.com/mcello23/python-music-download'
      );
      expect(pythonLink).toBeInTheDocument();
      expect(pythonLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Doom Game Card', () => {
    test('renders card title and subtitle', () => {
      expect(screen.getByText('Doom Game in Python')).toBeInTheDocument();
      expect(screen.getByText(/Classic FPS recreated from scratch/i)).toBeInTheDocument();
    });

    test('renders stat badges', () => {
      expect(screen.getByText('PyGame')).toBeInTheDocument();
      expect(screen.getByText('Raycasting')).toBeInTheDocument();
    });

    test('renders all 6 highlights', () => {
      expect(screen.getByText('3D Raycasting')).toBeInTheDocument();
      expect(screen.getByText('NPC Pathfinding')).toBeInTheDocument();
      expect(screen.getByText('Sprite Animation')).toBeInTheDocument();
      expect(screen.getByText('Weapon System')).toBeInTheDocument();
      expect(screen.getByText('Level Design')).toBeInTheDocument();
      expect(screen.getByText('Sound Engine')).toBeInTheDocument();
    });

    test('renders GitHub CTA link with correct href', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      const doomLink = links.find(
        (link) => link.getAttribute('href') === 'https://github.com/mcello23/DoomGamePython'
      );
      expect(doomLink).toBeInTheDocument();
      expect(doomLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('All CTA links', () => {
    test('renders 3 View on GitHub links total', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      expect(links).toHaveLength(3);
    });

    test('all links open in new tab with secure rel', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      links.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    test('all links have hover-enabled CTA class', () => {
      const links = screen.getAllByRole('link', { name: /View on GitHub/i });
      links.forEach((link) => {
        expect(link).toHaveClass('fw-card__cta');
        expect(link).toHaveClass('fw-card__cta--primary');
      });
    });
  });
});
