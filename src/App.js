import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  
  const [videoList, setVideoList] = useState([]);

  const apiKey = "6c48d56b-7328-4baa-8258-e0484f8c987e";

  
  useEffect(() => {
    axios
    .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
    .then((response) => {
      setVideoList(response.data)
    });
  }, [apiKey]);


    
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage videoList={videoList} apiKey={apiKey}/>}/>

          <Route path="/video/:videoId" element={<VideoDetailsPage videoList={videoList} apiKey={apiKey}/>}/>

          <Route path="/videoupload" element={<VideoUploadPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
