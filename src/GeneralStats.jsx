import { setToken } from './store/spotifySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';


const GeneralStats = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const search = useLocation().search;
   const { setTokenSuccessfully, token } = useSelector((state) => state.spotify);

   const redirectToLogin = () => {
      navigate('/');
   };

   useEffect(() => {
      const startSettingToken = async () => {
         const userCode = new URLSearchParams(search).get('code');
         if (!userCode)
            return redirectToLogin();
         
         dispatch(setToken(userCode));
      };

      startSettingToken();
   }, [dispatch]);
      
   useEffect(() => {
      if(!setTokenSuccessfully) {
         redirectToLogin();
      }
   }, [setTokenSuccessfully]);

   return (
      <div>
         {
            !token.access_token
               ? <p>Loading...</p>
               : <p>Ya puedo mostrar la data</p>
         }
      </div>
   );
};

GeneralStats.propTypes = {};

export default GeneralStats;
