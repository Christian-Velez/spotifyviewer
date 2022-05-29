import React, { useEffect } from 'react';
import {
   useDispatch,
   useSelector,
} from 'react-redux';
import {
   getUserTop,
} from '../store/spotifySlice';
import {
   Avatar,
   Flex,
   Text,
   VStack,
} from '@chakra-ui/react';

const TopArtists = () => {
   const { topArtists } =
      useSelector((state) => state.spotify);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUserTop('artists'));
   }, []);


   if(topArtists?.length === 0) {
      return null;
   }

   return (
      <Flex
         w='full'
         gap={10}
         flexWrap='wrap'
         justifyContent='center'
      >
         {topArtists?.items?.map((item) => {
            const { images, name, id, followers } = item;
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
                     <Text fontWeight='bold'>{name} </Text>
                     <Text>{ Math.floor(followers?.total/1000)}K followers</Text>
                  </VStack>
               </VStack>
            );
         })}
      </Flex>
   );
};

TopArtists.propTypes = {};

export default TopArtists;
