import './App.css';
import Navbar from './container/Navbar';
import Login from './container/Login'
import SignUp from './container/SignUp';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './container/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/dashbord' element={<Home/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
