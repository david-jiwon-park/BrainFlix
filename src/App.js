import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <Routes>

                    <Route path="/" element={<HomePage/>}/>

                    <Route path="/video/:videoId" element={<HomePage/>}/>

                    <Route path="/videoupload" element={<VideoUploadPage/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
