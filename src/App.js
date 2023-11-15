import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import mainVideo from './data/video-details.json';
import videoList from './data/videos.json';
import './App.scss';


function App() {
  return (
    <div>
      <Header />
      <MainVideo mainVideo={mainVideo} videoList={videoList}/>
    </div>
  );
}

export default App;
