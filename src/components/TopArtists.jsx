import React, {
   useEffect,
   useState,
} from 'react';
import {
   useDispatch,
   useSelector,
} from 'react-redux';
import { getUserTop } from '../store/spotifySlice';
import {
   Avatar,
   Flex,
   HStack,
   Select,
   Text,
   VStack,
} from '@chakra-ui/react';

const TopArtists = () => {
   const { topArtists } = useSelector(
      (state) => state.spotify
   );

   const dispatch = useDispatch();

   const [timeRange, setTimeRange] =
      useState('short_term');

   useEffect(() => {
      dispatch(getUserTop({ type: 'artists', timeRange}));
   }, [timeRange])

   if (topArtists?.length === 0) {
      return null;
   }

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

         <Flex
            w='full'
            gap={10}
            flexWrap='wrap'
            justifyContent='center'
         >
            {topArtists?.items?.map((item) => {
               const {
                  images,
                  name,
                  id,
                  followers,
               } = item;
               const img = images[0].url;

               return (
                  <VStack
                     minW='300px'
                     alignItems='center'
                     key={id}
                     paddingTop={10}
                     paddingBottom={20}
                     spacing={10}
                     justifyContent='flex-start'
                     borderRadius='md'
                     border='1px solid'
                     borderColor='gray.100'
                  >
                     <Avatar
                        name={name}
                        src={img}
                        size='2xl'
                     />

                     <VStack alignItems='flex-start'>
                        <Text fontWeight='bold'>
                           {name}{' '}
                        </Text>
                        <Text>
                           {Math.floor(
                              followers?.total /
                                 1000
                           )}
                           K followers
                        </Text>
                     </VStack>
                  </VStack>
               );
            })}
         </Flex>
      </VStack>
   );
};

TopArtists.propTypes = {};

export default TopArtists;
