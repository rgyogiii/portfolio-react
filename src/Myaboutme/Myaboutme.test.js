import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Myaboutme from './Myaboutme';

describe('<Myaboutme />', () => {
  test('it should mount', () => {
    render(<Myaboutme />);
    
    const myaboutme = screen.getByTestId('Myaboutme');

    expect(myaboutme).toBeInTheDocument();
  });
});