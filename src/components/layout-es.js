import React from 'react';
import { Helmet } from 'react-helmet';
import 'tachyons';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import Header from './header-es';
import useSiteMetadata from '../hooks/use-metadata';

import './layout.css';

const Inner = styled.div.attrs({
  className: 'ph5-l ph4',
})``;

const MenuLink = styled(Link).attrs({
  className: 'f3 white link pb4 fw8',
})``;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        />
      </Helmet>
      <Menu>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/blog/">Blog</MenuLink>
        <MenuLink to="/about/">Sobre Mí</MenuLink>
      </Menu>
      <Header />
      <Inner>{children}</Inner>
    </div>
  );
};

export default Layout;