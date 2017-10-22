import React, { Component } from 'react';
import { Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';

const Breadcrumbs = ({ location }) => {
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const BreadcrumbItems = pathSnippets.map((slug, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {slug}
        </Link>
      </Breadcrumb.Item>
    );
  });
  return <Breadcrumb>
    <Breadcrumb.Item key="home">
      <Link to="/"><Icon type="home" /></Link>
    </Breadcrumb.Item>
    {BreadcrumbItems}
  </Breadcrumb>;
};

export default withRouter(Breadcrumbs);