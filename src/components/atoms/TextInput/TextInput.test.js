import React from 'react'
import { screen, render } from '@testing-library-react';
import TextInput from './TextInput';

descibre('TextInput', () => {
  it('renders as expected', () => {
    const { container } = render(< TextInput />);
    expect(container).toMatchSnapshot();
  })
})