import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { KeycloakProvider } from "./components/KeycloakProvider.jsx";
import {KeycloakConfig} from "./config.js"

// i18n.init({
//   backend: {
//     loadPath: '/locales/{{lng}}/{{ns}}.json',
//   },
//   lng: 'en',
//   fallbackLng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <KeycloakProvider keycloakConfig={KeycloakConfig}>
    <Router>
      <App />
    </Router>
  </KeycloakProvider>
);
