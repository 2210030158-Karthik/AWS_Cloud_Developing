import Keycloak from 'keycloak-js';

let keycloakInstance = null;

const getKeycloakInstance = () => {
  if (!keycloakInstance) {
    console.log("Initializing Keycloak instance...");
    keycloakInstance = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'online-classroom',
      clientId: 'react-frontend'
    });
  }
  return keycloakInstance;
};

const keycloak = getKeycloakInstance();

export default keycloak;