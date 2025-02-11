import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';
import * as Sentry from "@sentry/react";
import ReactGA from "react-ga4";

Sentry.init({
    dsn: "https://f8ddcfaf367e6686b3a48d10e3282801@o244019.ingest.us.sentry.io/4508645069357056",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
});

ReactGA.initialize("G-0GJ87BW39W");
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
