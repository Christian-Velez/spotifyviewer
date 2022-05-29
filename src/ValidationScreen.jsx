import { setToken } from './store/spotifySlice';
import {
   useDispatch,
   useSelector,
} from 'react-redux';
import {
   useLocation,
   useNavigate,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import StatsScreen from './StatsScreen';
import { Spinner, VStack } from '@chakra-ui/react';

const ValidationScreen = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const search = useLocation().search;
   const { setTokenSuccessfully, token } =
      useSelector((state) => state.spotify);

   const redirectToLogin = () => {
      navigate('/');
   };

   useEffect(() => {
      const startSettingToken = async () => {
         const userCode = new URLSearchParams(
            search
         ).get('code');
         if (!userCode) return redirectToLogin();

         dispatch(setToken(userCode));
      };

      startSettingToken();
   }, [dispatch]);

   useEffect(() => {
      if (!setTokenSuccessfully) {
         redirectToLogin();
      }
   }, [setTokenSuccessfully]);

   return !token.access_token ? (
      <VStack w='full' paddingTop={40}>
         <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='green.500'
            size='xl'
         />
      </VStack>
   ) : (
      <StatsScreen />
   );
};

ValidationScreen.propTypes = {};

export default ValidationScreen;
