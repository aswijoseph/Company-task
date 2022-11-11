import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

import Header from './components/product/Header';


import Ptask from './components/product/Ptask';
import Menu from './components/product/Menu';
import Aemp from './components/product/Aemp';
import Adash from './components/product/Adash';






function App() {
    return(
       <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          
           <Route path='/Header' element={<Header/>}/>
           
          <Route path='/Adash' element={<Adash/>}/>
           <Route path='/Ptask' element={<Ptask/>}/>
           <Route path='/Menu' element={<Menu/>}/>
           <Route path='/Aemp' element={<Aemp/>}/>
           
           </Routes>
           </BrowserRouter>
           
      
</>
    );
}

export default App;
