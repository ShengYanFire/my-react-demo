/*
 * @Descripttion: 
 * @version: 
 * @Author: lsy
 * @Date: 2022-01-19 11:06:50
 * @LastEditors: lsy
 * @LastEditTime: 2022-01-21 10:09:48
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@/views/app';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render()参数1：要渲染的虚拟dom，参数2：渲染的位置，参数3：回调函数
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
