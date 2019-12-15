import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store/store';
import {Provider} from 'react-redux';
import App from '@/App';

const Page = <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>

// 注水
ReactDom.hydrate(Page, document.getElementById('root'));
