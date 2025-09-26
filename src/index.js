import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from "react-error-boundary";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://353ebe5cc56fae05bfa1ee29b54e0d14@o4510069292990464.ingest.us.sentry.io/4510069294694400",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ErrorBoundary FallbackComponent={()=><h1>Error</h1>}> */}
      <App />
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
