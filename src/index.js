import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from './store/store';
import ScrollToTop from './scroll-to-top';

import './styles/all.min.css';
import './styles/bootstrap.min.css';
import './styles/style.css';
import './styles/responsive.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/add-styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <App store={store} />
    </ScrollToTop>
  </BrowserRouter>
);