import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Showcase from './pages/showcase';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Footer from './Components/Navbar/Footer';
 
function App() {
    return (
        <div>
        <Router>
            <Navbar />
            
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/showcase' element={<Showcase />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} />
                
            </Routes>
            <Footer />
        </Router>
        </div>
    );
}

 
export default App;