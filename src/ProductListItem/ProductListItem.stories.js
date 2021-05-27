import React from 'react';
import ProductListItem from './ProductListItem';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'ProductListItem',
  decorators: [withKnobs],
};

export const standard = () => (
  <ProductListItem
    name={text("name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddToCart={action('Add to cart clicked')}
    imageUrl={text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/")}
    />
);
