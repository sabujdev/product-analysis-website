
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/'>Home</Route>
        <Route path='/'>Home</Route>
        <Route path='/'>Home</Route>
      </Routes>
    
    </div>
  );
}

export default App;
