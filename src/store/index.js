import {
   configureStore,
   getDefaultMiddleware,
} from '@reduxjs/toolkit';
import spotifyReducer from './spotifySlice';

import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
   reducer: {
      spotify: spotifyReducer,
    
   },

  
});

setupListeners(store.dispatch);
