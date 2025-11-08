import Mood from "./Mood.jsx";
import { useEffect, useState } from "react";
import './App.css';

const jsonSongData = [
  { id: 1, title: "Blinding Lights", mood: "happy" },
  { id: 2, title: "Banana Pancakes", mood: "funny" },
  { id: 3, title: "Good Vibrations", mood: "happy" },
  { id: 4, title: "Don't Stop Me Now", mood: "funny" },
  { id: 5, title: "Walking on Sunshine", mood: "happy" },
  { id: 6, title: "Happy Together", mood: "funny" },
  { id: 7, title: "Weightless", mood: "chill" },
  { id: 8, title: "Ocean Eyes", mood: "chill" },
  { id: 9, title: "Eye of the Tiger", mood: "energetic" },
  { id: 10, title: "Thunderstruck", mood: "energetic" }
];

function App() {
  const isLoggedIn = true;

  const [mood, setMood] = useState("happy");
  const [filteredSongs, setFilteredSongs] = useState(() =>
    jsonSongData.filter((s) => s.mood.toLowerCase() === mood.toLowerCase())
  );

  useEffect(() => {
    setFilteredSongs(
      jsonSongData.filter((song) => song.mood.toLowerCase() === mood.toLowerCase())
    );
  }, [mood]);

  function handleMood(newMood) {
    setMood(newMood);
  }

  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="app">
      <h1>🎵 Playlist</h1>
      
      {isLoggedIn && <Mood mood={mood} />}
      
      <div className="mood-buttons">
        <button onClick={() => handleMood("happy")}>😊 Happy</button>
        <button onClick={() => handleMood("funny")}>😂 Funny</button>
        <button onClick={() => handleMood("chill")}>😌 Chill</button>
        <button onClick={() => handleMood("energetic")}>⚡ Energetic</button>
      </div>
      
      <div className="songs">
        <h3>Your {mood} playlist</h3>
        <ul>
          {filteredSongs.map((song) => (
            <li key={song.id}>🎵 {song.title}</li>
          ))}
        </ul>
      </div>

      <div className="counter">
        <span>Played: {count}</span>
        <button onClick={handleCount}>▶️ Play</button>
      </div>
    </div>
  );
}

export default App;
