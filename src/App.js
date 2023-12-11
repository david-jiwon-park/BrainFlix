import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import './App.scss';

import VideoUpload from './pages/VideoUpload/VideoUpload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainVideo/>}/>

          <Route path="/video/:videoId" element={<MainVideo/>}/>

          <Route path="/videoupload" element={<VideoUpload/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
