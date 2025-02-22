import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Professionally from './components/professionally/Professionally';
import Personally from './components/personally/Personally';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/professionally" element={<Professionally />} />
          <Route path="/personally" element={<Personally />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
