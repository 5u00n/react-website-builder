
import React from 'react';
import { OldEditor } from './pages/OldEditor';
import { SimpleEditor } from './pages/SimpleEditor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/old" element={<OldEditor />} />
                <Route path="/" element={<SimpleEditor />} />
            </Routes>
        </Router>
    );
}

export default App;
