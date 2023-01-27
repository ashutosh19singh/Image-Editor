import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import Filter from './components/Filter';
import Editor from './components/Editor';
import FliterSlider from './components/FilterSlider';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
          <Route element = {<Navigate to="/login"/>} path="/"/>
          <Route element = {<Login/>} path="login"/>
          <Route element = {<Signup/>} path="signup"/>
          <Route element = {<Filter/>} path="filter"/>
          <Route element = {<FliterSlider/>} path="fliterslider"/>
          <Route element = {<Editor/>} path="editor"/>
          <Route element = {<Navbar/>} path="navbar"/>
          <Route element = {<Notfound/>} path="*"/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
