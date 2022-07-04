import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Myservices from './Myservices';

describe('<Myservices />', () => {
  test('it should mount', () => {
    render(<Myservices />);
    
    const myservices = screen.getByTestId('Myservices');

    expect(myservices).toBeInTheDocument();
  });
});