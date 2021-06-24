---
to: src/components/atoms/<%=name%>/<%=name%>.test.js
---
import React from 'react'
import { screen, render } from '@testing-library-react';
import <%= name %> from './<%= name %>';

descibre('<%= name %>', () => {
  it('renders as expected', () => {
    const { container } = render(< <%= name %> />);
    expect(container).toMatchSnapshot();
  })
})