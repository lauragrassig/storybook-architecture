import React from 'react';
import ProductListItem from './ProductListItem';
import { action } from '@storybook/addon-actions';

export default {title: 'ProductListItem'};
export const standard = () => (
  <ProductListItem
    name="Standard Coffee"
    price="2.50"
    onAddToCart={action('Add to cart clicked')}
    imageUrl="https://source.unsplash.com/tNALoIZhqVM/200x100/"
    />
);
