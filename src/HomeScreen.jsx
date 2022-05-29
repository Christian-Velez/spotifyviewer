import React from 'react';
import queryString from 'query-string';
import {
   Box,
   Button,
   Heading,
   HStack,
   Image,
   Text,
   Link as ChakraLink,
   VStack,
} from '@chakra-ui/react';
import SpotifyLogo from './media/spotify-logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
   const handleLogin = () => {
      const client_id = import.meta.env
         .VITE_SPOTIFY_CLIENT_ID;

      const params = {
         client_id,
         response_type: 'code',
         redirect_uri:
            'http://localhost:3000/general',
         scope: 'user-read-recently-played user-top-read',
      };

      const url =
         'https://accounts.spotify.com/authorize?' +
         queryString.stringify(params);
      window.location.href = url;
   };

   return (
      <VStack
         w='full'
         minH='100vh'
         justifyContent='center'
         textAlign='center'
         padding={20}
         alignItems='center'
         spacing={20}
      >
         <HStack alignItems='center' spacing={8}>
            <Box boxSize={{ base: '70px', xl: '80px' }}>
               <Image src={SpotifyLogo}/>
            </Box>

            <Heading>SpotifyViewer</Heading>
         </HStack>

         <Text fontSize='xl'>
            Please login with your Spotify
            account, to see your track or artist
            ranking!
         </Text>
         <Button
            colorScheme='green'
            onClick={handleLogin}
         >
            Login with Spotify
         </Button>


         <ChakraLink as={Link} to='/privacy' marginTop='auto'>Privacy notice</ChakraLink>
      </VStack>
   );
};

Home.propTypes = {};

export default Home;
