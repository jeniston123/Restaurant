//import logo from './logo.svg';
// import './App.css';
//import Hello from './components/Hello';
//import GetData from './components/GetData';
import Signup from './components/SignUp';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
     <Route path='/menu' element={<Menu/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
   
    
     </Routes>
    </div>
  );
}

export default App;
