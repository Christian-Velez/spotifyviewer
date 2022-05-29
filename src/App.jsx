import React from 'react';
import {
   BrowserRouter,
   Route,
   Routes,
} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ValidationScreen from './ValidationScreen';


/*
   colores
   #0C0C0C black
   #69DC9E green
   #FFFFFF white


*/


const App = () => {   
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path='/general'
               element={<ValidationScreen />}
            />
            <Route
               path='/'
               element={<HomeScreen />}
            />
         </Routes>
      </BrowserRouter>
   );
};

App.propTypes = {};

export default App;
