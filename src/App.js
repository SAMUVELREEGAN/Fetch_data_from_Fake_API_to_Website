import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyLayout from './Layouts/MyLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import Orders from './Pages/Orders';
import SingleProduct from './Components/SingleProduct';
import MyProfile from './Components/MyProfile';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MyLayout />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/shop/:id' element={<SingleProduct />}></Route>
      <Route path='/order' element={<Orders />}></Route>
      <Route path='/proflie' element={<MyProfile />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
