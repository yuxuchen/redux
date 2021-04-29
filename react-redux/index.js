import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './TodoList.js';
import {Provider} from 'react-redux';
import store from './store';

const App=(
  <Provider store={store}>
    <TodoList/>
  </Provider>
)

ReactDom.render(App,document.getElementById('root'))


//provider提供器链接了store，那么provider里面所有的组件都有能力获取provider的内容了
//provider是react-redux核心的组件，可以帮助把store提供给每一个内部的组件

