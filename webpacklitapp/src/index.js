

import './style.css';

import './views/home-view.js';
import './views/health-view.js';
import './views/sport-view.js';
import './views/technology-view.js';
import './views/search-view.js';

import './components/news-header.js';
import './components/search-bar.js';

import './components/news-article.js';
import './components/sport-article.js';
import './components/health-article.js';
import './components/technology-article.js';

import './components/news-container.js';
import './components/sport-container.js';
import './components/health-container.js';
import './components/technology-container.js';


import './components/headline-article.js';
import './components/headline-container.js';

import { Router } from '@vaadin/router';



window.addEventListener('load', ()=>{
    initRouter();
    registerSW();
});

function initRouter(){
    const router = new Router(document.querySelector('main'));
    router.setRoutes([
    {
        path: '/',
        component:'home-view'
    },
    {
        path: '/Category/health',
        component:'health-view'
    },
    {
        path: '/Category/sports',
        component:'sport-view'
    },
    {
        path: '/Category/technology',
        component:'technology-view'
    },
    {
        path: '/Search',
        component:'search-view'
    },

    ])
}
async function registerSW() {
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('./sw.js'); 
    } catch (e) {
      console.log('ServiceWorker registration failed. Sorry about that.', e);
    }
  } else {
    console.log('Your browser does not support ServiceWorker.');
  }
}