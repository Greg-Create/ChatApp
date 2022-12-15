import logo from './logo.svg';
import './App.css';
import Home from "../src/Pages/Home"
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Search from './Pages/Search';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';



function App() {
  return (

    <BrowserRouter >
    
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/search"  element={<Search/>}/>
      <Route path="/auth" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>



  );
}

export default App;
