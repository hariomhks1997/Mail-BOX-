import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Main } from 'react-router-dom';
import CartProvider from './Store/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartProvider><Main><App /></Main></CartProvider>);
