import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecentlyPlayedTracks } from '../store/spotifySlice';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { format } from 'timeago.js';
const RecentlyPlayed = () => {
   const { recentlyPlayed } = useSelector(state => state.spotify);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getRecentlyPlayedTracks());

   }, [])

  return (
      <VStack w='full' spacing={10}>
         {
            recentlyPlayed?.items?.map(item => {

               const { track, played_at } = item;
               const img = track?.album?.images[0]?.url
               const key = track.uri + played_at

               return (
                  <HStack w='full' alignItems='center' key={key} spacing={10}>
                     <Box boxSize='100px'>
                        <Image src={img}/>
                     </Box>

                     <VStack alignItems='flex-start'>
                        <Text>{track?.name} </Text>
                        <Text>{track?.album?.name}  </Text>
                        <Text>{format(played_at)}</Text>
                     </VStack>
                  </HStack>
               )
            })
         }
      </VStack>
  )
}

RecentlyPlayed.propTypes = {}

export default RecentlyPlayed