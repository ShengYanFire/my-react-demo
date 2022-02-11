/*
 * @Descripttion: 
 * @version: 
 * @Author: lsy
 * @Date: 2022-01-19 11:06:50
 * @LastEditors: lsy
 * @LastEditTime: 2022-01-21 13:56:30
 */

import './index.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import RouteConfig from "@/routes"

import { Menu, Button, Layout } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  BugOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';

import logo from '@/assets/images/logo.svg';

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false, clientHeight: document.documentElement.clientHeight }
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({
        clientHeight: document.documentElement.clientHeight
      })
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router basename="/my-react-demo/">
        <Layout style={{ height: this.state.clientHeight - 1 }}>
          <Sider theme="light" collapsed={this.state.collapsed}>
            <img src={logo} className="App-logo" alt="logo" />
            < Menu
              defaultSelectedKeys={['home']}
              defaultOpenKeys={['test']}
              mode="inline"
              theme="light"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">首页 </Link>
              </Menu.Item>
              <SubMenu key="test" icon={<BugOutlined />} title="测试">
                <Menu.Item key="childtoparent" icon={<UserSwitchOutlined />} >
                  <Link to="/childtoparent">父子传值</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header className='app_header'>
              <Button type="primary" onClick={this.toggleCollapsed}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
            </Header>
            <Content style={{ background: "white", margin: 10 }}>
              <RouteConfig />
            </Content>
            <Footer style={{ background: "white", margin: "0px 10px", textAlign: "center" }}>My App ©2022 Created by LSY</Footer>
          </Layout>
        </Layout>
      </Router >
    );
  }
}

