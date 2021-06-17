import React from 'react';
import './ProductListItem.css';

import Heading from "../../atoms/Heading/Heading";
import Card from "../../atoms/Card/Card";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text"

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) {
  return (
    <Card highlight={isOnSale}>
      <Heading>
        {name} {isOnSale && "(On Sale)"}
      </Heading>
      <img src={imageUrl} alt="" />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} getDisabled={isSoldOut}>
        {isSoldOut ? "Sold out" : "Add to Cart"}
      </Button>
    </Card>
  );
}