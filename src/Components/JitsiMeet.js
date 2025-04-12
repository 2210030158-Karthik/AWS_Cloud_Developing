// src/Components/JitsiMeet.js
import React, { useEffect, useRef } from 'react';

const JitsiMeet = ({ roomName, user }) => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) {
      console.error('Jitsi Meet API script not loaded');
      return;
    }

    const domain = 'meet.jit.si';
    const options = {
      roomName: roomName || 'MyOnlineClassroomRoom',
      parentNode: jitsiContainerRef.current,
      userInfo: {
        displayName: user?.name || 'Guest',
      },
      configOverwrite: {},
      interfaceConfigOverwrite: {},
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose(); // Clean up on unmount
  }, [roomName, user]);

  return <div ref={jitsiContainerRef} style={{ height: '840px', width: '720px' }} />;
};

export default JitsiMeet;
