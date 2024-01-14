import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Map from './components/Map';
import ModelChat from './components/ModelChat';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/chat" element={<ModelChat />} />
      </Route>
    </Routes>
  );
}

export default App;
