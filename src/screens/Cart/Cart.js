import React, { useState, useEffect } from 'react';
import { statusTypes } from '../../constants/api'
import Heading from '../../components/atoms/Heading';
import ProductList from '../../components/patterns/ProductList'

export default function Cart() {
  const [ cartState, setCartState ] = useState({ 
    data: [], 
    status: statusTypes.loading 
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const cartFetch = await fetch('/api/cart/');
        const cartResponse = await cartFetch.json();
        setCartState({ data: cartResponse.data, status: statusTypes.loaded })
      } catch (ex) {
        console.error(ex);
        setCartState({ data: [], status: statusTypes.errored })
      }
    }

    getData();
  }, []);


  return <>
  <Heading>Cart</Heading> 
  <ProductList
    listType="cart"
    data={cartState.data}
    status={cartState.status}
  />
  </>
}