import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import PropertyListings from './Component/PropertyListing';
import LoginPage from './Component/LoginPage';
import Signup from './Component/Signup';
import CartPage from './Component/CartPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propertylisting" element={<PropertyListings />} />
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/cartpage' element={<CartPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;