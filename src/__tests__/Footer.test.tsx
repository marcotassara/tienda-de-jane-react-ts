import { render, screen } from '@testing-library/react';
import Footer from '../sharedComponents/Footer';
import { describe, it, expect } from 'vitest';

describe('Footer Component', () => {
  it('debería renderizar el texto de copyright y el año actual', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    // Buscamos un texto que contenga el año
    const footerText = screen.getByText(new RegExp(`© ${currentYear} Tienda de Jane`, 'i'));
    
    expect(footerText).toBeInTheDocument();
  });
});