import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Dashboard = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <h2>Dashboard</h2>
      {keycloak.authenticated ? (
        <div>
          <p>You are logged in as <strong>{keycloak.tokenParsed?.preferred_username}</strong></p>
          <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
      ) : (
        <p>You are NOT logged in.</p>
      )}
    </div>
  );
};

export default Dashboard;