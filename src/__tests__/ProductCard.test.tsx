import { render, screen } from '@testing-library/react';
import ProductCard from '../sharedComponents/ProductCard';
import { describe, it, expect } from 'vitest';

describe('ProductCard Component', () => {
  it('debería mostrar el nombre y la imagen del producto', () => {
    const mockProps = {
      name: 'Coca-Cola Test',
      image: '/images/test.jpg'
    };

    render(<ProductCard name={mockProps.name} image={mockProps.image} />);

    expect(screen.getByText('Coca-Cola Test')).toBeInTheDocument();
    
  
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/images/test.jpg');
    expect(img).toHaveAttribute('alt', 'Coca-Cola Test');
  });
});