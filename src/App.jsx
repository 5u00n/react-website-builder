
import React from 'react';
import EditorComponent from './components/Editor';
import { SimpleEditor } from './pages/SimpleEditor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/old" element={<EditorComponent />} />
                <Route path="/" element={<SimpleEditor />} />
            </Routes>
        </Router>
    );
}

export default App;
