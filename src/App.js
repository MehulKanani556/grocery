import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import './CSS/shweta.css';
import './App.css';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Main from './Pages/Main';
// import Sidebar from './Pages/Sidebar';
import User from './Pages/User';
import Profile from './Pages/Profile';
import Adderess from './Pages/Adderess';
import Privacy from './Pages/Privacy';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route index element={<Main />} />


          {/* sidebar */}

          {/* <Route path='/sidebar' element={<Sidebar />} /> */}
          <Route path='/category' element={<Category/>} />

          <Route path="/user" element={<User />}>
            <Route path='profile' element={<Profile />} />
            <Route path='address' element={<Adderess />} />
            <Route path='privacy' element={<Privacy />} />
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
