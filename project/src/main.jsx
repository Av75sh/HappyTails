import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>

    <Auth0Provider
    domain="dev-4ayxu53ymt5oi6rq.us.auth0.com"
    clientId="mSo4hXvILfgghsdYfcnn6lpE2bwOvDgz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  
    </BrowserRouter>
  </StrictMode>
);
