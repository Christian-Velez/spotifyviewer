import React, { useEffect, useState } from 'react';
import {
   useDispatch,
   useSelector,
} from 'react-redux';
import { getUserTop } from '../store/spotifySlice';
import {
   Box,
   HStack,
   Image,
   Select,
   Text,
   VStack,
} from '@chakra-ui/react';

const TopTracks = () => {
   const dispatch = useDispatch();
   const { topTracks } = useSelector(
      (state) => state.spotify
   );

   const [timeRange, setTimeRange] =
      useState('short_term');

   useEffect(() => {
      dispatch(getUserTop({ type: 'tracks', timeRange }));
   }, [timeRange]);

   return (
      <VStack w='full' spacing={20}>
         <HStack
            w='full'
            justifyContent='flex-end'
         >
            <Select
               w='400px'
               value={timeRange}
               onChange={(e) =>
                  setTimeRange(e.target.value)
               }
            >
               <option value='short_term'>Last 4 weeks</option>
               <option value='medium_term'>Last 6 months</option>
               <option value='long_term'>All time</option>
            </Select>
         </HStack>


         <VStack w='full' spacing={10}>
            {topTracks?.items?.map((item) => {
               const { name, album, id } = item;

               const img = album?.images[0]?.url;

               return (
                  <HStack
                     w='full'
                     alignItems='center'
                     key={id}
                     spacing={10}
                  >
                     <Box boxSize='100px'>
                        <Image src={img} />
                     </Box>

                     <VStack alignItems='flex-start' maxW='calc(100% - 150px)' textAlign='start'>
                        <Text fontWeight='bold'>
                           {name}{' '}
                        </Text>
                        <Text>{album?.name} </Text>
                     </VStack>
                  </HStack>
               );
            })}
         </VStack>
      </VStack>
   );
};

TopTracks.propTypes = {};

export default TopTracks;
