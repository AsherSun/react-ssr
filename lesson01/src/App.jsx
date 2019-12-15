import React from 'react';
import { Route } from 'react-router-dom';
import Index from '@/page/Index';
import About from '@/page/About';
import Home from '@/page/Home';

// function App() {
//   return (
//     <>
//       <Route path="/" exact component={() => <Index title="无始大帝" />}></Route>
//       <Route path="/about" exact component={About}></Route>
//     </>
//   );
// }

// export default App;

// 改造成js的配置，才能获取组件
export default [
  {
    path: '/home',
    component: Home,
    // exact: true,
    key: 'home',
  },
  {
    path: '/',
    component: Index,
    // loadData: Index.loadData,
    // exact: true,
    key: 'index',
  },
  {
    path: '/about',
    component: About,
    exact: true,
    key: 'about',
  }
]