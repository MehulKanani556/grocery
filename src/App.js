import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import './CSS/shweta.css';
import './App.css';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Main from './Pages/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route index element={<Main />} />

          <Route path='/category' element={<Category/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
