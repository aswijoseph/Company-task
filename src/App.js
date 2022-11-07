import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Homepage from './Components/Homepage';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Signup />}/>
    <Route path="/Homepage" element={<Homepage />} />
  </Routes>
  </BrowserRouter>
  </>  
  );
}

export default App;
