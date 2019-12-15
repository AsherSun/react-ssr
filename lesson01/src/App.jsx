import React from 'react';
import { Route } from 'react-router-dom';
import Index from '@/page/Index';
import About from '@/page/About';

function App() {
  return (
    <>
      <Route path="/" exact component={() => <Index title="无始大帝" />}></Route>
      <Route path="/about" exact component={About}></Route>
    </>
  );
}

export default App;