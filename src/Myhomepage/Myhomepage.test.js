import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Myhomepage from './Myhomepage';

describe('<Myhomepage />', () => {
  test('it should mount', () => {
    render(<Myhomepage />);
    
    const myhomepage = screen.getByTestId('Myhomepage');

    expect(myhomepage).toBeInTheDocument();
  });
});