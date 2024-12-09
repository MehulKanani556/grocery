import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './CSS/shweta.css';
import './App.css';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Main from './Pages/Main';
import Sidebar from './Pages/Sidebar';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import User from './Pages/User';
import Profile from './Pages/Profile';
import Adderess from './Pages/Adderess';
import Privacy from './Pages/Privacy';
import Deatail from './Pages/Deatail';
import Order from './Pages/Order';
import Coupon from './Pages/Coupon';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route index element={<Main />} />



            {/* sidebar */}


            {/* <Route path='/sidebar' element={<Sidebar />} /> */}
            <Route path='/category' element={<Category />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detail' element={<Deatail />} />

            <Route path='/category' element={<Category />} />
          </Route>

          {/* sidebar */}


          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/cart' element={<Cart />} />


          {/* <Route path='/sidebar' element={<Sidebar />} /> */}
          {/* <Route path='/category' element={<Category/>} /> */}

          <Route path="/user" element={<User />}>
            <Route path='profile' element={<Profile />} />
            <Route path='address' element={<Adderess />} />
            <Route path='privacy' element={<Privacy />} />

            <Route path='order' element={<Order />} />

            <Route path='payment' element={<Payment />} />
            <Route path='coupon' element={<Coupon />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
