import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Myprojects from './Myprojects';

describe('<Myprojects />', () => {
  test('it should mount', () => {
    render(<Myprojects />);
    
    const myprojects = screen.getByTestId('Myprojects');

    expect(myprojects).toBeInTheDocument();
  });
});