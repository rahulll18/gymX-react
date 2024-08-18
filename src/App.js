import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './components/Authentication/Login';


const App =() => {
  return (  
    <div className="App bg-gray-900 text-white">
     
      <Routes>
        <Route path='/' index element={<Home/>} />
        <Route path='/login' index element={<Login/>} />
      </Routes>
     
    </div>
  );
}

export default App;
