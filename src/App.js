import React from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Class from './Pages/Class';
import Chat from './Pages/Chat';
import JitsiMeeting from './Components/JitsiMeet';


function App() {
  const { keycloak, initialized } = useKeycloak();
  console.log("App component rendered, initialized:", initialized);

  if (!initialized) {
    return <div>Loading Keycloak...</div>;
  }

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        {keycloak?.authenticated ? (
          <>
            <p style={{ padding: '10px' }}>
              Hello {keycloak?.tokenParsed?.preferred_username}
              <button style={{ marginLeft: '10px' }} onClick={() => keycloak?.logout()}>Logout</button>
            </p>
          </>
        ) :(
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>You are not logged in.</p>
            <button 
              onClick={() => keycloak?.login()} 
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </div>
        )}
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/class" element={<Class />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/jitsi" element={<JitsiMeeting />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;