import React from 'react';

export default function Button({ onClick, children, getDisabled}) {
  return <button onClick={onClick} disabled={getDisabled} > {children} </button>;
}