import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './components/CheckOut/Checkout';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvder/Stateprovider';


function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => { // will only run once when the app components loads..
    auth.onAuthStateChanged(authUser => {
      console.log("USER IS >>>", authUser);

      if (authUser) {
        // user just logged in 
         dispatch({
           type:'SET_USER',
           user: authUser
         })
      } else {
        // user is just logged out 
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
