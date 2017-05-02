import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Sweetalert, Button } from 'zent';
import 'zent/lib/index.css';
// Render the main component into the dom
const showAlertInfo = () => {
  Sweetalert.alert({
    content: '这个是具体内容',
    title: '这是一个消息标题'
  });
}

ReactDOM.render(
  <Button onClick={showAlertInfo}>消息对话框</Button>,
  document.getElementById('app')
);
// ReactDOM.render(<App />, document.getElementById('app'));
