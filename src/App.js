import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import videoList from './data/video-details.json';
import './App.scss';


function App() {
  

  return (
    <div>
      <Header />
      <MainVideo 
        videoList={videoList}
        />
    </div>
  );
}

export default App;
