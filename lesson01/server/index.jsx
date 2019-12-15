import React from 'react';
import {renderToString} from 'react-dom/server';
import express from 'express';
import { StaticRouter, matchPath, Route } from 'react-router-dom';
import routes from '@/App';
import { getServerStore } from '@/store/store';
import {Provider} from 'react-redux';
import Header from '@/component/Header';

const store = getServerStore();
const app = express();

app.use(express.static('public'))

app.get('*', (req, res) => {
  // const Page = <App title="无始大帝"/>;
  // React 组件，解析成HTML
  // const content = renderToString(App);
  // 获取根据路由渲染出的组件, 并且拿到loadData方法 获取数据
  const promises = [];
  routes.some(route => {
    const match = matchPath(req.path, route);
    if(match) {
      const { loadData } = route.component;
      loadData && promises.push(loadData(store));
    }
    return match;
  })
  Promise.all(promises).then( () => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Header></Header>
          {/* <App /> */}
          { routes.map(route => <Route {...route} />)}
        </StaticRouter>
      </Provider>
    )
    res.send(`
      <html>
        <head>
          <meta charset="utf-8" />
          <title>react ssr</title> 
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.__context=${JSON.stringify(store.getState())}
          </script>
          <script src="bundle.js"></script>
        </body>
      </html>
    `);
  }).catch(() => {
    res.send('页面报错了')
  });
});
app.listen(9093, () => {
  console.log('监听完毕');
});
