import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductListItem from './ProductListItem';
import { OnSale, SoldOut, Standard } from './ProductListItem.stories';

it ('shows on sale label when isOnSale', () => {
  const { getByText } = render(<ProductListItem
    name="Mocha"
    price={3.50}
    imageUrl="..."
    isOnSale />)
    expect(getByText(`(On Sale)`)).toBeInTheDocument();
})