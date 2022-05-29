import React from 'react';
import PropTypes from 'prop-types';
import {
   Box,
   Heading,
   HStack,
   IconButton,
   Image,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalHeader,
   ModalOverlay,
   Text,
   useColorMode,
   useDisclosure,
   VStack,
} from '@chakra-ui/react';
import {
   MoonIcon,
   SettingsIcon,
   SunIcon,
} from '@chakra-ui/icons';
import SpotifyLogo from '../media/spotify-logo.png';

const Navbar = () => {
   const { onClose, isOpen, onOpen } =
      useDisclosure();

   const { colorMode, toggleColorMode } =
      useColorMode();

   return (
      <>
         <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>
                  Appareance
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <VStack
                     w='full'
                     alignItems='center'
                     spacing={10}
                     paddingBottom={10}
                  >
                     <Heading fontSize='sm'>
                        {colorMode === 'light'
                           ? 'Light'
                           : 'Dark'}
                     </Heading>

                     <IconButton
                        icon={
                           colorMode ===
                           'light' ? (
                              <MoonIcon />
                           ) : (
                              <SunIcon />
                           )
                        }

                        onClick={toggleColorMode}
                     />
                  </VStack>
               </ModalBody>
            </ModalContent>
         </Modal>

         <HStack
            justifyContent='space-between'
            w='full'
            padding={3}
         >
            <HStack>
               <Box boxSize={{ base: '50px' }}>
                  <Image src={SpotifyLogo} />
               </Box>
               <Heading>SpotifyViewer</Heading>
            </HStack>

            <IconButton
               variant='ghost'
               icon={<SettingsIcon />}
               onClick={onOpen}
            />
         </HStack>
      </>
   );
};

Navbar.propTypes = {};

export default Navbar;
