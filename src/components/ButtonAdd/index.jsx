import React, { useState } from 'react';
import { Container } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';

export function ButtonAdd({ initialValue = 0, ...rest }) {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Container type="button" {...rest}>
      <button onClick={decrement}><FiMinus /></button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={increment}><FiPlus /></button>
    </Container>
  );
}
