import React from 'react';
import { SimpleEditor } from './pages/SimpleEditor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SimpleEditor />} />
            </Routes>
        </Router>
    );
}

export default App;
