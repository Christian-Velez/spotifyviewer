import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiUrl, getAxiosConfig, getAxiosGetTokenConfig } from '../api';
import queryString from 'query-string';

const initialState = {
   token: {},
   setTokenSuccessfully: true,
   topArtists: [],
   recentlyPlayed: [],
};


export const setToken = createAsyncThunk(
   'spotify/setToken',
   async (userCode) => {
      const url = 'https://accounts.spotify.com/api/token';
      
      const body = {
         grant_type: "authorization_code",
         code: userCode,
         redirect_uri: 'http://localhost:3000/general'
      }

      const config = getAxiosGetTokenConfig();

      const { data } = await axios.post(url, queryString.stringify(body), config);
      
      return data;
   }
);


export const getGenres = createAsyncThunk(
   'spotify/getGenres',
   async (_, { getState} ) => {
      const url = ApiUrl + 'tracks/2TpxZ7JUBn3uw46aR7qd6V';
      const token = getState().spotify.token.access_token;
      const config = getAxiosConfig({ token });
      const { data } = await axios.get(url, config);
      return data;
   }
)

export const getRecentlyPlayedTracks = createAsyncThunk(
   'spotify/getRecentlyPlayed',

   async(_, { getState}) => {
      const url = ApiUrl + 'me/player/recently-played';

      const token = getState().spotify.token.access_token;
      const config = getAxiosConfig({ token });
      const { data } = await axios.get(url, config);
      return data;
   }
)

export const getUserTop = createAsyncThunk(
   'spotify/getUserTop',
   async(type, {getState}) => {
      const url = ApiUrl + `me/top/${type}`;

      const token = getState().spotify.token.access_token;
      const config = getAxiosConfig({ token});
      const { data } = await axios.get(url, config);
      

      return data;
   }
)




// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const spotifySlice = createSlice({
   name: 'spotify',
   initialState,
   reducers: {
     
   },

   extraReducers: {
      [setToken.fulfilled]: (state, action) => {
         state.token = action.payload;
      },
      [setToken.rejected]: (state, action) => {
         state.setTokenSuccessfully = false;
      },

      [getRecentlyPlayedTracks.fulfilled]: (state, action) => {
         state.recentlyPlayed = action.payload
      },

      [getUserTop.fulfilled]: (state, action) => {
         state.topArtists = action.payload
      }
   }
});

export default spotifySlice.reducer;
