import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie';

import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import 'react-spotify-auth/dist/index.css';
import Dashboard from '../Connected/Dashboard';

const CallBack = () => {
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))
  return (
    <div className='app'>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          <Dashboard />
          <p>You are authorized with token: {token}</p>
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri='http://localhost:3000/callback'
          clientID='658d1a18ef2f4c0295694b0a5c4af98d'
          scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
          onAccessToken={(token) => setToken(token)}
        />
      )}
    </div>
    )
}

export default CallBack;