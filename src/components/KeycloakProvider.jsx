import { createContext, useContext, useEffect, useState } from "react";
import Keycloak from "keycloak-js";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const KeycloakProvider = ({ children, keycloakConfig }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakInstance, setKeycloakInstance] = useState(null);

  const setKeycloak = () => { 
    const keycloak = new Keycloak(
      {
        realm: keycloakConfig.realm,
        url: keycloakConfig.url,
        clientId: keycloakConfig.clientId,
      }
      // "/keycloak.json"
    );

    keycloak
      .init({
        onLoad: "login-required",
      })
      .then((authenticated) => {
        setKeycloakInstance(keycloak);
        setAuthenticated(authenticated);
      });
  };

  const login = () => {
    if (keycloakInstance) {
      keycloakInstance.login();
    }
  };

  const logout = () => {
    if (keycloakInstance) {
      keycloakInstance.logout();
    }
  };

  useEffect(() => {
    setKeycloak();
  }, []);

  const contextValue = {
    authenticated,
    login,
    logout,
    keycloakInstance,
  };

  return (
    <AuthContext.Provider 
      value={contextValue}>
        {children}
    </AuthContext.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node,
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
