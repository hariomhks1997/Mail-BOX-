import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Main } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main><App /></Main>);
