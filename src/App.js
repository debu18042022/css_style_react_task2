import logo from './logo.svg';
import './App.css';
import './Style.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'
import Main_body from './Main_body';
function App() {
  return (
    <div className="" style={{backgroundColor:"lightblue"}}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Main_body/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
