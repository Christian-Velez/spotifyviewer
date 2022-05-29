import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
   VStack,
} from '@chakra-ui/react';
import RecentlyPlayed from './components/RecentlyPlayed';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import TopArtists from './components/TopArtists';
import TopTracks from './components/TopTracks';

const StatsScreen = () => {
   const { isLoading } = useSelector(
      (state) => state.spotify
   );


   return (
      <VStack
         w={{
            base: 'full',
            xl: '50%',
         }}
         margin='auto'
         spacing={20}
         padding={{ base: 5, xl: 20 }}
         alignItems='center'
         justifyContent='center'
         textAlign='center'
      >
         <Navbar />

         <Tabs
            isFitted
            variant='enclosed'
            colorScheme='green'
            w='full'
         >
            <TabList mb='1em'>
               <Tab isDisabled={isLoading}>
                  Recently played
               </Tab>
               <Tab isDisabled={isLoading}>
                  Top Artists
               </Tab>
               <Tab isDisabled={isLoading}>
                  Top Tracks
               </Tab>
            </TabList>

            <TabPanels>
               <TabPanel>
                  <RecentlyPlayed />
               </TabPanel>
               <TabPanel>
                  <TopArtists />
               </TabPanel>
               <TabPanel>
                  <TopTracks />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </VStack>
   );
};

StatsScreen.propTypes = {};

export default StatsScreen;
