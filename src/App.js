
import './App.css';
import Home from './components/Home';
import Mapping from './components/Mapping';
import Mapping1 from './components/Mapping1';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UseS from './components/UseS';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
{/* <Mapping1/>
<Mapping/> */}
{/* <UseS/> */}
<Home/>

{/*    
      <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/map1' element={<Mapping/>}/>
          <Route path='/map2' element={<Mapping1/>}/>

      </Routes> */}
   
  


  

      {/* <Routes>
       
        <Route path='/' element={<Home/>}/>
        <Route path='/map1' element={<Mapping/>}/>
        <Route path='/map2' element={<Mapping1/>}/>

      </Routes> */}
    </div>
  );
}

export default App;
