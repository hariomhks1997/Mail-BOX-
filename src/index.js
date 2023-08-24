import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Main } from 'react-router-dom';
import CartProvider from './Store/CartProvider';
import { Provider } from 'react-redux';

import store from './Store/redux-demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><CartProvider><Main><App /></Main></CartProvider></Provider>);
