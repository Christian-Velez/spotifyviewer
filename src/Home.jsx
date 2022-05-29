import React from 'react'
import queryString from 'query-string';

const Home = () => {

   const handleLogin = () => {
      const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

      const params = {
         client_id,
         response_type: 'code',
         redirect_uri: 'http://localhost:3000/general',
         scope: 'ugc-image-upload user-read-playback-state user-read-currently-playing user-read-playback-state user-modify-playback-state user-follow-modify user-follow-read user-read-recently-played user-read-playback-position user-top-read playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private app-remote-control streaming user-read-email user-read-private user-library-modify user-library-read'
      }

      const url = 
         'https://accounts.spotify.com/authorize?' + queryString.stringify(params);
      window.location.href = url;      

   }
  return (
    <div>
      Home
      <button onClick={handleLogin}>iniciar sesion</button>
   </div>
  )
}

Home.propTypes = {}

export default Home