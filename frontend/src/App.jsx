import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/courses" element={<Courses />} />
                <Route path ="/workshops" element={<Workshops />} />
                <Route path ="/community" element={<Community />} />
                <Route path="/profile" element={<Profile />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App;