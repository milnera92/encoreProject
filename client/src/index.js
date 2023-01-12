import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import {disableReactDevTools} from '@fvilers/disable-react-devtools';

import App from "./App";

if (process.env.NODE_ENV === 'production') disableReactDevTools()

// make env for auth0
// alt is window.__RUNTIME_CONFIG__ instead of process.env
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  // </React.StrictMode>
);
