import { render, screen } from '@testing-library/react';
import SideProjectCard from './SideProjectCard';

const mockProjectWithLogos = {
  id: 'ai-testplan',
  cardTitle: 'Test AI Project',
  cardSubtitle: 'A test subtitle for AI',
  stats: ['TypeScript', 'GPT-4', 'CLI', 'extra stat'],
  factoryPattern: {
    features: [
      { icon: 'psychology', title: 'Smart Gen' },
      { icon: 'verified', title: 'Coverage' },
      { icon: 'devices', title: 'Platform' },
      { icon: 'terminal', title: 'Interface' },
      { icon: 'file_download', title: 'Export' },
      { icon: 'auto_fix_high', title: 'Prompt' },
      { icon: 'bug_report', title: 'Should Be Hidden' },
    ],
  },
  cta: {
    href: 'https://github.com/mcello23/ai-test-plan-generator',
    text: 'View on GitHub',
    icon: 'code',
  },
};

const mockProjectNoLogos = {
  id: 'doom-game',
  cardTitle: 'Test Doom Project',
  cardSubtitle: 'A test subtitle for Doom',
  stats: ['Python', 'PyGame', 'Raycasting'],
  factoryPattern: {
    features: [
      { icon: 'view_in_ar', title: '3D Ray' },
      { icon: 'smart_toy', title: 'NPC' },
      { icon: 'animation', title: 'Sprite' },
      { icon: 'gps_fixed', title: 'Weapon' },
      { icon: 'map', title: 'Level' },
      { icon: 'volume_up', title: 'Sound' },
    ],
  },
  cta: {
    href: 'https://github.com/mcello23/DoomGamePython',
    text: 'View on GitHub',
    icon: 'code',
  },
};

describe('SideProjectCard', () => {
  describe('with all fields', () => {
    beforeEach(() => {
      render(<SideProjectCard project={mockProjectWithLogos} />);
    });

    test('renders card title and subtitle', () => {
      expect(screen.getByText('Test AI Project')).toBeInTheDocument();
      expect(screen.getByText('A test subtitle for AI')).toBeInTheDocument();
    });

    test('renders the themed icon for ai-testplan', () => {
      const logoIcon = document.querySelector('.fw-card__logo .material-icons');
      expect(logoIcon.textContent).toBe('psychology');
    });

    test('renders only the first 3 stats', () => {
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('GPT-4')).toBeInTheDocument();
      expect(screen.getByText('CLI')).toBeInTheDocument();
      expect(screen.queryByText('extra stat')).not.toBeInTheDocument();
    });

    test('renders only the first 6 highlights', () => {
      expect(screen.getByText('Smart Gen')).toBeInTheDocument();
      expect(screen.getByText('Coverage')).toBeInTheDocument();
      expect(screen.getByText('Platform')).toBeInTheDocument();
      expect(screen.getByText('Interface')).toBeInTheDocument();
      expect(screen.getByText('Export')).toBeInTheDocument();
      expect(screen.getByText('Prompt')).toBeInTheDocument();
      expect(screen.queryByText('Should Be Hidden')).not.toBeInTheDocument();
    });

    test('renders CTA link with correct attributes', () => {
      const link = screen.getByRole('link', { name: /View on GitHub/i });
      expect(link).toHaveAttribute('href', 'https://github.com/mcello23/ai-test-plan-generator');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveClass('fw-card__cta--primary');
    });

    test('applies CSS custom properties for theme', () => {
      const card = document.querySelector('.fw-card');
      expect(card.style.getPropertyValue('--fw-accent')).toBe('#00897b');
    });
  });

  describe('alternate theme', () => {
    beforeEach(() => {
      render(<SideProjectCard project={mockProjectNoLogos} />);
    });

    test('renders card content normally', () => {
      expect(screen.getByText('Test Doom Project')).toBeInTheDocument();
      expect(screen.getByText('3D Ray')).toBeInTheDocument();
    });

    test('uses doom-game theme icon', () => {
      expect(screen.getByText('sports_esports')).toBeInTheDocument();
    });

    test('applies doom-game accent color', () => {
      const card = document.querySelector('.fw-card');
      expect(card.style.getPropertyValue('--fw-accent')).toBe('#e65100');
    });
  });

  describe('theme fallback', () => {
    test('falls back to ai-testplan theme for unknown id', () => {
      const unknownProject = {
        ...mockProjectNoLogos,
        id: 'unknown-id',
        cardTitle: 'Unknown Project',
      };
      render(<SideProjectCard project={unknownProject} />);
      const card = document.querySelector('.fw-card');
      expect(card.style.getPropertyValue('--fw-accent')).toBe('#00897b');
    });
  });
});
