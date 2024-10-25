import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'
import './index.css'
import AuthContext, { ProductContext } from './utils/ContextApi/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext>

    <App />
  </AuthContext>
  </BrowserRouter>
    ,
)
