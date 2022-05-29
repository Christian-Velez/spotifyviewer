



export const ApiUrl = 'https://api.spotify.com/v1/';

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET


export const getAxiosGetTokenConfig = () => {
   const config = {
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      },
   }

   return config;
}

export const getAxiosConfig = ({
   contentType = 'application/json',
   token
}) => {
   const config = {
      headers: {
         'Content-Type': contentType,
         'Authorization': `Bearer ${token}`
      },
   }

   return config;
}