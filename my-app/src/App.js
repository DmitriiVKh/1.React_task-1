import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export function App() {
  const year = new Date().getFullYear();

  const header = createElement(
    'header',
    { className: 'App-header' },
    createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
    createElement('p', null, 'Edit ', createElement('code', null, 'src/App.js'), ' and save to reload.'),
    createElement(
      'a',
      {
        className: 'App-link',
        href: 'https://reactjs.org',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      'Learn React'
    ),
    createElement('div', null, year)
  );

  return createElement(
    'div',
    { className: 'App' },
    header
  );
}

export default App;