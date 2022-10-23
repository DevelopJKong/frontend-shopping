import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button``;

const Text = styled.div``;

function App() {
  const [number, setNumber] = useState(0);

  const onUpNumber = () => {
    setNumber((current) => current + 1);
  };

  return (
    <div className='App'>
      <Text>{number}</Text>
      <Button onClick={onUpNumber}>클릭</Button>
    </div>
  );
}

export default App;
