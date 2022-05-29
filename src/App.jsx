import React from 'react';
import {
   BrowserRouter,
   Route,
   Routes,
   useNavigate,
} from 'react-router-dom';
import Home from './Home';
import GeneralStats from './GeneralStats';
import { useSelector } from 'react-redux';

const App = () => {   
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path='/general'
               element={<GeneralStats />}
            />
            <Route
               path='/'
               element={<Home />}
            />
         </Routes>
      </BrowserRouter>
   );
};

App.propTypes = {};

export default App;
