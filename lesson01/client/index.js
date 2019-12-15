import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {getClientStore} from '@/store/store';
import {Provider} from 'react-redux';
import routes from '@/App';
import Header from '@/component/Header';

const Page = <Provider store={getClientStore()}>
  <BrowserRouter>
    {/* <App/> */}
    <Header></Header>
    { routes.map(route => route.title ? <Route {...route} component={() => <route.component title={route.title}/>} /> : <Route {...route} />)}
  </BrowserRouter>
</Provider>

// 注水
ReactDom.hydrate(Page, document.getElementById('root'));
