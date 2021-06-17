import React from 'react';
import { render } from '@testing-library/react';
import ProductListItem from './ProductListItem';

it ('shows on sale label when isOnSale', () => {
  const { getByText } = render(<ProductListItem
    name="Mocha"
    price={3.50}
    imageUrl="..."
    isOnSale
  />)
    expect(getByText(`Mocha (On Sale)`))
    .toBeInTheDocument();
})

it ('disables the button when disabled', () => {
  const { getByText } = render(<ProductListItem
    name="Mocha"
    price={3.50}
    imageUrl="..."
    isSoldOut
  />)
  expect(getByText("Sold out"))
    .toHaveAttribute('disabled');
})