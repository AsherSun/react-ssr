import React, { useState } from 'react';

function Index(props) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Hi, {props.title}! {count}</h1>
      <h2>美好的事情即将发生</h2>
      <button onClick={() => setCount(count + 1)}>累加</button>
    </div>
  );
}

export default Index;