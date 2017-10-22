import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Breadcrumbs from './Breadcrumbs';
import Destinations from './Destinations';
import './css/App.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
        <Sider breakpoint='lg' collapsedWidth='0'>
          <div className='logo'/>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
            <Menu.Item key='destinations'>
              <Icon type='rocket'/>
              <span>Mete</span>
            </Menu.Item>
            <Menu.Item key='join'>
              <Icon type='usergroup-add'/>
              <span>Partecipa</span>
            </Menu.Item>
            <Menu.Item key='rules'>
              <Icon type='solution'/>
              <span>Regolamento</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 38px' }}>
            <Breadcrumbs/>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              <Destinations/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <b>Adventours</b> © 2017 — Made with <Icon className='love' type='heart'/> in <b>London</b>
          </Footer>
        </Layout>
      </Layout>
    </Router>
    );
  }
}

export default App;
