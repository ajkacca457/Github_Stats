import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { GithubProvider } from './context/AppContext';
import { Auth0Provider } from "@auth0/auth0-react";


// domain:dev-tyvhbrsji5yo4akg.us.auth0.com
// clientID: lQns1VpwOEb6UcsyAVEJw2Gox1B43CYt


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Auth0Provider
      domain='dev-tyvhbrsji5yo4akg.us.auth0.com'
      clientId='lQns1VpwOEb6UcsyAVEJw2Gox1B43CYt'
      redirectUri={window.location.origin}
      cacheLocation="localstorage"      
      >
        <GithubProvider>   
          <App />
        </GithubProvider>
      </Auth0Provider>
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
