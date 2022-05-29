import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserTop } from '../store/spotifySlice';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { format } from 'timeago.js';

const TopTracks = (props) => {
 
   const dispatch = useDispatch();
   const { topTracks } = useSelector(state => state.spotify);

   useEffect(() => {
      dispatch(getUserTop('tracks'));
   }, []);

 

  return (
      <VStack w='full' spacing={10}>
         {
            topTracks?.items?.map(item => {

               const { name, album, id } = item;

               const img = album?.images[0]?.url;
             

               return (
                  <HStack w='full' alignItems='center' key={id} spacing={10}>
                     <Box boxSize='100px'>
                        <Image src={img}/>
                     </Box>

                     <VStack alignItems='flex-start'>
                        <Text fontWeight='bold'>{name} </Text>
                        <Text>{album?.name}  </Text>
                     </VStack>
                  </HStack>
               )
            })
         }
      </VStack>
  )
};

TopTracks.propTypes = {};

export default TopTracks;
